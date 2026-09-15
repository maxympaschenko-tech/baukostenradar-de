"use client";

import Link from "next/link";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="section">
      <div className="shell" style={{ maxWidth: 760 }}>
        <div className="contentCard proseCard">
          <span className="eyebrow">Technischer Fehler</span>
          <h1>Diese Seite konnte gerade nicht geladen werden</h1>
          <p>
            Bitte versuchen Sie es erneut. Falls der Fehler bestehen bleibt, können Sie über die Startseite oder das
            Kostenverzeichnis weiter navigieren.
          </p>
          <div className="heroActions">
            <button className="primaryButton" type="button" onClick={() => reset()}>
              Erneut versuchen
            </button>
            <Link className="ghostButton" href="/kosten">Zum Kostenverzeichnis</Link>
            <Link className="ghostButton" href="/">Zur Startseite</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
