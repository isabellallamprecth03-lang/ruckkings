[5:58 PM, 3/22/2026] Liefie Lamprecht: import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
[5:59 PM, 3/22/2026] Liefie Lamprecht: "use client";

import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<"login" | "signup">("login");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) {
          alert(error.message);
          setLoading(false);
          return;
        }

        alert("Account created. Jy kan nou inlog.");
        setMode("login");
        setLoading(false);
        return;
      }

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        alert(error.message);
        setLoading(false);
        return;
      }

      alert("Login suksesvol!");
      window.location.href = "/team";
    } catch (error) {
      console.log(error);
      alert("Iets het verkeerd gegaan.");
    }

    setLoading(false);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #173422 0%, #0b1020 46%, #09111b 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "460px",
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "22px",
          padding: "28px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
        }}
      >
        <Link href="/" style={{ color: "#facc15", textDecoration: "none" }}>
          ← Back Home
        </Link>

        <h1 style={{ fontSize: "40px", margin: "18px 0 10px" }}>
          {mode === "login" ? "Login" : "Create Account"}
        </h1>

        <p style={{ color: "#cbd5e1", marginTop: 0, marginBottom: "22px" }}>
          {mode === "login"
            ? "Log in om jou span te save en leaderboard te gebruik."
            : "Skep jou account om Ruckings te begin gebruik."}
        </p>

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "14px" }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: "14px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.06)",
              color: "white",
              fontSize: "16px",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: "14px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.06)",
              color: "white",
              fontSize: "16px",
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              background: "#facc15",
              color: "#0b1020",
              border: "none",
              padding: "15px",
              borderRadius: "12px",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            {loading
              ? "Please wait..."
              : mode === "login"
              ? "Login"
              : "Create Account"}
          </button>
        </form>

        <button
          type="button"
          onClick={() => setMode(mode === "login" ? "signup" : "login")}
          style={{
            marginTop: "16px",
            background: "transparent",
            color: "#facc15",
            border: "none",
            cursor: "pointer",
            fontSize: "15px",
            padding: 0,
          }}
        >
          {mode === "login"
            ? "Het jy nog nie 'n account nie? Sign up"
            : "Het jy reeds 'n account? Login"}
        </button>
      </div>
    </main>
  );
}
