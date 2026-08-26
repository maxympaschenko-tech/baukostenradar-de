import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { ConsentSettingsButton } from "@/components/consent-settings-button";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="siteFooter premiumFooter">
      <div className="shell footerGrid">
        <div>
          <Link className="footerBrand" href="/" aria-label="BauKostenRadar Startseite">
            <BrandLogo compact />
            <span>
              <strong>BauKostenRadar</strong>
              <small>Kosten transparent planen</small>
            </span>
          </Link>
          <p>Aktuelle Richtwerte und Rechner für Renovierung und Handwerk in Deutschland.</p>
          <p className="footerContact">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
          </p>
        </div>
        <div>
          <strong>Bereiche</strong>
          <Link href="/kosten">Handwerkerkosten</Link>
          <Link href="/rechner">Kostenrechner</Link>
          <Link href="/ratgeber">Ratgeber</Link>
          <Link href="/ratgeber/sanierungskosten-pro-qm">Sanierungskosten pro m²</Link>
          <Link href="/ratgeber/handwerker-stundensaetze">Handwerker-Stundensätze</Link>
          <Link href="/staedte">Städte</Link>
          <Link href="/methodik">Methodik & Quellen</Link>
          <Link href="/ueber-uns">Über BauKostenRadar</Link>
        </div>
        <div>
          <strong>Rechtliches & Kontakt</strong>
          <Link href="/kontakt">Kontakt</Link>
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutzerklärung</Link>
          <ConsentSettingsButton />
          <p>Preisangaben sind unverbindliche Orientierungswerte. Datenstand und Quellen werden transparent auf den jeweiligen Seiten ausgewiesen.</p>
        </div>
      </div>
    </footer>
  );
}
