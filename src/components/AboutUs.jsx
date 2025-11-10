import React from "react";
import { motion } from "framer-motion";
import "./AboutUs.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Dark Veil Background */}
      <div className="dark-veil"></div>

      <section className="about-us">
        {/* Header Section */}
        <motion.div
          className="about-header"
          initial="hidden"
          whileInView="show"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h1 className="fancy-heading">
            Transforming Enterprise. 
            <span className="italic-part"> Powered by AI</span>
          </h1>
          {/* <p className="about-description">
            We are architects of transformation, combining cutting-edge AI with human ingenuity
            to revolutionize how enterprises operate, innovate, and thrive in the digital age.
          </p> */}
        </motion.div>

        {/* Mission, Vision, Values Cards */}
        <div className="cards-horizontal">
          {/* Mission */}
          <motion.div
            className="card-professional"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="card-header">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.05078 7.05078L8.46078 8.46078" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.5391 15.5391L16.9491 16.9491" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 12H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 12H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.05078 16.9492L8.46078 15.5392" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.5391 8.46094L16.9491 7.05094" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="card-title">OUR MISSION</h3>
            </div>
            <p className="card-content">
              To democratize AI and automation, making transformative technology accessible to
              enterprises of all sizes while maintaining the highest standards of excellence.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="card-professional"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="card-header">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="card-title">OUR VISION</h3>
            </div>
            <p className="card-content">
              To be the catalyst for global digital evolution, where every business harnesses
              the power of AI to create unprecedented value and sustainable growth.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            className="card-professional"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card-header">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="card-title">OUR VALUES</h3>
            </div>
            <p className="card-content">
              Innovation with purpose, partnerships built on trust, and an unwavering commitment
              to delivering measurable impact for every client we serve.
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="stats-section"
          initial="hidden"
          whileInView="show"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">21+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Global Clients</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Models Deployed</div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;