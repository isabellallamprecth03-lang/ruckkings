"use client";

import Link from "next/link";

type Match = {
  id: number;
  homeTeam: string;
  awayTeam: string;
  stadium: string;
  city: string;
  kickoff: string;
  status: "Live" | "Upcoming" | "Finished";
  weather: string;
  temperature: string;
  watchUrl: string;
};

export default function MatchesPage() {
  const matches: Match[] = [
    {
      id: 1,
      homeTeam: "Bulls",
      awayTeam: "Sharks",
      stadium: "Loftus Versfeld",
      city: "Pretoria",
      kickoff: "28 Mar 2026 • 17:00",
      status: "Upcoming",
      weather: "Partly cloudy",
      temperature: "24°C",
      watchUrl: "#",
    },
    {
      id: 2,
      homeTeam: "Stormers",
      awayTeam: "Lions",
      stadium: "Cape Town Stadium",
      city: "Cape Town",
      kickoff: "29 Mar 2026 • 15:00",
      status: "Live",
      weather: "Sunny",
      temperature: "21°C",
      watchUrl: "#",
    },
    {
      id: 3,
      homeTeam: "Springboks",
      awayTeam: "All Blacks",
      stadium: "FNB Stadium",
      city: "Johannesburg",
      kickoff: "02 Apr 2026 • 19:30",
      status: "Upcoming",
      weather: "Clear skies",
      temperature: "18°C",
      watchUrl: "#",
    },
    {
      id: 4,
      homeTeam: "Cheetahs",
      awayTeam: "Pumas",
      stadium: "Free State Stadium",
      city: "Bloemfontein",
      kickoff: "26 Mar 2026 • 18:00",
      status: "Finished",
      weather: "Windy",
      temperature: "20°C",
      watchUrl: "#",
    },
  ];

  function getStatusStyle(status: Match["status"]) {
    if (status === "Live") {
      return {
        background: "rgba(239,68,68,0.18)",
        color: "#fca5a5",
        border: "1px solid rgba(239,68,68,0.35)",
      };
    }

    if (status === "Finished") {
      return {
        background: "rgba(148,163,184,0.15)",
        color: "#cbd5e1",
        border: "1px solid rgba(148,163,184,0.22)",
      };
    }

    return {
      background: "rgba(250,204,21,0.14)",
      color: "#facc15",
      border: "1px solid rgba(250,204,21,0.28)",
    };
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #173422 0%, #0b1020 46%, #09111b 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px 60px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "28px",
          }}
        >
          <div>
            <Link href="/" style={{ color: "#facc15", textDecoration: "none" }}>
              ← Back Home
            </Link>

            <h1
              style={{
                margin: "14px 0 8px",
                fontSize: "46px",
                lineHeight: 1.05,
              }}
            >
              Matches
            </h1>

            <p style={{ margin: 0, color: "#cbd5e1", maxWidth: "760px" }}>
              Track upcoming fixtures, stadiums, weather conditions and live match viewing links.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "18px",
              padding: "16px 18px",
              minWidth: "220px",
            }}
          >
            <div style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "6px" }}>
              Total Matches
            </div>
            <div style={{ fontSize: "34px", fontWeight: 700 }}>{matches.length}</div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "22px",
          }}
        >
          {matches.map((match) => {
            const statusStyle = getStatusStyle(match.status);

            return (
              <div
                key={match.id}
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "22px",
                  padding: "22px",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "10px",
                    alignItems: "center",
                    marginBottom: "16px",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      ...statusStyle,
                      padding: "7px 12px",
                      borderRadius: "999px",
                      fontSize: "13px",
                      fontWeight: 700,
                    }}
                  >
                    {match.status}
                  </div>

                  <div style={{ color: "#94a3b8", fontSize: "14px" }}>
                    {match.kickoff}
                  </div>
                </div>

                <div style={{ marginBottom: "18px" }}>
                  <div
                    style={{
                      fontSize: "26px",
                      fontWeight: 700,
                      lineHeight: 1.2,
                      marginBottom: "6px",
                    }}
                  >
                    {match.homeTeam} vs {match.awayTeam}
                  </div>

                  <div style={{ color: "#cbd5e1", fontSize: "15px" }}>
                    {match.stadium} • {match.city}
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                    marginBottom: "18px",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: "14px",
                      padding: "14px",
                    }}
                  >
                    <div
                      style={{
                        color: "#94a3b8",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        marginBottom: "6px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Weather
                    </div>
                    <div style={{ fontWeight: 700 }}>{match.weather}</div>
                  </div>

                  <div
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: "14px",
                      padding: "14px",
                    }}
                  >
                    <div
                      style={{
                        color: "#94a3b8",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        marginBottom: "6px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Temperature
                    </div>
                    <div style={{ fontWeight: 700 }}>{match.temperature}</div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <a
                    href={match.watchUrl}
                    style={{
                      textDecoration: "none",
                      background: "#facc15",
                      color: "#0b1020",
                      padding: "12px 16px",
                      borderRadius: "12px",
                      fontWeight: 700,
                    }}
                  >
                    Watch Live
                  </a>

                  <button
                    type="button"
                    style={{
                      background: "transparent",
                      color: "white",
                      border: "1px solid rgba(255,255,255,0.16)",
                      padding: "12px 16px",
                      borderRadius: "12px",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Match Centre
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
