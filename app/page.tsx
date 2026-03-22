export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #0b1020 0%, #111827 55%, #1f2937 100%)",
        color: "white",
        padding: "48px 24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 14px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.1)",
            fontSize: "14px",
            marginBottom: "24px",
          }}
        >
          🏉 Live Rugby Platform
        </div>

        <h1
          style={{
            fontSize: "56px",
            lineHeight: "1.05",
            margin: "0 0 16px 0",
          }}
        >
          Ruckings Live
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#d1d5db",
            maxWidth: "720px",
            margin: "0 0 32px 0",
          }}
        >
          Die nuwe plek vir rugby fans, fantasy leagues, live updates en slim
          mobile experiences.
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a
            href="#features"
            style={{
              background: "#22c55e",
              color: "#0b1020",
              padding: "14px 22px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Begin nou
          </a>

          <a
            href="#about"
            style={{
              border: "1px solid rgba(255,255,255,0.25)",
              color: "white",
              padding: "14px 22px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Leer meer
          </a>
        </div>
      </section>

      <section
        id="features"
        style={{
          maxWidth: "960px",
          margin: "64px auto 0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {[
          {
            title: "Live Updates",
            text: "Volg wedstryde, spanne en tellings in real time.",
          },
          {
            title: "Fantasy Rugby",
            text: "Bou jou span en kompeteer teen ander spelers.",
          },
          {
            title: "Mobile First",
            text: "Ontwerp om perfek te werk op fone en tablets.",
          },
          {
            title: "Groei Potensiaal",
            text: "Gereed om uitgebrei te word na 'n volle platform.",
          },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "18px",
              padding: "22px",
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: "10px", fontSize: "22px" }}>
              {item.title}
            </h3>
            <p style={{ margin: 0, color: "#d1d5db", lineHeight: 1.6 }}>
              {item.text}
            </p>
          </div>
        ))}
      </section>

      <section
        id="about"
        style={{
          maxWidth: "960px",
          margin: "64px auto 0 auto",
          background: "rgba(255,255,255,0.06)",
          borderRadius: "22px",
          padding: "28px",
        }}
      >
        <h2 style={{ marginTop: 0, fontSize: "34px" }}>Volgende fase</h2>
        <p style={{ color: "#d1d5db", lineHeight: 1.7, marginBottom: 0 }}>
          Hierdie is nou die foundation. Van hier af kan ons login, spelers,
          spanne, fixtures, fantasy punte, admin dashboards en monetisering
          bybou.
        </p>
      </section>
    </main>
  );
}
