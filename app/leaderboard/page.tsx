"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";

type Player = {
  name: string;
  pos: string;
  price: number;
};

type TeamRow = {
  id: string;
  user_id: string;
  team: Player[];
  total_cost: number | null;
  created_at?: string;
};

type LeaderboardEntry = {
  id: string;
  managerName: string;
  teamName: string;
  players: Player[];
  totalCost: number;
  score: number;
  createdAt: string;
};

const PLAYER_POINTS: Record<string, number> = {
  "Cheslin Kolbe": 84,
  "Siya Kolisi": 76,
  "Handré Pollard": 80,
  "Pieter-Steph du Toit": 92,
  "Damian Willemse": 69,
  "Kurt-Lee Arendse": 78,
};

function getManagerName(userId: string) {
  return `Manager ${userId.slice(0, 6).toUpperCase()}`;
}

function getTeamName(players: Player[]) {
  if (!players.length) return "Untitled Team";
  return `${players[0].name.split(" ")[0]} Select`;
}

function getScore(players: Player[]) {
  const base = players.reduce((sum, player) => {
    return sum + (PLAYER_POINTS[player.name] ?? player.price * 6);
  }, 0);

  const squadBonus = players.length >= 5 ? 25 : players.length * 4;
  return base + squadBonus;
}

