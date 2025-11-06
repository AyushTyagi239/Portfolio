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
      {
        label: 'Manufacturing',
        link: '/industry/manufacturing',
        ariaLabel: 'Manufacturing Industry Solutions'
      },
      {
        label: 'Healthcare',
        link: '/industry/healthcare', 
        ariaLabel: 'Healthcare Industry Solutions'
      },
      {
        label: 'BFSI',
        link: '/industry/bfsi',
        ariaLabel: 'Banking Financial Services Insurance Solutions'
      },
      {
        label: 'Education',
        link: '/industry/education',
        ariaLabel: 'Education Industry Solutions'
      },
      {
        label: 'Hospitality',
        link: '/industry/hospitality',
        ariaLabel: 'Hospitality Industry Solutions'
      }
    ]
  },
  {
    label: 'Our Products',
    children: [
      {
        label: 'Tender Analysis',
        link: '/usecase/tender-analysis',
        ariaLabel: 'Tender Analysis Product'
      },
      {
        label: 'SLM',
        link: '/usecase/neuraedge-slm',
        ariaLabel: 'SLM Product'
      }
    ]
  },
  {
    label: 'About Us',
    link: 'https://www.igtpl.co.in/',
    ariaLabel: 'About our company'
  },
//  {
//   label:'Home'
//   link:'/home',
//   ariaLabel: 'Home page'
//  },
{
    label: 'home',
    link: '/',
    ariaLabel: ''
  },
];

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
  <h1 className="header-title">INTENSITY X <span>SUPER AI</span></h1>
</div>


      <div className="header-right">
        <StaggeredMenu items={menuItems}
        onItemClick={(item) => {
    // Handle navigation when items are clicked
    console.log('Navigating to:', item.link);
  }}/>
      </div>
    </header>
  );
};

export default Header;