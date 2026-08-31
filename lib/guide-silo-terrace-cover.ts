import { handwerkerCalculatorHref } from "@/lib/calculator-links";
import { services } from "@/lib/pricing";
import {
  getGuideRegions as getTerraceGuideRegions,
  getGuideSilo as getTerraceGuideSilo,
  type GuideSilo,
} from "./guide-silo-terrace";

export type { GuideSilo } from "./guide-silo-terrace";

const terraceCoverGuideSilos: Record<string, GuideSilo> = {
  "terrassenueberdachung-kosten": {
    serviceSlugs: ["terrassenueberdachung", "terrassenbau"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "terrassenueberdachung",
      itemSlug: "terrassenueberdachung-komplett-mit-montage-und-fundament",
    }),
    calculatorLabel: "Terrassenüberdachung berechnen",
    regionalMode: "service",
  },
  "holz-terrassenueberdachung-kosten": {
    serviceSlugs: ["terrassenueberdachung"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "terrassenueberdachung",
      itemSlug: "holz-terrassenueberdachung-mit-kunststoff-4-x-3-m-wandmontage",
    }),
    calculatorLabel: "Holz-Terrassendach berechnen",
    regionalMode: "service",
  },
  "alu-terrassenueberdachung-kosten": {
    serviceSlugs: ["terrassenueberdachung"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "terrassenueberdachung",
      itemSlug: "aluminium-terrassenueberdachung-mit-sicherheitsglas-4-x-3-m-wandmontage",
    }),
    calculatorLabel: "Alu-Terrassendach berechnen",
    regionalMode: "service",
  },
  "glasdach-terrasse-kosten": {
    serviceSlugs: ["terrassenueberdachung"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "terrassenueberdachung",
      itemSlug: "vsg-klarglas-terrassendach",
    }),
    calculatorLabel: "Terrassen-Glasdach berechnen",
    regionalMode: "service",
  },
  "lamellendach-pergola-kosten": {
    serviceSlugs: ["terrassenueberdachung", "terrassenbau"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "terrassenueberdachung",
      itemSlug: "lamellenpergola-bausatz-mit-verstellbarem-dach",
    }),
    calculatorLabel: "Lamellendach berechnen",
    regionalMode: "service",
  },
};

export function getGuideSilo(slug: string): GuideSilo {
  return terraceCoverGuideSilos[slug] ?? getTerraceGuideSilo(slug);
}

export function getGuideSiloServices(slug: string) {
  const config = getGuideSilo(slug);
  return config.serviceSlugs
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
}

export function getGuideRegions() {
  return getTerraceGuideRegions();
}

export function getGuideRegionalServices(slug: string, limit = 3) {
  return getGuideSiloServices(slug).slice(0, Math.max(1, limit));
}
