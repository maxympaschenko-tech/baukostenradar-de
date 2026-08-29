"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./guide-directory.module.css";

export type GuideDirectoryGuide = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  keyFact: string;
};

export type GuideDirectoryGroup = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  guides: GuideDirectoryGuide[];
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

export function GuideDirectory({ groups }: { groups: GuideDirectoryGroup[] }) {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("all");
  const normalizedQuery = normalize(query);

  const filteredGroups = useMemo(() => {
    return groups
      .filter((group) => topic === "all" || group.id === topic)
      .map((group) => {
        if (!normalizedQuery) return group;

        const groupText = normalize(`${group.eyebrow} ${group.title} ${group.description}`);
        const groupMatches = groupText.includes(normalizedQuery);
        const guides = group.guides.filter((guide) => {
          if (groupMatches) return true;
          const guideText = normalize(
            `${guide.eyebrow} ${guide.title} ${guide.description} ${guide.keyFact}`,
          );
          return guideText.includes(normalizedQuery);
        });

        return { ...group, guides };
      })
      .filter((group) => group.guides.length > 0);
  }, [groups, normalizedQuery, topic]);

  const visibleGuideCount = filteredGroups.reduce((sum, group) => sum + group.guides.length, 0);
  const totalGuideCount = groups.reduce((sum, group) => sum + group.guides.length, 0);
  const hasFilters = Boolean(query) || topic !== "all";

  return (
    <>
      <section className={`section ${styles.intro}`} aria-labelledby="ratgeber-finden">
        <div className="shell">
          <div className="premiumSectionHeading">
            <div>
              <span className="eyebrow">Ratgeber finden</span>
              <h2 id="ratgeber-finden">Schnell zum passenden Kostenthema</h2>
              <p>
                Durchsuchen Sie alle Ratgeber nach Gewerk, Bauteil, Projektgröße oder Kostenfrage und grenzen Sie die Auswahl bei Bedarf auf einen Themenbereich ein.
              </p>
            </div>
          </div>

          <div className={styles.controls} role="search" aria-label="Ratgeber durchsuchen">
            <label className={styles.searchField}>
              <span>Suchbegriff</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="z. B. Dachfenster, 100 m², Parkett oder Wärmepumpe"
                autoComplete="off"
              />
            </label>

            <label className={styles.topicField}>
              <span>Themenbereich</span>
              <select value={topic} onChange={(event) => setTopic(event.target.value)}>
                <option value="all">Alle Themenbereiche</option>
                {groups.map((group) => (
                  <option value={group.id} key={group.id}>{group.eyebrow}</option>
                ))}
              </select>
            </label>

            <div className={styles.status} aria-live="polite">
              <strong>{visibleGuideCount}</strong>
              <span>Ratgeber gefunden</span>
              {hasFilters ? (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setTopic("all");
                  }}
                >
                  Filter zurücksetzen
                </button>
              ) : (
                <small>{totalGuideCount} Ratgeber im Themenverzeichnis</small>
              )}
            </div>
          </div>

          <nav className={styles.topicLinks} aria-label="Schnellnavigation Themenbereiche">
            {groups.map((group) => (
              <button type="button" key={group.id} onClick={() => setTopic(group.id)}>
                {group.eyebrow}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {filteredGroups.length > 0 ? filteredGroups.map((group, index) => (
        <section
          className={`section ${styles.directorySection}${index % 2 === 0 ? "" : " sectionAlt"}`}
          id={`thema-${group.id}`}
          key={group.id}
        >
          <div className="shell">
            <div className="premiumSectionHeading">
              <div>
                <span className="eyebrow">{group.eyebrow}</span>
                <h2>{group.title}</h2>
                <p>{group.description}</p>
              </div>
            </div>

            <div className="directoryGrid">
              {group.guides.map((guide) => (
                <article className="directoryCard" key={guide.slug}>
                  <span className="eyebrow">{guide.eyebrow}</span>
                  <h3>{guide.title}</h3>
                  <p>{guide.description}</p>
                  <div className="miniPrice">
                    <span>Wichtigster Richtwert</span>
                    <strong>{guide.keyFact}</strong>
                  </div>
                  <Link className="textLink" href={`/ratgeber/${guide.slug}`}>Ratgeber lesen →</Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )) : (
        <section className={`section ${styles.emptySection}`}>
          <div className="shell">
            <div className={`contentCard ${styles.emptyState}`}>
              <span className="eyebrow">Keine Treffer</span>
              <h2>Kein Ratgeber passt zu dieser Suche</h2>
              <p>Versuchen Sie einen allgemeineren Begriff oder setzen Sie den Themenfilter zurück.</p>
              <button
                type="button"
                className={styles.resetButton}
                onClick={() => {
                  setQuery("");
                  setTopic("all");
                }}
              >
                Alle Ratgeber anzeigen
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
