export default function Home() {
  const players = [
    { name: "Cheslin Kolbe", pos: "Wing", price: "R12m" },
    { name: "Siya Kolisi", pos: "Loose Forward", price: "R10m" },
    { name: "Handré Pollard", pos: "Flyhalf", price: "R11m" },
    { name: "Pieter-Steph du Toit", pos: "Forward", price: "R13m" },
    { name: "Damian Willemse", pos: "Back", price: "R9m" },
    { name: "Kurt-Lee Arendse", pos: "Wing", price: "R10m" },
  ];

  const selectedTeam = [
    { name: "Cheslin Kolbe", role: "Captain" },
    { name: "Siya Kolisi", role: "Vice Captain" },
    { name: "Handré Pollard", role: "Starter" },
  ];

  const leaderboard = [
    { rank: 1, name: "Jan", points: 248 },
    { rank: 2, name: "Mike", points: 232 },
    { rank: 3, name: "Sarah", points: 227 },
  ];

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
          position: "sticky",
          top: 0,
          background: "rgba(9,17,27,0.7)",
          zIndex: 10,
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "20px" }}>🏉 Ruckings</div>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <a href="#features" style={{ color: "white", textDecoration: "none" }}>
            Features
          </a>
          <a href="#login" style={{ color: "white", textDecoration: "none" }}>
            Login
          </a>
          <a href="#team" style={{ color: "white", textDecoration: "none" }}>
            Team
          </a>
          <a
            href="#leaderboard"
            style={{ color: "white", textDecoration: "none" }}
          >
            Leaderboard
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
            Rugby. Fantasy. Live.
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
            Join fantasy leagues, track live rugby action, build your dream team
            and compete on the leaderboard.
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
              href="#team"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "14px 24px",
                borderRadius: "12px",
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Build Team
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
              style={inputStyle}
            />
            <input
              type="password"
              placeholder="Password"
              style={inputStyle}
            />

            <button style={primaryButtonStyle}>Sign In</button>
            <button style={secondaryButtonStyle}>Create Account</button>
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
          {
            icon: "⚡",
            title: "Live Updates",
            text: "Real-time wedstryde en scores.",
          },
          {
            icon: "🏆",
            title: "Fantasy Rugby",
            text: "Bou jou span en klim die leaderboard.",
          },
          {
            icon: "📱",
            title: "Mobile First",
            text: "Ontwerp vir vinnige, mooi phone usage.",
          },
          {
            icon: "💰",
            title: "Paid Leagues",
            text: "Skep leagues met entry fees en pryse.",
          },
        ].map((item) => (
          <div key={item.title} style={featureCardStyle}>
            <div style={{ fontSize: "28px", marginBottom: "10px" }}>
              {item.icon}
            </div>
            <h3 style={{ margin: "0 0 10px 0" }}>{item.title}</h3>
            <p style={{ color: "#d1d5db", margin: 0, lineHeight: 1.6 }}>
              {item.text}
            </p>
          </div>
        ))}
      </section>

      <section
        id="team"
        style={{
          maxWidth: "1100px",
          margin: "0 auto 80px auto",
          padding: "0 20px",
        }}
      >
        <h2 style={{ fontSize: "38px", marginBottom: "18px" }}>Build Team</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "24px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "24px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: "16px" }}>
              Available Players
            </h3>

            <div style={{ display: "grid", gap: "12px" }}>
              {players.map((player) => (
                <div
                  key={player.name}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px 16px",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "14px",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: "bold" }}>{player.name}</div>
                    <div style={{ color: "#d1d5db", fontSize: "14px" }}>
                      {player.pos}
                    </div>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <div style={{ color: "#facc15", fontWeight: "bold" }}>
                      {player.price}
                    </div>
                    <button
                      style={{
                        marginTop: "8px",
                        background: "#facc15",
                        color: "#0b1020",
                        border: "none",
                        borderRadius: "10px",
                        padding: "8px 12px",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                    >
                      Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "24px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: "16px" }}>Your Team</h3>

            <div style={{ display: "grid", gap: "12px" }}>
              {selectedTeam.map((player) => (
                <div
                  key={player.name}
                  style={{
                    padding: "14px 16px",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "14px",
                  }}
                >
                  <div style={{ fontWeight: "bold" }}>{player.name}</div>
                  <div style={{ color: "#facc15", fontSize: "14px" }}>
                    {player.role}
                  </div>
                </div>
              ))}
            </div>

            <button
              style={{
                ...primaryButtonStyle,
                width: "100%",
                marginTop: "18px",
              }}
            >
              Save Team
            </button>
          </div>
        </div>
      </section>

      <section
        id="leaderboard"
        style={{
          maxWidth: "1100px",
          margin: "0 auto 80px auto",
          padding: "0 20px",
        }}
      >
        <h2 style={{ fontSize: "38px", marginBottom: "18px" }}>
          Leaderboard Preview
        </h2>

        <div
          style={{
            background: "rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: "24px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {leaderboard.map((entry) => (
            <div
              key={entry.rank}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "14px 0",
                borderBottom:
                  entry.rank !== leaderboard.length
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "none",
              }}
            >
              <div style={{ fontWeight: "bold" }}>
                #{entry.rank} {entry.name}
              </div>
              <div style={{ color: "#facc15", fontWeight: "bold" }}>
                {entry.points} pts
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        style={{
          maxWidth: "1100px",
          margin: "0 auto 80px auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(250,204,21,0.1)",
            borderRadius: "24px",
            padding: "30px",
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
            Build it into a full rugby platform
          </h2>

          <p style={{ color: "#d1d5db", lineHeight: 1.8, marginBottom: 0 }}>
            Van hier af kan ons regte login, leagues, spelers, fixtures,
            fantasy punte, admin dashboards en monetisering bybou.
          </p>
        </div>
      </section>
    </main>
  );
}

const inputStyle = {
  padding: "16px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(255,255,255,0.08)",
  color: "white",
  fontSize: "16px",
  outline: "none",
} as const;

const primaryButtonStyle = {
  background: "#facc15",
  color: "#0b1020",
  border: "none",
  padding: "16px",
  borderRadius: "12px",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
} as const;

const secondaryButtonStyle = {
  background: "transparent",
  color: "white",
  border: "1px solid rgba(255,255,255,0.18)",
  padding: "16px",
  borderRadius: "12px",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
} as const;

const featureCardStyle = {
  background: "rgba(255,255,255,0.08)",
  borderRadius: "18px",
  padding: "22px",
  border: "1px solid rgba(255,255,255,0.08)",
} as const;
