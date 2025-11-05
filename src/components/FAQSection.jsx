import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = ({ faqs }) => {
  const [openIndexLeft, setOpenIndexLeft] = useState(-1);
  const [openIndexRight, setOpenIndexRight] = useState(-1);

  const leftColumn = faqs.slice(0, Math.ceil(faqs.length / 2));
  const rightColumn = faqs.slice(Math.ceil(faqs.length / 2));

  const toggleLeft = (index) =>
    setOpenIndexLeft(openIndexLeft === index ? -1 : index);
  const toggleRight = (index) =>
    setOpenIndexRight(openIndexRight === index ? -1 : index);

  const renderFAQ = (faq, index, openIndex, toggle) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 20px rgba(96,165,250,0.2)",
        borderColor: "#3b82f6",
      }}
      className="group bg-[#1e293b] rounded-xl border border-gray-700 p-0 shadow-sm 
                 transition-all duration-300 ease-out cursor-pointer overflow-hidden"
    >
      <button
        onClick={() => toggle(index)}
        className="w-full flex items-center justify-between text-left px-6 py-6 min-h-[100px]"
      >
        <span className="text-lg md:text-xl font-semibold text-gray-200 pr-6 group-hover:text-white transition-colors duration-300 leading-snug">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: openIndex === index ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 mt-1 transition-transform duration-300"
        >
          {openIndex === index ? (
            <ChevronUp className="w-6 h-6 text-gray-400 group-hover:text-green-400 transition-colors duration-300" />
          ) : (
            <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-green-400 transition-colors duration-300" />
          )}
        </motion.div>
      </button>

      <AnimatePresence>
        {openIndex === index && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden px-6 pb-6"
          >
            <p className="text-gray-400 leading-relaxed mt-2 group-hover:text-gray-200 transition-colors duration-300">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  return (
    <section className="w-full px-6 md:px-10 py-20 bg-transparent border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center tracking-tight"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {/* Left Column */}
          <div className="space-y-6">
            {leftColumn.map((faq, i) =>
              renderFAQ(faq, i, openIndexLeft, toggleLeft)
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {rightColumn.map((faq, i) =>
              renderFAQ(faq, i, openIndexRight, toggleRight)
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;