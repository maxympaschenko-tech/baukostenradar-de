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

const itemGuideOverrides: Record<string, PriceGuideLink> = {
  "tueren:innentuer-mit-zarge-inkl-montage": {
    href: "/ratgeber/innentuer-einbauen-kosten",
    title: "Innentür mit Zarge: Kosten und Montage 2026",
    cta: "Innentür-Ratgeber öffnen",
  },
  "tueren:haustuer-kunststoff-inkl-montage": {
    href: "/ratgeber/haustuer-kunststoff-kosten",
    title: "Haustür Kunststoff: Kosten und Montage 2026",
    cta: "Kunststoff-Haustür-Ratgeber öffnen",
  },
  "tueren:haustuer-holz-alu-rc2-inkl-montage": {
    href: "/ratgeber/haustuer-rc2-kosten",
    title: "Haustür Holz/Alu RC2: Kosten und Montage 2026",
    cta: "RC2-Haustür-Ratgeber öffnen",
  },
  "maurer:klinker-verblendmauerwerk": {
    href: "/ratgeber/klinkerfassade-kosten-pro-qm",
    title: "Klinker-Verblendmauerwerk: Kosten pro m² und Fassadenaufbau",
    cta: "Klinker-Ratgeber öffnen",
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
  const key = `${options.serviceSlug}:${options.itemSlug}`;
  const itemOverride = itemGuideOverrides[key];
  if (itemOverride) return itemOverride;

  const baseLink = getBasePriceGuideLink(options);
  if (baseLink.href !== "/ratgeber/handwerker-stundensaetze") return baseLink;
  return serviceGuideOverrides[options.serviceSlug] ?? baseLink;
}
