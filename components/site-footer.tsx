import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="shell footerGrid">
        <div>
          <strong>BauKostenRadar</strong>
          <p>Aktuelle Richtwerte und Rechner für Renovierung und Handwerk in Deutschland.</p>
        </div>
        <div>
          <strong>Bereiche</strong>
          <Link href="/kosten">Handwerkerkosten</Link>
          <Link href="/rechner/renovierungskosten">Renovierungskosten-Rechner</Link>
          <Link href="/staedte">Städte</Link>
          <Link href="/methodik">Methodik & Quellen</Link>
        </div>
        <div>
          <strong>Datenhinweis</strong>
          <p>Preisangaben sind unverbindliche Orientierungswerte. Datenstand und Quellen werden transparent auf den jeweiligen Seiten ausgewiesen.</p>
        </div>
      </div>
    </footer>
  );
}
