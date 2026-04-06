import { SiteHeader } from "@/components/legacy/SiteHeader";
import { SiteFooter } from "@/components/legacy/SiteFooter";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/siteContent";
import { ContactForm } from "./ContactForm";
import "../../css/Contact.css";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Zelha Spin and Fitness Gym at Kalimoni Highway View Plaza, Juja, Kenya. Call 0702836266 or email zelhafitness@gmail.com for memberships and class bookings.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      <section className="contact-section">
        <div className="contact-bg">
          <h3>Get in Touch with Us</h3>
          <h2>Contact Zelha Spin &amp; Fitness</h2>
          <p className="text">
            Reach our team at {siteConfig.landmark} for memberships, class bookings, and inquiries.
          </p>
        </div>

        <div className="contact-body">
          <div className="contact-info">
            <div>
              <span>
                <i className="fas fa-mobile-alt" aria-hidden="true"></i>
              </span>
              <span>Phone No.</span>
              <span className="text">{siteConfig.phoneNumbers.join(" / ")}</span>
            </div>
            <div>
              <span>
                <i className="fas fa-envelope-open" aria-hidden="true"></i>
              </span>
              <span>E-mail</span>
              <span className="text">{siteConfig.email}</span>
            </div>
            <div>
              <span>
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              </span>
              <span>Address</span>
              <span className="text">{siteConfig.landmark}</span>
            </div>
            <div>
              <span>
                <i className="fas fa-clock" aria-hidden="true"></i>
              </span>
              <span>WhatsApp</span>
              <span className="text">{siteConfig.whatsapp}</span>
            </div>
          </div>

          <div className="contact-form">
            <ContactForm />

            <div>
              <img src="/img/Contact-us.svg" alt="Contact Zelha" />
            </div>
          </div>

          <div className="map">
            <iframe
              title="Zelha Spin and Fitness Gym - Kalimoni Highway View Plaza Juja"
              src="https://www.google.com/maps?q=Kalimoni+Highway+View+Plaza+Juja+Kenya&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
