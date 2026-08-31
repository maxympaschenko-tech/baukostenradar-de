import { guideGroups as terraceCoverGuideGroups, type GuideGroup } from "./guide-groups-terrace-cover";

export type { GuideGroup } from "./guide-groups-terrace-cover";

const wintergartenGroup: GuideGroup = {
  eyebrow: "Wintergarten & Glasanbau",
  title: "Kaltwintergarten, Wohnwintergarten, Verglasung und Fundament kalkulieren",
  description: "Wintergartenkosten mit aktuellen 2026-Richtwerten für Kalt-, Mittel- und Warmwintergarten, Rahmenmaterialien, Verglasung, Fundament und technische Ausstattung vergleichen.",
  slugs: [
    "wintergarten-kosten",
    "kaltwintergarten-kosten",
    "wohnwintergarten-kosten",
    "wintergarten-verglasung-kosten",
    "wintergarten-fundament-kosten",
  ],
};

const targetIndex = terraceCoverGuideGroups.findIndex((group) => group.eyebrow === "Terrassenüberdachung & Pergola");

export const guideGroups: readonly GuideGroup[] = targetIndex === -1
  ? [...terraceCoverGuideGroups, wintergartenGroup]
  : [
      ...terraceCoverGuideGroups.slice(0, targetIndex + 1),
      wintergartenGroup,
      ...terraceCoverGuideGroups.slice(targetIndex + 1),
    ];
