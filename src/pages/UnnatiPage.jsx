import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./unnatiGrid.css";

const UnnatiPage = ({ data }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <h2 className="text-xl">Unnati Lab data not available</h2>
      </div>
    );
  }

  const { title, description, sections, image } = data;

  return (
    <div className="unnati-grid-page">

      {/* HEADER */}
      <section className="unnati-grid-hero">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {description}
        </motion.p>
      </section>

      {/* IMAGE */}
      {image && (
        <motion.div
          className="unnati-grid-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={image} alt={title} />
        </motion.div>
      )}

      {/* HEADINGS GRID */}
      <section className="unnati-grid">
        {sections?.map((section, idx) => (
          <motion.div
            key={idx}
            className="unnati-grid-card"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            {section.heading}
          </motion.div>
        ))}
      </section>

    </div>
  );
};

export default React.memo(UnnatiPage);
