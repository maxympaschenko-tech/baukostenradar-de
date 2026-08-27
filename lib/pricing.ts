export type PriceItem = {
  name: string;
  low: number;
  high: number;
  unit: string;
  note?: string;
  sourceKey: keyof typeof priceSources;
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  unit: string;
  icon: string;
  priceItems: PriceItem[];
};

export const priceSources = {
  d24Preisspiegel: {
    name: "D24-Preisspiegel 2026",
    url: "https://dienstleistungen24.de/preisspiegel/",
    checkedAt: "11.08.2026",
  },
  d24Sanierung: {
    name: "Dienstleistungen24 - Sanierung",
    url: "https://dienstleistungen24.de/sanierung/",
    checkedAt: "August 2026",
  },
  d24Fliesen: {
    name: "Dienstleistungen24 - Fliesenleger",
    url: "https://dienstleistungen24.de/fliesenleger/",
    checkedAt: "August 2026",
  },
  d24Boden: {
    name: "Dienstleistungen24 - Bodenleger",
    url: "https://dienstleistungen24.de/bodenleger/",
    checkedAt: "August 2026",
  },
  d24Trockenbau: {
    name: "Dienstleistungen24 - Trockenbau 2026",
    url: "https://dienstleistungen24.de/trockenbau-auftraege/",
    checkedAt: "August 2026",
  },
  d24Fassadendaemmung: {
    name: "Dienstleistungen24 - Fassadendämmung Kosten 2026",
    url: "https://dienstleistungen24.de/fassadendaemmung-kosten/",
    checkedAt: "22.08.2026",
  },
  d24Fassadenbauer: {
    name: "Dienstleistungen24 - Fassadenbauer",
    url: "https://dienstleistungen24.de/fassadenbauer/",
    checkedAt: "August 2026",
  },
  d24Tueren: {
    name: "Dienstleistungen24 - Türen- und Fensterbauer 2026",
    url: "https://dienstleistungen24.de/tueren-fensterbauer/",
    checkedAt: "August 2026",
  },
  d24Estrich: {
    name: "Dienstleistungen24 - Estrichleger 2026",
    url: "https://dienstleistungen24.de/handwerk/estrichleger/",
    checkedAt: "August 2026",
  },
  d24Abriss: {
    name: "Dienstleistungen24 - Abrissunternehmen 2026",
    url: "https://dienstleistungen24.de/abrissunternehmen/",
    checkedAt: "August 2026",
  },
  elektriker: {
    name: "Handwerker Kontakte - Elektriker Kosten 2026",
    url: "https://handwerker-kontakte.de/de/kosten/elektriker",
    checkedAt: "August 2026",
  },
  handwerkerSanitaer: {
    name: "Handwerker Kontakte - Installateur Kosten 2026",
    url: "https://handwerker-kontakte.de/de/kosten/installateur",
    checkedAt: "August 2026",
  },
  handwerkerSanierung: {
    name: "Handwerker Kontakte - Sanierung pro qm 2026",
    url: "https://handwerker-kontakte.de/de/ratgeber/sanierung-pro-qm-kosten-2026",
    checkedAt: "August 2026",
  },
  handwerkerTrockenbau: {
    name: "Handwerker Kontakte - Trockenbau Kosten 2026",
    url: "https://handwerker-kontakte.de/de/kosten/trockenbau",
    checkedAt: "August 2026",
  },
  handwerkerHeizung: {
    name: "Handwerker Kontakte - Heizungsinstallateur Kosten 2026",
    url: "https://handwerker-kontakte.de/de/kosten/heizung",
    checkedAt: "August 2026",
  },
  handwerkerFenster: {
    name: "Handwerker Kontakte - Fenster austauschen Kosten 2026",
    url: "https://handwerker-kontakte.de/de/ratgeber/fenster-austauschen-kosten",
    checkedAt: "August 2026",
  },
  co2Waermepumpe: {
    name: "co2online - Luft-Wasser-Wärmepumpe Kosten",
    url: "https://www.co2online.de/modernisieren-und-bauen/waermepumpe/luft-wasser-waermepumpe-kosten-foerderung/",
    checkedAt: "August 2026",
  },
  verbraucherWaermepumpe: {
    name: "Verbraucherzentrale - Wärmepumpe Kosten & Förderung",
    url: "https://www.verbraucherzentrale.de/wissen/energie/heizen-und-warmwasser/kosten-und-foerderung-womit-muss-ich-bei-einer-waermepumpe-rechnen-113967",
    checkedAt: "August 2026",
  },
  co2Photovoltaik: {
    name: "co2online - Photovoltaik Kosten 2026",
    url: "https://www.co2online.de/modernisieren-und-bauen/photovoltaik/kosten-und-finanzierung/",
    checkedAt: "August 2026",
  },
  energieExpertenPhotovoltaik: {
    name: "Energie-Experten - Photovoltaik Kosten 2026",
    url: "https://www.energie-experten.org/erneuerbare-energien/photovoltaik/photovoltaikanlage/kosten",
    checkedAt: "August 2026",
  },
  energieExpertenSpeicher: {
    name: "Energie-Experten - PV mit Speicher 2026",
    url: "https://www.energie-experten.org/erneuerbare-energien/photovoltaik/photovoltaikanlage/mit-speicher",
    checkedAt: "August 2026",
  },
  obiDachfenster: {
    name: "OBI - Dachfenster nachträglich einbauen 2026",
    url: "https://www.obi.de/magazin/bauen/fenster/dachfenster-einbauen",
    checkedAt: "27.08.2026",
  },
  obiDachfensterAustausch: {
    name: "OBI - Dachfenster austauschen oder erneuern 2026",
    url: "https://www.obi.de/magazin/bauen/fenster/dachfenster-austauschen-oder-erneuern",
    checkedAt: "27.08.2026",
  },
  adacEnergetischeSanierung: {
    name: "ADAC - Energetische Sanierung 2026",
    url: "https://www.adac.de/rund-ums-haus/energie/spartipps/energetische-sanierung/",
    checkedAt: "27.08.2026",
  },
  co2Geschossdecke: {
    name: "co2online - Oberste Geschossdecke dämmen",
    url: "https://www.co2online.de/modernisieren-und-bauen/daemmung/daemmung-der-obersten-geschossdecke/",
    checkedAt: "27.08.2026",
  },
  co2Dachdaemmung: {
    name: "co2online - Dachdämmung Methoden und Kosten",
    url: "https://www.co2online.de/modernisieren-und-bauen/daemmung/dachdaemmung/",
    checkedAt: "27.08.2026",
  },
  co2Perimeterdaemmung: {
    name: "co2online - Perimeterdämmung Kosten",
    url: "https://www.co2online.de/modernisieren-und-bauen/daemmung/perimeterdaemmung/",
    checkedAt: "27.08.2026",
  },
  blauarbeitKellerabdichtung: {
    name: "Blauarbeit - Kellerabdichtung Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/kellerabdichtung-kosten",
    checkedAt: "27.08.2026",
  },
} as const;

