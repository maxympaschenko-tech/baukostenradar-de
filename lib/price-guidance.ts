type PriceLike = {
  name: string;
  low: number;
  high: number;
  unit: string;
};

export type CalculationExample = {
  quantity: number;
  quantityLabel: string;
  low: number;
  high: number;
};

export type OfferCheck = {
  title: string;
  text: string;
};

export type PriceDriver = {
  title: string;
  text: string;
};

function buildExamples(item: PriceLike, quantities: Array<{ quantity: number; label: string }>): CalculationExample[] {
  return quantities.map(({ quantity, label }) => ({
    quantity,
    quantityLabel: label,
    low: item.low * quantity,
    high: item.high * quantity,
  }));
}

export function getCalculationExamples(item: PriceLike): CalculationExample[] {
  const unit = item.unit.toLocaleLowerCase("de-DE");

  if (unit.includes("pro m²")) {
    return buildExamples(item, [
      { quantity: 10, label: "10 m²" },
      { quantity: 25, label: "25 m²" },
      { quantity: 50, label: "50 m²" },
    ]);
  }

  if (unit.includes("pro lfd. meter")) {
    return buildExamples(item, [
      { quantity: 10, label: "10 lfd. Meter" },
      { quantity: 20, label: "20 lfd. Meter" },
      { quantity: 50, label: "50 lfd. Meter" },
    ]);
  }

  if (unit.includes("pro stunde")) {
    return buildExamples(item, [
      { quantity: 2, label: "2 Arbeitsstunden" },
      { quantity: 4, label: "4 Arbeitsstunden" },
      { quantity: 8, label: "8 Arbeitsstunden" },
    ]);
  }

  if (unit.includes("pro stück")) {
    return buildExamples(item, [
      { quantity: 1, label: "1 Stück" },
      { quantity: 5, label: "5 Stück" },
      { quantity: 10, label: "10 Stück" },
    ]);
  }

  if (unit.includes("pro fenster")) {
    return buildExamples(item, [
      { quantity: 5, label: "5 Fenster" },
      { quantity: 10, label: "10 Fenster" },
      { quantity: 20, label: "20 Fenster" },
    ]);
  }

  if (unit.includes("pro kwh")) {
    return buildExamples(item, [
      { quantity: 5, label: "5 kWh" },
      { quantity: 10, label: "10 kWh" },
      { quantity: 15, label: "15 kWh" },
    ]);
  }

  if (unit.includes("pro baum")) {
    return buildExamples(item, [
      { quantity: 1, label: "1 Baum" },
      { quantity: 2, label: "2 Bäume" },
      { quantity: 3, label: "3 Bäume" },
    ]);
  }

  return [];
}

export function getCalculationExample(item: PriceLike): CalculationExample | null {
  const examples = getCalculationExamples(item);
  return examples[1] ?? examples[0] ?? null;
}

