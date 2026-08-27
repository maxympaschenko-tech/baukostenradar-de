export type OpportunitySiloConfig = {
  serviceSlugs: string[];
  serviceSlug: string;
  itemSlug: string;
  calculatorLabel: string;
};

export const tertiaryOpportunitySilos: Record<string, OpportunitySiloConfig> = {
  "waende-streichen-kosten-pro-qm": {
    serviceSlugs: ["maler"],
    serviceSlug: "maler",
    itemSlug: "waende-streichen",
    calculatorLabel: "Wände streichen berechnen",
  },
  "tapezieren-kosten-pro-qm": {
    serviceSlugs: ["maler"],
    serviceSlug: "maler",
    itemSlug: "tapezieren-inkl-tapete",
    calculatorLabel: "Tapezieren berechnen",
  },
  "innenputz-q3-kosten-pro-qm": {
    serviceSlugs: ["maler", "trockenbau"],
    serviceSlug: "maler",
    itemSlug: "innenputz-glaetten-q3",
    calculatorLabel: "Innenputz Q3 berechnen",
  },
  "fliesen-verlegen-kosten-pro-qm": {
    serviceSlugs: ["fliesenleger"],
    serviceSlug: "fliesenleger",
    itemSlug: "standard-fliesen-verlegen",
    calculatorLabel: "Fliesen verlegen berechnen",
  },
  "grossformat-fliesen-verlegen-kosten": {
    serviceSlugs: ["fliesenleger"],
    serviceSlug: "fliesenleger",
    itemSlug: "grossformat-ab-80-x-80-cm",
    calculatorLabel: "Großformat-Fliesen berechnen",
  },
  "steckdose-installieren-kosten": {
    serviceSlugs: ["elektriker"],
    serviceSlug: "elektriker",
    itemSlug: "steckdose-installieren",
    calculatorLabel: "Steckdosen berechnen",
  },
  "dach-neu-eindecken-kosten-pro-qm": {
    serviceSlugs: ["dachsanierung", "daemmung"],
    serviceSlug: "dachsanierung",
    itemSlug: "neueindeckung-inkl-lattung",
    calculatorLabel: "Neueindeckung berechnen",
  },
  "vinylboden-verlegen-kosten-pro-qm": {
    serviceSlugs: ["bodenleger", "estrich"],
    serviceSlug: "bodenleger",
    itemSlug: "vinylboden-klick-inkl-material",
    calculatorLabel: "Vinylboden berechnen",
  },
  "verspachtelung-q4-kosten-pro-qm": {
    serviceSlugs: ["trockenbau", "maler"],
    serviceSlug: "trockenbau",
    itemSlug: "verspachtelung-q4",
    calculatorLabel: "Verspachtelung Q4 berechnen",
  },
  "luft-wasser-waermepumpe-kosten": {
    serviceSlugs: ["waermepumpe", "heizung"],
    serviceSlug: "waermepumpe",
    itemSlug: "luft-wasser-waermepumpe-komplett",
    calculatorLabel: "Luft-Wasser-Wärmepumpe berechnen",
  },
  "photovoltaik-10-kwp-kosten": {
    serviceSlugs: ["photovoltaik", "elektriker", "dachsanierung"],
    serviceSlug: "photovoltaik",
    itemSlug: "pv-anlage-10-kwp-inkl-installation",
    calculatorLabel: "PV 10 kWp berechnen",
  },
  "photovoltaik-mit-speicher-kosten": {
    serviceSlugs: ["photovoltaik", "elektriker", "dachsanierung"],
    serviceSlug: "photovoltaik",
    itemSlug: "10-kwp-pv-ca-10-kwh-speicher",
    calculatorLabel: "PV mit Speicher berechnen",
  },
  "fenster-3-fach-verglasung-kosten": {
    serviceSlugs: ["fenster", "daemmung", "fassade"],
    serviceSlug: "fenster",
    itemSlug: "fenster-mit-3-fach-verglasung",
    calculatorLabel: "3-fach Fenster berechnen",
  },
  "gasheizung-austauschen-kosten": {
    serviceSlugs: ["heizung", "waermepumpe"],
    serviceSlug: "heizung",
    itemSlug: "gasheizung-austauschen",
    calculatorLabel: "Gasheizung austauschen berechnen",
  },
  "heizungswartung-kosten": {
    serviceSlugs: ["heizung", "waermepumpe"],
    serviceSlug: "heizung",
    itemSlug: "heizungswartung",
    calculatorLabel: "Heizungswartung berechnen",
  },
  "doppelstabmattenzaun-kosten-pro-meter": {
    serviceSlugs: ["garten"],
    serviceSlug: "garten",
    itemSlug: "doppelstabmattenzaun-inkl-montage",
    calculatorLabel: "Doppelstabmattenzaun berechnen",
  },
  "trockenestrich-kosten-pro-qm": {
    serviceSlugs: ["estrich", "bodenleger"],
    serviceSlug: "estrich",
    itemSlug: "trockenestrich",
    calculatorLabel: "Trockenestrich berechnen",
  },
  "zwischensparrendaemmung-kosten-pro-qm": {
    serviceSlugs: ["daemmung", "dachsanierung"],
    serviceSlug: "daemmung",
    itemSlug: "dachdaemmung-zwischensparren",
    calculatorLabel: "Zwischensparrendämmung berechnen",
  },
  "aufsparrendaemmung-kosten-pro-qm": {
    serviceSlugs: ["daemmung", "dachsanierung"],
    serviceSlug: "daemmung",
    itemSlug: "dachdaemmung-aufsparren",
    calculatorLabel: "Aufsparrendämmung berechnen",
  },
  "putzfassade-kosten-pro-qm": {
    serviceSlugs: ["fassade", "maler", "daemmung"],
    serviceSlug: "fassade",
    itemSlug: "putz-fassade-neu",
    calculatorLabel: "Putzfassade berechnen",
  },
};
