"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type MatchStatus = "Live" | "Upcoming" | "Finished";

type Match = {
  id: number;
  homeTeam: string;
  awayTeam: string;
  stadium: string;
  city: string;
  kickoff: string;
  status: MatchStatus;
  watchUrl: string;
  latitude: number;
  longitude: number;
};

type WeatherInfo = {
  temperature: string;
  wind: string;
  condition: string;
};

const matches: Match[] = [
  {
    id: 1,
    homeTeam: "Bulls",
    awayTeam: "Sharks",
    stadium: "Loftus Versfeld",
    city: "Pretoria",
    kickoff: "28 Mar 2026 • 17:00",
    status: "Upcoming",
    watchUrl: "#",
    latitude: -25.7532,
    longitude: 28.2249,
  },
  {
    id: 2,
    homeTeam: "Stormers",
    awayTeam: "Lions",
    stadium: "Cape Town Stadium",
    city: "Cape Town",
    kickoff: "29 Mar 2026 • 15:00",
    status: "Live",
    watchUrl: "#",
    latitude: -33.9036,
    longitude: 18.4115,
  },
  {
    id: 3,
    homeTeam: "Springboks",
    awayTeam: "All Blacks",
    stadium: "FNB Stadium",
    city: "Johannesburg",
    kickoff: "02 Apr 2026 • 19:30",
    status: "Upcoming",
    watchUrl: "#",
    latitude: -26.2347,
    longitude: 27.9826,
  },
  {
    id: 4,
    homeTeam: "Cheetahs",
    awayTeam: "Pumas",
    stadium: "Free State Stadium",
    city: "Bloemfontein",
    kickoff: "26 Mar 2026 • 18:00",
    status: "Finished",
    watchUrl: "#",
    latitude: -29.1167,
    longitude: 26.2041,
  },
];

function getStatusStyle(status: MatchStatus) {
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

function weatherCodeToText(code: number) {
  const map: Record<number, string> = {
    0: "Clear",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    61: "Light rain",
    63: "Moderate rain",
    65: "Heavy rain",
    71: "Light snow",
    73: "Moderate snow",
    75: "Heavy snow",
    80: "Rain showers",
    81: "Heavy showers",
    82: "Violent showers",
    95: "Thunderstorm",
  };

  return map[code] ?? "Unknown";
}

export default function MatchesPage() {
  const [weatherByMatch, setWeatherByMatch] = useState<Record<number, WeatherInfo>>({});
  const [loadingWeather, setLoadingWeather] = useState(true);

  useEffect(() => {
    async function loadWeather() {
      try {
        const results = await Promise.all(
          matches.map(async (match) => {
            const response = await fetch(
              https://api.open-meteo.com/v1/forecast?latitude=${match.latitude}&longitude=${match.longitude}&current=temperature_2m,weather_code,wind_speed_10m
            );

            const data = await response.json();

            const info: WeatherInfo = {
              temperature: ${Math.round(data.current.temperature_2m)}°C,
              wind: ${Math.round(data.current.wind_speed_10m)} km/h,
              condition: weatherCodeToText(data.current.weather_code),
            };

            return { id: match.id, info };
          })
        );

        const nextState: Record<number, WeatherInfo> = {};
        results.forEach((item) => {
          nextState[item.id] = item.info;
        });

        setWeatherByMatch(nextState);
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingWeather(false);
      }
    }

    loadWeather();
  }, []);

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
              Track fixtures, stadiums, live weather conditions and match viewing links.
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
            const weather = weatherByMatch[match.id];

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
                    gridTemplateColumns: "1fr 1fr 1fr",
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
                    <div style={{ fontWeight: 700 }}>
                      {loadingWeather ? "Loading..." : weather?.condition ?? "Unavailable"}
                    </div>
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
                    <div style={{ fontWeight: 700 }}>
                      {loadingWeather ? "Loading..." : weather?.temperature ?? "--"}
                    </div>
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
                      Wind
                    </div>
                    <div style={{ fontWeight: 700 }}>
                      {loadingWeather ? "Loading..." : weather?.wind ?? "--"}
                    </div>
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
