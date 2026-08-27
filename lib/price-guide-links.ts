export type PriceGuideLink = {
  href: string;
  title: string;
  cta: string;
};

const HANDWERKER_RATES: PriceGuideLink = {
  href: "/ratgeber/handwerker-stundensaetze",
  title: "Handwerker-Stundensätze 2026 richtig einordnen",
  cta: "Stundensatz-Ratgeber öffnen",
};

const serviceGuideLinks: Record<string, PriceGuideLink> = {
  badsanierung: {
    href: "/ratgeber/bad-komplett-sanieren-kosten",
    title: "Bad komplett sanieren: Kosten und Preisblöcke",
    cta: "Badsanierungs-Ratgeber öffnen",
  },
  maler: {
    href: "/ratgeber/wohnung-renovieren-kosten",
    title: "Wohnung renovieren: Kosten richtig planen",
    cta: "Renovierungs-Ratgeber öffnen",
  },
  fliesenleger: {
    href: "/ratgeber/wohnung-renovieren-kosten",
    title: "Wohnung renovieren: Kosten richtig planen",
    cta: "Renovierungs-Ratgeber öffnen",
  },
  elektriker: {
    href: "/ratgeber/elektrik-erneuern-altbau",
    title: "Elektrik im Altbau erneuern: Kosten und Preisblöcke",
    cta: "Elektrik-Ratgeber öffnen",
  },
  dachsanierung: {
    href: "/ratgeber/dach-sanieren-kosten-pro-qm",
    title: "Dach sanieren: Kosten pro m² und Beispiele",
    cta: "Dachsanierungs-Ratgeber öffnen",
  },
  bodenleger: {
    href: "/ratgeber/wohnung-renovieren-kosten",
    title: "Wohnung renovieren: Kosten richtig planen",
    cta: "Renovierungs-Ratgeber öffnen",
  },
  trockenbau: {
    href: "/ratgeber/wohnung-renovieren-kosten",
    title: "Wohnung renovieren: Ausbaukosten richtig planen",
    cta: "Ausbau-Ratgeber öffnen",
  },
  sanitaer: {
    href: "/ratgeber/bad-komplett-sanieren-kosten",
    title: "Bad komplett sanieren: Sanitärkosten im Gesamtprojekt",
    cta: "Bad- und Sanitär-Ratgeber öffnen",
  },
  waermepumpe: {
    href: "/ratgeber/heizung-erneuern-kosten",
    title: "Heizung erneuern: Kosten und Systemvergleich",
    cta: "Heizungs-Ratgeber öffnen",
  },
  photovoltaik: {
    href: "/ratgeber/sanierungskosten-einfamilienhaus",
    title: "Sanierungskosten beim Einfamilienhaus planen",
    cta: "Haus-Sanierungs-Ratgeber öffnen",
  },
  daemmung: {
    href: "/ratgeber/haus-sanieren-kosten",
    title: "Haus sanieren: Dämmung im Gesamtbudget",
    cta: "Haus-Sanierungs-Ratgeber öffnen",
  },
  fenster: {
    href: "/ratgeber/fenster-austauschen-kosten-haus",
    title: "Fenster austauschen: Kosten mit Einbau",
    cta: "Fenster-Ratgeber öffnen",
  },
  heizung: {
    href: "/ratgeber/heizung-erneuern-kosten",
    title: "Heizung erneuern: Kosten und Preisblöcke",
    cta: "Heizungs-Ratgeber öffnen",
  },
  fassade: {
    href: "/ratgeber/haus-sanieren-kosten",
    title: "Haus sanieren: Fassadenkosten im Gesamtbudget",
    cta: "Fassaden-Ratgeber öffnen",
  },
  garten: {
    href: "/ratgeber/arbeitskosten-materialkosten",
    title: "Arbeitskosten und Materialkosten richtig vergleichen",
    cta: "Kostenvergleich-Ratgeber öffnen",
  },
  tueren: {
    href: "/ratgeber/6-innentueren-austauschen-kosten",
    title: "6 Innentüren austauschen: Kostenbeispiel 2026",
    cta: "Türen-Ratgeber öffnen",
  },
  estrich: {
    href: "/ratgeber/estrich-100-qm-kosten",
    title: "Estrich 100 m²: Kosten und Beispielbudget",
    cta: "Estrich-Ratgeber öffnen",
  },
  maurer: {
    href: "/ratgeber/innenwand-mauern-kosten",
    title: "Innenwand mauern: Kosten und Beispielrechnung",
    cta: "Maurer-Ratgeber öffnen",
  },
  treppen: {
    href: "/ratgeber/14-treppenstufen-renovieren-kosten",
    title: "14 Treppenstufen renovieren: Kostenbeispiel 2026",
    cta: "Treppen-Ratgeber öffnen",
  },
  kueche: {
    href: "/ratgeber/kueche-10-qm-renovieren-kosten",
    title: "Küche 10 m² renovieren: Kostenbeispiel 2026",
    cta: "Küchen-Ratgeber öffnen",
  },
};

