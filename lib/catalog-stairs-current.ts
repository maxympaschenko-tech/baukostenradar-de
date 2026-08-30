import {
  priceSources as kitchenPriceSources,
  regions,
  renovationModel,
  services as kitchenServices,
  type PriceItem as KitchenPriceItem,
  type Service as KitchenService,
} from "./catalog-kitchen";

export const priceSources = {
  ...kitchenPriceSources,
  blauarbeitBetontreppeCurrent2026: {
    name: "Blauarbeit - Betontreppe Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/betontreppe-kosten",
    checkedAt: "30.08.2026",
  },
  myhammerTreppengelaenderCurrent2026: {
    name: "MyHammer - Treppengeländer montieren Kosten 2026",
    url: "https://www.my-hammer.de/bauen-renovieren/preisradar/was-kostet-treppengelaender-montieren",
    checkedAt: "30.08.2026",
  },
} as const;

type StairSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<KitchenPriceItem, "sourceKey"> & { sourceKey: StairSourceKey };
export type Service = Omit<KitchenService, "priceItems"> & { priceItems: PriceItem[] };

export const services: Service[] = kitchenServices.map((service) => {
  const kitchenService = service as unknown as Service;

  if (service.slug === "treppen") {
    const itemsByName = new Map<string, PriceItem>(
      kitchenService.priceItems.map((item) => [item.name, item]),
    );

    const additions: PriceItem[] = [
      {
        name: "Fertigteil-Betontreppe inkl. Einbau",
        low: 1500,
        high: 5000,
        unit: "pro Treppe",
        note: "Werkseitig vorgefertigte Betontreppe inklusive Einbau; Belag und Geländer werden üblicherweise separat kalkuliert",
        sourceKey: "blauarbeitBetontreppeCurrent2026",
      },
      {
        name: "Ortbetontreppe inkl. Einbau",
        low: 3000,
        high: 10000,
        unit: "pro Treppe",
        note: "Auf der Baustelle geschalt, bewehrt und gegossen; Oberbelag und Geländer separat prüfen",
        sourceKey: "blauarbeitBetontreppeCurrent2026",
      },
      {
        name: "Betontreppe mit Fliesen verkleiden",
        low: 40,
        high: 80,
        unit: "pro Stufe inkl. Montage",
        note: "Richtwert je Stufe; Untergrundvorbereitung und Sonderzuschnitte können zusätzlich anfallen",
        sourceKey: "blauarbeitBetontreppeCurrent2026",
      },
      {
        name: "Betontreppe mit Holzstufen verkleiden",
        low: 100,
        high: 200,
        unit: "pro Stufe inkl. Montage",
        sourceKey: "blauarbeitBetontreppeCurrent2026",
      },
      {
        name: "Betontreppe mit Naturstein verkleiden",
        low: 100,
        high: 250,
        unit: "pro Stufe inkl. Montage",
        note: "Materialwahl, Kantenbearbeitung und Stufenmaße beeinflussen den Endpreis",
        sourceKey: "blauarbeitBetontreppeCurrent2026",
      },
      {
        name: "Treppengeländer Edelstahl 10 m inkl. Montage",
        low: 1850,
        high: 3600,
        unit: "pro 10 m Geländer",
        note: "Beispielorientierung für ein einfaches Edelstahl-Geländer inklusive Kleinteilen und Montage",
        sourceKey: "myhammerTreppengelaenderCurrent2026",
      },
    ];

    for (const item of additions) itemsByName.set(item.name, item);

    return {
      ...kitchenService,
      description: "Aktuelle Treppen-Kosten 2026 für neue Holz-, Beton- und Stahltreppen, Treppenrenovierung, Stufenbeläge, Geländer und typische Montagearbeiten in Deutschland.",
      priceItems: Array.from(itemsByName.values()),
    };
  }

  return kitchenService;
});

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
