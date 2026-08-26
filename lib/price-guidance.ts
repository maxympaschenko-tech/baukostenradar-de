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

export function getCalculationExample(item: PriceLike): CalculationExample | null {
  const unit = item.unit.toLocaleLowerCase("de-DE");

  let quantity = 0;
  let quantityLabel = "";

  if (unit.includes("pro m²")) {
    quantity = 20;
    quantityLabel = "20 m²";
  } else if (unit.includes("pro m³")) {
    quantity = 100;
    quantityLabel = "100 m³";
  } else if (unit.includes("pro lfd. meter")) {
    quantity = 20;
    quantityLabel = "20 lfd. Meter";
  } else if (unit.includes("pro stunde")) {
    quantity = 8;
    quantityLabel = "8 Arbeitsstunden";
  } else if (unit.includes("pro tür")) {
    quantity = 5;
    quantityLabel = "5 Türen";
  } else if (unit.includes("pro stück")) {
    quantity = 5;
    quantityLabel = "5 Stück";
  } else if (unit.includes("pro fenster")) {
    quantity = 5;
    quantityLabel = "5 Fenster";
  } else if (unit.includes("pro kwh")) {
    quantity = 10;
    quantityLabel = "10 kWh";
  } else if (unit.includes("pro baum")) {
    quantity = 2;
    quantityLabel = "2 Bäume";
  }

  if (!quantity) return null;

  return {
    quantity,
    quantityLabel,
    low: item.low * quantity,
    high: item.high * quantity,
  };
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

  if (unit.includes("pro m³")) {
    return [
      {
        title: "Volumenberechnung",
        text: "Das Angebot sollte nachvollziehbar ausweisen, wie der umbaute Raum oder das abzurechnende Volumen ermittelt wurde.",
      },
      {
        title: "Bauweise und Zugänglichkeit",
        text: "Massive Bauteile, Keller, enge Zufahrten und notwendiger Handabbruch können den Aufwand deutlich verändern.",
      },
      {
        title: "Entsorgung enthalten?",
        text: "Klären Sie, welche Abfallarten, Transportwege, Container und Deponiekosten bereits im Preis enthalten sind.",
      },
      {
        title: "Schadstoffe",
        text: "Verdacht auf Asbest oder andere Schadstoffe sollte vorab geklärt werden, weil dafür Spezialverfahren und zusätzliche Kosten entstehen können.",
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

  if (unit.includes("pro tür") || unit.includes("pro stück") || unit.includes("pro fenster") || unit.includes("pro baum")) {
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
