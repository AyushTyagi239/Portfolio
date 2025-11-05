import React from "react";
import SectionBlock from "../components/SectionBlock";
import ImageCarousel from "../components/ImageCarousel";
import "./IndustryPage.css";
import Header from "./Header";

// Sample images for the carousel - replace with your actual images
import BFSI_Img from "../assets/transition/BFSI_TRANS.png";
import manufacturingImg from "../assets/transition/MANU_TRANS.png";

const IndustryPage = ({ data }) => {
  if (!data) {
    return (
      <div className="text-center text-gray-300 py-20">
        No data available for this industry.
      </div>
    );
  }

  const { title, subtitle, sections } = data;

  // Define carousel images based on industry or use default
  const carouselImages = [
    {
      src: manufacturingImg,
      title: "AI in Manufacturing",
      description: "Revolutionizing production lines with intelligent automation"
    },
    {
      src: BFSI_Img,
      title: "AI in BFSI",
      description: "Transforming banking and financial services with AI"
    },
    {
      src: manufacturingImg,
      title: "AI in Healthcare",
      description: "Enhancing patient care through personalized services"
    },
    {
      src: BFSI_Img,
      title: "AI in Education",
      description: "Personalizing learning experiences for all students"
    }
  ];

  return (
    <div className="industry-page">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="industry-content max-w-7xl mx-auto px-6 py-8">
        <div className="layout-container">
          {/* Title and Subtitle - Full Width */}
          <div className="industry-header">
            <h1>AI in {title}</h1>
            <p>{subtitle}</p>
          </div>

          <div className="content-wrapper">
            {/* Left Side - Content Sections */}
            <div className="content-side">
              <div className="sections-container">
                {Array.isArray(sections) && sections.length > 0 ? (
                  sections.map((section, index) => (
                    <div
                      key={index}
                      className="industry-section"
                    >
                      <SectionBlock
                        heading={section.heading}
                        content={section.content}
                      />
                      {section.details?.length > 0 && (
                        <ul>
                          {section.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="no-sections">No sections found.</p>
                )}
              </div>
            </div>

            {/* Right Side - Image Carousel and Additional Content */}
            <div className="carousel-side">
              <div className="sticky-carousel">
                {/* Smaller Image Carousel */}
                <div className="carousel-wrapper">
                  <ImageCarousel
                    images={carouselImages}
                    interval={2000}
                    animationDuration={800}
                    height="350px" // Reduced height
                    width="100%"
                    showDots={true}
                    showTimer={true}
                  />
                </div>
                
                {/* AI Transformation Section */}
                <div className="carousel-info industry-section">
                  <h3>AI Transformation</h3>
                  <p>
                    Discover how artificial intelligence is revolutionizing various industries 
                    through automation, predictive analytics, and enhanced decision-making capabilities.
                  </p>
                </div>

                {/* Additional Content Sections to Fill Space */}
                <div className="additional-content">
                  <div className="industry-section">
                    <h3>Key Benefits</h3>
                    <ul>
                      <li>Increased Efficiency & Productivity</li>
                      <li>Enhanced Decision Making</li>
                      <li>Cost Reduction & Optimization</li>
                      <li>Improved Customer Experience</li>
                      <li>Predictive Analytics & Insights</li>
                    </ul>
                  </div>

                  <div className="industry-section">
                    <h3>Technology Stack</h3>
                    <p>Our AI solutions leverage cutting-edge technologies including:</p>
                    <ul>
                      <li>Machine Learning & Deep Learning</li>
                      <li>Natural Language Processing</li>
                      <li>Computer Vision</li>
                      <li>Predictive Analytics</li>
                      <li>Automated Decision Systems</li>
                    </ul>
                  </div>

                  <div className="industry-section">
                    <h3>Implementation Process</h3>
                    <ul>
                      <li>Needs Assessment & Analysis</li>
                      <li>Custom Solution Design</li>
                      <li>Data Integration & Processing</li>
                      <li>Model Training & Validation</li>
                      <li>Deployment & Maintenance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IndustryPage;