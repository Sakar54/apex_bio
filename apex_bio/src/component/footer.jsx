import "./Footer.css";
import logo from "../assets/Ailogo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <p>Join our newsletter to keep up to date with us!</p>
        <div className="subscribe">
          <input
            type="email"
            placeholder="Enter your email"
            className="email-input"
          />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>
      <div className="divider-line"></div>

      <div className="footer-content">
        <div className="company-info">
          <div className="logo">
            <img src={logo} alt="AI Solution" />
          </div>
          <p>We grow your business with personal AI manager.</p>
        </div>

        <div className="links">
          <div className="column">
            <h4>Solutions</h4>
            <ul>
              <li>Agricultural soluion </li>
              <li>Finance solutions </li>
              <li>Automations soluion </li>
            </ul>
          </div>
          <div className="column">
            <h4>Company</h4>
            <ul>
              <li>Blog</li>
              <li>About us </li>
              <li>Contact us </li>
            </ul>
          </div>
          <div className="column">
            <h4>Resources</h4>
            <ul>
              <li>Testimonials</li>
              <li>Photo</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 AI Solutions.</p>
        <ul className="legal">
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Cookies</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
