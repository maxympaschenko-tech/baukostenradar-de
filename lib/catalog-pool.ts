import {
  priceSources as fencePriceSources,
  regions,
  renovationModel,
  services as fenceServices,
  type PriceItem as FencePriceItem,
  type Service as FenceService,
} from "./catalog-fence";

export const priceSources = {
  ...fencePriceSources,
  myhammerPoolbau2026: {
    name: "MyHammer - Pool bauen Kosten 2026",
    url: "https://www.my-hammer.de/garten-aussenbereich/preisradar/was-kostet-pool-bauen",
    checkedAt: "30.08.2026",
  },
  aroundhomePoolbau2026: {
    name: "Aroundhome - Pool bauen lassen Kosten 2026",
    url: "https://www.aroundhome.de/gartenbau-landschaftsbau/pool-bauen-lassen-kosten/",
    checkedAt: "30.08.2026",
  },
} as const;

type PoolSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<FencePriceItem, "sourceKey"> & { sourceKey: PoolSourceKey };
export type Service = Omit<FenceService, "priceItems"> & { priceItems: PriceItem[] };

const inheritedServices = fenceServices as unknown as Service[];

const poolService: Service = {
  slug: "poolbau",
  title: "Poolbau Kosten 2026",
  shortTitle: "Poolbau",
  description: "Aktuelle Richtwerte 2026 für Gartenpool, GFK-Pool, Styroporpool, Betonpool, Edelstahlpool, Naturpool, Erdarbeiten, Pooltechnik und laufende Betriebskosten in Deutschland.",
  unit: "Projekt / Jahr",
  icon: "◉",
  priceItems: [
    {
      name: "Pool bauen lassen Gesamtprojekt",
      low: 10000,
      high: 50000,
      unit: "pro Projekt",
      note: "Typischer Gesamtbereich; Luxus- und Sonderanfertigungen können deutlich darüber liegen",
      sourceKey: "myhammerPoolbau2026",
    },
    {
      name: "Materialkosten Poolbau",
      low: 8000,
      high: 18000,
      unit: "pro Projekt",
      note: "Orientierung abhängig von Poolart, Größe und Ausstattung",
      sourceKey: "myhammerPoolbau2026",
    },
    {
      name: "Arbeitskosten Poolbauer",
      low: 8000,
      high: 18000,
      unit: "pro Projekt",
      note: "Orientierung für professionelle Arbeiten abhängig von Umfang, Region und Poolart",
      sourceKey: "myhammerPoolbau2026",
    },
    {
      name: "Erdarbeiten mit Abtransport",
      low: 3000,
      high: 15000,
      unit: "pro Projekt",
      note: "Breite Spanne je nach Poolgröße, Boden, Zugänglichkeit und Entsorgungsaufwand",
      sourceKey: "myhammerPoolbau2026",
    },
    {
      name: "Stahlwandpool freistehend",
      low: 1000,
      high: 7000,
      unit: "pro Pool",
      sourceKey: "aroundhomePoolbau2026",
    },
    {
      name: "Stahlwandpool teilversenkt",
      low: 2000,
      high: 10000,
      unit: "pro Pool",
      sourceKey: "aroundhomePoolbau2026",
    },
    {
      name: "GFK Fertigbecken Poolart",
      low: 10000,
      high: 50000,
      unit: "pro Pool",
      note: "Gesamtspanne für GFK-Fertigbecken je nach Größe und Ausführung",
      sourceKey: "aroundhomePoolbau2026",
    },
    {
      name: "GFK Pool 4 x 3 m komplett",
      low: 10000,
      high: 25000,
      unit: "pro Projekt",
      note: "Kleine Ausführung inklusive Einbau, etwa 12 m² Wasserfläche",
      sourceKey: "aroundhomePoolbau2026",
    },
    {
      name: "GFK Pool 6 x 3 m komplett",
      low: 15000,
      high: 35000,
      unit: "pro Projekt",
      note: "Mittelgroße Standardausführung inklusive professionellem Einbau",
      sourceKey: "aroundhomePoolbau2026",
    },
    {
      name: "GFK Pool 8 x 4 m komplett",
      low: 20000,
      high: 50000,
      unit: "pro Projekt",
      note: "Große Ausführung inklusive professionellem Einbau",
      sourceKey: "aroundhomePoolbau2026",
    },
    {
      name: "Styroporpool durch Fachfirma",
      low: 15000,
      high: 35000,
      unit: "pro Projekt",
      sourceKey: "aroundhomePoolbau2026",
    },
    {
      name: "Betonpool 4 x 3 m komplett",
      low: 15000,
      high: 35000,
      unit: "pro Projekt",
      note: "Kleine massive Ausführung komplett fertiggestellt",
      sourceKey: "aroundhomePoolbau2026",
    },
    {
      name: "Betonpool 6 x 3 m komplett",
      low: 20000,
      high: 45000,
      unit: "pro Projekt",
      note: "Mittlere massive Ausführung komplett fertiggestellt",
      sourceKey: "aroundhomePoolbau2026",
    },
    {
      name: "Betonpool 8 x 4 m komplett",
      low: 25000,
      high: 70000,
      unit: "pro Projekt",
      note: "Große massive Ausführung komplett fertiggestellt",
      sourceKey: "aroundhomePoolbau2026",
    },
    {
      name: "Edelstahlpool 6 x 3 m",
      low: 40000,
      high: 80000,
      unit: "pro Projekt",
      note: "Mittlere Größe; hochwertige Ausstattung kann die obere Orientierung überschreiten",
      sourceKey: "aroundhomePoolbau2026",
    },
    {
      name: "Naturpool oder Schwimmteich",
      low: 25000,
      high: 55000,
      unit: "pro Projekt",
      sourceKey: "aroundhomePoolbau2026",
    },
    {
      name: "Filteranlage",
      low: 400,
      high: 2500,
      unit: "pro Anlage",
      sourceKey: "aroundhomePoolbau2026",
    },
    {
      name: "Poolpumpe",
      low: 200,
      high: 1500,
      unit: "pro Pumpe",
      sourceKey: "aroundhomePoolbau2026",
    },
    {
      name: "Verrohrung Skimmer und Düsen",
      low: 300,
      high: 1200,
      unit: "pro Projekt",
      sourceKey: "aroundhomePoolbau2026",
    },
    {
      name: "Poolbetrieb jährlich",
      low: 300,
      high: 1200,
      unit: "pro Jahr",
      note: "Typische laufende Kosten für Wasser, Strom, Pflege und Wartung",
      sourceKey: "aroundhomePoolbau2026",
    },
    {
      name: "Poolbetrieb beheizt intensiv jährlich",
      low: 1500,
      high: 2500,
      unit: "pro Jahr",
      note: "Orientierung bei beheiztem Pool oder intensiver beziehungsweise verlängerter Nutzung",
      sourceKey: "aroundhomePoolbau2026",
    },
  ],
};

export const services: Service[] = [...inheritedServices, poolService];

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
