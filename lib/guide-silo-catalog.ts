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

const serviceAugments: Record<string, string[]> = {
  "klinkerfassade-kosten-pro-qm": ["maurer"],
};

export function getGuideSilo(slug: string): GuideSilo {
  const explicit = doorGuideSilos[slug] ?? roofGuideSilos[slug] ?? electricalGuideSilos[slug];
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
