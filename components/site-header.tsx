import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { MobileNavigation } from "@/components/mobile-navigation";

const nav = [
  ["Startseite", "/"],
  ["Preise", "/kosten"],
  ["Rechner", "/rechner"],
  ["Ratgeber", "/ratgeber"],
  ["Städte", "/staedte"],
] as const;

export function SiteHeader() {
  return (
    <header className="siteHeader siteHeaderPremium">
      <div className="shell headerInner premiumHeaderInner">
        <Link className="brand premiumBrand" href="/" aria-label="BauKostenRadar Startseite">
          <BrandLogo />
          <span className="brandWordmark">
            <strong>BauKosten</strong>
            <strong>Radar</strong>
          </span>
        </Link>

        <nav className="mainNav premiumMainNav" aria-label="Hauptnavigation">
          {nav.map(([label, href]) => (
            <Link key={label} href={href}>{label}</Link>
          ))}
        </nav>

        <MobileNavigation />
      </div>
    </header>
  );
}
