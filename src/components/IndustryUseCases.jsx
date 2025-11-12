import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCaseData } from "../data/useCaseData";
import { useNavigate } from "react-router-dom";
import "./IndustryUseCases.css";

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const IndustryUseCases = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const initialItems = useCaseData.slice(0, 4);
  const displayedItems = showAll ? useCaseData : initialItems;

  const handleViewMore = () => setShowAll(!showAll);

  const handleIndustryClick = (industryId) => {
    window.scrollTo(0, 0);
    switch (industryId) {
      case 1:
        navigate("/industry/manufacturing");
        break;
      case 2:
        navigate("/industry/healthcare");
        break;
      case 3:
        navigate("/industry/bfsi");
        break;
      case 4:
        navigate("/industry/education");
        break;
      case 5:
        navigate("/industry/hospitality");
        break;
      default:
        navigate("/");
        break;
    }
  };

  return (
    <>
      {/* Header Section */}
     
      {/* Industry Use Cases Section */}
      <section className="use-cases py-20 px-6 md:px-10 bg-transparent border-t border-gray-800">
        <h2 className="section-title text-center text-4xl md:text-5xl font-bold text-white mb-14">
          Industry Solutions  <h1 className="fancy-heading">
         
          <span className="italic-part"> Powered by AI</span>
        </h1>
        </h2>

        <div className="use-cases-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {displayedItems.map((item, index) => (
            <UseCaseCard
              key={item.id}
              item={item}
              index={index}
              onIndustryClick={handleIndustryClick}
            />
          ))}
        </div>

        <div className="view-more-container flex justify-center mt-12">
          <button
            className={`view-more-button ${
              showAll ? "expanded" : ""
            } flex items-center justify-center`}
            onClick={handleViewMore}
            aria-label={showAll ? "Show less industries" : "Show more industries"}
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
    </>
  );
};

const UseCaseCard = ({ item, index, onIndustryClick }) => {
  const handleClick = () => onIndustryClick(item.id);

  return (
    <motion.div
      className="use-case-item bg-[#1e293b] border border-gray-700 rounded-2xl p-6 w-full max-w-[270px] text-center cursor-pointer hover:text-white transition-all duration-300"
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        borderColor: "#3b82f6",
        boxShadow: "0 0 20px rgba(96,165,250,0.25)",
      }}
      onClick={handleClick}
    >
      <div
        className="use-case-header bg-cover bg-center rounded-xl mb-4 h-36 flex items-end justify-center overflow-hidden"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <div className="w-full bg-black/50 py-2">
          <h3 className="text-lg font-semibold text-white px-3 truncate">
            {item.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default IndustryUseCases;