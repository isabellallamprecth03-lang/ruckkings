"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";

function getEntryFee(stage: string) {
  switch (stage) {
    case "Pool":
      return 100;
    case "Playoff":
      return 200;
    case "Final":
      return 300;
    default:
      return 100;
  }
}
type MatchStage = "Pool" | "Playoff" | "Final";

const matches = [
  {
    id: 1,
    stage: "Pool",
    home: "South Africa",
    away: "New Zealand",
    stadium: "Cape Town Stadium",
    location: "Cape Town, South Africa",
    capacity: "55,000",
    summary:
      "One of the most iconic stadiums in the world, set between Table Mountain and the Atlantic Ocean.",
    homeGround: "Used for major Springbok tests and international events.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Cape_Town_Stadium.jpg",
    kickoff: "10 Sep 2027 • 18:00",
    lat: -33.9036,
    lng: 18.4115,
  },
  {
    id: 2,
    stage: "Pool",
    home: "England",
    away: "France",
    stadium: "Twickenham Stadium",
    location: "London, England",
    capacity: "82,000",
    summary:
      "The home of England Rugby and one of the most historic rugby stadiums globally.",
    homeGround: "Official home of England Rugby.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5c/Twickenham_Stadium.jpg",
    kickoff: "12 Sep 2027 • 20:00",
    lat: 51.4553,
    lng: -0.3410,
  },
  {
    id: 3,
    stage: "Playoff",
    home: "Ireland",
    away: "Australia",
    stadium: "Stadium Australia",
    location: "Sydney, Australia",
    capacity: "83,500",
    summary:
      "A world-class Olympic stadium that hosts major finals and international events.",
    homeGround: "Used for major Australian international fixtures.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/50/Stadium_Australia.jpg",
    kickoff: "20 Oct 2027 • 19:30",
    lat: -33.8474,
    lng: 151.0634,
  },
  {
    id: 4,
    stage: "Final",
    home: "South Africa",
    away: "France",
    stadium: "Melbourne Cricket Ground",
    location: "Melbourne, Australia",
    capacity: "100,000",
    summary:
      "One of the largest stadiums in the world and home to historic global sporting events.",
    homeGround: "Primarily cricket and AFL, but iconic for global finals.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Melbourne_Cricket_Ground_%28MCG%29.jpg",
    kickoff: "30 Oct 2027 • 19:30",
    lat: -37.8199,
    lng: 144.9834,
  },
];

type PredictionEntry = {
  entryNumber: number;
  homeScore: string;
  awayScore: string;
};

type PredictionsState = Record<number, PredictionEntry[]>;

const STORAGE_KEY = "ruckkings_predictions_v4";
const MAX_ENTRIES_PER_MATCH = 3;


function getStagePrize(stage: MatchStage) {
  if (stage === "Pool") return "R10,000";
  if (stage === "Playoff") return "R25,000";
  return "R50,000";
}

function getPredictedWinner(
  homeScore: string,
  awayScore: string,
  home: string,
  away: string
) {
  const h = Number(homeScore);
  const a = Number(awayScore);

  if (homeScore === "" || awayScore === "" || Number.isNaN(h) || Number.isNaN(a)) {
    return "Incomplete";
  }

  if (h > a) return home;
  if (a > h) return away;
  return "Draw";
}

