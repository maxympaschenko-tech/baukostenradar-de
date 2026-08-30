import {
  getPriceGuideLink as getFencePriceGuideLink,
  getServiceGuideLink as getFenceServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links-fence";

export type { PriceGuideLink } from "./price-guide-links-fence";

const serviceGuides: Record<string, PriceGuideLink> = {
  poolbau: {
    href: "/ratgeber/pool-bauen-kosten",
    title: "Pool bauen lassen: Kosten 2026",
    cta: "Poolbau-Ratgeber öffnen",
  },
};

const itemGuides: Record<string, PriceGuideLink> = {
  "poolbau:pool-bauen-lassen-gesamtprojekt": {
    href: "/ratgeber/pool-bauen-kosten",
    title: "Pool bauen lassen: Gesamtkosten 2026",
    cta: "Poolbau-Ratgeber öffnen",
  },
  "poolbau:materialkosten-poolbau": {
    href: "/ratgeber/pool-bauen-kosten",
    title: "Poolbau: Materialkosten 2026",
    cta: "Poolbau-Ratgeber öffnen",
  },
  "poolbau:arbeitskosten-poolbauer": {
    href: "/ratgeber/pool-bauen-kosten",
    title: "Poolbauer: Arbeitskosten 2026",
    cta: "Poolbau-Ratgeber öffnen",
  },
  "poolbau:erdarbeiten-mit-abtransport": {
    href: "/ratgeber/pool-erdarbeiten-kosten",
    title: "Pool-Erdarbeiten: Aushub und Abtransport 2026",
    cta: "Erdarbeiten-Ratgeber öffnen",
  },
  "poolbau:stahlwandpool-freistehend": {
    href: "/ratgeber/pool-bauen-kosten",
    title: "Stahlwandpool freistehend: Kosten 2026",
    cta: "Poolbau-Ratgeber öffnen",
  },
  "poolbau:stahlwandpool-teilversenkt": {
    href: "/ratgeber/pool-bauen-kosten",
    title: "Stahlwandpool teilversenkt: Kosten 2026",
    cta: "Poolbau-Ratgeber öffnen",
  },
  "poolbau:gfk-fertigbecken-poolart": {
    href: "/ratgeber/gfk-pool-kosten",
    title: "GFK-Fertigbecken: Kosten 2026",
    cta: "GFK-Pool-Ratgeber öffnen",
  },
  "poolbau:gfk-pool-4-x-3-m-komplett": {
    href: "/ratgeber/gfk-pool-kosten",
    title: "GFK-Pool 4 × 3 m: Kosten 2026",
    cta: "GFK-Pool-Ratgeber öffnen",
  },
  "poolbau:gfk-pool-6-x-3-m-komplett": {
    href: "/ratgeber/gfk-pool-kosten",
    title: "GFK-Pool 6 × 3 m: Kosten 2026",
    cta: "GFK-Pool-Ratgeber öffnen",
  },
  "poolbau:gfk-pool-8-x-4-m-komplett": {
    href: "/ratgeber/gfk-pool-kosten",
    title: "GFK-Pool 8 × 4 m: Kosten 2026",
    cta: "GFK-Pool-Ratgeber öffnen",
  },
  "poolbau:styroporpool-durch-fachfirma": {
    href: "/ratgeber/pool-bauen-kosten",
    title: "Styroporpool durch Fachfirma: Kosten 2026",
    cta: "Poolbau-Ratgeber öffnen",
  },
  "poolbau:betonpool-4-x-3-m-komplett": {
    href: "/ratgeber/betonpool-kosten",
    title: "Betonpool 4 × 3 m: Kosten 2026",
    cta: "Betonpool-Ratgeber öffnen",
  },
  "poolbau:betonpool-6-x-3-m-komplett": {
    href: "/ratgeber/betonpool-kosten",
    title: "Betonpool 6 × 3 m: Kosten 2026",
    cta: "Betonpool-Ratgeber öffnen",
  },
  "poolbau:betonpool-8-x-4-m-komplett": {
    href: "/ratgeber/betonpool-kosten",
    title: "Betonpool 8 × 4 m: Kosten 2026",
    cta: "Betonpool-Ratgeber öffnen",
  },
  "poolbau:edelstahlpool-6-x-3-m": {
    href: "/ratgeber/pool-bauen-kosten",
    title: "Edelstahlpool 6 × 3 m: Kosten 2026",
    cta: "Poolbau-Ratgeber öffnen",
  },
  "poolbau:naturpool-oder-schwimmteich": {
    href: "/ratgeber/pool-bauen-kosten",
    title: "Naturpool und Schwimmteich: Kosten 2026",
    cta: "Poolbau-Ratgeber öffnen",
  },
  "poolbau:filteranlage": {
    href: "/ratgeber/pool-bauen-kosten",
    title: "Pool-Filteranlage: Kosten 2026",
    cta: "Poolbau-Ratgeber öffnen",
  },
  "poolbau:poolpumpe": {
    href: "/ratgeber/pool-bauen-kosten",
    title: "Poolpumpe: Kosten 2026",
    cta: "Poolbau-Ratgeber öffnen",
  },
  "poolbau:verrohrung-skimmer-und-duesen": {
    href: "/ratgeber/pool-bauen-kosten",
    title: "Pool-Verrohrung, Skimmer und Düsen: Kosten 2026",
    cta: "Poolbau-Ratgeber öffnen",
  },
  "poolbau:poolbetrieb-jaehrlich": {
    href: "/ratgeber/pool-betriebskosten",
    title: "Pool-Betriebskosten pro Jahr 2026",
    cta: "Betriebskosten-Ratgeber öffnen",
  },
  "poolbau:poolbetrieb-beheizt-intensiv-jaehrlich": {
    href: "/ratgeber/pool-betriebskosten",
    title: "Beheizter Pool: Betriebskosten pro Jahr 2026",
    cta: "Betriebskosten-Ratgeber öffnen",
  },
};

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  return serviceGuides[serviceSlug] ?? getFenceServiceGuideLink(serviceSlug);
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  return itemGuides[`${options.serviceSlug}:${options.itemSlug}`] ?? getFencePriceGuideLink(options);
}
