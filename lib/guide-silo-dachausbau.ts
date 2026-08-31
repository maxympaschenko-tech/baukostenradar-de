import { handwerkerCalculatorHref } from "@/lib/calculator-links";
import { services } from "@/lib/pricing";
import {
  getGuideRegions as getWintergartenGuideRegions,
  getGuideSilo as getWintergartenGuideSilo,
  type GuideSilo,
} from "./guide-silo-wintergarten";

export type { GuideSilo } from "./guide-silo-wintergarten";

const dachausbauGuideSilos: Record<string, GuideSilo> = {
  "dachausbau-kosten": {
    serviceSlugs: ["dachausbau", "dachsanierung", "daemmung"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "dachausbau",
      itemSlug: "dachausbau-komplett-zum-wohnraum",
    }),
    calculatorLabel: "Dachausbau berechnen",
    regionalMode: "service",
  },
  "dachboden-ausbauen-kosten-pro-qm": {
    serviceSlugs: ["dachausbau", "daemmung", "trockenbau"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "dachausbau",
      itemSlug: "dachdaemmung-beim-dachausbau",
    }),
    calculatorLabel: "Dachboden-Ausbau berechnen",
    regionalMode: "service",
  },
  "dachgaube-kosten": {
    serviceSlugs: ["dachausbau", "dachsanierung"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "dachausbau",
      itemSlug: "standard-fertiggaube",
    }),
    calculatorLabel: "Dachgaube berechnen",
    regionalMode: "service",
  },
  "dach-anheben-kosten": {
    serviceSlugs: ["dachausbau", "dachsanierung", "maurer"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "dachausbau",
      itemSlug: "einfache-kniestockerhoehung",
    }),
    calculatorLabel: "Kniestockerhöhung berechnen",
    regionalMode: "service",
  },
  "dachaufstockung-kosten": {
    serviceSlugs: ["dachausbau", "dachsanierung", "maurer"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "dachausbau",
      itemSlug: "dachaufstockung-neues-geschoss",
    }),
    calculatorLabel: "Dachaufstockung berechnen",
    regionalMode: "service",
  },
};

export function getGuideSilo(slug: string): GuideSilo {
  return dachausbauGuideSilos[slug] ?? getWintergartenGuideSilo(slug);
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
