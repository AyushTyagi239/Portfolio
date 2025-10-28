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
          <p className="footer-email">
            <FaEnvelope className="footer-icon" /> info@igtpl.co.in
          </p>
          <p className="footer-phone">
            <FaPhone className="footer-icon" /> +91-9717010199
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn">
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
