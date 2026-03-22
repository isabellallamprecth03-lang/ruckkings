"use client";

import { useEffect, useState } from "react";

const matches = [
  { id: 1, home: "Bulls", away: "Sharks", lat: -25.75, lon: 28.22 },
  { id: 2, home: "Stormers", away: "Lions", lat: -33.9, lon: 18.41 },
];

export default function MatchesPage() {
  const [temps, setTemps] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    async function load() {
      const res = await Promise.all(
        matches.map(async (m) => {
          const r = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${m.lat}&longitude=${m.lon}&current=temperature_2m`
          );

          const d = await r.json();

          return {
            id: m.id,
            temp: ${Math.round(d.current.temperature_2m)}°C,
          };
        })
      );

      const map: { [key: number]: string } = {};
      res.forEach((x) => {
        map[x.id] = x.temp;
      });

      setTemps(map);
    }

    load();
  }, []);

  return (
    <div style={{ padding: 40, color: "white" }}>
      <h1>Matches</h1>

      {matches.map((m) => (
        <div key={m.id} style={{ marginBottom: 20 }}>
          <h3>
            {m.home} vs {m.away}
          </h3>
          <p>Temperature: {temps[m.id] || "Loading..."}</p>
        </div>
      ))}
    </div>
  );
}
