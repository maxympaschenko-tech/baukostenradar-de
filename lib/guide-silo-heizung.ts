import { handwerkerCalculatorHref } from "@/lib/calculator-links";
import { services } from "@/lib/pricing";
import {
  getGuideRegions as getTuerenGuideRegions,
  getGuideSilo as getTuerenGuideSilo,
  type GuideSilo,
} from "./guide-silo-tueren";

export type { GuideSilo } from "./guide-silo-tueren";

const heizungGuideSilos: Record<string, GuideSilo> = {
  "heizung-erneuern-kosten": {
    serviceSlugs: ["heizung", "waermepumpe"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "heizung",
      itemSlug: "standardflachheizkoerper-austauschen-inkl-montage",
    }),
    calculatorLabel: "Heizungskosten berechnen",
    regionalMode: "service",
  },
  "heizkoerper-austauschen-kosten": {
    serviceSlugs: ["heizung"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "heizung",
      itemSlug: "standardflachheizkoerper-austauschen-inkl-montage",
    }),
    calculatorLabel: "Heizkörper berechnen",
    regionalMode: "service",
  },
  "fussbodenheizung-kosten": {
    serviceSlugs: ["heizung", "estrich"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "heizung",
      itemSlug: "fussbodenheizung-im-altbau-nachruesten",
    }),
    calculatorLabel: "Fußbodenheizung berechnen",
    regionalMode: "service",
  },
  "hydraulischer-abgleich-kosten": {
    serviceSlugs: ["heizung"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "heizung",
      itemSlug: "hydraulischer-abgleich-einfamilienhaus",
    }),
    calculatorLabel: "Hydraulischen Abgleich berechnen",
    regionalMode: "service",
  },
  "heizungspumpe-tauschen-kosten": {
    serviceSlugs: ["heizung"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "heizung",
      itemSlug: "heizungspumpe-gegen-hocheffizienzpumpe-tauschen",
    }),
    calculatorLabel: "Heizungspumpe berechnen",
    regionalMode: "service",
  },
};

export function getGuideSilo(slug: string): GuideSilo {
  return heizungGuideSilos[slug] ?? getTuerenGuideSilo(slug);
}

export function getGuideSiloServices(slug: string) {
  const config = getGuideSilo(slug);
  return config.serviceSlugs
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
}

export function getGuideRegions() {
  return getTuerenGuideRegions();
}

export function getGuideRegionalServices(slug: string, limit = 3) {
  return getGuideSiloServices(slug).slice(0, Math.max(1, limit));
}
