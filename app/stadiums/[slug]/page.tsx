import Link from "next/link";

type Stadium = {
  slug: string;
  name: string;
  city: string;
  capacity: string;
  image: string;
  description: string;
  story: string;
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
      "Australia’s largest stadium and one of the biggest stages in world sport.",
    story:
      "This is the type of venue built for finals, iconic moments and the biggest pressure matches of the tournament. Massive scale, modern event capability and world-class atmosphere make it the standout stage.",
  },
  {
    slug: "melbourne-cricket-ground",
    name: "Melbourne Cricket Ground",
    city: "Melbourne",
    capacity: "100,000",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Melbourne_Cricket_Ground_%28MCG%29.jpg",
    description:
      "One of the most iconic stadiums in the world, combining history and scale.",
    story:
      "The MCG is one of the true cathedrals of sport. Few venues can match its history, scale and emotional presence when the stands are full and the lights are on.",
  },
  {
    slug: "perth-stadium",
    name: "Perth Stadium",
    city: "Perth",
    capacity: "61,000",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Perth_Stadium_aerial.jpg",
    description:
      "A modern architectural masterpiece with elite design and atmosphere.",
    story:
      "Perth Stadium delivers a premium under-lights experience with sharp design, a dramatic bowl and excellent sightlines. It feels made for major international rugby.",
  },
  {
    slug: "suncorp-stadium",
    name: "Suncorp Stadium",
    city: "Brisbane",
    capacity: "52,500",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Suncorp_Stadium.jpg",
    description:
      "Widely regarded as one of the best rugby stadiums in the world.",
    story:
      "Suncorp is famous for its intensity. The crowd sits close, the noise builds quickly and the whole venue feels built for collision, speed and pressure.",
  },
  {
    slug: "adelaide-oval",
    name: "Adelaide Oval",
    city: "Adelaide",
    capacity: "53,500",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2e/Adelaide_Oval_2016.jpg",
    description:
      "A stunning venue where heritage meets modern design.",
    story:
      "Adelaide Oval blends beauty and event quality. It has a different mood from the other big stadiums — elegant, distinctive and visually memorable.",
  },
];

export default async function StadiumDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const stadium = stadiums.find((item) => item.slug === slug);

  if (!stadium) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background:
            "radial-gradient(circle at top, #111827 0%, #020617 55%, #01030a 100%)",
          color: "white",
          fontFamily: "Arial, sans-serif",
          padding: "40px 20px",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <Link href="/stadiums" style={{ color: "#facc15", textDecoration: "none" }}>
            ← Back to Stadiums
          </Link>
          <h1>Stadium not found</h1>
        </div>
      </main>
    );
  }

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
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "24px 20px 80px" }}>
        <Link href="/stadiums" style={{ color: "#facc15", textDecoration: "none", fontWeight: 800 }}>
          ← Back to Stadiums
        </Link>

        <section
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "30px",
            minHeight: "500px",
            marginTop: "20px",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 24px 70px rgba(0,0,0,0.34)",
            backgroundImage: `linear-gradient(90deg, rgba(2,6,23,0.94) 0%, rgba(2,6,23,0.72) 40%, rgba(2,6,23,0.28) 75%, rgba(2,6,23,0.18) 100%), url('${stadium.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
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
              position: "relative",
              zIndex: 2,
              minHeight: "500px",
              display: "flex",
              alignItems: "flex-end",
              padding: "34px",
            }}
          >
            <div style={{ maxWidth: "760px" }}>
              <div
                style={{
                  display: "inline-block",
                  padding: "8px 14px",
                  borderRadius: "999px",
                  background: "rgba(250,204,21,0.14)",
                  color: "#facc15",
                  fontWeight: 800,
                  fontSize: "13px",
                  marginBottom: "14px",
                  border: "1px solid rgba(250,204,21,0.14)",
                }}
              >
                WORLD CUP STADIUM DETAIL
              </div>

              <h1
                style={{
                  fontSize: "64px",
                  lineHeight: 0.94,
                  margin: "0 0 10px",
                  letterSpacing: "-0.05em",
                }}
              >
                {stadium.name}
              </h1>

              <div
                style={{
                  color: "#dbe4f0",
                  fontSize: "17px",
                  marginBottom: "12px",
                }}
              >
                {stadium.city} • Capacity {stadium.capacity}
              </div>

              <p
                style={{
                  margin: 0,
                  color: "#e2e8f0",
                  fontSize: "18px",
                  lineHeight: 1.75,
                }}
              >
                {stadium.description}
              </p>
            </div>
          </div>
        </section>

        <section
          style={{
            marginTop: "26px",
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "24px",
              padding: "24px",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 18px 42px rgba(0,0,0,0.22)",
            }}
          >
            <h2 style={{ marginTop: 0, fontSize: "30px", letterSpacing: "-0.04em" }}>
              Stadium Story
            </h2>
            <p
              style={{
                color: "#cbd5e1",
                lineHeight: 1.85,
                fontSize: "16px",
                marginBottom: 0,
              }}
            >
              {stadium.story}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gap: "18px",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "24px",
                padding: "22px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "6px" }}>
                City
              </div>
              <div style={{ fontSize: "28px", fontWeight: 900 }}>{stadium.city}</div>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "24px",
                padding: "22px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "6px" }}>
                Capacity
              </div>
              <div style={{ fontSize: "28px", fontWeight: 900 }}>{stadium.capacity}</div>
            </div>

            <a
              href=`{https://www.google.com/maps/search/${stadium.name}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                background: "#facc15",
                color: "#111827",
                borderRadius: "14px",
                padding: "14px 18px",
                fontWeight: 900,
                textDecoration: "none",
                textAlign: "center",
                boxShadow: "0 12px 30px rgba(250,204,21,0.18)",
              }}
            >
              Open Stadium Map
            </a>

            <Link
              href="/matches"
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.08)",
                color: "white",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "14px",
                padding: "14px 18px",
                fontWeight: 800,
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              View Matches
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
