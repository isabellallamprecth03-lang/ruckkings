"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";

type Stage = "Pool" | "Playoff" | "Final";

type Match = {
  id: number;
  stage: Stage;
  home: string;
  away: string;
  stadium: string;
  location: string;
  capacity: string;
  summary: string;
  homeGround: string;
  kickoff: string;
  image: string;
};

type Entry = {
  entryNumber: number;
  homeScore: string;
  awayScore: string;
};

type Predictions = Record<number, Entry[]>;

const STORAGE_KEY = "ruckkings_predictions_full";

const MAX_ENTRIES = 3;

const matches: Match[] = [
  {
    id: 1,
    stage: "Pool",
    home: "South Africa",
    away: "New Zealand",
    stadium: "Cape Town Stadium",
    location: "Cape Town, South Africa",
    capacity: "55,000",
    summary: "One of the most iconic rugby venues in the world.",
    homeGround: "Springboks international venue",
    kickoff: "10 Sep 2027 • 18:00",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Cape_Town_Stadium.jpg"
  },
  {
    id: 2,
    stage: "Playoff",
    home: "England",
    away: "France",
    stadium: "Twickenham",
    location: "London, England",
    capacity: "82,000",
    summary: "Historic home of English rugby.",
    homeGround: "England Rugby HQ",
    kickoff: "18 Sep 2027 • 20:00",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Twickenham_Stadium.jpg"
  },
  {
    id: 3,
    stage: "Final",
    home: "Ireland",
    away: "Australia",
    stadium: "Stadium Australia",
    location: "Sydney",
    capacity: "83,500",
    summary: "World-class finals venue.",
    homeGround: "Major international venue",
    kickoff: "30 Oct 2027 • 19:30",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Stadium_Australia.jpg"
  }
];

function getPrize(stage: Stage) {
  if (stage === "Pool") return "R10,000";
  if (stage === "Playoff") return "R25,000";
  return "R50,000";
}

function getWinner(h: string, a: string, home: string, away: string) {
  const hs = Number(h);
  const as = Number(a);
  if (!h || !a) return "Incomplete";
  if (hs > as) return home;
  if (as > hs) return away;
  return "Draw";
}
export default function MatchesPage() {
  const [predictions, setPredictions] = useState<Predictions>({});
  const [showRules, setShowRules] = useState(false);
  const [savingKey, setSavingKey] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setPredictions(JSON.parse(stored));
  }, []);

  const totalEntries = useMemo(() => {
    return Object.values(predictions).reduce((sum, e) => sum + e.length, 0);
  }, [predictions]);

  function updateEntry(matchId: number, num: number, field: string, value: string) {
    setPredictions((prev) => {
      const arr = prev[matchId] || [];
      const updated = [...arr];

      while (updated.length < num) {
        updated.push({ entryNumber: updated.length + 1, homeScore: "", awayScore: "" });
      }

      updated[num - 1] = { ...updated[num - 1], entryNumber: num, [field]: value };

      return { ...prev, [matchId]: updated };
    });
  }

  function addEntry(matchId: number) {
    setPredictions((prev) => {
      const arr = prev[matchId] || [];
      if (arr.length >= MAX_ENTRIES) return prev;

      return {
        ...prev,
        [matchId]: [...arr, { entryNumber: arr.length + 1, homeScore: "", awayScore: "" }]
      };
    });
  }

  function removeEntry(matchId: number, num: number) {
    setPredictions((prev) => {
      const arr = (prev[matchId] || []).filter((e) => e.entryNumber !== num);
      return { ...prev, [matchId]: arr };
    });
  }

  function saveLocal() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(predictions));
    setMsg("Saved locally");
    setTimeout(() => setMsg(""), 2000);
  }

  async function savePrediction(match: Match, entry: Entry) {
    const key = ${match.id}-${entry.entryNumber};
    setSavingKey(key);

    const { error } = await supabase.from("predictions").insert({
      match_id: match.id,
      home_team: match.home,
      away_team: match.away,
      home_score: Number(entry.homeScore),
      away_score: Number(entry.awayScore),
      entry_number: entry.entryNumber,
      stage: match.stage,
      stadium: match.stadium,
      kickoff: match.kickoff
    });

    setSavingKey("");

    if (error) alert(error.message);
    else alert("Saved!");
  }
  return (
    <main style={{ background: "#020617", color: "white", minHeight: "100vh", padding: "20px" }}>
      <Link href="/" style={{ color: "#facc15" }}>← Home</Link>

      <h1 style={{ fontSize: "42px" }}>RuckKings</h1>

      <button onClick={() => setShowRules(true)}>Rules</button>
      <button onClick={saveLocal}>Save All</button>

      <p>Total entries: {totalEntries}</p>
      {msg && <p>{msg}</p>}

      {showRules && (
        <div style={{ background: "black", padding: "20px" }}>
          <h2>Rules</h2>
          <p>Score predictions earn points and win prizes.</p>
          <button onClick={() => setShowRules(false)}>Close</button>
        </div>
      )}

      {matches.map((match) => {
        const entries = predictions[match.id] || [];

        return (
          <div key={match.id} style={{ background: "#111827", marginTop: "20px", padding: "20px" }}>
            <img src={match.image} style={{ width: "100%", height: "200px", objectFit: "cover" }} />

            <h2>{match.home} vs {match.away}</h2>
            <p>{match.stadium} • {match.location}</p>
            <p>Capacity: {match.capacity}</p>
            <p>{match.summary}</p>

            <p style={{ color: "#facc15" }}>Prize: {getPrize(match.stage)}</p>

            {entries.map((entry) => {
              const key = ${match.id}-${entry.entryNumber};
              const saving = savingKey === key;

              return (
                <div key={entry.entryNumber}>
                  <input placeholder={match.home}
                    onChange={(e) => updateEntry(match.id, entry.entryNumber, "homeScore", e.target.value)} />

                  <input placeholder={match.away}
                    onChange={(e) => updateEntry(match.id, entry.entryNumber, "awayScore", e.target.value)} />

                  <p>Winner: {getWinner(entry.homeScore, entry.awayScore, match.home, match.away)}</p>

                  <button onClick={() => savePrediction(match, entry)}>
                    {saving ? "Saving..." : "Save"}
                  </button>

                  <button onClick={() => removeEntry(match.id, entry.entryNumber)}>
                    Remove
                  </button>
                </div>
              );
            })}

            <button onClick={() => addEntry(match.id)}>+ Add Entry</button>
          </div>
        );
      })}
    </main>
  );
}
