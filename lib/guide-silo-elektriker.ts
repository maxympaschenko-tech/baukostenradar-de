import { handwerkerCalculatorHref } from "@/lib/calculator-links";
import { services } from "@/lib/pricing";
import {
  getGuideRegions as getFliesenGuideRegions,
  getGuideSilo as getFliesenGuideSilo,
  type GuideSilo,
} from "./guide-silo-fliesen";

export type { GuideSilo } from "./guide-silo-fliesen";

const elektrikerExpansionSilos: Record<string, GuideSilo> = {
  "elektriker-anfahrt-kosten": {
    serviceSlugs: ["elektriker"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "elektriker", itemSlug: "elektriker-anfahrt" }),
    calculatorLabel: "Elektriker-Anfahrt berechnen",
    regionalMode: "service",
  },
  "fi-schutzschalter-nachruesten-kosten": {
    serviceSlugs: ["elektriker"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "elektriker", itemSlug: "fi-schutzschalter-nachruesten" }),
    calculatorLabel: "FI-Nachrüstung berechnen",
    regionalMode: "service",
  },
  "elektroinstallation-neubau-kosten-pro-qm": {
    serviceSlugs: ["elektriker"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "elektriker", itemSlug: "elektroinstallation-neubau" }),
    calculatorLabel: "Neubau-Elektrik berechnen",
    regionalMode: "service",
  },
  "smart-home-einrichtung-kosten": {
    serviceSlugs: ["elektriker"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "elektriker", itemSlug: "smart-home-einrichtung" }),
    calculatorLabel: "Smart Home berechnen",
    regionalMode: "service",
  },
  "wallbox-installieren-kosten": {
    serviceSlugs: ["elektriker", "photovoltaik"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "elektriker", itemSlug: "e-auto-wallbox-installieren" }),
    calculatorLabel: "Wallbox-Installation berechnen",
    regionalMode: "service",
  },
};

export function getGuideSilo(slug: string): GuideSilo {
  return elektrikerExpansionSilos[slug] ?? getFliesenGuideSilo(slug);
}

export function getGuideSiloServices(slug: string) {
  const config = getGuideSilo(slug);
  return config.serviceSlugs
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
}

export function getGuideRegions() {
  return getFliesenGuideRegions();
}

export function getGuideRegionalServices(slug: string, limit = 3) {
  return getGuideSiloServices(slug).slice(0, Math.max(1, limit));
}
