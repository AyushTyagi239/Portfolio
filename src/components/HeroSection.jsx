import React from 'react';
import { motion } from 'framer-motion';
import { websiteContent } from '../data/content';

const HeroSection = () => {
  return (
    <section className="hero section-padding" style={{ marginTop: '73px' }}>
      <div className="container">
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {websiteContent.hero.title}
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {websiteContent.hero.subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;