import {
  priceSources as demolitionPriceSources,
  regions,
  renovationModel,
  services as demolitionServices,
  type PriceItem as DemolitionPriceItem,
  type Service as DemolitionService,
} from "./catalog-demolition";

export const priceSources = {
  ...demolitionPriceSources,
  myhammerTreppenbau: {
    name: "MyHammer - Treppenbau Kosten 2026",
    url: "https://www.my-hammer.de/bauen-renovieren/preisradar/was-kostet-treppe-bauen",
    checkedAt: "29.08.2026",
  },
  myhammerHolztreppe: {
    name: "MyHammer - Holztreppe sanieren Kosten 2026",
    url: "https://www.my-hammer.de/bauen-renovieren/preisradar/was-kostet-holztreppe-sanieren",
    checkedAt: "29.08.2026",
  },
} as const;

type StairsSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<DemolitionPriceItem, "sourceKey"> & { sourceKey: StairsSourceKey };
export type Service = Omit<DemolitionService, "priceItems"> & { priceItems: PriceItem[] };

export const services: Service[] = demolitionServices.map((service) => {
  const demolitionService = service as unknown as Service;

  if (service.slug === "treppen") {
    return {
      ...demolitionService,
      description: "Aktuelle Richtwerte 2026 für neue Holz-, Beton-, Stahl- und Designtreppen, Treppenbauer-Stundensätze sowie die Renovierung von Stufen, Wangen und Handläufen in Deutschland.",
      priceItems: [
        ...demolitionService.priceItems,
        {
          name: "Treppenbauer Stundensatz",
          low: 50,
          high: 70,
          unit: "pro Stunde",
          note: "Typischer Verrechnungssatz 2026; Region, Konstruktion und Spezialisierung beeinflussen den Preis",
          sourceKey: "myhammerTreppenbau",
        },
        {
          name: "Raumspartreppe komplett",
          low: 2500,
          high: 3500,
          unit: "pro Treppe inkl. Einbau",
          sourceKey: "myhammerTreppenbau",
        },
        {
          name: "Bolzentreppe komplett",
          low: 3000,
          high: 4550,
          unit: "pro Treppe inkl. Einbau",
          sourceKey: "myhammerTreppenbau",
        },
        {
          name: "Wangentreppe komplett",
          low: 5400,
          high: 7200,
          unit: "pro Treppe inkl. Einbau",
          sourceKey: "myhammerTreppenbau",
        },
        {
          name: "Faltwerktreppe komplett",
          low: 9600,
          high: 14400,
          unit: "pro Treppe inkl. Einbau",
          sourceKey: "myhammerTreppenbau",
        },
        {
          name: "Kragarmtreppe komplett",
          low: 12000,
          high: 16800,
          unit: "pro Treppe inkl. Einbau",
          sourceKey: "myhammerTreppenbau",
        },
        {
          name: "Stahlwangentreppe komplett",
          low: 7000,
          high: 10000,
          unit: "pro Treppe inkl. Einbau",
          sourceKey: "myhammerTreppenbau",
        },
        {
          name: "Wendeltreppe komplett",
          low: 9000,
          high: 12000,
          unit: "pro Treppe inkl. Einbau",
          sourceKey: "myhammerTreppenbau",
        },
        {
          name: "Gerade Betontreppe komplett",
          low: 2000,
          high: 2800,
          unit: "pro Treppe inkl. Einbau",
          note: "Richtwert für eine einfache gerade Betontreppe; Oberbelag und Geländer können separat anfallen",
          sourceKey: "myhammerTreppenbau",
        },
        {
          name: "Gerade Holztreppe komplett",
          low: 2300,
          high: 4200,
          unit: "pro Treppe inkl. Einbau",
          sourceKey: "myhammerTreppenbau",
        },
        {
          name: "Maßgefertigte Holztreppe komplett",
          low: 8000,
          high: 13000,
          unit: "pro Treppe inkl. Einbau",
          note: "Individuelle Fertigung; Holzart, Treppenform und Geländer bestimmen den Endpreis",
          sourceKey: "myhammerTreppenbau",
        },
        {
          name: "Einfache Außentreppe Stahl oder Holz",
          low: 1000,
          high: 3000,
          unit: "pro Treppe",
          note: "Richtwert für eine einfache wetterbeständige Außen- oder Gartentreppe",
          sourceKey: "myhammerTreppenbau",
        },
        {
          name: "Holztreppe Stufen verkleiden",
          low: 2000,
          high: 4500,
          unit: "pro Treppe mit 13 Stufen",
          note: "Material und Arbeitskosten für eine gerade Treppe mit etwa 13 Stufen",
          sourceKey: "myhammerHolztreppe",
        },
        {
          name: "Treppenwangen verkleiden",
          low: 800,
          high: 1400,
          unit: "pro Treppe",
          note: "Material und Montage für eine typische gerade Holztreppe",
          sourceKey: "myhammerHolztreppe",
        },
        {
          name: "Handlauf erneuern",
          low: 250,
          high: 500,
          unit: "pro Treppe",
          note: "Material und Arbeitskosten für einen typischen Handlauf",
          sourceKey: "myhammerHolztreppe",
        },
      ],
    };
  }

  return demolitionService;
});

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
