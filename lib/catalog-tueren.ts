import {
  priceSources as fensterPriceSources,
  regions,
  renovationModel,
  services as fensterServices,
  type PriceItem as FensterPriceItem,
  type Service as FensterService,
} from "./catalog-fenster";

export const priceSources = {
  ...fensterPriceSources,
  aroundhomeHaustuer2026: {
    name: "Aroundhome - Haustür Kosten 2026",
    url: "https://www.aroundhome.de/haustuer/preise-kosten/",
    checkedAt: "31.08.2026",
  },
  myhammerTuerzarge: {
    name: "MyHammer - Türzarge einbauen Kosten",
    url: "https://www.my-hammer.de/fenster-tueren/preisradar/was-kostet-tuerzarge-einbauen",
    checkedAt: "31.08.2026",
  },
  blauarbeitTuerEinbau2026: {
    name: "Blauarbeit - Tür einbauen Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/tuer-einbauen-kosten",
    checkedAt: "31.08.2026",
  },
  blauarbeitSchiebetuerCurrent2026: {
    name: "Blauarbeit - Schiebetür einbauen Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/schiebetuer-einbauen",
    checkedAt: "31.08.2026",
  },
} as const;

type TuerenSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<FensterPriceItem, "sourceKey"> & { sourceKey: TuerenSourceKey };
export type Service = Omit<FensterService, "priceItems"> & { priceItems: PriceItem[] };

const inheritedServices = fensterServices as unknown as Service[];

