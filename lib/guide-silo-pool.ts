import { handwerkerCalculatorHref } from "@/lib/calculator-links";
import { services } from "@/lib/pricing";
import {
  getGuideRegions as getFenceGuideRegions,
  getGuideSilo as getFenceGuideSilo,
  type GuideSilo,
} from "./guide-silo-fence";

export type { GuideSilo } from "./guide-silo-fence";

const poolGuideSilos: Record<string, GuideSilo> = {
  "pool-bauen-kosten": {
    serviceSlugs: ["poolbau"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "poolbau",
      itemSlug: "pool-bauen-lassen-gesamtprojekt",
    }),
    calculatorLabel: "Poolbau berechnen",
    regionalMode: "service",
  },
  "gfk-pool-kosten": {
    serviceSlugs: ["poolbau"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "poolbau",
      itemSlug: "gfk-pool-6-x-3-m-komplett",
    }),
    calculatorLabel: "GFK-Pool berechnen",
    regionalMode: "service",
  },
  "betonpool-kosten": {
    serviceSlugs: ["poolbau"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "poolbau",
      itemSlug: "betonpool-6-x-3-m-komplett",
    }),
    calculatorLabel: "Betonpool berechnen",
    regionalMode: "service",
  },
  "pool-erdarbeiten-kosten": {
    serviceSlugs: ["poolbau"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "poolbau",
      itemSlug: "erdarbeiten-mit-abtransport",
    }),
    calculatorLabel: "Pool-Erdarbeiten berechnen",
    regionalMode: "service",
  },
  "pool-betriebskosten": {
    serviceSlugs: ["poolbau"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "poolbau",
      itemSlug: "poolbetrieb-jaehrlich",
    }),
    calculatorLabel: "Pool-Betriebskosten berechnen",
    regionalMode: "service",
  },
};

export function getGuideSilo(slug: string): GuideSilo {
  return poolGuideSilos[slug] ?? getFenceGuideSilo(slug);
}

export function getGuideSiloServices(slug: string) {
  const config = getGuideSilo(slug);
  return config.serviceSlugs
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
}

export function getGuideRegions() {
  return getFenceGuideRegions();
}

export function getGuideRegionalServices(slug: string, limit = 3) {
  return getGuideSiloServices(slug).slice(0, Math.max(1, limit));
}
