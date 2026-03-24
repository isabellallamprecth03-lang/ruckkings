"use client";

import Link from "next/link";

type Stadium = {
  name: string;
  city: string;
  capacity: string;
  image: string;
  description: string;
};

const stadiums: Stadium[] = [
  {
    name: "Stadium Australia",
    city: "Sydney",
    capacity: "83,500",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/50/Stadium_Australia.jpg",
    description:
      "Australia’s largest stadium and one of the biggest stages in world sport. Built for iconic finals and unforgettable World Cup moments.",
  },
  {
    name: "Melbourne Cricket Ground",
    city: "Melbourne",
    capacity: "100,000",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Melbourne_Cricket_Ground_%28MCG%29.jpg",
    description:
      "One of the most iconic stadiums in the world, combining history, scale and massive-event energy.",
  },
  {
    name: "Perth Stadium",
    city: "Perth",
    capacity: "61,000",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Perth_Stadium_aerial.jpg",
    description:
      "A modern architectural masterpiece with elite lighting, steep stands and a premium big-match atmosphere.",
  },
  {
    name: "Suncorp Stadium",
    city: "Brisbane",
    capacity: "52,500",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Suncorp_Stadium.jpg",
    description:
      "Widely regarded as one of the best rugby stadiums in the world. Compact, loud and built for intensity.",
  },
  {
    name: "Adelaide Oval",
    city: "Adelaide",
    capacity: "53,500",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2e/Adelaide_Oval_2016.jpg",
    description:
      "A stunning venue where heritage meets modern design, delivering a distinctive world-class event setting.",
  },
];

