"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const nav = [
  ["Startseite", "/"],
  ["Preise", "/kosten"],
  ["Rechner", "/rechner"],
  ["Städte", "/staedte"],
  ["Über uns", "/ueber-uns"],
  ["Kontakt", "/kontakt"],
] as const;

export function MobileNavigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <button
        className="mobileMenuButton"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation-panel"
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>

      {open ? (
        <div className="mobileMenuBackdrop" onClick={() => setOpen(false)}>
          <div
            className="mobileMenuPanel"
            id="mobile-navigation-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mobileMenuTop">
              <strong>Navigation</strong>
              <button type="button" aria-label="Menü schließen" onClick={() => setOpen(false)}>×</button>
            </div>
            <nav aria-label="Mobile Hauptnavigation">
              {nav.map(([label, href]) => (
                <Link key={href} href={href} onClick={() => setOpen(false)}>
                  <span>{label}</span><span aria-hidden="true">›</span>
                </Link>
              ))}
            </nav>
            <Link className="mobileMenuOffer" href="/angebot" onClick={() => setOpen(false)}>
              Kostenloses Angebot einholen
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
