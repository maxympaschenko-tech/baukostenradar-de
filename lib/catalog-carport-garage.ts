import {
  priceSources as wintergartenPriceSources,
  regions,
  renovationModel,
  services as wintergartenServices,
  type PriceItem as WintergartenPriceItem,
  type Service as WintergartenService,
} from "./catalog-wintergarten";

export const priceSources = {
  ...wintergartenPriceSources,
  blauarbeitCarport2026: {
    name: "Blauarbeit - Carport Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/carport-bauen-kosten",
    checkedAt: "31.08.2026",
  },
  aroundhomeGemauerteGarage2026: {
    name: "Aroundhome - Gemauerte Garage Kosten 2026",
    url: "https://www.aroundhome.de/garage/kosten-gemauerte-garage/",
    checkedAt: "31.08.2026",
  },
} as const;

type CarportGarageSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<WintergartenPriceItem, "sourceKey"> & { sourceKey: CarportGarageSourceKey };
export type Service = Omit<WintergartenService, "priceItems"> & { priceItems: PriceItem[] };

const inheritedServices = wintergartenServices as unknown as Service[];
const inheritedGarage = inheritedServices.find((service) => service.slug === "garage")!;
const inheritedCarport = inheritedServices.find((service) => service.slug === "carport")!;

const carportExpansion: PriceItem[] = [
  {
    name: "Einzelcarport Bausatz Flachdach",
    low: 1500,
    high: 3000,
    unit: "pro Projekt",
    note: "Bausatz ohne professionelle Montage und Fundament",
    sourceKey: "blauarbeitCarport2026",
  },
  {
    name: "Einzelcarport Bausatz Satteldach",
    low: 2500,
    high: 5000,
    unit: "pro Projekt",
    note: "Bausatz mit aufwendigerer Dachform; Montage und Fundament separat prüfen",
    sourceKey: "blauarbeitCarport2026",
  },
  {
    name: "Carport Aufbau durch Fachbetrieb",
    low: 1500,
    high: 3000,
    unit: "pro Projekt",
    note: "Montageleistung zusätzlich zum Bausatz; Fundament separat kalkulieren",
    sourceKey: "blauarbeitCarport2026",
  },
  {
    name: "Einzelcarport komplett mit Aufbau",
    low: 3000,
    high: 8000,
    unit: "pro Projekt",
    note: "Bausatz beziehungsweise Konstruktion inklusive professionellem Aufbau; Fundament je Angebot prüfen",
    sourceKey: "blauarbeitCarport2026",
  },
  {
    name: "Doppelcarport komplett mit Aufbau",
    low: 5000,
    high: 12000,
    unit: "pro Projekt",
    note: "Je nach Dachform, Materialqualität und Ausstattung; Fundament kann zusätzlich anfallen",
    sourceKey: "blauarbeitCarport2026",
  },
  {
    name: "Carport integrierter Geräteraum Aufpreis",
    low: 1000,
    high: 3000,
    unit: "pro Projekt",
    sourceKey: "blauarbeitCarport2026",
  },
  {
    name: "Carport Fundamente komplett",
    low: 600,
    high: 2000,
    unit: "pro Projekt",
    note: "Typischer Zusatzposten für Punktfundamente; Anzahl der Stützen und Bodenverhältnisse beeinflussen den Preis",
    sourceKey: "blauarbeitCarport2026",
  },
  {
    name: "Carport Punktfundament",
    low: 100,
    high: 250,
    unit: "pro Stück",
    note: "Aushub, Beton und Pfostenanker je Fundamentpunkt als Richtwert",
    sourceKey: "blauarbeitCarport2026",
  },
  {
    name: "Carport Stellfläche Pflaster Schotterrasen oder Betonplatte",
    low: 1000,
    high: 3000,
    unit: "pro Projekt",
    note: "Zusätzlicher Bodenaufbau unter dem Carport je nach Fläche und Ausführung",
    sourceKey: "blauarbeitCarport2026",
  },
  {
    name: "Carport Satteldach Aufpreis",
    low: 500,
    high: 1500,
    unit: "pro Projekt",
    sourceKey: "blauarbeitCarport2026",
  },
];

