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
          "radial-gradient(circle at top, #111827 0%, #020617 55%, #01030a 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <style jsx>{`
        .page-enter {
          animation: pageEnter 0.8s ease both;
        }

        .fade-up {
          opacity: 0;
          transform: translateY(28px);
          animation: fadeUp 0.8s ease forwards;
        }

        .delay-1 {
          animation-delay: 0.08s;
        }

        .delay-2 {
          animation-delay: 0.16s;
        }

        .delay-3 {
          animation-delay: 0.24s;
        }

        .hero-shell {
          animation: pulseGlow 4.5s ease-in-out infinite;
        }

        .hero-image {
          animation: slowZoom 14s ease-in-out infinite alternate;
        }

        .glass-card {
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease;
        }

        .glass-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 56px rgba(0, 0, 0, 0.36);
          border-color: rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.07);
        }

        .stadium-link {
          text-decoration: none;
          color: inherit;
        }

        .stadium-card {
          position: relative;
          overflow: hidden;
          transition:
            transform 0.32s ease,
            box-shadow 0.32s ease,
            border-color 0.32s ease,
            background 0.32s ease;
        }

        .stadium-card:hover {
          transform: translateY(-10px) scale(1.01);
          box-shadow: 0 28px 70px rgba(0, 0, 0, 0.42);
          border-color: rgba(250, 204, 21, 0.24);
          background: rgba(255, 255, 255, 0.07);
        }

        .stadium-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255, 255, 255, 0.06) 45%,
            transparent 70%
          );
          transform: translateX(-120%);
          transition: transform 0.8s ease;
          pointer-events: none;
        }

        .stadium-card:hover::after {
          transform: translateX(120%);
        }

        .image-wrap {
          overflow: hidden;
        }

        .stadium-image {
          transition: transform 0.7s ease, filter 0.4s ease;
        }

        .stadium-card:hover .stadium-image {
          transform: scale(1.07);
          filter: saturate(1.08);
        }

        .cta-chip {
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            opacity 0.2s ease;
        }

        .cta-chip:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 32px rgba(250, 204, 21, 0.18);
          opacity: 0.97;
        }

        .cta-chip:active {
          transform: translateY(0) scale(0.98);
        }

        .scroll-row::-webkit-scrollbar {
          height: 8px;
        }

        .scroll-row::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.12);
          border-radius: 999px;
        }

        @keyframes pageEnter {
          from {
            opacity: 0;
            transform: scale(0.99);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulseGlow {
          0% {
            box-shadow: 0 26px 70px rgba(0, 0, 0, 0.42);
          }
          50% {
            box-shadow: 0 30px 86px rgba(250, 204, 21, 0.08);
          }
          100% {
            box-shadow: 0 26px 70px rgba(0, 0, 0, 0.42);
          }
        }

        @keyframes slowZoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.06);
          }
        }
      `}</style>

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
              src={stadiums[0].image}
              alt={stadiums[0].name}
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
                "linear-gradient(90deg, rgba(2,6,23,0.9) 0%, rgba(2,6,23,0.58) 45%, rgba(2,6,23,0.18) 100%)",
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
                maxWidth: "700px",
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
              Host Nation
            </div>
            <div style={{ fontSize: "24px", fontWeight: 900 }}>Australia</div>
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
              Venue Browser
            </div>
            <div style={{ fontSize: "24px", fontWeight: 900 }}>Elite UI</div>
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
              Motion Feel
            </div>
            <div style={{ fontSize: "24px", fontWeight: 900 }}>Smooth Flow</div>
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
              Experience
            </div>
            <div style={{ fontSize: "24px", fontWeight: 900 }}>Premium App</div>
          </div>
        </div>

        <div
          className="fade-up delay-3 scroll-row"
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
              `href={/stadiums/${stadium.slug}`}
              className="stadium-link"
            >
              <div
                className="stadium-card"
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
                <div className="image-wrap" style={{ height: "190px" }}>
                  <img
                    className="stadium-image"
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
