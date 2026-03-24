"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type MatchStage = "Pool" | "Playoff" | "Final";

type Match = {
  id: number;
  stage: MatchStage;
  home: string;
  away: string;
  stadium: string;
  location: string;
  kickoff: string;
  image: string;
  prize: string;
};

type PredictionEntry = {
  entryNumber: number;
  homeScore: string;
  awayScore: string;
};

type PredictionsState = Record<number, PredictionEntry[]>;

const STORAGE_KEY = "ruckkings_predictions_v7";
const MAX_ENTRIES_PER_MATCH = 3;

const matches: Match[] = [
  {
    id: 1,
    stage: "Pool",
    home: "South Africa",
    away: "New Zealand",
    stadium: "Stadium Australia",
    location: "Sydney, Australia",
    kickoff: "10 Sep 2027 • 18:00",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/50/Stadium_Australia.jpg",
    prize: "R5,000",
  },
  {
    id: 2,
    stage: "Pool",
    home: "England",
    away: "France",
    stadium: "Melbourne Cricket Ground",
    location: "Melbourne, Australia",
    kickoff: "12 Sep 2027 • 20:00",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Melbourne_Cricket_Ground_%28MCG%29.jpg",
    prize: "R5,000",
  },
  {
    id: 3,
    stage: "Playoff",
    home: "Australia",
    away: "Ireland",
    stadium: "Perth Stadium",
    location: "Perth, Australia",
    kickoff: "18 Sep 2027 • 19:30",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Perth_Stadium_aerial.jpg",
    prize: "R20,000",
  },
  {
    id: 4,
    stage: "Final",
    home: "TBD",
    away: "TBD",
    stadium: "Adelaide Oval",
    location: "Adelaide, Australia",
    kickoff: "28 Sep 2027 • 20:00",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2e/Adelaide_Oval_2016.jpg",
    prize: "R50,000",
  },
];

function getStageColor(stage: MatchStage) {
  if (stage === "Final") return "#facc15";
  if (stage === "Playoff") return "#22c55e";
  return "#38bdf8";
}

function getWinner(home: string, away: string, homeScore: string, awayScore: string) {
  const h = Number(homeScore);
  const a = Number(awayScore);

  if (homeScore === "" || awayScore === "") return "Enter both scores";
  if (Number.isNaN(h) || Number.isNaN(a)) return "Enter valid scores";
  if (h === a) return "Draw";
  return h > a ? home : away;
}

export default function MatchesPage() {
  const [showRules, setShowRules] = useState(false);
  const [localSaveMessage, setLocalSaveMessage] = useState("");
  const [predictions, setPredictions] = useState<PredictionsState>({});

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setPredictions(JSON.parse(raw));
      }
    } catch {
      setPredictions({});
    }
  }, []);

  function getEntries(matchId: number): PredictionEntry[] {
    return predictions[matchId] || [
      { entryNumber: 1, homeScore: "", awayScore: "" },
    ];
  }

  function updateEntry(
    matchId: number,
    entryIndex: number,
    field: "homeScore" | "awayScore",
    value: string
  ) {
    setPredictions((prev) => {
      const currentEntries =
        prev[matchId] || [{ entryNumber: 1, homeScore: "", awayScore: "" }];

      const updatedEntries = currentEntries.map((entry, index) =>
        index === entryIndex ? { ...entry, [field]: value } : entry
      );

      return {
        ...prev,
        [matchId]: updatedEntries,
      };
    });
  }

  function addEntry(matchId: number) {
    setPredictions((prev) => {
      const currentEntries =
        prev[matchId] || [{ entryNumber: 1, homeScore: "", awayScore: "" }];

      if (currentEntries.length >= MAX_ENTRIES_PER_MATCH) return prev;

      return {
        ...prev,
        [matchId]: [
          ...currentEntries,
          {
            entryNumber: currentEntries.length + 1,
            homeScore: "",
            awayScore: "",
          },
        ],
      };
    });
  }

  function savePredictionsLocally() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(predictions));
      setLocalSaveMessage("Predictions saved locally.");
      window.setTimeout(() => setLocalSaveMessage(""), 2500);
    } catch {
      setLocalSaveMessage("Could not save predictions.");
      window.setTimeout(() => setLocalSaveMessage(""), 2500);
    }
  }

  const totalEntries = useMemo(() => {
    return Object.values(predictions).reduce((sum, entries) => sum + entries.length, 0);
  }, [predictions]);

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #111827 0%, #020617 55%, #01030a 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        className="page-enter"
        style={{ maxWidth: "1240px", margin: "0 auto", padding: "22px 20px 80px" }}
      >
        <div
          className="fade-up"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <Link href="/" style={{ color: "#facc15", textDecoration: "none", fontWeight: 800 }}>
            ← Back
          </Link>

          <div style={{ fontWeight: 900, letterSpacing: "-0.03em" }}>
            <span style={{ color: "#facc15" }}>Ruck</span>Kings
          </div>
        </div>

        <div
          className="fade-up delay-1 hero-shell"
          style={{
            position: "relative",
            height: "360px",
            borderRadius: "30px",
            overflow: "hidden",
            marginTop: "22px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="hero-image" style={{ width: "100%", height: "100%" }}>
            <img
              src={matches[0].image}
              alt={matches[0].stadium}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(2,6,23,0.92) 0%, rgba(2,6,23,0.60) 45%, rgba(2,6,23,0.18) 100%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 15% 18%, rgba(250,204,21,0.16), transparent 22%), radial-gradient(circle at 82% 20%, rgba(59,130,246,0.10), transparent 24%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              padding: "28px",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "7px 12px",
                borderRadius: "999px",
                background: "rgba(250,204,21,0.14)",
                color: "#facc15",
                fontWeight: 800,
                fontSize: "12px",
                marginBottom: "12px",
                border: "1px solid rgba(250,204,21,0.16)",
              }}
            >
              MATCHDAY HQ
            </div>

            <h1
              style={{
                margin: "0 0 8px",
                fontSize: "52px",
                lineHeight: 0.96,
                letterSpacing: "-0.05em",
              }}
            >
              Predict scores.
              <br />
              Back the winner.
              <br />
              Chase the leaderboard.
            </h1>

            <div style={{ color: "#cbd5e1", fontSize: "16px", marginBottom: "10px" }}>
              Rugby World Cup 2027 • Premium prediction experience
            </div>

            <p
              style={{
                margin: 0,
                maxWidth: "720px",
                color: "#e2e8f0",
                lineHeight: 1.75,
                fontSize: "16px",
              }}
            >
              Enter up to three predictions per match, save them locally and build your
              edge across pool games, knockouts and the final.
            </p>
          </div>
        </div>

        <div
          className="fade-up delay-2"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "14px",
            marginTop: "18px",
          }}
        >
          <div
            className="glass-card"
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "18px",
              padding: "16px",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "6px" }}>
              Total Matches
            </div>
            <div style={{ fontSize: "24px", fontWeight: 900 }}>{matches.length}</div>
          </div>

          <div
            className="glass-card"
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "18px",
              padding: "16px",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "6px" }}>
              Entries In Progress
            </div>
            <div style={{ fontSize: "24px", fontWeight: 900 }}>{totalEntries}</div>
          </div>

          <div
            className="glass-card"
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "18px",
              padding: "16px",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "6px" }}>
              Entry Model
            </div>
            <div style={{ fontSize: "24px", fontWeight: 900 }}>Up to 3</div>
          </div>

          <div
            className="glass-card"
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "18px",
              padding: "16px",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "6px" }}>
              Biggest Prize
            </div>
            <div style={{ fontSize: "24px", fontWeight: 900, color: "#facc15" }}>
              R50,000
            </div>
          </div>
        </div>

        <div
          className="fade-up delay-3"
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            marginTop: "22px",
          }}
        >
          <button
            className="cta-button"
            onClick={() => setShowRules(true)}
            style={{
              background: "#facc15",
              color: "#111827",
              border: "none",
              borderRadius: "12px",
              padding: "12px 18px",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            View Rules
          </button>

          <button
            className="cta-button"
            onClick={savePredictionsLocally}
            style={{
              background: "#22c55e",
              color: "white",
              border: "none",
              borderRadius: "12px",
              padding: "12px 18px",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            Save All Predictions Locally
          </button>

          <Link href="/stadiums" style={{ textDecoration: "none" }}>
            <span
              className="cta-button"
              style={{
                display: "inline-block",
                background: "#3b82f6",
                color: "white",
                borderRadius: "12px",
                padding: "12px 18px",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              🏟 Explore Stadiums
            </span>
          </Link>
        </div>

        <div
          className="fade-up delay-4"
          style={{ marginTop: "14px", color: "#94a3b8", fontSize: "14px" }}
        >
          Total entries in progress:{" "}
          <strong style={{ color: "white" }}>{totalEntries}</strong>
        </div>

        {localSaveMessage ? (
          <div
            className="fade-up delay-4"
            style={{
              marginTop: "10px",
              color: "#86efac",
              fontWeight: 700,
            }}
          >
            {localSaveMessage}
          </div>
        ) : null}

        <div
          className="fade-up delay-4"
          style={{
            display: "grid",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {matches.map((match, matchIndex) => {
            const entries = getEntries(match.id);

            return (
              <section
                key={match.id}
                className="lift-card"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "26px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 18px 40px rgba(0,0,0,0.24)",
                  animationDelay: '${0.12 * matchIndex}s',
                }}
              >
                <div className="image-wrap" style={{ position: "relative", height: "240px" }}>
                  <img
                    className="zoom-image"
                    src={match.image}
                    alt={match.stadium}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.82), rgba(0,0,0,0.18), transparent)",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      left: "22px",
                      right: "22px",
                      bottom: "18px",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        padding: "6px 10px",
                        borderRadius: "999px",
                        background: "rgba(255,255,255,0.10)",
                        color: getStageColor(match.stage),
                        fontWeight: 800,
                        fontSize: "12px",
                        marginBottom: "10px",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {match.stage} Match • Prize {match.prize}
                    </div>

                    <h2
                      style={{
                        margin: 0,
                        fontSize: "34px",
                        lineHeight: 1.02,
                        letterSpacing: "-0.04em",
                      }}
                    >
                      {match.home} vs {match.away}
                    </h2>

                    <div style={{ color: "#dbe4f0", marginTop: "8px", fontSize: "15px" }}>
                      {match.stadium} • {match.location}
                    </div>
                  </div>
                </div>

                <div style={{ padding: "22px" }}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gap: "12px",
                      marginBottom: "18px",
                    }}
                  >
                    <div
                      className="glass-card"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        borderRadius: "16px",
                        padding: "14px",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "4px" }}>
                        Kickoff
                      </div>
                      <div style={{ fontWeight: 800 }}>{match.kickoff}</div>
                    </div>

                    <div
                      className="glass-card"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        borderRadius: "16px",
                        padding: "14px",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "4px" }}>
                        Stage
                      </div>
                      <div style={{ fontWeight: 800, color: getStageColor(match.stage) }}>
                        {match.stage}
                      </div>
                    </div>

                    <div
                      className="glass-card"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        borderRadius: "16px",
                        padding: "14px",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "4px" }}>
                        Prize Pool
                      </div>
                      <div style={{ fontWeight: 800 }}>{match.prize}</div>
                    </div>
                  </div>

                  <div style={{ marginTop: "24px" }}>
                    <h3 style={{ margin: "0 0 12px", fontSize: "24px", letterSpacing: "-0.03em" }}>
                      Your Entries
                    </h3>

                    <div style={{ display: "grid", gap: "14px" }}>
                      {entries.map((entry, entryIndex) => (
                        <div
                          key={'${match.id}-${entry.entryNumber}'}
                          className="glass-card"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            borderRadius: "18px",
                            padding: "16px",
                            border: "1px solid rgba(255,255,255,0.06)",
                          }}
                        >
                          <div style={{ fontWeight: 800, marginBottom: "12px" }}>
                            Entry #{entry.entryNumber}
                          </div>

                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "1fr 1fr",
                              gap: "12px",
                            }}
                          >
                            <div>
                              <div
                                style={{
                                  color: "#94a3b8",
                                  fontSize: "12px",
                                  marginBottom: "6px",
                                }}
                              >
                                {match.home}
                              </div>
                              <input
                                className="score-input"
                                type="number"
                                value={entry.homeScore}
                                onChange={(e) =>
                                  updateEntry(match.id, entryIndex, "homeScore", e.target.value)
                                }
                                placeholder="Home score"
                                style={{
                                  width: "100%",
                                  padding: "12px 14px",
                                  borderRadius: "12px",
                                  border: "1px solid rgba(255,255,255,0.10)",
                                  background: "rgba(255,255,255,0.05)",
                                  color: "white",
                                }}
                              />
                            </div>

                            <div>
                              <div
                                style={{
                                  color: "#94a3b8",
                                  fontSize: "12px",
                                  marginBottom: "6px",
                                }}
                              >
                                {match.away}
                              </div>
                              <input
                                className="score-input"
                                type="number"
                                value={entry.awayScore}
                                onChange={(e) =>
                                  updateEntry(match.id, entryIndex, "awayScore", e.target.value)
                                }
                                placeholder="Away score"
                                style={{
                                  width: "100%",
                                  padding: "12px 14px",
                                  borderRadius: "12px",
                                  border: "1px solid rgba(255,255,255,0.10)",
                                  background: "rgba(255,255,255,0.05)",
                                  color: "white",
                                }}
                              />
                            </div>
                          </div>

                          <div
                            style={{
                              marginTop: "12px",
                              color: "#facc15",
                              fontWeight: 800,
                            }}
                          >
                            Predicted winner:{" "}
                            {getWinner(
                              match.home,
                              match.away,
                              entry.homeScore,
                              entry.awayScore
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        gap: "12px",
                        flexWrap: "wrap",
                        marginTop: "16px",
                      }}
                    >
                      <button
                        className="cta-button"
                        onClick={() => addEntry(match.id)}
                        disabled={entries.length >= MAX_ENTRIES_PER_MATCH}
                        style={{
                          background:
                            entries.length >= MAX_ENTRIES_PER_MATCH
                              ? "#374151"
                              : "#22c55e",
                          color: "white",
                          border: "none",
                          borderRadius: "12px",
                          padding: "12px 16px",
                          fontWeight: 800,
                          cursor:
                            entries.length >= MAX_ENTRIES_PER_MATCH
                              ? "not-allowed"
                              : "pointer",
                        }}
                      >
                        Add Entry
                      </button>

                      <button
                        className="cta-button"
                        onClick={savePredictionsLocally}
                        style={{
                          background: "#facc15",
                          color: "#111827",
                          border: "none",
                          borderRadius: "12px",
                          padding: "12px 16px",
                          fontWeight: 800,
                          cursor: "pointer",
                        }}
                      >
                        Save Match Predictions
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {showRules ? (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              maxWidth: "720px",
              width: "100%",
              background: "#0f172a",
              borderRadius: "24px",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 30px 70px rgba(0,0,0,0.45)",
              padding: "24px",
            }}
          >
            <h2 style={{ marginTop: 0, fontSize: "30px", letterSpacing: "-0.03em" }}>
              Competition Rules
            </h2>

            <div style={{ color: "#cbd5e1", lineHeight: 1.85 }}>
              <div>• Predict the winner and final score for each match.</div>
              <div>• You may enter up to 3 predictions per match.</div>
              <div>• Save predictions locally before final submission/payment.</div>
              <div>• Prize pools increase by stage: Pool, Playoff and Final.</div>
              <div>• Leaderboard ranking will depend on prediction accuracy.</div>
            </div>

            <button
              className="cta-button"
              onClick={() => setShowRules(false)}
              style={{
                marginTop: "20px",
                background: "#facc15",
                color: "#111827",
                border: "none",
                borderRadius: "12px",
                padding: "12px 18px",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              Close Rules
            </button>
          </div>
        </div>
      ) : null}
    </main>
  );
}
