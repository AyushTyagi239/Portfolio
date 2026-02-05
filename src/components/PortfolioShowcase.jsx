import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCaseData } from "../data/useCaseData";
import { useNavigate } from "react-router-dom";
import LogoLoop from "./LogoLoop";
import "./PortfolioShowcase.css";

import "./main.css";

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Tech stack / tools (personal, not partners)
const techStack = [
  { node: <span className="text-2xl font-bold text-white">React</span> },
  { node: <span className="text-2xl font-bold text-white">Next.js</span> },
  { node: <span className="text-2xl font-bold text-white">Node.js</span> },
  { node: <span className="text-2xl font-bold text-white">OpenAI</span> },
  { node: <span className="text-2xl font-bold text-white">Unity</span> },
  { node: <span className="text-2xl font-bold text-white">MongoDB</span> },
  ,
];

const PortfolioShowcase = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const initialItems = useCaseData.slice(0, 4);
  const displayedItems = showAll ? useCaseData : initialItems;

  const handleViewMore = () => setShowAll(!showAll);

  const handleCardClick = (link) => {
    window.scrollTo(0, 0);
    navigate(link);
  };

  return (
    <>
      {/* Portfolio Section */}
      <section className="use-cases py-20 px-6 md:px-10 bg-transparent border-t border-gray-800">
        <motion.h2
          className="section-title text-center text-4xl md:text-5xl font-bold text-white mb-14"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ Se: true }}
        >
          My Work & <span className="italic-part">Expertise</span>
        </motion.h2>

        <div className="use-cases-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {displayedItems.map((item, index) => (
            <PortfolioCard
              key={item.id}
              item={item}
              index={index}
              onClick={handleCardClick}
            />
          ))}
        </div>

        <div className="view-more-container flex justify-center mt-12">
          <button
            className={`view-more-button ${
              showAll ? "expanded" : ""
            } flex items-center justify-center`}
            onClick={handleViewMore}
            aria-label={showAll ? "Show less" : "Show more"}
          >
            <motion.span
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="arrow-icon w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </motion.span>
          </button>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-6 md:px-10 bg-transparent">
        <motion.h3
          className="text-center text-2xl md:text-3xl font-semibold text-white mb-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Tech Stack & Tools
        </motion.h3>

        <div style={{ height: "120px", position: "relative", overflow: "hidden" }}>
          <LogoLoop
            logos={techStack}
            speed={90}
            direction="left"
            logoHeight={60}
            gap={80}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Tech stack and tools"
            useCustomRender={false}
          />
        </div>
      </section>
    </>
  );
};

const PortfolioCard = ({ item, index, onClick }) => {
  return (
    <motion.div
      className="use-case-item cursor-pointer"
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
      onClick={() => onClick(item.readMoreLink)}
    >
      <div
        className="use-case-header"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        {/* ✅ TITLE — ALWAYS VISIBLE */}
        <div className="use-case-title-bar">
          <h3 className="use-case-title">{item.title}</h3>
        </div>

        {/* 🔥 HOVER OVERLAY — DESCRIPTION ONLY */}
        <div className="use-case-overlay">
          <p className="use-case-description">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};



export default PortfolioShowcase;
