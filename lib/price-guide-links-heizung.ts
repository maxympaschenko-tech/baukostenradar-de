import {
  getPriceGuideLink as getTuerenPriceGuideLink,
  getServiceGuideLink as getTuerenServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links-tueren";

export type { PriceGuideLink } from "./price-guide-links-tueren";

const radiatorItems = new Set([
  "standardflachheizkoerper-austauschen-inkl-montage",
  "badheizkoerper-austauschen-inkl-montage",
  "niedertemperaturheizkoerper-austauschen-inkl-montage",
  "designheizkoerper-austauschen-inkl-montage",
]);

const floorHeatingItems = new Set([
  "fussbodenheizung-nasssystem-verlegen",
  "fussbodenheizung-duennschichtsystem-verlegen",
  "fussbodenheizung-trockenbausystem-verlegen",
  "fussbodenheizung-im-altbau-nachruesten",
  "heizkreisverteiler-fuer-fussbodenheizung",
]);

const hydraulicItems = new Set([
  "hydraulischer-abgleich-einfamilienhaus",
  "heizungspumpe-plus-hydraulischer-abgleich",
]);

const pumpItems = new Set([
  "heizungspumpe-gegen-hocheffizienzpumpe-tauschen",
  "schlamm-oder-magnetabscheider-inkl-installation",
]);

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  if (serviceSlug === "heizung") {
    return {
      href: "/ratgeber/heizung-erneuern-kosten",
      title: "Heizung erneuern: Kosten 2026",
      cta: "Heizungs-Ratgeber öffnen",
    };
  }

  return getTuerenServiceGuideLink(serviceSlug);
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  if (options.serviceSlug === "heizung") {
    if (radiatorItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/heizkoerper-austauschen-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Heizkörper-Ratgeber öffnen",
      };
    }

    if (floorHeatingItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/fussbodenheizung-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Fußbodenheizungs-Ratgeber öffnen",
      };
    }

    if (hydraulicItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/hydraulischer-abgleich-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Abgleich-Ratgeber öffnen",
      };
    }

    if (pumpItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/heizungspumpe-tauschen-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Heizungspumpen-Ratgeber öffnen",
      };
    }
  }

  return getTuerenPriceGuideLink(options);
}
