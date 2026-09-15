import { guideGroups as legacyGuideGroups, type GuideGroup } from "./guide-groups-sanitaer-trades";
import { guideGroups as expandedGuideGroups } from "./guide-groups-kellerbau";

export type { GuideGroup } from "./guide-groups-sanitaer-trades";

const groupsByEyebrow = new Map<string, GuideGroup>();

for (const group of legacyGuideGroups) {
  groupsByEyebrow.set(group.eyebrow, {
    ...group,
    slugs: [...group.slugs],
  });
}

for (const group of expandedGuideGroups) {
  const existing = groupsByEyebrow.get(group.eyebrow);
  if (!existing) {
    groupsByEyebrow.set(group.eyebrow, {
      ...group,
      slugs: [...group.slugs],
    });
    continue;
  }

  const slugs = [...existing.slugs];
  for (const slug of group.slugs) {
    if (!slugs.includes(slug)) slugs.push(slug);
  }

  groupsByEyebrow.set(group.eyebrow, {
    ...existing,
    slugs,
  });
}

export const guideGroups: readonly GuideGroup[] = [...groupsByEyebrow.values()];
