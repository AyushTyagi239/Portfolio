import React from "react";
import { useNavigate } from "react-router-dom";
import "./IndustryPage.css";
import MANU_TRANS from "../assets/transition/MANU_TRANS.png";
import edu from "../assets/transition/edu.png";
import Healthcare from "../assets/transition/Healthcare.png";
import hospitality from "../assets/transition/hosptality.png";
import bfsi from "../assets/transition/bfsi.png"; // You might need to add this

const IndustryPage = ({ data }) => {
  const navigate = useNavigate();

  if (!data) {
    return (
      <div className="text-center text-white py-20">
        No data available for this industry.
      </div>
    );
  }

  const { title, subtitle, overview, problems, solutionsSection } = data;

  // Map industry titles to their respective images
  const industryImages = {
    'Manufacturing': MANU_TRANS,
    'Education': edu,
    'Healthcare': Healthcare,
    'Hospitality': hospitality,
    'Banking & Financial Services': bfsi || MANU_TRANS, // Fallback to manufacturing image if bfsi not available
    'BFSI': bfsi || MANU_TRANS // Fallback to manufacturing image if bfsi not available
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

  const handleSolutionClick = (solution) => {
    // Map industry titles to the exact route slugs used in AppRoutes
    const industryRouteMap = {
      'Banking & Financial Services': 'banking-&-financial-services',
      'Manufacturing': 'manufacturing',
      'Healthcare': 'healthcare', 
      'Education': 'education',
      'Hospitality': 'hospitality',
      'BFSI': 'banking-&-financial-services' // Handle both titles
    };

    // Map solution titles to the exact route slugs used in AppRoutes
    const solutionRouteMap = {
      // BFSI Solutions
      'Facial Recognition at Entry': 'facial-recognition-at-entry',
      'Facial recognition at entry': 'facial-recognition-at-entry',
      'Loitering Detection': 'loitering-detection', 
      'Loitering detection': 'loitering-detection',
      'Tampering Detection': 'tampering-detection',
      'Tampering detection': 'tampering-detection',
      'Violence Detection': 'violence-detection',
      'Violence detection': 'violence-detection',
      'Intrusion Detection': 'intrusion-detection',
      'Intrusion detection': 'intrusion-detection',
      
      // Manufacturing Solutions
      'ANPR System': 'anpr-system',
      'ANPR': 'anpr-system',
      'Object Counting': 'object-counting',
      'Object counting': 'object-counting',
      'PPE Detection': 'ppe-detection',
      'PPE detection': 'ppe-detection',
      'Cross Camera Tracking': 'cross-camera-tracking',
      'Cross camera tracking': 'cross-camera-tracking',
      
      // Healthcare Solutions
      'Fall Detection': 'fall-detection',
      'Fall detection': 'fall-detection',
      'Queue Detection': 'queue-detection',
      'Queue detection': 'queue-detection',
      'Anti Intrusion': 'anti-intrusion',
      'Anti intrusion': 'anti-intrusion',
      'Patient Out of Bed': 'patient-out-of-bed',
      'Patient out of bed': 'patient-out-of-bed',
      
      // Education Solutions  
      'Face Recognition': 'face-recognition',
      'Face recognition': 'face-recognition',
      'FR': 'face-recognition',
      'Intrusion Detection': 'intrusion-detection',
      'Intrusion detection': 'intrusion-detection',
      'Automated Attendance': 'automated-attendance',
      'Automated attendance': 'automated-attendance',
      'Weapon Detection': 'weapon-detection',
      'Weapon detection': 'weapon-detection',
      'Violence Detection': 'violence-detection',
      'Violence detection': 'violence-detection',
      'Overcrowding Detection': 'overcrowding-detection',
      'Overcrowding detection': 'overcrowding-detection',
      
      // Hospitality Solutions
      'Parking Management': 'parking-management',
      'Parking management': 'parking-management',
      'Queue Detection': 'queue-detection',
      'Queue detection': 'queue-detection',
      'Face Recognition': 'facial-recognition-entry',
      'Face recognition': 'facial-recognition-entry',
      'FR': 'facial-recognition-entry',
      'Smoke/Fire Detection': 'smoke-fire-detection',
      'Smoke/fire detection': 'smoke-fire-detection',
      'Luggage Detection': 'luggage-detection',
      'Luggage detection': 'luggage-detection'
    };

    // Get the exact industry slug from the map, or create a fallback
    const industrySlug = industryRouteMap[title] || title.toLowerCase().replace(/\s+/g, '-');
    
    // Get the exact solution slug from the map, or create a fallback
    const solutionSlug = solutionRouteMap[solution.title] || solution.title.toLowerCase().replace(/\s+/g, '-');
    
    // Navigate to the solution page with the correct path
    navigate(`/solution/${industrySlug}/${solutionSlug}`, {
      state: {
        solution,
        industry: title,
        industryData: data
      }
    });
  };

  return (
    <div className="industry-page">
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

        {/* Full-width Our Powered AI Solutions Section */}
        {solutionsSection && (
          <div className="solutions-fullwidth">
            <h2 className="text-white">{solutionsSection.heading}</h2>
            <p className="text-white">{solutionsSection.description}</p>

            {solutionsSection.solutions &&
            solutionsSection.solutions.length > 0 ? (
              <div className="solutions-grid">
                {solutionsSection.solutions.map((solution) => (
                  <div 
                    key={solution.id} 
                    className="solution-card clickable"
                    onClick={() => handleSolutionClick(solution)}
                  >
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="solution-img"
                    />
                    <div className="solution-content">
                      <h3 className="text-white">{solution.title}</h3>
                      <p className="text-white">{solution.description}</p>
                      <div className="solution-click-hint">
                        <span className="text-blue-400">Click to learn more →</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="coming-soon">
                <h3>🚀 Coming Soon</h3>
                <p>
                  Our Powered AI Solutions are being crafted with precision and
                  innovation.
                </p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default IndustryPage;