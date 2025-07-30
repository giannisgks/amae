import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3 className="footer-title">Amae Preveza</h3>
          <p className="footer-tagline">
            Curating the subtle joys of Preveza - plcaces to linger, taste and feel at home.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Twitter" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="GitHub" className="social-icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:energigma@gmail.com" aria-label="Email" className="social-icon">
              <i className="far fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4 className="footer-section-title">Quick Links</h4>
          <ul>
            <li><a href="#">Booking</a></li>
            <li><a href="#">Places</a></li>
            <li><a href="/contact">Contact us</a></li>
            <li><a href="/questions">Questions</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4 className="footer-section-title">Contact</h4>
          <address>
                Preveza, Epirus, Greece<br />
            <a href="mailto:amaepreveza@gmail.com" className="footer-email">amaepreveza@gmail.com</a>
          </address>
        </div>
      </div>
      <div className="footer-copyright">
        © 2025 Amae. All rights reserved. | Built by Ioannis Giakisikloglou | Tel: 694 615 1795
      </div>
    </footer>
  );
}

export default Footer;
