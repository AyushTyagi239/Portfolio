import React from "react";
import "../components/portfoliopage.css";

const PortfolioPage = ({ data, belowSection }) => {
  return (
    <section className="portfolio">
      <div className="portfolio-container">

        {/* HERO IMAGE */}
        {data.heroImage && (
          <div className="portfolio-hero">
            <img
              src={data.heroImage}
              alt={data.title}
              className="portfolio-hero-image"
            />
          </div>
        )}

        {/* TITLE */}
        <h1 className="portfolio-title">
          {data.title}
        </h1>

        {/* DESCRIPTION */}
        {data.description && (
          <p className="portfolio-description">
            {data.description}
          </p>
        )}

        {/* TEXT SECTIONS */}
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

        {/* RESUME / PROFILE HIGHLIGHTS */}
        {data.highlights && (
          <div className="portfolio-highlights">
            {data.highlights.map((item, index) => (
              <div
                key={index}
                className="portfolio-highlight-card"
              >
                <img
                  src={item.image}
                  alt={item.label}
                />
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* PROJECTS GRID */}
        {data.projects && (
          <div className="portfolio-projects">
            <h2 className="portfolio-subtitle">
              Projects
            </h2>

            <div className="portfolio-project-grid">
              {data.projects.map((project, index) => (
                <div
                  key={index}
                  className="portfolio-project-card"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="portfolio-project-image"
                  />

                  <div className="portfolio-project-content">
                    <h3>{project.name}</h3>

                    <div className="portfolio-project-actions">
                      {project.linkedin && (
                        <a
                          href={project.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-outline"
                        >
                          LinkedIn
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-primary"
                        >
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ARTICLES */}
        {data.articles && (
          <div className="portfolio-articles">
            <h2 className="portfolio-subtitle">
              Articles
            </h2>

            <ul>
              {data.articles.map((article, index) => (
                <li key={index}>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {article.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* BELOW FOLD SLOT (Optional) */}
        {belowSection && (
          <div className="portfolio-below-section">
            {belowSection}
          </div>
        )}

      </div>
    </section>
  );
};

export default PortfolioPage;
