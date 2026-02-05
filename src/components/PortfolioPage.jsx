import React from "react";
import "../components/portfoliopage.css";

const PortfolioPage = ({ data }) => {
  return (
    <section className="portfolio">
      <div className="portfolio-container">
        <h1 className="portfolio-title">
          {data.title}
        </h1>

        {data.description && (
          <p className="portfolio-description">
            {data.description}
          </p>
        )}

        {data.sections && (
          <div className="portfolio-grid">
            {data.sections.map((item, index) => (
              <div
                key={index}
                className="portfolio-card"
              >
                <h3 className="portfolio-card-title">
                  {item.title}
                </h3>
                <p className="portfolio-card-text">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioPage;
