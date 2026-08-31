import type { Guide } from "./guides";

export const kellerbauGuides: Guide[] = [
  {
    slug: "kellerbau-kosten",
    title: "Kellerbau Kosten 2026",
    h1: "Kellerbau Kosten 2026: Nutzkeller, Wohnkeller und Vollunterkellerung",
    description: "Kellerbau Kosten 2026: Standard-Nutzkeller grob 40.000-90.000 €, Massivkeller etwa 1.000-1.500 €/m², Wohnkeller bis etwa 2.500 €/m².",
    eyebrow: "Kellerbau 2026",
    intro: "Ein Keller schafft auf der Grundfläche des Hauses zusätzliche Nutz- oder Wohnfläche, verlangt aber Erdarbeiten, eine tragfähige Gründung sowie ein zum Baugrund passendes Abdichtungs- und Dämmkonzept. Für einen belastbaren Vergleich müssen deshalb Bauweise, Ausbaustufe und enthaltene Erdarbeiten getrennt betrachtet werden.",
    keyFact: "Massiv-Nutzkeller etwa 1.000-1.500 €/m²; Standard-Nutzkeller im Neubau grob 40.000-90.000 €",
    sections: [
      {
        heading: "Was kostet ein Keller 2026?",
        paragraphs: [
          "MyHammer nennt für einen Standard-Nutzkeller im Neubau grob 40.000 bis 90.000 Euro. Fertighaus.de nennt für massiv ausgeführte Nutzkeller etwa 1.000 bis 1.500 Euro pro Quadratmeter und für einen Wohnkeller etwa 2.000 bis 2.500 Euro pro Quadratmeter.",
          "Die Spannen sind nicht direkt austauschbar: Ein Projektpreis kann Erdarbeiten und bestimmte Nebenleistungen enthalten, während ein Quadratmeterpreis häufig nur eine definierte Ausbaustufe beschreibt. Vor dem Angebotsvergleich sollte deshalb das Leistungsverzeichnis normiert werden.",
        ],
        table: {
          headers: ["Kellervariante", "Richtwert 2026"],
          rows: [
            { cells: ["Standard-Nutzkeller Neubau", "40.000-90.000 €"], href: "/kosten/kellerbau/leistung/standard-nutzkeller-neubau" },
            { cells: ["Massivkeller als Nutzkeller", "1.000-1.500 €/m²"], href: "/kosten/kellerbau/leistung/massivkeller-nutzkeller" },
            { cells: ["Massivkeller als Wohnkeller", "2.000-2.500 €/m²"], href: "/kosten/kellerbau/leistung/massivkeller-wohnkeller" },
            { cells: ["Fertigkeller Standard", "800-1.240 €/m²"], href: "/kosten/kellerbau/leistung/fertigkeller-standard" },
          ],
        },
      },
      {
        heading: "Welche Kostenblöcke bestimmen den Kellerpreis?",
        paragraphs: ["Neben dem eigentlichen Kellerrohbau entscheiden vor allem Baugrund und Wasserverhältnisse über das Budget. Ein günstiger Kellerpreis ohne Aushub, Entsorgung oder Abdichtung ist deshalb nicht mit einem Komplettpaket vergleichbar."],
        bullets: [
          "Bodengutachten und Planung",
          "Baugrube, Aushub und Entsorgung",
          "Kellerbodenplatte und tragende Wände",
          "Abdichtung beziehungsweise WU-Konstruktion bei entsprechender Wasserbeanspruchung",
          "Perimeterdämmung und gegebenenfalls Drainage",
          "Kellerdecke, Fenster, Lichtschächte und Treppe",
          "Haustechnik und Innenausbau beim Wohnkeller",
        ],
      },
      {
        heading: "Nutzkeller oder Wohnkeller?",
        paragraphs: [
          "Ein Nutzkeller dient typischerweise Lager, Hauswirtschaft und Technik. Für einen Wohnkeller steigen die Anforderungen an Wärmeschutz, Belichtung, Haustechnik und Oberflächen. Fertighaus.de weist deshalb für Wohnkeller deutlich höhere Quadratmeterpreise aus.",
          "Wer den Ausbau später plant, sollte bereits im Rohbau Raumhöhe, Fenster, Abdichtung, Dämmung und Leitungsführung auf die spätere Nutzung abstimmen. Nachträgliche Änderungen an erdberührten Bauteilen sind häufig teuer.",
        ],
      },
    ],
    faqs: [
      { question: "Was kostet ein Keller pro m² 2026?", answer: "Fertighaus.de nennt für einen massiven Nutzkeller etwa 1.000 bis 1.500 €/m² und für einen massiven Wohnkeller etwa 2.000 bis 2.500 €/m². Fertigkeller können je nach Ausbaustufe günstiger liegen." },
      { question: "Was kostet eine Vollunterkellerung zusätzlich?", answer: "MyHammer nennt für eine Vollunterkellerung gegenüber einer Lösung ohne Keller meist grob 40.000 bis 80.000 Euro Mehrkosten. Der konkrete Betrag hängt stark von Fläche, Baugrund und Ausstattung ab." },
      { question: "Ist ein Fertigkeller günstiger als ein Massivkeller?", answer: "Bei vergleichbarer einfacher Nutzung kann ein Fertigkeller preislich günstiger sein. Entscheidend ist aber, ob Erdarbeiten, Dämmung, Treppe, Fenster und weitere Leistungen im Angebot enthalten sind." },
    ],
    related: [
      { label: "Kellerbau Preisübersicht", href: "/kosten/kellerbau" },
      { label: "Fertigkeller Kosten", href: "/ratgeber/fertigkeller-kosten" },
      { label: "Massiv- und Wohnkeller", href: "/ratgeber/massivkeller-wohnkeller-kosten" },
      { label: "Kellerabdichtung außen oder innen", href: "/ratgeber/kellerabdichtung-aussen-oder-innen-kosten" },
      { label: "Kellerbau berechnen", href: "/rechner/handwerkerkosten?gewerk=kellerbau&leistung=standard-nutzkeller-neubau" },
    ],
  },
  {
    slug: "fertigkeller-kosten",
    title: "Fertigkeller Kosten 2026",
    h1: "Fertigkeller Kosten 2026: Standard, Mitbau-, Ausbau- und Komplettkeller",
    description: "Fertigkeller Kosten 2026: Standard etwa 800-1.240 €/m². Mit aktuellen Paketpreisen für 80, 99 und 120 m² sowie Erdarbeiten und Leistungsumfang.",
    eyebrow: "Fertigkeller 2026",
    intro: "Beim Fertigkeller werden große Teile der Konstruktion werkseitig vorgefertigt und auf der Baustelle montiert. Das macht die Bauphase planbar, sagt aber allein noch nichts über den Gesamtpreis aus: Besonders Erdarbeiten und unterschiedliche Ausbaustufen müssen beim Angebotsvergleich separat geprüft werden.",
    keyFact: "MyHammer: Fertigkeller etwa 800-1.240 €/m²; Fertighaus.de: konkrete Paketpreise für 80 bis 120 m²",
    sections: [
      {
        heading: "Was kostet ein Fertigkeller pro Quadratmeter?",
        paragraphs: [
          "MyHammer nennt für Fertigkeller je nach Ausstattung und Region etwa 800 bis 1.240 Euro pro Quadratmeter. Fertighaus.de nennt für einen einfachen Nutzkeller im Mittel rund 1.000 Euro pro Quadratmeter und für einen Wohnkeller etwa 1.500 bis 2.000 Euro pro Quadratmeter.",
          "Für ein Beispielhaus mit rund 87 Quadratmetern Kellergrundfläche lagen von Fertighaus.de vergleichbar gemachte Anbieterangebote rund zwischen 69.600 und 103.000 Euro. Der enthaltene Leistungsumfang war der entscheidende Vergleichspunkt.",
        ],
        table: {
          headers: ["Fertigkeller", "Richtwert 2026"],
          rows: [
            { cells: ["Standard", "800-1.240 €/m²"], href: "/kosten/kellerbau/leistung/fertigkeller-standard" },
            { cells: ["Wohnkeller", "1.500-2.000 €/m²"], href: "/kosten/kellerbau/leistung/fertigkeller-wohnkeller" },
            { cells: ["Beispiel rund 87 m²", "69.600-103.000 €"], href: "/kosten/kellerbau/leistung/fertigkeller-beispiel-87-m2" },
            { cells: ["Zusätzliche Erdarbeiten Beispiel", "6.000-10.000 €"], href: "/kosten/kellerbau/leistung/erdarbeiten-fertigkeller" },
          ],
        },
      },
      {
        heading: "Mitbaukeller, Ausbaukeller oder Komplettkeller",
        paragraphs: ["Fertighaus.de unterscheidet mehrere Ausbaustufen. Beim Ausbaukeller bleiben typischerweise einzelne Dämm- oder Ausbauleistungen beim Bauherrn; beim Mitbaukeller fehlen zusätzliche Leistungen. Ein niedriger Paketpreis bedeutet daher mehr Eigenleistung und muss gegen Material, Zeit und Gewährleistungsgrenzen gerechnet werden."],
        bullets: [
          "Mitbaukeller: größter Eigenleistungsanteil",
          "Ausbaukeller: mittlere Ausbaustufe",
          "Komplettkeller: umfangreicher definierter Leistungsumfang",
          "Bodenaushub in der veröffentlichten Paketpreisliste separat",
        ],
      },
      {
        heading: "Angebote nur mit identischem Leistungsumfang vergleichen",
        paragraphs: ["Prüfen Sie bei jedem Fertigkeller-Angebot unter anderem Erdarbeiten, Bodenplatte, Fundamenterder, Dämmung, Kellerfenster, Lichtschächte, Innentreppe, Abdichtung und Baustelleneinrichtung. Zwei scheinbar ähnliche Kellerpreise können durch fehlende Positionen fünfstellige Unterschiede erzeugen."],
      },
    ],
    faqs: [
      { question: "Wie viel kostet ein Fertigkeller 2026?", answer: "MyHammer nennt etwa 800 bis 1.240 Euro pro Quadratmeter. Bei höherem Wohnstandard nennt Fertighaus.de etwa 1.500 bis 2.000 Euro pro Quadratmeter." },
      { question: "Sind Erdarbeiten im Fertigkellerpreis enthalten?", answer: "Nicht zwingend. Die konkrete Fertighaus.de-Paketpreisliste für 80, 99 und 120 m² weist den Bodenaushub ausdrücklich separat aus. Angebote müssen deshalb positionsweise verglichen werden." },
      { question: "Was kostet ein Fertigkeller mit etwa 80 m²?", answer: "In der Fertighaus.de-Paketübersicht reichen die Richtwerte für 80 m² von rund 45.300 Euro als Mitbaukeller bis rund 85.500 Euro als Komplettkeller, jeweils ohne Bodenaushub." },
    ],
    related: [
      { label: "Kellerbau Kosten", href: "/ratgeber/kellerbau-kosten" },
      { label: "Keller 80 bis 120 m²", href: "/ratgeber/keller-80-100-120-qm-kosten" },
      { label: "Erdarbeiten und Weiße Wanne", href: "/ratgeber/kellerbau-erdarbeiten-weisse-wanne-kosten" },
      { label: "Fertigkeller berechnen", href: "/rechner/handwerkerkosten?gewerk=kellerbau&leistung=fertigkeller-standard" },
    ],
  },
  {
    slug: "massivkeller-wohnkeller-kosten",
    title: "Massivkeller und Wohnkeller Kosten 2026",
    h1: "Massivkeller oder Wohnkeller: Kosten und Ausbaustandard 2026",
    description: "Massivkeller Kosten 2026: Nutzkeller etwa 1.000-1.500 €/m², Wohnkeller etwa 2.000-2.500 €/m². Unterschiede bei Ausbau, Dämmung und Haustechnik.",
    eyebrow: "Massiv- & Wohnkeller 2026",
    intro: "Beim Massivkeller werden tragende Kellerbauteile klassisch gemauert oder in Ortbeton ausgeführt. Ob daraus ein einfacher Nutzkeller oder vollwertig ausgebauter Wohnbereich wird, verändert den Preis erheblich: Wärmeschutz, Fenster, Heizung, Elektro und Innenoberflächen kommen beim Wohnstandard hinzu.",
    keyFact: "Fertighaus.de: Massiv-Nutzkeller etwa 1.000-1.500 €/m², Massiv-Wohnkeller etwa 2.000-2.500 €/m²",
    sections: [
      {
        heading: "Massivkeller: Preis nach Nutzungsart",
        paragraphs: ["Fertighaus.de nennt für einen massiv gemauerten beziehungsweise aus Ortbeton gegossenen Nutzkeller durchschnittlich etwa 1.000 bis 1.500 Euro pro Quadratmeter. Bei einem Wohnkeller steigt die Spanne auf etwa 2.000 bis 2.500 Euro pro Quadratmeter."],
        table: {
          headers: ["Ausführung", "Richtwert 2026"],
          rows: [
            { cells: ["Massivkeller Nutzkeller", "1.000-1.500 €/m²"], href: "/kosten/kellerbau/leistung/massivkeller-nutzkeller" },
            { cells: ["Massivkeller Wohnkeller", "2.000-2.500 €/m²"], href: "/kosten/kellerbau/leistung/massivkeller-wohnkeller" },
            { cells: ["100 m² Nutz- bis Wohnkeller", "100.000-200.000 €"], href: "/kosten/kellerbau/leistung/keller-100-m2-nutz-bis-wohnkeller" },
          ],
        },
      },
      {
        heading: "Warum kostet ein Wohnkeller mehr?",
        paragraphs: ["Wohnräume im Untergeschoss benötigen einen deutlich höheren Ausbaustandard als reine Lager- oder Technikflächen. Besonders Dämmung, Heizung, elektrische Installation, Boden- und Wandaufbau sowie ausreichend geeignete Fenster treiben den Preis."],
        bullets: [
          "höherer Wärmeschutz an erdberührten Bauteilen",
          "Heizung und zusätzliche Haustechnik",
          "Fenster und Lichtführung",
          "Estrich, Bodenbeläge und fertige Wandoberflächen",
          "Elektroinstallation und zusätzliche Anschlüsse",
          "höhere Anforderungen an Feuchteschutz und Detailplanung",
        ],
      },
      {
        heading: "Abdichtung früh mit dem Nutzungskonzept abstimmen",
        paragraphs: ["Das Abdichtungskonzept richtet sich vor allem nach Baugrund und Wasserbeanspruchung, nicht allein nach dem gewünschten Innenausbau. Eine Weiße Wanne oder andere konstruktive Lösung sollte deshalb mit Baugrundgutachten und Planung festgelegt werden. Für die nachträgliche Sanierung bestehender Keller gibt es auf BauKostenRadar einen separaten Kellerabdichtungs-Cluster."],
      },
    ],
    faqs: [
      { question: "Was kostet ein Massivkeller pro m²?", answer: "Für einen Nutzkeller nennt Fertighaus.de etwa 1.000 bis 1.500 €/m²; als Wohnkeller etwa 2.000 bis 2.500 €/m²." },
      { question: "Was macht einen Keller zum Wohnkeller?", answer: "Kostenrelevant sind vor allem ein höherer Dämm- und Ausbaustandard, Heizung, Elektro, Fenster sowie fertige Boden- und Wandoberflächen. Baurechtliche Anforderungen sind zusätzlich standortbezogen zu prüfen." },
      { question: "Ist eine Weiße Wanne immer nötig?", answer: "Nicht pauschal. Die geeignete Abdichtung hängt von Baugrund, Grundwasser und Wasserbeanspruchung ab. Das Bodengutachten ist deshalb vor der konstruktiven Festlegung wichtig." },
    ],
    related: [
      { label: "Kellerbau Kosten", href: "/ratgeber/kellerbau-kosten" },
      { label: "Weiße Wanne und Erdarbeiten", href: "/ratgeber/kellerbau-erdarbeiten-weisse-wanne-kosten" },
      { label: "Kellerabdichtung außen oder innen", href: "/ratgeber/kellerabdichtung-aussen-oder-innen-kosten" },
      { label: "Massivkeller berechnen", href: "/rechner/handwerkerkosten?gewerk=kellerbau&leistung=massivkeller-nutzkeller" },
    ],
  },
  {
    slug: "keller-80-100-120-qm-kosten",
    title: "Keller 80, 100 und 120 m² Kosten 2026",
    h1: "Keller mit 80, 100 oder 120 m²: aktuelle Kostenbeispiele 2026",
    description: "Kellerkosten nach Größe 2026: Paketpreise für Fertigkeller mit 80, 99 und 120 m² plus 100-m²-Orientierung für Nutz- bis Wohnkeller.",
    eyebrow: "Keller nach Größe 2026",
    intro: "Größenbeispiele sind für die Budgetplanung besonders hilfreich, wenn zugleich die Ausbaustufe bekannt ist. Fertighaus.de veröffentlicht konkrete Richtwerte für Mitbau-, Ausbau- und Komplettkeller mit 80, 99 und 120 Quadratmetern. MyHammer liefert zusätzlich eine breite Orientierung für 100 Quadratmeter Kellerfläche.",
    keyFact: "80 m² Komplettkeller 85.500 €, 99 m² 105.800 €, 120 m² 128.300 € in der Fertighaus.de-Paketübersicht – Bodenaushub separat",
    sections: [
      {
        heading: "Paketpreise für 80, 99 und 120 m²",
        paragraphs: ["Die veröffentlichten Fertighaus.de-Richtwerte zeigen, wie stark nicht nur die Fläche, sondern auch die Ausbaustufe wirkt. In dieser Preisliste ist der Bodenaushub noch nicht enthalten."],
        table: {
          headers: ["Größe", "Mitbaukeller", "Ausbaukeller", "Komplettkeller"],
          rows: [
            { cells: ["80 m²", "45.300 €", "74.900 €", "85.500 €"], href: "/kosten/kellerbau/leistung/fertigkeller-80-m2-komplettkeller" },
            { cells: ["99 m²", "59.200 €", "95.200 €", "105.800 €"], href: "/kosten/kellerbau/leistung/fertigkeller-99-m2-komplettkeller" },
            { cells: ["120 m²", "74.500 €", "117.700 €", "128.300 €"], href: "/kosten/kellerbau/leistung/fertigkeller-120-m2-komplettkeller" },
          ],
        },
      },
      {
        heading: "100-m²-Keller als Nutz- oder Wohnfläche",
        paragraphs: ["MyHammer nennt für einen Keller mit 100 Quadratmetern abhängig von Nutzungs- und Ausbaustandard grob 100.000 bis 200.000 Euro. Diese breite Spanne zeigt, warum eine reine Multiplikation mit einem pauschalen Quadratmeterwert ohne Leistungsbeschreibung wenig belastbar ist."],
        table: {
          headers: ["Beispiel", "Richtwert 2026"],
          rows: [
            { cells: ["100 m² Nutz- bis Wohnkeller", "100.000-200.000 €"], href: "/kosten/kellerbau/leistung/keller-100-m2-nutz-bis-wohnkeller" },
            { cells: ["87 m² Fertigkeller Angebotsbeispiel", "69.600-103.000 €"], href: "/kosten/kellerbau/leistung/fertigkeller-beispiel-87-m2" },
          ],
        },
      },
      {
        heading: "Welche Zusatzkosten fehlen häufig im Größenvergleich?",
        paragraphs: ["Insbesondere Erdarbeiten, Aushubentsorgung, Bodengutachten sowie besondere Abdichtungs- und Entwässerungsmaßnahmen können außerhalb eines Kellerpakets liegen. Prüfen Sie deshalb nicht nur die Endsumme, sondern jede enthaltene und ausgeschlossene Position."],
      },
    ],
    faqs: [
      { question: "Was kostet ein Fertigkeller mit 80 m²?", answer: "Fertighaus.de nennt in seiner Paketübersicht rund 45.300 Euro als Mitbaukeller, 74.900 Euro als Ausbaukeller und 85.500 Euro als Komplettkeller. Der Bodenaushub ist dort separat." },
      { question: "Was kostet ein Keller mit 100 m²?", answer: "MyHammer nennt je nach Nutz- oder Wohnstandard grob 100.000 bis 200.000 Euro für 100 m² Kellerfläche." },
      { question: "Was kostet ein 120-m²-Komplettkeller?", answer: "In der Fertighaus.de-Richtwerttabelle liegt der 120-m²-Komplettkeller bei rund 128.300 Euro, ohne Bodenaushub." },
    ],
    related: [
      { label: "Fertigkeller Kosten", href: "/ratgeber/fertigkeller-kosten" },
      { label: "Kellerbau Kosten", href: "/ratgeber/kellerbau-kosten" },
      { label: "Erdarbeiten und Weiße Wanne", href: "/ratgeber/kellerbau-erdarbeiten-weisse-wanne-kosten" },
      { label: "80-m²-Komplettkeller berechnen", href: "/rechner/handwerkerkosten?gewerk=kellerbau&leistung=fertigkeller-80-m2-komplettkeller" },
    ],
  },
  {
    slug: "kellerbau-erdarbeiten-weisse-wanne-kosten",
    title: "Kellerbau Erdarbeiten und Weiße Wanne Kosten 2026",
    h1: "Kellerbau: Erdarbeiten, Weiße Wanne und Perimeterdämmung Kosten 2026",
    description: "Zusatzkosten Kellerbau 2026: Erdarbeiten, Bodengutachten, Aushubentsorgung, Weiße Wanne, Entwässerung, XPS und Perimeterdämmung im Überblick.",
    eyebrow: "Kellerbau Zusatzkosten 2026",
    intro: "Beim Kellerbau entstehen große Preisabweichungen oft unterhalb der sichtbaren Rohbaukosten. Baugrund, Aushub, Entsorgung, Wasserbeanspruchung und Dämmung müssen bereits vor der Angebotsphase geklärt werden, damit ein vermeintlich günstiger Keller nicht durch Zusatzpositionen deutlich teurer wird.",
    keyFact: "Weiße Wanne grob +15.000-20.000 €; Perimeterdämmung etwa 40-120 €/m² inklusive Material, Verlegung und gegebenenfalls Erdarbeiten",
    sections: [
      {
        heading: "Erdarbeiten und Baugrundkosten",
        paragraphs: ["Fertighaus.de nennt für zusätzliche Erdarbeiten in einem unkomplizierten Beispiel etwa 6.000 bis 10.000 Euro. MyHammer nennt für ein Bodengutachten oft 1.000 bis 1.500 Euro und für die Entsorgung des Aushubs je nach Volumen etwa 5.000 bis 15.000 Euro."],
        table: {
          headers: ["Position", "Richtwert 2026"],
          rows: [
            { cells: ["Erdarbeiten Fertigkeller Beispiel", "6.000-10.000 €"], href: "/kosten/kellerbau/leistung/erdarbeiten-fertigkeller" },
            { cells: ["Bodengutachten", "1.000-1.500 €"], href: "/kosten/kellerbau/leistung/bodengutachten-kellerbau" },
            { cells: ["Aushubentsorgung", "5.000-15.000 €"], href: "/kosten/kellerbau/leistung/aushubentsorgung-kellerbau" },
          ],
        },
      },
      {
        heading: "Weiße Wanne und Entwässerung",
        paragraphs: ["Fertighaus.de nennt für eine Weiße Wanne grob 15.000 bis 20.000 Euro Mehrkosten gegenüber einer konventionell gemauerten Kellerwanne. MyHammer nennt für zusätzliche Abdichtungs- und Entwässerungsmaßnahmen beim Kellerbau etwa 10.000 bis 25.000 Euro. Welche Konstruktion erforderlich ist, muss anhand der tatsächlichen Wasserbeanspruchung geplant werden."],
        table: {
          headers: ["Maßnahme", "Richtwert"],
          rows: [
            { cells: ["Weiße Wanne Mehrpreis", "15.000-20.000 €"], href: "/kosten/kellerbau/leistung/weisse-wanne-keller-mehrpreis" },
            { cells: ["Abdichtung und Entwässerung Kellerbau", "10.000-25.000 €"], href: "/kosten/kellerbau/leistung/abdichtung-und-entwaesserung-kellerbau" },
            { cells: ["Drainage, falls nötig", "20-50 €/lfd. m"], href: "/kosten/kellerbau/leistung/drainage-kellerbau" },
          ],
        },
      },
      {
        heading: "Was kostet die Perimeterdämmung?",
        paragraphs: ["Blauarbeit nennt für eine Perimeterdämmung insgesamt etwa 40 bis 120 Euro pro Quadratmeter. Im Neubau lassen sich Dämmarbeiten wirtschaftlicher mit dem offenen Bauzustand verbinden. Für XPS-Platten nennt Blauarbeit etwa 15 bis 30 Euro pro Quadratmeter, für Schaumglas etwa 30 bis 60 Euro."],
        table: {
          headers: ["Dämmposition", "Richtwert 2026"],
          rows: [
            { cells: ["Perimeterdämmung komplett", "40-120 €/m²"], href: "/kosten/kellerbau/leistung/perimeterdaemmung-keller-komplett" },
            { cells: ["XPS-Platten", "15-30 €/m²"], href: "/kosten/kellerbau/leistung/xps-perimeterdaemmung-keller" },
            { cells: ["Schaumglas", "30-60 €/m²"], href: "/kosten/kellerbau/leistung/schaumglas-perimeterdaemmung-keller" },
            { cells: ["XPS unter Kellerbodenplatte", "20-40 €/m²"], href: "/kosten/kellerbau/leistung/xps-unter-kellerbodenplatte" },
          ],
        },
      },
    ],
    faqs: [
      { question: "Was kostet der Erdaushub für einen Keller?", answer: "Fertighaus.de nennt in einem unkomplizierten Fertigkeller-Beispiel etwa 6.000 bis 10.000 Euro für zusätzliche Erdarbeiten. Bodenklasse, Menge und Entsorgung können den Betrag stark verändern." },
      { question: "Was kostet eine Weiße Wanne zusätzlich?", answer: "Fertighaus.de nennt grob 15.000 bis 20.000 Euro Mehrkosten gegenüber einer konventionell gemauerten Kellerwanne." },
      { question: "Was kostet Perimeterdämmung am Keller?", answer: "Blauarbeit nennt insgesamt etwa 40 bis 120 Euro pro Quadratmeter inklusive Material, Verlegung und – bei nachträglichen Arbeiten – möglicher Erdarbeiten. Im Neubau kann der Aufwand geringer sein, weil die Baugrube bereits offen ist." },
    ],
    related: [
      { label: "Kellerbau Kosten", href: "/ratgeber/kellerbau-kosten" },
      { label: "Kellerabdichtung außen oder innen", href: "/ratgeber/kellerabdichtung-aussen-oder-innen-kosten" },
      { label: "Kellerabdichtung außen", href: "/ratgeber/kellerabdichtung-aussen-kosten-pro-qm" },
      { label: "Kellerabdichtung innen", href: "/ratgeber/kellerabdichtung-innen-kosten-pro-qm" },
      { label: "Weiße Wanne berechnen", href: "/rechner/handwerkerkosten?gewerk=kellerbau&leistung=weisse-wanne-keller-mehrpreis" },
    ],
  },
];
