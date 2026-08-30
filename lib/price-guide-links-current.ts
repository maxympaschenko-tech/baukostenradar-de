import {
  getPriceGuideLink as getCatalogPriceGuideLink,
  getServiceGuideLink as getCatalogServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links-catalog";

export type { PriceGuideLink } from "./price-guide-links-catalog";

const currentItemGuides: Record<string, PriceGuideLink> = {
  "kueche:kuechensanierung-teilsanierung": {
    href: "/ratgeber/kuechensanierung-komplett-kosten",
    title: "Küchensanierung: Teil- und Komplettsanierung im Kostenvergleich",
    cta: "Küchensanierungs-Ratgeber öffnen",
  },
  "kueche:kuechensanierung-komplett": {
    href: "/ratgeber/kuechensanierung-komplett-kosten",
    title: "Komplette Küchensanierung: Kosten 2026",
    cta: "Küchensanierungs-Ratgeber öffnen",
  },
  "kueche:kleine-kueche-bis-8-m2-sanieren": {
    href: "/ratgeber/kuechensanierung-komplett-kosten",
    title: "Küchensanierung nach Größe: Kosten 2026",
    cta: "Küchensanierungs-Ratgeber öffnen",
  },
  "kueche:mittlere-kueche-8-bis-15-m2-sanieren": {
    href: "/ratgeber/kuechensanierung-komplett-kosten",
    title: "Küchensanierung nach Größe: Kosten 2026",
    cta: "Küchensanierungs-Ratgeber öffnen",
  },
  "kueche:grosse-kueche-ab-15-m2-sanieren": {
    href: "/ratgeber/kuechensanierung-komplett-kosten",
    title: "Küchensanierung nach Größe: Kosten 2026",
    cta: "Küchensanierungs-Ratgeber öffnen",
  },
  "kueche:kuechenmontage-je-laufendem-meter": {
    href: "/ratgeber/kuechenmontage-laufender-meter-kosten",
    title: "Küchenmontage pro laufendem Meter: Kosten 2026",
    cta: "Küchenmontage-Ratgeber öffnen",
  },
  "kueche:standardkueche-3-bis-5-m-oder-l-form-montieren": {
    href: "/ratgeber/kuechenmontage-laufender-meter-kosten",
    title: "Küchenmontage: Kosten für Standardküche und L-Form",
    cta: "Küchenmontage-Ratgeber öffnen",
  },
  "kueche:grosse-kueche-mit-kochinsel-montieren": {
    href: "/ratgeber/kuechenmontage-laufender-meter-kosten",
    title: "Küchenmontage mit Kochinsel: Kosten 2026",
    cta: "Küchenmontage-Ratgeber öffnen",
  },
  "kueche:altkueche-demontieren-und-entsorgen": {
    href: "/ratgeber/kuechenmontage-laufender-meter-kosten",
    title: "Küchenmontage inklusive Demontage: Kosten 2026",
    cta: "Küchenmontage-Ratgeber öffnen",
  },
  "treppen:fertigteil-betontreppe-inkl-einbau": {
    href: "/ratgeber/betontreppe-kosten-2026",
    title: "Betontreppe: Fertigteil, Ortbeton und Belag im Kostenvergleich",
    cta: "Betontreppen-Ratgeber öffnen",
  },
  "treppen:ortbetontreppe-inkl-einbau": {
    href: "/ratgeber/betontreppe-kosten-2026",
    title: "Ortbetontreppe: Kosten und Vergleich mit Fertigteil",
    cta: "Betontreppen-Ratgeber öffnen",
  },
  "treppen:betontreppe-mit-fliesen-verkleiden": {
    href: "/ratgeber/betontreppe-kosten-2026",
    title: "Betontreppe mit Belag: Kosten pro Stufe 2026",
    cta: "Betontreppen-Ratgeber öffnen",
  },
  "treppen:betontreppe-mit-holzstufen-verkleiden": {
    href: "/ratgeber/betontreppe-kosten-2026",
    title: "Betontreppe mit Holzstufen: Kosten 2026",
    cta: "Betontreppen-Ratgeber öffnen",
  },
  "treppen:betontreppe-mit-naturstein-verkleiden": {
    href: "/ratgeber/betontreppe-kosten-2026",
    title: "Betontreppe mit Naturstein: Kosten 2026",
    cta: "Betontreppen-Ratgeber öffnen",
  },
  "treppen:treppengelaender-edelstahl-10-m-inkl-montage": {
    href: "/ratgeber/treppengelaender-edelstahl-kosten",
    title: "Edelstahl-Treppengeländer: Kosten inklusive Montage 2026",
    cta: "Geländer-Ratgeber öffnen",
  },
};

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  return getCatalogServiceGuideLink(serviceSlug);
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  const currentGuide = currentItemGuides[`${options.serviceSlug}:${options.itemSlug}`];
  return currentGuide ?? getCatalogPriceGuideLink(options);
}
