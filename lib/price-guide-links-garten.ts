import {
  getPriceGuideLink as getPhotovoltaikPriceGuideLink,
  getServiceGuideLink as getPhotovoltaikServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links-photovoltaik";

export type { PriceGuideLink } from "./price-guide-links-photovoltaik";

const pflasterItems = new Set([
  "betonpflaster-inkl-unterbau-verlegen",
  "klinkerpflaster-inkl-unterbau-verlegen",
  "granitpflaster-inkl-unterbau-verlegen",
  "natursteinpflaster-inkl-unterbau-verlegen",
]);

const rasenItems = new Set(["rasen-neu-anlegen-mit-saat"]);
const heckeItems = new Set(["hecke-pflanzen"]);
const galaBauItems = new Set(["gartenpflege", "garten-und-landschaftsbauer-stundensatz"]);
const baumpflegeItems = new Set(["baumrueckschnitt", "kronenpflege"]);
const baumfaellungItems = new Set([
  "baumfaellung-je-meter-baumhoehe",
  "baumfaellgenehmigung",
]);
const einfahrtItems = new Set([
  "einfahrt-betonpflaster-komplett",
  "einfahrt-natursteinpflaster-komplett",
  "einfahrt-aushub-inkl-entsorgung",
  "einfahrt-schotterunterbau",
]);

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  if (serviceSlug === "garten") {
    return {
      href: "/ratgeber/garten-anlegen-kosten",
      title: "Garten und Außenanlagen: Kosten 2026 nach Arbeit und Material",
      cta: "Garten-Ratgeber öffnen",
    };
  }

  return getPhotovoltaikServiceGuideLink(serviceSlug);
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  if (options.serviceSlug === "garten") {
    if (pflasterItems.has(options.itemSlug)) {
      return { href: "/ratgeber/pflasterarbeiten-kosten-pro-qm", title: `${options.itemName}: Kosten 2026`, cta: "Pflaster-Ratgeber öffnen" };
    }
    if (rasenItems.has(options.itemSlug)) {
      return { href: "/ratgeber/rasen-anlegen-kosten-pro-qm", title: `${options.itemName}: Kosten 2026`, cta: "Rasen-Ratgeber öffnen" };
    }
    if (heckeItems.has(options.itemSlug)) {
      return { href: "/ratgeber/hecke-pflanzen-kosten-pro-meter", title: `${options.itemName}: Kosten 2026`, cta: "Hecken-Ratgeber öffnen" };
    }
    if (galaBauItems.has(options.itemSlug)) {
      return { href: "/ratgeber/garten-landschaftsbauer-stundensatz", title: `${options.itemName}: Kosten 2026`, cta: "GaLaBau-Ratgeber öffnen" };
    }
    if (baumpflegeItems.has(options.itemSlug)) {
      return { href: "/ratgeber/baumpflege-kosten", title: `${options.itemName}: Kosten 2026`, cta: "Baumpflege-Ratgeber öffnen" };
    }
    if (baumfaellungItems.has(options.itemSlug)) {
      return { href: "/ratgeber/baum-faellen-kosten", title: `${options.itemName}: Kosten 2026`, cta: "Baumfällungs-Ratgeber öffnen" };
    }
    if (einfahrtItems.has(options.itemSlug)) {
      return { href: "/ratgeber/einfahrt-pflastern-kosten", title: `${options.itemName}: Kosten 2026`, cta: "Einfahrt-Ratgeber öffnen" };
    }
  }

  return getPhotovoltaikPriceGuideLink(options);
}
