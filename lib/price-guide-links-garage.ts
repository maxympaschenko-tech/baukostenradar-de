import {
  getPriceGuideLink as getBalconyPriceGuideLink,
  getServiceGuideLink as getBalconyServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links-balcony";

export type { PriceGuideLink } from "./price-guide-links-balcony";

const serviceGuides: Record<string, PriceGuideLink> = {
  garage: {
    href: "/ratgeber/garage-bauen-kosten",
    title: "Garage bauen: Kosten 2026 im Überblick",
    cta: "Garagenbau-Ratgeber öffnen",
  },
  carport: {
    href: "/ratgeber/carport-kosten",
    title: "Carport bauen: Kosten 2026 für Holz und Aluminium",
    cta: "Carport-Ratgeber öffnen",
  },
};

const itemGuides: Record<string, PriceGuideLink> = {
  "garage:garage-bauen-gesamt": {
    href: "/ratgeber/garage-bauen-kosten",
    title: "Garage bauen: Gesamtkosten 2026",
    cta: "Garagenbau-Ratgeber öffnen",
  },
  "garage:einzelgarage-bauen": {
    href: "/ratgeber/garage-bauen-kosten",
    title: "Einzelgarage bauen: Kosten 2026",
    cta: "Garagenbau-Ratgeber öffnen",
  },
  "garage:doppelgarage-bauen": {
    href: "/ratgeber/garage-bauen-kosten",
    title: "Doppelgarage bauen: Kosten 2026",
    cta: "Garagenbau-Ratgeber öffnen",
  },
  "garage:fertiggarage-komplett": {
    href: "/ratgeber/fertiggarage-kosten",
    title: "Fertiggarage: Kosten 2026",
    cta: "Fertiggaragen-Ratgeber öffnen",
  },
  "garage:fertiggarage-einzelgarage-grundpreis": {
    href: "/ratgeber/fertiggarage-kosten",
    title: "Einzel-Fertiggarage: Grundpreis und Zusatzkosten",
    cta: "Fertiggaragen-Ratgeber öffnen",
  },
  "garage:fertiggarage-doppelgarage-grundpreis": {
    href: "/ratgeber/fertiggarage-kosten",
    title: "Doppel-Fertiggarage: Grundpreis und Zusatzkosten",
    cta: "Fertiggaragen-Ratgeber öffnen",
  },
  "garage:fertiggarage-montage-einzelgarage": {
    href: "/ratgeber/fertiggarage-kosten",
    title: "Montage einer Einzel-Fertiggarage: Kosten 2026",
    cta: "Fertiggaragen-Ratgeber öffnen",
  },
  "garage:fertiggarage-montage-doppelgarage": {
    href: "/ratgeber/fertiggarage-kosten",
    title: "Montage einer Doppel-Fertiggarage: Kosten 2026",
    cta: "Fertiggaragen-Ratgeber öffnen",
  },
  "garage:garagenfundament-plattenfundament": {
    href: "/ratgeber/garagenfundament-kosten-pro-qm",
    title: "Garagenfundament: Kosten pro m² 2026",
    cta: "Fundament-Ratgeber öffnen",
  },
  "garage:fertiggarage-fundament-einzelgarage": {
    href: "/ratgeber/garagenfundament-kosten-pro-qm",
    title: "Fundament für eine Einzel-Fertiggarage: Kosten 2026",
    cta: "Fundament-Ratgeber öffnen",
  },
  "garage:fertiggarage-fundament-doppelgarage": {
    href: "/ratgeber/garagenfundament-kosten-pro-qm",
    title: "Fundament für eine Doppel-Fertiggarage: Kosten 2026",
    cta: "Fundament-Ratgeber öffnen",
  },
  "garage:betonfertiggarage-einzelgarage-inkl-fundament": {
    href: "/ratgeber/massivgarage-kosten",
    title: "Betonfertiggarage Einzel: Kosten inklusive Fundament",
    cta: "Massivgaragen-Ratgeber öffnen",
  },
  "garage:betonfertiggarage-doppelgarage-inkl-fundament": {
    href: "/ratgeber/massivgarage-kosten",
    title: "Betonfertiggarage Doppel: Kosten inklusive Fundament",
    cta: "Massivgaragen-Ratgeber öffnen",
  },
  "garage:gemauerte-massivgarage": {
    href: "/ratgeber/massivgarage-kosten",
    title: "Gemauerte Massivgarage: Kosten 2026",
    cta: "Massivgaragen-Ratgeber öffnen",
  },
  "garage:gemauerte-garage-pro-m2": {
    href: "/ratgeber/massivgarage-kosten",
    title: "Gemauerte Garage: Kosten pro m² 2026",
    cta: "Massivgaragen-Ratgeber öffnen",
  },
  "garage:garagentor-einbauen-oder-austauschen": {
    href: "/ratgeber/garagentor-einbauen-kosten",
    title: "Garagentor einbauen oder austauschen: Kosten 2026",
    cta: "Garagentor-Ratgeber öffnen",
  },
  "garage:garage-elektroinstallation": {
    href: "/ratgeber/garage-bauen-kosten",
    title: "Elektroinstallation als Zusatzkosten beim Garagenbau",
    cta: "Garagenbau-Ratgeber öffnen",
  },
  "garage:garage-bauantrag-gebuehren": {
    href: "/ratgeber/massivgarage-kosten",
    title: "Bauantrag als Kostenblock beim Garagenbau",
    cta: "Massivgaragen-Ratgeber öffnen",
  },
  "garage:garage-statik-oder-standsicherheitsnachweis": {
    href: "/ratgeber/massivgarage-kosten",
    title: "Statik und Standsicherheit beim Garagenbau",
    cta: "Massivgaragen-Ratgeber öffnen",
  },
  "carport:carport-holz-inkl-montage": {
    href: "/ratgeber/carport-kosten",
    title: "Holz-Carport: Kosten inklusive Montage 2026",
    cta: "Carport-Ratgeber öffnen",
  },
  "carport:carport-aluminium-oder-stahl-inkl-montage": {
    href: "/ratgeber/carport-kosten",
    title: "Aluminium- oder Stahl-Carport: Kosten 2026",
    cta: "Carport-Ratgeber öffnen",
  },
  "carport:carport-sonderanfertigung-inkl-montage": {
    href: "/ratgeber/carport-kosten",
    title: "Carport Sonderanfertigung: Kosten 2026",
    cta: "Carport-Ratgeber öffnen",
  },
  "carport:carport-holz-bausatz-oder-material": {
    href: "/ratgeber/carport-kosten",
    title: "Holz-Carport Bausatz und Material: Preise 2026",
    cta: "Carport-Ratgeber öffnen",
  },
  "carport:carport-aluminium-bausatz-oder-material": {
    href: "/ratgeber/carport-kosten",
    title: "Aluminium-Carport Bausatz und Material: Preise 2026",
    cta: "Carport-Ratgeber öffnen",
  },
  "carport:doppelcarport-aluminium": {
    href: "/ratgeber/carport-kosten",
    title: "Doppelcarport aus Aluminium: Kosten 2026",
    cta: "Carport-Ratgeber öffnen",
  },
  "carport:punktfundament-carport-typisch": {
    href: "/ratgeber/garagenfundament-kosten-pro-qm",
    title: "Punktfundament für Carport: Kosten 2026",
    cta: "Fundament-Ratgeber öffnen",
  },
};

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  return serviceGuides[serviceSlug] ?? getBalconyServiceGuideLink(serviceSlug);
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  return itemGuides[`${options.serviceSlug}:${options.itemSlug}`] ?? getBalconyPriceGuideLink(options);
}
