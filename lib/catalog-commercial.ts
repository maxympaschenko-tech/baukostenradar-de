import {
  priceSources as catalogPriceSources,
  regions,
  renovationModel,
  services as catalogServices,
  type PriceItem as CatalogPriceItem,
  type Service as CatalogService,
} from "./catalog";

export const priceSources = {
  ...catalogPriceSources,
  aroundhomeHeizung: {
    name: "Aroundhome - Heizung Kosten 2026",
    url: "https://www.aroundhome.de/heizung/kosten-preise/",
    checkedAt: "29.08.2026",
  },
  aroundhomeFassadenanstrich: {
    name: "Aroundhome - Fassadenanstrich Kosten 2026",
    url: "https://www.aroundhome.de/fassade/fassadenanstrich/preise-kosten/",
    checkedAt: "29.08.2026",
  },
  co2Fassadendaemmung: {
    name: "co2online - Fassadendämmung Kosten",
    url: "https://www.co2online.de/modernisieren-und-bauen/daemmung/uebersicht-fassadendaemmung/",
    checkedAt: "29.08.2026",
  },
  blauarbeitBad: {
    name: "Blauarbeit - Badsanierung Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/badsanierung-kosten",
    checkedAt: "29.08.2026",
  },
  aroundhomeBadCommercial: {
    name: "Aroundhome - Badsanierung Preise & Kosten 2026",
    url: "https://www.aroundhome.de/badezimmer/preise-kosten/",
    checkedAt: "29.08.2026",
  },
  blauarbeitMauerarbeiten: {
    name: "Blauarbeit - Mauerarbeiten Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/mauerarbeiten-kosten",
    checkedAt: "29.08.2026",
  },
  myhammerMauerfugen: {
    name: "MyHammer - Mauerfugen erneuern Kosten 2026",
    url: "https://www.my-hammer.de/bauen-renovieren/preisradar/was-kostet-fugensanierung",
    checkedAt: "29.08.2026",
  },
} as const;

type CommercialSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<CatalogPriceItem, "sourceKey"> & { sourceKey: CommercialSourceKey };
export type Service = Omit<CatalogService, "priceItems"> & { priceItems: PriceItem[] };

