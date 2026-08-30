import {
  priceSources as balconyPriceSources,
  regions,
  renovationModel,
  services as balconyServices,
  type PriceItem as BalconyPriceItem,
  type Service as BalconyService,
} from "./catalog-balcony";

export const priceSources = {
  ...balconyPriceSources,
  myhammerGarage2026: {
    name: "MyHammer - Garage bauen Kosten 2026",
    url: "https://www.my-hammer.de/bauen-renovieren/preisradar/was-kostet-garage-bauen",
    checkedAt: "30.08.2026",
  },
  myhammerFertiggarage2026: {
    name: "MyHammer - Fertiggarage Kosten 2026",
    url: "https://www.my-hammer.de/bauen-renovieren/preisradar/kosten-fertiggarage",
    checkedAt: "30.08.2026",
  },
  aroundhomeFertiggarage2026: {
    name: "Aroundhome - Fertiggaragen Preise 2026",
    url: "https://www.aroundhome.de/garage/fertiggaragen-preise-preisvergleich/",
    checkedAt: "30.08.2026",
  },
  aroundhomeMassivgarage2026: {
    name: "Aroundhome - Massivgarage Kosten 2026",
    url: "https://www.aroundhome.de/garage/massivgaragen/",
    checkedAt: "30.08.2026",
  },
  myhammerCarport2026: {
    name: "MyHammer - Carport bauen Kosten 2026",
    url: "https://www.my-hammer.de/bauen-renovieren/preisradar/was-kostet-carport-bauen",
    checkedAt: "30.08.2026",
  },
  myhammerGarageVsCarport2026: {
    name: "MyHammer - Carport oder Garage Kostenvergleich 2026",
    url: "https://www.my-hammer.de/garten-aussenbereich/artikel/planung-carport-oder-garage",
    checkedAt: "30.08.2026",
  },
  myhammerGaragentor2026: {
    name: "MyHammer - Garagentor einbauen Kosten 2026",
    url: "https://www.my-hammer.de/fenster-tueren/preisradar/was-kostet-garagentor-einbauen",
    checkedAt: "30.08.2026",
  },
  myhammerPunktfundament2026: {
    name: "MyHammer - Punktfundament Kosten 2026",
    url: "https://www.my-hammer.de/bauen-renovieren/preisradar/punktfundament-kosten",
    checkedAt: "30.08.2026",
  },
} as const;

type GarageSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<BalconyPriceItem, "sourceKey"> & { sourceKey: GarageSourceKey };
export type Service = Omit<BalconyService, "priceItems"> & { priceItems: PriceItem[] };

const inheritedServices = balconyServices as unknown as Service[];

