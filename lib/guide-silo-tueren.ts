import { handwerkerCalculatorHref } from "@/lib/calculator-links";
import { services } from "@/lib/pricing";
import {
  getGuideRegions as getFensterGuideRegions,
  getGuideSilo as getFensterGuideSilo,
  type GuideSilo,
} from "./guide-silo-fenster";

export type { GuideSilo } from "./guide-silo-fenster";

const tuerenGuideSilos: Record<string, GuideSilo> = {
  "innentueren-kosten": {
    serviceSlugs: ["tueren"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "tueren",
      itemSlug: "zimmertuer-inklusive-tuerelement-und-einbau",
    }),
    calculatorLabel: "Innentüren berechnen",
    regionalMode: "service",
  },
  "tuerzarge-einbauen-kosten": {
    serviceSlugs: ["tueren"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "tueren",
      itemSlug: "tuerzarge-einbauen-komplett-allgemein",
    }),
    calculatorLabel: "Türzarge berechnen",
    regionalMode: "service",
  },
  "haustuer-material-kosten": {
    serviceSlugs: ["tueren"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "tueren",
      itemSlug: "haustuer-komplett-inklusive-einbau",
    }),
    calculatorLabel: "Haustür berechnen",
    regionalMode: "service",
  },
  "haustuer-zusatzausstattung-kosten": {
    serviceSlugs: ["tueren"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "tueren",
      itemSlug: "sicherheitshaustuer-rc3-markenmodell",
    }),
    calculatorLabel: "Haustür-Ausstattung berechnen",
    regionalMode: "service",
  },
  "schiebetuer-einbauen-kosten": {
    serviceSlugs: ["tueren"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "tueren",
      itemSlug: "schiebetuer-einfach-vom-fachbetrieb-einbauen",
    }),
    calculatorLabel: "Schiebetür berechnen",
    regionalMode: "service",
  },
};

export function getGuideSilo(slug: string): GuideSilo {
  return tuerenGuideSilos[slug] ?? getFensterGuideSilo(slug);
}

export function getGuideSiloServices(slug: string) {
  const config = getGuideSilo(slug);
  return config.serviceSlugs
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
}

export function getGuideRegions() {
  return getFensterGuideRegions();
}

export function getGuideRegionalServices(slug: string, limit = 3) {
  return getGuideSiloServices(slug).slice(0, Math.max(1, limit));
}
