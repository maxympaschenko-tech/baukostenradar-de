export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "brandLogo brandLogoCompact" : "brandLogo"} aria-hidden="true">
      <svg viewBox="0 0 72 64" role="img">
        <path d="M8 27 36 7l28 20" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="16" y="38" width="10" height="17" rx="2" className="brandLogoAccent" />
        <rect x="31" y="31" width="10" height="24" rx="2" className="brandLogoPrimary" />
        <rect x="46" y="24" width="10" height="31" rx="2" className="brandLogoPrimary" />
        <rect x="31" y="17" width="4" height="4" rx="1" className="brandLogoWindow" />
        <rect x="37" y="17" width="4" height="4" rx="1" className="brandLogoWindow" />
      </svg>
    </span>
  );
}
