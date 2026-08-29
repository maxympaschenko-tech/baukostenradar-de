import {
  priceSources as heatPumpPriceSources,
  regions,
  renovationModel,
  services as heatPumpServices,
  type PriceItem as HeatPumpPriceItem,
  type Service as HeatPumpService,
} from "./catalog-heatpump";

export const priceSources = {
  ...heatPumpPriceSources,
  blauarbeitHeizkoerper2026: {
    name: "Blauarbeit - Heizkörper austauschen Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/heizkoerper-austauschen",
    checkedAt: "29.08.2026",
  },
  myhammerFussbodenheizung2026: {
    name: "MyHammer - Fußbodenheizung verlegen Kosten 2026",
    url: "https://www.my-hammer.de/heizung/preisradar/was-kostet-fussbodenheizung-verlegen",
    checkedAt: "29.08.2026",
  },
  co2HydraulischerAbgleich2026: {
    name: "co2online - Hydraulischer Abgleich Kosten 2026",
    url: "https://www.co2online.de/energie-sparen/heizenergie-sparen/hydraulischer-abgleich/",
    checkedAt: "29.08.2026",
  },
  co2Heizungspumpe2026: {
    name: "co2online - Heizungspumpe tauschen Kosten",
    url: "https://www.co2online.de/modernisieren-und-bauen/heizungspumpe/heizungspumpe-tauschen/",
    checkedAt: "29.08.2026",
  },
} as const;

type HeatingSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<HeatPumpPriceItem, "sourceKey"> & { sourceKey: HeatingSourceKey };
export type Service = Omit<HeatPumpService, "priceItems"> & { priceItems: PriceItem[] };

export const services: Service[] = heatPumpServices.map((service) => {
  const heatPumpService = service as unknown as Service;

  if (service.slug === "heizung") {
    return {
      ...heatPumpService,
      description: "Aktuelle Richtwerte 2026 für komplette Heizsysteme, Heizkörpertausch, Fußbodenheizung, Heizungsoptimierung, hydraulischen Abgleich, Pumpentausch, Wartung und typische Modernisierungsarbeiten in Deutschland.",
      priceItems: [
        ...heatPumpService.priceItems,
        {
          name: "Standardflachheizkörper austauschen inkl. Montage",
          low: 300,
          high: 700,
          unit: "pro Heizkörper",
          note: "Inklusive Standardflachheizkörper, Montage, Demontage und Entsorgung des Altgeräts",
          sourceKey: "blauarbeitHeizkoerper2026",
        },
        {
          name: "Badheizkörper austauschen inkl. Montage",
          low: 350,
          high: 800,
          unit: "pro Heizkörper",
          note: "Handtuchheizkörper inklusive Austausch und Montage",
          sourceKey: "blauarbeitHeizkoerper2026",
        },
        {
          name: "Niedertemperaturheizkörper austauschen inkl. Montage",
          low: 400,
          high: 900,
          unit: "pro Heizkörper",
          note: "Geeignet für niedrige Vorlauftemperaturen, etwa bei Wärmepumpen",
          sourceKey: "blauarbeitHeizkoerper2026",
        },
        {
          name: "Designheizkörper austauschen inkl. Montage",
          low: 500,
          high: 1200,
          unit: "pro Heizkörper",
          sourceKey: "blauarbeitHeizkoerper2026",
        },
        {
          name: "Thermostatventil für Heizkörper Material",
          low: 20,
          high: 60,
          unit: "pro Ventil",
          note: "Materialrichtwert bei verschlissenem Thermostatventil; Arbeitszeit kommt gegebenenfalls hinzu",
          sourceKey: "blauarbeitHeizkoerper2026",
        },
        {
          name: "Fußbodenheizung Nasssystem verlegen",
          low: 40,
          high: 105,
          unit: "pro m²",
          note: "Warmwasser-Fußbodenheizung als Nasssystem; zusätzliche Boden- und Anschlussarbeiten können separat anfallen",
          sourceKey: "myhammerFussbodenheizung2026",
        },
        {
          name: "Fußbodenheizung Dünnschichtsystem verlegen",
          low: 30,
          high: 85,
          unit: "pro m²",
          sourceKey: "myhammerFussbodenheizung2026",
        },
        {
          name: "Fußbodenheizung Trockenbausystem verlegen",
          low: 55,
          high: 115,
          unit: "pro m²",
          sourceKey: "myhammerFussbodenheizung2026",
        },
        {
          name: "Fußbodenheizung im Altbau nachrüsten",
          low: 80,
          high: 150,
          unit: "pro m²",
          note: "Breiter Richtwert inklusive typischer Zusatzarbeiten im Bestand",
          sourceKey: "myhammerFussbodenheizung2026",
        },
        {
          name: "Heizkreisverteiler für Fußbodenheizung",
          low: 300,
          high: 1200,
          unit: "pro Verteiler",
          note: "Zusatzkosten bei wassergeführten Fußbodenheizungen; Dimensionierung nach Heizkreisen",
          sourceKey: "myhammerFussbodenheizung2026",
        },
        {
          name: "Hydraulischer Abgleich Einfamilienhaus",
          low: 650,
          high: 1250,
          unit: "pro Anlage",
          note: "Richtwert für ein durchschnittliches Einfamilienhaus; Ventiltausch oder Pumpentausch beeinflussen den Gesamtpreis",
          sourceKey: "co2HydraulischerAbgleich2026",
        },
        {
          name: "Heizungspumpe gegen Hocheffizienzpumpe tauschen",
          low: 300,
          high: 400,
          unit: "pro Pumpe inkl. Einbau",
          sourceKey: "co2Heizungspumpe2026",
        },
        {
          name: "Heizungspumpe plus hydraulischer Abgleich",
          low: 1325,
          high: 1325,
          unit: "pro Einfamilienhaus",
          note: "Kombinierter Orientierungswert für Pumpentausch und hydraulischen Abgleich",
          sourceKey: "co2Heizungspumpe2026",
        },
        {
          name: "Schlamm- oder Magnetabscheider inkl. Installation",
          low: 300,
          high: 400,
          unit: "pro Anlage",
          note: "Optionale Ergänzung beim Pumpentausch zum Schutz der Hocheffizienzpumpe",
          sourceKey: "co2Heizungspumpe2026",
        },
      ],
    };
  }

  return heatPumpService;
});

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
