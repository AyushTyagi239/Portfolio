import React, { useState, useEffect } from 'react';
import './Header.css';
import leftLogo from '../assets/Super_Ai.png';
import rightLogo from '../assets/IntensityLogoMonowhite.png';
import StaggeredMenu from './StaggeredMenu';

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
          <img src={rightLogo} alt="Intensity Logo" className="header-logo" />
        </a>
        <img src={leftLogo} alt="Super AI Logo" className="header-logo" />
      </div>

      <div className="header-center">
        <h1 className="header-title">INTENSITY X SUPER AI</h1>
      </div>

      <div className="header-right">
        <StaggeredMenu items={[
          { label: "Home", link: "/" },
          { label: "Tender Analyst", link: "/usecase/tender-analysis" },
          { label: "SLM", link: "/usecase/neuraedge-slm" },
        ]}/>
      </div>
    </header>
  );
};

export default Header;