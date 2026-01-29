import React, { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./IndustryPage.css";
import "./main.css";

import MANU_TRANS from "../assets/Industry/Finance.webp";
import edu from "../assets/Industry/Finance.webp";
import Healthcare from "../assets/Industry/Finance.webp";
import hospitality from "../assets/Industry/Finance.webp";
import bfsi from "../assets/Industry/Finance.webp";

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

  // ----------------------------
  // INDUSTRY IMAGE
  // ----------------------------
  const industryImage = useMemo(() => {
    const images = {
      Manufacturing: MANU_TRANS,
      Education: edu,
      Healthcare: Healthcare,
      Hospitality: hospitality,
      "Banking & Financial Services": bfsi,
      BFSI: bfsi,
    };
    return images[title] || MANU_TRANS;
  }, [title]);

  // ----------------------------
  // INFO CONTENT
  // ----------------------------
  const industryInfoContent = useMemo(() => {
    const info = {
      Manufacturing: {
        heading: "Revolutionizing Manufacturing",
        description:
          "Our AI solutions transform traditional factories into intelligent, data-driven environments.",
      },
      Education: {
        heading: "Transforming Education",
        description:
          "AI solutions for safe, smart, and efficient learning ecosystems.",
      },
      Healthcare: {
        heading: "Advancing Healthcare",
        description:
          "Improve patient outcomes, safety, and operational efficiency using AI.",
      },
      Hospitality: {
        heading: "Elevating Hospitality",
        description:
          "AI-driven operations, guest experience, and safety.",
      },
      "Banking & Financial Services": {
        heading: "Securing BFSI",
        description:
          "Real-time fraud detection, risk analysis & automation using AI.",
      },
      BFSI: {
        heading: "Securing BFSI",
        description:
          "Real-time fraud detection, risk analysis & automation using AI.",
      },
    };
    return info[title] || info["Manufacturing"];
  }, [title]);

  // ----------------------------
  // CLICK → USE CASE PAGE
  // ----------------------------
  const educationLabRoutes = {
  "Student Performance Prediction": "/solution/education/-/student-performance-prediction",
  "Adaptive Learning Systems": "/solution/education/-/adaptive-learning-systems",
  "Resource Allocation": "/solution/education/-/resource-allocation",
  "Enrollment Forecasting": "/solution/education/-/enrollment-forecasting",
  "Curriculum Effectiveness": "/solution/education/-/curriculum-effectiveness",
};

  const handleUseCaseClick = useCallback(
  (useCaseName, category) => {

    // ✅ EDUCATION EXPERIENCE CENTER LABS
    if (educationLabRoutes[useCaseName]) {
      navigate(educationLabRoutes[useCaseName]);
      return;
    }

    // ✅ NEURA EAGLE-AI
    if (category?.name === "Neura Eagle-AI") {
      navigate("/manufacturing/vision-ai");
      return;
    }

    // ✅ TENDER ANALYSIS
    if (useCaseName.toLowerCase() === "tender analysis") {
      navigate("/usecase/tender-analysis");
      return;
    }

    // ✅ DEFAULT BEHAVIOR
    const industrySlug = title.toLowerCase().replace(/\s+/g, "-");
    const useCaseSlug = useCaseName.toLowerCase().replace(/\s+/g, "-");

    navigate(`/solution/${industrySlug}/${useCaseSlug}`, {
      state: {
        useCase: { title: useCaseName },
        category,
        industry: title,
        industryData: data,
      },
    });
  },
  [navigate, title, data]
);


  // ----------------------------
  // TECHNOLOGY COLOR
  // ----------------------------
  const getTechnologyColor = useCallback((technology) => {
    switch (technology) {
      case "Data Science":
        return "#3b82f6";
      case "Generative AI":
        return "#8b5cf6";
      case "Vision AI":
        return "#10b981";
      default:
        return "#6b7280";
    }
  }, []);

  return (
    <div className="industry-page industry-usecase-section">
      <main className="industry-content max-w-7xl mx-auto px-6 py-8">

        {/* HEADER */}
        <div className="industry-header">
          <h1 className="text-white">AI in {title}</h1>
          <p className="text-white">{subtitle}</p>
        </div>

        <div className="content-wrapper">

          {/* LEFT CONTENT */}
          <div className="content-side">
            {overview && (
              <div className="industry-section">
                <h2>{overview.heading}</h2>
                <p>{overview.content}</p>
              </div>
            )}

            {problems && (
              <div className="industry-section">
                <h2>{problems.heading}</h2>
                <ul>
                  {problems.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* RIGHT IMAGE */}
          <div className="image-side">
            <div className="sticky-image">
              <div className="image-wrapper">
                <img src={industryImage} className="manufacturing-image" />
                <div className="image-overlay">
                  <h3>{industryInfoContent.heading}</h3>
                  <p>{industryInfoContent.description}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* CATEGORY GRID */}
        {categories?.length > 0 && (
          <div className="categories-fullwidth">
            <h2 className="section-title">AI Solutions by Technology</h2>
            <p className="section-subtitle">
              Click on any use case to explore detailed solutions
            </p>

            <div className="square-categories-grid">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="square-category-card"
                  style={{ borderColor: getTechnologyColor(category.technology) }}
                >

                  {/* FIXED UPDATED CARD */}
                  <div
  className="category-card-image"
  style={{ backgroundImage: `url(${category.image})` }}
  onClick={() => {
    const isNeuraEagleAI =
  category.name === "Neura Eagle-AI";

if (isNeuraEagleAI) {
  navigate("/manufacturing/vision-ai");
  return;
}

  }}
>

                    {/* Tag */}
                    <div
                      className="category-tag"
                      style={{
                        backgroundColor: `${getTechnologyColor(category.technology)}90`,
                        borderColor: getTechnologyColor(category.technology),
                      }}
                    >
                      {category.technology}
                    </div>

                    {/* Bottom Bar (The duplicate div was here) */}
                    <div className="category-center-title">
                        {category.name}
                    </div>
                  </div> 

                  {/* USE CASE ITEMS */}
                  <div className="use-cases-section">
                    <div className="use-cases-list">
                      <h4 className="use-cases-title">Use Cases:</h4>
                      <div className="use-cases-grid">
                        {/* The duplicate map call was here */}
                        {category.useCases.map((useCase, idx) => (
                          <div
                            key={idx}
                            className={`use-case-rectangle ${useCase.live ? "clickable" : "disabled"}`}
                            onClick={() => useCase.live && handleUseCaseClick(useCase.name, category)}
                            // onClick={() => handleUseCaseClick(useCase.name, category)}
                          >
                            <span className="use-case-text">{useCase.name}</span>

                            {useCase.displayLiveButton && (
                              <span className="live-tag">LIVE</span>
                            )}

                            {useCase.displayLiveButton && <span className="use-case-arrow">→</span>}
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

export default React.memo(IndustryPage);