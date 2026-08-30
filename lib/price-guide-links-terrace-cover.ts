import {
  getPriceGuideLink as getTerracePriceGuideLink,
  getServiceGuideLink as getTerraceServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links-terrace";

export type { PriceGuideLink } from "./price-guide-links-terrace";

const serviceGuides: Record<string, PriceGuideLink> = {
  terrassenueberdachung: {
    href: "/ratgeber/terrassenueberdachung-kosten",
    title: "Terrassenüberdachung: Kosten 2026",
    cta: "Überdachungs-Ratgeber öffnen",
  },
};

const itemGuides: Record<string, PriceGuideLink> = {
  "terrassenueberdachung:terrassenueberdachung-komplett-mit-montage-und-fundament": {
    href: "/ratgeber/terrassenueberdachung-kosten",
    title: "Terrassenüberdachung komplett: Kosten 2026",
    cta: "Überdachungs-Ratgeber öffnen",
  },
  "terrassenueberdachung:terrassenueberdachung-guenstiges-segment-mit-montage": {
    href: "/ratgeber/terrassenueberdachung-kosten",
    title: "Günstige Terrassenüberdachung: Kosten 2026",
    cta: "Überdachungs-Ratgeber öffnen",
  },
  "terrassenueberdachung:design-terrassenueberdachung-oder-massanfertigung": {
    href: "/ratgeber/terrassenueberdachung-kosten",
    title: "Design-Terrassenüberdachung: Kosten 2026",
    cta: "Überdachungs-Ratgeber öffnen",
  },
  "terrassenueberdachung:terrassendach-ohne-montage": {
    href: "/ratgeber/terrassenueberdachung-kosten",
    title: "Terrassendach ohne Montage: Kosten 2026",
    cta: "Überdachungs-Ratgeber öffnen",
  },
  "terrassenueberdachung:lieferung-terrassenueberdachung": {
    href: "/ratgeber/terrassenueberdachung-kosten",
    title: "Terrassendach Lieferung: Kosten 2026",
    cta: "Überdachungs-Ratgeber öffnen",
  },
  "terrassenueberdachung:montage-terrassenueberdachung": {
    href: "/ratgeber/terrassenueberdachung-kosten",
    title: "Terrassenüberdachung Montage: Kosten 2026",
    cta: "Überdachungs-Ratgeber öffnen",
  },
  "terrassenueberdachung:punktfundament-terrassendach": {
    href: "/ratgeber/terrassenueberdachung-kosten",
    title: "Punktfundament für Terrassendach: Kosten 2026",
    cta: "Überdachungs-Ratgeber öffnen",
  },
  "terrassenueberdachung:holz-terrassenueberdachung-mit-kunststoff-4-x-3-m-wandmontage": {
    href: "/ratgeber/holz-terrassenueberdachung-kosten",
    title: "Holz-Terrassendach mit Kunststoff: Kosten 2026",
    cta: "Holzdach-Ratgeber öffnen",
  },
  "terrassenueberdachung:holz-terrassenueberdachung-mit-sicherheitsglas-4-x-3-m-wandmontage": {
    href: "/ratgeber/holz-terrassenueberdachung-kosten",
    title: "Holz-Terrassendach mit Glas: Kosten 2026",
    cta: "Holzdach-Ratgeber öffnen",
  },
  "terrassenueberdachung:holz-terrassenueberdachung-mit-dachziegeln-4-x-3-m-wandmontage": {
    href: "/ratgeber/holz-terrassenueberdachung-kosten",
    title: "Holz-Terrassendach mit Dachziegeln: Kosten 2026",
    cta: "Holzdach-Ratgeber öffnen",
  },
  "terrassenueberdachung:aluminium-terrassenueberdachung-mit-kunststoff-4-x-3-m-wandmontage": {
    href: "/ratgeber/alu-terrassenueberdachung-kosten",
    title: "Alu-Terrassendach mit Kunststoff: Kosten 2026",
    cta: "Alu-Ratgeber öffnen",
  },
  "terrassenueberdachung:aluminium-terrassenueberdachung-mit-sicherheitsglas-4-x-3-m-wandmontage": {
    href: "/ratgeber/alu-terrassenueberdachung-kosten",
    title: "Alu-Terrassendach mit Glas: Kosten 2026",
    cta: "Alu-Ratgeber öffnen",
  },
  "terrassenueberdachung:aluminium-lamellendach-4-x-3-m-wandmontage": {
    href: "/ratgeber/lamellendach-pergola-kosten",
    title: "Alu-Lamellendach 4 × 3 m: Kosten 2026",
    cta: "Lamellendach-Ratgeber öffnen",
  },
  "terrassenueberdachung:vsg-klarglas-terrassendach": {
    href: "/ratgeber/glasdach-terrasse-kosten",
    title: "VSG-Klarglas Terrassendach: Kosten 2026",
    cta: "Glasdach-Ratgeber öffnen",
  },
  "terrassenueberdachung:vsg-mattglas-terrassendach": {
    href: "/ratgeber/glasdach-terrasse-kosten",
    title: "VSG-Mattglas Terrassendach: Kosten 2026",
    cta: "Glasdach-Ratgeber öffnen",
  },
  "terrassenueberdachung:acrylglas-terrassendach": {
    href: "/ratgeber/glasdach-terrasse-kosten",
    title: "Acrylglas Terrassendach: Kosten 2026",
    cta: "Glasdach-Ratgeber öffnen",
  },
  "terrassenueberdachung:doppelstegplatte-terrassendach": {
    href: "/ratgeber/glasdach-terrasse-kosten",
    title: "Doppelstegplatten Terrassendach: Kosten 2026",
    cta: "Glasdach-Ratgeber öffnen",
  },
  "terrassenueberdachung:terrassenueberdachung-guenstiges-preissegment": {
    href: "/ratgeber/terrassenueberdachung-kosten",
    title: "Terrassenüberdachung pro m²: günstiges Segment 2026",
    cta: "Überdachungs-Ratgeber öffnen",
  },
  "terrassenueberdachung:design-terrassendach-hochwertig": {
    href: "/ratgeber/terrassenueberdachung-kosten",
    title: "Design-Terrassendach pro m²: Kosten 2026",
    cta: "Überdachungs-Ratgeber öffnen",
  },
  "terrassenueberdachung:lamellenpergola-bausatz-mit-verstellbarem-dach": {
    href: "/ratgeber/lamellendach-pergola-kosten",
    title: "Lamellenpergola Bausatz: Kosten 2026",
    cta: "Lamellendach-Ratgeber öffnen",
  },
  "terrassenueberdachung:pergola-massanfertigung-fachbetrieb": {
    href: "/ratgeber/lamellendach-pergola-kosten",
    title: "Pergola Maßanfertigung: Kosten 2026",
    cta: "Lamellendach-Ratgeber öffnen",
  },
  "terrassenueberdachung:pergola-montage-fachbetrieb": {
    href: "/ratgeber/lamellendach-pergola-kosten",
    title: "Pergola Montage: Kosten 2026",
    cta: "Lamellendach-Ratgeber öffnen",
  },
};

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  return serviceGuides[serviceSlug] ?? getTerraceServiceGuideLink(serviceSlug);
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  return itemGuides[`${options.serviceSlug}:${options.itemSlug}`] ?? getTerracePriceGuideLink(options);
}
