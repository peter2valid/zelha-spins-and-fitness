import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { coaches, classHighlights, siteConfig } from "@/data/siteContent";
import { SiteHeader } from "@/components/legacy/SiteHeader";
import { SiteFooter } from "@/components/legacy/SiteFooter";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn more about Zelha Spin & Fitness in Juja, our coaching approach, and the people who help members train consistently.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main style={{ paddingTop: "88px", color: "#fff", background: "#111" }}>
        <section
          style={{
            minHeight: "66vh",
            display: "grid",
            alignItems: "end",
            padding: "7rem 6vw 4rem",
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.8), rgba(178,25,25,0.28)), url('/images/about-gym.png') center/cover no-repeat"
          }}
        >
          <div style={{ maxWidth: "760px" }}>
            <p style={{ fontSize: "1.4rem", letterSpacing: "0.28em", textTransform: "uppercase" }}>
              About Zelha
            </p>
            <h1 style={{ fontSize: "clamp(3.2rem, 8vw, 7rem)", lineHeight: 1.02, marginTop: "1rem" }}>
              A Juja gym built for energy, consistency, and real coaching.
            </h1>
            <p style={{ fontSize: "1.7rem", maxWidth: "620px", marginTop: "1.6rem" }}>
              {siteConfig.name} helps students, professionals, and athletes train with structure,
              confidence, and a community that keeps showing up.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2.4rem" }}>
              <Link href="/contact" className="btn">
                Talk to us
              </Link>
              <Link href="/pricing" className="btn">
                View pricing
              </Link>
            </div>
          </div>
        </section>

        <section style={{ padding: "5rem 6vw", background: "#151515" }}>
          <div className="title">
            <h1>What We Stand For</h1>
            <p>Simple coaching, clean programming, and a gym environment members want to return to.</p>
          </div>
          <div className="coaches-grid" style={{ marginTop: "2.5rem" }}>
            {classHighlights.slice(0, 4).map((item) => (
              <article
                key={item.title}
                style={{
                  padding: "2rem",
                  borderRadius: "22px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)"
                }}
              >
                <h3 style={{ fontSize: "2.1rem", marginBottom: "0.8rem" }}>{item.title}</h3>
                <p style={{ fontSize: "1.5rem", color: "rgba(255,255,255,0.75)" }}>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="coaches-section">
          <div className="title">
            <h1>Our Coaches</h1>
            <p>The team behind the classes, the progress checks, and the day-to-day support.</p>
          </div>
          <div className="coaches-grid">
            {coaches.map((coach) => (
              <article className="coach-card" key={coach.name}>
                <img src={coach.image} alt={coach.name} loading="lazy" />
                <div className="coach-card__body">
                  <h3>{coach.name}</h3>
                  <p>{coach.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}