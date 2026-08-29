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
  aroundhomeFassadenanstrich: {
    name: "Aroundhome - Fassadenanstrich Kosten 2026",
    url: "https://www.aroundhome.de/fassade/fassadenanstrich/preise-kosten/",
    checkedAt: "29.08.2026",
  },
  co2Fassadendaemmung: {
    name: "co2online - Fassadendämmung Kosten",
    url: "https://www.co2online.de/modernisieren-und-bauen/daemmung/uebersicht-fassadendaemmung/",
    checkedAt: "29.08.2026",
  },
} as const;

type CommercialSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<CatalogPriceItem, "sourceKey"> & { sourceKey: CommercialSourceKey };
export type Service = Omit<CatalogService, "priceItems"> & { priceItems: PriceItem[] };

export const services: Service[] = catalogServices.map((service) => {
  const catalogService = service as unknown as Service;

  if (service.slug === "heizung") {
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
  }

  if (service.slug === "fassade") {
    return {
      ...catalogService,
      description: "Aktuelle Richtwerte für Fassadenanstrich, Reinigung, Gerüst, Putzreparaturen, Dämmverfahren und Fassadenarbeiten in Deutschland.",
      priceItems: [
        ...catalogService.priceItems,
        {
          name: "Fassadengerüst aufstellen & mieten",
          low: 8,
          high: 16,
          unit: "pro m² Fassadenfläche",
          note: "Orientierung für etwa vier Wochen Standzeit bei einem typischen Einfamilienhaus",
          sourceKey: "aroundhomeFassadenanstrich",
        },
        {
          name: "Fassadenreinigung mit Hochdruck",
          low: 5,
          high: 15,
          unit: "pro m²",
          note: "Einzelbeauftragte einfache Hochdruckreinigung; Verschmutzung und Zugänglichkeit beeinflussen den Preis",
          sourceKey: "aroundhomeFassadenanstrich",
        },
        {
          name: "Algen- und Pilzbehandlung Fassade",
          low: 5,
          high: 15,
          unit: "pro m²",
          sourceKey: "aroundhomeFassadenanstrich",
        },
        {
          name: "Fassade grundieren",
          low: 3,
          high: 6,
          unit: "pro m²",
          sourceKey: "aroundhomeFassadenanstrich",
        },
        {
          name: "Zweifacher Fassadenanstrich",
          low: 15,
          high: 35,
          unit: "pro m² Arbeit & Material",
          note: "Reiner zweifacher Farbauftrag; Gerüst, Reinigung und zusätzliche Vorarbeiten separat",
          sourceKey: "aroundhomeFassadenanstrich",
        },
        {
          name: "Putzabplatzungen ausbessern",
          low: 15,
          high: 30,
          unit: "pro m² betroffener Fläche",
          note: "Richtwert abhängig von Tiefe und Zustand des vorhandenen Putzes",
          sourceKey: "aroundhomeFassadenanstrich",
        },
        {
          name: "Kerndämmung / Einblasdämmung Fassade",
          low: 25,
          high: 60,
          unit: "pro m²",
          note: "Gesamtkosten aus Dämmstoff und Montage bei geeigneter zweischaliger Außenwand",
          sourceKey: "co2Fassadendaemmung",
        },
        {
          name: "WDVS Fassadendämmung",
          low: 160,
          high: 200,
          unit: "pro m²",
          note: "Wärmedämmverbundsystem inklusive Dämmstoff und Montage laut Quellenorientierung",
          sourceKey: "co2Fassadendaemmung",
        },
      ],
    };
  }

  return catalogService;
});

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
