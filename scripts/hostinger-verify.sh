#!/usr/bin/env bash
set -euo pipefail

fetch_hostinger() {
  local url="$1"
  local output="$2"
  local attempts="${3:-6}"
  local base_url separator attempt cache_bust

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
