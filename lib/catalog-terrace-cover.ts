import {
  priceSources as terracePriceSources,
  regions,
  renovationModel,
  services as terraceServices,
  type PriceItem as TerracePriceItem,
  type Service as TerraceService,
} from "./catalog-terrace";

export const priceSources = {
  ...terracePriceSources,
  aroundhomeTerrassenueberdachung2026: {
    name: "Aroundhome - Terrassenüberdachung Kosten 2026",
    url: "https://www.aroundhome.de/terrassenueberdachung/preise/",
    checkedAt: "30.08.2026",
  },
  aroundhomeLamellendach2026: {
    name: "Aroundhome - Lamellendach Kosten 2026",
    url: "https://www.aroundhome.de/terrassenueberdachung/lamellen/",
    checkedAt: "30.08.2026",
  },
  blauarbeitPergola2026: {
    name: "Blauarbeit - Pergola Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/pergola-kosten",
    checkedAt: "30.08.2026",
  },
} as const;

type TerraceCoverSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<TerracePriceItem, "sourceKey"> & { sourceKey: TerraceCoverSourceKey };
export type Service = Omit<TerraceService, "priceItems"> & { priceItems: PriceItem[] };

const inheritedServices = terraceServices as unknown as Service[];

const terraceCoverService: Service = {
  slug: "terrassenueberdachung",
  title: "Terrassenüberdachung Kosten 2026",
  shortTitle: "Terrassenüberdachung",
  description: "Aktuelle Richtwerte 2026 für Terrassenüberdachung, Holz- und Aluminiumkonstruktionen, Glas- und Kunststoffdächer, Lamellendach, Pergola, Fundament, Lieferung und Montage in Deutschland.",
  unit: "m² / Projekt / Pfosten / Stunde",
  icon: "⌑",
  priceItems: [
    {
      name: "Terrassenüberdachung komplett mit Montage und Fundament",
      low: 3000,
      high: 20000,
      unit: "pro Projekt",
      note: "Durchschnittlicher Gesamtbereich; Größe, Material, Dacheindeckung und Ausstattung bestimmen den Endpreis",
      sourceKey: "aroundhomeTerrassenueberdachung2026",
    },
    {
      name: "Terrassenüberdachung günstiges Segment mit Montage",
      low: 2500,
      high: 5000,
      unit: "pro Projekt",
      note: "Orientierung für einfache Standardlösungen inklusive Montage",
      sourceKey: "aroundhomeTerrassenueberdachung2026",
    },
    {
      name: "Design Terrassenüberdachung oder Maßanfertigung",
      low: 6000,
      high: 25000,
      unit: "pro Projekt",
      note: "Hochwertige Designlösungen und Maßanfertigungen; Vollausstattung kann darüber liegen",
      sourceKey: "aroundhomeTerrassenueberdachung2026",
    },
    {
      name: "Terrassendach ohne Montage",
      low: 1800,
      high: 15000,
      unit: "pro Dach",
      note: "Orientierung für die Überdachung selbst; Lieferung, Fundament und Montage separat prüfen",
      sourceKey: "aroundhomeTerrassenueberdachung2026",
    },
    {
      name: "Lieferung Terrassenüberdachung",
      low: 100,
      high: 300,
      unit: "pro Lieferung",
      note: "Falls Lieferung nicht bereits im Angebot enthalten ist",
      sourceKey: "aroundhomeTerrassenueberdachung2026",
    },
    {
      name: "Montage Terrassenüberdachung",
      low: 700,
      high: 3000,
      unit: "pro Projekt",
      note: "Breite Orientierung je nach Material, Größe und Montagesituation",
      sourceKey: "aroundhomeTerrassenueberdachung2026",
    },
    {
      name: "Punktfundament Terrassendach",
      low: 200,
      high: 400,
      unit: "pro Pfosten",
      note: "Fundament je Stütze; Anzahl, Boden und Dimensionierung beeinflussen den Gesamtpreis",
      sourceKey: "aroundhomeTerrassenueberdachung2026",
    },
    {
      name: "Holz Terrassenüberdachung mit Kunststoff 4 x 3 m Wandmontage",
      low: 1800,
      high: 6000,
      unit: "pro Projekt",
      sourceKey: "aroundhomeTerrassenueberdachung2026",
    },
    {
      name: "Holz Terrassenüberdachung mit Sicherheitsglas 4 x 3 m Wandmontage",
      low: 2500,
      high: 10000,
      unit: "pro Projekt",
      sourceKey: "aroundhomeTerrassenueberdachung2026",
    },
    {
      name: "Holz Terrassenüberdachung mit Dachziegeln 4 x 3 m Wandmontage",
      low: 5000,
      high: 14000,
      unit: "pro Projekt",
      sourceKey: "aroundhomeTerrassenueberdachung2026",
    },
    {
      name: "Aluminium Terrassenüberdachung mit Kunststoff 4 x 3 m Wandmontage",
      low: 2500,
      high: 11000,
      unit: "pro Projekt",
      sourceKey: "aroundhomeTerrassenueberdachung2026",
    },
    {
      name: "Aluminium Terrassenüberdachung mit Sicherheitsglas 4 x 3 m Wandmontage",
      low: 3000,
      high: 13000,
      unit: "pro Projekt",
      sourceKey: "aroundhomeTerrassenueberdachung2026",
    },
    {
      name: "Aluminium Lamellendach 4 x 3 m Wandmontage",
      low: 4000,
      high: 15000,
      unit: "pro Projekt",
      sourceKey: "aroundhomeLamellendach2026",
    },
    {
      name: "VSG Klarglas Terrassendach",
      low: 60,
      high: 120,
      unit: "pro m² Material",
      note: "Verbundsicherheitsglas als Dacheindeckung; Konstruktion und Montage separat kalkulieren",
      sourceKey: "aroundhomeTerrassenueberdachung2026",
    },
    {
      name: "VSG Mattglas Terrassendach",
      low: 70,
      high: 130,
      unit: "pro m² Material",
      note: "Mattes Verbundsicherheitsglas mit Sicht- beziehungsweise Hitzeschutzwirkung",
      sourceKey: "aroundhomeTerrassenueberdachung2026",
    },
    {
      name: "Acrylglas Terrassendach",
      low: 50,
      high: 90,
      unit: "pro m² Material",
      sourceKey: "aroundhomeTerrassenueberdachung2026",
    },
    {
      name: "Doppelstegplatte Terrassendach",
      low: 20,
      high: 50,
      unit: "pro m² Material",
      sourceKey: "aroundhomeTerrassenueberdachung2026",
    },
    {
      name: "Terrassenüberdachung günstiges Preissegment",
      low: 150,
      high: 400,
      unit: "pro m²",
      note: "Orientierung für einfache Systeme; hochwertigere Konstruktionen liegen deutlich höher",
      sourceKey: "aroundhomeTerrassenueberdachung2026",
    },
    {
      name: "Design Terrassendach hochwertig",
      low: 500,
      high: 1500,
      unit: "pro m²",
      note: "Richtwert für hochwertige Design-Terrassendächer und anspruchsvolle Materialkombinationen",
      sourceKey: "aroundhomeTerrassenueberdachung2026",
    },
    {
      name: "Lamellenpergola Bausatz mit verstellbarem Dach",
      low: 2500,
      high: 8000,
      unit: "pro Bausatz",
      note: "Ohne Fundament und Aufbau; Motor, Steuerung und Ausstattung beeinflussen den Preis",
      sourceKey: "blauarbeitPergola2026",
    },
    {
      name: "Pergola Maßanfertigung Fachbetrieb",
      low: 2000,
      high: 8000,
      unit: "pro Projekt",
      note: "Maßanfertigung ohne Fundament; besondere Grundrisse und Ausstattung können den Preis erhöhen",
      sourceKey: "blauarbeitPergola2026",
    },
    {
      name: "Pergola Montage Fachbetrieb",
      low: 50,
      high: 80,
      unit: "pro Stunde",
      sourceKey: "blauarbeitPergola2026",
    },
  ],
};

export const services: Service[] = [...inheritedServices, terraceCoverService];

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
