import { guides as primaryGuides } from "@/lib/guides";
import { secondaryGuides } from "@/lib/guides-secondary";
import { tertiaryGuides } from "@/lib/guides-tertiary";

const primaryClusterLinks: Record<string, Array<{ label: string; href: string }>> = {
  "sanierungskosten-pro-qm": [
    { label: "Haus sanieren Kosten", href: "/ratgeber/haus-sanieren-kosten" },
    { label: "Kernsanierung Kosten", href: "/ratgeber/kernsanierung-kosten" },
    { label: "Sanierung Reihenfolge", href: "/ratgeber/sanierung-reihenfolge" },
  ],
  "handwerker-stundensaetze": [
    { label: "Arbeitskosten vs. Materialkosten", href: "/ratgeber/arbeitskosten-materialkosten" },
  ],
  "altbausanierung-kosten": [
    { label: "Haus sanieren Kosten", href: "/ratgeber/haus-sanieren-kosten" },
    { label: "Kernsanierung Kosten", href: "/ratgeber/kernsanierung-kosten" },
    { label: "Sanierung Reihenfolge", href: "/ratgeber/sanierung-reihenfolge" },
  ],
  "wohnung-renovieren-kosten": [
    { label: "Renovierungskosten 100 m²", href: "/ratgeber/renovierungskosten-100-qm" },
    { label: "Renovierungskosten Haus", href: "/ratgeber/renovierungskosten-haus" },
    { label: "Arbeitskosten vs. Materialkosten", href: "/ratgeber/arbeitskosten-materialkosten" },
  ],
};

const secondaryClusterLinks: Record<string, Array<{ label: string; href: string }>> = {
  "haus-sanieren-kosten": [
    { label: "Sanierungskosten Einfamilienhaus", href: "/ratgeber/sanierungskosten-einfamilienhaus" },
    { label: "Kernsanierung Kosten", href: "/ratgeber/kernsanierung-kosten" },
    { label: "Haus renovieren 150 m²", href: "/ratgeber/haus-renovieren-150-qm-kosten" },
  ],
  "renovierungskosten-haus": [
    { label: "Renovierungskosten 100 m²", href: "/ratgeber/renovierungskosten-100-qm" },
    { label: "Haus renovieren 150 m²", href: "/ratgeber/haus-renovieren-150-qm-kosten" },
    { label: "Haus renovieren 200 m²", href: "/ratgeber/haus-renovieren-200-qm-kosten" },
  ],
  "sanierung-reihenfolge": [
    { label: "Sanierungskosten Einfamilienhaus", href: "/ratgeber/sanierungskosten-einfamilienhaus" },
    { label: "Kernsanierung Kosten", href: "/ratgeber/kernsanierung-kosten" },
  ],
  "arbeitskosten-materialkosten": [
    { label: "Renovierungskosten 100 m²", href: "/ratgeber/renovierungskosten-100-qm" },
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

export const allGuides = [...enrichedPrimaryGuides, ...enrichedSecondaryGuides, ...tertiaryGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