const garageExpansion: PriceItem[] = [
  {
    name: "Garage als Anbau",
    low: 10000,
    high: 20000,
    unit: "pro Projekt",
    sourceKey: "myhammerGarage2026",
  },
  {
    name: "Garage Fundament Zusatzkosten",
    low: 2000,
    high: 5000,
    unit: "pro Projekt",
    note: "Breite Zusatzkosten-Orientierung für das Fundament; konkrete Fundamentart und Erdarbeiten separat prüfen",
    sourceKey: "myhammerGarage2026",
  },
  {
    name: "Garage Erdarbeiten",
    low: 30,
    high: 60,
    unit: "pro m²",
    note: "Aushub und Vorbereitung des Baugrundes",
    sourceKey: "myhammerGarage2026",
  },
  {
    name: "Garage Fundamenterstellung",
    low: 50,
    high: 100,
    unit: "pro m²",
    note: "Betonieren und Bewehrung als allgemeiner Bauleistungs-Richtwert",
    sourceKey: "myhammerGarage2026",
  },
  {
    name: "Garage Mauerarbeiten",
    low: 40,
    high: 80,
    unit: "pro m²",
    sourceKey: "myhammerGarage2026",
  },
  {
    name: "Garage Dacharbeiten",
    low: 50,
    high: 150,
    unit: "pro m²",
    sourceKey: "myhammerGarage2026",
  },
  {
    name: "Fertiggarage Großraumgarage",
    low: 9000,
    high: 25000,
    unit: "pro Projekt",
    note: "Grundpreis je nach Größe und Material; Fundament und Montage im Angebot separat prüfen",
    sourceKey: "aroundhomeFertiggarage2026",
  },
  {
    name: "Fertiggarage mit Fundament",
    low: 5200,
    high: 34000,
    unit: "pro Projekt",
    note: "Breiter Gesamtrahmen nach Größe und Material einschließlich Fundament",
    sourceKey: "aroundhomeFertiggarage2026",
  },
  {
    name: "Fertiggarage mit Montage und Fundament",
    low: 6200,
    high: 34000,
    unit: "pro Projekt",
    note: "Gesamtrahmen abhängig von Größe, Material und Montageaufwand",
    sourceKey: "aroundhomeFertiggarage2026",
  },
  {
    name: "Holz Fertiggarage 3 x 6 m komplett",
    low: 5900,
    high: 5900,
    unit: "pro Projekt",
    note: "Preisbeispiel inklusive Fundament sowie Lieferung und Montage",
    sourceKey: "aroundhomeFertiggarage2026",
  },
  {
    name: "Stahl Fertiggarage 3 x 6 m komplett",
    low: 6900,
    high: 6900,
    unit: "pro Projekt",
    note: "Preisbeispiel inklusive Fundament sowie Lieferung und Montage",
    sourceKey: "aroundhomeFertiggarage2026",
  },
  {
    name: "Beton Fertiggarage 3 x 6 m komplett",
    low: 10800,
    high: 10800,
    unit: "pro Projekt",
    note: "Preisbeispiel inklusive Fundament sowie Lieferung und Montage",
    sourceKey: "aroundhomeFertiggarage2026",
  },
  {
    name: "Fertiggarage Langgarage 3 x 9 m",
    low: 8000,
    high: 20000,
    unit: "pro Projekt",
    sourceKey: "aroundhomeFertiggarage2026",
  },
  {
    name: "Fertiggarage 6 x 9 m",
    low: 8000,
    high: 25000,
    unit: "pro Projekt",
    sourceKey: "aroundhomeFertiggarage2026",
  },
  {
    name: "Gemauerte Massivgarage Selbstbau",
    low: 400,
    high: 600,
    unit: "pro m²",
    note: "Material- und Eigenleistungsorientierung; Facharbeiten, Planung und Ausstattung separat berücksichtigen",
    sourceKey: "aroundhomeGemauerteGarage2026",
  },
  {
    name: "Gemauerte Doppelgarage",
    low: 29000,
    high: 40000,
    unit: "pro Projekt",
    note: "Fachmännisch gemauerte Doppelgarage mit etwa 36 m² Grundfläche",
    sourceKey: "aroundhomeGemauerteGarage2026",
  },
  {
    name: "Garage Bodengutachten",
    low: 500,
    high: 1000,
    unit: "pro Projekt",
    note: "Zusatzkosten, wenn für das Fundament ein Bodengutachten benötigt wird",
    sourceKey: "aroundhomeGemauerteGarage2026",
  },
  {
    name: "Massivgarage Dach komplett",
    low: 4000,
    high: 8000,
    unit: "pro Projekt",
    note: "Unterkonstruktion, Dachbelag und Entwässerung abhängig von Größe und Dachform",
    sourceKey: "aroundhomeGemauerteGarage2026",
  },
];

const garageService: Service = {
  ...inheritedGarage,
  description: "Aktuelle Richtwerte 2026 für Einzel- und Doppelgarage, Fertig- und Massivgarage sowie Fundament, Erd-, Mauer- und Dacharbeiten, Tor, Elektrik und weitere Nebenleistungen in Deutschland.",
  priceItems: [...inheritedGarage.priceItems, ...garageExpansion],
};

const carportService: Service = {
  ...inheritedCarport,
  description: "Aktuelle Richtwerte 2026 für Holz- und Aluminiumcarports, Flach- und Satteldach-Bausätze, Einzel- und Doppelcarport, Montage, Geräteraum, Stellfläche und Fundamente in Deutschland.",
  priceItems: [...inheritedCarport.priceItems, ...carportExpansion],
};

export const services: Service[] = inheritedServices.map((service) => {
  if (service.slug === "garage") return garageService;
  if (service.slug === "carport") return carportService;
  return service;
});

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
