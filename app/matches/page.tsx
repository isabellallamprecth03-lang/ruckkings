"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Match = {
  id: number;
  home: string;
  away: string;
  stadium: string;
  city: string;
  lat: number;
  lon: number;
};

type Weather = {
  temp: string;
  wind: string;
  condition: string;
};

const matches: Match[] = [
  {
    id: 1,
    home: "Bulls",
    away: "Sharks",
    stadium: "Loftus Versfeld",
    city: "Pretoria",
    lat: -25.7532,
    lon: 28.2249,
  },
  {
    id: 2,
    home: "Stormers",
    away: "Lions",
    stadium: "Cape Town Stadium",
    city: "Cape Town",
    lat: -33.9036,
    lon: 18.4115,
  },
  {
    id: 3,
    home: "Springboks",
    away: "All Blacks",
    stadium: "FNB Stadium",
    city: "Johannesburg",
    lat: -26.2347,
    lon: 27.9826,
  },
];

function weatherText(code: number) {
  const map: Record<number, string> = {
    0: "Clear",
    1: "Mostly Clear",
    2: "Cloudy",
    3: "Overcast",
    61: "Rain",
    80: "Showers",
    95: "Storm",
  };
  return map[code] ?? "Unknown";
}

export default function MatchesPage() {
  const [weather, setWeather] = useState<Record<number, Weather>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadWeather() {
      try {
        const results = await Promise.all(
          matches.map(async (m) => {
            const res = await fetch(
              https://api.open-meteo.com/v1/forecast?latitude=${m.lat}&longitude=${m.lon}&current=temperature_2m,weather_code,wind_speed_10m
            );

            const data = await res.json();

            return {
              id: m.id,
              weather: {
                temp: ${Math.round(data.current.temperature_2m)}°C,
                wind: ${Math.round(data.current.wind_speed_10m)} km/h,
                condition: weatherText(data.current.weather_code),
              },
            };
          })
        );

        const map: Record<number, Weather> = {};

        results.forEach((r) => {
          map[r.id] = r.weather;
        });

        setWeather(map);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    loadWeather();
  }, []);

  return (
    <main style={{ padding: 30, color: "white", background: "#0b1020", minHeight: "100vh" }}>
      <Link href="/">← Back</Link>

      <h1 style={{ marginTop: 20 }}>Matches</h1>

      {matches.map((m) => (
        <div
          key={m.id}
          style={{
            marginTop: 20,
            padding: 20,
            borderRadius: 12,
            background: "#1e293b",
          }}
        >
          <h2>
            {m.home} vs {m.away}
          </h2>

          <p>
            {m.stadium} - {m.city}
          </p>

          <div style={{ marginTop: 10 }}>
            {loading ? (
              "Loading weather..."
            ) : (
              <>
                <p>🌤 {weather[m.id]?.condition}</p>
                <p>🌡 {weather[m.id]?.temp}</p>
                <p>💨 {weather[m.id]?.wind}</p>
              </>
            )}
          </div>
        </div>
      ))}
    </main>
  );
}