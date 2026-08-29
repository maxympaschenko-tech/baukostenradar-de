import {
  getPriceGuideLink as getBasePriceGuideLink,
  getServiceGuideLink as getBaseServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links";

export type { PriceGuideLink } from "./price-guide-links";

const serviceGuideOverrides: Record<string, PriceGuideLink> = {
  waermepumpe: {
    href: "/ratgeber/luft-wasser-waermepumpe-kosten",
    title: "Luft-Wasser-Wärmepumpe: Kosten 2026 im Detail",
    cta: "Wärmepumpen-Ratgeber öffnen",
  },
  photovoltaik: {
    href: "/ratgeber/photovoltaik-10-kwp-kosten",
    title: "Photovoltaik 10 kWp: Kosten 2026 im Detail",
    cta: "10-kWp-PV-Ratgeber öffnen",
  },
  daemmung: {
    href: "/ratgeber/fassadendaemmung-kosten-pro-qm",
    title: "Fassadendämmung: Kosten pro m² 2026",
    cta: "Dämmungs-Ratgeber öffnen",
  },
  kellerabdichtung: {
    href: "/ratgeber/kellerabdichtung-aussen-kosten-pro-qm",
    title: "Kellerabdichtung außen: Kosten pro m² 2026",
    cta: "Kellerabdichtungs-Ratgeber öffnen",
  },
  fenster: {
    href: "/ratgeber/20-fenster-austauschen-kosten",
    title: "20 Fenster austauschen: Projektkosten 2026",
    cta: "Fenster-Ratgeber öffnen",
  },
  dachsanierung: {
    href: "/ratgeber/dach-150-qm-kosten",
    title: "Dach 150 m² sanieren: Projektkosten 2026",
    cta: "Dach-Ratgeber öffnen",
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
  "treppen:treppenrenovierung-holzstufen-system": {
    href: "/ratgeber/treppenrenovierung-holzstufen-system-kosten",
    title: "Treppenrenovierung mit Holzstufen-System: Kosten 2026",
    cta: "Holzstufen-System-Ratgeber öffnen",
  },
  "treppen:holztreppe-schleifen-und-versiegeln": {
    href: "/ratgeber/holztreppe-schleifen-kosten",
    title: "Holztreppe schleifen und versiegeln: Kosten 2026",
    cta: "Holztreppen-Ratgeber öffnen",
  },
  "treppen:holztreppe-stufenueberbau-gelaender": {
    href: "/ratgeber/treppen-stufenueberbau-gelaender-kosten",
    title: "Holztreppe mit Stufenüberbau und Geländer: Kosten 2026",
    cta: "Stufenüberbau-Ratgeber öffnen",
  },
  "treppen:betontreppe-mit-neuem-belag": {
    href: "/ratgeber/betontreppe-neuer-belag-kosten",
    title: "Betontreppe mit neuem Belag: Kosten 2026",
    cta: "Betontreppen-Ratgeber öffnen",
  },
  "treppen:natursteintreppe-schleifen-und-polieren": {
    href: "/ratgeber/natursteintreppe-schleifen-kosten",
    title: "Natursteintreppe schleifen und polieren: Kosten 2026",
    cta: "Naturstein-Ratgeber öffnen",
  },
  "treppen:holzstufe-schleifen-und-versiegeln": {
    href: "/ratgeber/14-treppenstufen-renovieren-kosten",
    title: "Holzstufen schleifen: Kostenbeispiel für 14 Treppenstufen",
    cta: "14-Stufen-Ratgeber öffnen",
  },
  "kueche:kuechen-renovierung-ohne-moebel": {
    href: "/ratgeber/kueche-10-qm-renovieren-kosten",
    title: "Küche renovieren: Kostenbeispiel für 10 m²",
    cta: "10-m²-Küchen-Ratgeber öffnen",
  },
  "kueche:kuechenfronten-austauschen-oder-lackieren": {
    href: "/ratgeber/kuechenfronten-erneuern-kosten",
    title: "Küchenfronten austauschen oder lackieren: Kosten 2026",
    cta: "Küchenfronten-Ratgeber öffnen",
  },
  "kueche:neue-arbeitsplatte": {
    href: "/ratgeber/kuechenarbeitsplatte-kosten",
    title: "Neue Küchenarbeitsplatte: Kosten 2026",
    cta: "Arbeitsplatten-Ratgeber öffnen",
  },
  "kueche:neue-elektrogeraete": {
    href: "/ratgeber/kueche-elektrogeraete-kosten",
    title: "Neue Küchengeräte: Kosten 2026",
    cta: "Küchengeräte-Ratgeber öffnen",
  },
  "kueche:fliesenspiegel-erneuern": {
    href: "/ratgeber/fliesenspiegel-erneuern-kosten",
    title: "Fliesenspiegel erneuern: Kosten 2026",
    cta: "Fliesenspiegel-Ratgeber öffnen",
  },
  "kueche:komplett-neue-einbaukueche": {
    href: "/ratgeber/einbaukueche-kosten",
    title: "Komplett neue Einbauküche: Kosten 2026",
    cta: "Einbauküchen-Ratgeber öffnen",
  },
  "kueche:premium-kueche-mit-umbau": {
    href: "/ratgeber/premium-kueche-umbau-kosten",
    title: "Premium-Küche mit Umbau: Kosten 2026",
    cta: "Premium-Küchen-Ratgeber öffnen",
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
