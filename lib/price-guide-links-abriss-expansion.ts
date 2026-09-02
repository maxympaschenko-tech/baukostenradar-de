import {
  getPriceGuideLink as getKitchenPriceGuideLink,
  getServiceGuideLink as getKitchenServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links-kitchen-expansion";

export type { PriceGuideLink } from "./price-guide-links-kitchen-expansion";

const abrissExpansionItems: Record<string, PriceGuideLink> = {
  "hausabriss-standard-je-quadratmeter": { href: "/ratgeber/haus-abreissen-kosten", title: "Hausabriss pro m²: Kosten 2026", cta: "Hausabriss-Ratgeber öffnen" },
  "hausabriss-mit-keller": { href: "/ratgeber/haus-abreissen-kosten", title: "Hausabriss mit Keller: Kosten 2026", cta: "Hausabriss-Ratgeber öffnen" },
  "hausabriss-mit-schadstoffbelastung": { href: "/ratgeber/haus-abreissen-kosten", title: "Hausabriss mit Schadstoffen: Kosten 2026", cta: "Hausabriss-Ratgeber öffnen" },
  "entkernung-und-vorarbeiten": { href: "/ratgeber/innenabbruch-einfamilienhaus-kosten", title: "Entkernung und Vorarbeiten: Kosten 2026", cta: "Innenabbruch-Ratgeber öffnen" },
  "schadstoffgutachten-vor-abriss": { href: "/ratgeber/haus-abreissen-kosten", title: "Schadstoffgutachten vor Abriss: Kosten 2026", cta: "Hausabriss-Ratgeber öffnen" },
  "abrissgenehmigung-oder-anzeige": { href: "/ratgeber/haus-abreissen-kosten", title: "Abrissgenehmigung oder Anzeige: Kosten 2026", cta: "Hausabriss-Ratgeber öffnen" },
  "bauschutt-entsorgen": { href: "/ratgeber/bauschutt-entsorgen-kosten", title: "Bauschutt entsorgen: Kosten 2026", cta: "Entsorgungs-Ratgeber öffnen" },
  "bauschuttcontainer-5-kubikmeter-komplett": { href: "/ratgeber/bauschutt-entsorgen-kosten", title: "5-m³-Bauschuttcontainer: Kosten 2026", cta: "Entsorgungs-Ratgeber öffnen" },
  "baumischabfallcontainer-5-kubikmeter-komplett": { href: "/ratgeber/bauschutt-entsorgen-kosten", title: "5-m³-Baumischabfallcontainer: Kosten 2026", cta: "Entsorgungs-Ratgeber öffnen" },
  "bauabfall-kombisack-1-kubikmeter": { href: "/ratgeber/bauschutt-entsorgen-kosten", title: "1-m³-Bauabfall-Kombisack: Kosten 2026", cta: "Entsorgungs-Ratgeber öffnen" },
};

const perimeterItems = new Set([
  "perimeterdaemmung-keller-komplett",
  "xps-perimeterdaemmung-keller",
  "schaumglas-perimeterdaemmung-keller",
  "kleber-und-befestigung-perimeterdaemmung",
  "verlegung-perimeterdaemmung-fachbetrieb",
]);

const carportFoundationItems = new Set([
  "carport-fundamente-komplett",
  "carport-punktfundament",
]);

const pooltechnikItems = new Set([
  "filteranlage",
  "poolpumpe",
  "verrohrung-skimmer-und-duesen",
]);

const kellerdeckendaemmungItems = new Set([
  "kellerdeckendaemmung-inkl-montage",
  "kellerdeckendaemmung-von-oben-mit-bodenbelag",
  "kellerdecke-per-einblasdaemmung",
  "kellerdecke-per-spruehdaemmung",
]);

const wdvsItems = new Set([
  "fassadendaemmung-wdvs",
  "wdvs-mit-eps-styropor",
  "wdvs-mit-mineralwolle",
  "wdvs-mit-holzfaser",
]);

const sockeldaemmungItems = new Set([
  "sockeldaemmung",
  "sockeldaemmung-einfamilienhaus-komplett",
]);

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  return getKitchenServiceGuideLink(serviceSlug);
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  if (options.serviceSlug === "tueren" && options.itemSlug === "tuerblatt-tauschen-montage") {
    return {
      href: "/ratgeber/tuerblatt-tauschen-kosten",
      title: "Türblatt tauschen: Kosten 2026",
      cta: "Türblatt-Ratgeber öffnen",
    };
  }

  if (options.serviceSlug === "kellerbau" && perimeterItems.has(options.itemSlug)) {
    return {
      href: "/ratgeber/perimeterdaemmung-keller-kosten",
      title: `${options.itemName}: Kosten 2026`,
      cta: "Perimeterdämmung-Ratgeber öffnen",
    };
  }

  if (options.serviceSlug === "carport" && carportFoundationItems.has(options.itemSlug)) {
    return {
      href: "/ratgeber/carport-fundament-kosten",
      title: `${options.itemName}: Kosten 2026`,
      cta: "Carport-Fundament-Ratgeber öffnen",
    };
  }

  if (options.serviceSlug === "poolbau" && pooltechnikItems.has(options.itemSlug)) {
    return {
      href: "/ratgeber/pooltechnik-kosten",
      title: `${options.itemName}: Kosten 2026`,
      cta: "Pooltechnik-Ratgeber öffnen",
    };
  }

  if (options.serviceSlug === "daemmung" && kellerdeckendaemmungItems.has(options.itemSlug)) {
    return {
      href: "/ratgeber/daemmung-kellerdecke-kosten-pro-qm",
      title: `${options.itemName}: Kosten 2026`,
      cta: "Kellerdecken-Ratgeber öffnen",
    };
  }

  if (options.serviceSlug === "daemmung" && wdvsItems.has(options.itemSlug)) {
    return {
      href: "/ratgeber/fassadendaemmung-kosten-pro-qm",
      title: `${options.itemName}: Kosten 2026`,
      cta: "WDVS-Ratgeber öffnen",
    };
  }

  if (options.serviceSlug === "daemmung" && sockeldaemmungItems.has(options.itemSlug)) {
    return {
      href: "/ratgeber/sockeldaemmung-kosten",
      title: `${options.itemName}: Kosten 2026`,
      cta: "Sockeldämmung-Ratgeber öffnen",
    };
  }

  if (options.serviceSlug === "abriss-entsorgung" && abrissExpansionItems[options.itemSlug]) {
    return abrissExpansionItems[options.itemSlug];
  }
  return getKitchenPriceGuideLink(options);
}
