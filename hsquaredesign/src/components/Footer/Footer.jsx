import "./Footer.css";
import logoWhite from "../../assets/logo/logowhite.png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Logo */}
          <div className="footer-logo">
            <img src={logoWhite} alt="H² Design" />

            <p>
              Building premium residential, commercial and industrial spaces
              with quality, precision and innovation.
            </p>
          </div>

          {/* Footer Links */}
          <div className="footer-links">
            {/* Services */}
            <div className="footer-column">
              <h3>Services</h3>

              <a href="#services">Residential Construction</a>
              <a href="#services">Commercial Buildings</a>
              <a href="#services">Interior Renovation</a>
              <a href="#services">Project Management</a>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h3>Quick Links</h3>

              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#projects">Projects</a>
            </div>

            {/* Contact */}
            <div className="footer-column">
              <h3>Contact</h3>

              <p>
                <FaPhoneAlt />
                <span>+91 8015871882</span>
              </p>

              <p>
                <FaEnvelope />
                <span>salmanomar.nmh@gmail.com</span>
              </p>

              <p>
                <FaMapMarkerAlt />
                <span>Chennai</span>
              </p>
            </div>

            {/* Social */}
            <div className="footer-column">
              <h3>Follow Us</h3>

              <div className="social-icons">
                <a href="#">
                  <FaFacebookF />
                </a>

                <a href="#">
                  <FaInstagram />
                </a>

                <a href="#">
                  <FaLinkedinIn />
                </a>

                <a href="#">X</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 H SQUARE DESIGN. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
