import {
  priceSources as carportGaragePriceSources,
  regions,
  renovationModel,
  services as carportGarageServices,
  type PriceItem as CarportGaragePriceItem,
  type Service as CarportGarageService,
} from "./catalog-carport-garage";

export const priceSources = {
  ...carportGaragePriceSources,
  blauarbeitDachausbau2026: {
    name: "Blauarbeit - Dachausbau Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/dach/dachbodenausbau",
    checkedAt: "31.08.2026",
  },
  blauarbeitDachaufstockung2026: {
    name: "Blauarbeit - Dachaufstockung Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/dachaufstockung-kosten",
    checkedAt: "31.08.2026",
  },
  myhammerDachanheben2026: {
    name: "MyHammer - Dach anheben Kosten 2026",
    url: "https://www.my-hammer.de/dacharbeiten/preisradar/was-kostet-dach-anheben",
    checkedAt: "31.08.2026",
  },
  myhammerDachgaube2026: {
    name: "MyHammer - Dachgaube Kosten 2026",
    url: "https://www.my-hammer.de/dacharbeiten/preisradar/kosten-dachgaube",
    checkedAt: "31.08.2026",
  },
} as const;

type DachausbauSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<CarportGaragePriceItem, "sourceKey"> & { sourceKey: DachausbauSourceKey };
export type Service = Omit<CarportGarageService, "priceItems"> & { priceItems: PriceItem[] };

const inheritedServices = carportGarageServices as unknown as Service[];

