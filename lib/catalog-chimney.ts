import {
  priceSources as garagePriceSources,
  regions,
  renovationModel,
  services as garageServices,
  type PriceItem as GaragePriceItem,
  type Service as GarageService,
} from "./catalog-garage";

export const priceSources = {
  ...garagePriceSources,
  myhammerSchornsteinSanierung2026: {
    name: "MyHammer - Schornstein sanieren Kosten 2026",
    url: "https://www.my-hammer.de/bauen-renovieren/preisradar/was-kostet-schornstein-sanieren",
    checkedAt: "30.08.2026",
  },
  myhammerKaminbau2026: {
    name: "MyHammer - Kaminbau Kosten 2026",
    url: "https://www.my-hammer.de/bauen-renovieren/preisradar/was-kostet-kamin-bauen",
    checkedAt: "30.08.2026",
  },
  myhammerKaminsanierung2026: {
    name: "MyHammer - Kaminsanierung und Kaminkassette Kosten 2026",
    url: "https://www.my-hammer.de/bauen-renovieren/preisradar/was-kostet-kamin-sanieren",
    checkedAt: "30.08.2026",
  },
  myhammerKaminbauer2026: {
    name: "MyHammer - Kamin- und Ofenbauer Kosten 2026",
    url: "https://www.my-hammer.de/heizung/kaminbauer-berufe",
    checkedAt: "30.08.2026",
  },
  myhammerSchornsteinfeger2026: {
    name: "MyHammer - Schornsteinfeger Kosten 2026",
    url: "https://www.my-hammer.de/bauen-renovieren/preisradar/schornsteinfeger-kosten",
    checkedAt: "30.08.2026",
  },
  aroundhomeKamin2026: {
    name: "Aroundhome - Kamin Preise und Kosten",
    url: "https://www.aroundhome.de/kamin/preise-kosten/",
    checkedAt: "30.08.2026",
  },
} as const;

type ChimneySourceKey = keyof typeof priceSources;
export type PriceItem = Omit<GaragePriceItem, "sourceKey"> & { sourceKey: ChimneySourceKey };
export type Service = Omit<GarageService, "priceItems"> & { priceItems: PriceItem[] };

const inheritedServices = garageServices as unknown as Service[];

const chimneyService: Service = {
  slug: "schornstein",
  title: "Schornstein Kosten 2026",
  shortTitle: "Schornstein",
  description: "Aktuelle Richtwerte 2026 für Schornsteinsanierung, Edelstahl- und Keramik-Innenrohre, Fräsarbeiten, Versottung, nachgerüstete Schornsteine und Schornsteinfeger in Deutschland.",
  unit: "Meter / Projekt / Einsatz",
  icon: "▥",
  priceItems: [
    {
      name: "Schornsteinsanierung gesamt",
      low: 1000,
      high: 8000,
      unit: "pro Projekt",
      note: "Breite Spanne je nach Zustand, Sanierungsmethode und Schornsteinhöhe",
      sourceKey: "myhammerSchornsteinSanierung2026",
    },
    {
      name: "Gemauerten Schornstein sanieren",
      low: 200,
      high: 300,
      unit: "pro lfd. Meter",
      sourceKey: "myhammerSchornsteinSanierung2026",
    },
    {
      name: "Schornstein Edelstahlauskleidung inkl. Montage",
      low: 180,
      high: 280,
      unit: "pro lfd. Meter",
      note: "Edelstahl-Innenrohr inklusive Montage; Fräsarbeiten und Sonderanschlüsse separat prüfen",
      sourceKey: "myhammerSchornsteinSanierung2026",
    },
    {
      name: "Schornstein Keramik Innenrohr",
      low: 300,
      high: 450,
      unit: "pro lfd. Meter",
      sourceKey: "myhammerSchornsteinSanierung2026",
    },
    {
      name: "Schornstein fräsen",
      low: 600,
      high: 1200,
      unit: "pro Projekt",
      sourceKey: "myhammerSchornsteinSanierung2026",
    },
    {
      name: "Schornstein abdichten und versiegeln",
      low: 300,
      high: 800,
      unit: "pro Projekt",
      sourceKey: "myhammerSchornsteinSanierung2026",
    },
    {
      name: "Versotteten Schornstein sanieren",
      low: 2000,
      high: 6000,
      unit: "pro Projekt",
      note: "Abhängig vom Schadensausmaß; zusätzliche Trocknungs- und Abdichtungsarbeiten können hinzukommen",
      sourceKey: "myhammerSchornsteinSanierung2026",
    },
    {
      name: "Versottung Trocknung und Abdichtung Zusatz",
      low: 700,
      high: 1200,
      unit: "pro Projekt zusätzlich",
      sourceKey: "myhammerSchornsteinSanierung2026",
    },
    {
      name: "Edelstahlschornstein außen nachrüsten",
      low: 2400,
      high: 3400,
      unit: "pro Schornstein",
      sourceKey: "myhammerKaminbauer2026",
    },
    {
      name: "Gemauerten Schornstein außen nachrüsten",
      low: 4800,
      high: 6800,
      unit: "pro Schornstein",
      sourceKey: "myhammerKaminbauer2026",
    },
    {
      name: "Gemauerten Schornstein im Haus nachrüsten",
      low: 5000,
      high: 7400,
      unit: "pro Schornstein",
      sourceKey: "myhammerKaminbauer2026",
    },
    {
      name: "Abgasrohr außen nachrüsten",
      low: 1690,
      high: 2210,
      unit: "pro Abgasführung",
      sourceKey: "myhammerKaminbauer2026",
    },
    {
      name: "Schornsteinfeger Einsatz",
      low: 50,
      high: 150,
      unit: "pro Einsatz",
      note: "Freie Leistungen und Umfang unterscheiden sich; hoheitliche Tätigkeiten folgen gesetzlichen Arbeitswerten",
      sourceKey: "myhammerSchornsteinfeger2026",
    },
    {
      name: "Schornsteinfeger Abnahme Kamin oder Schornstein",
      low: 50,
      high: 150,
      unit: "pro Abnahme",
      sourceKey: "myhammerKaminbau2026",
    },
  ],
};

