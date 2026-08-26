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
  marketing: boolean;
  version: 1;
  updatedAt: string;
};

const STORAGE_KEY = "baukostenradar-consent-v1";

function applyGoogleConsent(consent: Pick<ConsentState, "analytics" | "marketing">) {
  const values = {
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_storage: consent.marketing ? "granted" : "denied",
    ad_user_data: consent.marketing ? "granted" : "denied",
    ad_personalization: consent.marketing ? "granted" : "denied",
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
    consent_analytics: consent.analytics,
    consent_marketing: consent.marketing,
  });
}

export function ConsentManager() {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        setVisible(true);
        return;
      }

      const parsed = JSON.parse(saved) as Partial<ConsentState>;
      if (parsed.version !== 1) {
        setVisible(true);
        return;
      }

      const next = {
        analytics: Boolean(parsed.analytics),
        marketing: Boolean(parsed.marketing),
      };
      setAnalytics(next.analytics);
      setMarketing(next.marketing);
      applyGoogleConsent(next);
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

  function save(nextAnalytics: boolean, nextMarketing: boolean) {
    const consent: ConsentState = {
      analytics: nextAnalytics,
      marketing: nextMarketing,
      version: 1,
      updatedAt: new Date().toISOString(),
    };

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    setAnalytics(nextAnalytics);
    setMarketing(nextMarketing);
    applyGoogleConsent(consent);
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
            zusätzlich Google Analytics zur Reichweitenmessung. Marketing- und Werbesignale sind für eine spätere
            Werbeeinbindung vorbereitet. Sie können Ihre Auswahl jederzeit ändern.
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

            <label className="consentOption">
              <span>
                <strong>Marketing</strong>
                <small>Werbe- und Personalisierungssignale für zukünftige Google-Werbedienste.</small>
              </span>
              <input
                type="checkbox"
                checked={marketing}
                onChange={(event) => setMarketing(event.target.checked)}
                aria-label="Marketing erlauben"
              />
            </label>
          </div>
        )}

        <div className="consentActions">
          <button className="consentButton consentButtonSecondary" type="button" onClick={() => save(false, false)}>
            Alle ablehnen
          </button>
          {settingsOpen ? (
            <button className="consentButton consentButtonSecondary" type="button" onClick={() => save(analytics, marketing)}>
              Auswahl speichern
            </button>
          ) : (
            <button className="consentButton consentButtonSecondary" type="button" onClick={() => setSettingsOpen(true)}>
              Einstellungen
            </button>
          )}
          <button className="consentButton consentButtonPrimary" type="button" onClick={() => save(true, true)}>
            Alle akzeptieren
          </button>
        </div>
      </section>
    </div>
  );
}
