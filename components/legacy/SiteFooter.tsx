import { siteConfig } from "@/data/siteContent";

export function SiteFooter() {
  return (
    <footer>
      <div className="main-content">
        <div className="left box">
          <h2>About us</h2>
          <div className="content">
            <p>{siteConfig.description}</p>
            <div className="footsocial">
              <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <span className="fa fa-facebook-f" aria-hidden="true"></span>
              </a>
              <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <span className="fa fa-instagram" aria-hidden="true"></span>
              </a>
              <a href={siteConfig.socialLinks.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <span className="fa fa-music" aria-hidden="true"></span>
              </a>
              <a href={`https://wa.me/254${siteConfig.whatsapp.replace(/^0/, "")}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <span className="fa fa-whatsapp" aria-hidden="true"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="center box">
          <h2>Address</h2>
          <div className="Footercontent">
            <div className="place">
              <span className="fas fa-map-marker-alt" aria-hidden="true"></span>
              <span className="text">{siteConfig.landmark}</span>
            </div>
            <div className="phone">
              <span className="fas fa-phone-alt" aria-hidden="true"></span>
              <span className="text">{siteConfig.phoneNumbers.join(" / ")}</span>
            </div>
            <div className="email">
              <span className="fas fa-envelope" aria-hidden="true"></span>
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
          <span className="far fa-copyright" aria-hidden="true"></span>
          <span> {new Date().getFullYear()} All rights reserved.</span>
        </center>
      </div>
    </footer>
  );
}