const fireplaceService: Service = {
  slug: "kamin",
  title: "Kamin & Kaminofen Kosten 2026",
  shortTitle: "Kamin & Ofen",
  description: "Aktuelle Richtwerte 2026 für Kaminbau, Kaminofen, Montage, Kernbohrung, Ofenrohre, Kaminkassette, Nachrüstung und Schornsteinfeger-Abnahme in Deutschland.",
  unit: "Projekt / Stück",
  icon: "♨",
  priceItems: [
    {
      name: "Kamin bauen gesamt",
      low: 1500,
      high: 7500,
      unit: "pro Projekt",
      sourceKey: "myhammerKaminbau2026",
    },
    {
      name: "Holzkamin Anschaffung",
      low: 1500,
      high: 3000,
      unit: "pro Kamin",
      sourceKey: "myhammerKaminbau2026",
    },
    {
      name: "Kamin installieren und anschließen",
      low: 500,
      high: 2500,
      unit: "pro Kamin",
      sourceKey: "myhammerKaminbau2026",
    },
    {
      name: "Standardkamin Einbau",
      low: 500,
      high: 1500,
      unit: "pro Kamin",
      sourceKey: "myhammerKaminbau2026",
    },
    {
      name: "Maßgeschneiderter Kamin Einbau",
      low: 2000,
      high: 5000,
      unit: "pro Kamin",
      sourceKey: "myhammerKaminbau2026",
    },
    {
      name: "Kernbohrung für Kamin oder Ofenrohr",
      low: 300,
      high: 800,
      unit: "pro Bohrung",
      sourceKey: "myhammerKaminbau2026",
    },
    {
      name: "Schornstein oder Ofenrohre für Kamin",
      low: 1000,
      high: 4000,
      unit: "pro Projekt",
      sourceKey: "myhammerKaminbau2026",
    },
    {
      name: "Kaminofen anschließen",
      low: 200,
      high: 500,
      unit: "pro Ofen",
      sourceKey: "myhammerKaminbauer2026",
    },
    {
      name: "Kaminkassette nachrüsten gesamt",
      low: 1150,
      high: 5250,
      unit: "pro Kamin",
      note: "Gesamtbeispiel aus Kassette, Unterbau, Einbau und Schornsteinfeger-Abnahme",
      sourceKey: "myhammerKaminsanierung2026",
    },
    {
      name: "Kaminkassette Material",
      low: 500,
      high: 4000,
      unit: "pro Kassette",
      sourceKey: "myhammerKaminsanierung2026",
    },
    {
      name: "Kaminkassette Einbau inkl. Ausmessen und Brandschutz",
      low: 500,
      high: 1000,
      unit: "pro Kassette",
      sourceKey: "myhammerKaminsanierung2026",
    },
    {
      name: "Kaminofen Anschaffung",
      low: 2000,
      high: 3000,
      unit: "pro Ofen",
      note: "Aroundhome-Richtwert für Kaminofen; Einbau und Abgasführung separat prüfen",
      sourceKey: "aroundhomeKamin2026",
    },
    {
      name: "Offener oder gemauerter Kamin Anschaffung",
      low: 4000,
      high: 6000,
      unit: "pro Kamin",
      sourceKey: "aroundhomeKamin2026",
    },
    {
      name: "Kachelkamin Anschaffung",
      low: 4000,
      high: 6000,
      unit: "pro Kamin",
      sourceKey: "aroundhomeKamin2026",
    },
  ],
};

export const services: Service[] = [...inheritedServices, chimneyService, fireplaceService];

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
