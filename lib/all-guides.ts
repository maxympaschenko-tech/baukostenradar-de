import { guides as primaryGuides } from "@/lib/guides";
import { secondaryGuides } from "@/lib/guides-secondary";
import { tertiaryGuides } from "@/lib/guides-tertiary";
import { tradeGuides } from "@/lib/guides-trade";
import { scenarioGuides } from "@/lib/guides-scenarios";
import { catalogScenarioGuides } from "@/lib/guides-catalog-scenarios";

const primaryClusterLinks: Record<string, Array<{ label: string; href: string }>> = {
  "sanierungskosten-pro-qm": [
    { label: "Haus sanieren Kosten", href: "/ratgeber/haus-sanieren-kosten" },
    { label: "Kernsanierung Kosten", href: "/ratgeber/kernsanierung-kosten" },
    { label: "Sanierung Reihenfolge", href: "/ratgeber/sanierung-reihenfolge" },
  ],
  "handwerker-stundensaetze": [
    { label: "Arbeitskosten vs. Materialkosten", href: "/ratgeber/arbeitskosten-materialkosten" },
    { label: "Elektrik im Altbau erneuern", href: "/ratgeber/elektrik-erneuern-altbau" },
    { label: "Heizung erneuern Kosten", href: "/ratgeber/heizung-erneuern-kosten" },
  ],
  "altbausanierung-kosten": [
    { label: "Haus sanieren Kosten", href: "/ratgeber/haus-sanieren-kosten" },
    { label: "Kernsanierung Kosten", href: "/ratgeber/kernsanierung-kosten" },
    { label: "Sanierung Reihenfolge", href: "/ratgeber/sanierung-reihenfolge" },
    { label: "Elektrik im Altbau erneuern", href: "/ratgeber/elektrik-erneuern-altbau" },
  ],
  "wohnung-renovieren-kosten": [
    { label: "Renovierungskosten 100 m²", href: "/ratgeber/renovierungskosten-100-qm" },
    { label: "Renovierungskosten Haus", href: "/ratgeber/renovierungskosten-haus" },
    { label: "Arbeitskosten vs. Materialkosten", href: "/ratgeber/arbeitskosten-materialkosten" },
    { label: "Bad komplett sanieren", href: "/ratgeber/bad-komplett-sanieren-kosten" },
  ],
};

const secondaryClusterLinks: Record<string, Array<{ label: string; href: string }>> = {
  "haus-sanieren-kosten": [
    { label: "Sanierungskosten Einfamilienhaus", href: "/ratgeber/sanierungskosten-einfamilienhaus" },
    { label: "Kernsanierung Kosten", href: "/ratgeber/kernsanierung-kosten" },
    { label: "Haus renovieren 150 m²", href: "/ratgeber/haus-renovieren-150-qm-kosten" },
    { label: "Dach sanieren Kosten pro m²", href: "/ratgeber/dach-sanieren-kosten-pro-qm" },
    { label: "Fenster austauschen Kosten", href: "/ratgeber/fenster-austauschen-kosten-haus" },
    { label: "Heizung erneuern Kosten", href: "/ratgeber/heizung-erneuern-kosten" },
  ],
  "renovierungskosten-haus": [
    { label: "Renovierungskosten 100 m²", href: "/ratgeber/renovierungskosten-100-qm" },
    { label: "Haus renovieren 150 m²", href: "/ratgeber/haus-renovieren-150-qm-kosten" },
    { label: "Haus renovieren 200 m²", href: "/ratgeber/haus-renovieren-200-qm-kosten" },
    { label: "Bad komplett sanieren", href: "/ratgeber/bad-komplett-sanieren-kosten" },
    { label: "Küche 10 m² renovieren", href: "/ratgeber/kueche-10-qm-renovieren-kosten" },
    { label: "6 Innentüren austauschen", href: "/ratgeber/6-innentueren-austauschen-kosten" },
  ],
  "sanierung-reihenfolge": [
    { label: "Sanierungskosten Einfamilienhaus", href: "/ratgeber/sanierungskosten-einfamilienhaus" },
    { label: "Kernsanierung Kosten", href: "/ratgeber/kernsanierung-kosten" },
    { label: "Elektrik im Altbau erneuern", href: "/ratgeber/elektrik-erneuern-altbau" },
    { label: "Dach sanieren Kosten pro m²", href: "/ratgeber/dach-sanieren-kosten-pro-qm" },
    { label: "Estrich 100 m² Kosten", href: "/ratgeber/estrich-100-qm-kosten" },
  ],
  "arbeitskosten-materialkosten": [
    { label: "Renovierungskosten 100 m²", href: "/ratgeber/renovierungskosten-100-qm" },
    { label: "Bad komplett sanieren", href: "/ratgeber/bad-komplett-sanieren-kosten" },
    { label: "Innenwand mauern Kosten", href: "/ratgeber/innenwand-mauern-kosten" },
  ],
};

