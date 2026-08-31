import {
  getPriceGuideLink as getDachausbauPriceGuideLink,
  getServiceGuideLink as getDachausbauServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links-dachausbau";

export type { PriceGuideLink } from "./price-guide-links-dachausbau";

const mainItems = new Set([
  "hausanbau-schluesselfertig-massiv",
  "seitlicher-anbau-massiv-ohne-innenausbau",
  "rueckwaertiger-anbau-massiv-ohne-innenausbau",
  "fertigmodul-anbau-ohne-innenausbau",
  "fertigmodul-anbau-schluesselfertig",
  "hausanbau-mit-flachdach",
  "seitliche-verlaengerung-haus",
  "haus-verbreitern-anbau",
  "mehrgeschossiger-hausanbau-drei-etagen",
]);

const sizeItems = new Set([
  "hausanbau-20-m2-einfache-erweiterung",
  "hausanbau-30-m2-mittelgross",
  "hausanbau-50-m2-gross",
  "hausanbau-60-m2-gesamtbeispiel",
  "fundament-60-m2-hausanbau",
  "mauerwerk-und-daemmung-60-m2-hausanbau",
  "dach-60-m2-hausanbau",
  "fenster-und-tueren-60-m2-hausanbau",
  "elektroinstallation-60-m2-hausanbau",
  "heizung-und-sanitaer-60-m2-hausanbau",
  "innenausbau-60-m2-hausanbau",
  "baunebenkosten-60-m2-hausanbau",
]);

const constructionItems = new Set([
  "hausanbau-holzstaenderbauweise",
  "hausanbau-massivbauweise-ziegel-oder-beton",
  "hausanbau-fertigbauweise",
  "hausanbau-stahlkonstruktion",
]);

const structuralItems = new Set([
  "rohbau-hausanbau-gebaeudehuelle",
  "bodenplatte-fundament-hausanbau",
  "streifenfundament-referenz-100-m2",
  "plattenfundament-referenz-100-m2",
  "mauerarbeiten-hausanbau-komplett-mit-lohn",
  "porenbeton-wand-hausanbau",
  "kalksandstein-wand-hausanbau",
  "ziegel-wand-hausanbau",
  "klinker-verblender-hausanbau",
]);

const interiorItems = new Set([
  "standardfenster-hausanbau-doppelt-verglast",
  "energiesparfenster-hausanbau-dreifachverglasung",
  "innentuer-hausanbau-standard",
  "aussentuer-hausanbau-holz-oder-aluminium",
  "laminat-hausanbau-einfach",
  "parkett-hausanbau-hochwertig",
  "fussbodenheizung-hausanbau",
  "smart-home-integration-hausanbau",
  "innenwaende-und-decken-hausanbau",
  "malerarbeiten-und-tapeten-hausanbau",
  "fassade-verputzen-hausanbau",
]);

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  if (serviceSlug === "hausanbau") {
    return {
      href: "/ratgeber/hausanbau-kosten",
      title: "Hausanbau Kosten 2026",
      cta: "Hausanbau-Ratgeber öffnen",
    };
  }

  return getDachausbauServiceGuideLink(serviceSlug);
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  if (options.serviceSlug === "hausanbau") {
    if (mainItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/hausanbau-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Hausanbau-Ratgeber öffnen",
      };
    }

    if (sizeItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/hausanbau-20-30-50-qm-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Größen-Ratgeber öffnen",
      };
    }

    if (constructionItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/hausanbau-massiv-holz-fertigbau-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Bauweisen-Ratgeber öffnen",
      };
    }

    if (structuralItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/hausanbau-rohbau-fundament-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Rohbau-Ratgeber öffnen",
      };
    }

    if (interiorItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/hausanbau-innenausbau-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Innenausbau-Ratgeber öffnen",
      };
    }
  }

  return getDachausbauPriceGuideLink(options);
}
