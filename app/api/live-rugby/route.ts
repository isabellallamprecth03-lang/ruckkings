import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.RUGBY_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing RUGBY_API_KEY in .env.local" },
        { status: 500 }
      );
    }

    const response = await fetch("https://v1.rugby.api-sports.io/games?live=all", {
      headers: {
        "x-apisports-key": apiKey,
      },
      cache: "no-store",
    });

    const text = await response.text();

    if (!response.ok) {
      return NextResponse.json(
        {
          error: "Rugby API request failed",
          status: response.status,
          body: text,
        },
        { status: 500 }
      );
    }

    let data: unknown;

    try {
      data = JSON.parse(text);
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON returned by Rugby API", body: text },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Unexpected server error",
        detail: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