const garageService: Service = {
  slug: "garage",
  title: "Garage bauen Kosten 2026",
  shortTitle: "Garage & Fertiggarage",
  description: "Aktuelle Richtwerte 2026 für Einzelgarage, Doppelgarage, Fertiggarage, Massivgarage, Fundament, Montage, Garagentor und Elektroausstattung in Deutschland.",
  unit: "Projekt / m² / Stück",
  icon: "▰",
  priceItems: [
    {
      name: "Garage bauen gesamt",
      low: 7000,
      high: 30000,
      unit: "pro Projekt",
      note: "Breite Marktspanne je nach Größe, Bauweise und Ausstattung; Grundstücks- und Genehmigungssituation separat prüfen",
      sourceKey: "myhammerGarage2026",
    },
    {
      name: "Einzelgarage bauen",
      low: 7000,
      high: 15000,
      unit: "pro Einzelgarage",
      sourceKey: "myhammerGarage2026",
    },
    {
      name: "Doppelgarage bauen",
      low: 12000,
      high: 30000,
      unit: "pro Doppelgarage",
      sourceKey: "myhammerGarage2026",
    },
    {
      name: "Fertiggarage komplett",
      low: 5000,
      high: 12000,
      unit: "pro Garage",
      note: "MyHammer-Richtwert für vorgefertigte Garagen; Fundament, Lieferung und Ausstattung im Angebot genau abgleichen",
      sourceKey: "myhammerGarage2026",
    },
    {
      name: "Fertiggarage Einzelgarage Grundpreis",
      low: 4000,
      high: 15000,
      unit: "pro Garage ohne Fundament und Montage",
      note: "Aroundhome-Richtwert für 12-31 m²",
      sourceKey: "aroundhomeFertiggarage2026",
    },
    {
      name: "Fertiggarage Doppelgarage Grundpreis",
      low: 8000,
      high: 20000,
      unit: "pro Garage ohne Fundament und Montage",
      note: "Aroundhome-Richtwert für 30-63 m²",
      sourceKey: "aroundhomeFertiggarage2026",
    },
    {
      name: "Fertiggarage Montage Einzelgarage",
      low: 1000,
      high: 4000,
      unit: "pro Einzelgarage",
      sourceKey: "aroundhomeFertiggarage2026",
    },
    {
      name: "Fertiggarage Montage Doppelgarage",
      low: 3000,
      high: 6000,
      unit: "pro Doppelgarage",
      sourceKey: "aroundhomeFertiggarage2026",
    },
    {
      name: "Garagenfundament Plattenfundament",
      low: 70,
      high: 100,
      unit: "pro m²",
      note: "Plattenfundament für Fertiggarage; Erdarbeiten und schwieriger Baugrund können zusätzliche Kosten verursachen",
      sourceKey: "myhammerFertiggarage2026",
    },
    {
      name: "Fertiggarage Fundament Einzelgarage",
      low: 1200,
      high: 3100,
      unit: "pro 12-31 m² Einzelgarage",
      sourceKey: "aroundhomeFertiggarage2026",
    },
    {
      name: "Fertiggarage Fundament Doppelgarage",
      low: 3000,
      high: 6300,
      unit: "pro 30-63 m² Doppelgarage",
      sourceKey: "aroundhomeFertiggarage2026",
    },
    {
      name: "Betonfertiggarage Einzelgarage inkl. Fundament",
      low: 9000,
      high: 18000,
      unit: "pro Einzelgarage",
      sourceKey: "aroundhomeMassivgarage2026",
    },
    {
      name: "Betonfertiggarage Doppelgarage inkl. Fundament",
      low: 17000,
      high: 27000,
      unit: "pro Doppelgarage",
      sourceKey: "aroundhomeMassivgarage2026",
    },
    {
      name: "Gemauerte Massivgarage",
      low: 20000,
      high: 40000,
      unit: "pro Garage",
      note: "Stein-auf-Stein-Bau inklusive typischer Material- und Arbeitskosten; Ausstattung und Projektbedingungen beeinflussen den Endpreis",
      sourceKey: "aroundhomeMassivgarage2026",
    },
    {
      name: "Gemauerte Garage pro m²",
      low: 800,
      high: 1100,
      unit: "pro m² inkl. Fundament Material und Arbeit",
      sourceKey: "aroundhomeMassivgarage2026",
    },
    {
      name: "Garagentor einbauen oder austauschen",
      low: 500,
      high: 2500,
      unit: "pro Tor",
      note: "Abhängig von Torart, Antrieb, Demontage und Anpassungsarbeiten",
      sourceKey: "myhammerGaragentor2026",
    },
    {
      name: "Garage Elektroinstallation",
      low: 800,
      high: 2000,
      unit: "pro Garage",
      sourceKey: "myhammerGarage2026",
    },
    {
      name: "Garage Bauantrag Gebühren",
      low: 70,
      high: 300,
      unit: "pro Antrag",
      note: "Behördengebühren laut Aroundhome; Genehmigungspflicht und Gebühren variieren regional",
      sourceKey: "aroundhomeMassivgarage2026",
    },
    {
      name: "Garage Statik oder Standsicherheitsnachweis",
      low: 700,
      high: 1000,
      unit: "pro Nachweis",
      sourceKey: "aroundhomeMassivgarage2026",
    },
  ],
};

const carportService: Service = {
  slug: "carport",
  title: "Carport bauen Kosten 2026",
  shortTitle: "Carport",
  description: "Aktuelle Richtwerte 2026 für Holz- und Aluminiumcarports, Doppelcarports, Sonderanfertigungen und Punktfundamente in Deutschland.",
  unit: "Projekt / m²",
  icon: "⌂",
  priceItems: [
    {
      name: "Carport Holz inkl. Montage",
      low: 2000,
      high: 4000,
      unit: "pro Carport",
      note: "Kostenvergleich inklusive Montage; Fundament und Bodenarbeiten separat prüfen",
      sourceKey: "myhammerGarageVsCarport2026",
    },
    {
      name: "Carport Aluminium oder Stahl inkl. Montage",
      low: 3000,
      high: 6000,
      unit: "pro Carport",
      note: "Kostenvergleich inklusive Montage; Fundament und Bodenarbeiten separat prüfen",
      sourceKey: "myhammerGarageVsCarport2026",
    },
    {
      name: "Carport Sonderanfertigung inkl. Montage",
      low: 5000,
      high: 10000,
      unit: "pro Carport",
      note: "Individuelle Konstruktion laut Kostenvergleich; Fundament und Genehmigung separat prüfen",
      sourceKey: "myhammerGarageVsCarport2026",
    },
    {
      name: "Carport Holz Bausatz oder Material",
      low: 500,
      high: 7500,
      unit: "pro Einzelcarport",
      note: "Breite Material-/Produktspanne abhängig von Holzqualität, Größe, Dach und Ausstattung",
      sourceKey: "myhammerCarport2026",
    },
    {
      name: "Carport Aluminium Bausatz oder Material",
      low: 1200,
      high: 6000,
      unit: "pro Einzelcarport",
      note: "Material-/Produktspanne ohne pauschale Zusatzkosten für Fundament und Sonderausstattung",
      sourceKey: "myhammerCarport2026",
    },
    {
      name: "Doppelcarport Aluminium",
      low: 3500,
      high: 10000,
      unit: "pro Doppelcarport",
      sourceKey: "myhammerCarport2026",
    },
    {
      name: "Punktfundament Carport typisch",
      low: 75,
      high: 120,
      unit: "pro m²",
      note: "Typische Orientierung; je nach Boden, Tiefe und Projekt sind 40-250 €/m² möglich",
      sourceKey: "myhammerPunktfundament2026",
    },
  ],
};

export const services: Service[] = [...inheritedServices, garageService, carportService];

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