export default function StadiumsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #0f172a 0%, #020617 55%, #01030a 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <style jsx>{`
        .fadeUp {
          opacity: 0;
          transform: translateY(26px);
          animation: fadeUp 0.8s ease forwards;
        }

        .fadeUpDelay1 {
          animation-delay: 0.12s;
        }

        .fadeUpDelay2 {
          animation-delay: 0.22s;
        }

        .fadeUpDelay3 {
          animation-delay: 0.34s;
        }

        .heroGlow {
          animation: heroGlow 4s ease-in-out infinite;
        }

        .stadiumCard {
          transition:
            transform 0.28s ease,
            box-shadow 0.28s ease,
            border-color 0.28s ease,
            background 0.28s ease;
        }

        .stadiumCard:hover {
          transform: translateY(-8px);
          box-shadow: 0 26px 60px rgba(0, 0, 0, 0.42);
          border-color: rgba(250, 204, 21, 0.22);
          background: rgba(255, 255, 255, 0.07);
        }

        .stadiumImageWrap {
          overflow: hidden;
        }

        .stadiumImage {
          transition: transform 0.6s ease;
        }

        .stadiumCard:hover .stadiumImage {
          transform: scale(1.06);
        }

        .glassCard {
          transition:
            transform 0.28s ease,
            box-shadow 0.28s ease,
            border-color 0.28s ease;
        }

        .glassCard:hover {
          transform: translateY(-6px);
          box-shadow: 0 22px 50px rgba(0, 0, 0, 0.35);
          border-color: rgba(255, 255, 255, 0.12);
        }

        .mapButton {
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            opacity 0.2s ease;
        }

        .mapButton:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(250, 204, 21, 0.2);
          opacity: 0.96;
        }

        .scrollRow::-webkit-scrollbar {
          height: 8px;
        }

        .scrollRow::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.12);
          border-radius: 999px;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(26px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroGlow {
          0% {
            box-shadow: 0 26px 70px rgba(0, 0, 0, 0.46);
          }
          50% {
            box-shadow: 0 30px 85px rgba(250, 204, 21, 0.08);
          }
          100% {
            box-shadow: 0 26px 70px rgba(0, 0, 0, 0.46);
          }
        }
      `}</style>

      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "22px 20px 80px" }}>
        <div
          className="fadeUp"
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
          className="fadeUp fadeUpDelay1 heroGlow"
          style={{
            position: "relative",
            height: "350px",
            borderRadius: "30px",
            overflow: "hidden",
            marginTop: "22px",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 26px 70px rgba(0,0,0,0.46)",
          }}
        >
          <img
            src={stadiums[0].image}
            alt={stadiums[0].name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(2,6,23,0.88) 0%, rgba(2,6,23,0.56) 45%, rgba(2,6,23,0.20) 100%)",
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
              FEATURED VENUE
            </div>

            <h1
              style={{
                margin: "0 0 8px",
                fontSize: "48px",
                lineHeight: 0.98,
                letterSpacing: "-0.05em",
              }}
            >
              {stadiums[0].name}
            </h1>

            <div style={{ color: "#cbd5e1", fontSize: "16px", marginBottom: "10px" }}>
              {stadiums[0].city} • Capacity {stadiums[0].capacity}
            </div>

            <p
              style={{
                margin: 0,
                maxWidth: "680px",
                color: "#e2e8f0",
                lineHeight: 1.75,
                fontSize: "16px",
              }}
            >
              {stadiums[0].description}
            </p>
          </div>
        </div>

        <div
          className="fadeUp fadeUpDelay2"
          style={{
            marginTop: "18px",
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "14px",
          }}
        >
          <div
            className="glassCard"
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "18px",
              padding: "16px",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "6px" }}>
              Host Nation
            </div>
            <div style={{ fontSize: "24px", fontWeight: 900 }}>Australia</div>
          </div>

          <div
            className="glassCard"
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "18px",
              padding: "16px",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "6px" }}>
              Venue Focus
            </div>
            <div style={{ fontSize: "24px", fontWeight: 900 }}>Elite Stadiums</div>
          </div>

          <div
            className="glassCard"
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "18px",
              padding: "16px",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "6px" }}>
              Matchday Feel
            </div>
            <div style={{ fontSize: "24px", fontWeight: 900 }}>Broadcast Style</div>
          </div>

          <div
            className="glassCard"
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "18px",
              padding: "16px",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "6px" }}>
              Experience
            </div>
            <div style={{ fontSize: "24px", fontWeight: 900 }}>Premium UI</div>
          </div>
        </div>

        <div
          className="fadeUp fadeUpDelay3 scrollRow"
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "18px",
            marginTop: "28px",
            paddingBottom: "10px",
          }}
        >
          {stadiums.map((stadium, i) => (
            <div
              key={i}
              className="stadiumCard"
              style={{
                minWidth: "320px",
                borderRadius: "24px",
                overflow: "hidden",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 18px 40px rgba(0,0,0,0.24)",
              }}
            >
              <div className="stadiumImageWrap" style={{ height: "190px" }}>
                <img
                  className="stadiumImage"
                  src={stadium.image}
                  alt={stadium.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              <div style={{ padding: "16px" }}>
                <h3
                  style={{
                    margin: "0 0 4px",
                    fontSize: "24px",
                    lineHeight: 1.05,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {stadium.name}
                </h3>

                <div style={{ color: "#94a3b8", fontSize: "14px" }}>
                  {stadium.city} • {stadium.capacity}
                </div>

                <p
                  style={{
                    fontSize: "14px",
                    marginTop: "10px",
                    color: "#e2e8f0",
                    lineHeight: 1.7,
                  }}
                >
                  {stadium.description}
                </p>

                <button
                  className="mapButton"
                  style={{
                    marginTop: "10px",
                    background: "#facc15",
                    color: "#111827",
                    border: "none",
                    borderRadius: "10px",
                    padding: "10px 14px",
                    fontWeight: 900,
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    window.open(
                      https://www.google.com/maps/search/${stadium.name},
                      "_blank"
                    )
                  }
                >
                  View Map
                </button>
              </div>
            </div>
          ))}
        </div>

        <div
          className="fadeUp fadeUpDelay3"
          style={{
            display: "grid",
            gap: "18px",
            marginTop: "34px",
          }}
        >
          {stadiums.map((stadium, i) => (
            <div
              key={i}
              className="glassCard"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: "22px",
                padding: "20px",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "0 16px 36px rgba(0,0,0,0.18)",
              }}
            >
              <h2
                style={{
                  margin: "0 0 6px",
                  fontSize: "28px",
                  letterSpacing: "-0.04em",
                }}
              >
                {stadium.name}
              </h2>

              <div style={{ color: "#94a3b8", fontSize: "15px" }}>
                {stadium.city} • Capacity {stadium.capacity}
              </div>

              <p
                style={{
                  marginTop: "10px",
                  maxWidth: "760px",
                  color: "#e2e8f0",
                  lineHeight: 1.8,
                }}
              >
                {stadium.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
