import {
  priceSources as commercialPriceSources,
  regions,
  renovationModel,
  services as commercialServices,
  type PriceItem as CommercialPriceItem,
  type Service as CommercialService,
} from "./catalog-commercial";

export const priceSources = {
  ...commercialPriceSources,
  handwerkermatchElektriker: {
    name: "HandwerkerMatch - Elektriker Kosten 2026",
    url: "https://www.handwerkermatch.de/ratgeber/elektriker-kosten",
    checkedAt: "29.08.2026",
  },
  aroundhomeMaler: {
    name: "Aroundhome - Maler Preise & Kosten 2026",
    url: "https://www.aroundhome.de/maler/preise-kosten/",
    checkedAt: "29.08.2026",
  },
  blauarbeitMaler: {
    name: "Blauarbeit - Maler Stundenlohn 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/maler-stundenlohn",
    checkedAt: "29.08.2026",
  },
  blauarbeitFliesen: {
    name: "Blauarbeit - Fliesen verlegen Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/fliesenlegen",
    checkedAt: "29.08.2026",
  },
} as const;

type TradeSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<CommercialPriceItem, "sourceKey"> & { sourceKey: TradeSourceKey };
export type Service = Omit<CommercialService, "priceItems"> & { priceItems: PriceItem[] };

export const services: Service[] = commercialServices.map((service) => {
  const commercialService = service as unknown as Service;

  if (service.slug === "elektriker") {
    return {
      ...commercialService,
      description: "Aktuelle Richtwerte für Elektriker-Stundensätze, Steckdosen, FI-Schutz, Sicherungskästen, Wallbox, Smart Home und komplette Elektroinstallationen in Deutschland.",
      priceItems: [
        ...commercialService.priceItems,
        {
          name: "Elektriker Anfahrt",
          low: 30,
          high: 70,
          unit: "pro Einsatz",
          note: "Typische zusätzliche Anfahrtskosten; Entfernung und Betrieb können den Betrag verändern",
          sourceKey: "handwerkermatchElektriker",
        },
        {
          name: "FI-Schutzschalter nachrüsten",
          low: 150,
          high: 300,
          unit: "pro Stück",
          sourceKey: "handwerkermatchElektriker",
        },
        {
          name: "Elektroinstallation Neubau",
          low: 80,
          high: 150,
          unit: "pro m² Wohnfläche",
          note: "Flächenbezogener Richtwert für eine komplette Neuinstallation im Neubau",
          sourceKey: "handwerkermatchElektriker",
        },
        {
          name: "Smart Home Einrichtung",
          low: 500,
          high: 3000,
          unit: "pro Projekt",
          sourceKey: "elektriker",
        },
        {
          name: "E-Auto Wallbox installieren",
          low: 1200,
          high: 2500,
          unit: "pro Projekt",
          note: "Richtwert aus der bestehenden Elektriker-Quelle für typische Installation",
          sourceKey: "elektriker",
        },
      ],
    };
  }

  if (service.slug === "maler") {
    return {
      ...commercialService,
      description: "Aktuelle Richtwerte für Maler-Stundensätze, Innenanstrich, Tapezier- und Vorarbeiten sowie Lackierarbeiten an Türen und Fensterrahmen in Deutschland.",
      priceItems: [
        ...commercialService.priceItems,
        {
          name: "Maler Stundensatz",
          low: 40,
          high: 65,
          unit: "pro Stunde",
          note: "Üblicher betrieblicher Verrechnungssatz 2026; regional und nach Spezialisierung unterschiedlich",
          sourceKey: "blauarbeitMaler",
        },
        {
          name: "Alte Tapeten entfernen",
          low: 5,
          high: 20,
          unit: "pro m²",
          note: "Vorarbeit vor neuem Wandaufbau; mehrere Tapetenschichten können den Aufwand erhöhen",
          sourceKey: "aroundhomeMaler",
        },
        {
          name: "Vlies- oder Mustertapete tapezieren",
          low: 22,
          high: 50,
          unit: "pro m²",
          note: "Richtwert für 2026; Material, Untergrund und Musterwiederholung beeinflussen den Endpreis",
          sourceKey: "aroundhomeMaler",
        },
        {
          name: "Innentür inkl. Zarge lackieren",
          low: 170,
          high: 250,
          unit: "pro Tür",
          note: "Je nach Zustand, Vorarbeiten und Lackaufbau",
          sourceKey: "aroundhomeMaler",
        },
        {
          name: "Fensterrahmen lackieren",
          low: 70,
          high: 150,
          unit: "pro Fensterrahmen",
          note: "Faustwert für Schleifen, Vorbereiten und Lackieren; alte Lackschichten oder Schäden erhöhen den Aufwand",
          sourceKey: "blauarbeitMaler",
        },
      ],
    };
  }

  if (service.slug === "fliesenleger") {
    return {
      ...commercialService,
      description: "Aktuelle Richtwerte für Fliesenleger-Stundensätze, Überfliesen, Untergrundvorbereitung, Silikonfugen, Sockelleisten und typische Fliesenarbeiten in Deutschland.",
      priceItems: [
        ...commercialService.priceItems,
        {
          name: "Fliese auf Fliese verlegen",
          low: 50,
          high: 80,
          unit: "pro m²",
          note: "Überfliesen auf tragfähigem Altbelag; Aufbauhöhe und Zustand des vorhandenen Belags beeinflussen den Aufwand",
          sourceKey: "blauarbeitFliesen",
        },
        {
          name: "Untergrund ausgleichen",
          low: 10,
          high: 30,
          unit: "pro m²",
          note: "Zusätzliche Vorarbeit bei unebenen Böden oder Wänden vor der Verlegung",
          sourceKey: "blauarbeitFliesen",
        },
        {
          name: "Silikonfugen ziehen",
          low: 3,
          high: 8,
          unit: "pro lfd. Meter",
          note: "Richtwert für Dehnungsfugen an Wandanschlüssen und Ecken",
          sourceKey: "blauarbeitFliesen",
        },
        {
          name: "Fliesen-Sockelleisten anbringen",
          low: 5,
          high: 10,
          unit: "pro lfd. Meter",
          note: "Arbeitsrichtwert je nach Material, Zuschnitt und Raumgeometrie",
          sourceKey: "blauarbeitFliesen",
        },
        {
          name: "Fliesenleger Stundensatz",
          low: 45,
          high: 70,
          unit: "pro Stunde",
          note: "Typischer Richtwert 2026; viele Fliesenarbeiten werden dennoch nach Quadratmetern kalkuliert",
          sourceKey: "blauarbeitFliesen",
        },
      ],
    };
  }

  return commercialService;
});

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
