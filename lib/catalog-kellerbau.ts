import {
  priceSources as hausanbauPriceSources,
  regions,
  renovationModel,
  services as hausanbauServices,
  type PriceItem as HausanbauPriceItem,
  type Service as HausanbauService,
} from "./catalog-hausanbau";

export const priceSources = {
  ...hausanbauPriceSources,
  fertighausKellerbau2026: {
    name: "Fertighaus.de - Kellerbau Kosten 2026",
    url: "https://www.fertighaus.de/ratgeber/hausbau/keller-bauen-ja-oder-nein/",
    checkedAt: "31.08.2026",
  },
  fertighausFertigkeller2026: {
    name: "Fertighaus.de - Fertigkeller Kosten 2026",
    url: "https://www.fertighaus.de/ratgeber/hausbau/was-kostet-ein-fertigkeller/",
    checkedAt: "31.08.2026",
  },
  fertighausWeisseWanne2026: {
    name: "Fertighaus.de - Weiße Wanne Kosten",
    url: "https://www.fertighaus.de/ratgeber/lexikon/weisse-wanne/",
    checkedAt: "31.08.2026",
  },
  myhammerKellerBauen2026: {
    name: "MyHammer - Keller bauen Kosten 2026",
    url: "https://www.my-hammer.de/bauen-renovieren/preisradar/keller-bauen-kosten",
    checkedAt: "31.08.2026",
  },
  myhammerFertighausKeller2026: {
    name: "MyHammer - Fertighaus mit Keller Kosten 2026",
    url: "https://www.my-hammer.de/bauen-renovieren/preisradar/fertighaus-keller-kosten",
    checkedAt: "31.08.2026",
  },
  myhammerFertigkeller2026: {
    name: "MyHammer - Fertigkeller Kosten 2026",
    url: "https://www.my-hammer.de/bauen-renovieren/preisradar/fertigkeller-einbauen-kosten",
    checkedAt: "31.08.2026",
  },
  blauarbeitPerimeter2026: {
    name: "Blauarbeit - Perimeterdämmung Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/perimeterdaemmung",
    checkedAt: "31.08.2026",
  },
} as const;

type KellerbauSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<HausanbauPriceItem, "sourceKey"> & { sourceKey: KellerbauSourceKey };
export type Service = Omit<HausanbauService, "priceItems"> & { priceItems: PriceItem[] };

const inheritedServices = hausanbauServices as unknown as Service[];

