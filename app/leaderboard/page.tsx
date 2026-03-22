"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

type Team = {
  id: string;
  user_id: string;
  total_cost: number;
  created_at: string;
};

export default function LeaderboardPage() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeams();
  }, []);

  async function fetchTeams() {
    const { data, error } = await supabase
      .from("teams")
      .select("*")
      .order("total_cost", { ascending: false })
      .limit(20);

    if (error) {
      console.log(error);
      return;
    }

    setTeams(data || []);
    setLoading(false);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #1f5f3a 0%, #0b1020 45%, #09111b 100%)",
        color: "white",
        padding: "50px 20px",
        fontFamily: "Arial",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <Link href="/" style={{ color: "#facc15" }}>
          ← Back
        </Link>

        <h1 style={{ fontSize: "40px", margin: "20px 0" }}>
          🏆 Leaderboard
        </h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div style={{ display: "grid", gap: "12px" }}>
            {teams.map((team, index) => (
              <div
                key={team.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px",
                  borderRadius: "14px",
                  background:
                    index === 0
                      ? "linear-gradient(90deg, #facc15, #f59e0b)"
                      : "rgba(255,255,255,0.05)",
                  color: index === 0 ? "#0b1020" : "white",
                  fontWeight: "bold",
                }}
              >
                <div>
                  #{index + 1} • Player {team.user_id.slice(0, 6)}
                </div>

                <div>R{team.total_cost}m</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
