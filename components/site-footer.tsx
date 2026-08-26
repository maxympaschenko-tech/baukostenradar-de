import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="shell footerGrid">
        <div>
          <strong>BauKostenRadar</strong>
          <p>Preiswissen und Rechner für Renovierung und Handwerk in Deutschland.</p>
        </div>
        <div>
          <strong>Bereiche</strong>
          <Link href="/rechner/renovierungskosten">Renovierungskosten-Rechner</Link>
          <Link href="/kosten/badsanierung">Badsanierung</Link>
          <Link href="/kosten/dachsanierung">Dachsanierung</Link>
        </div>
        <div>
          <strong>Hinweis</strong>
          <p>Die aktuelle Rechnerlogik ist ein MVP-Modell und wird vor dem öffentlichen Launch mit dokumentierten Marktdaten kalibriert.</p>
        </div>
      </div>
    </footer>
  );
}
