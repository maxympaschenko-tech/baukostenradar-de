import {
  priceSources as terraceCoverPriceSources,
  regions,
  renovationModel,
  services as terraceCoverServices,
  type PriceItem as TerraceCoverPriceItem,
  type Service as TerraceCoverService,
} from "./catalog-terrace-cover";

export const priceSources = {
  ...terraceCoverPriceSources,
  aroundhomeWintergarten2026: {
    name: "Aroundhome - Wintergarten Kosten 2026",
    url: "https://www.aroundhome.de/wintergarten/kosten/",
    checkedAt: "31.08.2026",
  },
  blauarbeitKaltwintergarten2026: {
    name: "Blauarbeit - Kaltwintergarten Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/kaltwintergarten-kosten",
    checkedAt: "31.08.2026",
  },
  blauarbeitWohnwintergarten2026: {
    name: "Blauarbeit - Wohnwintergarten Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/wohnwintergarten-kosten",
    checkedAt: "31.08.2026",
  },
  blauarbeitWintergartenFundament2026: {
    name: "Blauarbeit - Wintergarten Fundament Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/wintergartenbau/wintergarten-fundament",
    checkedAt: "31.08.2026",
  },
} as const;

type WintergartenSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<TerraceCoverPriceItem, "sourceKey"> & { sourceKey: WintergartenSourceKey };
export type Service = Omit<TerraceCoverService, "priceItems"> & { priceItems: PriceItem[] };

const inheritedServices = terraceCoverServices as unknown as Service[];