const kellerbauService: Service = {
  slug: "kellerbau",
  title: "Kellerbau Kosten 2026",
  shortTitle: "Kellerbau",
  description: "Aktuelle Richtwerte 2026 für Nutz- und Wohnkeller, Massiv- und Fertigkeller, 80 bis 120 m², Erdarbeiten, Weiße Wanne, Entwässerung und Perimeterdämmung in Deutschland.",
  unit: "m² / Projekt / lfd. Meter",
  icon: "▤",
  priceItems: [
    {
      name: "Standard-Nutzkeller Neubau",
      low: 40000,
      high: 90000,
      unit: "pro Projekt",
      note: "MyHammer nennt für einen Standard-Nutzkeller im Neubau einen typischen Projektkorridor von 40.000 bis 90.000 €; Größe, Boden und Grundwasser sind zentrale Kostentreiber.",
      sourceKey: "myhammerKellerBauen2026",
    },
    {
      name: "Vollunterkellerung Einfamilienhaus Mehrkosten",
      low: 40000,
      high: 80000,
      unit: "pro Projekt",
      note: "MyHammer nennt für eine Vollunterkellerung gegenüber einem Haus ohne Keller meist etwa 40.000 bis 80.000 € Mehrkosten.",
      sourceKey: "myhammerFertighausKeller2026",
    },
    {
      name: "Massivkeller Nutzkeller",
      low: 1000,
      high: 1500,
      unit: "pro m² Kellerfläche",
      note: "Fertighaus.de nennt für massiv gemauerte beziehungsweise aus Ortbeton hergestellte Nutzkeller etwa 1.000 bis 1.500 €/m².",
      sourceKey: "fertighausKellerbau2026",
    },
    {
      name: "Massivkeller Wohnkeller",
      low: 2000,
      high: 2500,
      unit: "pro m² Kellerfläche",
      note: "Fertighaus.de nennt für einen als Wohnraum ausgeführten Massivkeller etwa 2.000 bis 2.500 €/m².",
      sourceKey: "fertighausKellerbau2026",
    },
    {
      name: "Fertigkeller Standard",
      low: 800,
      high: 1240,
      unit: "pro m² Kellerfläche",
      note: "MyHammer nennt für Fertigkeller 2026 je nach Ausstattung und Region etwa 800 bis 1.240 €/m².",
      sourceKey: "myhammerFertigkeller2026",
    },
    {
      name: "Fertigkeller Wohnkeller",
      low: 1500,
      high: 2000,
      unit: "pro m² Kellerfläche",
      note: "Fertighaus.de nennt für Wohnkeller in Fertigbauweise je nach Ausstattung etwa 1.500 bis 2.000 €/m².",
      sourceKey: "fertighausFertigkeller2026",
    },
    {
      name: "Keller 100 m² Nutz- bis Wohnkeller",
      low: 100000,
      high: 200000,
      unit: "pro 100 m² Keller",
      note: "MyHammer nennt für 100 m² Kellerfläche je nach Nutz- oder Wohnstandard grob 100.000 bis 200.000 €.",
      sourceKey: "myhammerFertighausKeller2026",
    },
    {
      name: "Fertigkeller Beispiel 87 m²",
      low: 69600,
      high: 103000,
      unit: "pro 87 m² Keller",
      note: "Fertighaus.de verglich Angebote für ein Beispielhaus mit 10,00 × 8,70 m Grundfläche; die vergleichbar gemachten Kellerangebote lagen rund zwischen 69.600 und 103.000 €.",
      sourceKey: "fertighausFertigkeller2026",
    },
    {
      name: "Fertigkeller 80 m² Mitbaukeller",
      low: 45300,
      high: 45300,
      unit: "pro 80 m² Keller",
      note: "Fertighaus.de-Richtwert für 10 × 8 m Grundfläche; Bodenaushub ist in dieser Paketpreisliste nicht enthalten.",
      sourceKey: "fertighausFertigkeller2026",
    },
    {
      name: "Fertigkeller 80 m² Ausbaukeller",
      low: 74900,
      high: 74900,
      unit: "pro 80 m² Keller",
      note: "Fertighaus.de-Richtwert für 10 × 8 m Grundfläche; Bodenaushub separat.",
      sourceKey: "fertighausFertigkeller2026",
    },
    {
      name: "Fertigkeller 80 m² Komplettkeller",
      low: 85500,
      high: 85500,
      unit: "pro 80 m² Keller",
      note: "Fertighaus.de-Richtwert für 10 × 8 m Grundfläche; Bodenaushub separat.",
      sourceKey: "fertighausFertigkeller2026",
    },
    {
      name: "Fertigkeller 99 m² Mitbaukeller",
      low: 59200,
      high: 59200,
      unit: "pro 99 m² Keller",
      note: "Fertighaus.de-Richtwert für 11 × 9 m Grundfläche; Bodenaushub separat.",
      sourceKey: "fertighausFertigkeller2026",
    },
    {
      name: "Fertigkeller 99 m² Ausbaukeller",
      low: 95200,
      high: 95200,
      unit: "pro 99 m² Keller",
      note: "Fertighaus.de-Richtwert für 11 × 9 m Grundfläche; Bodenaushub separat.",
      sourceKey: "fertighausFertigkeller2026",
    },
    {
      name: "Fertigkeller 99 m² Komplettkeller",
      low: 105800,
      high: 105800,
      unit: "pro 99 m² Keller",
      note: "Fertighaus.de-Richtwert für 11 × 9 m Grundfläche; Bodenaushub separat.",
      sourceKey: "fertighausFertigkeller2026",
    },
    {
      name: "Fertigkeller 120 m² Mitbaukeller",
      low: 74500,
      high: 74500,
      unit: "pro 120 m² Keller",
      note: "Fertighaus.de-Richtwert für 12 × 10 m Grundfläche; Bodenaushub separat.",
      sourceKey: "fertighausFertigkeller2026",
    },
    {
      name: "Fertigkeller 120 m² Ausbaukeller",
      low: 117700,
      high: 117700,
      unit: "pro 120 m² Keller",
      note: "Fertighaus.de-Richtwert für 12 × 10 m Grundfläche; Bodenaushub separat.",
      sourceKey: "fertighausFertigkeller2026",
    },
    {
      name: "Fertigkeller 120 m² Komplettkeller",
      low: 128300,
      high: 128300,
      unit: "pro 120 m² Keller",
      note: "Fertighaus.de-Richtwert für 12 × 10 m Grundfläche; Bodenaushub separat.",
      sourceKey: "fertighausFertigkeller2026",
    },
    {
      name: "Erdarbeiten Fertigkeller",
      low: 6000,
      high: 10000,
      unit: "pro Projekt",
      note: "Fertighaus.de nennt für zusätzliche Erdarbeiten bei einem unkomplizierten Fertigkeller-Beispiel etwa 6.000 bis 10.000 €; Bodenklasse und Entsorgung können den Betrag deutlich verändern.",
      sourceKey: "fertighausFertigkeller2026",
    },
    {
      name: "Bodengutachten Kellerbau",
      low: 1000,
      high: 1500,
      unit: "pro Gutachten",
      note: "MyHammer nennt für das Bodengutachten beim Kellerbau häufig etwa 1.000 bis 1.500 €.",
      sourceKey: "myhammerFertighausKeller2026",
    },
    {
      name: "Aushubentsorgung Kellerbau",
      low: 5000,
      high: 15000,
      unit: "pro Projekt",
      note: "MyHammer nennt für die Entsorgung von Aushubmaterial je nach Volumen und Entsorgungsweg etwa 5.000 bis 15.000 €.",
      sourceKey: "myhammerFertighausKeller2026",
    },
    {
      name: "Abdichtung und Entwässerung Kellerbau",
      low: 10000,
      high: 25000,
      unit: "pro Projekt",
      note: "MyHammer nennt für Abdichtung und Entwässerung eines Kellers zusätzliche 10.000 bis 25.000 €; das ist nicht mit einer einzelnen nachträglichen Innen- oder Außenabdichtung gleichzusetzen.",
      sourceKey: "myhammerFertighausKeller2026",
    },
    {
      name: "Weiße Wanne Keller Mehrpreis",
      low: 15000,
      high: 20000,
      unit: "pro Keller",
      note: "Fertighaus.de nennt für eine Weiße Wanne grob 15.000 bis 20.000 € Mehrkosten gegenüber einer konventionell gemauerten Kellerwanne.",
      sourceKey: "fertighausWeisseWanne2026",
    },
    {
      name: "Perimeterdämmung Keller komplett",
      low: 40,
      high: 120,
      unit: "pro m² Kellerwand",
      note: "Blauarbeit nennt 2026 für Perimeterdämmung inklusive Erdarbeiten, Material und Verlegung etwa 40 bis 120 €/m²; im Neubau ist die offene Baugrube meist günstiger nutzbar.",
      sourceKey: "blauarbeitPerimeter2026",
    },
    {
      name: "XPS Perimeterdämmung Keller",
      low: 15,
      high: 30,
      unit: "pro m² Dämmfläche",
      note: "Blauarbeit-Richtwert 2026 für XPS-Dämmplatten mit etwa 8 bis 12 cm Stärke.",
      sourceKey: "blauarbeitPerimeter2026",
    },
    {
      name: "Schaumglas Perimeterdämmung Keller",
      low: 30,
      high: 60,
      unit: "pro m² Dämmfläche",
      sourceKey: "blauarbeitPerimeter2026",
    },
    {
      name: "Kleber und Befestigung Perimeterdämmung",
      low: 5,
      high: 10,
      unit: "pro m² Dämmfläche",
      sourceKey: "blauarbeitPerimeter2026",
    },
    {
      name: "Verlegung Perimeterdämmung Fachbetrieb",
      low: 15,
      high: 30,
      unit: "pro m² Dämmfläche",
      sourceKey: "blauarbeitPerimeter2026",
    },
    {
      name: "Drainage Kellerbau",
      low: 20,
      high: 50,
      unit: "pro lfd. Meter",
      note: "Blauarbeit nennt für eine erforderliche Drainage etwa 20 bis 50 € pro laufendem Meter.",
      sourceKey: "blauarbeitPerimeter2026",
    },
    {
      name: "XPS unter Kellerbodenplatte",
      low: 20,
      high: 40,
      unit: "pro m² Bodenplatte",
      note: "Blauarbeit nennt für lastabtragendes XPS unter der Bodenplatte im Neubau etwa 20 bis 40 €/m².",
      sourceKey: "blauarbeitPerimeter2026",
    },
    {
      name: "Schaumglasschotter unter Kellerbodenplatte",
      low: 25,
      high: 50,
      unit: "pro m² Bodenplatte",
      note: "Blauarbeit nennt für Schaumglasschotter unter der Bodenplatte etwa 25 bis 50 €/m².",
      sourceKey: "blauarbeitPerimeter2026",
    },
  ],
};

export const services: Service[] = [...inheritedServices, kellerbauService];

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