export function getPriceDrivers(item: PriceLike, serviceSlug: string): PriceDriver[] {
  const name = item.name.toLocaleLowerCase("de-DE");
  const unit = item.unit.toLocaleLowerCase("de-DE");

  if (unit.includes("pro stunde") || name.includes("stundensatz")) {
    return [
      {
        title: "Einsatzdauer",
        text: "Kurze Einsätze können durch Mindestarbeitszeit, Rüstzeit oder kleine Auftragsgrößen einen höheren effektiven Stundenpreis haben als längere Arbeiten.",
      },
      {
        title: "Anfahrt und Einsatzort",
        text: "Entfernung, Parkmöglichkeiten, Zugang zum Objekt und notwendige Wegezeiten können zusätzlich zum eigentlichen Stundensatz berechnet werden.",
      },
      {
        title: "Qualifikation und Spezialisierung",
        text: "Spezialarbeiten, Prüfungen oder besonders qualifizierte Fachkräfte können einen höheren Stundensatz erfordern als einfache Standardarbeiten.",
      },
      {
        title: "Zeitpunkt und Dringlichkeit",
        text: "Notdienst, kurzfristige Termine sowie Arbeiten am Abend oder Wochenende können Zuschläge auslösen.",
      },
    ];
  }

  const serviceDrivers: Record<string, PriceDriver[]> = {
    badsanierung: [
      { title: "Badgröße und Grundriss", text: "Fläche, Anzahl der Sanitärobjekte und ein aufwendiger Grundriss beeinflussen Materialmenge und Arbeitszeit." },
      { title: "Leitungen und Anschlüsse", text: "Neue Positionen für Dusche, WC oder Waschbecken sowie alte Leitungen können zusätzliche Sanitär- und Elektroarbeiten erforderlich machen." },
      { title: "Ausstattungsniveau", text: "Armaturen, Keramik, Möbel, Fliesen und Sonderlösungen erzeugen zwischen einfacher und gehobener Ausführung große Budgetunterschiede." },
      { title: "Rückbau und Untergrund", text: "Demontage, Entsorgung, Abdichtung und das Herstellen tragfähiger Wand- und Bodenflächen können einen großen Teil der Vorarbeiten ausmachen." },
    ],
    maler: [
      { title: "Untergrundzustand", text: "Risse, Löcher, alte Beschichtungen und unebene Flächen erhöhen den Aufwand für Spachteln, Schleifen und Grundieren." },
      { title: "Anzahl der Arbeitsgänge", text: "Grundierung, mehrfaches Streichen oder zusätzliche Deckanstriche erhöhen Materialverbrauch und Arbeitszeit." },
      { title: "Farb- und Materialwahl", text: "Hochwertige Farben, Spezialbeschichtungen oder besondere Farbtöne können höhere Materialkosten verursachen." },
      { title: "Abkleben und Zugänglichkeit", text: "Viele Fenster, Kanten, Möbel, hohe Wände oder schwer zugängliche Bereiche erhöhen den Vorbereitungsaufwand." },
    ],
    fliesenleger: [
      { title: "Fliesenformat", text: "Großformat, Mosaik, Naturstein und aufwendige Verlegemuster benötigen häufig mehr Zuschnitt, Planung und Präzision." },
      { title: "Untergrund", text: "Unebenheiten, Altbeläge, notwendiger Estrichausgleich oder Abdichtung können zusätzliche Arbeitsschritte auslösen." },
      { title: "Raumgeometrie", text: "Nischen, viele Ecken, Gefälle, bodengleiche Duschen und zahlreiche Durchdringungen erhöhen den Zuschnitt und Montageaufwand." },
      { title: "Material und Nebenleistungen", text: "Kleber, Fugenmaterial, Schienen, Abdichtung und Entsorgung sollten beim Preisvergleich mit betrachtet werden." },
    ],
    elektriker: [
      { title: "Bestandsinstallation", text: "Alter Zustand, Leitungswege und vorhandene Verteilung bestimmen, wie viel Rückbau und Anpassung notwendig ist." },
      { title: "Anzahl der Stromkreise", text: "Zusätzliche Steckdosen, Leitungen, Sicherungen und getrennte Stromkreise erhöhen Material- und Montageaufwand." },
      { title: "Wandaufbau und Leitungswege", text: "Massivwand, Trockenbau, Unterputz- oder Aufputzführung beeinflussen die benötigte Arbeitszeit deutlich." },
      { title: "Prüfung und Dokumentation", text: "Messungen, Schutztechnik, Inbetriebnahme und gegebenenfalls Dokumentation gehören bei vielen Elektroarbeiten zum Leistungsumfang." },
    ],
    dachsanierung: [
      { title: "Dachgeometrie", text: "Gauben, Kehlen, Kamine und viele Anschlüsse erhöhen den Arbeitsaufwand gegenüber einfachen Dachflächen." },
      { title: "Eindeckung und Material", text: "Ziegel, Metall, Unterdeckung und weitere Materialien unterscheiden sich bei Preis, Gewicht und Montageaufwand." },
      { title: "Dämmung und Unterkonstruktion", text: "Zusätzliche Dämmmaßnahmen oder Schäden an Lattung und Tragwerk können das Budget deutlich erhöhen." },
      { title: "Gerüst und Zugänglichkeit", text: "Gebäudehöhe, Aufstellflächen und schwierige Zugänge beeinflussen Gerüst-, Transport- und Sicherheitskosten." },
    ],
    bodenleger: [
      { title: "Bodenmaterial", text: "Vinyl, Laminat, Parkett und andere Beläge unterscheiden sich stark bei Materialpreis und Verlegeaufwand." },
      { title: "Untergrundvorbereitung", text: "Ausgleich, Feuchtesperre, Schleifen oder Entfernen alter Beläge können zusätzliche Kosten verursachen." },
      { title: "Verlegeart", text: "Klicksystem, vollflächige Verklebung, Muster und Zuschnitt wirken sich auf Zeit und Materialverbrauch aus." },
      { title: "Rand- und Abschlussarbeiten", text: "Sockelleisten, Türanschlüsse, Übergangsprofile und Anpassungen an Einbauten sollten im Angebot enthalten sein." },
    ],
    trockenbau: [
      { title: "Wand- oder Deckenaufbau", text: "Anzahl der Beplankungslagen, Unterkonstruktion und gewünschte Belastbarkeit bestimmen Materialmenge und Arbeitszeit." },
      { title: "Dämmung und Schallschutz", text: "Zusätzliche Dämmstoffe oder erhöhte Schallschutzanforderungen können den Aufbau aufwendiger machen." },
      { title: "Oberflächenqualität", text: "Die gewünschte Verspachtelungsstufe von einfacher Fuge bis sehr glatter Oberfläche beeinflusst den Arbeitsaufwand." },
      { title: "Geometrie und Einbauten", text: "Nischen, Türen, Installationen, Revisionsöffnungen und viele Anschlüsse erhöhen den Zuschnitt und Montageaufwand." },
    ],
    sanitaer: [
      { title: "Leitungswege", text: "Neue oder veränderte Wasser- und Abwasserleitungen erhöhen Material- und Montageaufwand." },
      { title: "Sanitärobjekte", text: "Anzahl, Größe und Qualitätsniveau von WC, Dusche, Wanne, Armaturen und Waschtisch beeinflussen das Budget." },
      { title: "Bestand und Demontage", text: "Alte Leitungen, schwer zugängliche Schächte und Rückbau können zusätzliche Arbeitszeit und Entsorgung verursachen." },
      { title: "Abdichtung und Folgearbeiten", text: "Anschlüsse an Fliesen, Trockenbau, Elektro oder Abdichtung sollten im Gesamtumfang berücksichtigt werden." },
    ],
    fenster: [
      { title: "Fenstergröße und Ausführung", text: "Abmessungen, Öffnungsart, Sonderformen und zusätzliche Flügel beeinflussen Produkt- und Montagekosten." },
      { title: "Verglasung", text: "Zwei- oder Dreifachverglasung, Sicherheitsglas und besondere Wärme- oder Schallschutzwerte verändern den Preis." },
      { title: "Rahmenmaterial", text: "Kunststoff, Holz und Aluminium unterscheiden sich bei Anschaffungspreis und teilweise beim Montageaufwand." },
      { title: "Ausbau und Anschlussarbeiten", text: "Demontage, Entsorgung, Abdichtung, Fensterbänke und das Herstellen sauberer Laibungen können Zusatzkosten verursachen." },
    ],
    tueren: [
      { title: "Türblatt und Zarge", text: "Material, Oberfläche, Abmessungen und Zargenausführung bestimmen einen großen Teil des Produktpreises." },
      { title: "Bestehende Öffnung", text: "Nicht passende Maße, schiefe Wände oder notwendige Anpassungen können die Montage aufwendiger machen." },
      { title: "Beschläge und Funktionen", text: "Schlösser, Drücker, Schallschutz, Brandschutz oder besondere Scharniere erhöhen den Preis." },
      { title: "Demontage und Nacharbeit", text: "Ausbau alter Türen sowie Putz-, Maler- oder Bodenarbeiten an den Anschlüssen sollten separat geklärt werden." },
    ],
    heizung: [
      { title: "Anlagentyp und Leistung", text: "Heizsystem, Gebäudegröße und benötigte Leistung bestimmen die Dimensionierung und Kosten der Hauptkomponenten." },
      { title: "Wärmeverteilung", text: "Heizkörper, Fußbodenheizung, hydraulischer Abgleich und Rohrnetz können zusätzliche Investitionen erfordern." },
      { title: "Bestand und Umbau", text: "Demontage, Anpassung vorhandener Leitungen, Speicher oder Schornstein können den Projektumfang vergrößern." },
      { title: "Regelung und Inbetriebnahme", text: "Steuerung, elektrische Anschlüsse, Einregulierung und Inbetriebnahme gehören zur vollständigen Systembetrachtung." },
    ],
    waermepumpe: [
      { title: "Wärmepumpentyp", text: "Luft-Wasser-, Sole- oder andere Systeme unterscheiden sich bei Erschließung, Technik und Montageaufwand." },
      { title: "Gebäude und Heizlast", text: "Dämmstandard, Wohnfläche und benötigte Vorlauftemperatur beeinflussen Dimensionierung und mögliche Zusatzmaßnahmen." },
      { title: "Hydraulik und Wärmeverteilung", text: "Speicher, Pumpengruppen, Heizkörper oder Fußbodenheizung können Anpassungen benötigen." },
      { title: "Elektro und Aufstellung", text: "Stromanschluss, Fundament, Leitungswege, Schallschutz und Platzverhältnisse wirken sich auf die Installationskosten aus." },
    ],
    photovoltaik: [
      { title: "Anlagengröße", text: "Leistung in kWp und Anzahl der Module bestimmen einen großen Teil der Materialkosten." },
      { title: "Dach und Montage", text: "Dachform, Eindeckung, Neigung, Höhe und Zugänglichkeit beeinflussen Unterkonstruktion und Montageaufwand." },
      { title: "Wechselrichter und Speicher", text: "Leistungselektronik, Batteriespeicher und Energiemanagement können das Gesamtbudget deutlich verändern." },
      { title: "Elektrischer Anschluss", text: "Zählerschrank, Schutztechnik, Leitungswege und notwendige Anpassungen der Hauselektrik sollten im Angebot enthalten sein." },
    ],
    daemmung: [
      { title: "Bauteil und Fläche", text: "Fassade, Dach oder andere Bauteile benötigen unterschiedliche Systeme, Befestigungen und Arbeitsschritte." },
      { title: "Dämmstoff und Stärke", text: "Materialart, Wärmeleitfähigkeit und erforderliche Dämmstärke beeinflussen Materialpreis und Detailausbildung." },
      { title: "Untergrund und Anschlüsse", text: "Unebenheiten, Fensteranschlüsse, Sockel, Dachränder und andere Details erhöhen den Aufwand." },
      { title: "Gerüst und Zugänglichkeit", text: "Bei Fassaden- und Dacharbeiten können Gerüst, Hebetechnik und schwierige Zugänge einen relevanten Kostenblock bilden." },
    ],
    maurer: [
      { title: "Mauerwerk und Wandstärke", text: "Steinart, Wanddicke und statische Anforderungen beeinflussen Materialmenge und Arbeitszeit." },
      { title: "Öffnungen und Anschlüsse", text: "Türen, Fenster, Stürze und viele Anschlüsse erhöhen den Aufwand gegenüber einer einfachen geraden Wand." },
      { title: "Untergrund und Bestand", text: "Abbruch, Fundament, Ausgleich oder Anschlüsse an bestehendes Mauerwerk können Zusatzarbeiten erfordern." },
      { title: "Oberfläche", text: "Putz, Sichtmauerwerk oder vorbereitende Arbeiten für weitere Ausbaugewerke verändern den Leistungsumfang." },
    ],
    estrich: [
      { title: "Estrichart", text: "Zement-, Anhydrit-, Trocken- und Sonderestriche unterscheiden sich bei Material, Aufbau und Verarbeitung." },
      { title: "Schichtdicke und Fläche", text: "Aufbauhöhe, Belastung und Gesamtfläche bestimmen Materialmenge und Einbauaufwand." },
      { title: "Unterbau und Dämmung", text: "Trittschall-, Wärmedämmung, Folien und notwendige Ausgleichsschichten können zusätzliche Kosten verursachen." },
      { title: "Trocknung und Oberfläche", text: "Beschleunigte Trocknung, Schleifen oder besondere Oberflächenanforderungen können den Projektumfang erweitern." },
    ],
    treppen: [
      { title: "Treppenform", text: "Gerade, gewendelte oder mehrfach abgewinkelte Treppen unterscheiden sich deutlich beim Zuschnitt und Montageaufwand." },
      { title: "Material", text: "Holzart, Belag, Metallteile und Oberflächenbehandlung bestimmen einen wesentlichen Teil der Kosten." },
      { title: "Zustand der Bestandstreppe", text: "Lose Stufen, Schäden oder notwendige Verstärkungen erhöhen den Aufwand vor der eigentlichen Renovierung." },
      { title: "Geländer und Details", text: "Geländer, Setzstufen, Wangen, Beleuchtung und Sonderanschlüsse können als zusätzliche Positionen hinzukommen." },
    ],
    kueche: [
      { title: "Umfang der Arbeiten", text: "Reine Oberflächenarbeiten sind deutlich günstiger als Umbauten mit Elektro-, Sanitär- oder Bodenarbeiten." },
      { title: "Anschlüsse", text: "Neue Positionen für Wasser, Abwasser, Herd, Steckdosen oder Beleuchtung erhöhen den gewerkeübergreifenden Aufwand." },
      { title: "Oberflächen und Materialien", text: "Boden, Fliesenspiegel, Wandoberflächen und Arbeitsbereiche unterscheiden sich stark bei Materialpreis und Verarbeitung." },
      { title: "Bestand und Rückbau", text: "Demontage, Entsorgung sowie Reparaturen nach dem Ausbau alter Küchenteile sollten im Budget berücksichtigt werden." },
    ],
    fassade: [
      { title: "Fassadenzustand", text: "Risse, loser Putz, Feuchte oder beschädigte Bereiche erhöhen den Aufwand für Reparatur und Vorbereitung." },
      { title: "System und Oberfläche", text: "Anstrich, Putz, Klinker oder hinterlüftete Fassaden unterscheiden sich stark bei Material und Montage." },
      { title: "Dämmung", text: "Zusätzliche Wärmedämmung verändert Aufbau, Materialmenge und Detailausbildung an Fenstern, Sockel und Dachrand." },
      { title: "Gerüst und Gebäudegeometrie", text: "Höhe, Erker, Vorsprünge und schwierige Aufstellflächen beeinflussen Gerüst- und Arbeitskosten." },
    ],
    garten: [
      { title: "Fläche und Gelände", text: "Größe, Gefälle, Bodenverhältnisse und Zugänglichkeit beeinflussen Erdarbeiten, Transport und Arbeitszeit." },
      { title: "Material", text: "Pflaster, Zaun, Erde, Pflanzen und andere Materialien unterscheiden sich stark nach Qualität und Ausführung." },
      { title: "Unterbau und Vorbereitung", text: "Aushub, Frostschutz, Verdichtung, Fundamente oder Bodenaustausch können einen großen Teil des Projekts ausmachen." },
      { title: "Abtransport und Entsorgung", text: "Erde, Altbeläge, Grünabfälle oder Baumaterial müssen je nach Projekt abgefahren und entsorgt werden." },
    ],
  };

  return serviceDrivers[serviceSlug] ?? [
    { title: "Projektumfang", text: "Menge, Abmessungen und Komplexität bestimmen, wie viel Arbeitszeit und Material benötigt werden." },
    { title: "Bestand und Vorarbeiten", text: "Demontage, Reparaturen, Schutzmaßnahmen oder Entsorgung können zusätzliche Kosten verursachen." },
    { title: "Material und Ausführung", text: "Qualitätsniveau, Produktwahl und Sonderlösungen beeinflussen den Endpreis." },
    { title: "Region und Zugänglichkeit", text: "Lohnniveau, Anfahrt und schwierige Arbeitsbedingungen können konkrete Angebote verändern." },
  ];
}

