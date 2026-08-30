import { handwerkerCalculatorHref } from "@/lib/calculator-links";
import { services } from "@/lib/pricing";
import {
  getGuideRegions as getChimneyGuideRegions,
  getGuideSilo as getChimneyGuideSilo,
  type GuideSilo,
} from "./guide-silo-chimney";

export type { GuideSilo } from "./guide-silo-chimney";

const fenceGuideSilos: Record<string, GuideSilo> = {
  "zaun-bauen-kosten-pro-meter": {
    serviceSlugs: ["zaunbau"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "zaunbau",
      itemSlug: "zaun-bauen-lassen-standardspanne",
    }),
    calculatorLabel: "Zaunbau berechnen",
    regionalMode: "service",
  },
  "doppelstabmattenzaun-kosten-pro-meter": {
    serviceSlugs: ["zaunbau"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "zaunbau",
      itemSlug: "metallzaun-oder-doppelstabmatten-material",
    }),
    calculatorLabel: "Doppelstabmattenzaun berechnen",
    regionalMode: "service",
  },
  "sichtschutzzaun-kosten-pro-meter": {
    serviceSlugs: ["zaunbau"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "zaunbau",
      itemSlug: "sichtschutzzaun-holz-komplett",
    }),
    calculatorLabel: "Sichtschutzzaun berechnen",
    regionalMode: "service",
  },
  "maschendrahtzaun-kosten-pro-meter": {
    serviceSlugs: ["zaunbau"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "zaunbau",
      itemSlug: "maschendrahtzaun-material",
    }),
    calculatorLabel: "Maschendrahtzaun berechnen",
    regionalMode: "service",
  },
  "holzzaun-kosten-pro-meter": {
    serviceSlugs: ["zaunbau"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "zaunbau",
      itemSlug: "holzzaun-material",
    }),
    calculatorLabel: "Holzzaun berechnen",
    regionalMode: "service",
  },
};

export function getGuideSilo(slug: string): GuideSilo {
  return fenceGuideSilos[slug] ?? getChimneyGuideSilo(slug);
}

export function getGuideSiloServices(slug: string) {
  const config = getGuideSilo(slug);
  return config.serviceSlugs
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
}

export function getGuideRegions() {
  return getChimneyGuideRegions();
}

export function getGuideRegionalServices(slug: string, limit = 3) {
  return getGuideSiloServices(slug).slice(0, Math.max(1, limit));
}