export const services: Service[] = [
  {
    slug: "badsanierung",
    title: "Badsanierung Kosten 2026",
    shortTitle: "Badsanierung",
    description: "Aktuelle Richtwerte für komplette Badsanierung, Fliesen, Installation und typische Badprojekte in Deutschland.",
    unit: "Projekt / m²",
    icon: "◫",
    priceItems: [
      { name: "Bad-Sanierung komplett", low: 12000, high: 32000, unit: "pro Bad", sourceKey: "d24Sanierung" },
      { name: "Bad-Neubau / Sanierung", low: 1000, high: 2500, unit: "pro m²", note: "Orientierung für vollständige Badarbeiten", sourceKey: "handwerkerSanierung" },
      { name: "Komplettverfliesung Bad", low: 2500, high: 5500, unit: "pauschal", note: "Typisches Bad, reine Fliesenarbeiten", sourceKey: "d24Fliesen" },
      { name: "Verbundabdichtung Nassbereich", low: 25, high: 45, unit: "pro m²", sourceKey: "d24Fliesen" },
    ],
  },
  {
    slug: "maler",
    title: "Maler Kosten 2026",
    shortTitle: "Malerarbeiten",
    description: "Preise für Wände streichen, Tapezieren, Spachteln und weitere Malerarbeiten in Deutschland vergleichen.",
    unit: "m²",
    icon: "▤",
    priceItems: [
      { name: "Wände streichen", low: 8, high: 20, unit: "pro m² Wandfläche", sourceKey: "d24Preisspiegel" },
      { name: "Tapezieren inkl. Tapete", low: 12, high: 30, unit: "pro m²", sourceKey: "d24Preisspiegel" },
      { name: "Innenputz / Glätten Q3", low: 15, high: 35, unit: "pro m²", sourceKey: "d24Preisspiegel" },
      { name: "Fassade streichen inkl. Vorarbeiten", low: 30, high: 60, unit: "pro m²", sourceKey: "d24Preisspiegel" },
    ],
  },
  {
    slug: "fliesenleger",
    title: "Fliesenleger Kosten 2026",
    shortTitle: "Fliesenleger",
    description: "Aktuelle Richtwerte für Standardfliesen, Großformat, Abdichtung und weitere Fliesenarbeiten.",
    unit: "m²",
    icon: "▦",
    priceItems: [
      { name: "Standard-Fliesen verlegen", low: 45, high: 85, unit: "pro m² Arbeit", sourceKey: "d24Fliesen" },
      { name: "Großformat ab 80 × 80 cm", low: 60, high: 110, unit: "pro m² Arbeit", sourceKey: "d24Fliesen" },
      { name: "Mosaik-Fliesen verlegen", low: 90, high: 180, unit: "pro m² Arbeit", sourceKey: "d24Fliesen" },
      { name: "Naturstein verlegen", low: 100, high: 220, unit: "pro m² Arbeit", sourceKey: "d24Fliesen" },
      { name: "Verbundabdichtung Bad", low: 25, high: 45, unit: "pro m²", sourceKey: "d24Fliesen" },
    ],
  },
  {
    slug: "elektriker",
    title: "Elektriker Kosten 2026",
    shortTitle: "Elektrik",
    description: "Stundensätze und Richtpreise für Steckdosen, Sicherungskasten und komplette Elektroinstallation.",
    unit: "Stunde / Projekt",
    icon: "ϟ",
    priceItems: [
      { name: "Elektriker Stundensatz", low: 50, high: 85, unit: "pro Stunde", sourceKey: "elektriker" },
      { name: "Steckdose installieren", low: 80, high: 150, unit: "pro Stück", sourceKey: "elektriker" },
      { name: "Lichtschalter austauschen", low: 50, high: 100, unit: "pro Stück", sourceKey: "elektriker" },
      { name: "Sicherungskasten erneuern", low: 800, high: 2500, unit: "pauschal", sourceKey: "elektriker" },
      { name: "Komplett-Neuinstallation", low: 8000, high: 15000, unit: "pro Projekt", sourceKey: "elektriker" },
    ],
  },
  {
    slug: "dachsanierung",
    title: "Dachsanierung Kosten 2026",
    shortTitle: "Dachsanierung",
    description: "Richtwerte für Neueindeckung, Dämmung, Dachfenster, Gerüst und typische Dacharbeiten in Deutschland.",
    unit: "m² / Projekt",
    icon: "⌂",
    priceItems: [
      { name: "Neueindeckung inkl. Lattung", low: 120, high: 250, unit: "pro m² Dachfläche", sourceKey: "d24Preisspiegel" },
      { name: "Dachsanierung inkl. Aufsparrendämmung", low: 250, high: 450, unit: "pro m²", sourceKey: "d24Preisspiegel" },
      { name: "Dachfenster nachträglich einbauen", low: 1500, high: 4000, unit: "pro Fenster", note: "Gesamtkosten inklusive Fenster, Einbau und typischen Zusatzarbeiten; aufwendige Projekte können höher liegen", sourceKey: "obiDachfenster" },
      { name: "Dachfenster 1:1 austauschen", low: 1600, high: 3300, unit: "pro Fenster", note: "Orientierung vom manuellen Standard-Austausch bis zu elektrischer Ausführung; Sondergrößen und Zusatzarbeiten können höher liegen", sourceKey: "obiDachfensterAustausch" },
      { name: "Gerüst, ca. 4 Wochen", low: 8, high: 15, unit: "pro m² Gerüstfläche", sourceKey: "d24Preisspiegel" },
      { name: "Dachrinne erneuern, Zink", low: 30, high: 60, unit: "pro lfd. Meter", sourceKey: "d24Preisspiegel" },
    ],
  },
  {
    slug: "bodenleger",
    title: "Bodenleger Kosten 2026",
    shortTitle: "Boden",
    description: "Preise für Vinyl, Parkett, Laminat, Bodensanierung und Aufarbeitung vergleichen.",
    unit: "m²",
    icon: "▥",
    priceItems: [
      { name: "Vinylboden Klick inkl. Material", low: 35, high: 65, unit: "pro m²", sourceKey: "d24Preisspiegel" },
      { name: "Parkett verlegen inkl. Material", low: 70, high: 160, unit: "pro m²", sourceKey: "d24Preisspiegel" },
      { name: "Laminat verlegen", low: 20, high: 45, unit: "pro m²", sourceKey: "d24Boden" },
      { name: "Boden-Sanierung alt raus, neu rein", low: 65, high: 180, unit: "pro m²", sourceKey: "d24Boden" },
      { name: "Parkett abschleifen und ölen", low: 28, high: 55, unit: "pro m²", sourceKey: "d24Boden" },
    ],
  },
  {
    slug: "trockenbau",
    title: "Trockenbau Kosten 2026",
    shortTitle: "Trockenbau",
    description: "Aktuelle Preise für Trockenbauwände, Ständerwände, Gipsfaserplatten und Verspachtelung in Deutschland.",
    unit: "m² / Stunde",
    icon: "▧",
    priceItems: [
      { name: "Trockenbauwand beidseitig beplankt", low: 60, high: 120, unit: "pro m²", sourceKey: "d24Preisspiegel" },
      { name: "Ständerwand einlagig beplankt", low: 64, high: 64, unit: "pro m²", note: "Regionaler Mittelwert", sourceKey: "d24Trockenbau" },
      { name: "Ständerwand zweilagig beplankt", low: 100, high: 137, unit: "pro m²", sourceKey: "d24Trockenbau" },
      { name: "Verspachtelung Q4", low: 94, high: 103, unit: "pro m²", sourceKey: "d24Trockenbau" },
      { name: "Trockenbauer Stundensatz", low: 35, high: 60, unit: "pro Stunde", sourceKey: "handwerkerTrockenbau" },
    ],
  },
  {
    slug: "sanitaer",
    title: "Sanitär Kosten 2026",
    shortTitle: "Sanitär",
    description: "Richtwerte für Sanitärinstallateur, Sanitärobjekte, Rohrleitungen und typische Arbeiten im Badezimmer.",
    unit: "Stunde / Projekt",
    icon: "◉",
    priceItems: [
      { name: "Sanitärinstallateur Stundensatz", low: 60, high: 90, unit: "pro Stunde", sourceKey: "d24Preisspiegel" },
      { name: "Sanitärobjekte & Armaturen für 8-m²-Bad", low: 3500, high: 5500, unit: "pro Bad", sourceKey: "handwerkerSanitaer" },
      { name: "Arbeitszeit Sanitär für 8-m²-Bad", low: 3500, high: 5500, unit: "pro Bad", sourceKey: "handwerkerSanitaer" },
      { name: "Demontage & Entsorgung Altbad", low: 1100, high: 1800, unit: "pro Bad", sourceKey: "handwerkerSanitaer" },
      { name: "Komplette Badsanierung, Mittelklasse", low: 14000, high: 22000, unit: "ca. 8 m²", sourceKey: "handwerkerSanitaer" },
    ],
  },
  {
    slug: "waermepumpe",
    title: "Wärmepumpe Kosten 2026",
    shortTitle: "Wärmepumpe",
    description: "Kosten für Luft-Wasser-Wärmepumpen, Installation und Wartung sowie aktuelle Orientierungswerte vor Förderung.",
    unit: "Anlage / Jahr",
    icon: "♨",
    priceItems: [
      { name: "Luft-Wasser-Wärmepumpe komplett", low: 25000, high: 45000, unit: "pro Anlage vor Förderung", sourceKey: "d24Preisspiegel" },
      { name: "Anschaffung im Beispiel EFH", low: 20400, high: 20400, unit: "pro Anlage", note: "Beispielwert inklusive Speicher und Material", sourceKey: "co2Waermepumpe" },
      { name: "Installation im Beispiel EFH", low: 10500, high: 10500, unit: "pro Anlage", note: "Montage, Elektrik und Inbetriebnahme", sourceKey: "co2Waermepumpe" },
      { name: "Wartung Wärmepumpe", low: 150, high: 300, unit: "pro Jahr", sourceKey: "verbraucherWaermepumpe" },
    ],
  },
  {
    slug: "photovoltaik",
    title: "Photovoltaik Kosten 2026",
    shortTitle: "Photovoltaik",
    description: "Aktuelle Kosten für PV-Anlagen mit 5, 10 und 15 kWp sowie Stromspeicher und Komplettsysteme in Deutschland.",
    unit: "Anlage / kWp",
    icon: "☀",
    priceItems: [
      { name: "PV-Anlage 5 kWp inkl. Installation", low: 8634, high: 8634, unit: "pro Anlage", note: "Startpreis laut Quelle", sourceKey: "energieExpertenPhotovoltaik" },
      { name: "PV-Anlage 10 kWp inkl. Installation", low: 9200, high: 10400, unit: "pro Anlage", sourceKey: "co2Photovoltaik" },
      { name: "PV-Anlage 15 kWp inkl. Installation", low: 15000, high: 21000, unit: "pro Anlage", sourceKey: "co2Photovoltaik" },
      { name: "10 kWp PV + ca. 10 kWh Speicher", low: 17500, high: 20000, unit: "pro Anlage", sourceKey: "energieExpertenSpeicher" },
      { name: "Stromspeicher LFP", low: 400, high: 600, unit: "pro kWh Speicherkapazität", sourceKey: "energieExpertenSpeicher" },
    ],
  },
  {
    slug: "daemmung",
    title: "Dämmung Kosten 2026",
    shortTitle: "Dämmung",
    description: "Preise für Dach-, Fassaden-, Keller-, Kellerdecken-, Flachdach- und Geschossdeckendämmung in Deutschland pro Quadratmeter vergleichen.",
    unit: "m²",
    icon: "▨",
    priceItems: [
      { name: "Dachdämmung Aufsparren", low: 100, high: 180, unit: "pro m² Dachfläche", sourceKey: "handwerkerSanierung" },
      { name: "Dachdämmung Zwischensparren", low: 60, high: 120, unit: "pro m²", sourceKey: "handwerkerSanierung" },
      { name: "Dachdämmung Untersparren", low: 30, high: 80, unit: "pro m²", note: "Dämmmaterial und Anbringen durch Handwerksbetrieb", sourceKey: "co2Dachdaemmung" },
      { name: "Flachdachdämmung Warmdach", low: 100, high: 180, unit: "pro m²", note: "Gesamtkosten für Dämmung laut co2online-Richtwert, 20 cm Dämmstärke", sourceKey: "co2Dachdaemmung" },
      { name: "Flachdachdämmung Kaltdach", low: 90, high: 160, unit: "pro m²", note: "Gesamtkosten für Dämmung laut co2online-Richtwert, 20 cm Dämmstärke", sourceKey: "co2Dachdaemmung" },
      { name: "Fassadendämmung WDVS", low: 100, high: 200, unit: "pro m²", sourceKey: "handwerkerSanierung" },
      { name: "Innendämmung", low: 80, high: 150, unit: "pro m²", sourceKey: "handwerkerSanierung" },
      { name: "Kellerdeckendämmung inkl. Montage", low: 40, high: 100, unit: "pro m²", note: "Preisbeispiel inklusive Montage; abhängig von Dämmstoff und Ausführung", sourceKey: "adacEnergetischeSanierung" },
      { name: "Perimeterdämmung Kellerwand", low: 55, high: 90, unit: "pro m²", note: "Dämmung ohne Erdarbeiten; im Bestand kommen Freilegung und Aushub hinzu", sourceKey: "co2Perimeterdaemmung" },
      { name: "Oberste Geschossdecke dämmen, nicht begehbar", low: 20, high: 35, unit: "pro m²", sourceKey: "co2Geschossdecke" },
      { name: "Oberste Geschossdecke dämmen, begehbar", low: 40, high: 80, unit: "pro m²", sourceKey: "co2Geschossdecke" },
      { name: "Einblasdämmung oberste Geschossdecke", low: 25, high: 50, unit: "pro m²", note: "Orientierung für Holzbalkendecken", sourceKey: "co2Geschossdecke" },
    ],
  },
  {
    slug: "kellerabdichtung",
    title: "Kellerabdichtung Kosten 2026",
    shortTitle: "Kellerabdichtung",
    description: "Richtwerte für Kellerabdichtung außen und innen im Bestand, inklusive typischer Unterschiede bei Erdarbeiten und Zugänglichkeit.",
    unit: "m²",
    icon: "▥",
    priceItems: [
      { name: "Kellerabdichtung außen inkl. Aushub", low: 300, high: 600, unit: "pro m² Wandfläche", note: "Richtwert für Außenabdichtung; Erdarbeiten und Freilegung bestimmen einen großen Teil des Gesamtpreises", sourceKey: "blauarbeitKellerabdichtung" },
      { name: "Kellerabdichtung innen", low: 80, high: 200, unit: "pro m² Wandfläche", note: "Günstigere Alternative, wenn eine Außenabdichtung nicht möglich oder nicht sinnvoll ist", sourceKey: "blauarbeitKellerabdichtung" },
    ],
  },
  {
    slug: "fenster",
    title: "Fenster Kosten 2026",
    shortTitle: "Fenster",
    description: "Aktuelle Richtwerte für neue Fenster mit Zwei- oder Dreifachverglasung und professionelle Montage in Deutschland.",
    unit: "Fenster",
    icon: "▣",
    priceItems: [
      { name: "Fenster mit 2-fach Verglasung", low: 400, high: 700, unit: "pro Fenster", note: "Standardgröße ca. 1,3 × 1,3 m, ohne Einbau", sourceKey: "handwerkerFenster" },
      { name: "Fenster mit 3-fach Verglasung", low: 550, high: 900, unit: "pro Fenster", note: "Standardgröße ca. 1,3 × 1,3 m, ohne Einbau", sourceKey: "handwerkerFenster" },
      { name: "Fenstereinbau", low: 150, high: 300, unit: "pro Fenster", sourceKey: "handwerkerFenster" },
    ],
  },
  {
    slug: "heizung",
    title: "Heizung Kosten 2026",
    shortTitle: "Heizung",
    description: "Stundensätze und Richtpreise für Heizungsinstallateur, Heizkörper, Fußbodenheizung, Wartung und Heizungstausch.",
    unit: "Stunde / Projekt",
    icon: "♨",
    priceItems: [
      { name: "Heizungsinstallateur Stundensatz", low: 55, high: 90, unit: "pro Stunde", sourceKey: "handwerkerHeizung" },
      { name: "Gasheizung austauschen", low: 6000, high: 12000, unit: "pauschal", sourceKey: "handwerkerHeizung" },
      { name: "Fußbodenheizung nachrüsten", low: 50, high: 100, unit: "pro m²", sourceKey: "handwerkerHeizung" },
      { name: "Heizkörper montieren", low: 200, high: 500, unit: "pro Stück", sourceKey: "handwerkerHeizung" },
      { name: "Heizungswartung", low: 100, high: 200, unit: "pro Wartung", sourceKey: "handwerkerHeizung" },
      { name: "Thermostat installieren", low: 50, high: 150, unit: "pro Stück", sourceKey: "handwerkerHeizung" },
    ],
  },
  {
    slug: "fassade",
    title: "Fassade Kosten 2026",
    shortTitle: "Fassade",
    description: "Kosten für Fassadenanstrich, Putz, Reparatur, Verkleidung und Fassadenbauer in Deutschland vergleichen.",
    unit: "m² / Stunde",
    icon: "▤",
    priceItems: [
      { name: "Putz-Fassade neu", low: 45, high: 120, unit: "pro m² inkl. Material", sourceKey: "d24Fassadenbauer" },
      { name: "Fassaden-Sanierung bei Rissen", low: 32, high: 85, unit: "pro m²", sourceKey: "d24Fassadenbauer" },
      { name: "Klinker-Verblendung", low: 120, high: 280, unit: "pro m²", sourceKey: "d24Fassadenbauer" },
      { name: "Vorgehängte hinterlüftete Fassade", low: 250, high: 350, unit: "pro m²", note: "Dämmung und Montage", sourceKey: "d24Fassadendaemmung" },
      { name: "Fassadenbauer Stundensatz", low: 55, high: 95, unit: "pro Stunde", sourceKey: "d24Fassadenbauer" },
      { name: "Fassade streichen inkl. Vorarbeiten", low: 30, high: 60, unit: "pro m²", sourceKey: "d24Preisspiegel" },
    ],
  },
  {
    slug: "garten",
    title: "Garten & Außenanlagen Kosten 2026",
    shortTitle: "Garten & Außenanlagen",
    description: "Aktuelle Richtwerte für Pflasterarbeiten, Zäune, Rollrasen, Gartenpflege und Baumfällung in Deutschland.",
    unit: "m² / Meter / Stunde",
    icon: "✦",
    priceItems: [
      { name: "Terrasse pflastern inkl. Unterbau", low: 80, high: 150, unit: "pro m²", sourceKey: "d24Preisspiegel" },
      { name: "Einfahrt pflastern", low: 90, high: 180, unit: "pro m²", sourceKey: "d24Preisspiegel" },
      { name: "Doppelstabmattenzaun inkl. Montage", low: 60, high: 120, unit: "pro lfd. Meter", sourceKey: "d24Preisspiegel" },
      { name: "Rollrasen inkl. Vorbereitung", low: 10, high: 20, unit: "pro m²", sourceKey: "d24Preisspiegel" },
      { name: "Heckenschnitt", low: 3, high: 8, unit: "pro lfd. Meter", sourceKey: "d24Preisspiegel" },
      { name: "Baumfällung mittelgroß inkl. Entsorgung", low: 400, high: 1500, unit: "pro Baum", sourceKey: "d24Preisspiegel" },
      { name: "Gartenpflege", low: 35, high: 60, unit: "pro Stunde", sourceKey: "d24Preisspiegel" },
    ],
  },
  {
    slug: "tueren",
    title: "Türen Kosten 2026",
    shortTitle: "Türen",
    description: "Richtpreise für Innentüren, Haustüren und Montage sowie typische Stundensätze für Türen- und Fensterbauer in Deutschland.",
    unit: "Tür / Stunde",
    icon: "▯",
    priceItems: [
      { name: "Innentür mit Zarge inkl. Montage", low: 320, high: 950, unit: "pro Tür", sourceKey: "d24Tueren" },
      { name: "Haustür Kunststoff inkl. Montage", low: 1500, high: 3500, unit: "pro Tür", sourceKey: "d24Tueren" },
      { name: "Haustür Holz/Alu RC2 inkl. Montage", low: 3500, high: 8500, unit: "pro Tür", note: "Sicherheitsausführung RC2", sourceKey: "d24Tueren" },
      { name: "Türen- und Fensterbauer Stundensatz", low: 55, high: 95, unit: "pro Stunde", sourceKey: "d24Tueren" },
    ],
  },
  {
    slug: "estrich",
    title: "Estrich Kosten 2026",
    shortTitle: "Estrich",
    description: "Aktuelle Richtwerte für Zementestrich, Fließestrich, Trockenestrich, Schnellestrich und Estrich-Sanierung in Deutschland.",
    unit: "m² / Meter",
    icon: "▰",
    priceItems: [
      { name: "Zementestrich verlegen", low: 30, high: 55, unit: "pro m² inkl. Material", sourceKey: "d24Estrich" },
      { name: "Fließestrich verlegen", low: 40, high: 70, unit: "pro m² inkl. Material", sourceKey: "d24Estrich" },
      { name: "Trockenestrich verlegen", low: 45, high: 80, unit: "pro m² inkl. Material", sourceKey: "d24Estrich" },
      { name: "Schnellestrich", low: 60, high: 110, unit: "pro m² inkl. Material", note: "Belegreife typischerweise 1-3 Tage laut Quelle", sourceKey: "d24Estrich" },
      { name: "Bodenausgleich 5-20 mm", low: 18, high: 38, unit: "pro m² inkl. Material", sourceKey: "d24Estrich" },
      { name: "Estrich-Rissreparatur", low: 35, high: 85, unit: "pro lfd. Meter", note: "Quelle weist zusätzliches Material aus", sourceKey: "d24Estrich" },
    ],
  },
  {
    slug: "abriss-entsorgung",
    title: "Abriss & Entsorgung Kosten 2026",
    shortTitle: "Abriss & Entsorgung",
    description: "Orientierungswerte für Hausabriss, Innenabbruch, Industrieabbruch und Bauschuttcontainer in Deutschland.",
    unit: "Projekt / m² / m³",
    icon: "▱",
    priceItems: [
      { name: "Einfamilienhaus komplett abreißen", low: 8500, high: 32000, unit: "pro Haus inkl. Entsorgung", sourceKey: "d24Abriss" },
      { name: "Abbruch nach umbautem Raum", low: 15, high: 45, unit: "pro m³ umbauter Raum", sourceKey: "d24Abriss" },
      { name: "Innenabbruch Einfamilienhaus", low: 8000, high: 28000, unit: "pro Haus", sourceKey: "d24Abriss" },
      { name: "Industriehalle abbrechen", low: 25, high: 85, unit: "pro m² inkl. Entsorgung", sourceKey: "d24Abriss" },
      { name: "Bauschuttcontainer 30 m³", low: 650, high: 1450, unit: "pauschal inkl. Entsorgung", sourceKey: "d24Abriss" },
    ],
  },
];

