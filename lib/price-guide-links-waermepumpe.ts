import {
  getPriceGuideLink as getHeizungPriceGuideLink,
  getServiceGuideLink as getHeizungServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links-heizung";

export type { PriceGuideLink } from "./price-guide-links-heizung";

const altbauItems = new Set([
  "waermepumpe-im-altbau-inkl-einbau-und-anpassungen",
]);

const neubauItems = new Set([
  "waermepumpe-im-neubau-inkl-einbau",
]);

const installationItems = new Set([
  "waermepumpe-installieren-und-hydraulisch-einbinden",
  "altheizung-demontieren-mit-pufferspeicher-und-zubehoer",
  "elektrik-fuer-waermepumpe-mit-zaehlerschrank-und-anschluss",
  "hydraulischer-abgleich-fuer-waermepumpe-im-einfamilienhaus",
]);

const heatingSurfaceItems = new Set([
  "niedertemperatur-heizkoerper-fuer-waermepumpe-nachruesten",
]);

const airWaterItems = new Set([
  "luft-wasser-waermepumpe-geraet-10-kw",
]);

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  if (serviceSlug === "waermepumpe") {
    return {
      href: "/ratgeber/waermepumpe-kosten-2026",
      title: "Wärmepumpe: Kosten 2026 nach Projekt und Kostenblock",
      cta: "Wärmepumpen-Ratgeber öffnen",
    };
  }

  return getHeizungServiceGuideLink(serviceSlug);
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  if (options.serviceSlug === "waermepumpe") {
    if (altbauItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/waermepumpe-altbau-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Altbau-Wärmepumpen-Ratgeber öffnen",
      };
    }

    if (neubauItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/waermepumpe-neubau-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Neubau-Wärmepumpen-Ratgeber öffnen",
      };
    }

    if (installationItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/waermepumpe-installation-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Installations-Ratgeber öffnen",
      };
    }

    if (heatingSurfaceItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/waermepumpe-heizkoerper-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Heizkörper-Ratgeber öffnen",
      };
    }

    if (airWaterItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/luft-wasser-waermepumpe-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Luft-Wasser-Ratgeber öffnen",
      };
    }
  }

  return getHeizungPriceGuideLink(options);
}
