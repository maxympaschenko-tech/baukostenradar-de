import { handwerkerCalculatorHref } from "@/lib/calculator-links";
import { services } from "@/lib/pricing";
import {
  getGuideRegions as getBaseGuideRegions,
  getGuideSilo as getBaseGuideSilo,
  type GuideSilo,
} from "./guide-silo";

export type { GuideSilo } from "./guide-silo";

const doorGuideSilos: Record<string, GuideSilo> = {
  "innentuer-einbauen-kosten": {
    serviceSlugs: ["tueren"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "tueren",
      itemSlug: "innentuer-mit-zarge-inkl-montage",
    }),
    calculatorLabel: "Innentür berechnen",
    regionalMode: "service",
  },
  "haustuer-kunststoff-kosten": {
    serviceSlugs: ["tueren", "fenster", "fassade"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "tueren",
      itemSlug: "haustuer-kunststoff-inkl-montage",
    }),
    calculatorLabel: "Kunststoff-Haustür berechnen",
    regionalMode: "service",
  },
  "haustuer-rc2-kosten": {
    serviceSlugs: ["tueren", "fenster", "fassade"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "tueren",
      itemSlug: "haustuer-holz-alu-rc2-inkl-montage",
    }),
    calculatorLabel: "RC2-Haustür berechnen",
    regionalMode: "service",
  },
};

const roofGuideSilos: Record<string, GuideSilo> = {
  "dachfenster-nachtraeglich-einbauen-kosten": {
    serviceSlugs: ["dachsanierung", "fenster", "daemmung"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "dachsanierung",
      itemSlug: "dachfenster-nachtraeglich-einbauen",
    }),
    calculatorLabel: "Dachfenster nachträglich einbauen berechnen",
    regionalMode: "service",
  },
  "dachfenster-austauschen-kosten": {
    serviceSlugs: ["dachsanierung", "fenster", "daemmung"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "dachsanierung",
      itemSlug: "dachfenster-1-1-austauschen",
    }),
    calculatorLabel: "Dachfenster austauschen berechnen",
    regionalMode: "service",
  },
};

const electricalGuideSilos: Record<string, GuideSilo> = {
  "elektrik-erneuern-altbau": {
    serviceSlugs: ["elektriker"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "elektriker",
      itemSlug: "komplett-neuinstallation",
    }),
    calculatorLabel: "Elektro-Neuinstallation berechnen",
    regionalMode: "service",
  },
  "elektrik-erneuern-100-qm-kosten": {
    serviceSlugs: ["elektriker"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "elektriker",
      itemSlug: "komplett-neuinstallation",
    }),
    calculatorLabel: "Elektrik für 100 m² berechnen",
    regionalMode: "service",
  },
};

const bathGuideSilos: Record<string, GuideSilo> = {
  "bad-komplett-sanieren-kosten": {
    serviceSlugs: ["badsanierung", "sanitaer", "fliesenleger"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "badsanierung",
      itemSlug: "bad-neubau-sanierung",
    }),
    calculatorLabel: "Badkosten berechnen",
    regionalMode: "service",
  },
  "bad-10-qm-sanieren-kosten": {
    serviceSlugs: ["badsanierung", "sanitaer", "fliesenleger"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "badsanierung",
      itemSlug: "bad-neubau-sanierung",
      quantity: 10,
    }),
    calculatorLabel: "10 m² Bad berechnen",
    regionalMode: "service",
  },
  "bad-entkernen-kosten": {
    serviceSlugs: ["badsanierung", "sanitaer", "fliesenleger"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "sanitaer",
      itemSlug: "demontage-entsorgung-altbad",
    }),
    calculatorLabel: "Bad-Rückbau berechnen",
    regionalMode: "service",
  },
  "bad-komplett-verfliesen-kosten": {
    serviceSlugs: ["badsanierung", "sanitaer", "fliesenleger"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "badsanierung",
      itemSlug: "komplettverfliesung-bad",
    }),
    calculatorLabel: "Badverfliesung berechnen",
    regionalMode: "service",
  },
  "bad-abdichten-kosten-pro-qm": {
    serviceSlugs: ["badsanierung", "sanitaer", "fliesenleger"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "badsanierung",
      itemSlug: "verbundabdichtung-nassbereich",
    }),
    calculatorLabel: "Badabdichtung berechnen",
    regionalMode: "service",
  },
  "sanitaerobjekte-bad-kosten": {
    serviceSlugs: ["badsanierung", "sanitaer", "fliesenleger"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "sanitaer",
      itemSlug: "sanitaerobjekte-armaturen-fuer-8-m2-bad",
    }),
    calculatorLabel: "Sanitärobjekte berechnen",
    regionalMode: "service",
  },
};

const malerGuideSilos: Record<string, GuideSilo> = {
  "maler-kosten-pro-qm": {
    serviceSlugs: ["maler", "trockenbau", "fassade"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "maler",
      itemSlug: "waende-streichen",
    }),
    calculatorLabel: "Malerarbeiten berechnen",
    regionalMode: "service",
  },
  "waende-streichen-kosten-pro-qm": {
    serviceSlugs: ["maler", "trockenbau"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "maler",
      itemSlug: "waende-streichen",
    }),
    calculatorLabel: "Wände streichen berechnen",
    regionalMode: "service",
  },
  "tapezieren-kosten-pro-qm": {
    serviceSlugs: ["maler", "trockenbau"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "maler",
      itemSlug: "tapezieren-inkl-tapete",
    }),
    calculatorLabel: "Tapezieren berechnen",
    regionalMode: "service",
  },
  "innenputz-q3-kosten-pro-qm": {
    serviceSlugs: ["maler", "trockenbau"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "maler",
      itemSlug: "innenputz-glaetten-q3",
    }),
    calculatorLabel: "Innenputz Q3 berechnen",
    regionalMode: "service",
  },
};

