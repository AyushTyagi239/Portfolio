import React from 'react';
import { websiteContent } from '../data/content';

const Footer = () => {
  return (
    <footer className="footer section-padding" style={{ padding: '40px 0' }}>
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            {websiteContent.footer.text} © {websiteContent.footer.year}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;