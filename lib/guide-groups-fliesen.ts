import { guideGroups as trockenbauGuideGroups, type GuideGroup } from "./guide-groups-trockenbau";

export type { GuideGroup } from "./guide-groups-trockenbau";

const fliesenGroup: GuideGroup = {
  eyebrow: "Fliesen & Naturstein",
  title: "Fliesen, Untergrund, Fugen und Detailarbeiten kalkulieren",
  description: "Fliesenarbeiten mit aktuellen 2026-Richtwerten für Standard, Großformat, Mosaik, Naturstein, Überfliesen, Untergrund, Silikonfugen, Sockelleisten und Stundensätze vergleichen.",
  slugs: [
    "fliesenleger-kosten-pro-qm",
    "fliesenleger-stundensatz",
    "fliesen-verlegen-kosten-pro-qm",
    "fliese-auf-fliese-kosten-pro-qm",
    "fliesen-untergrund-ausgleichen-kosten",
    "grossformat-fliesen-verlegen-kosten",
    "mosaik-fliesen-verlegen-kosten-pro-qm",
    "naturstein-verlegen-kosten-pro-qm",
    "silikonfugen-kosten-pro-meter",
    "fliesen-sockelleisten-kosten-pro-meter",
  ],
};

const targetIndex = trockenbauGuideGroups.findIndex((group) => group.eyebrow === "Fliesen & Naturstein");

export const guideGroups: readonly GuideGroup[] = targetIndex === -1
  ? [...trockenbauGuideGroups, fliesenGroup]
  : [
      ...trockenbauGuideGroups.slice(0, targetIndex),
      fliesenGroup,
      ...trockenbauGuideGroups.slice(targetIndex + 1),
    ];
