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

  # Automatic post-deploy verification is intentionally kept small. Retain a
  # short jitter for manually dispatched legacy verifiers so several manual
  # checks do not hit Hostinger in the same second.
  local delay=$((RANDOM % 31))
  echo "Hostinger verifier startup jitter: ${delay}s"
  sleep "$delay"
  : > "$marker"
}

_hostinger_verify_url() {
  local url="$1"
  local separator='?'
  local cache_key="${HOSTINGER_VERIFY_CACHE_KEY:-${GITHUB_SHA:-local}}"
  [[ "$url" == *'?'* ]] && separator='&'

  # One deterministic cache key per commit keeps a verification fresh after a
  # deploy while allowing repeated checks of the same URL to share the reverse
  # proxy/CDN cache. The previous per-request random key multiplied backend
  # traffic across dozens of workflow_run jobs.
  printf '%s%sci_verify=%s' "$url" "$separator" "$cache_key"
}

fetch_hostinger() {
  local url="$1"
  local output="$2"
  local attempts="${3:-6}"
  local attempt request_url

  _hostinger_verify_startup_jitter

  for ((attempt=1; attempt<=attempts; attempt++)); do
    request_url="$(_hostinger_verify_url "$url")"
    if curl -sS --fail \
      --retry 2 --retry-delay 2 --retry-all-errors \
      --connect-timeout 15 --max-time 45 \
      -H 'User-Agent: BauKostenRadar-Production-Verify/1.1' \
      "$request_url" \
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

fetch_hostinger_redirect() {
  local url="$1"
  local output="$2"
  local attempts="${3:-6}"
  local attempt request_url result status

  _hostinger_verify_startup_jitter

  for ((attempt=1; attempt<=attempts; attempt++)); do
    request_url="$(_hostinger_verify_url "$url")"
    if result="$(curl -sS \
      --connect-timeout 15 --max-time 45 \
      -H 'User-Agent: BauKostenRadar-Production-Verify/1.1' \
      -o /dev/null -w '%{http_code} %{redirect_url}' \
      "$request_url")"; then
      status="${result%% *}"
      if [[ "$status" != '000' && "$status" != '403' && "$status" != '408' && "$status" != '429' && ! "$status" =~ ^5 ]]; then
        printf '%s\n' "$result" > "$output"
        return 0
      fi
    fi

    if (( attempt == attempts )); then
      echo "Failed to probe redirect ${url} after ${attempts} attempts" >&2
      return 1
    fi

    sleep $((3 + attempt * 2))
  done
}
