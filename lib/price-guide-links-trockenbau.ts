import {
  getPriceGuideLink as getMalerPriceGuideLink,
  getServiceGuideLink as getMalerServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links-maler";

export type { PriceGuideLink } from "./price-guide-links-maler";

const trockenbauItems: Record<string, PriceGuideLink> = {
  "trockenbauer-stundensatz": {
    href: "/ratgeber/trockenbauer-stundensatz",
    title: "Trockenbauer Stundensatz 2026",
    cta: "Trockenbauer-Ratgeber öffnen",
  },
  "trockenbauwand-einfach-inkl-material": {
    href: "/ratgeber/trockenbauwand-kosten-pro-qm",
    title: "Trockenbauwand einfach: Kosten pro m² 2026",
    cta: "Trockenbauwand-Ratgeber öffnen",
  },
  "trennwand-aus-holz": {
    href: "/ratgeber/trennwand-holz-kosten-pro-qm",
    title: "Trennwand aus Holz: Kosten pro m² 2026",
    cta: "Holz-Trennwand-Ratgeber öffnen",
  },
  "vorsatzschale": {
    href: "/ratgeber/vorsatzschale-kosten-pro-qm",
    title: "Vorsatzschale: Kosten pro m² 2026",
    cta: "Vorsatzschalen-Ratgeber öffnen",
  },
  "decke-abhaengen": {
    href: "/ratgeber/decke-abhaengen-kosten-pro-qm",
    title: "Decke abhängen: Kosten pro m² 2026",
    cta: "Trockenbaudecken-Ratgeber öffnen",
  },
  "dachschraege-verkleiden": {
    href: "/ratgeber/dachschraege-verkleiden-kosten-pro-qm",
    title: "Dachschräge verkleiden: Kosten pro m² 2026",
    cta: "Dachschrägen-Ratgeber öffnen",
  },
  "verspachtelung-q3": {
    href: "/ratgeber/verspachtelung-q3-kosten-pro-qm",
    title: "Verspachtelung Q3: Kosten pro m² 2026",
    cta: "Q3-Ratgeber öffnen",
  },
};

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  if (serviceSlug === "trockenbau") {
    return {
      href: "/ratgeber/trockenbau-kosten-pro-qm",
      title: "Trockenbau: Kosten 2026 nach Wand, Decke und Oberfläche",
      cta: "Trockenbau-Ratgeber öffnen",
    };
  }

  return getMalerServiceGuideLink(serviceSlug);
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  if (options.serviceSlug === "trockenbau" && trockenbauItems[options.itemSlug]) {
    return trockenbauItems[options.itemSlug];
  }

  return getMalerPriceGuideLink(options);
}
