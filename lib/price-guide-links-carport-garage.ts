import {
  getPriceGuideLink as getWintergartenPriceGuideLink,
  getServiceGuideLink as getWintergartenServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links-wintergarten";

export type { PriceGuideLink } from "./price-guide-links-wintergarten";

const newCarportItems = new Set([
  "einzelcarport-bausatz-flachdach",
  "einzelcarport-bausatz-satteldach",
  "carport-aufbau-durch-fachbetrieb",
  "einzelcarport-komplett-mit-aufbau",
  "doppelcarport-komplett-mit-aufbau",
  "carport-integrierter-geraeteraum-aufpreis",
  "carport-stellflaeche-pflaster-schotterrasen-oder-betonplatte",
  "carport-satteldach-aufpreis",
]);

const newCarportFoundationItems = new Set([
  "carport-fundamente-komplett",
  "carport-punktfundament",
]);

const newGarageFoundationItems = new Set([
  "garage-fundament-zusatzkosten",
  "garage-erdarbeiten",
  "garage-fundamenterstellung",
  "garage-bodengutachten",
]);

const newGarageMassiveItems = new Set([
  "garage-mauerarbeiten",
  "garage-dacharbeiten",
  "gemauerte-massivgarage-selbstbau",
  "gemauerte-doppelgarage",
  "massivgarage-dach-komplett",
]);

const newGaragePrefabItems = new Set([
  "fertiggarage-grossraumgarage",
  "fertiggarage-mit-fundament",
  "fertiggarage-mit-montage-und-fundament",
  "holz-fertiggarage-3-x-6-m-komplett",
  "stahl-fertiggarage-3-x-6-m-komplett",
  "beton-fertiggarage-3-x-6-m-komplett",
  "fertiggarage-langgarage-3-x-9-m",
  "fertiggarage-6-x-9-m",
]);

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  return getWintergartenServiceGuideLink(serviceSlug);
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  if (options.serviceSlug === "carport") {
    if (newCarportFoundationItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/garagenfundament-kosten-pro-qm",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Fundament-Ratgeber öffnen",
      };
    }

    if (newCarportItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/carport-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Carport-Ratgeber öffnen",
      };
    }
  }

  if (options.serviceSlug === "garage") {
    if (options.itemSlug === "garage-als-anbau") {
      return {
        href: "/ratgeber/garage-bauen-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Garagenbau-Ratgeber öffnen",
      };
    }

    if (newGarageFoundationItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/garagenfundament-kosten-pro-qm",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Fundament-Ratgeber öffnen",
      };
    }

    if (newGarageMassiveItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/massivgarage-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Massivgaragen-Ratgeber öffnen",
      };
    }

    if (newGaragePrefabItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/fertiggarage-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Fertiggaragen-Ratgeber öffnen",
      };
    }
  }

  return getWintergartenPriceGuideLink(options);
}
