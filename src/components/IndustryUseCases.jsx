import React, { useState } from 'react';
import { useCaseData } from '../data/useCaseData';
import './IndustryUseCases.css';

const IndustryUseCases = () => {
  const [showAll, setShowAll] = useState(false);

  // Initial 4 items
  const initialItems = useCaseData.slice(0, 4);
  const displayedItems = showAll ? useCaseData : initialItems;

  const handleViewMore = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="use-cases">
      <h2 className="section-title">Industry Wise Use Cases</h2>
      
      {/* Grid Layout for both states */}
      <div className="use-cases-grid">
        {/* First row */}
        <div className="grid-row">
          {displayedItems.slice(0, 2).map((item) => (
            <UseCaseCard key={item.id} item={item} />
          ))}
        </div>
        
        {/* Second row */}
        <div className="grid-row">
          {displayedItems.slice(2, 4).map((item) => (
            <UseCaseCard key={item.id} item={item} />
          ))}
        </div>

        {/* Additional rows only when showAll is true */}
        {showAll && displayedItems.length > 4 && (
          <>
            <div className="grid-row">
              {displayedItems.slice(4, 6).map((item) => (
                <UseCaseCard key={item.id} item={item} />
              ))}
            </div>
            <div className="grid-row">
              {displayedItems.slice(6, 8).map((item) => (
                <UseCaseCard key={item.id} item={item} />
              ))}
            </div>
          </>
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
const UseCaseCard = ({ item }) => {
  return (
    <div className="use-case-item">
      <div 
        className="use-case-header"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <div className="title-glass-container">
          <h3 className="use-case-title">{item.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default IndustryUseCases;