export const services: Service[] = inheritedServices.map((service) => {
  if (service.slug !== "tueren") return service;

  return {
    ...service,
    description: "Aktuelle Richtwerte 2026 für Innentüren, Türblätter und Zargen, Haustüren nach Material, Montage, Seitenteile und Oberlichter, RC3-, Wärme- und Schallschutz sowie Schiebetüren in Deutschland.",
    priceItems: [
      ...service.priceItems,
      {
        name: "Haustür komplett inklusive Einbau",
        low: 1500,
        high: 8000,
        unit: "pro Haustür",
        note: "Aroundhome nennt 2026 für eine neue Haustür inklusive Einbau je nach Material, Größe, Design und Ausstattung etwa 1.500 bis 8.000 €; hochwertige Sonderausführungen können darüber liegen.",
        sourceKey: "aroundhomeHaustuer2026",
      },
      {
        name: "Kunststoff-Haustür ohne Montage",
        low: 1300,
        high: 3500,
        unit: "pro Haustür",
        note: "Aroundhome-Richtwert für hochwertige einflügelige Kunststoffhaustüren vom Fachpartner; Montage separat.",
        sourceKey: "aroundhomeHaustuer2026",
      },
      {
        name: "Aluminium-Haustür ohne Montage",
        low: 2000,
        high: 6500,
        unit: "pro Haustür",
        note: "Aroundhome-Richtwert 2026 für Aluminium-Haustüren; Ausstattung und Sicherheitsniveau bestimmen den Endpreis, Montage separat.",
        sourceKey: "aroundhomeHaustuer2026",
      },
      {
        name: "Holz-Haustür ohne Montage",
        low: 2500,
        high: 6000,
        unit: "pro Haustür",
        note: "Aroundhome-Richtwert 2026 für Haustüren aus Holz; Holzart und Ausstattung beeinflussen den Preis, Montage separat.",
        sourceKey: "aroundhomeHaustuer2026",
      },
      {
        name: "Holz-Aluminium-Haustür ohne Montage",
        low: 3000,
        high: 7000,
        unit: "pro Haustür",
        note: "Aroundhome-Richtwert 2026 für Holz-Aluminium-Haustüren; Montage separat.",
        sourceKey: "aroundhomeHaustuer2026",
      },
      {
        name: "Haustür fachgerecht einbauen",
        low: 300,
        high: 700,
        unit: "pro Haustür",
        note: "Aroundhome nennt für den fachgerechten Einbau einer neuen Haustür meist etwa 300 bis 700 €; bauliche Anpassungen können zusätzlich anfallen.",
        sourceKey: "aroundhomeHaustuer2026",
      },
      {
        name: "Glaseinsatz für Haustür",
        low: 300,
        high: 1000,
        unit: "pro Ausstattung",
        note: "Aroundhome-Richtwert für Glaseinsätze als Zusatzausstattung; Montage und Türgrundpreis separat.",
        sourceKey: "aroundhomeHaustuer2026",
      },
      {
        name: "Seitenteil oder Oberlicht für Haustür",
        low: 800,
        high: 2000,
        unit: "pro Ausstattung",
        note: "Aroundhome-Richtwert 2026 für Seitenteil beziehungsweise Oberlicht als Zusatz zur Haustür; konkrete Größe und Verglasung beeinflussen den Preis.",
        sourceKey: "aroundhomeHaustuer2026",
      },
      {
        name: "Standardschloss Zylinder und Klinke Haustür",
        low: 100,
        high: 250,
        unit: "pro Ausstattung",
        note: "Aroundhome-Richtwert für normales Schloss, Zylinder und Klinke ohne Montage.",
        sourceKey: "aroundhomeHaustuer2026",
      },
      {
        name: "Sicherheitshaustür RC3 Markenmodell",
        low: 2500,
        high: 4000,
        unit: "pro Haustür",
        note: "Aroundhome nennt Marken-Haustüren mit höherer Sicherheitsklasse RC3 ab etwa 2.500 € und je nach Ausstattung bis etwa 4.000 €; Montage separat prüfen.",
        sourceKey: "aroundhomeHaustuer2026",
      },
      {
        name: "Wärmeschutz-Haustür U-Wert unter 1",
        low: 2500,
        high: 2500,
        unit: "ab pro Haustür",
        note: "Aroundhome nennt für Haustüren mit einem U-Wert unter 1 W/(m²K) Preise ab etwa 2.500 €; Montage kommt hinzu.",
        sourceKey: "aroundhomeHaustuer2026",
      },
      {
        name: "Schallschutztür Stahl hohe Schallschutzklasse",
        low: 3000,
        high: 3000,
        unit: "ca. pro Tür",
        note: "Aroundhome nennt für massive mehrlagige Stahltüren mit hoher Schallschutzklasse eine Orientierung um 3.000 €.",
        sourceKey: "aroundhomeHaustuer2026",
      },
      {
        name: "Türzarge einbauen komplett allgemein",
        low: 180,
        high: 600,
        unit: "pro Zarge",
        note: "MyHammer nennt je nach Material, Wandstärke und Einsatzbereich insgesamt etwa 180 bis 600 € für den Türzargeneinbau.",
        sourceKey: "myhammerTuerzarge",
      },
      {
        name: "Holzzarge Innentür 10 cm",
        low: 100,
        high: 180,
        unit: "pro Zarge ohne Einbau",
        note: "MyHammer-Materialrichtwert für eine Holzzarge an einer Innentür bei etwa 10 cm Zargenbreite.",
        sourceKey: "myhammerTuerzarge",
      },
      {
        name: "Stahlzarge Innentür 10 cm",
        low: 65,
        high: 75,
        unit: "pro Zarge ohne Einbau",
        note: "MyHammer-Materialrichtwert für eine Stahlzarge an einer Innentür bei etwa 10 cm Zargenbreite.",
        sourceKey: "myhammerTuerzarge",
      },
      {
        name: "Holzzarge Eingangstür 20,5 cm",
        low: 150,
        high: 250,
        unit: "pro Zarge ohne Einbau",
        note: "MyHammer-Materialrichtwert für eine Holzzarge an einer Eingangstür bei etwa 20,5 cm Zargenbreite.",
        sourceKey: "myhammerTuerzarge",
      },
      {
        name: "Stahlzarge Eingangstür 28,5 cm",
        low: 90,
        high: 100,
        unit: "pro Zarge ohne Einbau",
        note: "MyHammer-Materialrichtwert für eine Stahlzarge an einer Eingangstür bei etwa 28,5 cm Zargenbreite.",
        sourceKey: "myhammerTuerzarge",
      },
      {
        name: "Kleinmaterial und Bauschaum für Türzarge",
        low: 30,
        high: 50,
        unit: "pro Zarge",
        note: "MyHammer nennt für Bauschaum und Kleinmaterial beim Zargeneinbau etwa 30 bis 50 €.",
        sourceKey: "myhammerTuerzarge",
      },
      {
        name: "Zarge Innentür montieren",
        low: 50,
        high: 150,
        unit: "pro Zarge",
        note: "MyHammer-Richtwert für die reine Montage einer Innentürzarge.",
        sourceKey: "myhammerTuerzarge",
      },
      {
        name: "Zarge Eingangstür montieren",
        low: 200,
        high: 350,
        unit: "pro Zarge",
        note: "MyHammer nennt für die fachgerechte Montage einer Zarge an einer Eingangstür etwa 200 bis 350 €.",
        sourceKey: "myhammerTuerzarge",
      },
      {
        name: "Zimmertür Standardmaß reine Montage",
        low: 150,
        high: 350,
        unit: "pro Tür",
        note: "Blauarbeit nennt 2026 für die Montage einer neuen Zimmertür samt Zarge in Standardgröße etwa 150 bis 350 €.",
        sourceKey: "blauarbeitTuerEinbau2026",
      },
      {
        name: "Zimmertür inklusive Türelement und Einbau",
        low: 250,
        high: 800,
        unit: "pro Tür",
        note: "Blauarbeit nennt 2026 für eine Zimmertür inklusive Türelement und Einbau meist etwa 250 bis 800 €.",
        sourceKey: "blauarbeitTuerEinbau2026",
      },
      {
        name: "Türblatt tauschen Montage",
        low: 80,
        high: 150,
        unit: "pro Türblatt",
        note: "Blauarbeit-Richtwert 2026 für den reinen Türblattausch bei weiterverwendeter Zarge; Türblatt separat.",
        sourceKey: "blauarbeitTuerEinbau2026",
      },
      {
        name: "Türblatt Standardausführung",
        low: 50,
        high: 50,
        unit: "ab pro Türblatt",
        note: "Blauarbeit nennt einfache Türblätter mit Standardoberfläche ab etwa 50 €.",
        sourceKey: "blauarbeitTuerEinbau2026",
      },
      {
        name: "CPL-Türblatt",
        low: 80,
        high: 200,
        unit: "pro Türblatt",
        note: "Blauarbeit-Richtwert 2026 für robuste CPL-Oberflächen.",
        sourceKey: "blauarbeitTuerEinbau2026",
      },
      {
        name: "Echtholzfurnier-Türblatt",
        low: 150,
        high: 400,
        unit: "pro Türblatt",
        note: "Blauarbeit-Richtwert 2026 für echtholzfurnierte Türblätter.",
        sourceKey: "blauarbeitTuerEinbau2026",
      },
      {
        name: "Schallschutztür oder Brandschutztür innen",
        low: 500,
        high: 1500,
        unit: "pro Tür",
        note: "Blauarbeit nennt 2026 für Schallschutz- oder Brandschutztüren etwa 500 bis 1.500 €.",
        sourceKey: "blauarbeitTuerEinbau2026",
      },
      {
        name: "Tischler Türeinbau Stundensatz",
        low: 50,
        high: 80,
        unit: "pro Stunde",
        note: "Blauarbeit nennt für Tischler beim Türeinbau typische Stundensätze von etwa 50 bis 80 €.",
        sourceKey: "blauarbeitTuerEinbau2026",
      },
      {
        name: "Alte Innentür demontieren und entsorgen",
        low: 20,
        high: 50,
        unit: "pro Türelement",
        note: "Blauarbeit nennt 2026 für Demontage und Entsorgung einer alten Innentür etwa 20 bis 50 € pro Element.",
        sourceKey: "blauarbeitTuerEinbau2026",
      },
      {
        name: "Fünf Zimmertüren inklusive Elemente komplett",
        low: 1500,
        high: 3500,
        unit: "pro 5 Türen",
        note: "Blauarbeit nennt für fünf Standard-Zimmertüren mit Zarge je nach Qualität insgesamt etwa 1.500 bis 3.500 €.",
        sourceKey: "blauarbeitTuerEinbau2026",
      },
      {
        name: "Fünf Zimmertüren Montage",
        low: 600,
        high: 1250,
        unit: "pro 5 Türen",
        note: "Blauarbeit nennt für die Montage von fünf Standardtüren mit Zarge etwa 600 bis 1.250 €, ohne Türelemente.",
        sourceKey: "blauarbeitTuerEinbau2026",
      },
      {
        name: "Schiebetür einfach vom Fachbetrieb einbauen",
        low: 200,
        high: 200,
        unit: "ab pro Tür",
        note: "Blauarbeit nennt 2026 für einfache Schiebetürmodelle einen fachgerechten Einbau ab etwa 200 €.",
        sourceKey: "blauarbeitSchiebetuerCurrent2026",
      },
      {
        name: "Schiebetür Montage Standardbeispiel",
        low: 280,
        high: 280,
        unit: "ca. pro Tür",
        note: "Blauarbeit-Kostenbeispiel 2026 für die Montage einer sandgestrahlten Glas-Schiebetür.",
        sourceKey: "blauarbeitSchiebetuerCurrent2026",
      },
      {
        name: "Schiebetür sandgestrahlte Glastür Material",
        low: 340,
        high: 340,
        unit: "ca. pro Türblatt",
        note: "Materialposition aus dem Blauarbeit-Kostenbeispiel 2026 für eine sandgestrahlte Glas-Schiebetür.",
        sourceKey: "blauarbeitSchiebetuerCurrent2026",
      },
      {
        name: "Schiebetür Anfahrt Standardbeispiel",
        low: 55,
        high: 55,
        unit: "ca. pro Auftrag",
        note: "Anfahrtsposten aus dem Blauarbeit-Kostenbeispiel 2026 für den Einbau einer Schiebetür.",
        sourceKey: "blauarbeitSchiebetuerCurrent2026",
      },
    ],
  };
});

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
