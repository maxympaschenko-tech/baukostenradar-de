import {
  getPriceGuideLink as getHausanbauPriceGuideLink,
  getServiceGuideLink as getHausanbauServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links-hausanbau";

export type { PriceGuideLink } from "./price-guide-links-hausanbau";

const mainItems = new Set([
  "standard-nutzkeller-neubau",
  "vollunterkellerung-einfamilienhaus-mehrkosten",
]);

const constructionItems = new Set([
  "massivkeller-nutzkeller",
  "massivkeller-wohnkeller",
]);

const prefabItems = new Set([
  "fertigkeller-standard",
  "fertigkeller-wohnkeller",
  "fertigkeller-beispiel-87-m2",
]);

const sizeItems = new Set([
  "keller-100-m2-nutz-bis-wohnkeller",
  "fertigkeller-80-m2-mitbaukeller",
  "fertigkeller-80-m2-ausbaukeller",
  "fertigkeller-80-m2-komplettkeller",
  "fertigkeller-99-m2-mitbaukeller",
  "fertigkeller-99-m2-ausbaukeller",
  "fertigkeller-99-m2-komplettkeller",
  "fertigkeller-120-m2-mitbaukeller",
  "fertigkeller-120-m2-ausbaukeller",
  "fertigkeller-120-m2-komplettkeller",
]);

const siteItems = new Set([
  "erdarbeiten-fertigkeller",
  "bodengutachten-kellerbau",
  "aushubentsorgung-kellerbau",
  "abdichtung-und-entwaesserung-kellerbau",
  "weisse-wanne-keller-mehrpreis",
  "perimeterdaemmung-keller-komplett",
  "xps-perimeterdaemmung-keller",
  "schaumglas-perimeterdaemmung-keller",
  "kleber-und-befestigung-perimeterdaemmung",
  "verlegung-perimeterdaemmung-fachbetrieb",
  "drainage-kellerbau",
  "xps-unter-kellerbodenplatte",
  "schaumglasschotter-unter-kellerbodenplatte",
]);

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  if (serviceSlug === "kellerbau") {
    return {
      href: "/ratgeber/kellerbau-kosten",
      title: "Kellerbau Kosten 2026",
      cta: "Kellerbau-Ratgeber öffnen",
    };
  }

  return getHausanbauServiceGuideLink(serviceSlug);
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  if (options.serviceSlug === "kellerbau") {
    if (mainItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/kellerbau-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Kellerbau-Ratgeber öffnen",
      };
    }

    if (constructionItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/massivkeller-wohnkeller-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Massivkeller-Ratgeber öffnen",
      };
    }

    if (prefabItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/fertigkeller-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Fertigkeller-Ratgeber öffnen",
      };
    }

    if (sizeItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/keller-80-100-120-qm-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Größen-Ratgeber öffnen",
      };
    }

    if (siteItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/kellerbau-erdarbeiten-weisse-wanne-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Kellerbau-Zusatzkosten öffnen",
      };
    }
  }

  return getHausanbauPriceGuideLink(options);
}
