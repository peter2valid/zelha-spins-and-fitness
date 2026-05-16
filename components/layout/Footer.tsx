import Link from "next/link";
import { Clock3, Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteContent";

export function Footer() {
  const socialLinks: Array<{
    href: string;
    label: string;
    icon: typeof Instagram;
  }> = [];

  if (siteConfig.socialLinks.instagram) {
    socialLinks.push({
      href: siteConfig.socialLinks.instagram,
      label: "Instagram",
      icon: Instagram
    });
  }

  if (siteConfig.socialLinks.facebook) {
    socialLinks.push({
      href: siteConfig.socialLinks.facebook,
      label: "Facebook",
      icon: Facebook
    });
  }

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section>
          <h3>{siteConfig.name}</h3>
          <p>
            High-energy gym in Juja, Kenya, known for spinning, strength, dance fitness, and
            personalized coaching.
          </p>
          {socialLinks.length > 0 ? (
            <div className="footer-social">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          ) : null}
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
