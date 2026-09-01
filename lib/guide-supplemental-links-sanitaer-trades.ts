import {
  withSupplementalGuideLinks as withBodenSupplementalGuideLinks,
  type GuideSupplementalLink,
} from "./guide-supplemental-links-boden";

export type { GuideSupplementalLink } from "./guide-supplemental-links-boden";

type Peer = GuideSupplementalLink & { slug: string };

const sanitaerPeers: Peer[] = [
  { slug: "sanitaer-kosten", label: "Sanitär Kosten", href: "/ratgeber/sanitaer-kosten" },
  { slug: "sanitaer-anfahrt-kosten", label: "Sanitär Anfahrt Kosten", href: "/ratgeber/sanitaer-anfahrt-kosten" },
  { slug: "wasserhahn-montieren-kosten", label: "Wasserhahn montieren Kosten", href: "/ratgeber/wasserhahn-montieren-kosten" },
  { slug: "waschbecken-montieren-kosten", label: "Waschbecken montieren Kosten", href: "/ratgeber/waschbecken-montieren-kosten" },
  { slug: "wc-austauschen-kosten", label: "WC austauschen Kosten", href: "/ratgeber/wc-austauschen-kosten" },
  { slug: "spuelkasten-reparieren-kosten", label: "Spülkasten reparieren Kosten", href: "/ratgeber/spuelkasten-reparieren-kosten" },
  { slug: "dusch-wc-kosten", label: "Dusch-WC Kosten", href: "/ratgeber/dusch-wc-kosten" },
  { slug: "dusche-einbauen-kosten", label: "Dusche einbauen Kosten", href: "/ratgeber/dusche-einbauen-kosten" },
  { slug: "bodengleiche-dusche-kosten", label: "Bodengleiche Dusche Kosten", href: "/ratgeber/bodengleiche-dusche-kosten" },
  { slug: "badewanne-einbauen-kosten", label: "Badewanne einbauen Kosten", href: "/ratgeber/badewanne-einbauen-kosten" },
  { slug: "badewanne-durch-dusche-ersetzen-kosten", label: "Badewanne durch Dusche ersetzen", href: "/ratgeber/badewanne-durch-dusche-ersetzen-kosten" },
  { slug: "rohrverstopfung-beseitigen-kosten", label: "Rohrverstopfung beseitigen Kosten", href: "/ratgeber/rohrverstopfung-beseitigen-kosten" },
  { slug: "sanitaerobjekte-bad-kosten", label: "Sanitärobjekte und Armaturen Kosten", href: "/ratgeber/sanitaerobjekte-bad-kosten" },
  { slug: "bad-entkernen-kosten", label: "Bad entkernen Kosten", href: "/ratgeber/bad-entkernen-kosten" },
];

const trockenbauPeers: Peer[] = [
  { slug: "trockenbau-kosten-pro-qm", label: "Trockenbau Kosten pro m²", href: "/ratgeber/trockenbau-kosten-pro-qm" },
  { slug: "trockenbauer-stundensatz", label: "Trockenbauer Stundensatz", href: "/ratgeber/trockenbauer-stundensatz" },
  { slug: "trockenbauwand-kosten-pro-qm", label: "Trockenbauwand Kosten", href: "/ratgeber/trockenbauwand-kosten-pro-qm" },
  { slug: "trennwand-holz-kosten-pro-qm", label: "Holz-Trennwand Kosten", href: "/ratgeber/trennwand-holz-kosten-pro-qm" },
  { slug: "vorsatzschale-kosten-pro-qm", label: "Vorsatzschale Kosten", href: "/ratgeber/vorsatzschale-kosten-pro-qm" },
  { slug: "decke-abhaengen-kosten-pro-qm", label: "Decke abhängen Kosten", href: "/ratgeber/decke-abhaengen-kosten-pro-qm" },
  { slug: "dachschraege-verkleiden-kosten-pro-qm", label: "Dachschräge verkleiden Kosten", href: "/ratgeber/dachschraege-verkleiden-kosten-pro-qm" },
  { slug: "spanndecke-kosten-pro-qm", label: "Spanndecke Kosten", href: "/ratgeber/spanndecke-kosten-pro-qm" },
  { slug: "verspachtelung-q3-kosten-pro-qm", label: "Verspachtelung Q3 Kosten", href: "/ratgeber/verspachtelung-q3-kosten-pro-qm" },
  { slug: "verspachtelung-q4-kosten-pro-qm", label: "Verspachtelung Q4 Kosten", href: "/ratgeber/verspachtelung-q4-kosten-pro-qm" },
];