const tertiaryClusterLinks: Record<string, Array<{ label: string; href: string }>> = {
  "kernsanierung-kosten": [
    { label: "Elektrik im Altbau erneuern", href: "/ratgeber/elektrik-erneuern-altbau" },
    { label: "Dach sanieren Kosten pro m²", href: "/ratgeber/dach-sanieren-kosten-pro-qm" },
    { label: "Heizung erneuern Kosten", href: "/ratgeber/heizung-erneuern-kosten" },
    { label: "Innenwand mauern Kosten", href: "/ratgeber/innenwand-mauern-kosten" },
    { label: "Estrich 100 m² Kosten", href: "/ratgeber/estrich-100-qm-kosten" },
  ],
  "sanierungskosten-einfamilienhaus": [
    { label: "Dach sanieren Kosten pro m²", href: "/ratgeber/dach-sanieren-kosten-pro-qm" },
    { label: "Fenster austauschen Kosten", href: "/ratgeber/fenster-austauschen-kosten-haus" },
    { label: "Heizung erneuern Kosten", href: "/ratgeber/heizung-erneuern-kosten" },
  ],
  "renovierungskosten-100-qm": [
    { label: "Bad komplett sanieren", href: "/ratgeber/bad-komplett-sanieren-kosten" },
    { label: "Elektrik im Altbau erneuern", href: "/ratgeber/elektrik-erneuern-altbau" },
    { label: "Estrich 100 m² Kosten", href: "/ratgeber/estrich-100-qm-kosten" },
  ],
};

const tradeClusterLinks: Record<string, Array<{ label: string; href: string }>> = {
  "dach-sanieren-kosten-pro-qm": [
    { label: "Dach 150 m² Kosten", href: "/ratgeber/dach-150-qm-kosten" },
  ],
  "fenster-austauschen-kosten-haus": [
    { label: "20 Fenster austauschen Kosten", href: "/ratgeber/20-fenster-austauschen-kosten" },
  ],
  "elektrik-erneuern-altbau": [
    { label: "Elektrik bei 100 m² erneuern", href: "/ratgeber/elektrik-erneuern-100-qm-kosten" },
  ],
  "heizung-erneuern-kosten": [
    { label: "Fußbodenheizung 100 m² Kosten", href: "/ratgeber/fussbodenheizung-100-qm-kosten" },
  ],
  "bad-komplett-sanieren-kosten": [
    { label: "Bad 10 m² sanieren Kosten", href: "/ratgeber/bad-10-qm-sanieren-kosten" },
  ],
};

const enrichedPrimaryGuides = primaryGuides.map((guide) => ({
  ...guide,
  related: [...guide.related, ...(primaryClusterLinks[guide.slug] ?? [])],
}));

const enrichedSecondaryGuides = secondaryGuides.map((guide) => ({
  ...guide,
  related: [...guide.related, ...(secondaryClusterLinks[guide.slug] ?? [])],
}));

const enrichedTertiaryGuides = tertiaryGuides.map((guide) => ({
  ...guide,
  related: [...guide.related, ...(tertiaryClusterLinks[guide.slug] ?? [])],
}));

const enrichedTradeGuides = tradeGuides.map((guide) => ({
  ...guide,
  related: [...guide.related, ...(tradeClusterLinks[guide.slug] ?? [])],
}));

export const allGuides = [
  ...enrichedPrimaryGuides,
  ...enrichedSecondaryGuides,
  ...enrichedTertiaryGuides,
  ...enrichedTradeGuides,
  ...scenarioGuides,
  ...catalogScenarioGuides,
];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
