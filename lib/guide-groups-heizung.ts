import { guideGroups as tuerenGuideGroups, type GuideGroup } from "./guide-groups-tueren";

export type { GuideGroup } from "./guide-groups-tueren";

const heizungGroup: GuideGroup = {
  eyebrow: "Heizung & Wärme",
  title: "Heizung, Heizkörper, Fußbodenheizung und Hydraulik 2026 kalkulieren",
  description: "Heizungserneuerung als System planen: Wärmeerzeuger, Heizkörper, Fußbodenheizung, hydraulischen Abgleich, Heizungspumpe, Wartung und Thermostate mit aktuellen Richtwerten vergleichen.",
  slugs: [
    "heizung-erneuern-kosten",
    "heizkoerper-austauschen-kosten",
    "fussbodenheizung-kosten",
    "hydraulischer-abgleich-kosten",
    "heizungspumpe-tauschen-kosten",
    "fussbodenheizung-100-qm-kosten",
    "gasheizung-austauschen-kosten",
    "heizkoerper-montieren-kosten",
    "thermostat-installieren-kosten",
    "heizungswartung-kosten",
  ],
};

const targetIndex = tuerenGuideGroups.findIndex((group) => group.eyebrow === "Heizung & Wärme");

export const guideGroups: readonly GuideGroup[] = targetIndex === -1
  ? [...tuerenGuideGroups, heizungGroup]
  : [
      ...tuerenGuideGroups.slice(0, targetIndex),
      heizungGroup,
      ...tuerenGuideGroups.slice(targetIndex + 1),
    ];
