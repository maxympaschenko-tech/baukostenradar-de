import {
  getPriceGuideLink as getPoolPriceGuideLink,
  getServiceGuideLink as getPoolServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links-pool";

export type { PriceGuideLink } from "./price-guide-links-pool";

const serviceGuides: Record<string, PriceGuideLink> = {
  terrassenbau: {
    href: "/ratgeber/terrasse-bauen-kosten",
    title: "Terrasse bauen lassen: Kosten 2026",
    cta: "Terrassenbau-Ratgeber öffnen",
  },
};

const itemGuides: Record<string, PriceGuideLink> = {
  "terrassenbau:terrasse-bauen-lassen-gesamtprojekt": {
    href: "/ratgeber/terrasse-bauen-kosten",
    title: "Terrasse bauen lassen: Kosten 2026",
    cta: "Terrassenbau-Ratgeber öffnen",
  },
  "terrassenbau:terrasse-20-quadratmeter-komplett": {
    href: "/ratgeber/terrasse-bauen-kosten",
    title: "20 m² Terrasse: Kosten 2026",
    cta: "Terrassenbau-Ratgeber öffnen",
  },
  "terrassenbau:planung-terrassenbau": {
    href: "/ratgeber/terrasse-bauen-kosten",
    title: "Terrassenplanung: Kosten 2026",
    cta: "Terrassenbau-Ratgeber öffnen",
  },
  "terrassenbau:fundament-inkl-bodenaushub": {
    href: "/ratgeber/terrasse-unterbau-kosten",
    title: "Terrassen-Unterbau und Fundament: Kosten 2026",
    cta: "Unterbau-Ratgeber öffnen",
  },
  "terrassenbau:montage-terrassenbau": {
    href: "/ratgeber/terrasse-bauen-kosten",
    title: "Terrassenmontage: Kosten 2026",
    cta: "Terrassenbau-Ratgeber öffnen",
  },
  "terrassenbau:terrassenbauer-stundensatz": {
    href: "/ratgeber/terrasse-bauen-kosten",
    title: "Terrassenbauer Stundensatz 2026",
    cta: "Terrassenbau-Ratgeber öffnen",
  },
  "terrassenbau:holzterrasse-komplett": {
    href: "/ratgeber/holzterrasse-kosten",
    title: "Holzterrasse komplett: Kosten 2026",
    cta: "Holzterrassen-Ratgeber öffnen",
  },
  "terrassenbau:holzterrasse-laerche-oder-douglasie-komplett": {
    href: "/ratgeber/holzterrasse-kosten",
    title: "Holzterrasse aus Lärche oder Douglasie: Kosten 2026",
    cta: "Holzterrassen-Ratgeber öffnen",
  },
  "terrassenbau:holzdielen-material": {
    href: "/ratgeber/holzterrasse-kosten",
    title: "Holzdielen für Terrasse: Materialkosten 2026",
    cta: "Holzterrassen-Ratgeber öffnen",
  },
  "terrassenbau:holzterrasse-unterkonstruktion": {
    href: "/ratgeber/terrasse-unterbau-kosten",
    title: "Holzterrasse Unterkonstruktion: Kosten 2026",
    cta: "Unterbau-Ratgeber öffnen",
  },
  "terrassenbau:wpc-terrasse-komplett": {
    href: "/ratgeber/wpc-terrasse-kosten",
    title: "WPC-Terrasse komplett: Kosten 2026",
    cta: "WPC-Ratgeber öffnen",
  },
  "terrassenbau:wpc-terrasse-20-quadratmeter-komplett": {
    href: "/ratgeber/wpc-terrasse-kosten",
    title: "20 m² WPC-Terrasse: Kosten 2026",
    cta: "WPC-Ratgeber öffnen",
  },
  "terrassenbau:wpc-hohlkammerdiele-material": {
    href: "/ratgeber/wpc-terrasse-kosten",
    title: "WPC-Hohlkammerdielen: Kosten 2026",
    cta: "WPC-Ratgeber öffnen",
  },
  "terrassenbau:wpc-vollprofil-material": {
    href: "/ratgeber/wpc-terrasse-kosten",
    title: "WPC-Vollprofil: Kosten 2026",
    cta: "WPC-Ratgeber öffnen",
  },
  "terrassenbau:wpc-coextrudiert-material": {
    href: "/ratgeber/wpc-terrasse-kosten",
    title: "Coextrudierte WPC-Dielen: Kosten 2026",
    cta: "WPC-Ratgeber öffnen",
  },
  "terrassenbau:steinterrasse-fundament-und-pflasterarbeiten": {
    href: "/ratgeber/terrasse-pflastern-kosten",
    title: "Steinterrasse pflastern: Kosten 2026",
    cta: "Pflaster-Ratgeber öffnen",
  },
  "terrassenbau:natursteinterrasse-20-quadratmeter-komplett": {
    href: "/ratgeber/terrasse-pflastern-kosten",
    title: "20 m² Natursteinterrasse: Kosten 2026",
    cta: "Pflaster-Ratgeber öffnen",
  },
  "terrassenbau:erhoehte-terrasse-fachbetrieb": {
    href: "/ratgeber/terrasse-bauen-kosten",
    title: "Erhöhte Terrasse: Kosten 2026",
    cta: "Terrassenbau-Ratgeber öffnen",
  },
  "terrassenbau:dachterrasse-gesamtprojekt": {
    href: "/ratgeber/dachterrasse-kosten",
    title: "Dachterrasse: Gesamtkosten 2026",
    cta: "Dachterrassen-Ratgeber öffnen",
  },
  "terrassenbau:dachterrasse-kosten-pro-quadratmeter": {
    href: "/ratgeber/dachterrasse-kosten",
    title: "Dachterrasse: Kosten pro m² 2026",
    cta: "Dachterrassen-Ratgeber öffnen",
  },
};

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  return serviceGuides[serviceSlug] ?? getPoolServiceGuideLink(serviceSlug);
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  return itemGuides[`${options.serviceSlug}:${options.itemSlug}`] ?? getPoolPriceGuideLink(options);
}
