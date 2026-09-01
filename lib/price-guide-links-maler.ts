import {
  getPriceGuideLink as getGartenPriceGuideLink,
  getServiceGuideLink as getGartenServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links-garten";

export type { PriceGuideLink } from "./price-guide-links-garten";

const malerItems: Record<string, PriceGuideLink> = {
  "maler-stundensatz": {
    href: "/ratgeber/maler-stundensatz",
    title: "Maler Stundensatz 2026",
    cta: "Maler-Stundensatz-Ratgeber öffnen",
  },
  "alte-tapeten-entfernen": {
    href: "/ratgeber/tapeten-entfernen-kosten-pro-qm",
    title: "Alte Tapeten entfernen: Kosten pro m² 2026",
    cta: "Tapeten-entfernen-Ratgeber öffnen",
  },
  "vlies-oder-mustertapete-tapezieren": {
    href: "/ratgeber/tapezieren-kosten-pro-qm",
    title: "Vlies- und Mustertapete tapezieren: Kosten 2026",
    cta: "Tapezier-Ratgeber öffnen",
  },
  "innentuer-inkl-zarge-lackieren": {
    href: "/ratgeber/innentuer-lackieren-kosten",
    title: "Innentür inklusive Zarge lackieren: Kosten 2026",
    cta: "Innentür-Lackier-Ratgeber öffnen",
  },
  "fensterrahmen-lackieren": {
    href: "/ratgeber/fensterrahmen-lackieren-kosten",
    title: "Fensterrahmen lackieren: Kosten 2026",
    cta: "Fensterrahmen-Ratgeber öffnen",
  },
};

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  if (serviceSlug === "maler") {
    return {
      href: "/ratgeber/maler-kosten-pro-qm",
      title: "Malerarbeiten: Kosten 2026 nach Fläche, Stunde und Bauteil",
      cta: "Maler-Ratgeber öffnen",
    };
  }

  return getGartenServiceGuideLink(serviceSlug);
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  if (options.serviceSlug === "maler" && malerItems[options.itemSlug]) {
    return malerItems[options.itemSlug];
  }

  return getGartenPriceGuideLink(options);
}
