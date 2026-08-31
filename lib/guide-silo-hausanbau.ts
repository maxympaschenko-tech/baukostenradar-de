import { handwerkerCalculatorHref } from "@/lib/calculator-links";
import { services } from "@/lib/pricing";
import {
  getGuideRegions as getDachausbauGuideRegions,
  getGuideSilo as getDachausbauGuideSilo,
  type GuideSilo,
} from "./guide-silo-dachausbau";

export type { GuideSilo } from "./guide-silo-dachausbau";

const hausanbauGuideSilos: Record<string, GuideSilo> = {
  "hausanbau-kosten": {
    serviceSlugs: ["hausanbau", "maurer", "trockenbau"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "hausanbau",
      itemSlug: "hausanbau-schluesselfertig-massiv",
    }),
    calculatorLabel: "Hausanbau berechnen",
    regionalMode: "service",
  },
  "hausanbau-20-30-50-qm-kosten": {
    serviceSlugs: ["hausanbau"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "hausanbau",
      itemSlug: "hausanbau-30-m2-mittelgross",
    }),
    calculatorLabel: "Hausanbau nach Größe berechnen",
    regionalMode: "service",
  },
  "hausanbau-massiv-holz-fertigbau-kosten": {
    serviceSlugs: ["hausanbau", "maurer"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "hausanbau",
      itemSlug: "hausanbau-holzstaenderbauweise",
    }),
    calculatorLabel: "Anbau-Bauweise berechnen",
    regionalMode: "service",
  },
  "hausanbau-rohbau-fundament-kosten": {
    serviceSlugs: ["hausanbau", "maurer"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "hausanbau",
      itemSlug: "rohbau-hausanbau-gebaeudehuelle",
    }),
    calculatorLabel: "Rohbau und Fundament berechnen",
    regionalMode: "service",
  },
  "hausanbau-innenausbau-kosten": {
    serviceSlugs: ["hausanbau", "trockenbau", "elektriker"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "hausanbau",
      itemSlug: "innenausbau-60-m2-hausanbau",
    }),
    calculatorLabel: "Hausanbau-Innenausbau berechnen",
    regionalMode: "service",
  },
};

export function getGuideSilo(slug: string): GuideSilo {
  return hausanbauGuideSilos[slug] ?? getDachausbauGuideSilo(slug);
}

export function getGuideSiloServices(slug: string) {
  const config = getGuideSilo(slug);
  return config.serviceSlugs
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
}

export function getGuideRegions() {
  return getDachausbauGuideRegions();
}

export function getGuideRegionalServices(slug: string, limit = 3) {
  return getGuideSiloServices(slug).slice(0, Math.max(1, limit));
}