export function getOfferChecks(item: PriceLike): OfferCheck[] {
  const unit = item.unit.toLocaleLowerCase("de-DE");
  const name = item.name.toLocaleLowerCase("de-DE");

  if (unit.includes("pro stunde") || name.includes("stundensatz")) {
    return [
      {
        title: "Abrechnungstakt",
        text: "Klären Sie, ob nach voller Stunde, angefangenen Zeiteinheiten oder mit einer Mindestarbeitszeit abgerechnet wird.",
      },
      {
        title: "Anfahrt",
        text: "Anfahrtszeit und Fahrtkosten sollten separat oder ausdrücklich als im Stundensatz enthalten ausgewiesen sein.",
      },
      {
        title: "Material und Kleinteile",
        text: "Ein Stundensatz deckt nicht automatisch Material, Ersatzteile oder Verbrauchsmittel ab. Diese Positionen sollten im Angebot erkennbar sein.",
      },
      {
        title: "Zuschläge",
        text: "Fragen Sie vorab nach möglichen Zuschlägen, etwa für Notdienst, Wochenende oder Arbeiten außerhalb üblicher Zeiten.",
      },
    ];
  }

  if (unit.includes("pro m²")) {
    return [
      {
        title: "Abgerechnete Fläche",
        text: "Das Angebot sollte nennen, welche Fläche tatsächlich berechnet wird und wie Öffnungen, Verschnitt oder Randbereiche behandelt werden.",
      },
      {
        title: "Untergrund und Vorarbeiten",
        text: "Ausgleich, Reinigung, Rückbau, Reparaturen oder Grundierung können den Quadratmeterpreis deutlich verändern und sollten separat beschrieben sein.",
      },
      {
        title: "Material enthalten?",
        text: "Prüfen Sie, ob der Richtpreis nur die Arbeitsleistung oder auch Material, Befestigungsmittel und Verbrauchsmaterial umfasst.",
      },
      {
        title: "Nebenleistungen",
        text: "Schutzmaßnahmen, Zuschnitt, Anschlüsse, Entsorgung und Abschlussarbeiten sollten nicht erst nach Auftragserteilung als Zusatzposition auftauchen.",
      },
    ];
  }

  if (unit.includes("pro lfd. meter")) {
    return [
      {
        title: "Laufmeter und Geometrie",
        text: "Neben der reinen Länge können Ecken, Anschlüsse, Tore oder Höhenunterschiede den Aufwand erhöhen. Die Mengenermittlung sollte nachvollziehbar sein.",
      },
      {
        title: "Materialqualität",
        text: "Materialart, Dimensionen, Beschichtung und Befestigung sollten konkret bezeichnet sein, damit Angebote wirklich vergleichbar bleiben.",
      },
      {
        title: "Untergrund und Befestigung",
        text: "Fundamente, Pfosten, Erdarbeiten oder besondere Befestigungen gehören in den beschriebenen Leistungsumfang.",
      },
      {
        title: "Rückbau und Entsorgung",
        text: "Falls Altmaterial entfernt werden muss, sollte klar sein, ob Demontage, Abtransport und Entsorgung im Preis enthalten sind.",
      },
    ];
  }

  if (unit.includes("pro stück") || unit.includes("pro fenster") || unit.includes("pro baum")) {
    return [
      {
        title: "Stückzahl und Abmessungen",
        text: "Anzahl, Größe und besondere Ausführung der einzelnen Positionen sollten vor Auftragserteilung eindeutig feststehen.",
      },
      {
        title: "Produkt oder Material",
        text: "Hersteller, Modell, Materialqualität oder technische Ausführung sollten so konkret sein, dass mehrere Angebote miteinander vergleichbar sind.",
      },
      {
        title: "Montageumfang",
        text: "Prüfen Sie, ob Befestigung, Anschlussarbeiten, Abdichtung, Anpassungen oder andere notwendige Montageschritte enthalten sind.",
      },
      {
        title: "Demontage und Entsorgung",
        text: "Bei Austausch oder Rückbau sollte das Angebot ausdrücklich regeln, ob Ausbau, Abtransport und Entsorgung zusätzlich berechnet werden.",
      },
    ];
  }

  if (unit.includes("pro kwh")) {
    return [
      {
        title: "Bemessungsgrundlage",
        text: "Achten Sie darauf, ob sich der Preis auf Brutto- oder nutzbare Speicherkapazität bezieht und welche Kapazität tatsächlich angeboten wird.",
      },
      {
        title: "Systemkomponenten",
        text: "Speicher, Wechselrichter, Steuerung und gegebenenfalls notwendige Zusatzhardware sollten einzeln oder als klar definiertes Paket benannt sein.",
      },
      {
        title: "Elektrik und Montage",
        text: "Prüfen Sie, ob elektrische Anpassungen, Leitungen, Schutztechnik und Montage bereits im Angebot enthalten sind.",
      },
      {
        title: "Inbetriebnahme",
        text: "Konfiguration, Funktionsprüfung und die für das konkrete System erforderliche Inbetriebnahme sollten im Leistungsumfang stehen.",
      },
    ];
  }

  return [
    {
      title: "Leistungsumfang",
      text: "Das Angebot sollte genau beschreiben, welche Arbeitsschritte im genannten Projektpreis enthalten sind und wo die Leistung endet.",
    },
    {
      title: "Material und Komponenten",
      text: "Produkte, Qualitätsstufe und größere Komponenten sollten konkret benannt oder mit einem nachvollziehbaren Budgetansatz versehen sein.",
    },
    {
      title: "Vorarbeiten und Rückbau",
      text: "Demontage, Schutzmaßnahmen, Entsorgung und notwendige Vorarbeiten sollten vor Auftragserteilung geklärt werden.",
    },
    {
      title: "Nebenarbeiten und Inbetriebnahme",
      text: "Prüfen Sie, ob Anschlüsse, Prüfungen, Abschlussarbeiten und eine gegebenenfalls nötige Inbetriebnahme bereits enthalten sind.",
    },
  ];
}
