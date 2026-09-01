import {
  getPriceGuideLink as getTrockenbauPriceGuideLink,
  getServiceGuideLink as getTrockenbauServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links-trockenbau";

export type { PriceGuideLink } from "./price-guide-links-trockenbau";

const fliesenItems: Record<string, PriceGuideLink> = {
  "fliese-auf-fliese-verlegen": {
    href: "/ratgeber/fliese-auf-fliese-kosten-pro-qm",
    title: "Fliese auf Fliese verlegen: Kosten 2026",
    cta: "Überfliesen-Ratgeber öffnen",
  },
  "untergrund-ausgleichen": {
    href: "/ratgeber/fliesen-untergrund-ausgleichen-kosten",
    title: "Untergrund für Fliesen ausgleichen: Kosten 2026",
    cta: "Untergrund-Ratgeber öffnen",
  },
  "silikonfugen-ziehen": {
    href: "/ratgeber/silikonfugen-kosten-pro-meter",
    title: "Silikonfugen ziehen: Kosten 2026",
    cta: "Silikonfugen-Ratgeber öffnen",
  },
  "fliesen-sockelleisten-anbringen": {
    href: "/ratgeber/fliesen-sockelleisten-kosten-pro-meter",
    title: "Fliesen-Sockelleisten anbringen: Kosten 2026",
    cta: "Sockelleisten-Ratgeber öffnen",
  },
  "fliesenleger-stundensatz": {
    href: "/ratgeber/fliesenleger-stundensatz",
    title: "Fliesenleger Stundensatz 2026",
    cta: "Fliesenleger-Stundensatz öffnen",
  },
};

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  if (serviceSlug === "fliesenleger") {
    return {
      href: "/ratgeber/fliesenleger-kosten-pro-qm",
      title: "Fliesenleger: Kosten 2026 nach Fläche, Detail und Stunde",
      cta: "Fliesenleger-Ratgeber öffnen",
    };
  }

  return getTrockenbauServiceGuideLink(serviceSlug);
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  if (options.serviceSlug === "fliesenleger" && fliesenItems[options.itemSlug]) {
    return fliesenItems[options.itemSlug];
  }

  return getTrockenbauPriceGuideLink(options);
}
