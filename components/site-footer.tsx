import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="shell footerGrid">
        <div>
          <strong>BauKostenRadar</strong>
          <p>Aktuelle Richtwerte und Rechner für Renovierung und Handwerk in Deutschland.</p>
          <p>
            Kontakt: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><br />
            Telefon: <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
          </p>
        </div>
        <div>
          <strong>Bereiche</strong>
          <Link href="/kosten">Handwerkerkosten</Link>
          <Link href="/rechner">Kostenrechner</Link>
          <Link href="/rechner/renovierungskosten">Renovierungskosten-Rechner</Link>
          <Link href="/rechner/handwerkerkosten">Handwerkerkosten-Rechner</Link>
          <Link href="/staedte">Städte</Link>
          <Link href="/methodik">Methodik & Quellen</Link>
          <Link href="/kontakt">Kontakt</Link>
        </div>
        <div>
          <strong>Rechtliches</strong>
          <Link href="/impressum">Impressum</Link>
          <p>Preisangaben sind unverbindliche Orientierungswerte. Datenstand und Quellen werden transparent auf den jeweiligen Seiten ausgewiesen.</p>
        </div>
      </div>
    </footer>
  );
}
