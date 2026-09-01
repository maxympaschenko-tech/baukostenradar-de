import { guideGroups as fliesenGuideGroups, type GuideGroup } from "./guide-groups-fliesen";

export type { GuideGroup } from "./guide-groups-fliesen";

const elektrikerGroup: GuideGroup = {
  eyebrow: "Elektrik & Elektroinstallation",
  title: "Elektrik, Neubau, Schutztechnik, Smart Home und Wallbox kalkulieren",
  description: "Elektroarbeiten mit aktuellen 2026-Richtwerten für Altbau, Neubau, Verteiler, Steckdosen, FI-Schutz, Anfahrt, Smart Home und Wallbox vergleichen.",
  slugs: [
    "elektrik-erneuern-altbau",
    "elektrik-erneuern-100-qm-kosten",
    "elektro-neuinstallation-kosten",
    "elektroinstallation-neubau-kosten-pro-qm",
    "sicherungskasten-erneuern-kosten",
    "fi-schutzschalter-nachruesten-kosten",
    "steckdose-installieren-kosten",
    "lichtschalter-austauschen-kosten",
    "elektriker-anfahrt-kosten",
    "smart-home-einrichtung-kosten",
    "wallbox-installieren-kosten",
  ],
};

const targetIndex = fliesenGuideGroups.findIndex((group) => group.eyebrow === "Elektrik & Elektroinstallation");

export const guideGroups: readonly GuideGroup[] = targetIndex === -1
  ? [...fliesenGuideGroups, elektrikerGroup]
  : [
      ...fliesenGuideGroups.slice(0, targetIndex),
      elektrikerGroup,
      ...fliesenGuideGroups.slice(targetIndex + 1),
    ];
