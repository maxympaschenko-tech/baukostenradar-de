import { allGuides as baseAllGuides } from "./all-guides";
import { doorGuides } from "./guides-doors";

const doorParentRelatedLinks = [
  {
    label: "Haustür Kunststoff Kosten",
    href: "/ratgeber/haustuer-kunststoff-kosten",
  },
  {
    label: "Haustür Holz/Alu RC2 Kosten",
    href: "/ratgeber/haustuer-rc2-kosten",
  },
];

const enrichedBaseGuides = baseAllGuides.map((guide) => {
  if (guide.slug !== "haustuer-einbauen-kosten") return guide;

  const missingLinks = doorParentRelatedLinks.filter(
    (candidate) => !guide.related.some((link) => link.href === candidate.href),
  );
  if (missingLinks.length === 0) return guide;

  return { ...guide, related: [...guide.related, ...missingLinks] };
});

export const allGuides = [...enrichedBaseGuides, ...doorGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
