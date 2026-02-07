import React, { useState } from "react";
import "./aboutMeSection.css";

const AboutMeSection = ({ data = {} }) => {
  // 🔒 Safety guard
  if (!data || !data.title) return null;

  const [expanded, setExpanded] = useState(false);

  return (
    <section className="about-me" id="about">
      <div className="about-me-container">

        {/* LEFT CONTENT */}
        <div className="about-me-content">

          {/* TITLE + ACTIONS */}
          <div className="about-me-header">
            <h2 className="about-me-title">
              {data.title}
            </h2>

            <div className="about-me-header-actions">
              {data.linkedin && (
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                >
                  LinkedIn
                </a>
              )}

              {data.fiverr && (
                <a
                  href={data.fiverr}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                >
                  Fiverr
                </a>
              )}

              {data.email && (
                <a
                  href={`mailto:${data.email}`}
                  className="btn-primary"
                >
                  Gmail
                </a>
              )}
            </div>
          </div>

          {/* DESCRIPTION */}
          {data.description && (
            <div className="about-me-description">
              {data.description
                .trim()
                .split("\n\n")
                .map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
            </div>
          )}

          {/* READ MORE */}
          {data.sections?.length > 0 && (
            <button
              className="read-more-btn"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Read less" : "Read more"}
            </button>
          )}

          {/* EXPANDABLE CONTENT */}
          {expanded && (
            <div className="about-me-expandable">
              {data.sections.map((section, index) => (
                <div key={index} className="about-me-subsection">
                  <h3 className="about-me-subtitle">
                    {section.heading}
                  </h3>

                  <div className="about-me-text">
                    {section.content
                      .trim()
                      .split("\n\n")
                      .map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* RIGHT IMAGE */}
        {data.image && (
          <div className="about-me-image-wrapper">
            <img
              src={data.image}
              alt="Ayush Tyagi"
              className="about-me-image"
              loading="lazy"
            />
          </div>
        )}

      </div>
    </section>
  );
};

export default AboutMeSection;
