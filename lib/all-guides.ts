import { guides as primaryGuides } from "@/lib/guides";
import { secondaryGuides } from "@/lib/guides-secondary";
import { tertiaryGuides } from "@/lib/guides-tertiary";
import { tradeGuides } from "@/lib/guides-trade";

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
  ],
  "sanierung-reihenfolge": [
    { label: "Sanierungskosten Einfamilienhaus", href: "/ratgeber/sanierungskosten-einfamilienhaus" },
    { label: "Kernsanierung Kosten", href: "/ratgeber/kernsanierung-kosten" },
    { label: "Elektrik im Altbau erneuern", href: "/ratgeber/elektrik-erneuern-altbau" },
    { label: "Dach sanieren Kosten pro m²", href: "/ratgeber/dach-sanieren-kosten-pro-qm" },
  ],
  "arbeitskosten-materialkosten": [
    { label: "Renovierungskosten 100 m²", href: "/ratgeber/renovierungskosten-100-qm" },
    { label: "Bad komplett sanieren", href: "/ratgeber/bad-komplett-sanieren-kosten" },
  ],
};

const tertiaryClusterLinks: Record<string, Array<{ label: string; href: string }>> = {
  "kernsanierung-kosten": [
    { label: "Elektrik im Altbau erneuern", href: "/ratgeber/elektrik-erneuern-altbau" },
    { label: "Dach sanieren Kosten pro m²", href: "/ratgeber/dach-sanieren-kosten-pro-qm" },
    { label: "Heizung erneuern Kosten", href: "/ratgeber/heizung-erneuern-kosten" },
  ],
  "sanierungskosten-einfamilienhaus": [
    { label: "Dach sanieren Kosten pro m²", href: "/ratgeber/dach-sanieren-kosten-pro-qm" },
    { label: "Fenster austauschen Kosten", href: "/ratgeber/fenster-austauschen-kosten-haus" },
    { label: "Heizung erneuern Kosten", href: "/ratgeber/heizung-erneuern-kosten" },
  ],
  "renovierungskosten-100-qm": [
    { label: "Bad komplett sanieren", href: "/ratgeber/bad-komplett-sanieren-kosten" },
    { label: "Elektrik im Altbau erneuern", href: "/ratgeber/elektrik-erneuern-altbau" },
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

export const allGuides = [...enrichedPrimaryGuides, ...enrichedSecondaryGuides, ...enrichedTertiaryGuides, ...tradeGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
