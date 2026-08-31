import {
  getPriceGuideLink as getWintergartenPriceGuideLink,
  getServiceGuideLink as getWintergartenServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links-wintergarten";

export type { PriceGuideLink } from "./price-guide-links-wintergarten";

const serviceGuides: Record<string, PriceGuideLink> = {
  carport: {
    href: "/ratgeber/carport-kosten",
    title: "Carport bauen: Kosten 2026",
    cta: "Carport-Ratgeber öffnen",
  },
  garage: {
    href: "/ratgeber/garage-bauen-kosten",
    title: "Garage bauen: Kosten 2026",
    cta: "Garagen-Ratgeber öffnen",
  },
};

const fertiggarageItems = new Set([
  "fertiggarage-allgemeiner-richtwert",
  "fertiggarage-einzelgarage",
  "fertiggarage-doppelgarage",
  "fertiggarage-grossraumgarage",
  "fertiggarage-montage",
  "fertiggarage-mit-fundament",
  "fertiggarage-mit-montage-und-fundament",
  "holz-fertiggarage-3-x-6-m-komplett",
  "stahl-fertiggarage-3-x-6-m-komplett",
  "beton-fertiggarage-3-x-6-m-komplett",
  "fertiggarage-langgarage-3-x-9-m",
  "fertiggarage-6-x-9-m",
]);

const massivgarageItems = new Set([
  "garage-mauerarbeiten",
  "garage-dacharbeiten",
  "gemauerte-massivgarage",
  "gemauerte-massivgarage-fachbetrieb",
  "gemauerte-massivgarage-selbstbau",
  "gemauerte-doppelgarage",
  "massivgarage-dach-komplett",
]);

const fundamentItems = new Set([
  "garage-fundament-zusatzkosten",
  "garage-erdarbeiten",
  "garage-fundamenterstellung",
  "massivgarage-bodenplatte-fundament",
  "garage-bodengutachten",
]);

function guideForGarageItem(itemSlug: string) {
  if (fundamentItems.has(itemSlug)) {
    return {
      href: "/ratgeber/garagenfundament-kosten",
      cta: "Fundament-Ratgeber öffnen",
    };
  }

  if (fertiggarageItems.has(itemSlug)) {
    return {
      href: "/ratgeber/fertiggarage-kosten",
      cta: "Fertiggaragen-Ratgeber öffnen",
    };
  }

  if (massivgarageItems.has(itemSlug)) {
    return {
      href: "/ratgeber/massivgarage-kosten",
      cta: "Massivgaragen-Ratgeber öffnen",
    };
  }

  return {
    href: "/ratgeber/garage-bauen-kosten",
    cta: "Garagen-Ratgeber öffnen",
  };
}

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  return serviceGuides[serviceSlug] ?? getWintergartenServiceGuideLink(serviceSlug);
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  if (options.serviceSlug === "carport") {
    return {
      href: "/ratgeber/carport-kosten",
      title: `${options.itemName}: Kosten 2026`,
      cta: "Carport-Ratgeber öffnen",
    };
  }

  if (options.serviceSlug === "garage") {
    const guide = guideForGarageItem(options.itemSlug);
    return {
      ...guide,
      title: `${options.itemName}: Kosten 2026`,
    };
  }

  return getWintergartenPriceGuideLink(options);
}
