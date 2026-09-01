import { handwerkerCalculatorHref } from "@/lib/calculator-links";
import { services } from "@/lib/pricing";
import {
  getGuideRegions as getMalerGuideRegions,
  getGuideSilo as getMalerGuideSilo,
  type GuideSilo,
} from "./guide-silo-maler";

export type { GuideSilo } from "./guide-silo-maler";

const trockenbauExpansionSilos: Record<string, GuideSilo> = {
  "trockenbauer-stundensatz": {
    serviceSlugs: ["trockenbau"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "trockenbau", itemSlug: "trockenbauer-stundensatz" }),
    calculatorLabel: "Trockenbauer-Stundensatz berechnen",
    regionalMode: "service",
  },
  "trennwand-holz-kosten-pro-qm": {
    serviceSlugs: ["trockenbau"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "trockenbau", itemSlug: "trennwand-aus-holz" }),
    calculatorLabel: "Holz-Trennwand berechnen",
    regionalMode: "service",
  },
  "vorsatzschale-kosten-pro-qm": {
    serviceSlugs: ["trockenbau"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "trockenbau", itemSlug: "vorsatzschale" }),
    calculatorLabel: "Vorsatzschale berechnen",
    regionalMode: "service",
  },
  "decke-abhaengen-kosten-pro-qm": {
    serviceSlugs: ["trockenbau", "elektriker"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "trockenbau", itemSlug: "decke-abhaengen" }),
    calculatorLabel: "Trockenbaudecke berechnen",
    regionalMode: "service",
  },
  "dachschraege-verkleiden-kosten-pro-qm": {
    serviceSlugs: ["trockenbau", "daemmung", "dachsanierung"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "trockenbau", itemSlug: "dachschraege-verkleiden" }),
    calculatorLabel: "Dachschräge berechnen",
    regionalMode: "service",
  },
  "verspachtelung-q3-kosten-pro-qm": {
    serviceSlugs: ["trockenbau", "maler"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "trockenbau", itemSlug: "verspachtelung-q3" }),
    calculatorLabel: "Q3-Spachtelung berechnen",
    regionalMode: "service",
  },
};

export function getGuideSilo(slug: string): GuideSilo {
  return trockenbauExpansionSilos[slug] ?? getMalerGuideSilo(slug);
}

export function getGuideSiloServices(slug: string) {
  const config = getGuideSilo(slug);
  return config.serviceSlugs
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
}

export function getGuideRegions() {
  return getMalerGuideRegions();
}

export function getGuideRegionalServices(slug: string, limit = 3) {
  return getGuideSiloServices(slug).slice(0, Math.max(1, limit));
}