const wintergartenService: Service = {
  slug: "wintergarten",
  title: "Wintergarten Kosten 2026",
  shortTitle: "Wintergarten",
  description: "Aktuelle Richtwerte 2026 für Kaltwintergarten, mittelwarmen Wintergarten, Wohn- und Warmwintergarten, Verglasung, Fundament, Heizung, Beschattung und laufende Kosten in Deutschland.",
  unit: "m² / Projekt / Jahr",
  icon: "▱",
  priceItems: [
    {
      name: "Wintergarten Gesamtprojekt",
      low: 10000,
      high: 100000,
      unit: "pro Projekt",
      note: "Breiter Gesamtbereich von einfachen Kaltwintergärten bis zu hochwertigen beheizten Wohnwintergärten",
      sourceKey: "aroundhomeWintergarten2026",
    },
    {
      name: "Kaltwintergarten Komplettpreis inklusive Montage",
      low: 10000,
      high: 25000,
      unit: "pro Projekt",
      note: "Unbeheizter Glasanbau als typischer Komplettpreis inklusive Montage",
      sourceKey: "aroundhomeWintergarten2026",
    },
    {
      name: "Mittelwarmer Wintergarten Komplettpreis",
      low: 25000,
      high: 50000,
      unit: "pro Projekt",
      note: "Besser gedämmt als ein Kaltwintergarten, aber nicht als vollwertiger beheizter Wohnraum ausgelegt",
      sourceKey: "aroundhomeWintergarten2026",
    },
    {
      name: "Warmwintergarten Komplettpreis inklusive Montage",
      low: 50000,
      high: 100000,
      unit: "pro Projekt",
      note: "Ganzjährig beheizbarer Wohnwintergarten; große oder hochwertige Projekte können darüber liegen",
      sourceKey: "aroundhomeWintergarten2026",
    },
    {
      name: "Kaltwintergarten durch Fachbetrieb",
      low: 400,
      high: 1200,
      unit: "pro m²",
      note: "Unbeheizter Wintergarten inklusive professioneller Ausführung; Fundament je nach Angebot separat prüfen",
      sourceKey: "blauarbeitKaltwintergarten2026",
    },
    {
      name: "Kaltwintergarten Aluminium Bausatz Eigenmontage",
      low: 250,
      high: 500,
      unit: "pro m²",
      note: "Bausatzpreis bei Eigenmontage; Fundament und weitere Nebenarbeiten separat kalkulieren",
      sourceKey: "blauarbeitKaltwintergarten2026",
    },
    {
      name: "Kaltwintergarten Bausatz montiert",
      low: 400,
      high: 700,
      unit: "pro m²",
      sourceKey: "blauarbeitKaltwintergarten2026",
    },
    {
      name: "Kaltwintergarten Aluminium Maßanfertigung",
      low: 700,
      high: 1000,
      unit: "pro m²",
      sourceKey: "blauarbeitKaltwintergarten2026",
    },
    {
      name: "Kaltwintergarten Holz oder Holz Aluminium Maßanfertigung",
      low: 800,
      high: 1200,
      unit: "pro m²",
      sourceKey: "blauarbeitKaltwintergarten2026",
    },
    {
      name: "Wohnwintergarten Fachbetrieb",
      low: 1500,
      high: 3500,
      unit: "pro m²",
      note: "Beheizter ganzjährig nutzbarer Wintergarten; Fundament und besondere Ausstattung können zusätzlich anfallen",
      sourceKey: "blauarbeitWohnwintergarten2026",
    },
    {
      name: "Wohnwintergarten Kunststoff Konstruktion",
      low: 1500,
      high: 2200,
      unit: "pro m²",
      note: "Rahmenkonstruktion inklusive Verglasung, ohne Fundament",
      sourceKey: "blauarbeitWohnwintergarten2026",
    },
    {
      name: "Wohnwintergarten Holz Konstruktion",
      low: 1800,
      high: 2800,
      unit: "pro m²",
      note: "Rahmenkonstruktion inklusive Verglasung, ohne Fundament",
      sourceKey: "blauarbeitWohnwintergarten2026",
    },
    {
      name: "Wohnwintergarten Holz Aluminium Konstruktion",
      low: 2200,
      high: 3200,
      unit: "pro m²",
      note: "Rahmenkonstruktion inklusive Verglasung, ohne Fundament",
      sourceKey: "blauarbeitWohnwintergarten2026",
    },
    {
      name: "Wohnwintergarten Aluminium Konstruktion",
      low: 2400,
      high: 3500,
      unit: "pro m²",
      note: "Rahmenkonstruktion inklusive Verglasung, ohne Fundament",
      sourceKey: "blauarbeitWohnwintergarten2026",
    },
    {
      name: "Wohnwintergarten Stahl Konstruktion",
      low: 2800,
      high: 4000,
      unit: "pro m²",
      note: "Rahmenkonstruktion inklusive Verglasung, ohne Fundament",
      sourceKey: "blauarbeitWohnwintergarten2026",
    },
    {
      name: "Wintergarten Einfachverglasung",
      low: 150,
      high: 250,
      unit: "pro m² Glasfläche",
      note: "Vor allem für unbeheizte Kaltwintergärten geeignet",
      sourceKey: "aroundhomeWintergarten2026",
    },
    {
      name: "Wintergarten Isolierglas Doppelverglasung",
      low: 200,
      high: 350,
      unit: "pro m² Glasfläche",
      note: "Typische Zweifachverglasung für kalte oder mittelwarme Wintergärten",
      sourceKey: "aroundhomeWintergarten2026",
    },
    {
      name: "Wintergarten Dreifachverglasung",
      low: 300,
      high: 500,
      unit: "pro m² Glasfläche",
      note: "Hochwertige Wärmeschutzverglasung für beheizte Wohnwintergärten",
      sourceKey: "aroundhomeWintergarten2026",
    },
    {
      name: "Wintergarten Glasdach",
      low: 250,
      high: 450,
      unit: "pro m² Dachfläche",
      note: "Isolier- oder Sicherheitsglas als Dachmaterial",
      sourceKey: "aroundhomeWintergarten2026",
    },
    {
      name: "Wintergarten Polycarbonat Stegplatten Dach",
      low: 50,
      high: 150,
      unit: "pro m² Dachfläche",
      note: "Leichtere und günstigere Alternative zum Glasdach, vor allem für Kaltwintergärten",
      sourceKey: "aroundhomeWintergarten2026",
    },
    {
      name: "Wintergarten Punktfundament",
      low: 40,
      high: 90,
      unit: "pro m² Grundfläche",
      note: "Für leichte Kaltwintergärten; Tragfähigkeit und Frosttiefe müssen zur Konstruktion passen",
      sourceKey: "blauarbeitWintergartenFundament2026",
    },
    {
      name: "Wintergarten Streifenfundament",
      low: 80,
      high: 180,
      unit: "pro m² Grundfläche",
      sourceKey: "blauarbeitWintergartenFundament2026",
    },
    {
      name: "Wintergarten Bodenplatte ungedämmt",
      low: 120,
      high: 220,
      unit: "pro m² Grundfläche",
      note: "Typischer massiver Bodenaufbau für unbeheizte Wintergärten",
      sourceKey: "blauarbeitWintergartenFundament2026",
    },
    {
      name: "Wintergarten Bodenplatte gedämmt",
      low: 180,
      high: 350,
      unit: "pro m² Grundfläche",
      note: "Für beheizte Wohnwintergärten mit thermisch geeignetem Bodenaufbau",
      sourceKey: "blauarbeitWintergartenFundament2026",
    },
    {
      name: "Wintergarten Bodenplatte mit Fußbodenheizung",
      low: 230,
      high: 420,
      unit: "pro m² Grundfläche",
      sourceKey: "blauarbeitWintergartenFundament2026",
    },
    {
      name: "Wintergarten Heizung einbauen",
      low: 2500,
      high: 5000,
      unit: "pro Projekt",
      note: "Fußbodenheizung, Heizkörper oder Anschluss an ein bestehendes Heizsystem",
      sourceKey: "aroundhomeWintergarten2026",
    },
    {
      name: "Wintergarten Belüftungssystem",
      low: 500,
      high: 2000,
      unit: "pro Projekt",
      note: "Automatische oder technisch unterstützte Lüftung für beheizte Wintergärten",
      sourceKey: "aroundhomeWintergarten2026",
    },
    {
      name: "Wintergarten Beschattungssystem",
      low: 2000,
      high: 3500,
      unit: "pro Projekt",
      note: "Orientierung für außen- oder innenliegende Beschattung eines typischen Wintergartens",
      sourceKey: "aroundhomeWintergarten2026",
    },
    {
      name: "Wintergarten Baugenehmigung",
      low: 400,
      high: 1000,
      unit: "pro Antrag",
      note: "Richtwert; Genehmigungspflicht und Gebühren unterscheiden sich nach Bundesland und Kommune",
      sourceKey: "aroundhomeWintergarten2026",
    },
    {
      name: "Kaltwintergarten laufende Nebenkosten",
      low: 120,
      high: 300,
      unit: "pro Jahr",
      note: "Typische laufende Kosten für Reinigung, Wartung und optionale Versicherung",
      sourceKey: "aroundhomeWintergarten2026",
    },
    {
      name: "Warmwintergarten laufende Nebenkosten",
      low: 430,
      high: 980,
      unit: "pro Jahr",
      note: "Orientierung inklusive Heizung, Reinigung, Wartung und optionaler Versicherung",
      sourceKey: "aroundhomeWintergarten2026",
    },
  ],
};

export const services: Service[] = [...inheritedServices, wintergartenService];

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
