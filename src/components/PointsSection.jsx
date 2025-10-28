import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const PointsSection = ({ title, points }) => {
  return (
    <section className="w-full px-6 md:px-10 py-20 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center tracking-tight"
        >
          {title}
        </motion.h2>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(59,130,246,0.3)",
                borderColor: "#60A5FA",
              }}
              className="group flex items-start space-x-4 bg-white rounded-xl border border-gray-100 p-6 shadow-sm 
                         transition-all duration-300 ease-out cursor-pointer"
            >
              {/* Icon */}
              <div className="flex-shrink-0 mt-1 transition-colors duration-300">
                <CheckCircle2 className="w-6 h-6 text-blue-500 group-hover:text-green-500 transition-colors duration-300" />
              </div>

              {/* Text */}
              <p className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PointsSection;
