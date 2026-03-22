import Link from "next/link";

export default function Home() {
  const players = [
    { name: "Cheslin Kolbe", pos: "Wing", price: "R12m" },
    { name: "Siya Kolisi", pos: "Loose Forward", price: "R10m" },
    { name: "Handré Pollard", pos: "Flyhalf", price: "R11m" },
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
          <Link href="/login" style={{ color: "white", textDecoration: "none" }}>
            Login
          </Link>
          <Link href="/team" style={{ color: "white", textDecoration: "none" }}>
            Team
          </Link>
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
            <Link href="/login" style={primaryLinkStyle}>
              Sign In
            </Link>

            <Link href="/team" style={secondaryLinkStyle}>
              Build Team
            </Link>
          </div>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "24px",
            padding: "28px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
          }}
        >
          <h2 style={{ marginTop: 0, fontSize: "32px", marginBottom: "8px" }}>
            Quick Preview
          </h2>
          <p style={{ color: "#d1d5db", marginBottom: "22px" }}>
            Preview of players and leaderboard.
          </p>

          <div style={{ display: "grid", gap: "12px", marginBottom: "20px" }}>
            {players.map((player) => (
              <div
                key={player.name}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px 14px",
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
                <div style={{ color: "#facc15", fontWeight: "bold" }}>
                  {player.price}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gap: "10px" }}>
            {leaderboard.map((entry) => (
              <div
                key={entry.rank}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px 14px",
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "14px",
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
          <div key={item.title} style={featureCardStyle}>
            <div style={{ fontSize: "28px", marginBottom: "10px" }}>{item.icon}</div>
            <h3 style={{ margin: "0 0 10px 0" }}>{item.title}</h3>
            <p style={{ color: "#d1d5db", margin: 0, lineHeight: 1.6 }}>
              {item.text}
            </p>
          </div>
        ))}
      </section>

      <section
        id="leaderboard"
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
            Login and team pages are now separate
          </h2>

          <p style={{ color: "#d1d5db", lineHeight: 1.8, marginBottom: 0 }}>
            Van hier af kan ons regte auth, saved teams, leagues en backend logic bybou.
          </p>
        </div>
      </section>
    </main>
  );
}

const primaryLinkStyle = {
  background: "#facc15",
  color: "#0b1020",
  padding: "14px 24px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "bold",
} as const;

const secondaryLinkStyle = {
  border: "1px solid rgba(255,255,255,0.2)",
  padding: "14px 24px",
  borderRadius: "12px",
  textDecoration: "none",
  color: "white",
  fontWeight: "bold",
} as const;

const featureCardStyle = {
  background: "rgba(255,255,255,0.08)",
  borderRadius: "18px",
  padding: "22px",
  border: "1px solid rgba(255,255,255,0.08)",
} as const;
