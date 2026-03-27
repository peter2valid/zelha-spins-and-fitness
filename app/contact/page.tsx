import { SiteHeader } from "@/components/legacy/SiteHeader";
import { SiteFooter } from "@/components/legacy/SiteFooter";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/siteContent";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Zelha Spin & Fitness in Juja, Kenya for gym membership, spinning classes, and personal training near Equity Afya.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      <section className="contact-section">
        <div className="contact-bg">
          <h3>Get in Touch with Us</h3>
          <h2>Contact Zelha Spin & Fitness</h2>
          <p className="text">
            Reach our team in {siteConfig.location}, {siteConfig.landmark}, for membership and class support.
          </p>
        </div>

        <div className="contact-body">
          <div className="contact-info">
            <div>
              <span>
                <i className="fas fa-mobile-alt"></i>
              </span>
              <span>Phone No.</span>
              <span className="text">0110 719277 / 0726 061454 / 0725 512877</span>
            </div>
            <div>
              <span>
                <i className="fas fa-envelope-open"></i>
              </span>
              <span>E-mail</span>
              <span className="text">info@zelhaspinfitness.co.ke</span>
            </div>
            <div>
              <span>
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <span>Address</span>
              <span className="text">Juja, Kenya - next to Equity Afya</span>
            </div>
            <div>
              <span>
                <i className="fas fa-clock"></i>
              </span>
              <span>Opening Hours</span>
              <span className="text">Weekdays 5:15 AM - 9:45 PM</span>
            </div>
          </div>

          <div className="contact-form">
            <form>
              <div>
                <input type="text" className="form-control" placeholder="First Name" />
                <input type="text" className="form-control" placeholder="Last Name" />
              </div>
              <div>
                <input type="email" className="form-control" placeholder="E-mail" />
                <input type="text" className="form-control" placeholder="Phone" />
              </div>
              <textarea rows={5} placeholder="Message" className="form-control"></textarea>
              <input type="submit" className="send-btn" value="send message" />
            </form>

            <div>
              <img src="/img/Contact-us.svg" alt="Contact Zelha" />
            </div>
          </div>

          <div className="map">
            <iframe
              title="Zelha Spin and Fitness location near Equity Afya Juja"
              src="https://www.google.com/maps?q=Equity%20Afya%20Juja&output=embed"
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
