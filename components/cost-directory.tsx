"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./cost-directory.module.css";

export type CostDirectoryItem = {
  name: string;
  href: string;
  price: string;
  unit: string;
};

export type CostDirectoryService = {
  slug: string;
  shortTitle: string;
  description: string;
  icon: string;
  href: string;
  items: CostDirectoryItem[];
};

function normalize(value: string) {
  return value
    .toLocaleLowerCase("de-DE")
    .replaceAll("ä", "ae")
    .replaceAll("ö", "oe")
    .replaceAll("ü", "ue")
    .replaceAll("ß", "ss")
    .trim();
}

export function CostDirectory({ services }: { services: CostDirectoryService[] }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = normalize(query);
  const totalPriceCount = services.reduce((sum, service) => sum + service.items.length, 0);

  const matches = useMemo(() => {
    return services
      .map((service) => {
        const serviceText = normalize(`${service.shortTitle} ${service.description}`);
        const matchingItems = normalizedQuery
          ? service.items.filter((item) => normalize(`${item.name} ${item.unit}`).includes(normalizedQuery))
          : [];
        const serviceMatches = !normalizedQuery || serviceText.includes(normalizedQuery) || matchingItems.length > 0;

        if (!serviceMatches) return null;

        return {
          service,
          matchingItems,
          visibleItems: normalizedQuery && matchingItems.length > 0
            ? matchingItems.slice(0, 4)
            : service.items.slice(0, 3),
        };
      })
      .filter((match): match is NonNullable<typeof match> => Boolean(match));
  }, [normalizedQuery, services]);

  const matchingPriceCount = matches.reduce((sum, match) => sum + match.matchingItems.length, 0);

  return (
    <section className={`section ${styles.section}`} aria-labelledby="gewerke-finden">
      <div className="shell">
        <div className="sectionHeading">
          <span className="eyebrow">Alle Gewerke</span>
          <h2 id="gewerke-finden">Handwerkerpreise nach Bereich</h2>
          <p>
            Suchen Sie direkt nach Gewerk oder Einzelleistung. Bei einem Treffer in einer Preisposition wird die passende Arbeit in der Gewerk-Karte nach oben geholt.
          </p>
        </div>

        <div className={styles.controls} role="search" aria-label="Handwerkerpreise durchsuchen">
          <label className={styles.searchField}>
            <span>Gewerk oder Leistung suchen</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="z. B. Sicherungskasten, Parkett, Haustür oder Wärmepumpe"
              autoComplete="off"
            />
          </label>

          <div className={styles.status} aria-live="polite">
            <strong>{matches.length}</strong>
            <span>{matches.length === 1 ? "Gewerk gefunden" : "Gewerke gefunden"}</span>
            {normalizedQuery ? (
              <>
                <small>{matchingPriceCount} direkt passende Preispositionen</small>
                <button type="button" onClick={() => setQuery("")}>Suche zurücksetzen</button>
              </>
            ) : (
              <small>{totalPriceCount} Preispositionen insgesamt</small>
            )}
          </div>
        </div>

        {matches.length > 0 ? (
          <div className="directoryGrid">
            {matches.map(({ service, matchingItems, visibleItems }) => (
              <article className="directoryCard" key={service.slug}>
                <div className="directoryCardTop">
                  <span className="serviceIcon" aria-hidden="true">{service.icon}</span>
                  <div>
                    <h2>{service.shortTitle}</h2>
                    <p>{service.description}</p>
                  </div>
                </div>
                {matchingItems.length > 0 ? <span className={styles.matchNote}>Passende Preispositionen zuerst</span> : null}
                <div className="directoryPrices">
                  {visibleItems.map((item) => (
                    <div key={item.name}>
                      <Link className="priceItemLink" href={item.href}>{item.name}</Link>
                      <strong>{item.price}</strong>
                      <small>{item.unit}</small>
                    </div>
                  ))}
                </div>
                <Link className="primaryButton" href={service.href}>Alle {service.shortTitle}-Preise</Link>
              </article>
            ))}
          </div>
        ) : (
          <div className={`contentCard ${styles.emptyState}`}>
            <span className="eyebrow">Keine Treffer</span>
            <h3>Keine Preisposition passt zu dieser Suche</h3>
            <p>Versuchen Sie einen allgemeineren Begriff oder zeigen Sie wieder alle Gewerke an.</p>
            <button type="button" className={styles.resetButton} onClick={() => setQuery("")}>
              Alle Gewerke anzeigen
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
