import { handwerkerCalculatorHref } from "@/lib/calculator-links";
import { tertiaryOpportunitySilos } from "@/lib/guide-silo-opportunities-tertiary";
import { regions, services } from "@/lib/pricing";

export type GuideSilo = {
  serviceSlugs: string[];
  calculatorHref: string;
  calculatorLabel: string;
  regionalMode: "cities" | "service";
};

const renovationServices = ["badsanierung", "elektriker", "dachsanierung", "fenster", "heizung", "bodenleger"];

const opportunitySilos: Record<string, {
  serviceSlugs: string[];
  serviceSlug: string;
  itemSlug: string;
  calculatorLabel: string;
}> = {
  "einfahrt-pflastern-kosten": {
    serviceSlugs: ["garten"],
    serviceSlug: "garten",
    itemSlug: "einfahrt-pflastern",
    calculatorLabel: "Einfahrt berechnen",
  },
  "terrasse-pflastern-kosten": {
    serviceSlugs: ["garten"],
    serviceSlug: "garten",
    itemSlug: "terrasse-pflastern-inkl-unterbau",
    calculatorLabel: "Terrasse berechnen",
  },
  "baum-faellen-kosten": {
    serviceSlugs: ["garten"],
    serviceSlug: "garten",
    itemSlug: "baumfaellung-mittelgross-inkl-entsorgung",
    calculatorLabel: "Baumfällung berechnen",
  },
  "rollrasen-kosten-pro-qm": {
    serviceSlugs: ["garten"],
    serviceSlug: "garten",
    itemSlug: "rollrasen-inkl-vorbereitung",
    calculatorLabel: "Rollrasen berechnen",
  },
  "parkett-abschleifen-kosten": {
    serviceSlugs: ["bodenleger", "maler"],
    serviceSlug: "bodenleger",
    itemSlug: "parkett-abschleifen-und-oelen",
    calculatorLabel: "Parkettsanierung berechnen",
  },
  "sicherungskasten-erneuern-kosten": {
    serviceSlugs: ["elektriker"],
    serviceSlug: "elektriker",
    itemSlug: "sicherungskasten-erneuern",
    calculatorLabel: "Sicherungskasten berechnen",
  },
  "dachrinne-erneuern-kosten": {
    serviceSlugs: ["dachsanierung", "fassade"],
    serviceSlug: "dachsanierung",
    itemSlug: "dachrinne-erneuern-zink",
    calculatorLabel: "Dachrinne berechnen",
  },
  "haustuer-einbauen-kosten": {
    serviceSlugs: ["tueren", "fenster", "fassade"],
    serviceSlug: "tueren",
    itemSlug: "haustuer-kunststoff-inkl-montage",
    calculatorLabel: "Haustür berechnen",
  },
  "fassadendaemmung-kosten-pro-qm": {
    serviceSlugs: ["daemmung", "fassade"],
    serviceSlug: "daemmung",
    itemSlug: "fassadendaemmung-wdvs",
    calculatorLabel: "Fassadendämmung berechnen",
  },
  "waermepumpe-wartung-kosten": {
    serviceSlugs: ["waermepumpe", "heizung"],
    serviceSlug: "waermepumpe",
    itemSlug: "wartung-waermepumpe",
    calculatorLabel: "Wärmepumpen-Wartung berechnen",
  },
  "stromspeicher-kosten-pro-kwh": {
    serviceSlugs: ["photovoltaik", "elektriker"],
    serviceSlug: "photovoltaik",
    itemSlug: "stromspeicher-lfp",
    calculatorLabel: "Stromspeicher berechnen",
  },
  "fenstereinbau-kosten": {
    serviceSlugs: ["fenster", "daemmung", "fassade"],
    serviceSlug: "fenster",
    itemSlug: "fenstereinbau",
    calculatorLabel: "Fenstereinbau berechnen",
  },
  "trockenbauwand-kosten-pro-qm": {
    serviceSlugs: ["trockenbau", "maler"],
    serviceSlug: "trockenbau",
    itemSlug: "trockenbauwand-beidseitig-beplankt",
    calculatorLabel: "Trockenbauwand berechnen",
  },
  "heizkoerper-montieren-kosten": {
    serviceSlugs: ["heizung", "sanitaer"],
    serviceSlug: "heizung",
    itemSlug: "heizkoerper-montieren",
    calculatorLabel: "Heizkörper berechnen",
  },
  "bodenplatte-kosten-pro-qm": {
    serviceSlugs: ["maurer"],
    serviceSlug: "maurer",
    itemSlug: "bodenplatte-standard",
    calculatorLabel: "Bodenplatte berechnen",
  },
  "kuechenfronten-erneuern-kosten": {
    serviceSlugs: ["kueche", "maler"],
    serviceSlug: "kueche",
    itemSlug: "kuechenfronten-austauschen-oder-lackieren",
    calculatorLabel: "Küchenfronten berechnen",
  },
  "kuechenarbeitsplatte-kosten": {
    serviceSlugs: ["kueche", "sanitaer"],
    serviceSlug: "kueche",
    itemSlug: "neue-arbeitsplatte",
    calculatorLabel: "Arbeitsplatte berechnen",
  },
  "parkett-verlegen-kosten-pro-qm": {
    serviceSlugs: ["bodenleger", "estrich"],
    serviceSlug: "bodenleger",
    itemSlug: "parkett-verlegen-inkl-material",
    calculatorLabel: "Parkett berechnen",
  },
  "laminat-verlegen-kosten-pro-qm": {
    serviceSlugs: ["bodenleger", "estrich"],
    serviceSlug: "bodenleger",
    itemSlug: "laminat-verlegen",
    calculatorLabel: "Laminat berechnen",
  },
  "innendaemmung-kosten-pro-qm": {
    serviceSlugs: ["daemmung", "trockenbau", "fassade"],
    serviceSlug: "daemmung",
    itemSlug: "innendaemmung",
    calculatorLabel: "Innendämmung berechnen",
  },
  ...tertiaryOpportunitySilos,
};

