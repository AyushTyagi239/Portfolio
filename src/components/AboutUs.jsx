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
          <p className="about-description">
            We are architects of transformation, combining cutting-edge AI with human ingenuity
            to revolutionize how enterprises operate, innovate, and thrive in the digital age.
          </p>
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
                {/* Target icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="card-title">
                OUR <span className="intensity">MISSION</span>
              </h3>
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
                {/* Globe / Eye icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5c4.97 0 9 3.806 9 7.5s-4.03 7.5-9 7.5-9-3.806-9-7.5 4.03-7.5 9-7.5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9a3 3 0 100 6 3 3 0 000-6z"
                  />
                </svg>
              </div>
              <h3 className="card-title">
                OUR <span className="intensity">VISION</span>
              </h3>
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
                {/* Spark / Innovation icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v3m0 12v3m9-9h-3M6 12H3m12.364 5.364l2.121 2.121M6.515 6.515L4.394 4.394m0 15.212l2.121-2.121M17.485 6.515l2.121-2.121"
                  />
                </svg>
              </div>
              <h3 className="card-title">
                OUR <span className="intensity">VALUES</span>
              </h3>
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
