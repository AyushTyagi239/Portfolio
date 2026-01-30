import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./IndustryPage.css";
import "./main.css";

const IndustryPage = ({ data }) => {
  const navigate = useNavigate();

  if (!data || !data.categories) {
    return (
      <div className="text-center text-white py-20">
        No data available.
      </div>
    );
  }

  const { title, categories } = data;

  // ----------------------------
  // EDUCATION LAB ROUTES
  // ----------------------------
  const educationLabRoutes = {
    "Unnati Artificial Intelligence":
      "/solution/education/unnati/artificial-intelligence",
    "Unnati AIIoT":
      "/solution/education/unnati/aiiot",
    "Unnati Applied AI":
      "/solution/education/unnati/applied-ai",
    "Unnati High Performance Computing":
      "/solution/education/unnati/high-performance-computing",
    "Unnati Deep Learning with Habana Gaudi":
      "/solution/education/unnati/deep-learning-habana-gaudi",
    "Unnati Security":
      "/solution/education/unnati/security",
  };

  // ----------------------------
  // USE CASE CLICK
  // ----------------------------
  const handleUseCaseClick = useCallback(
    (useCaseName, category) => {
      if (educationLabRoutes[useCaseName]) {
        navigate(educationLabRoutes[useCaseName]);
        return;
      }

      if (category?.name === "NeuraEagleI") {
        navigate("/manufacturing/vision-ai");
        return;
      }

      if (useCaseName.toLowerCase() === "tender analysis") {
        navigate("/usecase/tender-analysis");
        return;
      }

      const industrySlug = title
        .toLowerCase()
        .replace(/\s+/g, "-");

      const useCaseSlug = useCaseName
        .toLowerCase()
        .replace(/\s+/g, "-");

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
  const getTechnologyColor = (technology) => {
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
  };

  return (
    <div className="industry-page industry-usecase-section">
      <main className="industry-content max-w-7xl mx-auto px-6 py-10">

        {/* CATEGORY GRID */}
        <div className="categories-fullwidth">
          <h2 className="section-title">
            AI Solutions by Technology
          </h2>

          <div className="square-categories-grid">
            {[...categories].reverse().map((category, index) => (
              <div
                key={index}
                className="square-category-card"
                style={{
                  borderColor: getTechnologyColor(category.technology),
                }}
              >
                {/* CATEGORY IMAGE */}
                <div
                  className="category-card-image"
                  style={{
                    backgroundImage: `url(${category.image})`,
                  }}
                  onClick={() => {
                    if (category.name === "NeuraEagleI") {
                      navigate("/manufacturing/vision-ai");
                    }
                  }}
                >
                  {/* TAG */}
                  <div
                    className="category-tag"
                    style={{
                      backgroundColor: `${getTechnologyColor(
                        category.technology
                      )}90`,
                      borderColor: getTechnologyColor(
                        category.technology
                      ),
                    }}
                  >
                    {category.technology}
                  </div>

                  {/* CATEGORY NAME */}
                  <div className="category-center-title">
                    {category.name}
                  </div>
                </div>

                {/* USE CASES */}
                <div className="use-cases-section">
                  <div className="use-cases-list">
                    <h4 className="use-cases-title">
                      Use Cases:
                    </h4>

                    <div className="use-cases-grid">
                      {category.useCases.map((useCase, idx) => (
                        <div
                          key={idx}
                          className={`use-case-rectangle ${
                            useCase.live
                              ? "clickable"
                              : "disabled"
                          }`}
                          onClick={() =>
                            useCase.live &&
                            handleUseCaseClick(
                              useCase.name,
                              category
                            )
                          }
                        >
                          <span className="use-case-text">
                            {useCase.name}
                          </span>

                          {useCase.displayLiveButton && (
                            <>
                              <span className="live-tag">
                                LIVE
                              </span>
                              <span className="use-case-arrow">
                                →
                              </span>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
};

export default React.memo(IndustryPage);
