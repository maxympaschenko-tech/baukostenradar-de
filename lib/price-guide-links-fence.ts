import {
  getPriceGuideLink as getChimneyPriceGuideLink,
  getServiceGuideLink as getChimneyServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links-chimney";

export type { PriceGuideLink } from "./price-guide-links-chimney";

const serviceGuides: Record<string, PriceGuideLink> = {
  zaunbau: {
    href: "/ratgeber/zaun-bauen-kosten-pro-meter",
    title: "Zaun bauen: Kosten pro Meter 2026",
    cta: "Zaunbau-Ratgeber öffnen",
  },
};

const itemGuides: Record<string, PriceGuideLink> = {
  "zaunbau:zaun-bauen-lassen-standardspanne": {
    href: "/ratgeber/zaun-bauen-kosten-pro-meter",
    title: "Zaun bauen lassen: Kosten pro Meter 2026",
    cta: "Zaunbau-Ratgeber öffnen",
  },
  "zaunbau:maschendrahtzaun-material": {
    href: "/ratgeber/maschendrahtzaun-kosten-pro-meter",
    title: "Maschendrahtzaun: Materialkosten pro Meter 2026",
    cta: "Maschendraht-Ratgeber öffnen",
  },
  "zaunbau:holzzaun-material": {
    href: "/ratgeber/holzzaun-kosten-pro-meter",
    title: "Holzzaun: Materialkosten pro Meter 2026",
    cta: "Holzzaun-Ratgeber öffnen",
  },
  "zaunbau:sichtschutzzaun-holz-komplett": {
    href: "/ratgeber/sichtschutzzaun-kosten-pro-meter",
    title: "Sichtschutzzaun aus Holz: Kosten pro Meter 2026",
    cta: "Sichtschutz-Ratgeber öffnen",
  },
  "zaunbau:kunststoffzaun-material": {
    href: "/ratgeber/sichtschutzzaun-kosten-pro-meter",
    title: "Kunststoffzaun: Materialkosten pro Meter 2026",
    cta: "Sichtschutz-Ratgeber öffnen",
  },
  "zaunbau:sichtschutzzaun-kunststoff-komplett": {
    href: "/ratgeber/sichtschutzzaun-kosten-pro-meter",
    title: "Sichtschutzzaun aus Kunststoff: Kosten pro Meter 2026",
    cta: "Sichtschutz-Ratgeber öffnen",
  },
  "zaunbau:metallzaun-oder-doppelstabmatten-material": {
    href: "/ratgeber/doppelstabmattenzaun-kosten-pro-meter",
    title: "Doppelstabmatten- und Metallzaun: Kosten pro Meter 2026",
    cta: "Doppelstabmatten-Ratgeber öffnen",
  },
  "zaunbau:schmiedeeisen-zaun-material": {
    href: "/ratgeber/zaun-bauen-kosten-pro-meter",
    title: "Schmiedeeisen-Zaun: Materialkosten pro Meter 2026",
    cta: "Zaunbau-Ratgeber öffnen",
  },
  "zaunbau:zaunmontage-einfach-holz-kunststoff-oder-matten": {
    href: "/ratgeber/zaun-bauen-kosten-pro-meter",
    title: "Zaunmontage: Arbeitskosten pro Meter 2026",
    cta: "Zaunbau-Ratgeber öffnen",
  },
  "zaunbau:maschendrahtzaun-montieren": {
    href: "/ratgeber/maschendrahtzaun-kosten-pro-meter",
    title: "Maschendrahtzaun montieren: Kosten pro Meter 2026",
    cta: "Maschendraht-Ratgeber öffnen",
  },
  "zaunbau:sichtschutzzaun-montieren": {
    href: "/ratgeber/sichtschutzzaun-kosten-pro-meter",
    title: "Sichtschutzzaun montieren: Kosten pro Meter 2026",
    cta: "Sichtschutz-Ratgeber öffnen",
  },
  "zaunbau:maschendrahtzaun-20-meter-beispiel": {
    href: "/ratgeber/maschendrahtzaun-kosten-pro-meter",
    title: "Maschendrahtzaun: Kostenbeispiel für 20 Meter",
    cta: "Maschendraht-Ratgeber öffnen",
  },
  "zaunbau:holzzaun-20-meter-beispiel": {
    href: "/ratgeber/holzzaun-kosten-pro-meter",
    title: "Holzzaun: Kostenbeispiel für 20 Meter",
    cta: "Holzzaun-Ratgeber öffnen",
  },
  "zaunbau:metallzaun-20-meter-beispiel": {
    href: "/ratgeber/doppelstabmattenzaun-kosten-pro-meter",
    title: "Metallzaun: Kostenbeispiel für 20 Meter",
    cta: "Doppelstabmatten-Ratgeber öffnen",
  },
  "zaunbau:sichtschutzzaun-holz-20-meter-beispiel": {
    href: "/ratgeber/sichtschutzzaun-kosten-pro-meter",
    title: "Holz-Sichtschutz: Kostenbeispiel für 20 Meter",
    cta: "Sichtschutz-Ratgeber öffnen",
  },
  "zaunbau:sichtschutzzaun-kunststoff-20-meter-beispiel": {
    href: "/ratgeber/sichtschutzzaun-kosten-pro-meter",
    title: "Kunststoff-Sichtschutz: Kostenbeispiel für 20 Meter",
    cta: "Sichtschutz-Ratgeber öffnen",
  },
};

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  return serviceGuides[serviceSlug] ?? getChimneyServiceGuideLink(serviceSlug);
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  return itemGuides[`${options.serviceSlug}:${options.itemSlug}`] ?? getChimneyPriceGuideLink(options);
}
