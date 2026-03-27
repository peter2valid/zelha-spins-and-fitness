export function SiteFooter() {
  return (
    <footer>
      <div className="main-content">
        <div className="left box">
          <h2>About us</h2>
          <div className="content">
            <p>
              Zelha Spin & Fitness is a high-energy, customer-focused gym in Juja, Kenya. We help
              students and professionals train consistently through coached classes and community support.
            </p>
            <div className="footsocial">
              <a href="#" aria-label="Facebook">
                <span className="fa fa-facebook-f"></span>
              </a>
              <a href="#" aria-label="Instagram">
                <span className="fa fa-instagram"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="center box">
          <h2>Address</h2>
          <div className="Footercontent">
            <div className="place">
              <span className="fas fa-map-marker-alt"></span>
              <span className="text">Juja, Kenya</span>
            </div>
            <div className="phone">
              <span className="fas fa-phone-alt"></span>
              <span className="text">0110 719277 / 0726 061454 / 0725 512877</span>
            </div>
            <div className="email">
              <span className="fas fa-envelope"></span>
              <span className="text">info@zelhaspinfitness.co.ke</span>
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
          <span className="credit">Zelha Spin & Fitness | </span>
          <span className="far fa-copyright"></span>
          <span> {new Date().getFullYear()} All rights reserved.</span>
        </center>
      </div>
    </footer>
  );
}
