export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  unit: string;
  icon: string;
};

export const services: Service[] = [
  {
    slug: "badsanierung",
    title: "Badsanierung Kosten",
    shortTitle: "Badsanierung",
    description: "Kosten für Komplettsanierung, Sanitär, Fliesen, Dusche und Badewanne kalkulieren.",
    unit: "Projekt / m²",
    icon: "◫",
  },
  {
    slug: "maler",
    title: "Maler Kosten",
    shortTitle: "Malerarbeiten",
    description: "Preise für Streichen, Tapezieren, Spachteln und weitere Malerarbeiten vergleichen.",
    unit: "m²",
    icon: "▤",
  },
  {
    slug: "fliesenleger",
    title: "Fliesenleger Kosten",
    shortTitle: "Fliesenleger",
    description: "Kosten für Verlegen, Entfernen, Untergrundvorbereitung und Zusatzarbeiten einschätzen.",
    unit: "m²",
    icon: "▦",
  },
  {
    slug: "elektriker",
    title: "Elektriker Kosten",
    shortTitle: "Elektrik",
    description: "Kosten für Elektroinstallation, Steckdosen, Leitungen und Sicherungskasten planen.",
    unit: "Stunde / Projekt",
    icon: "ϟ",
  },
  {
    slug: "dachsanierung",
    title: "Dachsanierung Kosten",
    shortTitle: "Dachsanierung",
    description: "Kosten für Dacheindeckung, Dämmung, Reparaturen und Dachfenster kalkulieren.",
    unit: "m² / Projekt",
    icon: "⌂",
  },
  {
    slug: "bodenleger",
    title: "Bodenleger Kosten",
    shortTitle: "Boden",
    description: "Preise für Parkett, Vinyl, Laminat, Estrich und alte Bodenbeläge einschätzen.",
    unit: "m²",
    icon: "▥",
  },
];

export const regions = [
  { value: "de", label: "Deutschland Ø", factor: 1 },
  { value: "berlin", label: "Berlin", factor: 1.02 },
  { value: "hamburg", label: "Hamburg", factor: 1.07 },
  { value: "muenchen", label: "München", factor: 1.16 },
  { value: "koeln", label: "Köln", factor: 1.04 },
  { value: "frankfurt", label: "Frankfurt am Main", factor: 1.09 },
  { value: "stuttgart", label: "Stuttgart", factor: 1.1 },
  { value: "duesseldorf", label: "Düsseldorf", factor: 1.05 },
  { value: "leipzig", label: "Leipzig", factor: 0.94 },
] as const;

export const renovationModel = {
  basePerSquareMeter: 650,
  lowMultiplier: 0.82,
  highMultiplier: 1.22,
  shares: {
    labor: 0.48,
    material: 0.39,
    reserve: 0.13,
  },
  conditions: [
    { value: "light", label: "Leichte Renovierung", factor: 0.85 },
    { value: "normal", label: "Normale Renovierung", factor: 1 },
    { value: "extensive", label: "Umfangreiche Renovierung", factor: 1.35 },
    { value: "core", label: "Kernsanierung", factor: 1.75 },
  ],
  standards: [
    { value: "simple", label: "Einfach", factor: 0.8 },
    { value: "standard", label: "Standard", factor: 1 },
    { value: "premium", label: "Gehoben", factor: 1.35 },
  ],
} as const;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
