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

## Deployment flow

1. Make the production change directly on `main`.
2. Push/commit the change to `main`.
3. Hostinger detects the new revision, builds the Next.js application and deploys it.
4. Verify the live site, `/robots.txt`, `/sitemap.xml` and `/api/version` after Hostinger has deployed the revision.

GitHub Actions are not part of the BauKostenRadar production deployment path.

## Required environment

```env
NEXT_PUBLIC_SITE_URL=https://baukostenradar.de
```

`NEXT_PUBLIC_GIT_SHA` does not need to be maintained manually. During the Next.js build, `next.config.ts` resolves the checked-out Git revision and exposes it to `/api/version`. An explicit environment variable remains supported as an override.

## DNS and TLS

DNS is managed through Hostinger nameservers. Hostinger provides TLS and CDN for the production site.

## Rollback

Use Hostinger deployment history to redeploy a previously known-good application revision when an application rollback is required. GitHub `main` remains the source of truth, so a permanent rollback should also be represented by a Git revert or follow-up fix.

## Legacy hosting

The former Ukraine.com.ua deployment path was retired after migration to Hostinger. Old server files may temporarily remain as a backup, but they are not part of the production deployment path.
