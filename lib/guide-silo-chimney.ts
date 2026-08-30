import { handwerkerCalculatorHref } from "@/lib/calculator-links";
import { services } from "@/lib/pricing";
import {
  getGuideRegions as getGarageGuideRegions,
  getGuideSilo as getGarageGuideSilo,
  type GuideSilo,
} from "./guide-silo-garage";

export type { GuideSilo } from "./guide-silo-garage";

const chimneyGuideSilos: Record<string, GuideSilo> = {
  "schornstein-sanieren-kosten": {
    serviceSlugs: ["schornstein", "kamin"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "schornstein",
      itemSlug: "schornsteinsanierung-gesamt",
    }),
    calculatorLabel: "Schornsteinsanierung berechnen",
    regionalMode: "service",
  },
  "edelstahlschornstein-nachruesten-kosten": {
    serviceSlugs: ["schornstein", "kamin"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "schornstein",
      itemSlug: "edelstahlschornstein-aussen-nachruesten",
    }),
    calculatorLabel: "Schornstein-Nachrüstung berechnen",
    regionalMode: "service",
  },
  "versottung-schornstein-sanieren-kosten": {
    serviceSlugs: ["schornstein"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "schornstein",
      itemSlug: "versotteten-schornstein-sanieren",
    }),
    calculatorLabel: "Versottung sanieren berechnen",
    regionalMode: "service",
  },
  "schornsteinfeger-kosten": {
    serviceSlugs: ["schornstein", "kamin"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "schornstein",
      itemSlug: "schornsteinfeger-einsatz",
    }),
    calculatorLabel: "Schornsteinfeger-Kosten berechnen",
    regionalMode: "service",
  },
  "kamin-bauen-kosten": {
    serviceSlugs: ["kamin", "schornstein"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "kamin",
      itemSlug: "kamin-bauen-gesamt",
    }),
    calculatorLabel: "Kaminbau berechnen",
    regionalMode: "service",
  },
  "kaminkassette-nachruesten-kosten": {
    serviceSlugs: ["kamin", "schornstein"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "kamin",
      itemSlug: "kaminkassette-nachruesten-gesamt",
    }),
    calculatorLabel: "Kaminkassette berechnen",
    regionalMode: "service",
  },
  "kaminofen-kosten": {
    serviceSlugs: ["kamin", "schornstein"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "kamin",
      itemSlug: "kaminofen-anschaffung",
    }),
    calculatorLabel: "Kaminofen berechnen",
    regionalMode: "service",
  },
};

export function getGuideSilo(slug: string): GuideSilo {
  return chimneyGuideSilos[slug] ?? getGarageGuideSilo(slug);
}

export function getGuideSiloServices(slug: string) {
  const config = getGuideSilo(slug);
  return config.serviceSlugs
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
}

export function getGuideRegions() {
  return getGarageGuideRegions();
}

export function getGuideRegionalServices(slug: string, limit = 3) {
  return getGuideSiloServices(slug).slice(0, Math.max(1, limit));
}
