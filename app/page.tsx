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
              "linear-gradient(135deg, rgba(250,204,21,0.12), rgba(34,197,94,0.08), rgba(15,…
[6:12 PM, 3/24/2026] Liefie Lamprecht: "use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #111827 0%, #020617 55%, #01030a 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "24px 20px 80px" }}>
        {/* TOP NAV */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "30px",
                fontWeight: 900,
                letterSpacing: "-0.04em",
              }}
            >
              <span style={{ color: "#facc15" }}>Ruck</span>Kings
            </div>
            <div style={{ color: "#94a3b8", fontSize: "14px", marginTop: "4px" }}>
              Rugby World Cup 2027 Prediction Experience
            </div>
          </div>

          <nav
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/matches"
              style={{
                display: "inline-block",
                padding: "10px 14px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.05)",
                color: "white",
                fontWeight: 700,
                border: "1px solid rgba(255,255,255,0.08)",
                textDecoration: "none",
              }}
            >
              Matches
            </Link>

            <Link
              href="/stadiums"
              style={{
                display: "inline-block",
                padding: "10px 14px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.05)",
                color: "white",
                fontWeight: 700,
                border: "1px solid rgba(255,255,255,0.08)",
                textDecoration: "none",
              }}
            >
              Stadiums
            </Link>
          </nav>
        </header>

        {/* HERO VIDEO */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "34px",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 25px 80px rgba(0,0,0,0.38)",
            minHeight: "78vh",
            background: "#000",
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            poster="https://upload.wikimedia.org/wikipedia/commons/5/50/Stadium_Australia.jpg"
          >
            <source
              src="https://cdn.coverr.co/videos/coverr-rugby-player-running-with-ball-9766/1080p.mp4"
              type="video/mp4"
            />
          </video>

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(2,6,23,0.95) 0%, rgba(2,6,23,0.82) 38%, rgba(2,6,23,0.45) 68%, rgba(2,6,23,0.18) 100%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 15% 20%, rgba(250,204,21,0.16), transparent 24%), radial-gradient(circle at 85% 18%, rgba(34,197,94,0.10), transparent 22%), radial-gradient(circle at 70% 82%, rgba(59,130,246,0.10), transparent 26%)",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "grid",
              gridTemplateColumns: "1.15fr 0.85fr",
              gap: "26px",
              minHeight: "78vh",
              alignItems: "end",
              padding: "42px 38px 34px",
            }}
          >
            {/* LEFT HERO CONTENT */}
            <div>
              <div
                style={{
                  display: "inline-block",
                  padding: "8px 14px",
                  borderRadius: "999px",
                  background: "rgba(250,204,21,0.14)",
                  color: "#facc15",
                  fontWeight: 800,
                  fontSize: "13px",
                  marginBottom: "16px",
                  border: "1px solid rgba(250,204,21,0.14)",
                }}
              >
                WORLD CUP 2027 • PREMIUM MATCHDAY EXPERIENCE
              </div>

              <h1
                style={{
                  fontSize: "74px",
                  lineHeight: 0.94,
                  margin: "0 0 16px",
                  letterSpacing: "-0.06em",
                  maxWidth: "780px",
                  textShadow: "0 10px 30px rgba(0,0,0,0.35)",
                }}
              >
                Predict the winner.
                <br />
                Call the score.
                <br />
                Own the tournament.
              </h1>

              <p
                style={{
                  color: "#dbe4f0",
                  maxWidth: "720px",
                  fontSize: "19px",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                A premium Rugby World Cup 2027 prediction platform built for fans who
                want more than a basic competition. Back the winning team, predict the
                exact score, climb the leaderboard and experience the tournament with a
                bold, cinematic, world-class sports feel.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "14px",
                  flexWrap: "wrap",
                  marginTop: "28px",
                }}
              >
                <Link
                  href="/matches"
                  style={{
                    display: "inline-block",
                    background: "#facc15",
                    color: "#111827",
                    borderRadius: "14px",
                    padding: "16px 22px",
                    fontWeight: 900,
                    fontSize: "15px",
                    boxShadow: "0 12px 30px rgba(250,204,21,0.18)",
                    textDecoration: "none",
                  }}
                >
                  Start Predicting
                </Link>

                <Link
                  href="/stadiums"
                  style={{
                    display: "inline-block",
                    background: "rgba(255,255,255,0.10)",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.14)",
                    borderRadius: "14px",
                    padding: "16px 22px",
                    fontWeight: 800,
                    fontSize: "15px",
                    backdropFilter: "blur(8px)",
                    textDecoration: "none",
                  }}
                >
                  Explore Stadiums
                </Link>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                  gap: "14px",
                  marginTop: "34px",
                  maxWidth: "920px",
                }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    borderRadius: "18px",
                    padding: "16px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "8px" }}>
                    Tournament
                  </div>
                  <div style={{ fontSize: "24px", fontWeight: 900 }}>RWC 2027</div>
                </div>

                <div
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    borderRadius: "18px",
                    padding: "16px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "8px" }}>
                    Core Game
                  </div>
                  <div style={{ fontSize: "24px", fontWeight: 900 }}>Winner + Score</div>
                </div>

                <div
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    borderRadius: "18px",
                    padding: "16px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "8px" }}>
                    Matchday Feel
                  </div>
                  <div style={{ fontSize: "24px", fontWeight: 900 }}>Live Energy</div>
                </div>

                <div
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    borderRadius: "18px",
                    padding: "16px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "8px" }}>
                    Style
                  </div>
                  <div style={{ fontSize: "24px", fontWeight: 900 }}>Premium UI</div>
                </div>
              </div>
            </div>

            {/* RIGHT HERO PANELS */}
            <div
              style={{
                display: "grid",
                gap: "16px",
                alignSelf: "center",
              }}
            >
              <div
                style={{
                  background: "rgba(2,6,23,0.72)",
                  borderRadius: "24px",
                  padding: "22px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.24)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "6px 10px",
                    borderRadius: "999px",
                    background: "rgba(250,204,21,0.14)",
                    color: "#facc15",
                    fontWeight: 700,
                    fontSize: "12px",
                    marginBottom: "12px",
                  }}
                >
                  MATCH OF THE WEEK
                </div>

                <h2 style={{ margin: "0 0 8px", fontSize: "34px", lineHeight: 1.05 }}>
                  South Africa vs New Zealand
                </h2>

                <div style={{ color: "#cbd5e1", fontSize: "15px", marginBottom: "18px" }}>
                  Stadium Australia • Sydney
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: "16px",
                      padding: "14px",
                    }}
                  >
                    <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "6px" }}>
                      Kickoff
                    </div>
                    <div style={{ fontWeight: 800, fontSize: "18px" }}>10 Sep 2027</div>
                  </div>

                  <div
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: "16px",
                      padding: "14px",
                    }}
                  >
                    <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "6px" }}>
                      Final Prize
                    </div>
                    <div style={{ fontWeight: 800, fontSize: "18px", color: "#facc15" }}>
                      R50,000
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "18px",
                    padding: "14px",
                    borderRadius: "16px",
                    background: "rgba(34,197,94,0.10)",
                    color: "#bbf7d0",
                    fontWeight: 700,
                  }}
                >
                  Enter your score prediction and back the winner before kickoff.
                </div>
              </div>

              <div
                style={{
                  background: "rgba(2,6,23,0.72)",
                  borderRadius: "24px",
                  padding: "22px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.24)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h3 style={{ marginTop: 0, marginBottom: "12px", fontSize: "22px" }}>
                  Live Tournament Pulse
                </h3>

                <div style={{ color: "#cbd5e1", lineHeight: 1.95 }}>
                  <div>🔥 1,284 predictions placed</div>
                  <div>📈 Most backed team: South Africa</div>
                  <div>⚡ Venue spotlight: Sydney</div>
                  <div>🏟 8 official Australian stadiums</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LOWER PANELS */}
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
              borderRadius: "26px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.22)",
            }}
          >
            <div
              style={{
                height: "250px",
                backgroundImage:
                  "linear-gradient(to top, rgba(0,0,0,0.80), rgba(0,0,0,0.20)), url('https://upload.wikimedia.org/wikipedia/commons/5/57/Perth_Stadium_aerial.jpg')",
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
                    background: "rgba(34,197,94,0.14)",
                    color: "#86efac",
                    fontWeight: 700,
                    fontSize: "12px",
                    marginBottom: "10px",
                  }}
                >
                  OPENING MATCH VENUE
                </div>
                <h2 style={{ margin: 0, fontSize: "34px", lineHeight: 1.05 }}>
                  Perth Stadium
                </h2>
                <div style={{ color: "#cbd5e1", marginTop: "8px" }}>
                  Explore the official World Cup venues across Australia.
                </div>
              </div>
            </div>

            <div style={{ padding: "22px" }}>
              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: 1.75,
                  marginTop: 0,
                }}
              >
                RuckKings is built to feel like a high-end tournament platform —
                cinematic visuals, premium venue storytelling, featured fixtures,
                bold calls-to-action and a clean competitive flow around every match.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                  marginTop: "16px",
                }}
              >
                <Link
                  href="/stadiums"
                  style={{
                    display: "inline-block",
                    background: "#3b82f6",
                    color: "white",
                    borderRadius: "12px",
                    padding: "12px 16px",
                    fontWeight: 800,
                    textDecoration: "none",
                  }}
                >
                  Explore Venues
                </Link>

                <Link
                  href="/matches"
                  style={{
                    display: "inline-block",
                    background: "rgba(255,255,255,0.08)",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "12px",
                    padding: "12px 16px",
                    fontWeight: 800,
                    textDecoration: "none",
                  }}
                >
                  View Matches
                </Link>
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gap: "18px" }}>
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "24px",
                padding: "22px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3 style={{ marginTop: 0, marginBottom: "12px", fontSize: "22px" }}>
                How It Works
              </h3>
              <div style={{ color: "#cbd5e1", lineHeight: 1.95 }}>
                <div>1. Pick the winning team</div>
                <div>2. Predict the final score</div>
                <div>3. Enter and rise up the leaderboard</div>
              </div>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "24px",
                padding: "22px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3 style={{ marginTop: 0, marginBottom: "12px", fontSize: "22px" }}>
                Competition Focus
              </h3>
              <div style={{ color: "#cbd5e1", lineHeight: 1.95 }}>
                <div>• Winner + score prediction</div>
                <div>• Big-match presentation</div>
                <div>• Premium tournament atmosphere</div>
              </div>
            </div>

            <div
              style={{
                background: "rgba(250,204,21,0.10)",
                borderRadius: "24px",
                padding: "22px",
                border: "1px solid rgba(250,204,21,0.18)",
              }}
            >
              <div style={{ color: "#fde68a", fontWeight: 800, marginBottom: "8px" }}>
                BIG-MATCH ENERGY
              </div>
              <div style={{ fontSize: "30px", fontWeight: 900, lineHeight: 1.05 }}>
                Premium Rugby
                <br />
                Prediction Platform
              </div>
              <div style={{ color: "#fde68a", marginTop: "10px", lineHeight: 1.7 }}>
                Keep the game simple. Make the experience unforgettable.
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
