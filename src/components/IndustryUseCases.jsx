import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCaseData } from '../data/useCaseData';
import { useNavigate } from 'react-router-dom';
import './IndustryUseCases.css';

const IndustryUseCases = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  // Initial 4 items
  const initialItems = useCaseData.slice(0, 4);
  const displayedItems = showAll ? useCaseData : initialItems;

  const handleViewMore = () => {
    setShowAll(!showAll);
  };

  // Navigation handler for industry click
  const handleIndustryClick = (industryId) => {
    switch (industryId) {
      case 1:
        navigate('/industry/manufacturing');
        break;
      case 2:
        navigate('/industry/healthcare');
        break;
      case 3:
        navigate('/industry/bfsi');
        break;
      case 4:
        navigate('/industry/education');
        break;
      case 5:
        navigate('/industry/hospitality');
        break;
      default:
        navigate('/');
        break;
    }
  };

  return (
    <section className="use-cases">
      <h2 className="section-title">Industry Wise Use Cases</h2>
      
      {/* Grid Layout for both states */}
      <div className="use-cases-grid">
        {/* First row */}
        <div className="grid-row">
          {displayedItems.slice(0, 2).map((item, index) => (
            <UseCaseCard 
              key={item.id} 
              item={item} 
              index={index}
              onIndustryClick={handleIndustryClick}
            />
          ))}
        </div>
        
        {/* Second row */}
        <div className="grid-row">
          {displayedItems.slice(2, 4).map((item, index) => (
            <UseCaseCard 
              key={item.id} 
              item={item} 
              index={index + 2}
              onIndustryClick={handleIndustryClick}
            />
          ))}
        </div>

        {/* Additional rows only when showAll is true */}
        {showAll && displayedItems.length > 4 && (
          <div className="grid-row">
            {displayedItems.slice(4, 5).map((item, index) => (
              <UseCaseCard 
                key={item.id} 
                item={item} 
                index={index + 4}
                onIndustryClick={handleIndustryClick}
              />
            ))}
          </div>
        )}
      </div>

      {/* Round View More Button with Arrow */}
      <div className="view-more-container">
        <button 
          className={`view-more-button ${showAll ? 'expanded' : ''}`}
          onClick={handleViewMore}
          aria-label={showAll ? 'Show less industries' : 'Show more industries'}
        >
          <span className="arrow-icon">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

// Individual Use Case Card Component
const UseCaseCard = ({ item, index, onIndustryClick }) => {
  const handleClick = () => {
    onIndustryClick(item.id);
  };

  return (
    <motion.div
      className="use-case-item"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      onClick={handleClick}
    >
      <div 
        className="use-case-header"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <div className="title-glass-container">
          <h3 className="use-case-title">{item.title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default IndustryUseCases;