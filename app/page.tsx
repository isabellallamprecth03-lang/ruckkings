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
        <div style={{ fontWeight: "bold", fontSize: "20px" }}>🏉 Ruckings</div>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#features" style={{ color: "white", textDecoration: "none" }}>
            Features
          </a>
          <a href="#login" style={{ color: "white", textDecoration: "none" }}>
            Login
          </a>
        </div>
      </nav>

      <section
        style={{
          maxWidth: "1100px",
          margin: "70px auto 0 auto",
          padding: "0 20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "32px",
          alignItems: "center",
        }}
      >
        <div>
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
              fontSize: "60px",
              lineHeight: "1.05",
              marginBottom: "18px",
            }}
          >
            Ruckings Live
          </h1>

          <p
            style={{
              fontSize: "22px",
              color: "#d1d5db",
              maxWidth: "650px",
              marginBottom: "28px",
              lineHeight: 1.5,
            }}
          >
            Join fantasy leagues, track live rugby action en bou jou span op ’n
            premium platform.
          </p>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a
              href="#login"
              style={{
                background: "#facc15",
                color: "#0b1020",
                padding: "14px 24px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Login
            </a>

            <a
              href="#features"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "14px 24px",
                borderRadius: "12px",
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Explore Features
            </a>
          </div>
        </div>

        <div
          id="login"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "24px",
            padding: "28px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
          }}
        >
          <h2 style={{ marginTop: 0, fontSize: "32px", marginBottom: "8px" }}>
            Login
          </h2>
          <p style={{ color: "#d1d5db", marginBottom: "22px" }}>
            Sign in om jou fantasy team en leagues te bestuur.
          </p>

          <div style={{ display: "grid", gap: "14px" }}>
            <input
              type="email"
              placeholder="Email address"
              style={{
                padding: "16px",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.08)",
                color: "white",
                fontSize: "16px",
                outline: "none",
              }}
            />
            <input
              type="password"
              placeholder="Password"
              style={{
                padding: "16px",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.08)",
                color: "white",
                fontSize: "16px",
                outline: "none",
              }}
            />

            <button
              style={{
                background: "#facc15",
                color: "#0b1020",
                border: "none",
                padding: "16px",
                borderRadius: "12px",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Sign In
            </button>

            <button
              style={{
                background: "transparent",
                color: "white",
                border: "1px solid rgba(255,255,255,0.18)",
                padding: "16px",
                borderRadius: "12px",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Create Account
            </button>
          </div>
        </div>
      </section>

      <section
        id="features"
        style={{
          maxWidth: "1100px",
          margin: "80px auto",
          padding: "0 20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {[
          { icon: "⚡", title: "Live Updates", text: "Real-time wedstryde en scores." },
          { icon: "🏆", title: "Fantasy Rugby", text: "Bou jou span en klim die leaderboard." },
          { icon: "📱", title: "Mobile First", text: "Ontwerp vir vinnige, mooi phone usage." },
          { icon: "💰", title: "Paid Leagues", text: "Skep leagues met entry fees en pryse." },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              background: "rgba(255,255,255,0.08)",
              borderRadius: "18px",
              padding: "22px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div style={{ fontSize: "28px", marginBottom: "10px" }}>{item.icon}</div>
            <h3 style={{ margin: "0 0 10px 0" }}>{item.title}</h3>
            <p style={{ color: "#d1d5db", margin: 0, lineHeight: 1.6 }}>
              {item.text}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
