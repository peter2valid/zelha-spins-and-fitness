import { Facebook, Instagram, MapPin, Phone, Mail, Music2 } from "lucide-react";
import { siteConfig } from "@/data/siteContent";

export function SiteFooter() {
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

  if (siteConfig.socialLinks.tiktok) {
    socialLinks.push({
      href: siteConfig.socialLinks.tiktok,
      label: "TikTok",
      icon: Music2
    });
  }

  return (
    <footer>
      <div className="main-content">
        <div className="left box">
          <h2>{siteConfig.shortName}</h2>
          <div className="content">
            <p>
              Zelha Spin & Fitness is a high-energy, customer-focused gym in Juja, Kenya. We help
              students and professionals train consistently through coached classes and community support.
            </p>
            {socialLinks.length > 0 ? (
              <div className="footsocial">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer">
                    <Icon size={16} aria-hidden />
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>
        <div className="center box">
          <h2>Address</h2>
          <div className="Footercontent">
            <div className="place">
              <MapPin size={16} aria-hidden />
              <span className="text">Juja, Kenya</span>
            </div>
            <div className="phone">
              <Phone size={16} aria-hidden />
              <span className="text">{siteConfig.phoneNumbers.join(" / ")}</span>
            </div>
            <div className="email">
              <Mail size={16} aria-hidden />
              <span className="text">{siteConfig.email}</span>
            </div>
          </div>
        </div>
        <div className="right box">
          <h2>Contact us</h2>
          <div className="Footercontent">
            <form action="#">
              <div className="email">
                <div className="text">Email *</div>
                <input type="email" required />
              </div>
              <div className="msg">
                <div className="text">Message *</div>
                <textarea rows={2} cols={25} required></textarea>
              </div>
              <div className="buttonn">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bottom">
        <center>
          <span className="credit">{siteConfig.name} | </span>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
        </center>
      </div>
    </footer>
  );
}
