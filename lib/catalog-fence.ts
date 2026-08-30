import {
  priceSources as chimneyPriceSources,
  regions,
  renovationModel,
  services as chimneyServices,
  type PriceItem as ChimneyPriceItem,
  type Service as ChimneyService,
} from "./catalog-chimney";

export const priceSources = {
  ...chimneyPriceSources,
  myhammerZaunbau2026: {
    name: "MyHammer - Zaunbau Kosten 2026",
    url: "https://www.my-hammer.de/garten-aussenbereich/preisradar/was-kostet-zaun-bauen",
    checkedAt: "30.08.2026",
  },
} as const;

type FenceSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<ChimneyPriceItem, "sourceKey"> & { sourceKey: FenceSourceKey };
export type Service = Omit<ChimneyService, "priceItems"> & { priceItems: PriceItem[] };

const inheritedServices = chimneyServices as unknown as Service[];

const fenceService: Service = {
  slug: "zaunbau",
  title: "Zaunbau Kosten 2026",
  shortTitle: "Zaunbau",
  description: "Aktuelle Richtwerte 2026 für Gartenzaun, Maschendrahtzaun, Holzzaun, Kunststoffzaun, Sichtschutz, Metall- und Doppelstabmattenzaun sowie professionelle Montage in Deutschland.",
  unit: "lfd. Meter",
  icon: "╫",
  priceItems: [
    {
      name: "Zaun bauen lassen Standardspanne",
      low: 30,
      high: 200,
      unit: "pro lfd. Meter",
      note: "Breite Gesamtspanne je nach Material und Ausführung; luxuriöse Sondermodelle können darüber liegen",
      sourceKey: "myhammerZaunbau2026",
    },
    {
      name: "Maschendrahtzaun Material",
      low: 8,
      high: 10,
      unit: "pro lfd. Meter",
      sourceKey: "myhammerZaunbau2026",
    },
    {
      name: "Holzzaun Material",
      low: 20,
      high: 70,
      unit: "pro lfd. Meter",
      sourceKey: "myhammerZaunbau2026",
    },
    {
      name: "Sichtschutzzaun Holz komplett",
      low: 60,
      high: 120,
      unit: "pro lfd. Meter",
      note: "MyHammer-Zusammenfassung für einen Sichtschutzzaun aus Holz",
      sourceKey: "myhammerZaunbau2026",
    },
    {
      name: "Kunststoffzaun Material",
      low: 60,
      high: 100,
      unit: "pro lfd. Meter",
      sourceKey: "myhammerZaunbau2026",
    },
    {
      name: "Sichtschutzzaun Kunststoff komplett",
      low: 120,
      high: 350,
      unit: "pro lfd. Meter",
      note: "MyHammer-Zusammenfassung inklusive Material und Montage",
      sourceKey: "myhammerZaunbau2026",
    },
    {
      name: "Metallzaun oder Doppelstabmatten Material",
      low: 25,
      high: 150,
      unit: "pro lfd. Meter",
      sourceKey: "myhammerZaunbau2026",
    },
    {
      name: "Schmiedeeisen Zaun Material",
      low: 100,
      high: 500,
      unit: "pro lfd. Meter",
      sourceKey: "myhammerZaunbau2026",
    },
    {
      name: "Zaunmontage einfach Holz Kunststoff oder Matten",
      low: 10,
      high: 25,
      unit: "pro lfd. Meter",
      note: "Arbeitskosten für einfache Holz-, Kunststoff- oder Mattenzäune",
      sourceKey: "myhammerZaunbau2026",
    },
    {
      name: "Maschendrahtzaun montieren",
      low: 20,
      high: 30,
      unit: "pro lfd. Meter",
      note: "Arbeitskosten für die professionelle Montage",
      sourceKey: "myhammerZaunbau2026",
    },
    {
      name: "Sichtschutzzaun montieren",
      low: 40,
      high: 100,
      unit: "pro lfd. Meter",
      note: "Arbeitskosten für die professionelle Montage eines Sichtschutzzauns",
      sourceKey: "myhammerZaunbau2026",
    },
    {
      name: "Maschendrahtzaun 20 Meter Beispiel",
      low: 560,
      high: 800,
      unit: "pro 20 m Projekt",
      note: "MyHammer-Kostenbeispiel für 20 Meter Zaun bei 80 cm Höhe",
      sourceKey: "myhammerZaunbau2026",
    },
    {
      name: "Holzzaun 20 Meter Beispiel",
      low: 600,
      high: 1900,
      unit: "pro 20 m Projekt",
      note: "MyHammer-Kostenbeispiel für 20 Meter Zaun bei 80 cm Höhe",
      sourceKey: "myhammerZaunbau2026",
    },
    {
      name: "Metallzaun 20 Meter Beispiel",
      low: 700,
      high: 3500,
      unit: "pro 20 m Projekt",
      note: "MyHammer-Kostenbeispiel für 20 Meter Zaun bei 80 cm Höhe",
      sourceKey: "myhammerZaunbau2026",
    },
    {
      name: "Sichtschutzzaun Holz 20 Meter Beispiel",
      low: 2000,
      high: 4400,
      unit: "pro 20 m Projekt",
      note: "MyHammer-Kostenbeispiel für 20 Meter Sichtschutzzaun",
      sourceKey: "myhammerZaunbau2026",
    },
    {
      name: "Sichtschutzzaun Kunststoff 20 Meter Beispiel",
      low: 3200,
      high: 9000,
      unit: "pro 20 m Projekt",
      note: "MyHammer-Kostenbeispiel für 20 Meter Sichtschutzzaun",
      sourceKey: "myhammerZaunbau2026",
    },
  ],
};

export const services: Service[] = [...inheritedServices, fenceService];

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
