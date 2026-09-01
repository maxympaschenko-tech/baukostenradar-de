import { handwerkerCalculatorHref } from "@/lib/calculator-links";
import { services } from "@/lib/pricing";
import {
  getGuideRegions as getPhotovoltaikGuideRegions,
  getGuideSilo as getPhotovoltaikGuideSilo,
  type GuideSilo,
} from "./guide-silo-photovoltaik";

export type { GuideSilo } from "./guide-silo-photovoltaik";

const gartenExpansionSilos: Record<string, GuideSilo> = {
  "pflasterarbeiten-kosten-pro-qm": {
    serviceSlugs: ["garten"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "garten", itemSlug: "betonpflaster-inkl-unterbau-verlegen" }),
    calculatorLabel: "Pflasterarbeiten berechnen",
    regionalMode: "service",
  },
  "rasen-anlegen-kosten-pro-qm": {
    serviceSlugs: ["garten"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "garten", itemSlug: "rasen-neu-anlegen-mit-saat" }),
    calculatorLabel: "Rasenanlage berechnen",
    regionalMode: "service",
  },
  "hecke-pflanzen-kosten-pro-meter": {
    serviceSlugs: ["garten"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "garten", itemSlug: "hecke-pflanzen" }),
    calculatorLabel: "Hecke pflanzen berechnen",
    regionalMode: "service",
  },
  "garten-landschaftsbauer-stundensatz": {
    serviceSlugs: ["garten"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "garten", itemSlug: "garten-und-landschaftsbauer-stundensatz" }),
    calculatorLabel: "GaLaBau-Stundensatz berechnen",
    regionalMode: "service",
  },
  "baumpflege-kosten": {
    serviceSlugs: ["garten"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "garten", itemSlug: "baumrueckschnitt" }),
    calculatorLabel: "Baumpflege berechnen",
    regionalMode: "service",
  },
};

export function getGuideSilo(slug: string): GuideSilo {
  return gartenExpansionSilos[slug] ?? getPhotovoltaikGuideSilo(slug);
}

export function getGuideSiloServices(slug: string) {
  const config = getGuideSilo(slug);
  return config.serviceSlugs
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
}

export function getGuideRegions() {
  return getPhotovoltaikGuideRegions();
}

export function getGuideRegionalServices(slug: string, limit = 3) {
  return getGuideSiloServices(slug).slice(0, Math.max(1, limit));
}
