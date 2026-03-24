"use client";

import Link from "next/link";

type Stadium = {
  slug: string;
  name: string;
  city: string;
  capacity: string;
  image: string;
  description: string;
};

const stadiums: Stadium[] = [
  {
    slug: "stadium-australia",
    name: "Stadium Australia",
    city: "Sydney",
    capacity: "83,500",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/50/Stadium_Australia.jpg",
    description:
      "Australia’s largest stadium and one of the biggest stages in world sport. Built for iconic finals and unforgettable World Cup moments.",
  },
  {
    slug: "melbourne-cricket-ground",
    name: "Melbourne Cricket Ground",
    city: "Melbourne",
    capacity: "100,000",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Melbourne_Cricket_Ground_%28MCG%29.jpg",
    description:
      "One of the most iconic stadiums in the world, combining history, scale and massive-event energy.",
  },
  {
    slug: "perth-stadium",
    name: "Perth Stadium",
    city: "Perth",
    capacity: "61,000",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Perth_Stadium_aerial.jpg",
    description:
      "A modern architectural masterpiece with elite lighting, steep stands and a premium big-match atmosphere.",
  },
  {
    slug: "suncorp-stadium",
    name: "Suncorp Stadium",
    city: "Brisbane",
    capacity: "52,500",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Suncorp_Stadium.jpg",
    description:
      "Widely regarded as one of the best rugby stadiums in the world. Compact, loud and built for intensity.",
  },
  {
    slug: "adelaide-oval",
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

        .scrollRow::-webkit-scrollbar {
          height: 8px;
        }

        .scrollRow::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.12);
          border-radius: 999px;
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
          className="fadeUp fadeUpDelay1"
          style={{
            marginTop: "22px",
            borderRadius: "28px",
            padding: "30px",
            background:
              "linear-gradient(135deg, rgba(250,204,21,0.12), rgba(59,130,246,0.08), rgba(15,23,42,0.98))",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 22px 60px rgba(0,0,0,0.28)",
          }}
        >
          <h1
            style={{
              fontSize: "52px",
              lineHeight: 0.98,
              margin: "0 0 12px",
              letterSpacing: "-0.05em",
            }}
          >
            Official World Cup Stadiums
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              maxWidth: "820px",
              fontSize: "17px",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            Explore the venues that give Rugby World Cup 2027 its scale, emotion and
            atmosphere. Tap any stadium to open a full detail page.
          </p>
        </div>

        <div
          className="fadeUp fadeUpDelay2 scrollRow"
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "18px",
            marginTop: "28px",
            paddingBottom: "10px",
          }}
        >
          {stadiums.map((stadium, i) => (
            <Link
              key={i}
              href={/stadiums/${stadium.slug}}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
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

                  <div
                    style={{
                      marginTop: "12px",
                      color: "#facc15",
                      fontWeight: 800,
                      fontSize: "14px",
                    }}
                  >
                    Open Stadium Detail →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
