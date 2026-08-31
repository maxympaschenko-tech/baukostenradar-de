import { guideGroups as kellerbauGuideGroups, type GuideGroup } from "./guide-groups-kellerbau";

export type { GuideGroup } from "./guide-groups-kellerbau";

const fensterGroup: GuideGroup = {
  eyebrow: "Fenster & Verglasung",
  title: "Fenster nach Rahmen, Wärmeschutz, Schallschutz, Sicherheit und Rollladen kalkulieren",
  description: "Aktuelle Fensterkosten 2026 für Kunststoff, Holz, Aluminium, Zwei- und Dreifachverglasung, Wärmeschutz, VSG, Schallschutz und Rollläden vergleichen.",
  slugs: [
    "fenster-rahmenmaterial-kosten",
    "waermeschutzfenster-kosten",
    "schallschutzfenster-kosten",
    "sicherheitsglas-vsg-fenster-kosten",
    "fenster-rollladen-kosten",
  ],
};

const targetIndex = kellerbauGuideGroups.findIndex((group) => group.eyebrow === "Kellerbau & Unterkellerung");

export const guideGroups: readonly GuideGroup[] = targetIndex === -1
  ? [...kellerbauGuideGroups, fensterGroup]
  : [
      ...kellerbauGuideGroups.slice(0, targetIndex + 1),
      fensterGroup,
      ...kellerbauGuideGroups.slice(targetIndex + 1),
    ];
