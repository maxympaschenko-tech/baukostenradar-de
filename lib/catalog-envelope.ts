import {
  priceSources as energyPriceSources,
  regions,
  renovationModel,
  services as energyServices,
  type PriceItem as EnergyPriceItem,
  type Service as EnergyService,
} from "./catalog-energy";

export const priceSources = {
  ...energyPriceSources,
  blauarbeitKellersanierung2026: {
    name: "Blauarbeit - Kellersanierung Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/kellersanierung",
    checkedAt: "29.08.2026",
  },
  myhammerKellersanierung2026: {
    name: "MyHammer - Kellersanierung Kosten 2026",
    url: "https://www.my-hammer.de/bauen-renovieren/preisradar/was-kostet-keller-sanieren",
    checkedAt: "29.08.2026",
  },
} as const;

type EnvelopeSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<EnergyPriceItem, "sourceKey"> & { sourceKey: EnvelopeSourceKey };
export type Service = Omit<EnergyService, "priceItems"> & { priceItems: PriceItem[] };

export const services: Service[] = energyServices.map((service) => {
  const energyService = service as unknown as Service;

  if (service.slug === "kellerabdichtung") {
    return {
      ...energyService,
      description: "Aktuelle Richtwerte 2026 für Kellerabdichtung außen und innen, Horizontalsperren, Drainage, Perimeterdämmung, Schimmelbeseitigung, Kellerboden und typische Kellersanierung in Deutschland.",
      priceItems: [
        ...energyService.priceItems,
        {
          name: "Keller außen komplett abdichten Einfamilienhaus",
          low: 15000,
          high: 30000,
          unit: "pro Haus",
          note: "Typischer Gesamtbereich bei einem durchschnittlichen Einfamilienhaus; Zugänglichkeit und Aushub bestimmen den Preis stark",
          sourceKey: "blauarbeitKellerabdichtung",
        },
        {
          name: "Perimeterdämmung bei Kellerabdichtung",
          low: 50,
          high: 100,
          unit: "pro m² Kellerwand",
          note: "Ergänzende Dämmplatten auf der freigelegten Außenwand; Abdichtung und Aushub separat kalkulieren",
          sourceKey: "blauarbeitKellerabdichtung",
        },
        {
          name: "Ringdrainage am Keller",
          low: 20,
          high: 60,
          unit: "pro lfd. Meter",
          note: "Ergänzende Entwässerung rund ums Fundament; Boden, Tiefe und Anschlussmöglichkeiten beeinflussen den Aufwand",
          sourceKey: "blauarbeitKellerabdichtung",
        },
        {
          name: "Horizontalsperre per Injektionsverfahren",
          low: 80,
          high: 200,
          unit: "pro lfd. Meter",
          note: "Gegen kapillar aufsteigende Feuchtigkeit im Mauerwerk",
          sourceKey: "blauarbeitKellersanierung2026",
        },
        {
          name: "Horizontalsperre hochwertige Injektion",
          low: 250,
          high: 550,
          unit: "pro lfd. Meter",
          note: "Höherpreisige Verfahren bei anspruchsvollem Mauerwerk oder stärkerer Durchfeuchtung",
          sourceKey: "myhammerKellersanierung2026",
        },
        {
          name: "Sanierputz bei feuchter Kellerwand",
          low: 50,
          high: 80,
          unit: "pro m²",
          note: "Innenmaßnahme zur Regulierung feuchtebelasteter Wandoberflächen",
          sourceKey: "myhammerKellersanierung2026",
        },
        {
          name: "Kellerboden mit Sperrschicht und Estrich",
          low: 40,
          high: 100,
          unit: "pro m²",
          sourceKey: "blauarbeitKellersanierung2026",
        },
        {
          name: "Kellerwand von innen dämmen",
          low: 50,
          high: 120,
          unit: "pro m²",
          note: "Zusatzmaßnahme nach geklärter Feuchteursache; bauphysikalische Planung ist wichtig",
          sourceKey: "blauarbeitKellersanierung2026",
        },
        {
          name: "Schimmel im Keller fachgerecht beseitigen",
          low: 50,
          high: 150,
          unit: "pro m² Wandfläche",
          note: "Richtwert für Sanierung betroffener Flächen; Ursache der Feuchtigkeit muss separat behoben werden",
          sourceKey: "blauarbeitKellersanierung2026",
        },
        {
          name: "Geschädigtes Kellermauerwerk austauschen",
          low: 200,
          high: 400,
          unit: "pro m²",
          note: "Bei stark geschädigtem Mauerwerk; Statik und Zugänglichkeit können den Aufwand erhöhen",
          sourceKey: "blauarbeitKellersanierung2026",
        },
        {
          name: "Keller trockenlegen mit Elektroosmose",
          low: 2500,
          high: 5000,
          unit: "pro Projekt",
          note: "Alternatives Trockenlegungsverfahren; Eignung hängt von Schadensbild und Baukonstruktion ab",
          sourceKey: "myhammerKellersanierung2026",
        },
        {
          name: "Einfache Feuchtigkeitsbehandlung Keller",
          low: 2500,
          high: 7500,
          unit: "pro Projekt",
          note: "Orientierung für begrenzte Feuchtigkeitsschäden ohne vollständige Außenabdichtung",
          sourceKey: "myhammerKellersanierung2026",
        },
      ],
    };
  }

  return energyService;
});

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