const fliesenGuideSilos: Record<string, GuideSilo> = {
  "fliesenleger-kosten-pro-qm": {
    serviceSlugs: ["fliesenleger", "badsanierung", "sanitaer"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "fliesenleger",
      itemSlug: "standard-fliesen-verlegen",
    }),
    calculatorLabel: "Fliesenlegerkosten berechnen",
    regionalMode: "service",
  },
  "fliesen-verlegen-kosten-pro-qm": {
    serviceSlugs: ["fliesenleger", "badsanierung"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "fliesenleger",
      itemSlug: "standard-fliesen-verlegen",
    }),
    calculatorLabel: "Standardfliesen berechnen",
    regionalMode: "service",
  },
  "grossformat-fliesen-verlegen-kosten": {
    serviceSlugs: ["fliesenleger", "badsanierung"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "fliesenleger",
      itemSlug: "grossformat-ab-80-x-80-cm",
    }),
    calculatorLabel: "Großformat-Fliesen berechnen",
    regionalMode: "service",
  },
  "mosaik-fliesen-verlegen-kosten-pro-qm": {
    serviceSlugs: ["fliesenleger", "badsanierung"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "fliesenleger",
      itemSlug: "mosaik-fliesen-verlegen",
    }),
    calculatorLabel: "Mosaikfliesen berechnen",
    regionalMode: "service",
  },
  "naturstein-verlegen-kosten-pro-qm": {
    serviceSlugs: ["fliesenleger", "badsanierung"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "fliesenleger",
      itemSlug: "naturstein-verlegen",
    }),
    calculatorLabel: "Naturstein berechnen",
    regionalMode: "service",
  },
};

const bodenGuideSilos: Record<string, GuideSilo> = {
  "bodenleger-kosten-pro-qm": {
    serviceSlugs: ["bodenleger", "estrich"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "bodenleger",
      itemSlug: "vinylboden-klick-inkl-material",
    }),
    calculatorLabel: "Bodenlegerkosten berechnen",
    regionalMode: "service",
  },
  "vinylboden-verlegen-kosten-pro-qm": {
    serviceSlugs: ["bodenleger", "estrich"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "bodenleger",
      itemSlug: "vinylboden-klick-inkl-material",
    }),
    calculatorLabel: "Vinylboden berechnen",
    regionalMode: "service",
  },
  "parkett-verlegen-kosten-pro-qm": {
    serviceSlugs: ["bodenleger", "estrich"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "bodenleger",
      itemSlug: "parkett-verlegen-inkl-material",
    }),
    calculatorLabel: "Parkett verlegen berechnen",
    regionalMode: "service",
  },
  "laminat-verlegen-kosten-pro-qm": {
    serviceSlugs: ["bodenleger", "estrich"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "bodenleger",
      itemSlug: "laminat-verlegen",
    }),
    calculatorLabel: "Laminat verlegen berechnen",
    regionalMode: "service",
  },
  "boden-sanieren-kosten-pro-qm": {
    serviceSlugs: ["bodenleger", "estrich"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "bodenleger",
      itemSlug: "boden-sanierung-alt-raus-neu-rein",
    }),
    calculatorLabel: "Bodensanierung berechnen",
    regionalMode: "service",
  },
  "parkett-abschleifen-kosten": {
    serviceSlugs: ["bodenleger"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "bodenleger",
      itemSlug: "parkett-abschleifen-und-oelen",
    }),
    calculatorLabel: "Parkett abschleifen berechnen",
    regionalMode: "service",
  },
};

const trockenbauGuideSilos: Record<string, GuideSilo> = {
  "trockenbau-kosten-pro-qm": {
    serviceSlugs: ["trockenbau", "maler"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "trockenbau",
      itemSlug: "trockenbauwand-beidseitig-beplankt",
    }),
    calculatorLabel: "Trockenbaukosten berechnen",
    regionalMode: "service",
  },
  "trockenbauwand-kosten-pro-qm": {
    serviceSlugs: ["trockenbau", "maler"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "trockenbau",
      itemSlug: "trockenbauwand-beidseitig-beplankt",
    }),
    calculatorLabel: "Trockenbauwand berechnen",
    regionalMode: "service",
  },
  "verspachtelung-q4-kosten-pro-qm": {
    serviceSlugs: ["trockenbau", "maler"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "trockenbau",
      itemSlug: "verspachtelung-q4",
    }),
    calculatorLabel: "Verspachtelung Q4 berechnen",
    regionalMode: "service",
  },
};

const serviceAugments: Record<string, string[]> = {
  "klinkerfassade-kosten-pro-qm": ["maurer"],
};

export function getGuideSilo(slug: string): GuideSilo {
  const explicit =
    doorGuideSilos[slug] ??
    roofGuideSilos[slug] ??
    electricalGuideSilos[slug] ??
    bathGuideSilos[slug] ??
    malerGuideSilos[slug] ??
    fliesenGuideSilos[slug] ??
    bodenGuideSilos[slug] ??
    trockenbauGuideSilos[slug];
  if (explicit) return explicit;

  const base = getBaseGuideSilo(slug);
  const extraServices = serviceAugments[slug];
  if (!extraServices) return base;

  return {
    ...base,
    serviceSlugs: [...new Set([...base.serviceSlugs, ...extraServices])],
  };
}

export function getGuideSiloServices(slug: string) {
  const config = getGuideSilo(slug);
  return config.serviceSlugs
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
}

export function getGuideRegions() {
  return getBaseGuideRegions();
}

export function getGuideRegionalServices(slug: string, limit = 3) {
  return getGuideSiloServices(slug).slice(0, Math.max(1, limit));
}