const dachausbauService: Service = {
  slug: "dachausbau",
  title: "Dachausbau Kosten 2026",
  shortTitle: "Dachausbau",
  description: "Aktuelle Richtwerte 2026 für Dachboden- und Dachgeschossausbau, Dämmung, Trockenbau, Heizung, Elektrik, Dachfenster, Gauben, Kniestockerhöhung und Dachaufstockung in Deutschland.",
  unit: "m² / Projekt / Stück",
  icon: "⌂",
  priceItems: [
    {
      name: "Dachausbau komplett zum Wohnraum",
      low: 800,
      high: 1500,
      unit: "pro m² Wohnfläche",
      note: "Komplettausbau inklusive typischer Dämm-, Heizungs-, Elektro- und Innenausbauarbeiten; Bestand und Ausstattungsstandard bestimmen den Endpreis",
      sourceKey: "blauarbeitDachausbau2026",
    },
    {
      name: "Dachausbau 80 m² komplett zum Wohnraum",
      low: 64000,
      high: 120000,
      unit: "pro 80 m² Wohnfläche",
      note: "Von Blauarbeit aus dem Komplett-Richtwert 800-1.500 €/m² ausgewiesenes Beispiel für 80 m² Wohnfläche",
      sourceKey: "blauarbeitDachausbau2026",
    },
    {
      name: "Dachausbau Grundausbau Beispiel 80 m²",
      low: 13800,
      high: 46200,
      unit: "pro Projekt",
      note: "Blauarbeit-Beispiel für Grundausbau bei etwa 120 m² Dachfläche und 80 m² späterer Wohnfläche; Elektroinstallation, Treppe, Bad und Nebenkosten sind nicht vollständig enthalten",
      sourceKey: "blauarbeitDachausbau2026",
    },
    {
      name: "Dachdämmung beim Dachausbau",
      low: 30,
      high: 250,
      unit: "pro m² Dachfläche",
      note: "Breite Spanne je nach Dämmverfahren; Dachaufbau und GEG-Anforderungen projektbezogen prüfen",
      sourceKey: "blauarbeitDachausbau2026",
    },
    {
      name: "Untersparrendämmung Dachausbau",
      low: 30,
      high: 70,
      unit: "pro m² Dachfläche",
      sourceKey: "blauarbeitDachausbau2026",
    },
    {
      name: "Zwischensparrendämmung Dachausbau",
      low: 50,
      high: 80,
      unit: "pro m² Dachfläche",
      sourceKey: "blauarbeitDachausbau2026",
    },
    {
      name: "Aufsparrendämmung Dachausbau",
      low: 130,
      high: 250,
      unit: "pro m² Dachfläche",
      note: "Besonders sinnvoll, wenn die Dacheindeckung ohnehin geöffnet oder erneuert wird",
      sourceKey: "blauarbeitDachausbau2026",
    },
    {
      name: "Heizkörper Dachgeschoss inklusive Leitungsverlegung",
      low: 1000,
      high: 1000,
      unit: "pro Stück",
      sourceKey: "blauarbeitDachausbau2026",
    },
    {
      name: "Fußbodenheizung Dachgeschoss",
      low: 45,
      high: 100,
      unit: "pro m²",
      sourceKey: "blauarbeitDachausbau2026",
    },
    {
      name: "Dachfenster beim Dachausbau",
      low: 300,
      high: 1200,
      unit: "pro Stück",
      note: "Fenster-Richtwert aus der Dachausbau-Kalkulation; statische Anpassungen, Außenrollladen und besondere Einbausituationen separat prüfen",
      sourceKey: "blauarbeitDachausbau2026",
    },
    {
      name: "Dachgaube Material und Einbau",
      low: 2000,
      high: 6000,
      unit: "pro Gaube",
      sourceKey: "blauarbeitDachausbau2026",
    },
    {
      name: "Standard Fertiggaube",
      low: 3000,
      high: 7000,
      unit: "pro Gaube",
      sourceKey: "myhammerDachgaube2026",
    },
    {
      name: "Dachgaube Einbaukosten",
      low: 1000,
      high: 6000,
      unit: "pro Gaube",
      sourceKey: "myhammerDachgaube2026",
    },
    {
      name: "Dachöffnung für Gaube",
      low: 250,
      high: 500,
      unit: "pro Öffnung",
      sourceKey: "myhammerDachgaube2026",
    },
    {
      name: "Statischer Nachweis Dachgaube",
      low: 500,
      high: 1500,
      unit: "pro Projekt",
      sourceKey: "myhammerDachgaube2026",
    },
    {
      name: "Baugenehmigung Dachgaube",
      low: 500,
      high: 1500,
      unit: "pro Projekt",
      note: "MyHammer nennt alternativ etwa 0,5 % der Baukosten; Genehmigungspflicht und Gebühren sind regional unterschiedlich",
      sourceKey: "myhammerDachgaube2026",
    },
    {
      name: "Fließestrich Dachgeschoss vom Fachbetrieb",
      low: 15,
      high: 30,
      unit: "pro m²",
      sourceKey: "blauarbeitDachausbau2026",
    },
    {
      name: "Trittschalldämmung Dachgeschoss",
      low: 10,
      high: 15,
      unit: "pro m²",
      sourceKey: "blauarbeitDachausbau2026",
    },
    {
      name: "Bodenbelag Dachgeschoss professionell verlegt",
      low: 30,
      high: 50,
      unit: "pro m²",
      sourceKey: "blauarbeitDachausbau2026",
    },
    {
      name: "Trockenbau Ständerwand Dachgeschoss vom Fachbetrieb",
      low: 60,
      high: 60,
      unit: "pro m² Wandfläche",
      note: "Richtwert inklusive Material und Arbeit laut Blauarbeit",
      sourceKey: "blauarbeitDachausbau2026",
    },
    {
      name: "Tapezieren und Streichen Dachgeschoss professionell",
      low: 9,
      high: 9,
      unit: "pro m²",
      sourceKey: "blauarbeitDachausbau2026",
    },
    {
      name: "Elektroinstallation Dachgeschoss",
      low: 500,
      high: 1000,
      unit: "pro Projekt",
      sourceKey: "blauarbeitDachausbau2026",
    },
    {
      name: "Innentür Dachgeschoss",
      low: 200,
      high: 800,
      unit: "pro Tür",
      sourceKey: "blauarbeitDachausbau2026",
    },
    {
      name: "Einfache Kniestockerhöhung",
      low: 5000,
      high: 13000,
      unit: "pro Projekt",
      sourceKey: "myhammerDachanheben2026",
    },
    {
      name: "Hydraulische Dachanhebung",
      low: 6000,
      high: 12000,
      unit: "pro Projekt",
      sourceKey: "myhammerDachanheben2026",
    },
    {
      name: "Dachanhebung mit Grundausbau",
      low: 30000,
      high: 60000,
      unit: "pro Projekt",
      sourceKey: "myhammerDachanheben2026",
    },
    {
      name: "Dachaufstockung neues Geschoss",
      low: 1500,
      high: 3000,
      unit: "pro m² neue Wohnfläche",
      note: "Breite 2026-Orientierung für ein zusätzliches Vollgeschoss; Bauweise und Ausstattung beeinflussen die Kosten stark",
      sourceKey: "blauarbeitDachaufstockung2026",
    },
    {
      name: "Statik Dachaufstockung Bestand",
      low: 2500,
      high: 8000,
      unit: "pro Projekt",
      sourceKey: "blauarbeitDachaufstockung2026",
    },
    {
      name: "Bauantrag und Genehmigung Dachaufstockung",
      low: 3000,
      high: 10000,
      unit: "pro Projekt",
      sourceKey: "blauarbeitDachaufstockung2026",
    },
    {
      name: "Altes Dach demontieren für Dachaufstockung",
      low: 5000,
      high: 15000,
      unit: "pro Projekt",
      sourceKey: "blauarbeitDachaufstockung2026",
    },
    {
      name: "Dachaufstockung Rohbau neues Geschoss und Dach",
      low: 1000,
      high: 1800,
      unit: "pro m²",
      sourceKey: "blauarbeitDachaufstockung2026",
    },
    {
      name: "Innenausbau Dachaufstockung",
      low: 400,
      high: 800,
      unit: "pro m²",
      sourceKey: "blauarbeitDachaufstockung2026",
    },
    {
      name: "Fenster und Türen Dachaufstockung",
      low: 8000,
      high: 25000,
      unit: "pro Projekt",
      sourceKey: "blauarbeitDachaufstockung2026",
    },
    {
      name: "Bad und Heizung Dachaufstockung",
      low: 15000,
      high: 40000,
      unit: "pro Projekt",
      sourceKey: "blauarbeitDachaufstockung2026",
    },
  ],
};

export const services: Service[] = [...inheritedServices, dachausbauService];

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
