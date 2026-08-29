import {
  priceSources as catalogPriceSources,
  regions,
  renovationModel,
  services as catalogServices,
  type PriceItem as CatalogPriceItem,
  type Service as CatalogService,
} from "./catalog";

export const priceSources = {
  ...catalogPriceSources,
  aroundhomeHeizung: {
    name: "Aroundhome - Heizung Kosten 2026",
    url: "https://www.aroundhome.de/heizung/kosten-preise/",
    checkedAt: "29.08.2026",
  },
} as const;

type CommercialSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<CatalogPriceItem, "sourceKey"> & { sourceKey: CommercialSourceKey };
export type Service = Omit<CatalogService, "priceItems"> & { priceItems: PriceItem[] };

export const services: Service[] = catalogServices.map((service) => {
  const catalogService = service as unknown as Service;

  if (service.slug !== "heizung") return catalogService;

  return {
    ...catalogService,
    description: "Aktuelle Richtwerte für Heizungsarbeiten und den Vergleich kompletter Heizsysteme wie Gas, Öl, Pellets, Wärmepumpe, Fernwärme, Solarthermie und Brennstoffzelle in Deutschland.",
    priceItems: [
      ...catalogService.priceItems,
      {
        name: "Elektroheizung komplett",
        low: 2000,
        high: 18000,
        unit: "pro Anlage inkl. Einbau & Zubehör",
        note: "Orientierungswert für ein Einfamilienhaus mit ca. 120 m²; vor individuellen Förderungen",
        sourceKey: "aroundhomeHeizung",
      },
      {
        name: "Gasheizung komplett inkl. Einbau",
        low: 10000,
        high: 21000,
        unit: "pro Anlage inkl. Zubehör",
        note: "Orientierungswert für ein Einfamilienhaus mit ca. 120 m²",
        sourceKey: "aroundhomeHeizung",
      },
      {
        name: "Ölheizung komplett inkl. Einbau",
        low: 11000,
        high: 23000,
        unit: "pro Anlage inkl. Zubehör",
        note: "Orientierungswert für ein Einfamilienhaus mit ca. 120 m²",
        sourceKey: "aroundhomeHeizung",
      },
      {
        name: "Pelletheizung komplett inkl. Einbau",
        low: 18000,
        high: 29000,
        unit: "pro Anlage inkl. Zubehör",
        note: "Orientierungswert für ein Einfamilienhaus mit ca. 120 m²; vor individuellen Förderungen",
        sourceKey: "aroundhomeHeizung",
      },
      {
        name: "Wärmepumpe komplett inkl. Einbau",
        low: 19000,
        high: 50000,
        unit: "pro Anlage inkl. Zubehör",
        note: "Systemübergreifender Orientierungswert für ein Einfamilienhaus mit ca. 120 m²; vor individuellen Förderungen",
        sourceKey: "aroundhomeHeizung",
      },
      {
        name: "Fernwärmeanschluss",
        low: 6000,
        high: 19000,
        unit: "pro Anschluss inkl. Zubehör",
        note: "Orientierungswert für ein Einfamilienhaus mit ca. 120 m²; vor individuellen Förderungen",
        sourceKey: "aroundhomeHeizung",
      },
      {
        name: "Solarthermieanlage",
        low: 8000,
        high: 15000,
        unit: "pro Anlage inkl. Einbau & Zubehör",
        note: "Orientierungswert für ein Einfamilienhaus mit ca. 120 m²; vor individuellen Förderungen",
        sourceKey: "aroundhomeHeizung",
      },
      {
        name: "Brennstoffzellenheizung",
        low: 29000,
        high: 49000,
        unit: "pro Anlage inkl. Einbau & Zubehör",
        note: "Orientierungswert für ein Einfamilienhaus mit ca. 120 m²; vor individuellen Förderungen",
        sourceKey: "aroundhomeHeizung",
      },
    ],
  };
});

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
