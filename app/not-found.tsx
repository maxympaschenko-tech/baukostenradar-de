import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="shell contentCard" style={{ maxWidth: 760 }}>
        <span className="eyebrow">404</span>
        <h1>Seite nicht gefunden</h1>
        <p>Die gesuchte Seite existiert noch nicht oder wurde verschoben.</p>
        <Link className="primaryButton" href="/">Zur Startseite</Link>
      </div>
    </section>
  );
}
