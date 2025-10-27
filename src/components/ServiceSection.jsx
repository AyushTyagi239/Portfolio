import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { websiteContent } from '../data/content';

const ServicesSection = () => {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const serviceIcons = ['🛡️', '⚙️', '🖥️', '🌐', '📊', '☁️', '🤖'];

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) return;

    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const autoScroll = setInterval(() => {
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 10) {
        // Reached the end, scroll back to start
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Scroll right
        scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(autoScroll);
  }, [isPaused]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="services section-padding">
      <div className="container">
        <h2 className="section-title">I</h2>
        
        <div style={{ position: 'relative' }}>
          {/* Scroll buttons */}
          <button className="services-scroll-indicator services-scroll-left" onClick={scrollLeft}>
            ‹
          </button>
          <button className="services-scroll-indicator services-scroll-right" onClick={scrollRight}>
            ›
          </button>

          {/* Horizontal scroll container */}
          <div 
            className="services-container"
            ref={scrollContainerRef}
            onMouseEnter={() => setIsPaused(true)} // Pause on hover
            onMouseLeave={() => setIsPaused(false)} // Resume when not hovering
          >
            {websiteContent.services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="service-icon">{serviceIcons[index]}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Auto-scroll status */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '1rem',
          color: '#6b7280',
          fontSize: '0.9rem'
        }}>
          {/* {isPaused ? '⏸️ Auto-scroll paused' : '▶️ Auto-scrolling...'} • ← Scroll horizontally → */}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;