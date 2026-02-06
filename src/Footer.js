import React from "react";
import "./App.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="carvo-footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <div className="logo-container">
            <div className="navbar-logo">
              <span className="logo-highlight">CARVO</span>CARZ
            </div>
          </div>
          <p className="footer-desc">
            Carvocarz brings you detailed information about all car brands, models, and reviews. Explore the world of performance, luxury, and style.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/brands">Brands</a></li>
            <li><a href="/cars">Cars</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to get the latest car news and updates!</p>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/"><FaFacebookF /></a>
            <a href="https://x.com/"><FaTwitter /></a>
            <a href="https://www.instagram.com/"><FaInstagram /></a>
            <a href="https://www.linkedin.com/"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Carvocarz. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
