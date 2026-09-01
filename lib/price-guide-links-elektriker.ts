import {
  getPriceGuideLink as getFliesenPriceGuideLink,
  getServiceGuideLink as getFliesenServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links-fliesen";

export type { PriceGuideLink } from "./price-guide-links-fliesen";

const elektrikerItems: Record<string, PriceGuideLink> = {
  "elektriker-anfahrt": {
    href: "/ratgeber/elektriker-anfahrt-kosten",
    title: "Elektriker Anfahrt: Kosten 2026",
    cta: "Anfahrts-Ratgeber öffnen",
  },
  "fi-schutzschalter-nachruesten": {
    href: "/ratgeber/fi-schutzschalter-nachruesten-kosten",
    title: "FI-Schutzschalter nachrüsten: Kosten 2026",
    cta: "FI-Ratgeber öffnen",
  },
  "elektroinstallation-neubau": {
    href: "/ratgeber/elektroinstallation-neubau-kosten-pro-qm",
    title: "Elektroinstallation Neubau: Kosten 2026",
    cta: "Neubau-Elektrik-Ratgeber öffnen",
  },
  "smart-home-einrichtung": {
    href: "/ratgeber/smart-home-einrichtung-kosten",
    title: "Smart Home Einrichtung: Kosten 2026",
    cta: "Smart-Home-Ratgeber öffnen",
  },
  "e-auto-wallbox-installieren": {
    href: "/ratgeber/wallbox-installieren-kosten",
    title: "E-Auto Wallbox installieren: Kosten 2026",
    cta: "Wallbox-Ratgeber öffnen",
  },
};

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  if (serviceSlug === "elektriker") {
    return {
      href: "/ratgeber/elektrik-erneuern-altbau",
      title: "Elektrik: Kosten 2026 für Bestand, Neubau und Zusatztechnik",
      cta: "Elektrik-Ratgeber öffnen",
    };
  }

  return getFliesenServiceGuideLink(serviceSlug);
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  if (options.serviceSlug === "elektriker" && elektrikerItems[options.itemSlug]) {
    return elektrikerItems[options.itemSlug];
  }

  return getFliesenPriceGuideLink(options);
}
