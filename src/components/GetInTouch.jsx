import React from 'react';
import { motion } from 'framer-motion';
import { websiteContent } from '../data/content';
import './GetInTouch.css';
import BlurText from './BlurText';

const GetInTouch = () => {
  return (
    <section className="get-in-touch-section">
      <div className="container">
        <motion.div
          className="get-in-touch-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Text Content Section */}
          <motion.div
            className="get-in-touch-text-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h1
              className="get-in-touch-title"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <BlurText text={"Get in Touch Today!"}/>
            </motion.h1>
            
            <motion.div
              className="get-in-touch-description"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p>
                Have a question, project idea, or looking for more information about our services? 
                Our team is ready to assist you. Fill out the form below, and we'll get back to you promptly.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="contact-info-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 13L2 6" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <h3>Customer Support:</h3>
                  <a href="mailto:info@igtpl.co.in" className="contact-email">
                    info@igtpl.co.in
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            {/* <motion.div
              className="contact-form-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              <form className="contact-form">
                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    placeholder="Your Message"
                    rows="5"
                    className="form-textarea"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="submit-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div> */}
          </motion.div>

          {/* Visual Section */}
          <motion.div
            className="get-in-touch-visual-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="visual-container">
              <motion.div
                className="floating-element element-1"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="floating-element element-2"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <motion.div
                className="floating-element element-3"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <div className="ai-network-pattern"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInTouch;