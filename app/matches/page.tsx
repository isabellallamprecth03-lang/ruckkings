"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ApiGame = {
  game?: {
    id?: number;
    status?: {
      long?: string;
      short?: string;
      elapsed?: number | null;
    };
  };
  teams?: {
    home?: {
      name?: string;
    };
    away?: {
      name?: string;
    };
  };
  scores?: {
    home?: number | null;
    away?: number | null;
  };
};

type LiveMatch = {
  id: number;
  home: string;
  away: string;
  homeScore: number | string;
  awayScore: number | string;
  status: string;
  minute: string;
};

export default function MatchesPage() {
  const [liveMatches, setLiveMatches] = useState<LiveMatch[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadLiveMatches() {
      try {
        setErrorText("");

        const response = await fetch("/api/live-rugby", {
          cache: "no-store",
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.error || "Failed to load live rugby data");
        }

        const rawGames = Array.isArray(data?.response) ? data.response : [];

        const mapped: LiveMatch[] = rawGames.map((item: ApiGame, index: number) => ({
          id: item?.game?.id ?? index + 1,
          home: item?.teams?.home?.name ?? "Home",
          away: item?.teams?.away?.name ?? "Away",
          homeScore: item?.scores?.home ?? 0,
          awayScore: item?.scores?.away ?? 0,
          status: item?.game?.status?.short || item?.game?.status?.long || "LIVE",
          minute:
            item?.game?.status?.elapsed !== null &&
            item?.game?.status?.elapsed !== undefined
              ? ${item.game.status.elapsed}'
              : "",
        }));

        if (!cancelled) {
          setLiveMatches(mapped);
        }
      } catch (error) {
        if (!cancelled) {
          setErrorText(
            error instanceof Error ? error.message : "Something went wrong"
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadLiveMatches();
    const interval = setInterval(loadLiveMatches, 15000);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
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
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <Link href="/" style={{ color: "#facc15", textDecoration: "none" }}>
          ← Back Home
        </Link>

        <h1 style={{ fontSize: "46px", margin: "16px 0 8px" }}>Live Rugby</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "28px" }}>
          Real-time rugby scores with auto-refresh every 15 seconds.
        </p>

        {loading ? (
          <div
            style={{
              padding: "20px",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.06)",
            }}
          >
            Loading live matches...
          </div>
        ) : errorText ? (
          <div
            style={{
              padding: "20px",
              borderRadius: "16px",
              background: "rgba(239,68,68,0.12)",
              border: "1px solid rgba(239,68,68,0.3)",
              color: "#fecaca",
            }}
          >
            {errorText}
          </div>
        ) : liveMatches.length === 0 ? (
          <div
            style={{
              padding: "20px",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.06)",
            }}
          >
            No live matches right now.
          </div>
        ) : (
          <div style={{ display: "grid", gap: "18px" }}>
            {liveMatches.map((match) => (
              <div
                key={match.id}
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "20px",
                  padding: "22px",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                    alignItems: "center",
                    marginBottom: "14px",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(239,68,68,0.18)",
                      color: "#fca5a5",
                      border: "1px solid rgba(239,68,68,0.35)",
                      padding: "7px 12px",
                      borderRadius: "999px",
                      fontSize: "13px",
                      fontWeight: 700,
                    }}
                  >
                    {match.status}
                  </div>

                  <div style={{ color: "#facc15", fontWeight: 700 }}>
                    {match.minute || "Live"}
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto 1fr",
                    gap: "12px",
                    alignItems: "center",
                  }}
                >
                  <div style={{ fontSize: "22px", fontWeight: 700 }}>
                    {match.home}
                  </div>

                  <div
                    style={{
                      fontSize: "30px",
                      fontWeight: 800,
                      color: "#facc15",
                    }}
                  >
                    {match.homeScore} - {match.awayScore}
                  </div>

                  <div
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      textAlign: "right",
                    }}
                  >
                    {match.away}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
