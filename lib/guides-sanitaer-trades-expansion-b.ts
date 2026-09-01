import type { Guide } from "@/lib/guides";

function related(itemSlug: string, label: string) {
  return [
    { label: `${label} Preisdetail`, href: `/kosten/sanitaer/leistung/${itemSlug}` },
    { label: "Sanitär Kosten", href: "/kosten/sanitaer" },
    { label: "Sanitärkosten-Rechner", href: `/rechner/handwerkerkosten?gewerk=sanitaer&leistung=${itemSlug}` },
    { label: "Sanitär Ratgeber", href: "/ratgeber/sanitaer-kosten" },
  ];
}

export const sanitaerTradesExpansionGuidesB: Guide[] = [
  {
    slug: "dusche-einbauen-kosten",
    title: "Dusche einbauen Kosten 2026",
    h1: "Dusche einbauen: Arbeitskosten 2026",
    description: "Dusche einbauen Kosten 2026: aktueller Arbeitsrichtwert von 300-600 € ohne Material, Abdichtung, Anschlüsse und Vergleich mit Komplettlösungen.",
    eyebrow: "Dusche montieren 2026",
    intro: "Eine einfache Duschmontage bei vorhandenen Anschlüssen ist nicht mit dem Komplettpreis einer bodengleichen Dusche inklusive Abdichtung und Verfliesung vergleichbar. BauKostenRadar trennt deshalb Arbeits- und Komplettpositionen.",
    keyFact: "Dusche einbauen etwa 300-600 € Arbeit",
    sections: [
      { heading: "Was kostet der Einbau einer Dusche?", paragraphs: ["Die aktuelle BauKostenRadar-Datenbasis führt etwa 300 bis 600 Euro reine Arbeitskosten für eine typische Duschmontage.", "Material, größere Umbauten, Abdichtung und Fliesenarbeiten sind in dieser Arbeitsposition nicht automatisch enthalten."] },
      { heading: "Welche Arbeiten können zusätzlich anfallen?", paragraphs: ["Der Aufwand steigt, wenn nicht nur eine vorhandene Dusche ersetzt wird."], bullets: ["Abdichtung", "Ablauf versetzen", "Wasseranschlüsse ändern", "Duschwanne oder Rinne", "Duschabtrennung", "Fliesen- und Trockenbauarbeiten"] },
      { heading: "Arbeitskosten und bodengleiche Komplettlösung unterscheiden", paragraphs: ["Für eine bodengleiche Dusche inklusive Abdichtung, Ablauf und Verfliesung führt BauKostenRadar eine eigene Komplettposition. Sie darf nicht zum reinen Montagepreis addiert oder direkt damit verwechselt werden."] },
    ],
    faqs: [
      { question: "Was kostet Dusche einbauen 2026?", answer: "BauKostenRadar führt aktuell etwa 300 bis 600 Euro reine Arbeitskosten." },
      { question: "Ist die Dusche selbst enthalten?", answer: "Nein. Die Position beschreibt die Montagearbeit ohne Material." },
      { question: "Ist Abdichtung enthalten?", answer: "Nicht automatisch. Bei einer kompletten bodengleichen Dusche wird Abdichtung separat beziehungsweise innerhalb der Komplettposition berücksichtigt." },
    ],
    related: [
      ...related("dusche-einbauen", "Dusche einbauen"),
      { label: "Bodengleiche Dusche Kosten", href: "/ratgeber/bodengleiche-dusche-kosten" },
      { label: "Badewanne durch Dusche ersetzen", href: "/ratgeber/badewanne-durch-dusche-ersetzen-kosten" },
    ],
  },
  {
    slug: "badewanne-einbauen-kosten",
    title: "Badewanne einbauen Kosten 2026",
    h1: "Badewanne einbauen: Arbeitskosten 2026",
    description: "Badewanne einbauen Kosten 2026: aktueller Richtwert von 400-800 € reine Arbeitskosten ohne Wanne, Armatur und aufwendige Verkleidung.",
    eyebrow: "Badewanne 2026",
    intro: "Beim Einbau einer Badewanne hängt der Aufwand von Anschlüssen, Wannenträger, Ablauf und Verkleidung ab. Der aktuelle Richtwert beschreibt die reine Einbauarbeit, nicht die komplette Wanne mit Ausstattung.",
    keyFact: "Badewanne einbauen etwa 400-800 € Arbeit",
    sections: [
      { heading: "Was kostet Badewanne einbauen?", paragraphs: ["BauKostenRadar führt aktuell etwa 400 bis 800 Euro reine Arbeitskosten pro Badewanne.", "Wanne, Armatur und eine aufwendige Verkleidung sind in dieser Position nicht enthalten."] },
      { heading: "Welche Faktoren verändern die Montagekosten?", paragraphs: ["Ein 1:1-Austausch bei vorhandenen Anschlüssen ist meist einfacher als ein neuer Standort."], bullets: ["Wannentyp und Gewicht", "Wannenträger oder Füße", "Ablauf und Überlauf", "Armatur und Anschlüsse", "Verkleidung", "Demontage der alten Wanne"] },
      { heading: "Einbaupreis und komplette Badsanierung trennen", paragraphs: ["Die Montage einer einzelnen Wanne ist nur ein Kostenblock. Fliesen, Abdichtung, Leitungen und weitere Sanitärobjekte müssen bei einer Badsanierung separat berücksichtigt werden."] },
    ],
    faqs: [
      { question: "Was kostet Badewanne einbauen 2026?", answer: "BauKostenRadar führt etwa 400 bis 800 Euro reine Arbeitskosten." },
      { question: "Ist die Badewanne enthalten?", answer: "Nein. Die Position umfasst die Einbauarbeit ohne Wanne und Armatur." },
      { question: "Ist die Verkleidung enthalten?", answer: "Eine aufwendige Wannenverkleidung kann zusätzlich anfallen." },
    ],
    related: [
      ...related("badewanne-einbauen", "Badewanne einbauen"),
      { label: "Badewanne durch Dusche ersetzen", href: "/ratgeber/badewanne-durch-dusche-ersetzen-kosten" },
      { label: "Bad komplett sanieren", href: "/ratgeber/bad-komplett-sanieren-kosten" },
    ],
  },
  {
    slug: "rohrverstopfung-beseitigen-kosten",
    title: "Rohrverstopfung beseitigen Kosten 2026",
    h1: "Rohrverstopfung beseitigen: Kosten 2026 pro Einsatz",
    description: "Rohrverstopfung beseitigen Kosten 2026: aktueller Richtwert von 80-250 € pro regulärem Einsatz, Notdienst und Kostentreiber.",
    eyebrow: "Rohrreinigung 2026",
    intro: "Die Kosten einer Rohrverstopfung hängen vor allem von Lage und Ursache der Blockade ab. Der aktuelle Richtwert gilt für reguläre Einsätze; Notdienst und Spezialgeräte können deutlich darüber liegen.",
    keyFact: "Rohrverstopfung beseitigen etwa 80-250 € pro regulärem Einsatz",
    sections: [
      { heading: "Was kostet das Beseitigen einer Rohrverstopfung?", paragraphs: ["Die aktuelle BauKostenRadar-Datenbasis führt für reguläre Einsätze etwa 80 bis 250 Euro.", "Bei Notdienst, langen Leitungswegen oder Spezialtechnik kann die Rechnung höher ausfallen."] },
      { heading: "Welche Faktoren treiben die Kosten?", paragraphs: ["Nicht jede Verstopfung lässt sich mit demselben Aufwand lösen."], bullets: ["Tiefe der Verstopfung", "Zugänglichkeit", "Mechanische Spirale oder Hochdrucktechnik", "Kamerauntersuchung", "Notdienstzeiten", "Wiederkehrende Schäden"] },
      { heading: "Vor Beauftragung Preisstruktur klären", paragraphs: ["Fragen Sie nach Anfahrt, Mindestpauschale, Geräteaufschlägen und Zuschlägen für Abend, Nacht oder Wochenende. So lässt sich ein scheinbar niedriger Grundpreis besser einordnen."] },
    ],
    faqs: [
      { question: "Was kostet Rohrverstopfung beseitigen 2026?", answer: "BauKostenRadar führt für reguläre Einsätze etwa 80 bis 250 Euro als Orientierung." },
      { question: "Ist Notdienst enthalten?", answer: "Nein. Zuschläge für Notdienst können den Preis erhöhen." },
      { question: "Kann eine Kamerauntersuchung extra kosten?", answer: "Ja. Spezialgeräte und zusätzliche Diagnoseleistungen können separat berechnet werden." },
    ],
    related: related("rohrverstopfung-beseitigen", "Rohrverstopfung beseitigen"),
  },
];
