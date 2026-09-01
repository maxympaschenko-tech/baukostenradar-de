import {
  getPriceGuideLink as getCurrentPriceGuideLink,
  getServiceGuideLink as getCurrentServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links-current";

export type { PriceGuideLink } from "./price-guide-links-current";

const kitchenExpansionItems: Record<string, PriceGuideLink> = {
  "arbeitsplatte-gerade-bis-3-m-montieren": {
    href: "/ratgeber/kuechenarbeitsplatte-kosten",
    title: "Arbeitsplatte bis 3 m montieren: Kosten 2026",
    cta: "Arbeitsplatten-Ratgeber öffnen",
  },
  "arbeitsplatte-l-kueche-mit-eckverbindung-montieren": {
    href: "/ratgeber/kuechenarbeitsplatte-kosten",
    title: "Arbeitsplatte für L-Küche montieren: Kosten 2026",
    cta: "Arbeitsplatten-Ratgeber öffnen",
  },
  "ausschnitt-fuer-spuele-oder-kochfeld": {
    href: "/ratgeber/kuechenarbeitsplatte-kosten",
    title: "Ausschnitt für Spüle oder Kochfeld: Kosten 2026",
    cta: "Arbeitsplatten-Ratgeber öffnen",
  },
  "alte-arbeitsplatte-demontieren-und-entsorgen": {
    href: "/ratgeber/kuechenarbeitsplatte-kosten",
    title: "Alte Arbeitsplatte demontieren: Kosten 2026",
    cta: "Arbeitsplatten-Ratgeber öffnen",
  },
  "naturstein-oder-quarzkomposit-arbeitsplatte-inkl-montage": {
    href: "/ratgeber/kuechenarbeitsplatte-kosten",
    title: "Naturstein- oder Quarzkomposit-Arbeitsplatte: Kosten 2026",
    cta: "Arbeitsplatten-Ratgeber öffnen",
  },
  "einstiegs-kuechenzeile-mit-geraeten-ohne-montage": {
    href: "/ratgeber/einbaukueche-kosten",
    title: "Einstiegs-Küchenzeile mit Geräten: Kosten 2026",
    cta: "Einbauküchen-Ratgeber öffnen",
  },
};

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  return getCurrentServiceGuideLink(serviceSlug);
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  if (options.serviceSlug === "kueche" && kitchenExpansionItems[options.itemSlug]) {
    return kitchenExpansionItems[options.itemSlug];
  }
  return getCurrentPriceGuideLink(options);
}