export const services: Service[] = catalogServices.map((service) => {
  const catalogService = service as unknown as Service;

  if (service.slug === "heizung") {
    return {
      ...catalogService,
      description: "Aktuelle Richtwerte für Heizungsarbeiten und den Vergleich kompletter Heizsysteme wie Gas, Öl, Pellets, Wärmepumpe, Fernwärme, Solarthermie und Brennstoffzelle in Deutschland.",
      priceItems: [
        ...catalogService.priceItems,
        {
          name: "Elektroheizung komplett",
          low: 2000,
          high: 18000,
          unit: "pro Anlage inkl. Einbau & Zubehör",
          note: "Orientierungswert für ein Einfamilienhaus mit ca. 120 m²; vor individuellen Förderungen",
          sourceKey: "aroundhomeHeizung",
        },
        {
          name: "Gasheizung komplett inkl. Einbau",
          low: 10000,
          high: 21000,
          unit: "pro Anlage inkl. Zubehör",
          note: "Orientierungswert für ein Einfamilienhaus mit ca. 120 m²",
          sourceKey: "aroundhomeHeizung",
        },
        {
          name: "Ölheizung komplett inkl. Einbau",
          low: 11000,
          high: 23000,
          unit: "pro Anlage inkl. Zubehör",
          note: "Orientierungswert für ein Einfamilienhaus mit ca. 120 m²",
          sourceKey: "aroundhomeHeizung",
        },
        {
          name: "Pelletheizung komplett inkl. Einbau",
          low: 18000,
          high: 29000,
          unit: "pro Anlage inkl. Zubehör",
          note: "Orientierungswert für ein Einfamilienhaus mit ca. 120 m²; vor individuellen Förderungen",
          sourceKey: "aroundhomeHeizung",
        },
        {
          name: "Wärmepumpe komplett inkl. Einbau",
          low: 19000,
          high: 50000,
          unit: "pro Anlage inkl. Zubehör",
          note: "Systemübergreifender Orientierungswert für ein Einfamilienhaus mit ca. 120 m²; vor individuellen Förderungen",
          sourceKey: "aroundhomeHeizung",
        },
        {
          name: "Fernwärmeanschluss",
          low: 6000,
          high: 19000,
          unit: "pro Anschluss inkl. Zubehör",
          note: "Orientierungswert für ein Einfamilienhaus mit ca. 120 m²; vor individuellen Förderungen",
          sourceKey: "aroundhomeHeizung",
        },
        {
          name: "Solarthermieanlage",
          low: 8000,
          high: 15000,
          unit: "pro Anlage inkl. Einbau & Zubehör",
          note: "Orientierungswert für ein Einfamilienhaus mit ca. 120 m²; vor individuellen Förderungen",
          sourceKey: "aroundhomeHeizung",
        },
        {
          name: "Brennstoffzellenheizung",
          low: 29000,
          high: 49000,
          unit: "pro Anlage inkl. Einbau & Zubehör",
          note: "Orientierungswert für ein Einfamilienhaus mit ca. 120 m²; vor individuellen Förderungen",
          sourceKey: "aroundhomeHeizung",
        },
      ],
    };
  }

  if (service.slug === "fassade") {
    return {
      ...catalogService,
      description: "Aktuelle Richtwerte für Fassadenanstrich, Reinigung, Gerüst, Putzreparaturen, Dämmverfahren und Fassadenarbeiten in Deutschland.",
      priceItems: [
        ...catalogService.priceItems,
        {
          name: "Fassadengerüst aufstellen & mieten",
          low: 8,
          high: 16,
          unit: "pro m² Fassadenfläche",
          note: "Orientierung für etwa vier Wochen Standzeit bei einem typischen Einfamilienhaus",
          sourceKey: "aroundhomeFassadenanstrich",
        },
        {
          name: "Fassadenreinigung mit Hochdruck",
          low: 5,
          high: 15,
          unit: "pro m²",
          note: "Einzelbeauftragte einfache Hochdruckreinigung; Verschmutzung und Zugänglichkeit beeinflussen den Preis",
          sourceKey: "aroundhomeFassadenanstrich",
        },
        {
          name: "Algen- und Pilzbehandlung Fassade",
          low: 5,
          high: 15,
          unit: "pro m²",
          sourceKey: "aroundhomeFassadenanstrich",
        },
        {
          name: "Fassade grundieren",
          low: 3,
          high: 6,
          unit: "pro m²",
          sourceKey: "aroundhomeFassadenanstrich",
        },
        {
          name: "Zweifacher Fassadenanstrich",
          low: 15,
          high: 35,
          unit: "pro m² Arbeit & Material",
          note: "Reiner zweifacher Farbauftrag; Gerüst, Reinigung und zusätzliche Vorarbeiten separat",
          sourceKey: "aroundhomeFassadenanstrich",
        },
        {
          name: "Putzabplatzungen ausbessern",
          low: 15,
          high: 30,
          unit: "pro m² betroffener Fläche",
          note: "Richtwert abhängig von Tiefe und Zustand des vorhandenen Putzes",
          sourceKey: "aroundhomeFassadenanstrich",
        },
        {
          name: "Kerndämmung / Einblasdämmung Fassade",
          low: 25,
          high: 60,
          unit: "pro m²",
          note: "Gesamtkosten aus Dämmstoff und Montage bei geeigneter zweischaliger Außenwand",
          sourceKey: "co2Fassadendaemmung",
        },
        {
          name: "WDVS Fassadendämmung",
          low: 160,
          high: 200,
          unit: "pro m²",
          note: "Wärmedämmverbundsystem inklusive Dämmstoff und Montage laut Quellenorientierung",
          sourceKey: "co2Fassadendaemmung",
        },
      ],
    };
  }

  if (service.slug === "badsanierung") {
    const refreshedPriceItems: PriceItem[] = catalogService.priceItems.map((item) => {
      if (item.name === "Bad-Teilsanierung") {
        return {
          ...item,
          low: 3000,
          high: 8000,
          unit: "pro Bad",
          note: "Teilsanierung mit Austausch typischer Sanitärobjekte bei erhaltenen Fliesen und Leitungen",
          sourceKey: "blauarbeitBad",
        };
      }
      return item;
    });

    return {
      ...catalogService,
      description: "Aktuelle Richtwerte 2026 für komplette und teilweise Badsanierung, Kosten pro Quadratmeter, 6-, 8- und 10-m²-Bäder sowie barrierefreie Modernisierung in Deutschland.",
      priceItems: [
        ...refreshedPriceItems,
        {
          name: "Badsanierung komplett Standard",
          low: 3000,
          high: 4000,
          unit: "pro m² Badfläche",
          note: "Komplettsanierung inklusive üblicher Gewerke; Standardausstattung laut Blauarbeit 2026",
          sourceKey: "blauarbeitBad",
        },
        {
          name: "Badsanierung komplett gehoben",
          low: 4000,
          high: 5000,
          unit: "pro m² Badfläche",
          note: "Komplettsanierung mit gehobener Ausstattung laut Blauarbeit 2026",
          sourceKey: "blauarbeitBad",
        },
        {
          name: "Badsanierung barrierefrei",
          low: 3500,
          high: 5500,
          unit: "pro m² Badfläche",
          note: "Orientierung für barrierefreie Komplettsanierung mit bodengleicher Dusche und angepasster Ausstattung",
          sourceKey: "blauarbeitBad",
        },
        {
          name: "Bad 6 m² komplett sanieren",
          low: 18000,
          high: 30000,
          unit: "pro Bad",
          note: "Gesamtrichtwert aus 3.000–5.000 € pro m² für ein typisches 6-m²-Bad",
          sourceKey: "blauarbeitBad",
        },
        {
          name: "Bad 8 m² komplett sanieren",
          low: 9600,
          high: 28000,
          unit: "pro Bad",
          note: "Breiter Markt-Richtwert nach Ausstattungsniveau; Aroundhome nennt für 8 m² etwa 9.600–28.000 €",
          sourceKey: "aroundhomeBadCommercial",
        },
        {
          name: "Bad 10 m² komplett sanieren",
          low: 12000,
          high: 35000,
          unit: "pro Bad",
          note: "Breiter Markt-Richtwert nach Ausstattungsniveau; Aroundhome nennt für 10 m² etwa 12.000–35.000 €",
          sourceKey: "aroundhomeBadCommercial",
        },
        {
          name: "Bodengleiche Dusche komplett",
          low: 1500,
          high: 3500,
          unit: "pro Dusche",
          note: "Material und Einbau; gehobene Ausführung kann laut Quelle bis etwa 6.000 € reichen",
          sourceKey: "blauarbeitBad",
        },
      ],
    };
  }

  if (service.slug === "maurer") {
    const refreshedPriceItems: PriceItem[] = catalogService.priceItems.map((item) => {
      if (item.name === "Porenbeton-Mauerwerk") {
        return { ...item, low: 60, high: 90, sourceKey: "blauarbeitMauerarbeiten" };
      }
      if (item.name === "Kalksandstein-Mauerwerk") {
        return { ...item, low: 70, high: 110, sourceKey: "blauarbeitMauerarbeiten" };
      }
      if (item.name === "Poroton-Mauerwerk") {
        return { ...item, low: 80, high: 130, sourceKey: "blauarbeitMauerarbeiten" };
      }
      if (item.name === "Klinker-Verblendmauerwerk") {
        return { ...item, low: 100, high: 150, sourceKey: "blauarbeitMauerarbeiten" };
      }
      return item;
    });

    return {
      ...catalogService,
      description: "Aktuelle Richtwerte 2026 für Maurer-Stundensätze, Porenbeton, Kalksandstein, Ziegel, Klinker, Fundamente, Bodenplatten, Mauerabbruch und Fugensanierung in Deutschland.",
      priceItems: [
        ...refreshedPriceItems,
        {
          name: "Bauhelfer bei Maurerarbeiten",
          low: 30,
          high: 45,
          unit: "pro Stunde",
          note: "Richtwert für Hilfsarbeiten; Einsatz und Region beeinflussen den Verrechnungssatz",
          sourceKey: "blauarbeitMaurer",
        },
        {
          name: "Streifenfundament herstellen",
          low: 150,
          high: 300,
          unit: "pro m³",
          note: "Orientierung für typische Streifenfundamente; Erdarbeiten und schwierige Bodenverhältnisse können zusätzlich anfallen",
          sourceKey: "cleanInvoiceMaurer",
        },
        {
          name: "Energetische Bodenplatte mit Dämmung",
          low: 130,
          high: 180,
          unit: "pro m²",
          note: "Richtwert für gedämmte Bodenplatte mit Frostschutz/Frostschürze gemäß Quellenorientierung",
          sourceKey: "cleanInvoiceMaurer",
        },
        {
          name: "Mauer abreißen & Bauschutt abfahren",
          low: 20,
          high: 50,
          unit: "pro m²",
          note: "Standard-Wandabbruch; tragende Wände benötigen Statik und können deutlich teurer werden",
          sourceKey: "cleanInvoiceMaurer",
        },
        {
          name: "Mauerwerksfugen erneuern Standard",
          low: 35,
          high: 50,
          unit: "pro m²",
          note: "Richtwert für Standardfugen; Gerüst und umfangreiche Materialarbeiten können separat anfallen",
          sourceKey: "myhammerMauerfugen",
        },
        {
          name: "Klinkerfugen erneuern",
          low: 45,
          high: 80,
          unit: "pro m²",
          note: "Richtwert für die Fugensanierung an Klinkermauerwerk",
          sourceKey: "myhammerMauerfugen",
        },
      ],
    };
  }

  return catalogService;
});

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
