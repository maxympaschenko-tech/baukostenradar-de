import { handwerkerCalculatorHref } from "@/lib/calculator-links";
import { services } from "@/lib/pricing";
import {
  getGuideRegions as getWaermepumpeGuideRegions,
  getGuideSilo as getWaermepumpeGuideSilo,
  type GuideSilo,
} from "./guide-silo-waermepumpe";

export type { GuideSilo } from "./guide-silo-waermepumpe";

const photovoltaikExpansionSilos: Record<string, GuideSilo> = {
  "photovoltaik-4-kwp-kosten": {
    serviceSlugs: ["photovoltaik", "dachsanierung", "elektriker"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "photovoltaik", itemSlug: "pv-anlage-4-kwp-inkl-montage" }),
    calculatorLabel: "Photovoltaik 4 kWp berechnen",
    regionalMode: "service",
  },
  "photovoltaik-20-kwp-kosten": {
    serviceSlugs: ["photovoltaik", "dachsanierung", "elektriker"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "photovoltaik", itemSlug: "pv-anlage-20-kwp-inkl-installation" }),
    calculatorLabel: "Photovoltaik 20 kWp berechnen",
    regionalMode: "service",
  },
  "photovoltaik-25-kwp-kosten": {
    serviceSlugs: ["photovoltaik", "dachsanierung", "elektriker"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "photovoltaik", itemSlug: "pv-anlage-25-kwp-inkl-installation" }),
    calculatorLabel: "Photovoltaik 25 kWp berechnen",
    regionalMode: "service",
  },
  "stromspeicher-5-10-15-kwh-kosten": {
    serviceSlugs: ["photovoltaik", "elektriker"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "photovoltaik", itemSlug: "stromspeicher-10-kwh" }),
    calculatorLabel: "10-kWh-Stromspeicher berechnen",
    regionalMode: "service",
  },
  "stromspeicher-installation-kosten": {
    serviceSlugs: ["photovoltaik", "elektriker"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "photovoltaik", itemSlug: "stromspeicher-montieren-und-elektrisch-integrieren" }),
    calculatorLabel: "Speicherinstallation berechnen",
    regionalMode: "service",
  },
  "pv-wechselrichter-kosten": {
    serviceSlugs: ["photovoltaik", "elektriker"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "photovoltaik", itemSlug: "pv-wechselrichter-standard" }),
    calculatorLabel: "PV-Wechselrichter berechnen",
    regionalMode: "service",
  },
  "pv-smart-meter-kosten": {
    serviceSlugs: ["photovoltaik", "elektriker"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "photovoltaik", itemSlug: "smart-meter-fuer-pv-anlage" }),
    calculatorLabel: "PV Smart Meter berechnen",
    regionalMode: "service",
  },
  "photovoltaik-notstrom-backup-kosten": {
    serviceSlugs: ["photovoltaik", "elektriker"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "photovoltaik", itemSlug: "pv-speicher-full-backup-ersatzstrom" }),
    calculatorLabel: "PV Full-Backup berechnen",
    regionalMode: "service",
  },
  "photovoltaik-betriebskosten": {
    serviceSlugs: ["photovoltaik"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "photovoltaik", itemSlug: "photovoltaik-laufende-betriebskosten" }),
    calculatorLabel: "PV-Betriebskosten berechnen",
    regionalMode: "service",
  },
};

export function getGuideSilo(slug: string): GuideSilo {
  return photovoltaikExpansionSilos[slug] ?? getWaermepumpeGuideSilo(slug);
}

export function getGuideSiloServices(slug: string) {
  const config = getGuideSilo(slug);
  return config.serviceSlugs
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
}

export function getGuideRegions() {
  return getWaermepumpeGuideRegions();
}

export function getGuideRegionalServices(slug: string, limit = 3) {
  return getGuideSiloServices(slug).slice(0, Math.max(1, limit));
}
