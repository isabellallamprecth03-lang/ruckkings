"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #0f172a 0%, #020617 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "28px 20px 80px" }}>
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "28px",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 22px 60px rgba(0,0,0,0.28)",
            background:
              "linear-gradient(135deg, rgba(250,204,21,0.12), rgba(34,197,94,0.08), rgba(15,23,42,0.98))",
            padding: "34px 30px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-80px",
              right: "-80px",
              width: "240px",
              height: "240px",
              borderRadius: "999px",
              background: "rgba(250,204,21,0.08)",
              filter: "blur(20px)",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: "-100px",
              left: "-80px",
              width: "260px",
              height: "260px",
              borderRadius: "999px",
              background: "rgba(59,130,246,0.08)",
              filter: "blur(20px)",
            }}
          />

          <div style={{ position: "relative", zIndex: 2 }}>
            <div
              style={{
                display: "inline-block",
                padding: "7px 12px",
                borderRadius: "999px",
                background: "rgba(250,204,21,0.14)",
                color: "#facc15",
                fontWeight: 700,
                fontSize: "13px",
                marginBottom: "14px",
              }}
            >
              Rugby World Cup 2027 • Premium Prediction Game
            </div>

            <h1
              style={{
                fontSize: "54px",
                lineHeight: 1.02,
                margin: "0 0 12px",
                maxWidth: "850px",
              }}
            >
              Build the ultimate rugby prediction experience.
            </h1>

            <p
              style={{
                color: "#cbd5e1",
                maxWidth: "760px",
                fontSize: "18px",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Predict winners, enter scores, climb the leaderboard and experience
              Rugby World Cup 2027 with a premium app feel inspired by the world’s
              best sports platforms.
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                marginTop: "24px",
              }}
            >
              <Link href="/matches" style={{ textDecoration: "none" }}>
                <span
                  style={{
                    display: "inline-block",
                    background: "#facc15",
                    color: "#111827",
                    borderRadius: "12px",
                    padding: "13px 18px",
                    fontWeight: 800,
                    cursor: "pointer",
                  }}
                >
                  Predict Now
                </span>
              </Link>

              <Link href="/stadiums" style={{ textDecoration: "none" }}>
                <span
                  style={{
                    display: "inline-block",
                    background: "rgba(255,255,255,0.08)",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "12px",
                    padding: "13px 18px",
                    fontWeight: 800,
                    cursor: "pointer",
                  }}
                >
                  Explore Stadiums
                </span>
              </Link>

              <Link href="/leaderboard" style={{ textDecoration: "none" }}>
                <span
                  style={{
                    display: "inline-block",
                    background: "rgba(34,197,94,0.16)",
                    color: "#bbf7d0",
                    border: "1px solid rgba(34,197,94,0.22)",
                    borderRadius: "12px",
                    padding: "13px 18px",
                    fontWeight: 800,
                    cursor: "pointer",
                  }}
                >
                  View Leaderboard
                </span>
              </Link>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: "14px",
                marginTop: "28px",
              }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "18px",
                  padding: "16px",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "6px" }}>
                  Prize Focus
                </div>
                <div style={{ fontSize: "24px", fontWeight: 800 }}>Win Big</div>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "18px",
                  padding: "16px",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "6px" }}>
                  Matchday Feel
                </div>
                <div style={{ fontSize: "24px", fontWeight: 800 }}>Live Energy</div>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "18px",
                  padding: "16px",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "6px" }}>
                  Tournament
                </div>
                <div style={{ fontSize: "24px", fontWeight: 800 }}>RWC 2027</div>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "18px",
                  padding: "16px",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "6px" }}>
                  Style
                </div>
                <div style={{ fontSize: "24px", fontWeight: 800 }}>Premium UI</div>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            marginTop: "26px",
            display: "grid",
            gridTemplateColumns: "1.45fr 0.95fr",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.22)",
            }}
          >
            <div
              style={{
                height: "240px",
                backgroundImage:
                  "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.15)), url('https://upload.wikimedia.org/wikipedia/commons/5/50/Stadium_Australia.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "flex-end",
                padding: "22px",
              }}
            >
              <div>
                <div
                  style={{
                    display: "inline-block",
                    padding: "6px 10px",
                    borderRadius: "999px",
                    background: "rgba(250,204,21,0.14)",
                    color: "#facc15",
                    fontWeight: 700,
                    fontSize: "12px",
                    marginBottom: "10px",
                  }}
                >
                  Featured Match
                </div>

                <h2 style={{ margin: 0, fontSize: "34px", lineHeight: 1.05 }}>
                  South Africa vs New Zealand
                </h2>

                <div style={{ color: "#cbd5e1", marginTop: "8px" }}>
                  Stadium Australia • Sydney
                </div>
              </div>
            </div>

            <div style={{ padding: "20px" }}>
              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: 1.7,
                  marginTop: 0,
                }}
              >
                The biggest matches deserve a premium stage. Make your score prediction,
                back your winner and experience the tournament through bold visuals,
                live-feel match cards and a clean competitive flow.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                  marginTop: "16px",
                }}
              >
                <Link href="/matches" style={{ textDecoration: "none" }}>
                  <span
                    style={{
                      display: "inline-block",
                      background: "#22c55e",
                      color: "white",
                      borderRadius: "12px",
                      padding: "12px 16px",
                      fontWeight: 800,
                    }}
                  >
                    Enter Predictions
                  </span>
                </Link>

                <Link href="/stadiums" style={{ textDecoration: "none" }}>
                  <span
                    style={{
                      display: "inline-block",
                      background: "rgba(255,255,255,0.08)",
                      color: "white",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "12px",
                      padding: "12px 16px",
                      fontWeight: 800,
                    }}
                  >
                    View Venue
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gap: "18px",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "22px",
                padding: "20px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3 style={{ marginTop: 0, marginBottom: "10px" }}>How It Works</h3>
              <div style={{ color: "#cbd5e1", lineHeight: 1.9 }}>
                <div>1. Choose your winner</div>
                <div>2. Predict the final score</div>
                <div>3. Enter and climb the leaderboard</div>
              </div>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "22px",
                padding: "20px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3 style={{ marginTop: 0, marginBottom: "10px" }}>Live Feel</h3>
              <div style={{ color: "#cbd5e1", lineHeight: 1.9 }}>
                <div>🔥 1,284 predictions placed</div>
                <div>📈 Most backed: South Africa</div>
                <div>⚡ Final venue spotlight: Sydney</div>
              </div>
            </div>

            <div
              style={{
                background: "rgba(250,204,21,0.10)",
                borderRadius: "22px",
                padding: "20px",
                border: "1px solid rgba(250,204,21,0.18)",
              }}
            >
              <div style={{ color: "#fde68a", fontWeight: 800, marginBottom: "6px" }}>
                Prize Pool Focus
              </div>
              <div style={{ fontSize: "28px", fontWeight: 800 }}>R50,000 Final Prize</div>
              <div style={{ color: "#fde68a", marginTop: "8px" }}>
                Big-match energy. Premium experience. Tournament-wide competition.
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
