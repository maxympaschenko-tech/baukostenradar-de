import { handwerkerCalculatorHref } from "@/lib/calculator-links";
import { services } from "@/lib/pricing";
import {
  getGuideRegions as getPoolGuideRegions,
  getGuideSilo as getPoolGuideSilo,
  type GuideSilo,
} from "./guide-silo-pool";

export type { GuideSilo } from "./guide-silo-pool";

const terraceGuideSilos: Record<string, GuideSilo> = {
  "terrasse-bauen-kosten": {
    serviceSlugs: ["terrassenbau"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "terrassenbau",
      itemSlug: "terrasse-bauen-lassen-gesamtprojekt",
    }),
    calculatorLabel: "Terrassenbau berechnen",
    regionalMode: "service",
  },
  "holzterrasse-kosten": {
    serviceSlugs: ["terrassenbau"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "terrassenbau",
      itemSlug: "holzterrasse-komplett",
    }),
    calculatorLabel: "Holzterrasse berechnen",
    regionalMode: "service",
  },
  "wpc-terrasse-kosten": {
    serviceSlugs: ["terrassenbau"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "terrassenbau",
      itemSlug: "wpc-terrasse-komplett",
    }),
    calculatorLabel: "WPC-Terrasse berechnen",
    regionalMode: "service",
  },
  "terrasse-unterbau-kosten": {
    serviceSlugs: ["terrassenbau"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "terrassenbau",
      itemSlug: "fundament-inkl-bodenaushub",
    }),
    calculatorLabel: "Terrassen-Unterbau berechnen",
    regionalMode: "service",
  },
  "terrasse-pflastern-kosten": {
    serviceSlugs: ["terrassenbau", "garten"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "terrassenbau",
      itemSlug: "steinterrasse-fundament-und-pflasterarbeiten",
    }),
    calculatorLabel: "Steinterrasse berechnen",
    regionalMode: "service",
  },
  "dachterrasse-kosten": {
    serviceSlugs: ["terrassenbau", "dachsanierung"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "terrassenbau",
      itemSlug: "dachterrasse-gesamtprojekt",
    }),
    calculatorLabel: "Dachterrasse berechnen",
    regionalMode: "service",
  },
};

export function getGuideSilo(slug: string): GuideSilo {
  return terraceGuideSilos[slug] ?? getPoolGuideSilo(slug);
}

export function getGuideSiloServices(slug: string) {
  const config = getGuideSilo(slug);
  return config.serviceSlugs
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
}

export function getGuideRegions() {
  return getPoolGuideRegions();
}

export function getGuideRegionalServices(slug: string, limit = 3) {
  return getGuideSiloServices(slug).slice(0, Math.max(1, limit));
}
