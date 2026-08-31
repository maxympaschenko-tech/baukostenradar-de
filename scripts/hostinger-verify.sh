#!/usr/bin/env bash
set -euo pipefail

_hostinger_verify_startup_jitter() {
  if [[ "${GITHUB_ACTIONS:-false}" != "true" ]]; then
    return 0
  fi

  local marker="${RUNNER_TEMP:-/tmp}/baukostenradar-hostinger-jitter-${GITHUB_RUN_ID:-local}-${GITHUB_RUN_ATTEMPT:-1}"
  if [[ -e "$marker" ]]; then
    return 0
  fi

  # Dozens of workflow_run verifiers are released by the same production gate.
  # Spread their first live request over three minutes so Hostinger is not hit
  # by an artificial CI connection storm. The marker keeps later fetches in the
  # same workflow run from sleeping again.
  local delay=$((RANDOM % 181))
  echo "Hostinger verifier startup jitter: ${delay}s"
  sleep "$delay"
  : > "$marker"
}

fetch_hostinger() {
  local url="$1"
  local output="$2"
  local attempts="${3:-6}"
  local base_url separator attempt cache_bust

  _hostinger_verify_startup_jitter

  base_url="$url"
  separator='?'
  [[ "$base_url" == *'?'* ]] && separator='&'

  for ((attempt=1; attempt<=attempts; attempt++)); do
    cache_bust="${GITHUB_RUN_ID:-local}-${GITHUB_RUN_ATTEMPT:-1}-${attempt}-${RANDOM}"
    if curl -sS --fail \
      --retry 2 --retry-delay 2 --retry-all-errors \
      --connect-timeout 15 --max-time 45 \
      -H 'Cache-Control: no-cache, no-store, max-age=0' \
      -H 'Pragma: no-cache' \
      -H 'User-Agent: BauKostenRadar-Production-Verify/1.0' \
      "${base_url}${separator}ci_verify=${cache_bust}" \
      -o "$output"; then
      return 0
    fi

    if (( attempt == attempts )); then
      echo "Failed to fetch ${url} after ${attempts} attempts" >&2
      return 1
    fi

    sleep $((3 + attempt * 2))
  done
}
