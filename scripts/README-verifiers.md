# Production verifier helpers

- `hostinger-verify.sh` fetches live pages with cache-busting, no-cache headers, retry-all-errors and backoff.
- `check-service-count.py` protects historical minimum catalog sizes without hard-coding an exact current count.
- `check-metadata-consistency.py` ensures meta, Open Graph and Twitter descriptions stay aligned.
