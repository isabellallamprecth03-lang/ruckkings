export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #1f5f3a 0%, #0b1020 45%, #09111b 100%)",
        color: "white",
        padding: "48px 24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 14px",
            borderRadius: "999px",
            background: "rgba(255,215,0,0.12)",
            border: "1px solid rgba(255,215,0,0.28)",
            color: "#facc15",
            fontSize: "14px",
            marginBottom: "24px",
            fontWeight: "bold",
          }}
        >
          🏉 Rugby. Fantasy. Live.
        </div>

        <h1
          style={{
            fontSize: "64px",
            lineHeight: "1.02",
            margin: "0 0 18px 0",
            maxWidth: "760px",
          }}
        >
          Ruckings Live
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#d1d5db",
            maxWidth: "780px",
            margin: "0 0 34px 0",
            lineHeight: 1.4,
          }}
        >
          Die nuwe plek vir rugby fans, fantasy leagues, live updates en slim
          mobile experiences.
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a
            href="#features"
            style={{
              background: "#facc15",
              color: "#0b1020",
              padding: "14px 24px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
              boxShadow: "0 10px 30px rgba(250,204,21,0.25)",
            }}
          >
            Begin nou
          </a>

          <a
            href="#about"
            style={{
              border: "1px solid rgba(255,255,255,0.22)",
              color: "white",
              padding: "14px 24px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            Leer meer
          </a>
        </div>
      </section>

      <section
        id="features"
        style={{
          maxWidth: "1100px",
          margin: "70px auto 0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: "20px",
        }}
      >
        {[
          {
            icon: "⚡",
            title: "Live Updates",
            text: "Volg wedstryde, spanne en tellings in real time.",
          },
          {
            icon: "🏆",
            title: "Fantasy Rugby",
            text: "Bou jou span en kompeteer teen ander spelers.",
          },
          {
            icon: "📱",
            title: "Mobile First",
            text: "Ontwerp om perfek te werk op fone en tablets.",
          },
          {
            icon: "🚀",
            title: "Groei Potensiaal",
            text: "Gereed om uitgebrei te word na 'n volle platform.",
          },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(250,204,21,0.12)",
              borderRadius: "20px",
              padding: "24px",
              boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
            }}
          >
            <div style={{ fontSize: "28px", marginBottom: "12px" }}>
              {item.icon}
            </div>
            <h3 style={{ margin: "0 0 10px 0", fontSize: "24px" }}>
              {item.title}
            </h3>
            <p style={{ margin: 0, color: "#d1d5db", lineHeight: 1.65 }}>
              {item.text}
            </p>
          </div>
        ))}
      </section>

      <section
        id="about"
        style={{
          maxWidth: "1100px",
          margin: "70px auto 0 auto",
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(250,204,21,0.1)",
          borderRadius: "24px",
          padding: "30px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
        }}
      >
        <div
          style={{
            color: "#facc15",
            fontWeight: "bold",
            marginBottom: "10px",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontSize: "13px",
          }}
        >
          Volgende fase
        </div>

        <h2 style={{ marginTop: 0, fontSize: "38px", marginBottom: "12px" }}>
          Bou dit uit na ’n volle rugby platform
        </h2>

        <p style={{ color: "#d1d5db", lineHeight: 1.8, marginBottom: 0 }}>
          Hierdie is nou die foundation. Van hier af kan ons login, spelers,
          spanne, fixtures, fantasy punte, admin dashboards en monetisering
          bybou.
        </p>
      </section>
    </main>
  );
}
