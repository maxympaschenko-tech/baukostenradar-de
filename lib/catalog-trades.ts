import {
  priceSources as commercialPriceSources,
  regions,
  renovationModel,
  services as commercialServices,
  type PriceItem as CommercialPriceItem,
  type Service as CommercialService,
} from "./catalog-commercial";

export const priceSources = {
  ...commercialPriceSources,
  handwerkermatchElektriker: {
    name: "HandwerkerMatch - Elektriker Kosten 2026",
    url: "https://www.handwerkermatch.de/ratgeber/elektriker-kosten",
    checkedAt: "29.08.2026",
  },
} as const;

type TradeSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<CommercialPriceItem, "sourceKey"> & { sourceKey: TradeSourceKey };
export type Service = Omit<CommercialService, "priceItems"> & { priceItems: PriceItem[] };

export const services: Service[] = commercialServices.map((service) => {
  const commercialService = service as unknown as Service;

  if (service.slug !== "elektriker") return commercialService;

  return {
    ...commercialService,
    description: "Aktuelle Richtwerte für Elektriker-Stundensätze, Steckdosen, FI-Schutz, Sicherungskästen, Wallbox, Smart Home und komplette Elektroinstallationen in Deutschland.",
    priceItems: [
      ...commercialService.priceItems,
      {
        name: "Elektriker Anfahrt",
        low: 30,
        high: 70,
        unit: "pro Einsatz",
        note: "Typische zusätzliche Anfahrtskosten; Entfernung und Betrieb können den Betrag verändern",
        sourceKey: "handwerkermatchElektriker",
      },
      {
        name: "FI-Schutzschalter nachrüsten",
        low: 150,
        high: 300,
        unit: "pro Stück",
        sourceKey: "handwerkermatchElektriker",
      },
      {
        name: "Elektroinstallation Neubau",
        low: 80,
        high: 150,
        unit: "pro m² Wohnfläche",
        note: "Flächenbezogener Richtwert für eine komplette Neuinstallation im Neubau",
        sourceKey: "handwerkermatchElektriker",
      },
      {
        name: "Smart Home Einrichtung",
        low: 500,
        high: 3000,
        unit: "pro Projekt",
        sourceKey: "elektriker",
      },
      {
        name: "E-Auto Wallbox installieren",
        low: 1200,
        high: 2500,
        unit: "pro Projekt",
        note: "Richtwert aus der bestehenden Elektriker-Quelle für typische Installation",
        sourceKey: "elektriker",
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
