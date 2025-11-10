import React from "react";
import { useNavigate } from "react-router-dom";
import "./IndustryPage.css";
import MANU_TRANS from "../assets/transition/MANU_TRANS.png";

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

  const handleSolutionClick = (solution) => {
    // Create a URL-friendly slug from the solution title
    const solutionSlug = solution.title.toLowerCase().replace(/\s+/g, '-');
    const industrySlug = title.toLowerCase();
    
    // Navigate to the solution page
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
                    src={MANU_TRANS}
                    alt="AI in Manufacturing"
                    className="manufacturing-image"
                  />
                  <div className="image-overlay">
                    <h3>Smart Factory Transformation</h3>
                    <p>AI-driven automation and optimization</p>
                  </div>
                </div>

                <div className="image-info">
                  <h3>Revolutionizing Manufacturing</h3>
                  <p>
                    Our AI solutions transform traditional factories into
                    intelligent, data-driven production environments with
                    real-time optimization and predictive capabilities.
                  </p>
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