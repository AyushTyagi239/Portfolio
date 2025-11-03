import React from "react";
import SectionBlock from "../components/SectionBlock";
import "./IndustryPage.css";
import Header from "./Header";

const IndustryPage = ({ data }) => {
  if (!data) {
    return (
      <div className="text-center text-gray-300 py-20">
        No data available for this industry.
      </div>
    );
  }

  const { title, subtitle, sections } = data;

  return (
    <div className="industry-page relative flex flex-col min-h-screen overflow-hidden text-gray-100">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="industry-content flex-grow max-w-6xl mx-auto px-6 py-12 space-y-8">
        {/* Title and Subtitle */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            AI in {title}
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            {subtitle}
          </p>
        </div>

        {/* Render Each Section */}
        <div className="space-y-10">
          {Array.isArray(sections) && sections.length > 0 ? (
            sections.map((section, index) => (
              <div
                key={index}
                className="industry-section bg-[#1e1e2f]/60 p-6 rounded-2xl shadow-lg backdrop-blur-md"
              >
                <SectionBlock
                  heading={section.heading}
                  content={section.content}
                />
                {section.details?.length > 0 && (
                  <ul className="mt-4 text-sm text-gray-300 space-y-1 pl-4 list-disc">
                    {section.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center">No sections found.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default IndustryPage;