const abrissPeers: Peer[] = [
  { slug: "haus-abreissen-kosten", label: "Haus abreißen Kosten", href: "/ratgeber/haus-abreissen-kosten" },
  { slug: "abbruch-kosten-pro-m3", label: "Abbruch Kosten pro m³", href: "/ratgeber/abbruch-kosten-pro-m3" },
  { slug: "innenabbruch-einfamilienhaus-kosten", label: "Innenabbruch Einfamilienhaus Kosten", href: "/ratgeber/innenabbruch-einfamilienhaus-kosten" },
  { slug: "industriehalle-abbrechen-kosten-pro-qm", label: "Industriehalle abbrechen Kosten", href: "/ratgeber/industriehalle-abbrechen-kosten-pro-qm" },
  { slug: "bauschuttcontainer-30-m3-kosten", label: "30-m³-Bauschuttcontainer Kosten", href: "/ratgeber/bauschuttcontainer-30-m3-kosten" },
  { slug: "bauschutt-entsorgen-kosten", label: "Bauschutt entsorgen Kosten", href: "/ratgeber/bauschutt-entsorgen-kosten" },
];

const abrissDetailLinks: Record<string, GuideSupplementalLink[]> = {
  "haus-abreissen-kosten": [
    { label: "Hausabriss Standard pro m²", href: "/kosten/abriss-entsorgung/leistung/hausabriss-standard-je-quadratmeter" },
    { label: "Hausabriss mit Keller", href: "/kosten/abriss-entsorgung/leistung/hausabriss-mit-keller" },
    { label: "Hausabriss mit Schadstoffbelastung", href: "/kosten/abriss-entsorgung/leistung/hausabriss-mit-schadstoffbelastung" },
    { label: "Schadstoffgutachten vor Abriss", href: "/kosten/abriss-entsorgung/leistung/schadstoffgutachten-vor-abriss" },
    { label: "Abrissgenehmigung oder Anzeige", href: "/kosten/abriss-entsorgung/leistung/abrissgenehmigung-oder-anzeige" },
  ],
  "innenabbruch-einfamilienhaus-kosten": [
    { label: "Entkernung und Vorarbeiten", href: "/kosten/abriss-entsorgung/leistung/entkernung-und-vorarbeiten" },
  ],
};

function addPeers(base: GuideSupplementalLink[], slug: string, peers: Peer[]) {
  const slugs = new Set(peers.map((peer) => peer.slug));
  if (!slugs.has(slug)) return base;
  return [
    ...base,
    ...peers.filter((peer) => peer.slug !== slug).map(({ label, href }) => ({ label, href })),
  ].filter((link, index, links) => links.findIndex((candidate) => candidate.href === link.href) === index);
}

function addDetails(base: GuideSupplementalLink[], slug: string) {
  const details = abrissDetailLinks[slug] ?? [];
  return [...base, ...details].filter((link, index, links) => links.findIndex((candidate) => candidate.href === link.href) === index);
}

export function withSupplementalGuideLinks(slug: string, related: GuideSupplementalLink[]): GuideSupplementalLink[] {
  const base = withBodenSupplementalGuideLinks(slug, related);
  const withPeers = addPeers(addPeers(addPeers(base, slug, sanitaerPeers), slug, trockenbauPeers), slug, abrissPeers);
  return addDetails(withPeers, slug);
}
