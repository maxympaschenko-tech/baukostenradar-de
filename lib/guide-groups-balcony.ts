import { guideGroups as currentGuideGroups, type GuideGroup } from "./guide-groups-current";

export type { GuideGroup } from "./guide-groups-current";

const balconyGroup: GuideGroup = {
  eyebrow: "Balkon & Balkonsanierung",
  title: "Balkon sanieren, abdichten, fliesen und Geländer kalkulieren",
  description: "Balkonsanierung als Gesamtprojekt sowie Abdichtung, Außenfliesen und Geländer mit aktuellen 2026-Richtwerten und konkreten Rechner-Presets vergleichen.",
  slugs: [
    "balkon-sanieren-kosten-pro-qm",
    "balkon-abdichten-kosten-pro-qm",
    "balkon-fliesen-kosten-pro-qm",
    "balkongelaender-kosten-pro-meter",
  ],
};

const targetIndex = currentGuideGroups.findIndex((group) => group.eyebrow === "Garten & Außenanlagen");

export const guideGroups: readonly GuideGroup[] = targetIndex === -1
  ? [...currentGuideGroups, balconyGroup]
  : [
      ...currentGuideGroups.slice(0, targetIndex),
      balconyGroup,
      ...currentGuideGroups.slice(targetIndex),
    ];
