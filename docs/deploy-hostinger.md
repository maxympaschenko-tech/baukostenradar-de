# Production deployment on Hostinger

BauKostenRadar production runs as a Hostinger Node.js Web App in the German hosting location.

## Source of truth

- Repository: `maxympaschenko-tech/baukostenradar-de`
- Branch: `main`
- Framework: Next.js
- Node.js: 24.x
- Production domain: `https://baukostenradar.de`
- Canonical host: apex domain; `www` redirects to the apex domain

Hostinger is connected directly to GitHub and automatically builds and deploys changes pushed to `main`.

## Required environment

```env
NEXT_PUBLIC_SITE_URL=https://baukostenradar.de
```

`NEXT_PUBLIC_GIT_SHA` does not need to be maintained manually. During the Next.js build, `next.config.ts` resolves the checked-out Git revision and exposes it to `/api/version`. An explicit environment variable remains supported as an override.

## Production readiness

GitHub Actions workflow `Hostinger production ready` runs after CI succeeds and waits until `/api/version` reports the expected commit or a newer descendant commit. Production verification workflows should depend on this readiness workflow instead of assuming that GitHub CI completion means the Hostinger deployment is already live.

## DNS and TLS

DNS is managed through Hostinger nameservers. Hostinger provides TLS and CDN for the production site.

## Rollback

Use Hostinger deployment history to redeploy a previously known-good application revision when an application rollback is required. GitHub `main` remains the source of truth, so a permanent rollback should also be represented by a Git revert or follow-up fix.

## Legacy hosting

The former Ukraine.com.ua deployment workflow and deployment guide were retired after migration to Hostinger. Old server files may temporarily remain as a backup, but they are not part of the production deployment path.
