"use client";

export function ConsentSettingsButton() {
  return (
    <button
      className="footerConsentButton"
      type="button"
      onClick={() => window.dispatchEvent(new Event("baukostenradar:open-consent"))}
    >
      Datenschutz-Einstellungen
    </button>
  );
}
