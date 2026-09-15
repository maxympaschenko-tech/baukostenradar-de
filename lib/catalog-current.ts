import {
  priceSources as basePriceSources,
  regions,
  renovationModel,
  services as baseServices,
  type PriceItem as BasePriceItem,
  type Service as BaseService,
} from "./catalog-tueren";

export const priceSources = {
  ...basePriceSources,
  co2Perimeterdaemmung: {
    ...basePriceSources.co2Perimeterdaemmung,
    checkedAt: "15.09.2026",
  },
} as const;

export type PriceItem = BasePriceItem;
export type Service = BaseService;

export const services: Service[] = baseServices.map((service) => {
  if (service.slug !== "kellerbau") return service;

  return {
    ...service,
    priceItems: service.priceItems.map((item) => {
      if (item.name !== "Perimeterdämmung Keller komplett") return item;

      return {
        ...item,
        low: 55,
        high: 90,
        note: "co2online nennt für die Perimeterdämmung 55 bis 90 €/m². Die Dämmung wird separat von Erdarbeiten betrachtet; Freilegung, Aushub und gegebenenfalls Wasserhaltung kommen insbesondere im Bestand zusätzlich hinzu.",
        sourceKey: "co2Perimeterdaemmung" as const,
      };
    }),
  };
});

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
