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

## Active production data registries

Application code intentionally imports stable aliases such as `@/lib/pricing` and `@/lib/all-guides`. Their production targets are configured in `tsconfig.json` and should be treated as the source of truth instead of importing an older catalog layer directly.

Current production entry points:

- `@/lib/pricing` → `lib/catalog-current.ts`
- `@/lib/all-guides` → `lib/all-guides-live.ts`
- `@/lib/price-guide-links` → the active price-to-guide mapping layer from `tsconfig.json`
- `@/lib/guide-groups` → the active Ratgeber grouping layer from `tsconfig.json`
- `@/lib/guide-silo` → the active Ratgeber/service silo layer from `tsconfig.json`

The `catalog-*.ts` and `all-guides-*.ts` files form cumulative compatibility layers. Do not replace the aliases with a lower-level module unless the complete downstream catalog has been checked first.

`lib/catalog-current.ts` is the small final correction layer for current pricing semantics without rewriting the historical catalog chain. `lib/all-guides-live.ts` is the final active Ratgeber registry: it removes redirect-only legacy slugs and preserves the first registered guide when older source modules contain the same slug more than once.

The manual guide-integrity checker reads the active `@/lib/all-guides` alias from `tsconfig.json`:

```bash
node scripts/verify-guide-link-integrity.mjs
node scripts/verify-guide-link-integrity.mjs --duplicates-only
```

## Deployment

GitHub is the source of truth for production. The `main` branch is connected directly to the BauKostenRadar Node.js Web App on Hostinger. Hostinger automatically builds and deploys the Next.js application after changes are pushed to `main`.

Production domain:

```text
https://baukostenradar.de
```

Production environment:

- Hostinger Node.js Web App
- Node.js 24.x
- Next.js production build
- Hostinger SSL and CDN
- Automatic deployment from GitHub `main`
- no GitHub Actions in the production deployment path

No manual file uploads are part of the normal deployment flow.

## Data note

The first calculator uses a structured pricing model and documented German market references. The price dataset and methodology will be expanded as additional trades and regions are added.
