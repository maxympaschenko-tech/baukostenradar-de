import type { OpportunitySiloConfig } from "@/lib/guide-silo-opportunities-tertiary";

export const quaternaryOpportunitySilos: Record<string, OpportunitySiloConfig> = {
  "mosaik-fliesen-verlegen-kosten-pro-qm": {
    serviceSlugs: ["fliesenleger"],
    serviceSlug: "fliesenleger",
    itemSlug: "mosaik-fliesen-verlegen",
    calculatorLabel: "Mosaikfliesen berechnen",
  },
  "naturstein-verlegen-kosten-pro-qm": {
    serviceSlugs: ["fliesenleger"],
    serviceSlug: "fliesenleger",
    itemSlug: "naturstein-verlegen",
    calculatorLabel: "Naturstein berechnen",
  },
  "lichtschalter-austauschen-kosten": {
    serviceSlugs: ["elektriker"],
    serviceSlug: "elektriker",
    itemSlug: "lichtschalter-austauschen",
    calculatorLabel: "Lichtschalter berechnen",
  },
  "geruest-kosten-pro-qm": {
    serviceSlugs: ["dachsanierung", "fassade"],
    serviceSlug: "dachsanierung",
    itemSlug: "geruest-ca-4-wochen",
    calculatorLabel: "Gerüstkosten berechnen",
  },
  "boden-sanieren-kosten-pro-qm": {
    serviceSlugs: ["bodenleger", "estrich"],
    serviceSlug: "bodenleger",
    itemSlug: "boden-sanierung-alt-raus-neu-rein",
    calculatorLabel: "Bodensanierung berechnen",
  },
  "bad-entkernen-kosten": {
    serviceSlugs: ["sanitaer", "badsanierung", "fliesenleger"],
    serviceSlug: "sanitaer",
    itemSlug: "demontage-entsorgung-altbad",
    calculatorLabel: "Bad-Rückbau berechnen",
  },
  "photovoltaik-15-kwp-kosten": {
    serviceSlugs: ["photovoltaik", "elektriker", "dachsanierung"],
    serviceSlug: "photovoltaik",
    itemSlug: "pv-anlage-15-kwp-inkl-installation",
    calculatorLabel: "PV 15 kWp berechnen",
  },
  "fenster-2-fach-verglasung-kosten": {
    serviceSlugs: ["fenster", "daemmung", "fassade"],
    serviceSlug: "fenster",
    itemSlug: "fenster-mit-2-fach-verglasung",
    calculatorLabel: "2-fach Fenster berechnen",
  },
  "thermostat-installieren-kosten": {
    serviceSlugs: ["heizung", "sanitaer"],
    serviceSlug: "heizung",
    itemSlug: "thermostat-installieren",
    calculatorLabel: "Thermostate berechnen",
  },
  "fassadenrisse-sanieren-kosten-pro-qm": {
    serviceSlugs: ["fassade", "maler"],
    serviceSlug: "fassade",
    itemSlug: "fassaden-sanierung-bei-rissen",
    calculatorLabel: "Fassadenrisse berechnen",
  },
  "vorgehaengte-hinterlueftete-fassade-kosten-pro-qm": {
    serviceSlugs: ["fassade", "daemmung"],
    serviceSlug: "fassade",
    itemSlug: "vorgehaengte-hinterlueftete-fassade",
    calculatorLabel: "VHF-Fassade berechnen",
  },
  "heckenschnitt-kosten-pro-meter": {
    serviceSlugs: ["garten"],
    serviceSlug: "garten",
    itemSlug: "heckenschnitt",
    calculatorLabel: "Heckenschnitt berechnen",
  },
  "innentuer-einbauen-kosten": {
    serviceSlugs: ["tueren", "trockenbau", "maler"],
    serviceSlug: "tueren",
    itemSlug: "innentuer-einbauen-inkl-zarge",
    calculatorLabel: "Innentür berechnen",
  },
  "tuer-lackieren-kosten": {
    serviceSlugs: ["tueren", "maler"],
    serviceSlug: "tueren",
    itemSlug: "tuer-lackieren-mit-zarge",
    calculatorLabel: "Tür lackieren berechnen",
  },
  "anhydritestrich-kosten-pro-qm": {
    serviceSlugs: ["estrich", "bodenleger", "heizung"],
    serviceSlug: "estrich",
    itemSlug: "calciumsulfat-anhydritestrich",
    calculatorLabel: "Anhydritestrich berechnen",
  },
  "gussasphaltestrich-kosten-pro-qm": {
    serviceSlugs: ["estrich", "bodenleger"],
    serviceSlug: "estrich",
    itemSlug: "gussasphaltestrich",
    calculatorLabel: "Gussasphaltestrich berechnen",
  },
  "sichtestrich-kosten-pro-qm": {
    serviceSlugs: ["estrich", "bodenleger"],
    serviceSlug: "estrich",
    itemSlug: "sichtestrich",
    calculatorLabel: "Sichtestrich berechnen",
  },
  "holztreppe-schleifen-kosten": {
    serviceSlugs: ["treppen", "bodenleger", "maler"],
    serviceSlug: "treppen",
    itemSlug: "holztreppe-schleifen-und-versiegeln",
    calculatorLabel: "Holztreppe berechnen",
  },
  "betontreppe-neuer-belag-kosten": {
    serviceSlugs: ["treppen", "bodenleger", "fliesenleger"],
    serviceSlug: "treppen",
    itemSlug: "betontreppe-mit-neuem-belag",
    calculatorLabel: "Betontreppe berechnen",
  },
  "fliesenspiegel-erneuern-kosten": {
    serviceSlugs: ["kueche", "fliesenleger", "elektriker"],
    serviceSlug: "kueche",
    itemSlug: "fliesenspiegel-erneuern",
    calculatorLabel: "Fliesenspiegel berechnen",
  },
};
