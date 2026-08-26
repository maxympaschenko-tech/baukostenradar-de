"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const nav = [
  ["Startseite", "/"],
  ["Preise", "/kosten"],
  ["Rechner", "/rechner"],
  ["Städte", "/staedte"],
] as const;

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const onResize = () => {
      if (window.innerWidth > 920) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const menu = open ? (
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
      </div>
    </div>
  ) : null;

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
      {mounted && menu ? createPortal(menu, document.body) : null}
    </>
  );
}
