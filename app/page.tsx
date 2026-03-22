"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #173422 0%, #0b1020 46%, #09111b 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* NAV BAR */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 30px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(6px)",
          position: "sticky",
          top: 0,
          background: "rgba(11,16,32,0.75)",
          zIndex: 10,
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "22px", color: "#facc15" }}>
          Ruckings
        </div>

        <div style={{ display: "flex", gap: "18px", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "white", textDecoration: "none", fontWeight: 600 }}>
            Home
          </Link>

          <Link href="/login" style={{ color: "white", textDecoration: "none", fontWeight: 600 }}>
            Login
          </Link>

          <Link href="/team" style={{ color: "white", textDecoration: "none", fontWeight: 600 }}>
            Team
          </Link>

          <Link href="/leaderboard" style={{ color: "white", textDecoration: "none", fontWeight: 600 }}>
            Leaderboard
          </Link>

          <Link href="/matches" style={{ color: "#facc15", textDecoration: "none", fontWeight: 700 }}>
            Matches
          </Link>
        </div>
      </div>

      {/* HERO SECTION */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "60px 20px",
        }}
      >
        <h1 style={{ fontSize: "54px", marginBottom: "16px", lineHeight: 1.1 }}>
          Build your ultimate rugby fantasy team
        </h1>

        <p style={{ fontSize: "18px", color: "#cbd5e1", maxWidth: "700px" }}>
          Kies spelers, bou jou span, kompeteer op die leaderboard en volg live matches met stadiums en weer.
        </p>

        {/* BUTTONS */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "30px" }}>
          <Link
            href="/login"
            style={{
              textDecoration: "none",
              background: "#facc15",
              color: "#0b1020",
              padding: "14px 18px",
              borderRadius: "12px",
              fontWeight: "bold",
            }}
          >
            Sign In
          </Link>

          <Link
            href="/team"
            style={{
              textDecoration: "none",
              background: "rgba(255,255,255,0.08)",
              color: "white",
              padding: "14px 18px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.14)",
              fontWeight: "bold",
            }}
          >
            Build Team
          </Link>

          <Link
            href="/leaderboard"
            style={{
              textDecoration: "none",
              background: "rgba(255,255,255,0.08)",
              color: "white",
              padding: "14px 18px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.14)",
              fontWeight: "bold",
            }}
          >
            Leaderboard
          </Link>

          <Link
            href="/matches"
            style={{
              textDecoration: "none",
              background: "rgba(255,255,255,0.08)",
              color: "white",
              padding: "14px 18px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.14)",
              fontWeight: "bold",
            }}
          >
            Matches
          </Link>
        </div>
      </div>

      {/* FEATURES */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px",
        }}
      >
        {[
          {
            title: "Build your team",
            text: "Kies jou beste spelers en bestuur jou budget slim.",
          },
          {
            title: "Compete",
            text: "Klim op die leaderboard en wys wie is nommer 1.",
          },
          {
            title: "Live matches",
            text: "Volg wedstryde, stadiums en weerstoestande.",
          },
          {
            title: "Win",
            text: "Speel teen vriende en wen bragging rights.",
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255,255,255,0.06)",
              borderRadius: "18px",
              padding: "20px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h3 style={{ marginTop: 0 }}>{item.title}</h3>
            <p style={{ color: "#cbd5e1" }}>{item.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
