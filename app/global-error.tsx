"use client";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="de">
      <body>
        <main
          style={{
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            padding: "32px 20px",
            background: "#f5f7f9",
            color: "#153d5c",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          <section
            style={{
              width: "min(100%, 720px)",
              padding: "32px",
              borderRadius: "20px",
              background: "#ffffff",
              boxShadow: "0 16px 40px rgba(21, 61, 92, 0.12)",
            }}
          >
            <p style={{ margin: "0 0 8px", fontWeight: 700 }}>BauKostenRadar</p>
            <h1 style={{ margin: "0 0 16px", fontSize: "clamp(28px, 5vw, 42px)" }}>
              Die Seite konnte nicht geladen werden
            </h1>
            <p style={{ margin: "0 0 24px", lineHeight: 1.6, color: "#4b6171" }}>
              Ein technischer Fehler hat den Seitenaufbau unterbrochen. Versuchen Sie den Aufruf bitte noch einmal.
            </p>
            <button
              type="button"
              onClick={() => reset()}
              style={{
                border: 0,
                borderRadius: "12px",
                padding: "12px 18px",
                background: "#153d5c",
                color: "#ffffff",
                font: "inherit",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Erneut versuchen
            </button>
          </section>
        </main>
      </body>
    </html>
  );
}