export default function MatchesPage() {
  const [showRules, setShowRules] = useState(false);
  const [predictions, setPredictions] = useState<PredictionsState>({});
  const [localSaveMessage, setLocalSaveMessage] = useState("");
  const [savingEntryKey, setSavingEntryKey] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored) as PredictionsState;
      setPredictions(parsed);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const totalEntries = useMemo(() => {
    return Object.values(predictions).reduce((sum, entries) => sum + entries.length, 0);
  }, [predictions]);

  function updateEntry(
    matchId: number,
    entryNumber: number,
    field: "homeScore" | "awayScore",
    value: string
  ) {
    setPredictions((prev) => {
      const existing = prev[matchId] ?? [];
      const nextEntries = [...existing];

      while (nextEntries.length < entryNumber) {
        nextEntries.push({
          entryNumber: nextEntries.length + 1,
          homeScore: "",
          awayScore: "",
        });
      }

      const index = entryNumber - 1;
      nextEntries[index] = {
        ...nextEntries[index],
        entryNumber,
        [field]: value,
      };

      return {
        ...prev,
        [matchId]: nextEntries,
      };
    });
  }

  function addEntry(matchId: number) {
    setPredictions((prev) => {
      const existing = prev[matchId] ?? [];

      if (existing.length >= MAX_ENTRIES_PER_MATCH) {
        return prev;
      }

      return {
        ...prev,
        [matchId]: [
          ...existing,
          {
            entryNumber: existing.length + 1,
            homeScore: "",
            awayScore: "",
          },
        ],
      };
    });
  }

  function removeEntry(matchId: number, entryNumber: number) {
    setPredictions((prev) => {
      const existing = prev[matchId] ?? [];

      const filtered = existing
        .filter((entry) => entry.entryNumber !== entryNumber)
        .map((entry, index) => ({
          ...entry,
          entryNumber: index + 1,
        }));

      return {
        ...prev,
        [matchId]: filtered,
      };
    });
  }

  function savePredictionsLocally() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(predictions));
    setLocalSaveMessage("Predictions saved locally.");

    window.setTimeout(() => {
      setLocalSaveMessage("");
    }, 2500);
  }

  async function savePrediction(match: any, entry: PredictionEntry) {
    if (!entry.homeScore || !entry.awayScore) {
      alert("Please enter both scores.");
      return;
    }

    const entryKey = '${match.id}-${entry.entryNumber}';
    setSavingEntryKey(entryKey);

    const { error } = await supabase.from("predictions").insert({
      match_id: match.id,
      stage: match.stage,
      home_team: match.home,
      away_team: match.away,
      home_score: Number(entry.homeScore),
      away_score: Number(entry.awayScore),
      entry_number: entry.entryNumber,
      stadium: match.stadium,
      location: match.location,
      kickoff: match.kickoff,
    });

    setSavingEntryKey("");

    if (error) {
      alert(`Error saving prediction: ${error.message}`);
      return;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(predictions));
    alert("Prediction saved successfully.");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #0f172a 0%, #020617 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "28px 20px 60px" }}>
        <Link
          href="/"
          style={{
            color: "#facc15",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          ← Back Home
        </Link>

        <section
          style={{
            marginTop: "18px",
            borderRadius: "28px",
            overflow: "hidden",
            background:
              "linear-gradient(135deg, rgba(250,204,21,0.16), rgba(34,197,94,0.08), rgba(15,23,42,0.98))",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.28)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: "20px",
              padding: "30px",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-block",
                  padding: "7px 12px",
                  borderRadius: "999px",
                  background: "rgba(250,204,21,0.14)",
                  color: "#facc15",
                  fontWeight: 700,
                  fontSize: "13px",
                  marginBottom: "14px",
                }}
              >
                Rugby World Cup 2027
              </div>

              <h1 style={{ fontSize: "46px", margin: "0 0 10px", lineHeight: 1.05 }}>
                Predict Scores. Win Big. Own the Tournament.
              </h1>

              <p
                style={{
                  color: "#cbd5e1",
                  maxWidth: "760px",
                  fontSize: "17px",
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                Enter up to 3 score predictions per match, compete for stage-based
                prize pools, and build your advantage throughout the World Cup.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                  marginTop: "22px",
                }}
              >
                <button
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
              </div>

              <div style={{ marginTop: "16px", color: "#94a3b8", fontSize: "14px" }}>
                Total entries in progress:{" "}
                <strong style={{ color: "white" }}>{totalEntries}</strong>
              </div>

              {localSaveMessage ? (
                <div style={{ marginTop: "10px", color: "#86efac", fontWeight: 700 }}>
                  {localSaveMessage}
                </div>
              ) : null}
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "20px",
                padding: "20px",
                border: "1px solid rgba(255,255,255,0.08)",
                alignSelf: "stretch",
              }}
            >
              <h2 style={{ marginTop: 0 }}>Prize Pools</h2>

              <div style={{ color: "#cbd5e1", lineHeight: 1.9 }}>
                <div>
                  Pool Matches: <strong style={{ color: "#facc15" }}>R10,000</strong>
                </div>
                <div>
                  Playoff Matches: <strong style={{ color: "#facc15" }}>R25,000</strong>
                </div>
                <div>
                  Final Match: <strong style={{ color: "#facc15" }}>R50,000</strong>
                </div>
              </div>

              <div
                style={{
                  marginTop: "18px",
                  padding: "14px",
                  borderRadius: "14px",
                  background: "rgba(250,204,21,0.1)",
                  color: "#fde68a",
                }}
              >
                Entry model: up to <strong>3 entries per match</strong>.
              </div>

              <div
                style={{
                  marginTop: "18px",
                  padding: "16px",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <div style={{ fontSize: "13px", color: "#94a3b8", marginBottom: "6px" }}>
                  Sponsored Space
                </div>
                <div style={{ fontWeight: 800, fontSize: "18px" }}>Your Brand Here</div>
                <div style={{ color: "#cbd5e1", marginTop: "6px" }}>
                  Premium sponsor placement for major tournament campaigns.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            marginTop: "24px",
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr",
            gap: "18px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "20px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h2 style={{ marginTop: 0 }}>Intro Video</h2>
            <p style={{ color: "#94a3b8", marginTop: 0 }}>
              Replace this later with your short branded opening video.
            </p>

            <video
              width="100%"
              controls
              poster="https://images.unsplash.com/photo-1547347298-4074fc3086f0"
              style={{ borderRadius: "16px", background: "#000" }}
            >
              <source src="/intro.mp4" type="video/mp4" />
            </video>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "20px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h2 style={{ marginTop: 0 }}>Competition Format</h2>

            <div style={{ color: "#cbd5e1", lineHeight: 1.8 }}>
              <div>• Predict the score for each featured match</div>
              <div>• Up to 3 entries allowed per match</div>
              <div>• Correct winner earns core points</div>
              <div>• Exact score and margin earn bonus points</div>
              <div>• Higher stages unlock bigger prizes</div>
            </div>

            <div
              style={{
                marginTop: "18px",
                padding: "14px",
                borderRadius: "14px",
                background: "rgba(34,197,94,0.1)",
                color: "#bbf7d0",
              }}
            >
              Best strategy: use Entry 1 as your safest pick and Entries 2–3 for upside.
            </div>
          </div>
        </section>
        {showRules ? (
          <div
            onClick={() => setShowRules(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.82)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              zIndex: 999,
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%",
                maxWidth: "580px",
                background: "#0f172a",
                borderRadius: "22px",
                padding: "24px",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
              }}
            >
              <h2 style={{ marginTop: 0 }}>Competition Rules</h2>

              <ul style={{ color: "#cbd5e1", lineHeight: 1.8, paddingLeft: "22px" }}>
                <li>Each user may enter up to 3 predictions per match.</li>
                <li>Correct winner: 5 points</li>
                <li>Exact score: +10 points</li>
                <li>Correct winning margin: +3 points</li>
                <li>One team exact score: +2 points</li>
                <li>Pool stage prize pool: R10,000</li>
                <li>Playoff stage prize pool: R25,000</li>
                <li>Final prize pool: R50,000</li>
              </ul>

              <button
                onClick={() => setShowRules(false)}
                style={{
                  marginTop: "12px",
                  background: "#facc15",
                  color: "#111827",
                  border: "none",
                  borderRadius: "10px",
                  padding: "10px 16px",
                  fontWeight: 800,
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>
          </div>
        ) : null}

        <section style={{ marginTop: "28px", display: "grid", gap: "24px" }}>
          {matches.map((match) => {
            const entries = predictions[match.id] ?? [];

            return (
              <article
                key={match.id}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
                }}
              >
                <img
                  src={match.image}
                  alt={match.stadium}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <div style={{ padding: "24px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "12px",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: "inline-block",
                          background: "rgba(250,204,21,0.14)",
                          color: "#facc15",
                          padding: "6px 10px",
                          borderRadius: "999px",
                          fontSize: "12px",
                          fontWeight: 700,
                          marginBottom: "10px",
                        }}
                      >
                        {match.stage} Match • Prize {getStagePrize(match.stage as any)}
                      </div>

                      <h2 style={{ margin: "0 0 8px", fontSize: "34px" }}>
                        {match.home} vs {match.away}
                      </h2>

                      <div style={{ color: "#cbd5e1" }}>{match.kickoff}</div>
                    </div>
                  </div>

                  <div
                    style={{
                      marginTop: "18px",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "16px",
                    }}
                  >
                    <div
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        padding: "16px",
                        borderRadius: "16px",
                      }}
                    >
                      <div style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "6px" }}>
                        Stadium
                      </div>
                      <div style={{ fontWeight: 800 }}>{match.stadium}
                      </div>
                      <a
                        href={`https://www.google.com/maps?q=${match.lat},${match.lng}`}
                        target="_blank"
                        style={{
                          display: "inline-block",
                          marginTop: "8px",
                          color: "#38bdf8",
                          fontWeight: 700,
                          textDecoration: "none",
                        }}
                      >
                        View on Map →
                      </a>
                      <div style={{ color: "#cbd5e1", marginTop: "6px" }}>{match.location}</div>
                      <div style={{ color: "#cbd5e1", marginTop: "6px" }}>
                        Capacity: {match.capacity}
                      </div>
                    </div>

                    <div
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        padding: "16px",
                        borderRadius: "16px",
                      }}
                    >
                      <div style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "6px" }}>
                        Stadium Notes
                      </div>
                      <div style={{ color: "#cbd5e1", marginBottom: "8px" }}>
                        {match.summary}
                      </div>
                      <div style={{ color: "#fde68a" }}>{match.homeGround}</div>
                    </div>
                  </div>

                  <div style={{ marginTop: "24px" }}>
                    <h3 style={{ marginBottom: "10px" }}>Your Entries</h3>

                    {entries.length === 0 ? (
                      <div style={{ color: "#94a3b8", marginBottom: "14px" }}>
                        No entries yet. Add your first prediction below.
                      </div>
                    ) : null}

                    <div style={{ display: "grid", gap: "14px" }}>
                      {entries.map((entry) => {
                        const entryKey = '${match.id}-${entry.entryNumber}';
                        const isSaving = savingEntryKey === entryKey;

                        return (
                          <div
                            key={entry.entryNumber}
                            style={{
                              background: "rgba(255,255,255,0.04)",
                              borderRadius: "16px",
                              padding: "16px",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                gap: "12px",
                                alignItems: "center",
                                flexWrap: "wrap",
                              }}
                            >
                              <div style={{ fontWeight: 800 }}>
                                Entry #{entry.entryNumber}
                              </div>

                              <button
                                onClick={() => removeEntry(match.id, entry.entryNumber)}
                                style={{
                                  background: "rgba(239,68,68,0.14)",
                                  color: "#fca5a5",
                                  border: "1px solid rgba(239,68,68,0.3)",
                                  borderRadius: "10px",
                                  padding: "8px 12px",
                                  cursor: "pointer",
                                  fontWeight: 700,
                                }}
                              >
                                Remove
                              </button>
                            </div>

                            <div
                              style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "12px",
                                marginTop: "14px",
                              }}
                            >
                              <input
                                type="number"
                                value={entry.homeScore}
                                placeholder={'${match.home} score'}
                                onChange={(e) =>
                                  updateEntry(
                                    match.id,
                                    entry.entryNumber,
                                    "homeScore",
                                    e.target.value
                                  )
                                }
                                style={{
                                  padding: "12px",
                                  borderRadius: "12px",
                                  border: "1px solid rgba(255,255,255,0.08)",
                                  background: "#0f172a",
                                  color: "white",
                                }}
                              />

                              <input
                                type="number"
                                value={entry.awayScore}
                                placeholder={'${match.away} score'}
                                onChange={(e) =>
                                  updateEntry(
                                    match.id,
                                    entry.entryNumber,
                                    "awayScore",
                                    e.target.value
                                  )
                                }
                                style={{
                                  padding: "12px",
                                  borderRadius: "12px",
                                  border: "1px solid rgba(255,255,255,0.08)",
                                  background: "#0f172a",
                                  color: "white",
                                }}
                              />
                            </div>

                            <div style={{ marginTop: "12px", color: "#cbd5e1" }}>
                              Predicted winner:{" "}
                              <strong style={{ color: "#facc15" }}>
                                {getPredictedWinner(
                                  entry.homeScore,
                                  entry.awayScore,
                                  match.home,
                                  match.away
                                )}
                              </strong>
                            </div>

                            <button
                              onClick={() => savePrediction(match, entry)}
                              disabled={isSaving}
                              style={{
                                marginTop: "12px",
                                background: isSaving ? "#374151" : "#22c55e",
                                color: "white",
                                border: "none",
                                borderRadius: "10px",
                                padding: "10px 14px",
                                fontWeight: 800,
                                cursor: isSaving ? "not-allowed" : "pointer",
                              }}
                            >
                              {isSaving
                                ? "Processing..."
                                : `Pay & Enter (R${getEntryFee(match.stage)})`}
                            </button>
                          </div>
                        );
                      })}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        gap: "12px",
                        flexWrap: "wrap",
                        marginTop: "14px",
                      }}
                    >
                      <button
                        onClick={() => addEntry(match.id)}
                        disabled={entries.length >= MAX_ENTRIES_PER_MATCH}
                        style={{
                          background:
                            entries.length >= MAX_ENTRIES_PER_MATCH ? "#374151" : "#22c55e",
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
                        Save Predictions Locally
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}
