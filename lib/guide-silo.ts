import { regions, services } from "@/lib/pricing";

export type GuideSilo = {
  serviceSlugs: string[];
  calculatorHref: string;
  calculatorLabel: string;
  regionalMode: "cities" | "service";
};

const renovationServices = ["badsanierung", "elektriker", "dachsanierung", "fenster", "heizung", "bodenleger"];

export function getGuideSilo(slug: string): GuideSilo {
  if (slug.includes("dach")) {
    return {
      serviceSlugs: ["dachsanierung", "daemmung"],
      calculatorHref: "/rechner/handwerkerkosten",
      calculatorLabel: "Dachkosten berechnen",
      regionalMode: "service",
    };
  }

  if (slug.includes("fenster")) {
    return {
      serviceSlugs: ["fenster", "daemmung", "fassade"],
      calculatorHref: "/rechner/handwerkerkosten",
      calculatorLabel: "Fensterkosten berechnen",
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
      calculatorHref: "/rechner/handwerkerkosten",
      calculatorLabel: "Heizungskosten berechnen",
      regionalMode: "service",
    };
  }

  if (slug.includes("bad")) {
    return {
      serviceSlugs: ["badsanierung", "sanitaer", "fliesenleger"],
      calculatorHref: "/rechner/handwerkerkosten",
      calculatorLabel: "Badkosten berechnen",
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
