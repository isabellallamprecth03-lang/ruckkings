import Link from "next/link";

export default function TeamPage() {
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

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #1f5f3a 0%, #0b1020 45%, #09111b 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "50px 20px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "18px" }}>
          <Link href="/" style={{ color: "#facc15", textDecoration: "none" }}>
            ← Back Home
          </Link>
        </div>

        <h1 style={{ fontSize: "42px", marginBottom: "18px" }}>Build Team</h1>

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
            <h2 style={{ marginTop: 0, marginBottom: "16px" }}>
              Available Players
            </h2>

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
            <h2 style={{ marginTop: 0, marginBottom: "16px" }}>Your Team</h2>

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
                background: "#facc15",
                color: "#0b1020",
                border: "none",
                padding: "16px",
                borderRadius: "12px",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
                width: "100%",
                marginTop: "18px",
              }}
            >
              Save Team
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
