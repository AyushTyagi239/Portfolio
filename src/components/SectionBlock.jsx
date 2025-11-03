// src/components/SectionBlock.jsx
import React from "react";

const SectionBlock = ({ heading, content, children }) => {
  return (
    <section className="bg-white/5 border border-white/5 rounded-2xl p-6 md:p-8 shadow-sm">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-100 mb-3">{heading}</h2>
      <div className="text-gray-200 leading-relaxed whitespace-pre-line">
        {typeof content === "string" ? <p>{content}</p> : content}
      </div>
      {children}
    </section>
  );
};

export default SectionBlock;
