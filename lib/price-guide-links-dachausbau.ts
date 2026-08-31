import {
  getPriceGuideLink as getCarportGaragePriceGuideLink,
  getServiceGuideLink as getCarportGarageServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links-carport-garage";

export type { PriceGuideLink } from "./price-guide-links-carport-garage";

const mainItems = new Set([
  "dachausbau-komplett-zum-wohnraum",
  "dachausbau-80-m2-komplett-zum-wohnraum",
  "dachausbau-grundausbau-beispiel-80-m2",
]);

const interiorItems = new Set([
  "dachdaemmung-beim-dachausbau",
  "untersparrendaemmung-dachausbau",
  "zwischensparrendaemmung-dachausbau",
  "aufsparrendaemmung-dachausbau",
  "heizkoerper-dachgeschoss-inklusive-leitungsverlegung",
  "fussbodenheizung-dachgeschoss",
  "dachfenster-beim-dachausbau",
  "fliessestrich-dachgeschoss-vom-fachbetrieb",
  "trittschalldaemmung-dachgeschoss",
  "bodenbelag-dachgeschoss-professionell-verlegt",
  "trockenbau-staenderwand-dachgeschoss-vom-fachbetrieb",
  "tapezieren-und-streichen-dachgeschoss-professionell",
  "elektroinstallation-dachgeschoss",
  "innentuer-dachgeschoss",
]);

const gaubeItems = new Set([
  "dachgaube-material-und-einbau",
  "standard-fertiggaube",
  "dachgaube-einbaukosten",
  "dachoeffnung-fuer-gaube",
  "statischer-nachweis-dachgaube",
  "baugenehmigung-dachgaube",
]);

const liftItems = new Set([
  "einfache-kniestockerhoehung",
  "hydraulische-dachanhebung",
  "dachanhebung-mit-grundausbau",
]);

const additionItems = new Set([
  "dachaufstockung-neues-geschoss",
  "statik-dachaufstockung-bestand",
  "bauantrag-und-genehmigung-dachaufstockung",
  "altes-dach-demontieren-fuer-dachaufstockung",
  "dachaufstockung-rohbau-neues-geschoss-und-dach",
  "innenausbau-dachaufstockung",
  "fenster-und-tueren-dachaufstockung",
  "bad-und-heizung-dachaufstockung",
]);

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  if (serviceSlug === "dachausbau") {
    return {
      href: "/ratgeber/dachausbau-kosten",
      title: "Dachausbau Kosten 2026",
      cta: "Dachausbau-Ratgeber öffnen",
    };
  }

  return getCarportGarageServiceGuideLink(serviceSlug);
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  if (options.serviceSlug === "dachausbau") {
    if (mainItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/dachausbau-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Dachausbau-Ratgeber öffnen",
      };
    }

    if (interiorItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/dachboden-ausbauen-kosten-pro-qm",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Dachboden-Ratgeber öffnen",
      };
    }

    if (gaubeItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/dachgaube-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Dachgauben-Ratgeber öffnen",
      };
    }

    if (liftItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/dach-anheben-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Dachanhebung-Ratgeber öffnen",
      };
    }

    if (additionItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/dachaufstockung-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Dachaufstockung-Ratgeber öffnen",
      };
    }
  }

  return getCarportGaragePriceGuideLink(options);
}
