import React from "react";
import "../components/portfoliopage.css";

const PortfolioPage = ({ data }) => {
  if (!data) return null;

  const isArticleLayout = Array.isArray(data.projects);

  const isAISolutions = !!data.sectionTitle;

  return (
    <section className="portfolio">
      <div className="portfolio-container">

        {/* PAGE HEADING */}
        <h1 className="portfolio-title">
          {data.sectionTitle || data.title}
        </h1>

        {/* INTRO */}
        {(data.sectionSubtitle || data.description) && (
          <p className="portfolio-description">
            {data.sectionSubtitle || data.description}
          </p>
        )}

        {/* ===============================
            ARTICLE LAYOUT (AI + WEB)
        =============================== */}
        {isArticleLayout && (
          <div className="ai-article-projects">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="ai-article-project"
              >
                {/* TEXT */}
                <div className="ai-project-text">
                  <h2 className="ai-project-title">
                    {project.title}
                  </h2>

                  {project.description && (
                    <p className="ai-project-description">
                      {project.description}
                    </p>
                  )}

                  {project.highlights && (
                    <ul className="ai-project-highlights">
                      {project.highlights.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}

                  {project.techStack && (
                    <div className="ai-project-tech">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="tech-badge"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* IMAGE / VISUAL */}
                <div className="ai-project-visual">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                    />
                  ) : (
                    <div className="ai-image-placeholder">
                      {isAISolutions
                        ? "AI System Architecture"
                        : "Project Preview"}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default PortfolioPage;
