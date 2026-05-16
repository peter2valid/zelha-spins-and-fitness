import { SiteHeader } from "@/components/legacy/SiteHeader";
import { SiteFooter } from "@/components/legacy/SiteFooter";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/siteContent";
import { ContactForm } from "./ContactForm";
import { Mail, MapPin, PhoneCall, MessageCircleMore } from "lucide-react";
import "../../css/Contact.css";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Zelha Spin & Fitness in Juja for memberships, class bookings, coaching, and WhatsApp support.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How do I join Zelha Spin & Fitness?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Contact us via WhatsApp or the contact form to book a trial class or to arrange membership signup."
                }
              },
              {
                "@type": "Question",
                name: "Do you offer student discounts?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes — we offer student pricing and flexible plans. Message us on WhatsApp or contact the front desk for eligibility and current offers."
                }
              },
              {
                "@type": "Question",
                name: "Where are you located?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We are at Kalimoni Highway View Plaza, Juja — see the contact page map for directions."
                }
              }
            ]
          })
        }}
      />

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
            <div className="contact-info__item">
              <span className="contact-info__icon" aria-hidden="true">
                <PhoneCall size={26} />
              </span>
              <span>Phone No.</span>
              <span className="text">{siteConfig.phoneNumbers.join(" / ")}</span>
            </div>
            <div className="contact-info__item">
              <span className="contact-info__icon" aria-hidden="true">
                <Mail size={26} />
              </span>
              <span>E-mail</span>
              <span className="text">{siteConfig.email}</span>
            </div>
            <div className="contact-info__item">
              <span className="contact-info__icon" aria-hidden="true">
                <MapPin size={26} />
              </span>
              <span>Address</span>
              <span className="text">{siteConfig.landmark}</span>
            </div>
            <div className="contact-info__item">
              <span className="contact-info__icon" aria-hidden="true">
                <MessageCircleMore size={26} />
              </span>
              <span>WhatsApp</span>
              <a className="text contact-info__link" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
                {siteConfig.whatsapp}
              </a>
            </div>
          </div>

          <div className="contact-form">
            <ContactForm />

            <div>
              <img src="/images/about-gym.png" alt="Contact Zelha" />
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

