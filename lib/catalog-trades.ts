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
  aroundhomeBoden: {
    name: "Aroundhome - Boden verlegen Preise & Kosten",
    url: "https://www.aroundhome.de/bodenverlegung/preise-kosten/",
    checkedAt: "29.08.2026",
  },
  aroundhomeVinyl: {
    name: "Aroundhome - Vinylboden verlegen Kosten",
    url: "https://www.aroundhome.de/bodenverlegung/vinyl-verlegen-kosten/",
    checkedAt: "29.08.2026",
  },
  blauarbeitTrockenbau: {
    name: "Blauarbeit - Trockenbau Preise 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/trockenbau-preise",
    checkedAt: "29.08.2026",
  },
  aroundhomeTrockenbau: {
    name: "Aroundhome - Trockenbau Kosten 2026",
    url: "https://www.aroundhome.de/trockenbau-innenausbau/preise-kosten/",
    checkedAt: "29.08.2026",
  },
  auftragsglueckSanitaer: {
    name: "AuftragsGlück - Sanitärinstallateur Kosten 2026",
    url: "https://auftragsglueck.de/ratgeber/sanitaer-kosten/",
    checkedAt: "29.08.2026",
  },
  aroundhomeSanitaer: {
    name: "Aroundhome - Badsanierung Preise & Kosten 2026",
    url: "https://www.aroundhome.de/badezimmer/preise-kosten/",
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

  if (service.slug === "bodenleger") {
    return {
      ...commercialService,
      description: "Aktuelle Richtwerte für Bodenleger-Stundensätze, Vinyl, Laminat, Parkett, Untergrundvorbereitung und das Entfernen alter Bodenbeläge in Deutschland.",
      priceItems: [
        ...commercialService.priceItems,
        {
          name: "Bodenleger Stundensatz",
          low: 40,
          high: 60,
          unit: "pro Stunde",
          note: "Typischer Handwerker-Richtwert; Region, Auftragsgröße und Spezialisierung beeinflussen den Verrechnungssatz",
          sourceKey: "aroundhomeBoden",
        },
        {
          name: "Klick-Vinyl verlegen",
          low: 12,
          high: 20,
          unit: "pro m² Arbeit",
          note: "Reine Verlegearbeit ohne Material; Untergrundvorbereitung und Sockelleisten separat",
          sourceKey: "aroundhomeVinyl",
        },
        {
          name: "Klebe-Vinyl verlegen",
          low: 10,
          high: 30,
          unit: "pro m² Arbeit",
          note: "Reine Verlegearbeit; Muster, Untergrund und Zuschnitte können den Aufwand erhöhen",
          sourceKey: "aroundhomeVinyl",
        },
        {
          name: "PVC / Laminat verlegen",
          low: 10,
          high: 30,
          unit: "pro m² Arbeit",
          sourceKey: "aroundhomeBoden",
        },
        {
          name: "Mehrschichtparkett schwimmend verlegen",
          low: 10,
          high: 20,
          unit: "pro m² Arbeit",
          note: "Richtwert für schwimmende Verlegung; Material und zusätzliche Vorarbeiten separat",
          sourceKey: "aroundhomeBoden",
        },
        {
          name: "Mehrschichtparkett vollflächig verklebt",
          low: 15,
          high: 35,
          unit: "pro m² Arbeit",
          note: "Richtwert für vollflächige Verklebung; Untergrundzustand und Muster beeinflussen den Endpreis",
          sourceKey: "aroundhomeBoden",
        },
        {
          name: "Alten Bodenbelag entfernen & entsorgen",
          low: 5,
          high: 20,
          unit: "pro m²",
          note: "Zusatzleistung vor der Neuverlegung; Aufwand hängt von Belagsart und Verklebung ab",
          sourceKey: "aroundhomeVinyl",
        },
        {
          name: "Untergrund vorbereiten & ausgleichen",
          low: 12,
          high: 50,
          unit: "pro m²",
          note: "Spachteln und Ausgleichen vor der Verlegung; Schäden und Unebenheiten können den Aufwand erhöhen",
          sourceKey: "aroundhomeVinyl",
        },
      ],
    };
  }

  if (service.slug === "trockenbau") {
    const refreshedPriceItems: PriceItem[] = commercialService.priceItems.map((item) => {
      if (item.name === "Verspachtelung Q4") {
        return {
          ...item,
          low: 10,
          high: 20,
          unit: "pro m²",
          note: "Aktualisierter Richtwert 2026 für hochwertige Q4-Spachtelung",
          sourceKey: "blauarbeitTrockenbau",
        };
      }

      if (item.name === "Trockenbauer Stundensatz") {
        return {
          ...item,
          low: 45,
          high: 70,
          unit: "pro Stunde",
          note: "Aktueller 2026-Richtwert; Region, Spezialisierung und Auftragsgröße beeinflussen den Verrechnungssatz",
          sourceKey: "blauarbeitTrockenbau",
        };
      }

      return item;
    });

    return {
      ...commercialService,
      description: "Aktuelle Richtwerte für Trockenbauwände, Ständerwände, abgehängte Decken, Vorsatzschalen, Dachschrägen, Spachtelarbeiten und Trockenbauer-Stundensätze in Deutschland.",
      priceItems: [
        ...refreshedPriceItems,
        {
          name: "Trockenbauwand einfach inkl. Material",
          low: 35,
          high: 75,
          unit: "pro m²",
          note: "Einfache Gipskarton-Trennwand; Türen, Sonderanforderungen und Malerarbeiten können zusätzlich anfallen",
          sourceKey: "aroundhomeTrockenbau",
        },
        {
          name: "Trennwand aus Holz",
          low: 50,
          high: 90,
          unit: "pro m² inkl. Material",
          note: "Richtwert für eine Trockenbau-Trennwand mit Holzkonstruktion",
          sourceKey: "blauarbeitTrockenbau",
        },
        {
          name: "Vorsatzschale",
          low: 30,
          high: 60,
          unit: "pro m² inkl. Material",
          note: "Für das Verkleiden unebener Wände, Leitungsführung sowie zusätzlichen Schall- oder Wärmeschutz",
          sourceKey: "blauarbeitTrockenbau",
        },
        {
          name: "Decke abhängen",
          low: 40,
          high: 90,
          unit: "pro m² inkl. Material",
          note: "Standard-Trockenbaudecke; Dämmung, Spots und Sonderkonstruktionen können den Preis erhöhen",
          sourceKey: "blauarbeitTrockenbau",
        },
        {
          name: "Dachschräge verkleiden",
          low: 40,
          high: 80,
          unit: "pro m² inkl. Material",
          note: "Trockenbau-Verkleidung von Dachschrägen inklusive üblicher Montage",
          sourceKey: "blauarbeitTrockenbau",
        },
        {
          name: "Verspachtelung Q3",
          low: 8,
          high: 15,
          unit: "pro m²",
          note: "Qualitätsstufe Q3 für erhöhte optische Anforderungen",
          sourceKey: "blauarbeitTrockenbau",
        },
        {
          name: "Spanndecke",
          low: 120,
          high: 130,
          unit: "pro m² inkl. Montage",
          note: "Orientierungswert für eine typische Spanndecke; Design-, Licht- und Akustikvarianten können höher liegen",
          sourceKey: "blauarbeitTrockenbau",
        },
      ],
    };
  }

  if (service.slug === "sanitaer") {
    return {
      ...commercialService,
      description: "Aktuelle Richtwerte für Sanitärinstallateur-Stundensätze, Anfahrt, Armaturen, WC, Waschbecken, Dusche, Badewanne, Rohrreinigung und typische Sanitärarbeiten in Deutschland.",
      priceItems: [
        ...commercialService.priceItems,
        {
          name: "Sanitär Anfahrt",
          low: 20,
          high: 50,
          unit: "pro Einsatz",
          note: "Typische Anfahrtskosten je nach Entfernung; Kleinaufträge können zusätzlich mit einer Mindestpauschale berechnet werden",
          sourceKey: "auftragsglueckSanitaer",
        },
        {
          name: "Wasserhahn montieren",
          low: 60,
          high: 100,
          unit: "pro Stück Arbeit",
          note: "Reine Arbeitskosten ohne Armatur; bei schwierigen Anschlüssen kann der Aufwand höher liegen",
          sourceKey: "auftragsglueckSanitaer",
        },
        {
          name: "WC montieren",
          low: 150,
          high: 300,
          unit: "pro Stück Arbeit",
          note: "Reine Montagekosten ohne WC und zusätzliches Vorwandelement",
          sourceKey: "auftragsglueckSanitaer",
        },
        {
          name: "Spülkasten reparieren",
          low: 80,
          high: 150,
          unit: "pro Reparatur Arbeit",
          note: "Arbeitskosten ohne Material; Ersatzteile können zusätzlich anfallen",
          sourceKey: "auftragsglueckSanitaer",
        },
        {
          name: "Waschbecken montieren",
          low: 100,
          high: 200,
          unit: "pro Stück Arbeit",
          note: "Reine Montagekosten ohne Waschbecken, Armatur und Sonderanschlüsse",
          sourceKey: "auftragsglueckSanitaer",
        },
        {
          name: "Dusche einbauen",
          low: 300,
          high: 600,
          unit: "pro Stück Arbeit",
          note: "Arbeitsrichtwert ohne Material für eine typische Duschmontage; Umbauten und Abdichtung können zusätzlich anfallen",
          sourceKey: "auftragsglueckSanitaer",
        },
        {
          name: "Badewanne einbauen",
          low: 400,
          high: 800,
          unit: "pro Stück Arbeit",
          note: "Reine Einbaukosten ohne Wanne, Armatur und aufwendige Verkleidung",
          sourceKey: "auftragsglueckSanitaer",
        },
        {
          name: "Rohrverstopfung beseitigen",
          low: 80,
          high: 250,
          unit: "pro Einsatz",
          note: "Richtwert für reguläre Einsätze; Notdienst, Spezialgeräte oder schwer zugängliche Leitungen können teurer sein",
          sourceKey: "auftragsglueckSanitaer",
        },
        {
          name: "Hänge-WC modern inkl. Montage",
          low: 800,
          high: 1800,
          unit: "pro Stück",
          note: "Komplettpreis-Richtwert 2026; ein neu zu setzendes Vorwandelement oder ein neuer Spülkasten kann den Preis erhöhen",
          sourceKey: "aroundhomeSanitaer",
        },
        {
          name: "Waschtisch-Armatur inkl. Montage",
          low: 250,
          high: 600,
          unit: "pro Stück",
          note: "Inklusive Montage und typischer Kleinteile wie Eckventilen",
          sourceKey: "aroundhomeSanitaer",
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
