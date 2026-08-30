import {
  getPriceGuideLink as getCurrentPriceGuideLink,
  getServiceGuideLink as getCurrentServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links-current";

export type { PriceGuideLink } from "./price-guide-links-current";

const balconyServiceGuide: PriceGuideLink = {
  href: "/ratgeber/balkon-sanieren-kosten-pro-qm",
  title: "Balkon sanieren: Kosten 2026 pro m²",
  cta: "Balkonsanierungs-Ratgeber öffnen",
};

const balconyItemGuides: Record<string, PriceGuideLink> = {
  "balkon:balkon-neuer-belag-ohne-abdichtung": {
    href: "/ratgeber/balkon-sanieren-kosten-pro-qm",
    title: "Balkonbelag erneuern: Kosten im Sanierungsvergleich",
    cta: "Balkonsanierungs-Ratgeber öffnen",
  },
  "balkon:balkon-abdichtung-plus-neuer-belag": {
    href: "/ratgeber/balkon-abdichten-kosten-pro-qm",
    title: "Balkon abdichten und neu belegen: Kosten 2026",
    cta: "Balkonabdichtungs-Ratgeber öffnen",
  },
  "balkon:balkonsanierung-komplett-inkl-betonsanierung": {
    href: "/ratgeber/balkon-sanieren-kosten-pro-qm",
    title: "Balkonsanierung komplett: Kosten 2026",
    cta: "Balkonsanierungs-Ratgeber öffnen",
  },
  "balkon:balkonsanierung-komplett-plus-neues-gelaender": {
    href: "/ratgeber/balkon-sanieren-kosten-pro-qm",
    title: "Balkonsanierung mit neuem Geländer: Kosten 2026",
    cta: "Balkonsanierungs-Ratgeber öffnen",
  },
  "balkon:balkon-8-m2-komplett-sanieren-ohne-gelaender": {
    href: "/ratgeber/balkon-sanieren-kosten-pro-qm",
    title: "8 m² Balkon sanieren: konkretes Kostenbeispiel",
    cta: "8-m²-Balkon-Ratgeber öffnen",
  },
  "balkon:balkon-7-5-m2-abdichten": {
    href: "/ratgeber/balkon-abdichten-kosten-pro-qm",
    title: "Balkon abdichten: Kostenbeispiel für 7,5 m²",
    cta: "Balkonabdichtungs-Ratgeber öffnen",
  },
  "balkon:balkonabdichtung-fluessigkunststoff-komplett": {
    href: "/ratgeber/balkon-abdichten-kosten-pro-qm",
    title: "Flüssigkunststoff-Abdichtung: Kosten pro m² 2026",
    cta: "Balkonabdichtungs-Ratgeber öffnen",
  },
  "balkon:alten-balkonbelag-entfernen-und-entsorgen": {
    href: "/ratgeber/balkon-abdichten-kosten-pro-qm",
    title: "Balkonbelag entfernen: Kosten als Teil der Abdichtung",
    cta: "Balkonabdichtungs-Ratgeber öffnen",
  },
  "balkon:balkon-oder-terrasse-fliesen-inkl-material": {
    href: "/ratgeber/balkon-fliesen-kosten-pro-qm",
    title: "Balkon fliesen: Kosten pro m² 2026",
    cta: "Balkonfliesen-Ratgeber öffnen",
  },
  "balkon:gefaelleestrich-balkon-herstellen": {
    href: "/ratgeber/balkon-fliesen-kosten-pro-qm",
    title: "Gefälleestrich am Balkon: Zusatzkosten richtig einordnen",
    cta: "Balkonfliesen-Ratgeber öffnen",
  },
  "balkon:drainagematte-balkon-verlegen": {
    href: "/ratgeber/balkon-fliesen-kosten-pro-qm",
    title: "Drainagematte am Balkon: Kosten im Fliesenaufbau",
    cta: "Balkonfliesen-Ratgeber öffnen",
  },
  "balkon:balkongelaender-aluminium-inkl-montage": {
    href: "/ratgeber/balkongelaender-kosten-pro-meter",
    title: "Balkongeländer Aluminium: Kosten pro Meter 2026",
    cta: "Geländer-Ratgeber öffnen",
  },
  "balkon:balkongelaender-edelstahl-inkl-montage": {
    href: "/ratgeber/balkongelaender-kosten-pro-meter",
    title: "Balkongeländer Edelstahl: Kosten pro Meter 2026",
    cta: "Geländer-Ratgeber öffnen",
  },
  "balkon:balkongelaender-glas-inkl-montage": {
    href: "/ratgeber/balkongelaender-kosten-pro-meter",
    title: "Balkongeländer Glas: Kosten pro Meter 2026",
    cta: "Geländer-Ratgeber öffnen",
  },
};

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  if (serviceSlug === "balkon") return balconyServiceGuide;
  return getCurrentServiceGuideLink(serviceSlug);
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  const balconyGuide = balconyItemGuides[`${options.serviceSlug}:${options.itemSlug}`];
  return balconyGuide ?? getCurrentPriceGuideLink(options);
}
