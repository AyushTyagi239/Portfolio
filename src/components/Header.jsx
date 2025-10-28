import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/logo_intensity.png';
import logoScrolled from '../assets/IntensityLogoMonowhite.png'; // optional: different logo when scrolled

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-center">
        <a
          href="https://www.igtpl.co.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={scrolled ? logo : logo}
            alt="Intensity Global Technologies Logo"
            className="header-logo"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
