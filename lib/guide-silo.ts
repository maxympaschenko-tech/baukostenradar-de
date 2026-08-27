import { handwerkerCalculatorHref } from "@/lib/calculator-links";
import { regions, services } from "@/lib/pricing";

export type GuideSilo = {
  serviceSlugs: string[];
  calculatorHref: string;
  calculatorLabel: string;
  regionalMode: "cities" | "service";
};

const renovationServices = ["badsanierung", "elektriker", "dachsanierung", "fenster", "heizung", "bodenleger"];

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
};

export function getGuideSilo(slug: string): GuideSilo {
  const scenarioCalculator = scenarioCalculatorLinks[slug];

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
      serviceSlugs: ["bodenleger"],
      calculatorHref: "/rechner/handwerkerkosten",
      calculatorLabel: "Bodenkosten berechnen",
      regionalMode: "service",
    };
  }

  if (slug.includes("innenwand")) {
    return {
      serviceSlugs: ["trockenbau", "maler"],
      calculatorHref: "/rechner/handwerkerkosten",
      calculatorLabel: "Ausbaukosten berechnen",
      regionalMode: "service",
    };
  }

  if (slug.includes("treppen")) {
    return {
      serviceSlugs: ["bodenleger", "maler"],
      calculatorHref: "/rechner/handwerkerkosten",
      calculatorLabel: "Handwerkerkosten berechnen",
      regionalMode: "service",
    };
  }

  if (slug.includes("tueren")) {
    return {
      serviceSlugs: ["trockenbau", "maler", "bodenleger"],
      calculatorHref: "/rechner/handwerkerkosten",
      calculatorLabel: "Handwerkerkosten berechnen",
      regionalMode: "service",
    };
  }

  if (slug.includes("kueche")) {
    return {
      serviceSlugs: ["elektriker", "sanitaer", "bodenleger", "maler"],
      calculatorHref: "/rechner/handwerkerkosten",
      calculatorLabel: "Küchenarbeiten berechnen",
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
  return regions.filter((region) => region.value !== "de").slice(0, 4);
}
