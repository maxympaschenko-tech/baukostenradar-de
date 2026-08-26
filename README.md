# BauKostenRadar

German renovation and trades pricing portal built as a full-stack Next.js product.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- CSS Modules/global CSS for the initial UI
- GitHub as the source of truth
- PostgreSQL will be added when the price database moves from the MVP dataset to persisted market data

## Product direction

BauKostenRadar combines:

- renovation and trade price guides
- interactive renovation calculators
- regional pricing models
- labor/material/reserve breakdowns
- SEO landing pages generated from structured data
- future price-history, contractor leads and an admin area

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Environment

Copy `.env.example` to `.env.local` and set the public production URL when known.

```env
NEXT_PUBLIC_SITE_URL=https://baukostenradar.de
```

## Deployment

GitHub is the source of truth for production. Every push to `main` runs TypeScript checks and a Next.js production build, deploys the standalone bundle over SSH to Ukraine.com.ua Business Hosting, restarts the Node.js application through the ADM.TOOLS API, and verifies the public site over HTTPS.

Production path:

```text
/home/uageek/baukostenradar.de/www
```

No manual file uploads are part of the normal deployment flow.

## Data note

The first calculator uses a structured pricing model and documented German market references. The price dataset and methodology will be expanded as additional trades and regions are added.
