export type SanitaerPriceGuideLink = {
  href: string;
  title: string;
  cta: string;
};

export const sanitaerItemGuideOverrides: Record<string, SanitaerPriceGuideLink> = {
  "sanitaer:stand-wc-1-1-tauschen-inkl-keramik": {
    href: "/ratgeber/wc-austauschen-kosten",
    title: "WC austauschen: Kosten für Stand-WC und Wand-WC",
    cta: "WC-Austausch-Ratgeber öffnen",
  },
  "sanitaer:stand-wc-mit-neuem-aufputzspuelkasten-tauschen": {
    href: "/ratgeber/wc-austauschen-kosten",
    title: "WC austauschen: Kosten für Stand-WC und Wand-WC",
    cta: "WC-Austausch-Ratgeber öffnen",
  },
  "sanitaer:wand-wc-tauschen-bei-vorhandenem-vorwandelement": {
    href: "/ratgeber/wc-austauschen-kosten",
    title: "WC austauschen: Kosten für Stand-WC und Wand-WC",
    cta: "WC-Austausch-Ratgeber öffnen",
  },
  "sanitaer:dusch-wc-einbauen": {
    href: "/ratgeber/dusch-wc-kosten",
    title: "Dusch-WC: Kosten, Einbau und Voraussetzungen",
    cta: "Dusch-WC-Ratgeber öffnen",
  },
  "sanitaer:bodengleiche-dusche-inkl-abdichtung-ablauf-und-verfliesung": {
    href: "/ratgeber/bodengleiche-dusche-kosten",
    title: "Bodengleiche Dusche: Kosten inklusive Abdichtung, Ablauf und Verfliesung",
    cta: "Duschen-Ratgeber öffnen",
  },
  "sanitaer:klassische-duschwanne-komplett-einbauen": {
    href: "/ratgeber/bodengleiche-dusche-kosten",
    title: "Bodengleiche Dusche oder klassische Duschwanne: Kosten vergleichen",
    cta: "Duschen-Ratgeber öffnen",
  },
  "sanitaer:badewanne-durch-duschkabine-ersetzen-komplett": {
    href: "/ratgeber/badewanne-durch-dusche-ersetzen-kosten",
    title: "Badewanne durch Dusche ersetzen: Kosten für den Komplettumbau",
    cta: "Wanne-zu-Dusche-Ratgeber öffnen",
  },
};
