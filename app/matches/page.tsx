"use client";

import { useEffect, useState } from "react";

type Match = {
  id: number;
  home: string;
  away: string;
  lat: number;
  lon: number;
};

type Weather = {
  temp: string;
};

const matches: Match[] = [
  { id: 1, home: "Bulls", away: "Sharks", lat: -25.75, lon: 28.22 },
  { id: 2, home: "Stormers", away: "Lions", lat: -33.9, lon: 18.41 },
];

export default function MatchesPage() {
  const [weather, setWeather] = useState<Record<number, Weather>>({});

  useEffect(() => {
    async function loadWeather() {
      const results = await Promise.all(
        matches.map(async (m) => {
          const res = await fetch(
            https://api.open-meteo.com/v1/forecast?latitude=${m.lat}&longitude=${m.lon}&current=temperature_2m
          );

          const data = await res.json();

          return {
            id: m.id,
            temp: ${Math.round(data.current.temperature_2m)}°C,
          };
        })
      );

      const map: Record<number, Weather> = {};

      results.forEach((r) => {
        map[r.id] = { temp: r.temp };
      });

      setWeather(map);
    }

    loadWeather();
  }, []);

  return (
    <div style={{ padding: 40, color: "white" }}>
      <h1>Matches</h1>

      {matches.map((m) => (
        <div key={m.id} style={{ marginBottom: 20 }}>
          <h3>
            {m.home} vs {m.away}
          </h3>

          <p>Temperature: {weather[m.id]?.temp ?? "Loading..."}</p>
        </div>
      ))}
    </div>
  );
}
