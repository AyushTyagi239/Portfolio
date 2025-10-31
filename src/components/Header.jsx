import React, { useState, useEffect } from 'react';
import './Header.css';
import leftLogo from '../assets/Super_Ai.png';
import rightLogo from '../assets/IntensityLogoMonowhite.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-left">
        <a href="https://www.igtpl.co.in/" target="_blank" rel="noopener noreferrer">
          <img src={rightLogo} alt="Left Logo" className="header-logo" />
        </a>
      </div>

      <div className="header-center">
        <h1 className="header-title">INTENSITY X SUPER AI</h1>
      </div>

      <div className="header-right">
        <img src={leftLogo} alt="Right Logo" className="header-logo" />
      </div>
    </header>
  );
};

export default Header;