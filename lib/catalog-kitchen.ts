import {
  priceSources as sanitaerPriceSources,
  regions,
  renovationModel,
  services as sanitaerServices,
  type PriceItem as SanitaerPriceItem,
  type Service as SanitaerService,
} from "./catalog-sanitaer";

export const priceSources = {
  ...sanitaerPriceSources,
  blauarbeitKuechensanierung2026: {
    name: "Blauarbeit - Küchensanierung Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/kueche/was-kostet-eine-kuechensanierung-kosten-beispiele-und-einflussfaktoren",
    checkedAt: "30.08.2026",
  },
  blauarbeitKuechenmontage2026: {
    name: "Blauarbeit - Küche montieren Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/kueche-montieren-kosten",
    checkedAt: "30.08.2026",
  },
  blauarbeitArbeitsplatte2026: {
    name: "Blauarbeit - Arbeitsplatte montieren Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/arbeitsplatte-montieren-kosten",
    checkedAt: "30.08.2026",
  },
  myhammerKuechenmontage2026: {
    name: "MyHammer - Küche einbauen lassen Kosten 2026",
    url: "https://www.my-hammer.de/kueche/preisradar/was-kostet-kueche-einbauen",
    checkedAt: "30.08.2026",
  },
  aroundhomeKueche2026: {
    name: "Aroundhome - Küchen Preise & Kosten 2026",
    url: "https://www.aroundhome.de/kueche/preise-kosten/",
    checkedAt: "30.08.2026",
  },
} as const;

type KitchenSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<SanitaerPriceItem, "sourceKey"> & { sourceKey: KitchenSourceKey };
export type Service = Omit<SanitaerService, "priceItems"> & { priceItems: PriceItem[] };

export const services: Service[] = sanitaerServices.map((service) => {
  const sanitaerService = service as unknown as Service;

  if (service.slug === "kueche") {
    return {
      ...sanitaerService,
      description: "Aktuelle Küchen-Kosten 2026 für Teil- und Komplettsanierung, neue Einbauküchen, Küchenmontage, Demontage, Arbeitsplatten und typische Umbauten in Deutschland.",
      priceItems: [
        ...sanitaerService.priceItems,
        {
          name: "Küchensanierung Teilsanierung",
          low: 5000,
          high: 10000,
          unit: "pro Küche",
          note: "Typischer 2026-Richtwert bei Erneuerung einzelner Elemente wie Fronten, Arbeitsplatte, Spüle oder Armaturen",
          sourceKey: "blauarbeitKuechensanierung2026",
        },
        {
          name: "Küchensanierung komplett",
          low: 10000,
          high: 25000,
          unit: "pro Küche",
          note: "Komplette Sanierung mit neuen Möbeln, Elektrogeräten, angepassten Anschlüssen und Montage",
          sourceKey: "blauarbeitKuechensanierung2026",
        },
        {
          name: "Kleine Küche bis 8 m² sanieren",
          low: 5000,
          high: 12000,
          unit: "pro Küche",
          note: "Orientierungswert nach Küchengröße; Ausstattung und notwendige Anschlussarbeiten bestimmen den Endpreis",
          sourceKey: "blauarbeitKuechensanierung2026",
        },
        {
          name: "Mittlere Küche 8 bis 15 m² sanieren",
          low: 10000,
          high: 20000,
          unit: "pro Küche",
          sourceKey: "blauarbeitKuechensanierung2026",
        },
        {
          name: "Große Küche ab 15 m² sanieren",
          low: 15000,
          high: 25000,
          unit: "pro Küche",
          sourceKey: "blauarbeitKuechensanierung2026",
        },
        {
          name: "Standardküche 3 bis 5 m montieren",
          low: 500,
          high: 1100,
          unit: "pro Küche Arbeit",
          note: "Reine Küchenmontage einer typischen Zeile oder L-Form; Anschlussarbeiten können zusätzlich anfallen",
          sourceKey: "blauarbeitKuechenmontage2026",
        },
        {
          name: "Große Küche mit Kochinsel montieren",
          low: 1000,
          high: 1500,
          unit: "pro Küche Arbeit",
          note: "Montage-Richtwert ohne zusätzliche Elektro- oder Sanitärumbauten",
          sourceKey: "blauarbeitKuechenmontage2026",
        },
        {
          name: "Küchenmontage je laufendem Meter",
          low: 150,
          high: 300,
          unit: "pro lfd. Meter",
          note: "Aktueller Montage-Richtwert 2026; Küchenform, Passleisten und Sonderanpassungen beeinflussen den Preis",
          sourceKey: "myhammerKuechenmontage2026",
        },
        {
          name: "Altküche demontieren und entsorgen",
          low: 150,
          high: 400,
          unit: "pro Küche",
          note: "Typischer Zusatzposten vor der Montage einer neuen Standardküche",
          sourceKey: "blauarbeitKuechenmontage2026",
        },
        {
          name: "Arbeitsplatte gerade bis 3 m montieren",
          low: 150,
          high: 250,
          unit: "pro Arbeitsplatte Arbeit",
          note: "Montage ohne Material; Ausschnitte für Spüle oder Kochfeld werden separat kalkuliert",
          sourceKey: "blauarbeitArbeitsplatte2026",
        },
        {
          name: "Arbeitsplatte L-Küche mit Eckverbindung montieren",
          low: 250,
          high: 400,
          unit: "pro Arbeitsplatte Arbeit",
          sourceKey: "blauarbeitArbeitsplatte2026",
        },
        {
          name: "Ausschnitt für Spüle oder Kochfeld",
          low: 30,
          high: 80,
          unit: "pro Ausschnitt",
          note: "Fräsen, Versiegeln und Anpassen; Anschlussarbeiten nicht enthalten",
          sourceKey: "blauarbeitArbeitsplatte2026",
        },
        {
          name: "Alte Arbeitsplatte demontieren und entsorgen",
          low: 50,
          high: 150,
          unit: "pro Küche",
          sourceKey: "blauarbeitArbeitsplatte2026",
        },
        {
          name: "Naturstein oder Quarzkomposit Arbeitsplatte inkl. Montage",
          low: 300,
          high: 600,
          unit: "pro lfd. Meter",
          note: "Spezialisierte Lieferung und Montage; Materialstärke, Ausschnitte und Kantenbearbeitung beeinflussen den Endpreis",
          sourceKey: "blauarbeitArbeitsplatte2026",
        },
        {
          name: "Einstiegs-Küchenzeile mit Geräten ohne Montage",
          low: 1300,
          high: 3000,
          unit: "pro Küche",
          note: "Marktorientierung für einfache Küchenzeilen; Montage und bauliche Anpassungen separat",
          sourceKey: "aroundhomeKueche2026",
        },
      ],
    };
  }

  return sanitaerService;
});

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
