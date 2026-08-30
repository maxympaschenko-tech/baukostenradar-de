import {
  priceSources as poolPriceSources,
  regions,
  renovationModel,
  services as poolServices,
  type PriceItem as PoolPriceItem,
  type Service as PoolService,
} from "./catalog-pool";

export const priceSources = {
  ...poolPriceSources,
  myhammerTerrassenbau2026: {
    name: "MyHammer - Terrassenbau Kosten 2026",
    url: "https://www.my-hammer.de/garten-aussenbereich/preisradar/was-kostet-terrasse-bauen",
    checkedAt: "30.08.2026",
  },
  aroundhomeTerrasse2026: {
    name: "Aroundhome - Terrasse Kosten 2026",
    url: "https://www.aroundhome.de/terrasse/preise-kosten/",
    checkedAt: "30.08.2026",
  },
  blauarbeitHolzterrasse2026: {
    name: "Blauarbeit - Holzterrasse Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/holzterrasse-kosten",
    checkedAt: "30.08.2026",
  },
  blauarbeitWpcTerrasse2026: {
    name: "Blauarbeit - WPC-Terrasse Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/wpc-terrasse-kosten",
    checkedAt: "30.08.2026",
  },
  myhammerErhoehteTerrasse2026: {
    name: "MyHammer - Erhöhte Terrasse Kosten 2026",
    url: "https://www.my-hammer.de/garten-aussenbereich/artikel/erhoehte-terrasse-bauen-hinweise",
    checkedAt: "30.08.2026",
  },
  myhammerDachterrasse2026: {
    name: "MyHammer - Dachterrasse Kosten 2026",
    url: "https://www.my-hammer.de/garten-aussenbereich/preisradar/was-kosten-dachterrassen",
    checkedAt: "30.08.2026",
  },
} as const;

type TerraceSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<PoolPriceItem, "sourceKey"> & { sourceKey: TerraceSourceKey };
export type Service = Omit<PoolService, "priceItems"> & { priceItems: PriceItem[] };

const inheritedServices = poolServices as unknown as Service[];

