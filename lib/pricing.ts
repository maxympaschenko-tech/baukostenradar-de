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
  elektriker: {
    name: "Handwerker Kontakte - Elektriker Kosten 2026",
    url: "https://handwerker-kontakte.de/de/kosten/elektriker",
    checkedAt: "August 2026",
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
      { name: "Bad-Neubau / Sanierung", low: 1000, high: 2500, unit: "pro m²", note: "Orientierung für vollständige Badarbeiten", sourceKey: "d24Sanierung" },
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
    description: "Richtwerte für Neueindeckung, Dämmung, Gerüst und typische Dacharbeiten in Deutschland.",
    unit: "m² / Projekt",
    icon: "⌂",
    priceItems: [
      { name: "Neueindeckung inkl. Lattung", low: 120, high: 250, unit: "pro m² Dachfläche", sourceKey: "d24Preisspiegel" },
      { name: "Dachsanierung inkl. Aufsparrendämmung", low: 250, high: 450, unit: "pro m²", sourceKey: "d24Preisspiegel" },
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
