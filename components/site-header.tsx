import Link from "next/link";

const nav = [
  ["Kosten", "/kosten"],
  ["Rechner", "/rechner/renovierungskosten"],
  ["Städte", "/staedte"],
  ["Methodik", "/methodik"],
  ["Kontakt", "/kontakt"],
] as const;

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <div className="shell headerInner">
        <Link className="brand" href="/" aria-label="BauKostenRadar Startseite">
          <span className="brandMark">BKR</span>
          <span>BauKostenRadar</span>
        </Link>
        <nav className="mainNav" aria-label="Hauptnavigation">
          {nav.map(([label, href]) => (
            <Link key={label} href={href}>{label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
