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
    image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Stadium_Australia.jpg",
    description:
      "Australia’s largest stadium and the centerpiece for major international events. A true World Cup stage.",
  },
  {
    name: "Melbourne Cricket Ground",
    city: "Melbourne",
    capacity: "100,000",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Melbourne_Cricket_Ground_%28MCG%29.jpg",
    description:
      "One of the most iconic stadiums in world sport. Built for legendary moments and massive crowds.",
  },
  {
    name: "Perth Stadium",
    city: "Perth",
    capacity: "61,000",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Perth_Stadium_aerial.jpg",
    description:
      "A modern architectural masterpiece delivering an electric atmosphere under lights.",
  },
  {
    name: "Suncorp Stadium",
    city: "Brisbane",
    capacity: "52,500",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Suncorp_Stadium.jpg",
    description:
      "Widely regarded as one of the best rugby stadiums in the world. Intense and loud.",
  },
  {
    name: "Adelaide Oval",
    city: "Adelaide",
    capacity: "53,500",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Adelaide_Oval_2016.jpg",
    description:
      "Historic meets modern. A visually stunning venue with a unique sporting atmosphere.",
  },
];

export default function StadiumsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #0f172a, #020617)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        
        {/* BACK */}
        <Link href="/" style={{ color: "#facc15", textDecoration: "none" }}>
          ← Back Home
        </Link>

        {/* TITLE */}
        <h1 style={{ fontSize: "44px", marginTop: "20px" }}>
          World Cup Stadiums
        </h1>

        <p style={{ color: "#94a3b8", marginBottom: "30px" }}>
          Explore the iconic venues of Rugby World Cup 2027 in Australia
        </p>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gap: "24px",
          }}
        >
          {stadiums.map((stadium, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                height: "340px",
                boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
              }}
            >
              {/* IMAGE */}
              <img
                src={stadium.image}
                alt={stadium.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* DARK OVERLAY */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.2))",
                }}
              />

              {/* CONTENT */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  padding: "24px",
                }}
              >
                <h2 style={{ margin: 0, fontSize: "28px" }}>
                  {stadium.name}
                </h2>

                <div style={{ color: "#cbd5e1", marginTop: "6px" }}>
                  {stadium.city} • Capacity {stadium.capacity}
                </div>

                <p
                  style={{
                    marginTop: "10px",
                    maxWidth: "600px",
                    color: "#e2e8f0",
                  }}
                >
                  {stadium.description}
                </p>

                <button
                  style={{
                    marginTop: "12px",
                    background: "#facc15",
                    color: "#111827",
                    border: "none",
                    borderRadius: "10px",
                    padding: "10px 14px",
                    fontWeight: 800,
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps/search/${stadium.name}`,
                      "_blank"
                    )
                  }
                >
                  View on Map
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
