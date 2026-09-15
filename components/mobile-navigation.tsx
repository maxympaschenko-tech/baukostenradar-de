"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const nav = [
  ["Startseite", "/"],
  ["Preise", "/kosten"],
  ["Rechner", "/rechner"],
  ["Ratgeber", "/ratgeber"],
  ["Städte", "/staedte"],
] as const;

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const onResize = () => {
      if (window.innerWidth > 920) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      menuButtonRef.current?.focus();
    };
  }, [open]);

  const menu = open ? (
    <div className="mobileMenuBackdrop" onClick={() => setOpen(false)}>
      <div
        ref={panelRef}
        className="mobileMenuPanel"
        id="mobile-navigation-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mobileMenuTop">
          <strong>Navigation</strong>
          <button ref={closeButtonRef} type="button" aria-label="Menü schließen" onClick={() => setOpen(false)}>×</button>
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
        ref={menuButtonRef}
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
