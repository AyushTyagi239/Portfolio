import React from 'react';
import { motion } from 'framer-motion';
import { websiteContent } from '../data/content';
import './AboutUs.css'
import BlurText from './BlurText';
import AboutUsImage from '../assets/AboutUs.png';
import GetInTouchImage from '../assets/GetInTouch.png';

const AboutUs = () => {
  // Single image path for the big bubble
  const bubbleImage = GetInTouchImage; // Image path is now set

  return (
    <section className="about-us-section">
      <div className="container">
        <motion.div
          className="about-us-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Text Content Section */}
          <motion.div
            className="about-text-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h1
              className="about-title"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <BlurText text={"AI & INTENSITY"}/>
            </motion.h1>
            
            <motion.div
              className="about-description"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p>
                At Intensity Global Technologies, our expertise in AI is built on innovation, 
                trust, and an unwavering commitment to excellence. We are proud to showcase 
                our journey in developing cutting-edge AI solutions that have transformed 
                businesses across various industries.
              </p>
              
              <p>
                Since beginning our AI journey, we have continued to deepen our expertise 
                and deliver transformative AI solutions that empower businesses across 
                manufacturing, healthcare, BFSI, retail, and education. Our commitment to 
                AI innovation ensures that our clients gain access to cutting-edge services, 
                industry best practices, and a partner who understands how to leverage 
                artificial intelligence to accelerate digital transformation with confidence.
              </p>
            </motion.div>

            <motion.div
              className="cta-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="about-image-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="image-container">
              {/* Single big floating bubble */}
              <motion.div
                className="floating-element"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  backgroundImage: `url(${bubbleImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div className="ai-network-pattern"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;