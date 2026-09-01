import { guideGroups as waermepumpeGuideGroups, type GuideGroup } from "./guide-groups-waermepumpe";

export type { GuideGroup } from "./guide-groups-waermepumpe";

const photovoltaikGroup: GuideGroup = {
  eyebrow: "Photovoltaik & Stromspeicher",
  title: "Photovoltaik von 4 bis 25 kWp, Speicher und Systemtechnik kalkulieren",
  description: "PV-Anlagen nach Leistung vergleichen und Stromspeicher, Installation, Wechselrichter, Smart Meter, Backup sowie laufende Betriebskosten als eigene Kostenblöcke einordnen.",
  slugs: [
    "photovoltaik-kosten-2026",
    "photovoltaik-4-kwp-kosten",
    "photovoltaik-5-kwp-kosten",
    "photovoltaik-10-kwp-kosten",
    "photovoltaik-15-kwp-kosten",
    "photovoltaik-20-kwp-kosten",
    "photovoltaik-25-kwp-kosten",
    "photovoltaik-mit-speicher-kosten",
    "stromspeicher-kosten-pro-kwh",
    "stromspeicher-5-10-15-kwh-kosten",
    "stromspeicher-installation-kosten",
    "pv-wechselrichter-kosten",
    "pv-smart-meter-kosten",
    "photovoltaik-notstrom-backup-kosten",
    "photovoltaik-betriebskosten",
  ],
};

const targetIndex = waermepumpeGuideGroups.findIndex((group) => group.eyebrow === "Photovoltaik & Stromspeicher");

export const guideGroups: readonly GuideGroup[] = targetIndex === -1
  ? [...waermepumpeGuideGroups, photovoltaikGroup]
  : [
      ...waermepumpeGuideGroups.slice(0, targetIndex),
      photovoltaikGroup,
      ...waermepumpeGuideGroups.slice(targetIndex + 1),
    ];
