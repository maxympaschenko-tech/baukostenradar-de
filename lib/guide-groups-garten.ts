import { guideGroups as photovoltaikGuideGroups, type GuideGroup } from "./guide-groups-photovoltaik";

export type { GuideGroup } from "./guide-groups-photovoltaik";

const gartenGroup: GuideGroup = {
  eyebrow: "Garten & Außenanlagen",
  title: "Garten, Pflaster, Rasen, Hecke und Baumpflege kalkulieren",
  description: "Außenanlagen mit aktuellen 2026-Richtwerten für Einfahrt, Terrasse, Pflasterarten, Rasen, Hecke, Gartenpflege, GaLaBau und Baumpflege vergleichen.",
  slugs: [
    "garten-anlegen-kosten",
    "einfahrt-pflastern-kosten",
    "terrasse-pflastern-kosten",
    "pflasterarbeiten-kosten-pro-qm",
    "rasen-anlegen-kosten-pro-qm",
    "rollrasen-kosten-pro-qm",
    "hecke-pflanzen-kosten-pro-meter",
    "heckenschnitt-kosten-pro-meter",
    "garten-landschaftsbauer-stundensatz",
    "baumpflege-kosten",
    "baum-faellen-kosten",
    "doppelstabmattenzaun-kosten-pro-meter",
  ],
};

const targetIndex = photovoltaikGuideGroups.findIndex((group) => group.eyebrow === "Garten & Außenanlagen");

export const guideGroups: readonly GuideGroup[] = targetIndex === -1
  ? [...photovoltaikGuideGroups, gartenGroup]
  : [
      ...photovoltaikGuideGroups.slice(0, targetIndex),
      gartenGroup,
      ...photovoltaikGuideGroups.slice(targetIndex + 1),
    ];
