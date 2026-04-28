import Link from "next/link";
import { SiteHeader } from "@/components/legacy/SiteHeader";
import { SiteFooter } from "@/components/legacy/SiteFooter";
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
      <SiteHeader />

      <div className="main">
        <h1>Pricing</h1>
        <p>Flexible membership options built for students, professionals, and coached athletes.</p>
        <Link href="/contact" className="btn">
          Learn more
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
                  Get {plan.name}
                </Link>
              </div>
            </div>
          ))}
      </div>

      <SiteFooter />
    </>
  );
}
