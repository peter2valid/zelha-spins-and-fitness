import Link from "next/link";
import { Clock3, Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteContent";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section>
          <h3>{siteConfig.name}</h3>
          <p>
            High-energy gym in Juja, Kenya, known for spinning, strength, dance fitness, and
            personalized coaching.
          </p>
          <div className="footer-social">
            <a href={siteConfig.socialLinks.instagram} aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href={siteConfig.socialLinks.facebook} aria-label="Facebook">
              <Facebook size={18} />
            </a>
          </div>
        </section>

        <section>
          <h3>Find Us</h3>
          <p>
            <MapPin size={16} /> {siteConfig.location}
          </p>
          <p>{siteConfig.landmark}</p>
          <p>
            <Clock3 size={16} /> Weekdays 5:15 AM - 9:45 PM
          </p>
        </section>

        <section>
          <h3>Call Us</h3>
          {siteConfig.phoneNumbers.map((phone) => (
            <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`}>
              <Phone size={16} /> {phone}
            </a>
          ))}
          <Link className="footer-cta" href="/contact">
            Book a Visit
          </Link>
        </section>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