const itemGuideOverrides: Record<string, PriceGuideLink> = {
  "badsanierung:bad-neubau-sanierung": {
    href: "/ratgeber/bad-10-qm-sanieren-kosten",
    title: "Bad 10 m² sanieren: konkretes Kostenbeispiel",
    cta: "10-m²-Bad-Ratgeber öffnen",
  },
  "heizung:fussbodenheizung-nachruesten": {
    href: "/ratgeber/fussbodenheizung-100-qm-kosten",
    title: "Fußbodenheizung 100 m²: Kostenbeispiel 2026",
    cta: "Fußbodenheizungs-Ratgeber öffnen",
  },
  "maler:fassade-streichen-inkl-vorarbeiten": {
    href: "/ratgeber/haus-sanieren-kosten",
    title: "Haus sanieren: Fassadenarbeiten im Gesamtbudget",
    cta: "Haus-Sanierungs-Ratgeber öffnen",
  },
  "daemmung:dachdaemmung-aufsparren": {
    href: "/ratgeber/dach-sanieren-kosten-pro-qm",
    title: "Dach sanieren: Dämmkosten pro m² einordnen",
    cta: "Dach-Ratgeber öffnen",
  },
  "daemmung:dachdaemmung-zwischensparren": {
    href: "/ratgeber/dach-sanieren-kosten-pro-qm",
    title: "Dach sanieren: Dämmkosten pro m² einordnen",
    cta: "Dach-Ratgeber öffnen",
  },
  "tueren:haustuer-kunststoff-inkl-montage": {
    href: "/ratgeber/haus-sanieren-kosten",
    title: "Haus sanieren: Haustüren im Gesamtbudget",
    cta: "Haus-Sanierungs-Ratgeber öffnen",
  },
  "tueren:haustuer-holz-alu-rc2-inkl-montage": {
    href: "/ratgeber/haus-sanieren-kosten",
    title: "Haus sanieren: Haustüren im Gesamtbudget",
    cta: "Haus-Sanierungs-Ratgeber öffnen",
  },
  "maurer:bodenplatte-standard": {
    href: "/ratgeber/haus-sanieren-kosten",
    title: "Haus sanieren: massive Bauteile im Gesamtbudget",
    cta: "Haus-Sanierungs-Ratgeber öffnen",
  },
  "maurer:klinker-verblendmauerwerk": {
    href: "/ratgeber/haus-sanieren-kosten",
    title: "Haus sanieren: Klinker und Fassade im Gesamtbudget",
    cta: "Haus-Sanierungs-Ratgeber öffnen",
  },
};

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  const { serviceSlug, itemSlug, itemName, unit } = options;
  const normalizedUnit = unit.toLocaleLowerCase("de-DE");
  const normalizedName = itemName.toLocaleLowerCase("de-DE");

  if (normalizedUnit.includes("pro stunde") || normalizedName.includes("stundensatz")) {
    return HANDWERKER_RATES;
  }

  if (serviceSlug === "fliesenleger" && (normalizedName.includes("bad") || normalizedName.includes("abdichtung"))) {
    return serviceGuideLinks.badsanierung;
  }

  return itemGuideOverrides[`${serviceSlug}:${itemSlug}`]
    ?? serviceGuideLinks[serviceSlug]
    ?? HANDWERKER_RATES;
}
