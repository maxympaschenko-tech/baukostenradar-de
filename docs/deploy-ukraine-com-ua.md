# Deploy to Ukraine.com.ua Business Hosting

The repository is configured for automatic deployment of the Next.js standalone bundle to Ukraine.com.ua Business Hosting.

## Hosting configuration

In Ukraine.com.ua for the target site:

- Web server: Node.js
- Node.js version: 24
- Traffic proxying: by IP address
- Application root: the directory matching `REMOTE_PATH`
- Startup command: `npm start`
- Disable automatic addition of `--host` and `--port` parameters if the panel offers this option

Ukraine.com.ua injects `HOST` and `PORT` environment variables. The deployed production package maps them to Next.js standalone server variables `HOSTNAME` and `PORT`.

## GitHub Actions secrets

Repository: `maxympaschenko-tech/baukostenradar-de`

Open `Settings -> Secrets and variables -> Actions` and add:

- `REMOTE_HOST` - SSH host from Ukraine.com.ua
- `REMOTE_USER` - SSH login
- `REMOTE_KEY` - private key for the dedicated deployment SSH key
- `REMOTE_PATH` - absolute path to the Node.js application directory on hosting
- `ADMTOOLS_TOKEN` - adm.tools API token
- `ADMTOOLS_HOST_ID` - Ukraine.com.ua host/site ID used by the Node.js reload API

Do not commit any of these values to the repository.

## GitHub variable

Under `Settings -> Secrets and variables -> Actions -> Variables`, add:

- `NEXT_PUBLIC_SITE_URL` - production URL, for example `https://example.de`

## Deployment flow

Every push to `main` runs:

1. Install dependencies on GitHub Actions.
2. TypeScript validation.
3. Next.js production build.
4. Assemble `.next/standalone` with static assets.
5. Upload the standalone production bundle over SSH/rsync.
6. Call the adm.tools Node.js reload API.

The deployment job safely skips the remote upload until the four required SSH secrets are present.

## Important

`rsync --delete` is used inside `REMOTE_PATH`. Set `REMOTE_PATH` only to the dedicated application directory because files not present in the production bundle are removed from that directory.
