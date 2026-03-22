export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #1f5f3a 0%, #0b1020 45%, #09111b 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 30px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(6px)",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "20px" }}>
          🏉 Ruckings
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#features" style={{ color: "white", textDecoration: "none" }}>
            Features
          </a>
          <a href="#about" style={{ color: "white", textDecoration: "none" }}>
            About
          </a>
        </div>

        <a
          href="#"
          style={{
            background: "#facc15",
            color: "#0b1020",
            padding: "10px 16px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Login
        </a>
      </nav>

      {/* HERO */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "80px auto 0 auto",
          padding: "0 20px",
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
            lineHeight: "1.05",
            marginBottom: "20px",
          }}
        >
          Ruckings Live
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#d1d5db",
            maxWidth: "700px",
            marginBottom: "30px",
          }}
        >
          Die nuwe plek vir rugby fans, fantasy leagues en live wedstryd
          aksie.
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
            }}
          >
            Begin nou
          </a>

          <a
            href="#about"
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "14px 24px",
              borderRadius: "12px",
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Leer meer
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        style={{
          maxWidth: "1100px",
          margin: "80px auto",
          padding: "0 20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: "20px",
        }}
      >
        {[
          { icon: "⚡", title: "Live Updates", text: "Real-time wedstryde" },
          { icon: "🏆", title: "Fantasy Rugby", text: "Bou jou span" },
          { icon: "📱", title: "Mobile First", text: "Perfek vir jou foon" },
          { icon: "🚀", title: "Groei", text: "Skalering na 'n platform" },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              background: "rgba(255,255,255,0.08)",
              borderRadius: "18px",
              padding: "20px",
            }}
          >
            <div style={{ fontSize: "28px" }}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p style={{ color: "#d1d5db" }}>{item.text}</p>
          </div>
        ))}
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          maxWidth: "1100px",
          margin: "0 auto 80px auto",
          padding: "0 20px",
        }}
      >
        <h2 style={{ fontSize: "36px" }}>Volgende fase</h2>
        <p style={{ color: "#d1d5db", maxWidth: "700px" }}>
          Login, leagues, players, leaderboard en monetisering kom volgende.
        </p>
      </section>
    </main>
  );
}
