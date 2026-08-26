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
NEXT_PUBLIC_SITE_URL=https://example.de
```

## Deployment

All code changes are maintained through GitHub. A CI build runs on pushes and pull requests. Production deployment will be connected to the existing hosting after its Node.js deployment method and target path are confirmed.

## Data note

The first calculator uses an explicit MVP pricing model so the product flow can be built and tested. Before public launch, the coefficients will be replaced or calibrated with documented German market data and a visible methodology page.
