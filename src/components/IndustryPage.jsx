import React from "react";
import { useNavigate } from "react-router-dom";
import "./IndustryPage.css";
import MANU_TRANS from "../assets/transition/MANU_TRANS.png";
import edu from "../assets/transition/edu.png";
import Healthcare from "../assets/transition/Healthcare.png";
import hospitality from "../assets/transition/hosptality.png";
import bfsi from "../assets/transition/bfsi.png";   

const IndustryPage = ({ data }) => {
  const navigate = useNavigate();

  if (!data) {
    return (
      <div className="text-center text-white py-20">
        No data available for this industry.
      </div>
    );
  }

  const { title, subtitle, overview, problems, categories } = data;

  // Map industry titles to their respective images
  const industryImages = {
    'Manufacturing': MANU_TRANS,
    'Education': edu,
    'Healthcare': Healthcare,
    'Hospitality': hospitality,
    'Banking & Financial Services': bfsi || MANU_TRANS,
    'BFSI': bfsi || MANU_TRANS
  };

  // Map industry titles to their overlay content
  const industryOverlays = {
    'Manufacturing': {
      heading: 'Smart Factory Transformation',
      description: 'AI-driven automation and optimization'
    },
    'Education': {
      heading: 'Smart Campus Revolution',
      description: 'AI-powered safety and learning environments'
    },
    'Healthcare': {
      heading: 'Healthcare Innovation',
      description: 'AI-enhanced patient care and safety'
    },
    'Hospitality': {
      heading: 'Hospitality Excellence',
      description: 'AI-driven guest experiences and operations'
    },
    'Banking & Financial Services': {
      heading: 'Financial Security Evolution',
      description: 'AI-powered security and compliance'
    },
    'BFSI': {
      heading: 'Financial Security Evolution',
      description: 'AI-powered security and compliance'
    }
  };

  // Map industry titles to their info content
  const industryInfo = {
    'Manufacturing': {
      heading: 'Revolutionizing Manufacturing',
      description: 'Our AI solutions transform traditional factories into intelligent, data-driven production environments with real-time optimization and predictive capabilities.'
    },
    'Education': {
      heading: 'Transforming Education',
      description: 'Our AI solutions create safer, more efficient learning environments with automated systems and real-time monitoring for enhanced educational experiences.'
    },
    'Healthcare': {
      heading: 'Advancing Healthcare',
      description: 'Our AI solutions enhance patient safety, optimize staff efficiency, and provide real-time monitoring for better healthcare delivery and outcomes.'
    },
    'Hospitality': {
      heading: 'Elevating Hospitality',
      description: 'Our AI solutions transform guest experiences, optimize operations, and ensure safety across hotels, resorts, and hospitality venues.'
    },
    'Banking & Financial Services': {
      heading: 'Securing Financial Services',
      description: 'Our AI solutions provide advanced security, compliance monitoring, and operational efficiency for banking and financial institutions.'
    },
    'BFSI': {
      heading: 'Securing Financial Services',
      description: 'Our AI solutions provide advanced security, compliance monitoring, and operational efficiency for banking and financial institutions.'
    }
  };

  // Get the appropriate image, overlay, and info for the current industry
  const industryImage = industryImages[title] || MANU_TRANS;
  const industryOverlay = industryOverlays[title] || industryOverlays['Manufacturing'];
  const industryInfoContent = industryInfo[title] || industryInfo['Manufacturing'];

  const handleUseCaseClick = (useCaseName, category) => {
    // Create path based on category and use case
    const industrySlug = title.toLowerCase().replace(/\s+/g, '-');
    const categorySlug = category.technology.toLowerCase().replace(/\s+/g, '-');
    const useCaseSlug = useCaseName.toLowerCase().replace(/\s+/g, '-');
    
    navigate(`/solution/${industrySlug}/${categorySlug}/${useCaseSlug}`, {
      state: {
        useCase: { title: useCaseName },
        category,
        industry: title,
        industryData: data
      }
    });
  };

  const getTechnologyColor = (technology) => {
    switch (technology) {
      case 'Data Science':
        return '#3b82f6'; // blue
      case 'Generative AI':
        return '#8b5cf6'; // purple
      case 'Vision AI':
        return '#10b981'; // green
      default:
        return '#6b7280'; // gray
    }
  };

  return (
    <div className="industry-usecase-section">
      <main className="industry-content max-w-7xl mx-auto px-6 py-8">
        <div className="layout-container">
          {/* Page Header */}
          <div className="industry-header">
            <h1 className="text-white">AI in {title}</h1>
            <p className="text-white">{subtitle}</p>
          </div>

          <div className="content-wrapper">
            {/* Left Side - Content */}
            <div className="content-side">
              <div className="sections-container">
                {/* Overview */}
                {overview && (
                  <div className="industry-section">
                    <h2 className="text-white">{overview.heading}</h2>
                    <p className="text-white">{overview.content}</p>
                  </div>
                )}

                {/* Problems */}
                {problems && (
                  <div className="industry-section">
                    <h2 className="text-white">{problems.heading}</h2>
                    <ul className="text-white">
                      {problems.points.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="image-side">
              <div className="sticky-image">
                <div className="image-wrapper">
                  <img
                    src={industryImage}
                    alt={`AI in ${title}`}
                    className="manufacturing-image"
                  />
                  <div className="image-overlay">
                    <h3>{industryOverlay.heading}</h3>
                    <p>{industryOverlay.description}</p>
                  </div>
                </div>

                <div className="image-info">
                  <h3>{industryInfoContent.heading}</h3>
                  <p>{industryInfoContent.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Boxes Section */}
        {categories && categories.length > 0 && (
          <div className="categories-fullwidth">
            <h2 className="section-title">AI Solutions by Technology</h2>
            <p className="section-subtitle">Click on any use case to explore detailed solutions</p>
            
            <div className="square-categories-grid">
              {categories.map((category, index) => (
                <div 
                  key={index} 
                  className="square-category-card"
                  style={{ borderColor: getTechnologyColor(category.technology) }}
                >
                  {/* Category Image */}
                  <div className="category-image-container">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="category-image"
                    />
                    <div className="category-overlay">
                      <div className="category-icon">{category.icon}</div>
                      <h3 className="category-name">{category.name}</h3>
                      <span 
                        className="technology-badge"
                        style={{ 
                          backgroundColor: `${getTechnologyColor(category.technology)}20`,
                          color: getTechnologyColor(category.technology),
                          borderColor: getTechnologyColor(category.technology)
                        }}
                      >
                        {category.technology}
                      </span>
                    </div>
                  </div>

                  {/* Use Cases - Always Visible */}
                  <div className="use-cases-section">
                    <div className="use-cases-list">
                      <h4 className="use-cases-title">Use Cases:</h4>
                      <div className="use-cases-grid">
                        {category.useCases.map((useCase, idx) => (
                          <div 
                            key={idx}
                            className="use-case-rectangle clickable"
                            onClick={() => handleUseCaseClick(useCase, category)}
                          >
                            <span className="use-case-text">{useCase}</span>
                            <span className="use-case-arrow">→</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default IndustryPage;