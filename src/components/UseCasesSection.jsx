import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { websiteContent } from '../data/content';
import { useNavigate } from 'react-router-dom';
import './UseCasesSection.css';
import "./main.css";

// Import background images
import chatbotBg from '../assets/Industry/techs/Ai_in_vision.webp';
import tenderBg from '../assets/Industry/techs/Ai_in_vision.webp';
import neuraedgeBg from '../assets/Industry/techs/Ai_in_vision.webp';
// Remove defaultBg since it's not imported, or uncomment and import it

const UseCasesSection = () => {
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();

  // Background images mapping - FIXED: Remove defaultBg or import it
  const backgroundImages = {
    1: chatbotBg,
    2: tenderBg,
    3: neuraedgeBg,
    // default: defaultBg // Remove this line or import defaultBg
  };

  // ✅ Filter out "Super AI Edu Bot"
  const filteredUseCases = websiteContent.useCases.filter(
    (useCase) => useCase.title.toLowerCase() !== 'super ai edu bot'
  );

  // ✅ Scroll Handlers
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  // ✅ Navigation for "Read More"
  const handleReadMore = (useCaseId) => {
    switch (useCaseId) {
      case 1:
        navigate('/usecase/chatbot');
        break;
      case 2:
        navigate('/usecase/tender-analysis');
        break;
      case 3:
        navigate('/usecase/neuraedge-slm');
        break;
      default:
        navigate('/');
        break;
    }
  };

  const isVisionUseCase = (useCase) => {
  const visionKeywords = ['vision', 'anpr', 'ppe', 'object', 'camera'];
  return visionKeywords.some(keyword =>
    useCase.title.toLowerCase().includes(keyword)
  );
};

const handleVisionNavigation = () => {
  navigate('/manufacturing/vision-ai');
};


  return (
    <section className="use-cases section-padding">
      <div className="container">
        <h2 className="section-title">Innovate. Automate. Accelerate. Intensely</h2>

        <div style={{ position: 'relative' }}>
          {/* Scroll Buttons */}
          <button className="scroll-indicator scroll-left" onClick={scrollLeft}>
            ‹
          </button>
          <button className="scroll-indicator scroll-right" onClick={scrollRight}>
            ›
          </button>

          {/* Horizontal Scroll Container */}
          <div className="use-cases-container" ref={scrollContainerRef}>
            {filteredUseCases.map((useCase, index) => (
              <motion.div
  key={useCase.id}
  className={`use-case-item ${
    isVisionUseCase(useCase) ? 'vision-clickable' : ''
  }`}
  onClick={() => {
    if (isVisionUseCase(useCase)) {
      handleVisionNavigation();
    }
  }}
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.3, delay: index * 0.1 }}
  viewport={{ once: true }}
>
  {/* ===== CARD HEADER WITH BACKGROUND IMAGE ===== */}
  <div
    className="use-case-header"
    onClick={() => {
      if (isVisionUseCase(useCase)) {
        handleVisionNavigation();
      }
    }}
    style={{
      backgroundImage: `url(${backgroundImages[useCase.id]})`
    }}
  >
    {/* Glass Blur Overlay */}
    <div className="glass-overlay"></div>

    {/* Title Container with Glass Effect */}
    <div className="title-glass-container">
      <h3 className="use-case-title">{useCase.title}</h3>
    </div>
  </div>

  {/* ===== CARD CONTENT ===== */}
  <div className="use-case-content">
    <p className="use-case-description">{useCase.description}</p>

    {/* ===== BUTTONS ===== */}
    <div className="use-case-buttons">
      {useCase.demoLink && !isVisionUseCase(useCase) && (
        <a
          href={useCase.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="demo-button"
          onClick={(e) => e.stopPropagation()}
        >
          Live Now →
        </a>
      )}

      {!isVisionUseCase(useCase) && (
        <button
          className="read-more-button"
          onClick={(e) => {
            e.stopPropagation();
            handleReadMore(useCase.id);
          }}
        >
          Read More →
        </button>
      )}
    </div>
  </div>
</motion.div>

            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;