const scenarioCalculatorLinks: Record<string, Pick<GuideSilo, "calculatorHref" | "calculatorLabel">> = {
  "dach-150-qm-kosten": {
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "dachsanierung",
      itemSlug: "neueindeckung-inkl-lattung",
      quantity: 150,
    }),
    calculatorLabel: "150 m² Dach berechnen",
  },
  "20-fenster-austauschen-kosten": {
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "fenster",
      itemSlug: "fenster-mit-2-fach-verglasung",
      quantity: 20,
    }),
    calculatorLabel: "20 Fenster berechnen",
  },
  "bad-10-qm-sanieren-kosten": {
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "badsanierung",
      itemSlug: "bad-neubau-sanierung",
      quantity: 10,
    }),
    calculatorLabel: "10 m² Bad berechnen",
  },
  "fussbodenheizung-100-qm-kosten": {
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "heizung",
      itemSlug: "fussbodenheizung-nachruesten",
      quantity: 100,
    }),
    calculatorLabel: "100 m² Fußbodenheizung berechnen",
  },
  "6-innentueren-austauschen-kosten": {
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "tueren",
      itemSlug: "innentuer-einbauen-inkl-zarge",
      quantity: 6,
    }),
    calculatorLabel: "6 Innentüren berechnen",
  },
  "estrich-100-qm-kosten": {
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "estrich",
      itemSlug: "zementestrich-komplett",
      quantity: 100,
    }),
    calculatorLabel: "100 m² Estrich berechnen",
  },
  "innenwand-mauern-kosten": {
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "maurer",
      itemSlug: "mauerarbeiten-fertige-wand",
      quantity: 20,
    }),
    calculatorLabel: "20 m² Innenwand berechnen",
  },
  "14-treppenstufen-renovieren-kosten": {
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "treppen",
      itemSlug: "holzstufe-schleifen-und-versiegeln",
      quantity: 14,
    }),
    calculatorLabel: "14 Treppenstufen berechnen",
  },
  "kueche-10-qm-renovieren-kosten": {
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "kueche",
      itemSlug: "kuechen-renovierung-ohne-moebel",
      quantity: 10,
    }),
    calculatorLabel: "10 m² Küche berechnen",
  },
};

