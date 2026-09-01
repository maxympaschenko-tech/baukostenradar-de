import {
  getPriceGuideLink as getElektrikerPriceGuideLink,
  getServiceGuideLink as getElektrikerServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links-elektriker";

export type { PriceGuideLink } from "./price-guide-links-elektriker";

const bodenItems: Record<string, PriceGuideLink> = {
  "bodenleger-stundensatz": {
    href: "/ratgeber/bodenleger-stundensatz",
    title: "Bodenleger Stundensatz 2026",
    cta: "Bodenleger-Stundensatz öffnen",
  },
  "klick-vinyl-verlegen": {
    href: "/ratgeber/klick-vinyl-verlegen-kosten-pro-qm",
    title: "Klick-Vinyl verlegen: Arbeitskosten pro m²",
    cta: "Klick-Vinyl-Ratgeber öffnen",
  },
  "klebe-vinyl-verlegen": {
    href: "/ratgeber/klebe-vinyl-verlegen-kosten-pro-qm",
    title: "Klebe-Vinyl verlegen: Arbeitskosten pro m²",
    cta: "Klebe-Vinyl-Ratgeber öffnen",
  },
  "pvc-laminat-verlegen": {
    href: "/ratgeber/laminat-verlegen-kosten-pro-qm",
    title: "Laminat und PVC verlegen: Kosten pro m²",
    cta: "Laminat-Ratgeber öffnen",
  },
  "mehrschichtparkett-schwimmend-verlegen": {
    href: "/ratgeber/parkett-verlegen-kosten-pro-qm",
    title: "Parkett verlegen: Kosten pro m²",
    cta: "Parkett-Ratgeber öffnen",
  },
  "mehrschichtparkett-vollflaechig-verklebt": {
    href: "/ratgeber/parkett-verlegen-kosten-pro-qm",
    title: "Parkett verkleben: Kosten pro m²",
    cta: "Parkett-Ratgeber öffnen",
  },
  "alten-bodenbelag-entfernen-entsorgen": {
    href: "/ratgeber/bodenbelag-entfernen-kosten-pro-qm",
    title: "Alten Bodenbelag entfernen und entsorgen",
    cta: "Bodenrückbau-Ratgeber öffnen",
  },
  "untergrund-vorbereiten-ausgleichen": {
    href: "/ratgeber/boden-vorbereiten-ausgleichen-kosten-pro-qm",
    title: "Boden vorbereiten und ausgleichen",
    cta: "Untergrund-Ratgeber öffnen",
  },
};

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  if (serviceSlug === "bodenleger") {
    return {
      href: "/ratgeber/bodenleger-kosten-pro-qm",
      title: "Bodenleger Kosten 2026: Beläge, Rückbau und Vorbereitung",
      cta: "Bodenleger-Ratgeber öffnen",
    };
  }

  return getElektrikerServiceGuideLink(serviceSlug);
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  if (options.serviceSlug === "bodenleger" && bodenItems[options.itemSlug]) {
    return bodenItems[options.itemSlug];
  }

  return getElektrikerPriceGuideLink(options);
}
