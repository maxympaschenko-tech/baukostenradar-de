import {
  getPriceGuideLink as getWaermepumpePriceGuideLink,
  getServiceGuideLink as getWaermepumpeServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links-waermepumpe";

export type { PriceGuideLink } from "./price-guide-links-waermepumpe";

const fourKwpItems = new Set(["pv-anlage-4-kwp-inkl-montage"]);
const twentyKwpItems = new Set(["pv-anlage-20-kwp-inkl-installation"]);
const twentyFiveKwpItems = new Set(["pv-anlage-25-kwp-inkl-installation"]);
const pvWithStorageItems = new Set(["pv-anlage-5-kwp-mit-5-kwh-speicher"]);
const storageCapacityItems = new Set(["stromspeicher-5-kwh", "stromspeicher-10-kwh", "stromspeicher-15-kwh"]);
const storageInstallationItems = new Set(["stromspeicher-montieren-und-elektrisch-integrieren"]);
const inverterItems = new Set(["pv-wechselrichter-standard", "hybrid-wechselrichter"]);
const smartMeterItems = new Set(["smart-meter-fuer-pv-anlage"]);
const backupItems = new Set(["notstrom-oder-backup-box", "pv-speicher-full-backup-ersatzstrom"]);
const operatingCostItems = new Set(["photovoltaik-laufende-betriebskosten"]);

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  if (serviceSlug === "photovoltaik") {
    return {
      href: "/ratgeber/photovoltaik-kosten-2026",
      title: "Photovoltaik: Kosten 2026 nach Anlagengröße und Systemtechnik",
      cta: "Photovoltaik-Ratgeber öffnen",
    };
  }

  return getWaermepumpeServiceGuideLink(serviceSlug);
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  if (options.serviceSlug === "photovoltaik") {
    if (fourKwpItems.has(options.itemSlug)) {
      return { href: "/ratgeber/photovoltaik-4-kwp-kosten", title: `${options.itemName}: Kosten 2026`, cta: "4-kWp-Ratgeber öffnen" };
    }

    if (twentyKwpItems.has(options.itemSlug)) {
      return { href: "/ratgeber/photovoltaik-20-kwp-kosten", title: `${options.itemName}: Kosten 2026`, cta: "20-kWp-Ratgeber öffnen" };
    }

    if (twentyFiveKwpItems.has(options.itemSlug)) {
      return { href: "/ratgeber/photovoltaik-25-kwp-kosten", title: `${options.itemName}: Kosten 2026`, cta: "25-kWp-Ratgeber öffnen" };
    }

    if (pvWithStorageItems.has(options.itemSlug)) {
      return { href: "/ratgeber/photovoltaik-mit-speicher-kosten", title: `${options.itemName}: Kosten 2026`, cta: "PV-mit-Speicher-Ratgeber öffnen" };
    }

    if (storageCapacityItems.has(options.itemSlug)) {
      return { href: "/ratgeber/stromspeicher-5-10-15-kwh-kosten", title: `${options.itemName}: Kosten 2026`, cta: "Speichergrößen-Ratgeber öffnen" };
    }

    if (storageInstallationItems.has(options.itemSlug)) {
      return { href: "/ratgeber/stromspeicher-installation-kosten", title: `${options.itemName}: Kosten 2026`, cta: "Speicherinstallations-Ratgeber öffnen" };
    }

    if (inverterItems.has(options.itemSlug)) {
      return { href: "/ratgeber/pv-wechselrichter-kosten", title: `${options.itemName}: Kosten 2026`, cta: "Wechselrichter-Ratgeber öffnen" };
    }

    if (smartMeterItems.has(options.itemSlug)) {
      return { href: "/ratgeber/pv-smart-meter-kosten", title: `${options.itemName}: Kosten 2026`, cta: "Smart-Meter-Ratgeber öffnen" };
    }

    if (backupItems.has(options.itemSlug)) {
      return { href: "/ratgeber/photovoltaik-notstrom-backup-kosten", title: `${options.itemName}: Kosten 2026`, cta: "PV-Backup-Ratgeber öffnen" };
    }

    if (operatingCostItems.has(options.itemSlug)) {
      return { href: "/ratgeber/photovoltaik-betriebskosten", title: `${options.itemName}: Kosten 2026`, cta: "PV-Betriebskosten-Ratgeber öffnen" };
    }
  }

  return getWaermepumpePriceGuideLink(options);
}
