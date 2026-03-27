import Link from "next/link";
import { SiteHeader } from "@/components/legacy/SiteHeader";
import { SiteFooter } from "@/components/legacy/SiteFooter";
import { buildMetadata } from "@/lib/seo";
import { coaches, siteConfig } from "@/data/siteContent";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn about Zelha Spin & Fitness, a community-first fitness center in Juja, Kenya known for energetic classes and personalized coaching.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <div className="main">
        <h1>About us</h1>
        <p>Welcome to Zelha Spin & Fitness, a customer-focused gym serving {siteConfig.location}.</p>
        <Link href="/contact" className="btn">
          Learn more
        </Link>
      </div>

      <section className="about" style={{ backgroundColor: "#000" }}>
        <div className="main2">
          <img src="/img/team3.png" alt="Zelha team" />
          <div className="all-text">
            <h4>ABOUT US</h4>
            <h1>Our Gym is Your Gym</h1>
            <p>
              We are located {siteConfig.landmark}. Zelha combines energetic group classes, structured
              strength work, and personal coaching for members who want sustainable results.
            </p>
            <div className="box-container">
              <div className="box">
                <h3>
                  <i className="fas fa-check"></i>
                  <span>body and mind</span>
                </h3>
                <p>Training plans that balance performance, consistency, and recovery.</p>
              </div>
              <div className="box">
                <h3>
                  <i className="fas fa-check"></i>
                  <span>healthy life</span>
                </h3>
                <p>Cardio, spin, and strength under one roof in Juja.</p>
              </div>
              <div className="box">
                <h3>
                  <i className="fas fa-check"></i>
                  <span>strategies</span>
                </h3>
                <p>Programs built around your goals and current fitness level.</p>
              </div>
              <div className="box">
                <h3>
                  <i className="fas fa-check"></i>
                  <span>workout</span>
                </h3>
                <p>Coached classes and gym-floor guidance every week.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h1>Our Coaches</h1>
              <p>Meet the team guiding spinning, dance fitness, HIIT, and strength training at Zelha.</p>
            </div>
          </div>
          <div className="row">
            <div className="team-items">
            {coaches.map((coach) => (
              <div className="item" key={coach.name}>
                <img src={coach.image.replace("/images", "/img")} alt={coach.name} />
                <div className="inner">
                  <div className="info">
                    <h5>{coach.name}</h5>
                    <p>{coach.role}</p>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
