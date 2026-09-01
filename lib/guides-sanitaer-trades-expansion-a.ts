import type { Guide } from "@/lib/guides";

function related(itemSlug: string, label: string) {
  return [
    { label: `${label} Preisdetail`, href: `/kosten/sanitaer/leistung/${itemSlug}` },
    { label: "Sanitär Kosten", href: "/kosten/sanitaer" },
    { label: "Sanitärkosten-Rechner", href: `/rechner/handwerkerkosten?gewerk=sanitaer&leistung=${itemSlug}` },
    { label: "Sanitär Ratgeber", href: "/ratgeber/sanitaer-kosten" },
  ];
}

export const sanitaerTradesExpansionGuidesA: Guide[] = [
  {
    slug: "sanitaer-anfahrt-kosten",
    title: "Sanitär Anfahrt Kosten 2026",
    h1: "Sanitär Anfahrt: Kosten 2026 pro Einsatz",
    description: "Sanitär Anfahrt Kosten 2026: aktueller Richtwert von 20-50 € pro Einsatz, Mindestpauschalen und Angebotsvergleich.",
    eyebrow: "Sanitär Anfahrt 2026",
    intro: "Bei kleinen Sanitärarbeiten kann die Anfahrt einen spürbaren Anteil der Rechnung ausmachen. Sie wird je nach Betrieb separat oder innerhalb einer Servicepauschale berechnet.",
    keyFact: "Sanitär-Anfahrt etwa 20-50 € pro Einsatz",
    sections: [
      { heading: "Was kostet die Anfahrt eines Sanitärbetriebs?", paragraphs: ["Die aktuelle BauKostenRadar-Datenbasis führt etwa 20 bis 50 Euro pro Einsatz als typische Anfahrtskosten.", "Bei größerer Entfernung, Notdienst oder Kleinaufträgen können zusätzliche Mindest- oder Servicepauschalen entstehen."] },
      { heading: "Welche Faktoren verändern den Preis?", paragraphs: ["Anfahrt ist kein einheitlicher bundesweiter Festpreis."], bullets: ["Entfernung zum Betrieb", "Fahrzeit und Verkehr", "Notdienst oder regulärer Termin", "Mindestauftragswert", "Kombination mehrerer Arbeiten in einem Einsatz"] },
      { heading: "Anfahrt und Arbeitszeit getrennt vergleichen", paragraphs: ["Ein niedriger Stundensatz kann durch höhere Anfahrts- oder Mindestpauschalen relativiert werden. Vergleichen Sie deshalb die voraussichtlichen Gesamtkosten des Einsatzes."] },
    ],
    faqs: [
      { question: "Was kostet Sanitär-Anfahrt 2026?", answer: "BauKostenRadar führt aktuell etwa 20 bis 50 Euro pro Einsatz als Orientierung." },
      { question: "Ist die Anfahrt im Stundensatz enthalten?", answer: "Nicht zwingend. Viele Betriebe rechnen sie separat ab." },
      { question: "Kann bei Kleinaufträgen eine Mindestpauschale entstehen?", answer: "Ja. Das sollte vor Beauftragung ausdrücklich geklärt werden." },
    ],
    related: related("sanitaer-anfahrt", "Sanitär Anfahrt"),
  },
  {
    slug: "wasserhahn-montieren-kosten",
    title: "Wasserhahn montieren Kosten 2026",
    h1: "Wasserhahn und Waschtisch-Armatur montieren: Kosten 2026",
    description: "Wasserhahn montieren Kosten 2026: 60-100 € reine Arbeit; Waschtisch-Armatur inkl. Montage 250-600 €. Leistungsumfang richtig vergleichen.",
    eyebrow: "Armatur montieren 2026",
    intro: "Bei Armaturen muss zwischen reinen Montagekosten und einem Komplettpreis inklusive Armatur und Kleinteilen unterschieden werden. BauKostenRadar führt beide Varianten getrennt.",
    keyFact: "Wasserhahn 60-100 € Arbeit; Waschtisch-Armatur komplett 250-600 €",
    sections: [
      { heading: "Was kostet die Montage eines Wasserhahns?", paragraphs: ["Für Wasserhahn montieren führt BauKostenRadar etwa 60 bis 100 Euro reine Arbeitskosten pro Stück.", "Für eine Waschtisch-Armatur inklusive Montage und typischen Kleinteilen liegt die aktuelle Komplettspanne bei etwa 250 bis 600 Euro."] },
      { heading: "Was kann zusätzlich anfallen?", paragraphs: ["Der einfache Austausch setzt brauchbare Anschlüsse voraus."], bullets: ["Neue Eckventile", "Schwer zugängliche Anschlüsse", "Korrodierte Verschraubungen", "Anpassung der Leitungen", "Demontage problematischer Altarmaturen"] },
      { heading: "Arbeits- und Komplettpreis nicht vermischen", paragraphs: ["60 bis 100 Euro beschreibt die reine Montagearbeit. Die Spanne 250 bis 600 Euro enthält bei der Waschtisch-Armatur zusätzlich das Bauteil und typische Kleinteile."] },
    ],
    faqs: [
      { question: "Was kostet Wasserhahn montieren 2026?", answer: "Für die reine Arbeit führt BauKostenRadar etwa 60 bis 100 Euro pro Stück." },
      { question: "Was kostet eine Waschtisch-Armatur inklusive Montage?", answer: "Aktuell etwa 250 bis 600 Euro pro Stück als Komplettorientierung." },
      { question: "Ist die Armatur bei 60 bis 100 Euro enthalten?", answer: "Nein. Diese Position beschreibt die reine Montagearbeit." },
    ],
    related: [
      ...related("wasserhahn-montieren", "Wasserhahn montieren"),
      { label: "Waschtisch-Armatur Preisdetail", href: "/kosten/sanitaer/leistung/waschtisch-armatur-inkl-montage" },
    ],
  },
  {
    slug: "spuelkasten-reparieren-kosten",
    title: "Spülkasten reparieren Kosten 2026",
    h1: "Spülkasten reparieren: Kosten 2026",
    description: "Spülkasten reparieren Kosten 2026: aktueller Richtwert von 80-150 € Arbeitskosten, Ersatzteile und typische Fehlerquellen.",
    eyebrow: "Spülkasten 2026",
    intro: "Ein laufender oder schlecht füllender Spülkasten lässt sich häufig reparieren, ohne das komplette WC zu ersetzen. Der Richtwert bezieht sich auf die Arbeitskosten; Ersatzteile können zusätzlich anfallen.",
    keyFact: "Spülkasten reparieren etwa 80-150 € Arbeit",
    sections: [
      { heading: "Was kostet eine Spülkasten-Reparatur?", paragraphs: ["BauKostenRadar führt aktuell etwa 80 bis 150 Euro Arbeitskosten pro Reparatur.", "Dichtungen, Füllventile, Ablaufventile oder andere Ersatzteile sind nicht automatisch in dieser Spanne enthalten."] },
      { heading: "Welche Fehler erhöhen den Aufwand?", paragraphs: ["Zugänglichkeit und Bauart sind entscheidend."], bullets: ["Unterputz-Spülkasten", "Verkalkte oder alte Bauteile", "Defektes Füllventil", "Undichte Ablaufgarnitur", "Schwer verfügbare Ersatzteile"] },
      { heading: "Reparatur oder Austausch?", paragraphs: ["Bei älteren Anlagen sollte ein Betrieb prüfen, ob die Reparatur wirtschaftlich sinnvoll ist. Für WC-Austausch und neue Komplettlösungen stehen separate Richtwerte zur Verfügung."] },
    ],
    faqs: [
      { question: "Was kostet Spülkasten reparieren 2026?", answer: "BauKostenRadar führt etwa 80 bis 150 Euro reine Arbeitskosten." },
      { question: "Sind Ersatzteile enthalten?", answer: "Nein, nicht automatisch. Material kann zusätzlich berechnet werden." },
      { question: "Ist ein Unterputz-Spülkasten teurer zu reparieren?", answer: "Je nach Zugänglichkeit und Defekt kann der Aufwand höher sein." },
    ],
    related: [
      ...related("spuelkasten-reparieren", "Spülkasten reparieren"),
      { label: "WC austauschen Kosten", href: "/ratgeber/wc-austauschen-kosten" },
    ],
  },
  {
    slug: "waschbecken-montieren-kosten",
    title: "Waschbecken montieren Kosten 2026",
    h1: "Waschbecken montieren: Arbeitskosten 2026",
    description: "Waschbecken montieren Kosten 2026: aktueller Richtwert von 100-200 € Arbeitskosten ohne Becken und Armatur, Zusatzarbeiten und Vergleich.",
    eyebrow: "Waschbecken 2026",
    intro: "Die Montage eines Waschbeckens umfasst bei vorhandenen Anschlüssen typischerweise Befestigung und Anschluss. Becken, Armatur und Sonderanpassungen sind in der Arbeitsposition nicht enthalten.",
    keyFact: "Waschbecken montieren etwa 100-200 € Arbeit",
    sections: [
      { heading: "Was kostet die Waschbecken-Montage?", paragraphs: ["Die aktuelle BauKostenRadar-Datenbasis führt etwa 100 bis 200 Euro reine Arbeitskosten pro Waschbecken.", "Das Waschbecken selbst, die Armatur und größere Änderungen an den Anschlüssen kommen gegebenenfalls hinzu."] },
      { heading: "Welche Zusatzarbeiten sind möglich?", paragraphs: ["Ein einfacher 1:1-Austausch ist günstiger als eine versetzte oder komplett neue Installation."], bullets: ["Neue Armatur", "Neue Eckventile", "Siphon und Ablauf", "Anschlüsse versetzen", "Bohr- und Befestigungsaufwand", "Demontage und Entsorgung"] },
      { heading: "Arbeitskosten sauber vom Material trennen", paragraphs: ["Vergleichen Sie Angebote danach, ob Becken, Armatur, Siphon und Kleinteile enthalten sind. Sonst wirken Arbeits- und Komplettpreise fälschlich direkt vergleichbar."] },
    ],
    faqs: [
      { question: "Was kostet Waschbecken montieren 2026?", answer: "BauKostenRadar führt aktuell etwa 100 bis 200 Euro reine Arbeitskosten." },
      { question: "Ist das Waschbecken enthalten?", answer: "Nein. Die Position beschreibt die Montagearbeit ohne Waschbecken und Armatur." },
      { question: "Was kostet eine Armatur zusätzlich?", answer: "Für Waschtisch-Armatur inklusive Montage führt BauKostenRadar separat etwa 250 bis 600 Euro als Komplettorientierung." },
    ],
    related: [
      ...related("waschbecken-montieren", "Waschbecken montieren"),
      { label: "Wasserhahn und Armatur montieren", href: "/ratgeber/wasserhahn-montieren-kosten" },
    ],
  },
];
