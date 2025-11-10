import React, { useState, useEffect } from 'react';
import './Header.css';
import leftLogo from '../assets/Super_Ai.png';
import rightLogo from '../assets/IntensityLogoMonowhite.png';
import StaggeredMenu from './StaggeredMenu';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    {
      label: 'Industries',
      children: [
        { label: 'Manufacturing', link: '/industry/manufacturing' },
        { label: 'Healthcare', link: '/industry/healthcare' },
        { label: 'BFSI', link: '/industry/bfsi' },
        { label: 'Education', link: '/industry/education' },
        { label: 'Hospitality', link: '/industry/hospitality' },
      ],
    },
    {
      label: 'Our Products',
      children: [
        { label: 'Tender Analysis', link: '/usecase/tender-analysis' },
        { label: 'SLM', link: '/usecase/neuraedge-slm' },
      ],
    },
    {
      label: 'About Us',
      link: 'https://www.igtpl.co.in/',
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      {/* Left - Home Icon */}
      <div className="header-left">
        <a href="/" className="home-button" aria-label="Go to Home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="home-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 9.75L12 3l9 6.75M4.5 10.5v9.75A1.5 1.5 0 006 21.75h12a1.5 1.5 0 001.5-1.5V10.5"
            />
          </svg>
        </a>
      </div>

      {/* Center - Both Logos */}
      <div className="header-center">
        <div className="center-logos">
          <img src={rightLogo} alt="Intensity Logo" className="header-logo" />
          <img src={leftLogo} alt="Super AI Logo" className="header-logo" />
        </div>
      </div>

      {/* Right - Menu */}
      <div className="header-right">
        <StaggeredMenu
          items={menuItems}
          onItemClick={(item) => console.log('Navigating to:', item.link)}
        />
      </div>
    </header>
  );
};

export default Header;
