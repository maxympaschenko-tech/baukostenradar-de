import { handwerkerCalculatorHref } from "@/lib/calculator-links";
import { services } from "@/lib/pricing";
import {
  getGuideRegions as getBalconyGuideRegions,
  getGuideSilo as getBalconyGuideSilo,
  type GuideSilo,
} from "./guide-silo-balcony";

export type { GuideSilo } from "./guide-silo-balcony";

const garageGuideSilos: Record<string, GuideSilo> = {
  "garage-bauen-kosten": {
    serviceSlugs: ["garage", "carport"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "garage",
      itemSlug: "einzelgarage-bauen",
    }),
    calculatorLabel: "Garage berechnen",
    regionalMode: "service",
  },
  "fertiggarage-kosten": {
    serviceSlugs: ["garage"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "garage",
      itemSlug: "fertiggarage-einzelgarage-grundpreis",
    }),
    calculatorLabel: "Fertiggarage berechnen",
    regionalMode: "service",
  },
  "massivgarage-kosten": {
    serviceSlugs: ["garage", "maurer"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "garage",
      itemSlug: "gemauerte-massivgarage",
    }),
    calculatorLabel: "Massivgarage berechnen",
    regionalMode: "service",
  },
  "garagenfundament-kosten-pro-qm": {
    serviceSlugs: ["garage", "carport", "maurer"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "garage",
      itemSlug: "garagenfundament-plattenfundament",
    }),
    calculatorLabel: "Garagenfundament berechnen",
    regionalMode: "service",
  },
  "garagentor-einbauen-kosten": {
    serviceSlugs: ["garage", "tueren"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "garage",
      itemSlug: "garagentor-einbauen-oder-austauschen",
    }),
    calculatorLabel: "Garagentor berechnen",
    regionalMode: "service",
  },
  "carport-kosten": {
    serviceSlugs: ["carport", "garage"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "carport",
      itemSlug: "carport-holz-inkl-montage",
    }),
    calculatorLabel: "Carport berechnen",
    regionalMode: "service",
  },
};

export function getGuideSilo(slug: string): GuideSilo {
  return garageGuideSilos[slug] ?? getBalconyGuideSilo(slug);
}

export function getGuideSiloServices(slug: string) {
  const config = getGuideSilo(slug);
  return config.serviceSlugs
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
}

export function getGuideRegions() {
  return getBalconyGuideRegions();
}

export function getGuideRegionalServices(slug: string, limit = 3) {
  return getGuideSiloServices(slug).slice(0, Math.max(1, limit));
}
