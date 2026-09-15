import Link from "next/link";

const recoveryLinks = [
  {
    href: "/kosten",
    title: "Handwerkerkosten",
    description: "Preisbereiche, Leistungen und geprüfte Quellen ansehen.",
  },
  {
    href: "/rechner",
    title: "Kostenrechner",
    description: "Renovierungs-, Bad- und Handwerkerkosten grob kalkulieren.",
  },
  {
    href: "/ratgeber",
    title: "Ratgeber",
    description: "Kostenbeispiele und Planungshilfen für konkrete Projekte finden.",
  },
];

export default function NotFound() {
  return (
    <section className="section">
      <div className="shell" style={{ maxWidth: 920 }}>
        <div className="contentCard proseCard">
          <span className="eyebrow">404 · Seite nicht gefunden</span>
          <h1>Diese Seite ist nicht mehr erreichbar</h1>
          <p>
            Die gesuchte Adresse wurde möglicherweise geändert, enthält einen Tippfehler oder verweist auf eine
            inzwischen ersetzte Seite. Über die folgenden Bereiche gelangen Sie schnell wieder zu den aktuellen
            Inhalten von BauKostenRadar.
          </p>
          <div className="heroActions">
            <Link className="primaryButton" href="/">Zur Startseite</Link>
            <Link className="ghostButton" href="/kosten">Alle Kostenbereiche</Link>
          </div>
        </div>

        <div className="sourceList" style={{ marginTop: 24 }}>
          {recoveryLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
