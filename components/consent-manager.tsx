"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type ConsentState = {
  analytics: boolean;
  version: 2;
  updatedAt: string;
};

type LegacyConsentState = {
  analytics?: boolean;
  marketing?: boolean;
  version?: number;
};

const STORAGE_KEY = "baukostenradar-consent-v2";
const LEGACY_STORAGE_KEY = "baukostenradar-consent-v1";

function applyAnalyticsConsent(analytics: boolean) {
  const values = {
    analytics_storage: analytics ? "granted" : "denied",
  };

  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", values);
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(["consent", "update", values]);
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "consent_update",
    consent_analytics: analytics,
  });
}

export function ConsentManager() {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<ConsentState>;
        if (parsed.version === 2) {
          const nextAnalytics = Boolean(parsed.analytics);
          setAnalytics(nextAnalytics);
          applyAnalyticsConsent(nextAnalytics);
          return;
        }
      }

      const legacySaved = window.localStorage.getItem(LEGACY_STORAGE_KEY);
      if (legacySaved) {
        const legacy = JSON.parse(legacySaved) as LegacyConsentState;
        if (legacy.version === 1) {
          const migrated: ConsentState = {
            analytics: Boolean(legacy.analytics),
            version: 2,
            updatedAt: new Date().toISOString(),
          };
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
          window.localStorage.removeItem(LEGACY_STORAGE_KEY);
          setAnalytics(migrated.analytics);
          applyAnalyticsConsent(migrated.analytics);
          return;
        }
      }

      setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    const openSettings = () => {
      setVisible(true);
      setSettingsOpen(true);
    };

    window.addEventListener("baukostenradar:open-consent", openSettings);
    return () => window.removeEventListener("baukostenradar:open-consent", openSettings);
  }, []);

  function save(nextAnalytics: boolean) {
    const consent: ConsentState = {
      analytics: nextAnalytics,
      version: 2,
      updatedAt: new Date().toISOString(),
    };

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    setAnalytics(nextAnalytics);
    applyAnalyticsConsent(nextAnalytics);
    setVisible(false);
    setSettingsOpen(false);
  }

  if (!visible) return null;

  return (
    <div className="consentBackdrop" role="presentation">
      <section
        className="consentCard"
        role="dialog"
        aria-modal="true"
        aria-labelledby="consent-title"
        aria-describedby="consent-description"
      >
        <div className="consentIntro">
          <span className="eyebrow">Datenschutz</span>
          <h2 id="consent-title">Ihre Privatsphäre-Einstellungen</h2>
          <p id="consent-description">
            Wir verwenden notwendige Funktionen für den Betrieb der Website. Mit Ihrer Einwilligung nutzen wir
            zusätzlich Google Analytics zur Reichweitenmessung. Werbe- und Personalisierungssignale bleiben derzeit
            deaktiviert und werden erst vor einer späteren Werbeeinbindung über eine dafür geeignete Consent-Lösung
            verwaltet.
          </p>
          <p className="consentLegal">
            Details finden Sie in unserer <Link href="/datenschutz">Datenschutzerklärung</Link>.
          </p>
        </div>

        {settingsOpen && (
          <div className="consentOptions">
            <label className="consentOption consentOptionLocked">
              <span>
                <strong>Notwendig</strong>
                <small>Grundfunktionen und Speicherung Ihrer Datenschutzauswahl.</small>
              </span>
              <input type="checkbox" checked disabled aria-label="Notwendige Funktionen immer aktiv" />
            </label>

            <label className="consentOption">
              <span>
                <strong>Statistik</strong>
                <small>Google Analytics 4 zur Messung von Reichweite und Nutzung.</small>
              </span>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(event) => setAnalytics(event.target.checked)}
                aria-label="Statistik erlauben"
              />
            </label>
          </div>
        )}

        <div className="consentActions">
          <button className="consentButton consentButtonSecondary" type="button" onClick={() => save(false)}>
            Nur notwendige
          </button>
          {settingsOpen ? (
            <button className="consentButton consentButtonSecondary" type="button" onClick={() => save(analytics)}>
              Auswahl speichern
            </button>
          ) : (
            <button className="consentButton consentButtonSecondary" type="button" onClick={() => setSettingsOpen(true)}>
              Einstellungen
            </button>
          )}
          <button className="consentButton consentButtonPrimary" type="button" onClick={() => save(true)}>
            Statistik akzeptieren
          </button>
        </div>
      </section>
    </div>
  );
}
