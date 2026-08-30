import {
  getPriceGuideLink as getGaragePriceGuideLink,
  getServiceGuideLink as getGarageServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links-garage";

export type { PriceGuideLink } from "./price-guide-links-garage";

const serviceGuides: Record<string, PriceGuideLink> = {
  schornstein: {
    href: "/ratgeber/schornstein-sanieren-kosten",
    title: "Schornstein sanieren: Kosten 2026 im Überblick",
    cta: "Schornstein-Ratgeber öffnen",
  },
  kamin: {
    href: "/ratgeber/kamin-bauen-kosten",
    title: "Kamin bauen: Kosten 2026 im Überblick",
    cta: "Kamin-Ratgeber öffnen",
  },
};

const itemGuides: Record<string, PriceGuideLink> = {
  "schornstein:schornsteinsanierung-gesamt": {
    href: "/ratgeber/schornstein-sanieren-kosten",
    title: "Schornsteinsanierung: Gesamtkosten 2026",
    cta: "Schornstein-Ratgeber öffnen",
  },
  "schornstein:gemauerten-schornstein-sanieren": {
    href: "/ratgeber/schornstein-sanieren-kosten",
    title: "Gemauerten Schornstein sanieren: Kosten pro Meter",
    cta: "Schornstein-Ratgeber öffnen",
  },
  "schornstein:schornstein-edelstahlauskleidung-inkl-montage": {
    href: "/ratgeber/schornstein-sanieren-kosten",
    title: "Edelstahl-Innenrohr: Kosten pro Meter 2026",
    cta: "Schornstein-Ratgeber öffnen",
  },
  "schornstein:schornstein-keramik-innenrohr": {
    href: "/ratgeber/schornstein-sanieren-kosten",
    title: "Keramik-Innenrohr: Kosten pro Meter 2026",
    cta: "Schornstein-Ratgeber öffnen",
  },
  "schornstein:schornstein-fraesen": {
    href: "/ratgeber/schornstein-sanieren-kosten",
    title: "Schornstein fräsen: Kosten 2026",
    cta: "Schornstein-Ratgeber öffnen",
  },
  "schornstein:schornstein-abdichten-und-versiegeln": {
    href: "/ratgeber/versottung-schornstein-sanieren-kosten",
    title: "Schornstein abdichten und versiegeln: Kosten 2026",
    cta: "Versottungs-Ratgeber öffnen",
  },
  "schornstein:versotteten-schornstein-sanieren": {
    href: "/ratgeber/versottung-schornstein-sanieren-kosten",
    title: "Versotteten Schornstein sanieren: Kosten 2026",
    cta: "Versottungs-Ratgeber öffnen",
  },
  "schornstein:versottung-trocknung-und-abdichtung-zusatz": {
    href: "/ratgeber/versottung-schornstein-sanieren-kosten",
    title: "Versottung: Trocknung und Abdichtung als Zusatzkosten",
    cta: "Versottungs-Ratgeber öffnen",
  },
  "schornstein:edelstahlschornstein-aussen-nachruesten": {
    href: "/ratgeber/edelstahlschornstein-nachruesten-kosten",
    title: "Edelstahlschornstein außen nachrüsten: Kosten 2026",
    cta: "Nachrüst-Ratgeber öffnen",
  },
  "schornstein:gemauerten-schornstein-aussen-nachruesten": {
    href: "/ratgeber/edelstahlschornstein-nachruesten-kosten",
    title: "Gemauerten Schornstein außen nachrüsten: Kosten 2026",
    cta: "Nachrüst-Ratgeber öffnen",
  },
  "schornstein:gemauerten-schornstein-im-haus-nachruesten": {
    href: "/ratgeber/edelstahlschornstein-nachruesten-kosten",
    title: "Gemauerten Schornstein im Haus nachrüsten: Kosten 2026",
    cta: "Nachrüst-Ratgeber öffnen",
  },
  "schornstein:abgasrohr-aussen-nachruesten": {
    href: "/ratgeber/edelstahlschornstein-nachruesten-kosten",
    title: "Abgasrohr außen nachrüsten: Kosten 2026",
    cta: "Nachrüst-Ratgeber öffnen",
  },
  "schornstein:schornsteinfeger-einsatz": {
    href: "/ratgeber/schornsteinfeger-kosten",
    title: "Schornsteinfeger-Einsatz: Kosten 2026",
    cta: "Schornsteinfeger-Ratgeber öffnen",
  },
  "schornstein:schornsteinfeger-abnahme-kamin-oder-schornstein": {
    href: "/ratgeber/schornsteinfeger-kosten",
    title: "Abnahme von Kamin oder Schornstein: Kosten 2026",
    cta: "Schornsteinfeger-Ratgeber öffnen",
  },
  "kamin:kamin-bauen-gesamt": {
    href: "/ratgeber/kamin-bauen-kosten",
    title: "Kamin bauen: Gesamtkosten 2026",
    cta: "Kamin-Ratgeber öffnen",
  },
  "kamin:holzkamin-anschaffung": {
    href: "/ratgeber/kamin-bauen-kosten",
    title: "Holzkamin Anschaffung: Kosten 2026",
    cta: "Kamin-Ratgeber öffnen",
  },
  "kamin:kamin-installieren-und-anschliessen": {
    href: "/ratgeber/kamin-bauen-kosten",
    title: "Kamin installieren und anschließen: Kosten 2026",
    cta: "Kamin-Ratgeber öffnen",
  },
  "kamin:standardkamin-einbau": {
    href: "/ratgeber/kamin-bauen-kosten",
    title: "Standardkamin einbauen: Kosten 2026",
    cta: "Kamin-Ratgeber öffnen",
  },
  "kamin:massgeschneiderter-kamin-einbau": {
    href: "/ratgeber/kamin-bauen-kosten",
    title: "Maßgeschneiderten Kamin einbauen: Kosten 2026",
    cta: "Kamin-Ratgeber öffnen",
  },
  "kamin:kernbohrung-fuer-kamin-oder-ofenrohr": {
    href: "/ratgeber/kamin-bauen-kosten",
    title: "Kernbohrung für Kamin oder Ofenrohr: Kosten 2026",
    cta: "Kamin-Ratgeber öffnen",
  },
  "kamin:schornstein-oder-ofenrohre-fuer-kamin": {
    href: "/ratgeber/kamin-bauen-kosten",
    title: "Schornstein oder Ofenrohre für Kamin: Kosten 2026",
    cta: "Kamin-Ratgeber öffnen",
  },
  "kamin:kaminofen-anschliessen": {
    href: "/ratgeber/kaminofen-kosten",
    title: "Kaminofen anschließen: Kosten 2026",
    cta: "Kaminofen-Ratgeber öffnen",
  },
  "kamin:kaminkassette-nachruesten-gesamt": {
    href: "/ratgeber/kaminkassette-nachruesten-kosten",
    title: "Kaminkassette nachrüsten: Gesamtkosten 2026",
    cta: "Kaminkassetten-Ratgeber öffnen",
  },
  "kamin:kaminkassette-material": {
    href: "/ratgeber/kaminkassette-nachruesten-kosten",
    title: "Kaminkassette Material: Kosten 2026",
    cta: "Kaminkassetten-Ratgeber öffnen",
  },
  "kamin:kaminkassette-einbau-inkl-ausmessen-und-brandschutz": {
    href: "/ratgeber/kaminkassette-nachruesten-kosten",
    title: "Kaminkassette einbauen: Kosten 2026",
    cta: "Kaminkassetten-Ratgeber öffnen",
  },
  "kamin:kaminofen-anschaffung": {
    href: "/ratgeber/kaminofen-kosten",
    title: "Kaminofen Anschaffung: Kosten 2026",
    cta: "Kaminofen-Ratgeber öffnen",
  },
  "kamin:offener-oder-gemauerter-kamin-anschaffung": {
    href: "/ratgeber/kamin-bauen-kosten",
    title: "Offener oder gemauerter Kamin: Anschaffungskosten 2026",
    cta: "Kamin-Ratgeber öffnen",
  },
  "kamin:kachelkamin-anschaffung": {
    href: "/ratgeber/kamin-bauen-kosten",
    title: "Kachelkamin Anschaffung: Kosten 2026",
    cta: "Kamin-Ratgeber öffnen",
  },
};

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  return serviceGuides[serviceSlug] ?? getGarageServiceGuideLink(serviceSlug);
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  return itemGuides[`${options.serviceSlug}:${options.itemSlug}`] ?? getGaragePriceGuideLink(options);
}