export function getGuideSilo(slug: string): GuideSilo {
  const opportunity = opportunitySilos[slug];
  if (opportunity) {
    return {
      serviceSlugs: opportunity.serviceSlugs,
      calculatorHref: handwerkerCalculatorHref({
        serviceSlug: opportunity.serviceSlug,
        itemSlug: opportunity.itemSlug,
      }),
      calculatorLabel: opportunity.calculatorLabel,
      regionalMode: "service",
    };
  }

  const scenarioCalculator = scenarioCalculatorLinks[slug];

  if (slug.includes("maler")) {
    return {
      serviceSlugs: ["maler", "trockenbau", "fassade"],
      calculatorHref: handwerkerCalculatorHref({ serviceSlug: "maler" }),
      calculatorLabel: "Malerarbeiten berechnen",
      regionalMode: "service",
    };
  }

  if (slug.includes("fliesenleger")) {
    return {
      serviceSlugs: ["fliesenleger", "badsanierung", "sanitaer"],
      calculatorHref: handwerkerCalculatorHref({ serviceSlug: "fliesenleger" }),
      calculatorLabel: "Fliesenkosten berechnen",
      regionalMode: "service",
    };
  }

  if (slug.includes("bodenleger")) {
    return {
      serviceSlugs: ["bodenleger", "estrich", "heizung"],
      calculatorHref: handwerkerCalculatorHref({ serviceSlug: "bodenleger" }),
      calculatorLabel: "Bodenkosten berechnen",
      regionalMode: "service",
    };
  }

  if (slug.includes("trockenbau")) {
    return {
      serviceSlugs: ["trockenbau", "maler", "elektriker"],
      calculatorHref: handwerkerCalculatorHref({ serviceSlug: "trockenbau" }),
      calculatorLabel: "Trockenbaukosten berechnen",
      regionalMode: "service",
    };
  }

  if (slug.includes("sanitaer")) {
    return {
      serviceSlugs: ["sanitaer", "badsanierung", "fliesenleger"],
      calculatorHref: handwerkerCalculatorHref({ serviceSlug: "sanitaer" }),
      calculatorLabel: "Sanitärkosten berechnen",
      regionalMode: "service",
    };
  }

  if (slug.includes("waermepumpe")) {
    return {
      serviceSlugs: ["waermepumpe", "heizung", "daemmung"],
      calculatorHref: handwerkerCalculatorHref({ serviceSlug: "waermepumpe" }),
      calculatorLabel: "Wärmepumpenkosten berechnen",
      regionalMode: "service",
    };
  }

  if (slug.includes("photovoltaik")) {
    return {
      serviceSlugs: ["photovoltaik", "elektriker", "dachsanierung"],
      calculatorHref: handwerkerCalculatorHref({ serviceSlug: "photovoltaik" }),
      calculatorLabel: "Photovoltaikkosten berechnen",
      regionalMode: "service",
    };
  }

  if (slug.startsWith("daemmung")) {
    return {
      serviceSlugs: ["daemmung", "fassade", "dachsanierung"],
      calculatorHref: handwerkerCalculatorHref({ serviceSlug: "daemmung" }),
      calculatorLabel: "Dämmkosten berechnen",
      regionalMode: "service",
    };
  }

  if (slug.includes("fassade")) {
    return {
      serviceSlugs: ["fassade", "daemmung", "maler"],
      calculatorHref: handwerkerCalculatorHref({ serviceSlug: "fassade" }),
      calculatorLabel: "Fassadenkosten berechnen",
      regionalMode: "service",
    };
  }

  if (slug.includes("garten")) {
    return {
      serviceSlugs: ["garten"],
      calculatorHref: handwerkerCalculatorHref({ serviceSlug: "garten" }),
      calculatorLabel: "Gartenkosten berechnen",
      regionalMode: "service",
    };
  }

  if (slug.includes("dach")) {
    return {
      serviceSlugs: ["dachsanierung", "daemmung"],
      calculatorHref: scenarioCalculator?.calculatorHref ?? "/rechner/handwerkerkosten",
      calculatorLabel: scenarioCalculator?.calculatorLabel ?? "Dachkosten berechnen",
      regionalMode: "service",
    };
  }

  if (slug.includes("fenster")) {
    return {
      serviceSlugs: ["fenster", "daemmung", "fassade"],
      calculatorHref: scenarioCalculator?.calculatorHref ?? "/rechner/handwerkerkosten",
      calculatorLabel: scenarioCalculator?.calculatorLabel ?? "Fensterkosten berechnen",
      regionalMode: "service",
    };
  }

  if (slug.includes("elektrik")) {
    return {
      serviceSlugs: ["elektriker"],
      calculatorHref: "/rechner/handwerkerkosten",
      calculatorLabel: "Elektrikkosten berechnen",
      regionalMode: "service",
    };
  }

  if (slug.includes("fussbodenheizung") || slug.includes("heizung")) {
    return {
      serviceSlugs: ["heizung", "waermepumpe"],
      calculatorHref: scenarioCalculator?.calculatorHref ?? "/rechner/handwerkerkosten",
      calculatorLabel: scenarioCalculator?.calculatorLabel ?? "Heizungskosten berechnen",
      regionalMode: "service",
    };
  }

  if (slug.includes("bad")) {
    return {
      serviceSlugs: ["badsanierung", "sanitaer", "fliesenleger"],
      calculatorHref: scenarioCalculator?.calculatorHref ?? "/rechner/handwerkerkosten",
      calculatorLabel: scenarioCalculator?.calculatorLabel ?? "Badkosten berechnen",
      regionalMode: "service",
    };
  }

  if (slug.includes("estrich")) {
    return {
      serviceSlugs: ["estrich", "bodenleger", "heizung"],
      calculatorHref: scenarioCalculator?.calculatorHref ?? handwerkerCalculatorHref({ serviceSlug: "estrich" }),
      calculatorLabel: scenarioCalculator?.calculatorLabel ?? "Estrichkosten berechnen",
      regionalMode: "service",
    };
  }

  if (slug.includes("innenwand")) {
    return {
      serviceSlugs: ["maurer", "trockenbau", "maler"],
      calculatorHref: scenarioCalculator?.calculatorHref ?? handwerkerCalculatorHref({ serviceSlug: "maurer" }),
      calculatorLabel: scenarioCalculator?.calculatorLabel ?? "Maurerkosten berechnen",
      regionalMode: "service",
    };
  }

  if (slug.includes("treppen")) {
    return {
      serviceSlugs: ["treppen", "bodenleger", "maler"],
      calculatorHref: scenarioCalculator?.calculatorHref ?? handwerkerCalculatorHref({ serviceSlug: "treppen" }),
      calculatorLabel: scenarioCalculator?.calculatorLabel ?? "Treppenkosten berechnen",
      regionalMode: "service",
    };
  }

  if (slug.includes("tueren")) {
    return {
      serviceSlugs: ["tueren", "maler", "trockenbau"],
      calculatorHref: scenarioCalculator?.calculatorHref ?? handwerkerCalculatorHref({ serviceSlug: "tueren" }),
      calculatorLabel: scenarioCalculator?.calculatorLabel ?? "Türkosten berechnen",
      regionalMode: "service",
    };
  }

  if (slug.includes("kueche")) {
    return {
      serviceSlugs: ["kueche", "elektriker", "sanitaer", "bodenleger"],
      calculatorHref: scenarioCalculator?.calculatorHref ?? handwerkerCalculatorHref({ serviceSlug: "kueche" }),
      calculatorLabel: scenarioCalculator?.calculatorLabel ?? "Küchenkosten berechnen",
      regionalMode: "service",
    };
  }

  if (slug.includes("arbeitskosten") || slug.includes("stundensaetze")) {
    return {
      serviceSlugs: ["elektriker", "sanitaer", "heizung", "trockenbau"],
      calculatorHref: "/rechner/handwerkerkosten",
      calculatorLabel: "Handwerkerkosten berechnen",
      regionalMode: "service",
    };
  }

  return {
    serviceSlugs: renovationServices,
    calculatorHref: "/rechner/renovierungskosten",
    calculatorLabel: "Renovierung berechnen",
    regionalMode: "cities",
  };
}

export function getGuideSiloServices(slug: string) {
  const config = getGuideSilo(slug);
  return config.serviceSlugs
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
}

export function getGuideRegions() {
  return regions.filter((region) => region.value !== "de");
}

export function getGuideRegionalServices(slug: string, limit = 3) {
  return getGuideSiloServices(slug).slice(0, Math.max(1, limit));
}
