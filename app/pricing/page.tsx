import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/seo";
import { membershipPlans } from "@/data/siteContent";
import "../../css/Pricing.css";

export const metadata = buildMetadata({
  title: "Membership",
  description:
    "Explore Zelha Spin & Fitness membership options and student offer in Juja. Contact us for latest class and coaching packages.",
  path: "/pricing"
});

export default function PricingPage() {
  return (
    <>
      <Header />

      <div className="main">
        <h1>Memberships & Pricing</h1>
        <p>Simple, flexible plans for students, commuters, and coached athletes — contact us for the latest offers and student discounts in Juja.</p>
        <Link href="/contact" className="btn">
          Contact us for plan details
        </Link>
      </div>

      <div className="wrapper-card">
          {membershipPlans.map((plan) => (
            <div className={`card ${plan.featured ? "popular" : ""}`} key={plan.name}>
              <div className="card-title">
                <h3>{plan.name}</h3>
                <h4>{plan.summary}</h4>
              </div>
              <div className="card-price">
                <h1>{plan.price}</h1>
              </div>
              <div className="card-description">
                <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
                </ul>
              </div>
              <div className="card-action">
                <Link href="/contact" className="card-link">
                  Contact about {plan.name}
                </Link>
              </div>
            </div>
          ))}
      </div>

      <Footer />
    </>
  );
}
