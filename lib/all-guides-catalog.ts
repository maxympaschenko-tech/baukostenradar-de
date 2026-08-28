import { allGuides as baseAllGuides } from "./all-guides";
import { doorGuides } from "./guides-doors";

const rc2RelatedLink = {
  label: "Haustür Holz/Alu RC2 Kosten",
  href: "/ratgeber/haustuer-rc2-kosten",
};

const enrichedBaseGuides = baseAllGuides.map((guide) => {
  if (guide.slug !== "haustuer-einbauen-kosten") return guide;
  if (guide.related.some((link) => link.href === rc2RelatedLink.href)) return guide;
  return { ...guide, related: [...guide.related, rc2RelatedLink] };
});

export const allGuides = [...enrichedBaseGuides, ...doorGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