const terraceService: Service = {
  slug: "terrassenbau",
  title: "Terrassenbau Kosten 2026",
  shortTitle: "Terrassenbau",
  description: "Aktuelle Richtwerte 2026 für Terrassenbau, Holzterrasse, WPC-Terrasse, Steinterrasse, Unterbau, Montage, erhöhte Terrasse und Dachterrasse in Deutschland.",
  unit: "m² / Projekt / Stunde",
  icon: "▥",
  priceItems: [
    {
      name: "Terrasse bauen lassen Gesamtprojekt",
      low: 150,
      high: 450,
      unit: "pro m²",
      note: "Kompletter Richtwert einer Fachfirma inklusive typischer Planung, Fundament, Material und Montage; Materialwahl und Baustellensituation bestimmen die Spanne stark",
      sourceKey: "aroundhomeTerrasse2026",
    },
    {
      name: "Terrasse 20 Quadratmeter komplett",
      low: 3000,
      high: 9000,
      unit: "pro Projekt",
      note: "Typische Gesamtspanne für eine 20-m²-Terrasse durch eine Fachfirma",
      sourceKey: "aroundhomeTerrasse2026",
    },
    {
      name: "Planung Terrassenbau",
      low: 25,
      high: 40,
      unit: "pro m²",
      note: "Planungskosten als eigener Budgetblock vor Fundament, Material und Montage",
      sourceKey: "aroundhomeTerrasse2026",
    },
    {
      name: "Fundament inkl. Bodenaushub",
      low: 40,
      high: 70,
      unit: "pro m²",
      note: "Orientierung für Fundament inklusive typischem Bodenaushub, Schotter und Beton",
      sourceKey: "aroundhomeTerrasse2026",
    },
    {
      name: "Montage Terrassenbau",
      low: 60,
      high: 90,
      unit: "pro m²",
      note: "Arbeitskosten für die fachgerechte Montage; aufwendige Zuschnitte, Höhenunterschiede und Anschlüsse können den Aufwand erhöhen",
      sourceKey: "aroundhomeTerrasse2026",
    },
    {
      name: "Terrassenbauer Stundensatz",
      low: 40,
      high: 60,
      unit: "pro Stunde",
      note: "Typischer Facharbeiter-Stundensatz; Fahrt, Maschinen und Material können separat abgerechnet werden",
      sourceKey: "aroundhomeTerrasse2026",
    },
    {
      name: "Holzterrasse komplett",
      low: 120,
      high: 340,
      unit: "pro m²",
      note: "Fertig verlegt inklusive Unterkonstruktion, Fundament und Montage; Holzart und Untergrund beeinflussen den Preis stark",
      sourceKey: "blauarbeitHolzterrasse2026",
    },
    {
      name: "Holzterrasse Lärche oder Douglasie komplett",
      low: 120,
      high: 195,
      unit: "pro m²",
      note: "Komplettrichtwert auf ebenem Grund für gängige heimische beziehungsweise europäische Nadelhölzer",
      sourceKey: "blauarbeitHolzterrasse2026",
    },
    {
      name: "Holzdielen Material",
      low: 25,
      high: 190,
      unit: "pro m²",
      note: "Große Materialspanne je nach Holzart und Qualitätsklasse",
      sourceKey: "aroundhomeTerrasse2026",
    },
    {
      name: "Holzterrasse Unterkonstruktion",
      low: 15,
      high: 20,
      unit: "pro m²",
      note: "Materialorientierung für die Unterkonstruktion; Fundament und Montage separat kalkulieren",
      sourceKey: "aroundhomeTerrasse2026",
    },
    {
      name: "WPC Terrasse komplett",
      low: 146,
      high: 290,
      unit: "pro m²",
      note: "Fertig verlegte WPC-Terrasse inklusive typischem Aufbau und Montage",
      sourceKey: "blauarbeitWpcTerrasse2026",
    },
    {
      name: "WPC Terrasse 20 Quadratmeter komplett",
      low: 2920,
      high: 5800,
      unit: "pro Projekt",
      note: "Beispielbudget für 20 m² auf Basis aktueller Komplettpreise",
      sourceKey: "blauarbeitWpcTerrasse2026",
    },
    {
      name: "WPC Hohlkammerdiele Material",
      low: 35,
      high: 60,
      unit: "pro m²",
      note: "Preisgünstige WPC-Ausführung; Unterkonstruktion, Fundament und Montage separat kalkulieren",
      sourceKey: "blauarbeitWpcTerrasse2026",
    },
    {
      name: "WPC Vollprofil Material",
      low: 45,
      high: 95,
      unit: "pro m²",
      note: "Stabilere Vollprofil-Ausführung ohne offene Kammern",
      sourceKey: "blauarbeitWpcTerrasse2026",
    },
    {
      name: "WPC coextrudiert Material",
      low: 60,
      high: 120,
      unit: "pro m²",
      note: "Hochwertige ummantelte WPC-Dielen mit höherer Flecken- und Farbbeständigkeit",
      sourceKey: "blauarbeitWpcTerrasse2026",
    },
    {
      name: "Steinterrasse Fundament und Pflasterarbeiten",
      low: 70,
      high: 100,
      unit: "pro m² Arbeit",
      note: "Arbeitskosten für Fundament und Pflastern einer Steinterrasse; Belag und besondere Verlegemuster können zusätzlich wirken",
      sourceKey: "myhammerTerrassenbau2026",
    },
    {
      name: "Natursteinterrasse 20 Quadratmeter komplett",
      low: 4800,
      high: 4800,
      unit: "pro Projekt",
      note: "Aroundhome-Beispielrechnung für eine 20-m²-Terrasse mit Naturstein",
      sourceKey: "aroundhomeTerrasse2026",
    },
    {
      name: "Erhöhte Terrasse Fachbetrieb",
      low: 100,
      high: 200,
      unit: "pro m²",
      note: "Richtwert für professionelle Ausführung; Höhe, Unterkonstruktion, Geländer und Zugänglichkeit können den Preis erhöhen",
      sourceKey: "myhammerErhoehteTerrasse2026",
    },
    {
      name: "Dachterrasse Gesamtprojekt",
      low: 15000,
      high: 50000,
      unit: "pro Projekt",
      note: "Typische Gesamtspanne; Statik, Abdichtung, Geländer, Zugang und Dachaufbau sind entscheidende Kostentreiber",
      sourceKey: "myhammerDachterrasse2026",
    },
    {
      name: "Dachterrasse Kosten pro Quadratmeter",
      low: 200,
      high: 800,
      unit: "pro m²",
      note: "Breite Projektorientierung abhängig von Größe, Ausstattung und baulichen Voraussetzungen",
      sourceKey: "myhammerDachterrasse2026",
    },
  ],
};

export const services: Service[] = [...inheritedServices, terraceService];

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
