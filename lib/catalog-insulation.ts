import {
  priceSources as envelopePriceSources,
  regions,
  renovationModel,
  services as envelopeServices,
  type PriceItem as EnvelopePriceItem,
  type Service as EnvelopeService,
} from "./catalog-envelope";

export const priceSources = {
  ...envelopePriceSources,
  blauarbeitFassadendaemmung2026: {
    name: "Blauarbeit - Fassadendämmung Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/fassadendaemmung-kosten",
    checkedAt: "29.08.2026",
  },
  blauarbeitSockeldaemmung2026: {
    name: "Blauarbeit - Sockeldämmung Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/daemmung/sockeldaemmung",
    checkedAt: "29.08.2026",
  },
  blauarbeitZellulose2026: {
    name: "Blauarbeit - Zellulosedämmung Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/daemmung/zellulosedaemmung",
    checkedAt: "29.08.2026",
  },
  co2Kellerdeckendaemmung2026: {
    name: "co2online - Kellerdeckendämmung Kosten",
    url: "https://www.co2online.de/modernisieren-und-bauen/daemmung/kellerdeckendaemmung/",
    checkedAt: "29.08.2026",
  },
} as const;

type InsulationSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<EnvelopePriceItem, "sourceKey"> & { sourceKey: InsulationSourceKey };
export type Service = Omit<EnvelopeService, "priceItems"> & { priceItems: PriceItem[] };

export const services: Service[] = envelopeServices.map((service) => {
  const envelopeService = service as unknown as Service;

  if (service.slug === "daemmung") {
    return {
      ...envelopeService,
      description: "Aktuelle Richtwerte 2026 für Dach-, Fassaden-, Keller- und Geschossdeckendämmung sowie Kerndämmung, WDVS nach Dämmstoff, Sockeldämmung und Zellulose-Einblasdämmung in Deutschland.",
      priceItems: [
        ...envelopeService.priceItems,
        {
          name: "Kerndämmung Einblasdämmung Fassade",
          low: 15,
          high: 30,
          unit: "pro m² Fassadenfläche",
          note: "Für geeignetes zweischaliges Mauerwerk mit nutzbarer Hohlschicht",
          sourceKey: "blauarbeitFassadendaemmung2026",
        },
        {
          name: "WDVS mit EPS Styropor",
          low: 100,
          high: 150,
          unit: "pro m² inkl. Gerüst, Material und Putz",
          sourceKey: "blauarbeitFassadendaemmung2026",
        },
        {
          name: "WDVS mit Mineralwolle",
          low: 120,
          high: 180,
          unit: "pro m² inkl. Gerüst, Material und Putz",
          note: "Höherer Brand- und Schallschutz als typische EPS-Ausführung",
          sourceKey: "blauarbeitFassadendaemmung2026",
        },
        {
          name: "WDVS mit Holzfaser",
          low: 140,
          high: 200,
          unit: "pro m² inkl. Gerüst, Material und Putz",
          note: "Ökologische Ausführung mit gutem sommerlichem Hitzeschutz",
          sourceKey: "blauarbeitFassadendaemmung2026",
        },
        {
          name: "Vorgehängte hinterlüftete Fassadendämmung",
          low: 180,
          high: 300,
          unit: "pro m²",
          note: "Premiumlösung mit Unterkonstruktion und Fassadenbekleidung",
          sourceKey: "blauarbeitFassadendaemmung2026",
        },
        {
          name: "Sockeldämmung",
          low: 60,
          high: 120,
          unit: "pro lfd. Meter",
          note: "Dämmung der Spritzwasser- und Übergangszone zwischen Erdreich und Fassade",
          sourceKey: "blauarbeitSockeldaemmung2026",
        },
        {
          name: "Sockeldämmung Einfamilienhaus komplett",
          low: 2500,
          high: 5000,
          unit: "pro Haus",
          note: "Orientierung inklusive typischer Erdarbeiten am Sockelübergang",
          sourceKey: "blauarbeitSockeldaemmung2026",
        },
        {
          name: "Kellerdeckendämmung von oben mit Bodenbelag",
          low: 50,
          high: 150,
          unit: "pro m²",
          note: "Aufwendigere Variante bei niedriger Kellerhöhe oder paralleler Erdgeschoss-Sanierung",
          sourceKey: "co2Kellerdeckendaemmung2026",
        },
        {
          name: "Kellerdecke per Einblasdämmung",
          low: 15,
          high: 30,
          unit: "pro m²",
          note: "Geeignet für Konstruktionen mit nutzbaren Hohlräumen",
          sourceKey: "co2Kellerdeckendaemmung2026",
        },
        {
          name: "Kellerdecke per Sprühdämmung",
          low: 20,
          high: 50,
          unit: "pro m²",
          note: "Geeignet bei schwer zugänglichen oder unregelmäßigen Deckenflächen",
          sourceKey: "co2Kellerdeckendaemmung2026",
        },
        {
          name: "Zellulosedämmung eingeblasen 140 mm",
          low: 15,
          high: 25,
          unit: "pro m²",
          note: "Richtwert für eingeblasene Zellulose; Einsatz vor allem in geeigneten Hohlräumen",
          sourceKey: "blauarbeitZellulose2026",
        },
      ],
    };
  }

  return envelopeService;
});

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
