import React from "react";
import { motion } from "framer-motion";

const SectionIntro = ({ title, content }) => {
  return (
    <section className="w-full px-6 pt-20 pb-12 bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto text-center">
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug tracking-tight"
        >
          {title}
        </motion.h1>

        {/* Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6 rounded-full origin-left"
        ></motion.div>

        {/* Content */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
        >
          {content}
        </motion.p>
      </div>
    </section>
  );
};

export default SectionIntro;
