"use client";

import Link from "next/link";

type Stadium = {
  id: number;
  name: string;
  city: string;
  capacity: string;
  description: string;
  role: string;
  image: string;
  lat: number;
  lng: number;
};

const stadiums: Stadium[] = [
  {
    id: 1,
    name: "Stadium Australia",
    city: "Sydney",
    capacity: "82,000",
    role: "Final Venue",
    description:
      "The main stadium of Rugby World Cup 2027 and host of the Final. Built for global sporting events.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Stadium_Australia.jpg",
    lat: -33.8474,
    lng: 151.0634,
  },
  {
    id: 2,
    name: "Sydney Football Stadium",
    city: "Sydney",
    capacity: "42,500",
    role: "Knockout Matches",
    description:
      "A modern stadium in central Sydney delivering an electric rugby atmosphere.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/Sydney_Football_Stadium_2022.jpg",
    lat: -33.8907,
    lng: 151.2253,
  },
  {
    id: 3,
    name: "Brisbane Stadium",
    city: "Brisbane",
    capacity: "52,500",
    role: "Quarter Finals",
    description:
      "One of Australia’s premier rugby venues known for intensity and crowd energy.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Lang_Park_Stadium.jpg",
    lat: -27.4648,
    lng: 153.0094,
  },
  {
    id: 4,
    name: "Perth Stadium",
    city: "Perth",
    capacity: "60,000",
    role: "Opening Match",
    description:
      "A world-class venue and host of the opening game of the tournament.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Perth_Stadium_aerial.jpg",
    lat: -31.9509,
    lng: 115.8892,
  },
  {
    id: 5,
    name: "Adelaide Oval",
    city: "Adelaide",
    capacity: "53,500",
    role: "Pool Matches",
    description:
      "An iconic stadium with stunning surroundings and premium match experience.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Adelaide_Oval_from_the_air.jpg",
    lat: -34.9158,
    lng: 138.5961,
  },
  {
    id: 6,
    name: "Docklands Stadium",
    city: "Melbourne",
    capacity: "53,000",
    role: "Pool Matches",
    description:
      "A modern indoor-capable stadium in Melbourne with a polished event feel.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Marvel_Stadium_aerial.jpg",
    lat: -37.8164,
    lng: 144.9475,
  },
  {
    id: 7,
    name: "Newcastle Stadium",
    city: "Newcastle",
    capacity: "33,000",
    role: "Pool Matches",
    description:
      "A compact and passionate rugby venue delivering intense crowd atmosphere.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Newcastle_International_Sports_Centre.jpg",
    lat: -32.9178,
    lng: 151.7265,
  },
  {
    id: 8,
    name: "North Queensland Stadium",
    city: "Townsville",
    capacity: "25,000",
    role: "Pool Matches",
    description:
      "A tropical venue offering a unique destination feel for World Cup fans.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/79/North_Queensland_Stadium.jpg",
    lat: -19.258,
    lng: 146.8169,
  },
];

export default function StadiumsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #0f172a 0%, #020617 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "28px 20px 60px" }}>
        
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

        {/* HERO */}
        <section
          style={{
            marginTop: "18px",
            borderRadius: "24px",
            padding: "30px",
            background:
              "linear-gradient(135deg, rgba(250,204,21,0.15), rgba(15,23,42,0.95))",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h1 style={{ fontSize: "42px", margin: 0 }}>
            World Cup 2027 Stadiums
          </h1>
          <p style={{ color: "#cbd5e1", marginTop: "10px" }}>
            Explore the official venues hosting Rugby World Cup 2027 in Australia.
          </p>
        </section>

        {/* GRID */}
        <section
          style={{
            marginTop: "28px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "20px",
          }}
        >
          {stadiums.map((stadium) => (
            <div
              key={stadium.id}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <img
                src={stadium.image}
                alt={stadium.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "16px" }}>
                <div
                  style={{
                    color: "#facc15",
                    fontSize: "12px",
                    fontWeight: 700,
                    marginBottom: "6px",
                  }}
                >
                  {stadium.city}
                </div>

                <h2 style={{ margin: "0 0 6px" }}>{stadium.name}</h2>

                <div style={{ color: "#94a3b8", fontSize: "14px" }}>
                  Capacity: {stadium.capacity}
                </div>

                <div
                  style={{
                    marginTop: "6px",
                    color: "#22c55e",
                    fontWeight: 700,
                    fontSize: "14px",
                  }}
                >
                  {stadium.role}
                </div>

                <p style={{ color: "#cbd5e1", fontSize: "14px" }}>
                  {stadium.description}
                </p>

                <a
                  href={https://www.google.com/maps?q=${stadium.lat},${stadium.lng}}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    background: "#22c55e",
                    color: "white",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  View on Map
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
