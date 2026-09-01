import { handwerkerCalculatorHref } from "@/lib/calculator-links";
import { services } from "@/lib/pricing";
import {
  getGuideRegions as getTrockenbauGuideRegions,
  getGuideSilo as getTrockenbauGuideSilo,
  type GuideSilo,
} from "./guide-silo-trockenbau";

export type { GuideSilo } from "./guide-silo-trockenbau";

const fliesenExpansionSilos: Record<string, GuideSilo> = {
  "fliese-auf-fliese-kosten-pro-qm": {
    serviceSlugs: ["fliesenleger"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "fliesenleger", itemSlug: "fliese-auf-fliese-verlegen" }),
    calculatorLabel: "Überfliesen berechnen",
    regionalMode: "service",
  },
  "fliesen-untergrund-ausgleichen-kosten": {
    serviceSlugs: ["fliesenleger", "estrich"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "fliesenleger", itemSlug: "untergrund-ausgleichen" }),
    calculatorLabel: "Untergrund berechnen",
    regionalMode: "service",
  },
  "silikonfugen-kosten-pro-meter": {
    serviceSlugs: ["fliesenleger", "sanitaer"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "fliesenleger", itemSlug: "silikonfugen-ziehen" }),
    calculatorLabel: "Silikonfugen berechnen",
    regionalMode: "service",
  },
  "fliesen-sockelleisten-kosten-pro-meter": {
    serviceSlugs: ["fliesenleger"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "fliesenleger", itemSlug: "fliesen-sockelleisten-anbringen" }),
    calculatorLabel: "Sockelleisten berechnen",
    regionalMode: "service",
  },
  "fliesenleger-stundensatz": {
    serviceSlugs: ["fliesenleger"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "fliesenleger", itemSlug: "fliesenleger-stundensatz" }),
    calculatorLabel: "Fliesenleger-Stundensatz berechnen",
    regionalMode: "service",
  },
};

export function getGuideSilo(slug: string): GuideSilo {
  return fliesenExpansionSilos[slug] ?? getTrockenbauGuideSilo(slug);
}

export function getGuideSiloServices(slug: string) {
  const config = getGuideSilo(slug);
  return config.serviceSlugs
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
}

export function getGuideRegions() {
  return getTrockenbauGuideRegions();
}

export function getGuideRegionalServices(slug: string, limit = 3) {
  return getGuideSiloServices(slug).slice(0, Math.max(1, limit));
}
