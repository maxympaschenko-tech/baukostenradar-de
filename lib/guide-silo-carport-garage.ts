import { handwerkerCalculatorHref } from "@/lib/calculator-links";
import { services } from "@/lib/pricing";
import {
  getGuideRegions as getWintergartenGuideRegions,
  getGuideSilo as getWintergartenGuideSilo,
  type GuideSilo,
} from "./guide-silo-wintergarten";

export type { GuideSilo } from "./guide-silo-wintergarten";

const carportGarageGuideSilos: Record<string, GuideSilo> = {
  "carport-kosten": {
    serviceSlugs: ["carport", "garage"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "carport",
      itemSlug: "einzelcarport-komplett-mit-aufbau",
    }),
    calculatorLabel: "Carport berechnen",
    regionalMode: "service",
  },
  "garage-bauen-kosten": {
    serviceSlugs: ["garage", "carport"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "garage",
      itemSlug: "garage-gesamtprojekt",
    }),
    calculatorLabel: "Garage berechnen",
    regionalMode: "service",
  },
  "fertiggarage-kosten": {
    serviceSlugs: ["garage", "carport"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "garage",
      itemSlug: "fertiggarage-einzelgarage",
    }),
    calculatorLabel: "Fertiggarage berechnen",
    regionalMode: "service",
  },
  "massivgarage-kosten": {
    serviceSlugs: ["garage"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "garage",
      itemSlug: "gemauerte-massivgarage-fachbetrieb",
    }),
    calculatorLabel: "Massivgarage berechnen",
    regionalMode: "service",
  },
  "garagenfundament-kosten": {
    serviceSlugs: ["garage", "carport"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "garage",
      itemSlug: "massivgarage-bodenplatte-fundament",
    }),
    calculatorLabel: "Garagenfundament berechnen",
    regionalMode: "service",
  },
};

export function getGuideSilo(slug: string): GuideSilo {
  return carportGarageGuideSilos[slug] ?? getWintergartenGuideSilo(slug);
}

export function getGuideSiloServices(slug: string) {
  const config = getGuideSilo(slug);
  return config.serviceSlugs
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
}

export function getGuideRegions() {
  return getWintergartenGuideRegions();
}

export function getGuideRegionalServices(slug: string, limit = 3) {
  return getGuideSiloServices(slug).slice(0, Math.max(1, limit));
}
