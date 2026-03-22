import Link from "next/link";

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
          <Link href="/" style={{ color: "#facc15", textDecoration: "none" }}>
            ← Back Home
          </Link>
        </div>

        <h1 style={{ marginTop: 0, fontSize: "36px", marginBottom: "8px" }}>
          Sign In
        </h1>
        <p style={{ color: "#d1d5db", marginBottom: "22px" }}>
          Login to manage your team, leagues and scores.
        </p>

        <div style={{ display: "grid", gap: "14px" }}>
          <input type="email" placeholder="Email address" style={inputStyle} />
          <input type="password" placeholder="Password" style={inputStyle} />

          <button style={primaryButtonStyle}>Sign In</button>
          <button style={secondaryButtonStyle}>Create Account</button>
        </div>
      </div>
    </main>
  );
}

const inputStyle = {
  padding: "16px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(255,255,255,0.08)",
  color: "white",
  fontSize: "16px",
  outline: "none",
} as const;

const primaryButtonStyle = {
  background: "#facc15",
  color: "#0b1020",
  border: "none",
  padding: "16px",
  borderRadius: "12px",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
} as const;

const secondaryButtonStyle = {
  background: "transparent",
  color: "white",
  border: "1px solid rgba(255,255,255,0.18)",
  padding: "16px",
  borderRadius: "12px",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
} as const;
