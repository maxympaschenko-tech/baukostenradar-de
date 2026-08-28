import { allGuides as baseAllGuides } from "./all-guides";
import { doorGuides } from "./guides-doors";

const doorRelatedLinks = {
  kunststoff: {
    label: "Haustür Kunststoff Kosten",
    href: "/ratgeber/haustuer-kunststoff-kosten",
  },
  rc2: {
    label: "Haustür Holz/Alu RC2 Kosten",
    href: "/ratgeber/haustuer-rc2-kosten",
  },
} as const;

const relatedByGuide: Record<string, Array<{ label: string; href: string }>> = {
  "haustuer-einbauen-kosten": [doorRelatedLinks.kunststoff, doorRelatedLinks.rc2],
  "innentuer-einbauen-kosten": [doorRelatedLinks.kunststoff, doorRelatedLinks.rc2],
};

const enrichedBaseGuides = baseAllGuides.map((guide) => {
  const candidates = relatedByGuide[guide.slug];
  if (!candidates) return guide;

  const missingLinks = candidates.filter(
    (candidate) => !guide.related.some((link) => link.href === candidate.href),
  );
  if (missingLinks.length === 0) return guide;

  return { ...guide, related: [...guide.related, ...missingLinks] };
});

export const allGuides = [...enrichedBaseGuides, ...doorGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
