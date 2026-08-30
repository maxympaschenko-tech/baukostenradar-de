import { handwerkerCalculatorHref } from "@/lib/calculator-links";
import { services } from "@/lib/pricing";
import {
  getGuideRegions as getCurrentGuideRegions,
  getGuideSilo as getCurrentGuideSilo,
  type GuideSilo,
} from "./guide-silo-catalog";

export type { GuideSilo } from "./guide-silo-catalog";

const balconyGuideSilos: Record<string, GuideSilo> = {
  "balkon-sanieren-kosten-pro-qm": {
    serviceSlugs: ["balkon", "fliesenleger", "fassade"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "balkon",
      itemSlug: "balkonsanierung-komplett-inkl-betonsanierung",
    }),
    calculatorLabel: "Balkonsanierung berechnen",
    regionalMode: "service",
  },
  "balkon-abdichten-kosten-pro-qm": {
    serviceSlugs: ["balkon", "fliesenleger", "fassade"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "balkon",
      itemSlug: "balkonabdichtung-fluessigkunststoff-komplett",
    }),
    calculatorLabel: "Balkonabdichtung berechnen",
    regionalMode: "service",
  },
  "balkon-fliesen-kosten-pro-qm": {
    serviceSlugs: ["balkon", "fliesenleger"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "balkon",
      itemSlug: "balkon-oder-terrasse-fliesen-inkl-material",
    }),
    calculatorLabel: "Balkonfliesen berechnen",
    regionalMode: "service",
  },
  "balkongelaender-kosten-pro-meter": {
    serviceSlugs: ["balkon", "treppen"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "balkon",
      itemSlug: "balkongelaender-aluminium-inkl-montage",
    }),
    calculatorLabel: "Balkongeländer berechnen",
    regionalMode: "service",
  },
};

export function getGuideSilo(slug: string): GuideSilo {
  return balconyGuideSilos[slug] ?? getCurrentGuideSilo(slug);
}

export function getGuideSiloServices(slug: string) {
  const config = getGuideSilo(slug);
  return config.serviceSlugs
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
}

export function getGuideRegions() {
  return getCurrentGuideRegions();
}

export function getGuideRegionalServices(slug: string, limit = 3) {
  return getGuideSiloServices(slug).slice(0, Math.max(1, limit));
}
