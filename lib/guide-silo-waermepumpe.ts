import { handwerkerCalculatorHref } from "@/lib/calculator-links";
import { services } from "@/lib/pricing";
import {
  getGuideRegions as getHeizungGuideRegions,
  getGuideSilo as getHeizungGuideSilo,
  type GuideSilo,
} from "./guide-silo-heizung";

export type { GuideSilo } from "./guide-silo-heizung";

const waermepumpeGuideSilos: Record<string, GuideSilo> = {
  "waermepumpe-kosten-2026": {
    serviceSlugs: ["waermepumpe", "heizung", "daemmung"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "waermepumpe",
      itemSlug: "waermepumpe-im-altbau-inkl-einbau-und-anpassungen",
    }),
    calculatorLabel: "Wärmepumpenkosten berechnen",
    regionalMode: "service",
  },
  "waermepumpe-altbau-kosten": {
    serviceSlugs: ["waermepumpe", "heizung", "daemmung"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "waermepumpe",
      itemSlug: "waermepumpe-im-altbau-inkl-einbau-und-anpassungen",
    }),
    calculatorLabel: "Altbau-Wärmepumpe berechnen",
    regionalMode: "service",
  },
  "waermepumpe-neubau-kosten": {
    serviceSlugs: ["waermepumpe", "heizung"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "waermepumpe",
      itemSlug: "waermepumpe-im-neubau-inkl-einbau",
    }),
    calculatorLabel: "Neubau-Wärmepumpe berechnen",
    regionalMode: "service",
  },
  "waermepumpe-installation-kosten": {
    serviceSlugs: ["waermepumpe", "heizung", "elektriker"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "waermepumpe",
      itemSlug: "waermepumpe-installieren-und-hydraulisch-einbinden",
    }),
    calculatorLabel: "Wärmepumpen-Installation berechnen",
    regionalMode: "service",
  },
  "waermepumpe-heizkoerper-kosten": {
    serviceSlugs: ["waermepumpe", "heizung"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "waermepumpe",
      itemSlug: "niedertemperatur-heizkoerper-fuer-waermepumpe-nachruesten",
    }),
    calculatorLabel: "Wärmepumpen-Heizkörper berechnen",
    regionalMode: "service",
  },
};

export function getGuideSilo(slug: string): GuideSilo {
  return waermepumpeGuideSilos[slug] ?? getHeizungGuideSilo(slug);
}

export function getGuideSiloServices(slug: string) {
  const config = getGuideSilo(slug);
  return config.serviceSlugs
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
}

export function getGuideRegions() {
  return getHeizungGuideRegions();
}

export function getGuideRegionalServices(slug: string, limit = 3) {
  return getGuideSiloServices(slug).slice(0, Math.max(1, limit));
}
