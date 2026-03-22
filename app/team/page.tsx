"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";

type Player = {
  name: string;
  pos: string;
  price: number;
};

const STORAGE_KEY = "ruckkings-selected-team";

export default function TeamPage() {
  const players: Player[] = [
    { name: "Cheslin Kolbe", pos: "Wing", price: 12 },
    { name: "Siya Kolisi", pos: "Loose Forward", price: 10 },
    { name: "Handré Pollard", pos: "Flyhalf", price: 11 },
    { name: "Pieter-Steph du Toit", pos: "Forward", price: 13 },
    { name: "Damian Willemse", pos: "Back", price: 9 },
    { name: "Kurt-Lee Arendse", pos: "Wing", price: 10 },
  ];

  const defaultTeam: Player[] = [
    { name: "Cheslin Kolbe", pos: "Wing", price: 12 },
    { name: "Siya Kolisi", pos: "Loose Forward", price: 10 },
  ];

  const [selectedTeam, setSelectedTeam] = useState<Player[]>([]);
  const [loaded, setLoaded] = useState(false);

  const maxPlayers = 5;

  useEffect(() => {
    try {
      const savedTeam = localStorage.getItem(STORAGE_KEY);

      if (savedTeam) {
        setSelectedTeam(JSON.parse(savedTeam));
      } else {
        setSelectedTeam(defaultTeam);
      }
    } catch {
      setSelectedTeam(defaultTeam);
    } finally {
      setLoaded(true);
    }
  }, []);

  const teamNames = useMemo(() => {
    return new Set(selectedTeam.map((player) => player.name));
  }, [selectedTeam]);

  const totalCost = selectedTeam.reduce((sum, player) => sum + player.price, 0);

  function addPlayer(player: Player) {
    if (teamNames.has(player.name)) return;

    if (selectedTeam.length >= maxPlayers) {
      alert(Jou span is vol. Maksimum ${maxPlayers} spelers.);
      return;
    }

    setSelectedTeam((prev) => [...prev, player]);
  }

  function removePlayer(playerName: string) {
    setSelectedTeam((prev) =>
      prev.filter((player) => player.name !== playerName)
    );
  }

  async function saveTeam() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedTeam));

      const { error } = await supabase.from("teams").insert([
        {
          user_id: crypto.randomUUID(),
          team: selectedTeam,
          total_cost: totalCost,
        },
      ]);

      if (error) {
        console.log(error);
        alert("Error saving team");
        return;
      }

      alert("Team saved!");
    } catch (error) {
      console.log(error);
      alert("Error saving team");
    }
  }

  function resetTeam() {
    setSelectedTeam(defaultTeam);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultTeam));
  }

  if (!loaded) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background:
            "radial-gradient(circle at top, #1f5f3a 0%, #0b1020 45%, #09111b 100%)",
          color: "white",
          fontFamily: "Arial, sans-serif",
          padding: "50px 20px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p>Loading team...</p>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #1f5f3a 0%, #0b1020 45%, #09111b 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "50px 20px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "18px" }}>
          <Link href="/" style={{ color: "#facc15", textDecoration: "none" }}>
            ← Back Home
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "24px",
          }}
        >
          <div>
            <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>Build Team</h1>
            <p style={{ color: "#d1d5db", margin: 0 }}>
              Kies jou span. Klik <b>Add</b> om spelers regs by jou span te voeg.
            </p>
          </div>

          <Link
            href="/leaderboard"
            style={{
              textDecoration: "none",
              background: "rgba(255,255,255,0.08)",
              color: "white",
              padding: "12px 16px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.12)",
              fontWeight: "bold",
            }}
          >
            View Leaderboard →
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "24px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "24px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h2 style={{ marginTop: 0, marginBottom: "16px" }}>
              Available Players
            </h2>

            <div style={{ display: "grid", gap: "12px" }}>
              {players.map((player) => {
                const alreadyAdded = teamNames.has(player.name);

                return (
                  <div
                    key={player.name}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "14px 16px",
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: "14px",
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: "bold" }}>{player.name}</div>
                      <div style={{ color: "#d1d5db", fontSize: "14px" }}>
                        {player.pos}
                      </div>
                    </div>

                    <div style={{ textAlign: "right" }}>
                      <div style={{ color: "#facc15", fontWeight: "bold" }}>
                        R{player.price}m
                      </div>

                      <button
                        type="button"
                        onClick={() => addPlayer(player)}
                        disabled={alreadyAdded}
                        style={{
                          marginTop: "8px",
                          background: alreadyAdded ? "#6b7280" : "#facc15",
                          color: alreadyAdded ? "white" : "#0b1020",
                          border: "none",
                          borderRadius: "10px",
                          padding: "8px 12px",
                          fontWeight: "bold",
                          cursor: alreadyAdded ? "not-allowed" : "pointer",
                        }}
                      >
                        {alreadyAdded ? "Added" : "Add"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "24px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h2 style={{ marginTop: 0, marginBottom: "8px" }}>Your Team</h2>
            <p style={{ color: "#d1d5db", marginTop: 0 }}>
              {selectedTeam.length}/{maxPlayers} spelers
            </p>

            <div
              style={{
                marginBottom: "16px",
                padding: "12px 14px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "12px",
                fontWeight: "bold",
              }}
            >
              Total Cost: <span style={{ color: "#facc15" }}>R{totalCost}m</span>
            </div>

            <div style={{ display: "grid", gap: "12px" }}>
              {selectedTeam.length === 0 ? (
                <div
                  style={{
                    padding: "14px 16px",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "14px",
                    color: "#d1d5db",
                  }}
                >
                  Nog geen spelers gekies nie.
                </div>
              ) : (
                selectedTeam.map((player) => (
                  <div
                    key={player.name}
                    style={{
                      padding: "14px 16px",
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: "14px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "12px",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: "bold" }}>{player.name}</div>
                        <div style={{ color: "#facc15", fontSize: "14px" }}>
                          {player.pos} • R{player.price}m
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => removePlayer(player.name)}
                        style={{
                          background: "transparent",
                          color: "white",
                          border: "1px solid rgba(255,255,255,0.2)",
                          borderRadius: "10px",
                          padding: "8px 12px",
                          cursor: "pointer",
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div style={{ display: "grid", gap: "12px", marginTop: "18px" }}>
              <button
                type="button"
                onClick={saveTeam}
                style={{
                  background: "#facc15",
                  color: "#0b1020",
                  border: "none",
                  padding: "16px",
                  borderRadius: "12px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                Save Team
              </button>

              <button
                type="button"
                onClick={resetTeam}
                style={{
                  background: "transparent",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.18)",
                  padding: "16px",
                  borderRadius: "12px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                Reset Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
