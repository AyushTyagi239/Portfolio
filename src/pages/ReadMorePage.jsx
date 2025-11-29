import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Play, ArrowRight, ExternalLink } from "lucide-react";
import VideoPlayer from "../components/VideoPlayer";   
import "./readmorepage.css";

const ReadMorePage = ({ data, liveLink }) => {
  const { title, intro, video, advantages, image, demoLink } = data;
  const [showAllAdvantages, setShowAllAdvantages] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const displayedAdvantages = showAllAdvantages ? advantages : advantages.slice(0, 4);

  const toggleAdvantages = useCallback(() => {
    setShowAllAdvantages(prev => !prev);
  }, []);

  return (
    <div className="readmore-page">

      {/* HERO SECTION */}
      <section className="readmore-hero">
        <div className="readmore-container">
          
          <motion.h1 
            className="readmore-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h1>

          {liveLink !== "false" && (
            <motion.div 
              className="hero-button-wrapper"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.a 
                href={demoLink} 
                className="demo-button primary"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="icon-sm" />
                Live Demo
                <ExternalLink className="icon-sm" />
              </motion.a>
            </motion.div>
          )}

          <div className="content-wrapper">
            <div className="content-side">
              
              <motion.p 
                className="readmore-description whitespace-preserve" 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {intro}
              </motion.p>

              {/* <div className="features-list">
                {advantages.slice(0, 3).map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="feature-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                  >
                    <div className="feature-dot"></div>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div> */}

            </div>

            <div className="image-side">
              <motion.div
                className="sticky-image"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="image-wrapper">
                  <img 
                    src={image} 
                    alt={title} 
                    className="readmore-image"
                    loading="eager"
                  />
                  <div className="floating-badge">
                    <Sparkles className="icon-sm" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION — NEW COMPONENT */}
      {video && (
        <VideoPlayer
          title={video.title}
          videoUrl={video.videoUrl}
          thumbnail={video.thumbnail}
        />
      )}

      {/* ADVANTAGES */}
      <section className="advantages-section">
        <div className="readmore-container">

          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Advantages</h2>
            <p>Key benefits of using our solution</p>
          </motion.div>

          <div className="advantages-grid">
            {displayedAdvantages.map((point, idx) => (
              <motion.div
                key={idx}
                className="advantage-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="advantage-content">
                  <div className="advantage-icon">
                    <CheckCircle2 className="icon-md" />
                  </div>
                  <p>{point}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {advantages.length > 4 && (
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.button
                onClick={toggleAdvantages}
                className="view-more-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {showAllAdvantages ? "Show Less" : "View More Advantages"}
                <motion.span
                  animate={{ rotate: showAllAdvantages ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="icon-sm" />
                </motion.span>
              </motion.button>
            </motion.div>
          )}

        </div>
      </section>

    </div>
  );
};

export default React.memo(ReadMorePage);
