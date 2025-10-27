import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { websiteContent } from '../data/content';
import { useNavigate } from 'react-router-dom'; // 👈 Import navigation hook

const UseCasesSection = () => {
  const [expandedCase, setExpandedCase] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate(); // 👈 Initialize navigate

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) return;

    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const autoScroll = setInterval(() => {
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 10) {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }, 3000);

    return () => clearInterval(autoScroll);
  }, [isPaused]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // 👇 Navigate to use case detail page based on id
  const handleReadMore = (useCaseId) => {
    // navigate(`/usecase/${useCaseId}`);
    switch(useCaseId) {
      case 1:
        navigate('/usecase/chatbot');
        break;
      case 2:
        navigate('/usecase/tender-analysis');
        break;
      case 3:
        navigate('/usecase/neuraedge-slm');
        break;
      case 4:
        navigate('/usecase/edubot');
        break;

      default:
        navigate('/');
        break
    }
  };

  return (
    <section className="use-cases section-padding">
      <div className="container">
        <h2 className="section-title">Innovate. Automate. Accelerate. Intensely</h2>
        
        <div style={{ position: 'relative' }}>
          {/* Scroll buttons */}
          <button className="scroll-indicator scroll-left" onClick={scrollLeft}>
            ‹
          </button>
          <button className="scroll-indicator scroll-right" onClick={scrollRight}>
            ›
          </button>

          {/* Horizontal scroll container */}
          <div 
            className="use-cases-container"
            ref={scrollContainerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {websiteContent.useCases.map((useCase, index) => (
              <motion.div
                key={useCase.id}
                className={`use-case-item ${expandedCase === index ? 'expanded' : ''}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="use-case-header">
                  <h3 className="use-case-title">{useCase.title}</h3>
                </div>
                
                <div className="use-case-content">
                  <p className="use-case-description">{useCase.description}</p>
                  
                  <div className="use-case-buttons">
                    {useCase.demoLink && (
                      <a
                        href={useCase.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="demo-button"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live Demo →
                      </a>
                    )}
                    
                    <button
                      className="read-more-button"
                      onClick={() => handleReadMore(useCase.id)} // 👈 Redirect here
                    >
                      Read More →
                    </button>
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
