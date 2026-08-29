import {
  priceSources as roofPriceSources,
  regions,
  renovationModel,
  services as roofServices,
  type PriceItem as RoofPriceItem,
  type Service as RoofService,
} from "./catalog-roof";

export const priceSources = {
  ...roofPriceSources,
  blauarbeitWaermepumpe2026: {
    name: "Blauarbeit - Wärmepumpe Kosten & Einbau 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/was-kostet-eine-waermepumpe-inklusive-einbau",
    checkedAt: "29.08.2026",
  },
} as const;

type HeatPumpSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<RoofPriceItem, "sourceKey"> & { sourceKey: HeatPumpSourceKey };
export type Service = Omit<RoofService, "priceItems"> & { priceItems: PriceItem[] };

export const services: Service[] = roofServices.map((service) => {
  const roofService = service as unknown as Service;

  if (service.slug === "waermepumpe") {
    return {
      ...roofService,
      description: "Aktuelle Richtwerte 2026 für Luft-Wasser-, Erd- und Wasser-Wasser-Wärmepumpen, Neubau und Altbau, Installation, hydraulische Einbindung, Elektrik, Heizkörperanpassung, Erschließung, Wartung und laufende Stromkosten in Deutschland.",
      priceItems: [
        ...roofService.priceItems,
        {
          name: "Wärmepumpe im Neubau inkl. Einbau",
          low: 22000,
          high: 22000,
          unit: "pro Anlage",
          note: "Praxisorientierter Startwert 2026; Ausstattung und Wärmepumpentyp können den Projektpreis erhöhen",
          sourceKey: "blauarbeitWaermepumpe2026",
        },
        {
          name: "Wärmepumpe im Altbau inkl. Einbau und Anpassungen",
          low: 30000,
          high: 55000,
          unit: "pro Projekt vor Förderung",
          note: "Im Bestand können Heizkörper, Hydraulik, Elektrik und weitere Anpassungen zusätzliche Kosten verursachen",
          sourceKey: "blauarbeitWaermepumpe2026",
        },
        {
          name: "Luft-Wasser-Wärmepumpe Gerät 10 kW",
          low: 12000,
          high: 18000,
          unit: "pro Gerät",
          note: "Gerätekosten im Beispiel für ein Einfamilienhaus; Installation und Zusatzarbeiten separat",
          sourceKey: "blauarbeitWaermepumpe2026",
        },
        {
          name: "Wärmepumpe installieren und hydraulisch einbinden",
          low: 5000,
          high: 9000,
          unit: "pro Projekt",
          note: "Montage und hydraulische Einbindung im Beispielprojekt ohne Gerätepreis",
          sourceKey: "blauarbeitWaermepumpe2026",
        },
        {
          name: "Altheizung demontieren mit Pufferspeicher und Zubehör",
          low: 3000,
          high: 6000,
          unit: "pro Projekt",
          note: "Kostenblock beim Umstieg von einer bestehenden Heizung auf eine Wärmepumpe",
          sourceKey: "blauarbeitWaermepumpe2026",
        },
        {
          name: "Elektrik für Wärmepumpe mit Zählerschrank und Anschluss",
          low: 1500,
          high: 3000,
          unit: "pro Projekt",
          note: "Elektrische Anpassungen im Beispielprojekt; größerer Umbau am Zählerschrank kann abweichen",
          sourceKey: "blauarbeitWaermepumpe2026",
        },
        {
          name: "Niedertemperatur-Heizkörper für Wärmepumpe nachrüsten",
          low: 300,
          high: 800,
          unit: "pro Heizkörper",
          note: "Typische Anpassung im Altbau, wenn vorhandene Heizflächen für niedrige Vorlauftemperaturen zu klein sind",
          sourceKey: "blauarbeitWaermepumpe2026",
        },
        {
          name: "Hydraulischer Abgleich für Wärmepumpe im Einfamilienhaus",
          low: 650,
          high: 1250,
          unit: "pro Projekt",
          note: "Richtwert für die hydraulische Optimierung im Einfamilienhaus",
          sourceKey: "blauarbeitWaermepumpe2026",
        },
      ],
    };
  }

  return roofService;
});

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
