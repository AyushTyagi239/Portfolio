import React from "react";
import './Footer.css'
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import logo from "../assets/IntensityLogoMonowhite.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <img src={logo} alt="Intensity Logo" className="footer-logo" />
          
          <p className="footer-description">
            We are pioneers for comprehensive IT solutions driving innovation
            with intelligent technology and accelerating business
            transformations. We wish to create seamless and efficient technology
            solutions for you.
          </p>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h3 className="footer-heading">CONNECT WITH US</h3>
          <p className="footer-address">
            <FaMapMarkerAlt className="footer-icon" />
            A-21, FIEE Complex, Okhla Phase 2, New Delhi - 110020
          </p>
          <a 
            href="mailto:info@igtpl.co.in" 
            className="footer-email"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaEnvelope className="footer-icon" /> info@igtpl.co.in
          </a>
          <a 
            href="tel:+919717010199" 
            className="footer-phone"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaPhone className="footer-icon" /> +91-9717010199
          </a>
          <div className="footer-socials">
            <a 
              href="https://www.facebook.com/igtpl/" 
              aria-label="Facebook"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a 
              href="https://x.com/igtpl?lang=en" 
              aria-label="Twitter"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a 
              href="https://www.linkedin.com/company/intensityglobal" 
              aria-label="LinkedIn"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="footer-bottom">
        <p>Intensity Global Technologies Ltd.</p>
        <p>(Formerly known as Intensity Global Technologies Private Limited)</p>
      </div>
    </footer>
  );
};

export default Footer;