import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";

const TwoColumnList = ({ title, sections }) => {
  return (
    <section className="w-full px-6 md:px-10 py-20 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center tracking-tight"
          >
            {title}
          </motion.h2>
        )}

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {sections.map((sec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(59,130,246,0.25)",
                borderColor: "#60A5FA",
              }}
              className="group p-8 bg-white border border-gray-200 rounded-2xl shadow-md 
                         transition-all duration-300 ease-out cursor-pointer"
            >
              {/* Heading with icon */}
              <div className="flex items-center space-x-3 mb-6">
                <Sparkles className="w-6 h-6 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" />
                <h3 className="text-2xl font-bold text-gray-900 border-b pb-2 border-blue-100 w-full">
                  {sec.heading}
                </h3>
              </div>

              {/* List items */}
              <ul className="space-y-3 text-lg">
                {sec.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start space-x-3 text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-gray-900"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 group-hover:text-green-500 transition-colors duration-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TwoColumnList;
