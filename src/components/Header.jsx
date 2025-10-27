import React, { useState, useEffect } from 'react';
import { websiteContent } from '../data/content';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0' }}>
        <div className="logo-container">
          <div className="logo">I</div>
          <h1 className="company-name">{websiteContent.header.companyName}</h1>
          {/* <h1 className="text-green-500">{websiteContent.header.companyName}</h1>
          <h2 className='bg-red-500'> testing </h2> */}
        </div>
      </div>
    </header>
  );
};

export default Header;