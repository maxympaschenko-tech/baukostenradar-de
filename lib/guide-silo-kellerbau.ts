import { handwerkerCalculatorHref } from "@/lib/calculator-links";
import { services } from "@/lib/pricing";
import {
  getGuideRegions as getHausanbauGuideRegions,
  getGuideSilo as getHausanbauGuideSilo,
  type GuideSilo,
} from "./guide-silo-hausanbau";

export type { GuideSilo } from "./guide-silo-hausanbau";

const kellerbauGuideSilos: Record<string, GuideSilo> = {
  "kellerbau-kosten": {
    serviceSlugs: ["kellerbau", "maurer"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "kellerbau",
      itemSlug: "standard-nutzkeller-neubau",
    }),
    calculatorLabel: "Kellerbau berechnen",
    regionalMode: "service",
  },
  "fertigkeller-kosten": {
    serviceSlugs: ["kellerbau"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "kellerbau",
      itemSlug: "fertigkeller-standard",
    }),
    calculatorLabel: "Fertigkeller berechnen",
    regionalMode: "service",
  },
  "massivkeller-wohnkeller-kosten": {
    serviceSlugs: ["kellerbau", "maurer"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "kellerbau",
      itemSlug: "massivkeller-nutzkeller",
    }),
    calculatorLabel: "Massivkeller berechnen",
    regionalMode: "service",
  },
  "keller-80-100-120-qm-kosten": {
    serviceSlugs: ["kellerbau"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "kellerbau",
      itemSlug: "fertigkeller-99-m2-komplettkeller",
    }),
    calculatorLabel: "Keller nach Größe berechnen",
    regionalMode: "service",
  },
  "kellerbau-erdarbeiten-weisse-wanne-kosten": {
    serviceSlugs: ["kellerbau", "daemmung"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "kellerbau",
      itemSlug: "weisse-wanne-keller-mehrpreis",
    }),
    calculatorLabel: "Keller-Zusatzkosten berechnen",
    regionalMode: "service",
  },
};

export function getGuideSilo(slug: string): GuideSilo {
  return kellerbauGuideSilos[slug] ?? getHausanbauGuideSilo(slug);
}

export function getGuideSiloServices(slug: string) {
  const config = getGuideSilo(slug);
  return config.serviceSlugs
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
}

export function getGuideRegions() {
  return getHausanbauGuideRegions();
}

export function getGuideRegionalServices(slug: string, limit = 3) {
  return getGuideSiloServices(slug).slice(0, Math.max(1, limit));
}
