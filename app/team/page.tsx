[11:56 AM, 3/22/2026] Liefie Lamprecht: import Link from "next/link";

export default function LoginPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #1f5f3a 0%, #0b1020 45%, #09111b 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "480px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "24px",
          padding: "28px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
        }}
      >
        <div style={{ marginBottom: "18px" }}>
          <Link href="/" style={{ color: "#facc15", textD…
[12:14 PM, 3/22/2026] Liefie Lamprecht: "use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Player = {
  name: string;
  pos: string;
  price: number;
};

export default function TeamPage() {
  const players: Player[] = [
    { name: "Cheslin Kolbe", pos: "Wing", price: 12 },
    { name: "Siya Kolisi", pos: "Loose Forward", price: 10 },
    { name: "Handré Pollard", pos: "Flyhalf", price: 11 },
    { name: "Pieter-Steph du Toit", pos: "Forward", price: 13 },
    { name: "Damian Willemse", pos: "Back", price: 9 },
    { name: "Kurt-Lee Arendse", pos: "Wing", price: 10 },
  ];

  const [selectedTeam, setSelectedTeam] = useState<Player[]>([
    { name: "Cheslin Kolbe", pos: "Wing", price: 12 },
    { name: "Siya Kolisi", pos: "Loose Forward", price: 10 },
  ]);

  const maxPlayers = 5;

  const teamNames = useMemo(
    () => new Set(selectedTeam.map((player) => player.name)),
    [selectedTeam]
  );

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
    setSelectedTeam((prev) => prev.filter((player) => player.name !== playerName));
  }

  function saveTeam() {
    alert("Span gestoor!");
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

        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>Build Team</h1>
        <p style={{ color: "#d1d5db", marginBottom: "24px" }}>
          Kies jou span. Klik <b>Add</b> om spelers regs by jou span te voeg.
        </p>

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

            <button
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
                marginTop: "18px",
              }}
            >
              Save Team
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