export const regions = [
  { value: "de", slug: "deutschland", label: "Deutschland Ø", factor: 1 },
  { value: "berlin", slug: "berlin", label: "Berlin", factor: 1.1 },
  { value: "hamburg", slug: "hamburg", label: "Hamburg", factor: 1.12 },
  { value: "muenchen", slug: "muenchen", label: "München", factor: 1.2 },
  { value: "koeln", slug: "koeln", label: "Köln", factor: 1.07 },
  { value: "frankfurt", slug: "frankfurt", label: "Frankfurt am Main", factor: 1.12 },
  { value: "stuttgart", slug: "stuttgart", label: "Stuttgart", factor: 1.12 },
  { value: "duesseldorf", slug: "duesseldorf", label: "Düsseldorf", factor: 1.08 },
  { value: "leipzig", slug: "leipzig", label: "Leipzig", factor: 0.95 },
] as const;

export const renovationModel = {
  lowMultiplier: 1,
  highMultiplier: 1,
  shares: {
    labor: 0.46,
    material: 0.44,
    reserve: 0.1,
  },
  conditions: [
    { value: "light", label: "Leichte Renovierung", lowPerSquareMeter: 65, highPerSquareMeter: 180 },
    { value: "normal", label: "Normale Renovierung", lowPerSquareMeter: 250, highPerSquareMeter: 650 },
    { value: "extensive", label: "Umfangreiche Sanierung", lowPerSquareMeter: 650, highPerSquareMeter: 1500 },
    { value: "core", label: "Kernsanierung", lowPerSquareMeter: 1500, highPerSquareMeter: 3500 },
  ],
  standards: [
    { value: "simple", label: "Einfach", factor: 0.85 },
    { value: "standard", label: "Standard", factor: 1 },
    { value: "premium", label: "Gehoben", factor: 1.25 },
  ],
} as const;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}