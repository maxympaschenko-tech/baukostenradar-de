import { handwerkerCalculatorHref } from "@/lib/calculator-links";
import { services } from "@/lib/pricing";
import {
  getGuideRegions as getBaseGuideRegions,
  getGuideSilo as getBaseGuideSilo,
  type GuideSilo,
} from "./guide-silo";

export type { GuideSilo } from "./guide-silo";

const rc2GuideSlug = "haustuer-rc2-kosten";

export function getGuideSilo(slug: string): GuideSilo {
  if (slug === rc2GuideSlug) {
    return {
      serviceSlugs: ["tueren", "fenster", "fassade"],
      calculatorHref: handwerkerCalculatorHref({
        serviceSlug: "tueren",
        itemSlug: "haustuer-holz-alu-rc2-inkl-montage",
      }),
      calculatorLabel: "RC2-Haustür berechnen",
      regionalMode: "service",
    };
  }

  return getBaseGuideSilo(slug);
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