function formatDate(value?: string) {
  if (!value) return "Recently";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Recently";

  return new Intl.DateTimeFormat("en-ZA", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export default function LeaderboardPage() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    async function loadLeaderboard() {
      setLoading(true);
      setErrorText("");

      const { data, error } = await supabase
        .from("teams")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.log(error);
        setErrorText("Kon nie leaderboard laai nie.");
        setLoading(false);
        return;
      }

      const rows = (data ?? []) as TeamRow[];

      const mapped = rows
        .map((row) => {
          const players = Array.isArray(row.team) ? row.team : [];
          const totalCost =
            typeof row.total_cost === "number"
              ? row.total_cost
              : players.reduce((sum, player) => sum + player.price, 0);

          return {
            id: row.id,
            managerName: getManagerName(row.user_id || "guest"),
            teamName: getTeamName(players),
            players,
            totalCost,
            score: getScore(players),
            createdAt: formatDate(row.created_at),
          };
        })
        .sort((a, b) => {
          if (b.score !== a.score) return b.score - a.score;
          return b.totalCost - a.totalCost;
        });

      setEntries(mapped);
      setLoading(false);
    }

    loadLeaderboard();
  }, []);

  const topThree = useMemo(() => entries.slice(0, 3), [entries]);

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
            marginBottom: "26px",
          }}
        >
          <div>
            <Link href="/" style={{ color: "#facc15", textDecoration: "none" }}>
              ← Back Home
            </Link>

            <h1
              style={{
                margin: "14px 0 8px",
                fontSize: "48px",
                lineHeight: 1.05,
              }}
            >
              Leaderboard
            </h1>

            <p style={{ margin: 0, color: "#cbd5e1", maxWidth: "760px" }}>
              Live rankings van Ruckings teams. Volg die top squads, compare
              value en kyk wie lei die fantasy race.
            </p>
          </div>

          <div
            style={{
              minWidth: "220px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: "18px",
              padding: "16px 18px",
            }}
          >
            <div style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "6px" }}>
              Total Entries
            </div>
            <div style={{ fontSize: "34px", fontWeight: 700 }}>{entries.length}</div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "18px",
            marginBottom: "28px",
          }}
        >
          {[0, 1, 2].map((index) => {
            const entry = topThree[index];
            const badge = index === 0 ? "🥇 #1" : index === 1 ? "🥈 #2" : "🥉 #3";

            return (
              <div
                key={entry?.id ?? empty-${index}}
                style={{
                  minHeight: "220px",
                  borderRadius: "22px",
                  padding: "22px",
                  background:
                    index === 0
                      ? "linear-gradient(180deg, rgba(250,204,21,0.18), rgba(255,255,255,0.06))"
                      : "rgba(255,255,255,0.07)",
                  border:
                    index === 0
                      ? "1px solid rgba(250,204,21,0.35)"
                      : "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.22)",
                }}
              >
                {entry ? (
                  <>
                    <div
                      style={{
                        display: "inline-block",
                        padding: "7px 12px",
                        borderRadius: "999px",
                        background: "rgba(255,255,255,0.08)",
                        fontSize: "13px",
                        marginBottom: "16px",
                      }}
                    >
                      {badge}
                    </div>

                    <div style={{ fontSize: "30px", fontWeight: 700, marginBottom: "8px" }}>
                      {entry.score} pts
                    </div>

                    <div style={{ fontSize: "22px", fontWeight: 700, marginBottom: "6px" }}>
                      {entry.teamName}
                    </div>

                    <div style={{ color: "#cbd5e1", marginBottom: "14px" }}>
                      {entry.managerName}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "10px",
                        flexWrap: "wrap",
                        fontSize: "14px",
                        color: "#cbd5e1",
                      }}
                    >
                      <span>Value: R{entry.totalCost}m</span>
                      <span>{entry.players.length} players</span>
                    </div>
                  </>
                ) : (
                  <div style={{ color: "#94a3b8" }}>Nog nie genoeg entries nie.</div>
                )}
              </div>
            );
          })}
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.07)",
            borderRadius: "22px",
            border: "1px solid rgba(255,255,255,0.08)",
            overflow: "hidden",
            boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "90px 1.4fr 1fr 120px 120px 150px",
              gap: "12px",
              padding: "18px 20px",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              color: "#94a3b8",
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            <div>Rank</div>
            <div>Team</div>
            <div>Manager</div>
            <div>Score</div>
            <div>Value</div>
            <div>Updated</div>
          </div>

          {loading ? (
            <div style={{ padding: "24px 20px", color: "#cbd5e1" }}>
              Loading leaderboard...
            </div>
          ) : errorText ? (
            <div style={{ padding: "24px 20px", color: "#fca5a5" }}>{errorText}</div>
          ) : entries.length === 0 ? (
            <div style={{ padding: "24px 20px", color: "#cbd5e1" }}>
              Nog geen teams in die leaderboard nie.
            </div>
          ) : (
            entries.map((entry, index) => (
              <div
                key={entry.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "90px 1.4fr 1fr 120px 120px 150px",
                  gap: "12px",
                  padding: "18px 20px",
                  borderBottom:
                    index === entries.length - 1
                      ? "none"
                      : "1px solid rgba(255,255,255,0.06)",
                  alignItems: "center",
                }}
              >
                <div style={{ fontWeight: 700, fontSize: "20px", color: "#facc15" }}>
                  #{index + 1}
                </div>

                <div>
                  <div style={{ fontWeight: 700, marginBottom: "4px" }}>{entry.teamName}</div>
                  <div style={{ color: "#94a3b8", fontSize: "14px" }}>
                    {entry.players.map((player) => player.name).join(" • ")}
                  </div>
                </div>

                <div style={{ color: "#e5e7eb" }}>{entry.managerName}</div>
                <div style={{ fontWeight: 700 }}>{entry.score}</div>
                <div>R{entry.totalCost}m</div>
                <div style={{ color: "#94a3b8" }}>{entry.createdAt}</div>
              </div>
            ))
          )}
        </div>

        <div
          style={{
            marginTop: "22px",
            display: "flex",
            gap: "14px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/team"
            style={{
              textDecoration: "none",
              background: "#facc15",
              color: "#0b1020",
              padding: "14px 18px",
              borderRadius: "12px",
              fontWeight: 700,
            }}
          >
            Build Team
          </Link>

          <Link
            href="/login"
            style={{
              textDecoration: "none",
              background: "transparent",
              color: "white",
              padding: "14px 18px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.16)",
              fontWeight: 700,
            }}
          >
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}
