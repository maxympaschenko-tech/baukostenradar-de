import {
  getPriceGuideLink as getBodenPriceGuideLink,
  getServiceGuideLink as getBodenServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links-boden";

export type { PriceGuideLink } from "./price-guide-links-boden";

const sanitaerItems: Record<string, PriceGuideLink> = {
  "sanitaer-anfahrt": {
    href: "/ratgeber/sanitaer-anfahrt-kosten",
    title: "Sanitär Anfahrt: Kosten 2026",
    cta: "Anfahrts-Ratgeber öffnen",
  },
  "wasserhahn-montieren": {
    href: "/ratgeber/wasserhahn-montieren-kosten",
    title: "Wasserhahn montieren: Kosten 2026",
    cta: "Armaturen-Ratgeber öffnen",
  },
  "wc-montieren": {
    href: "/ratgeber/wc-austauschen-kosten",
    title: "WC montieren und austauschen: Kosten 2026",
    cta: "WC-Ratgeber öffnen",
  },
  "spuelkasten-reparieren": {
    href: "/ratgeber/spuelkasten-reparieren-kosten",
    title: "Spülkasten reparieren: Kosten 2026",
    cta: "Spülkasten-Ratgeber öffnen",
  },
  "waschbecken-montieren": {
    href: "/ratgeber/waschbecken-montieren-kosten",
    title: "Waschbecken montieren: Kosten 2026",
    cta: "Waschbecken-Ratgeber öffnen",
  },
  "dusche-einbauen": {
    href: "/ratgeber/dusche-einbauen-kosten",
    title: "Dusche einbauen: Arbeitskosten 2026",
    cta: "Dusch-Ratgeber öffnen",
  },
  "badewanne-einbauen": {
    href: "/ratgeber/badewanne-einbauen-kosten",
    title: "Badewanne einbauen: Arbeitskosten 2026",
    cta: "Badewannen-Ratgeber öffnen",
  },
  "rohrverstopfung-beseitigen": {
    href: "/ratgeber/rohrverstopfung-beseitigen-kosten",
    title: "Rohrverstopfung beseitigen: Kosten 2026",
    cta: "Rohrreinigungs-Ratgeber öffnen",
  },
  "haenge-wc-modern-inkl-montage": {
    href: "/ratgeber/wc-austauschen-kosten",
    title: "Hänge-WC inklusive Montage: Kosten 2026",
    cta: "WC-Ratgeber öffnen",
  },
  "waschtisch-armatur-inkl-montage": {
    href: "/ratgeber/wasserhahn-montieren-kosten",
    title: "Waschtisch-Armatur inklusive Montage: Kosten 2026",
    cta: "Armaturen-Ratgeber öffnen",
  },
};

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  if (serviceSlug === "sanitaer") {
    return {
      href: "/ratgeber/sanitaer-kosten",
      title: "Sanitär Kosten 2026: Montage, Reparatur und Bad",
      cta: "Sanitär-Ratgeber öffnen",
    };
  }
  return getBodenServiceGuideLink(serviceSlug);
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  if (options.serviceSlug === "sanitaer" && sanitaerItems[options.itemSlug]) {
    return sanitaerItems[options.itemSlug];
  }
  return getBodenPriceGuideLink(options);
}
