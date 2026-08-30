import { guideGroups as baseGuideGroups, type GuideGroup } from "./guide-groups";

export type { GuideGroup } from "./guide-groups";

const additions: Record<string, readonly string[]> = {
  "Küche & Einbauküche": [
    "kuechensanierung-komplett-kosten",
    "kuechenmontage-laufender-meter-kosten",
  ],
  "Treppen & Stufen": [
    "betontreppe-kosten-2026",
    "treppengelaender-edelstahl-kosten",
  ],
};

export const guideGroups: readonly GuideGroup[] = baseGuideGroups.map((group) => {
  const extraSlugs = additions[group.eyebrow];
  if (!extraSlugs) return group;

  const slugs = Array.from(new Set([...group.slugs, ...extraSlugs]));
  return { ...group, slugs };
});
