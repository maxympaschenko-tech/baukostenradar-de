import {
  getPriceGuideLink as getBasePriceGuideLink,
  getServiceGuideLink as getBaseServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links";

export type { PriceGuideLink } from "./price-guide-links";

const serviceGuideOverrides: Record<string, PriceGuideLink> = {
  kellerabdichtung: {
    href: "/ratgeber/kellerabdichtung-aussen-oder-innen-kosten",
    title: "Keller abdichten: Außen- und Innenabdichtung vergleichen",
    cta: "Kellerabdichtungs-Ratgeber öffnen",
  },
  "abriss-entsorgung": {
    href: "/ratgeber/haus-abreissen-kosten",
    title: "Haus abreißen: Kosten und Entsorgung richtig einordnen",
    cta: "Abriss-Ratgeber öffnen",
  },
};

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  return serviceGuideOverrides[serviceSlug] ?? getBaseServiceGuideLink(serviceSlug);
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  const baseLink = getBasePriceGuideLink(options);
  if (baseLink.href !== "/ratgeber/handwerker-stundensaetze") return baseLink;
  return serviceGuideOverrides[options.serviceSlug] ?? baseLink;
}
