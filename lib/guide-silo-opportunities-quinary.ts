import type { OpportunitySiloConfig } from "@/lib/guide-silo-opportunities-tertiary";

export const quinaryOpportunitySilos: Record<string, OpportunitySiloConfig> = {
  "bad-komplett-verfliesen-kosten": {
    serviceSlugs: ["badsanierung", "fliesenleger"],
    serviceSlug: "badsanierung",
    itemSlug: "komplettverfliesung-bad",
    calculatorLabel: "Badverfliesung berechnen",
  },
  "bad-abdichten-kosten-pro-qm": {
    serviceSlugs: ["badsanierung", "fliesenleger"],
    serviceSlug: "badsanierung",
    itemSlug: "verbundabdichtung-nassbereich",
    calculatorLabel: "Badabdichtung berechnen",
  },
  "elektro-neuinstallation-kosten": {
    serviceSlugs: ["elektriker"],
    serviceSlug: "elektriker",
    itemSlug: "komplett-neuinstallation",
    calculatorLabel: "Elektro-Neuinstallation berechnen",
  },
  "dachsanierung-aufsparrendaemmung-kosten-pro-qm": {
    serviceSlugs: ["dachsanierung", "daemmung"],
    serviceSlug: "dachsanierung",
    itemSlug: "dachsanierung-inkl-aufsparrendaemmung",
    calculatorLabel: "Dachsanierung mit Dämmung berechnen",
  },
  "photovoltaik-5-kwp-kosten": {
    serviceSlugs: ["photovoltaik", "elektriker", "dachsanierung"],
    serviceSlug: "photovoltaik",
    itemSlug: "pv-anlage-5-kwp-inkl-installation",
    calculatorLabel: "PV 5 kWp berechnen",
  },
  "fassade-sanieren-kosten": {
    serviceSlugs: ["fassade", "daemmung", "maler"],
    serviceSlug: "fassade",
    itemSlug: "putz-fassade-neu",
    calculatorLabel: "Fassadensanierung berechnen",
  },
  "fassade-streichen-kosten-pro-qm": {
    serviceSlugs: ["fassade", "maler"],
    serviceSlug: "fassade",
    itemSlug: "fassade-streichen-inkl-vorarbeiten",
    calculatorLabel: "Fassadenanstrich berechnen",
  },
  "klinkerfassade-kosten-pro-qm": {
    serviceSlugs: ["fassade", "maurer"],
    serviceSlug: "fassade",
    itemSlug: "klinker-verblendung",
    calculatorLabel: "Klinkerfassade berechnen",
  },
  "zementestrich-kosten-pro-qm": {
    serviceSlugs: ["estrich", "bodenleger"],
    serviceSlug: "estrich",
    itemSlug: "zementestrich-komplett",
    calculatorLabel: "Zementestrich berechnen",
  },
  "kalksandstein-mauerwerk-kosten-pro-qm": {
    serviceSlugs: ["maurer"],
    serviceSlug: "maurer",
    itemSlug: "kalksandstein-mauerwerk",
    calculatorLabel: "Kalksandstein-Mauerwerk berechnen",
  },
  "poroton-mauerwerk-kosten-pro-qm": {
    serviceSlugs: ["maurer"],
    serviceSlug: "maurer",
    itemSlug: "poroton-mauerwerk",
    calculatorLabel: "Poroton-Mauerwerk berechnen",
  },
  "porenbeton-mauerwerk-kosten-pro-qm": {
    serviceSlugs: ["maurer"],
    serviceSlug: "maurer",
    itemSlug: "porenbeton-mauerwerk",
    calculatorLabel: "Porenbeton-Mauerwerk berechnen",
  },
  "treppenrenovierung-holzstufen-system-kosten": {
    serviceSlugs: ["treppen"],
    serviceSlug: "treppen",
    itemSlug: "treppenrenovierung-holzstufen-system",
    calculatorLabel: "Treppenrenovierung berechnen",
  },
  "treppen-stufenueberbau-gelaender-kosten": {
    serviceSlugs: ["treppen"],
    serviceSlug: "treppen",
    itemSlug: "holztreppe-stufenueberbau-gelaender",
    calculatorLabel: "Stufenüberbau berechnen",
  },
  "natursteintreppe-schleifen-kosten": {
    serviceSlugs: ["treppen"],
    serviceSlug: "treppen",
    itemSlug: "natursteintreppe-schleifen-und-polieren",
    calculatorLabel: "Natursteintreppe berechnen",
  },
  "sanitaerobjekte-bad-kosten": {
    serviceSlugs: ["sanitaer", "badsanierung"],
    serviceSlug: "sanitaer",
    itemSlug: "sanitaerobjekte-armaturen-fuer-8-m2-bad",
    calculatorLabel: "Sanitärobjekte berechnen",
  },
  "kueche-elektrogeraete-kosten": {
    serviceSlugs: ["kueche", "elektriker"],
    serviceSlug: "kueche",
    itemSlug: "neue-elektrogeraete",
    calculatorLabel: "Küchengeräte berechnen",
  },
  "einbaukueche-kosten": {
    serviceSlugs: ["kueche"],
    serviceSlug: "kueche",
    itemSlug: "komplett-neue-einbaukueche",
    calculatorLabel: "Einbauküche berechnen",
  },
  "premium-kueche-umbau-kosten": {
    serviceSlugs: ["kueche", "elektriker", "sanitaer"],
    serviceSlug: "kueche",
    itemSlug: "premium-kueche-mit-umbau",
    calculatorLabel: "Premium-Küche berechnen",
  },
};
