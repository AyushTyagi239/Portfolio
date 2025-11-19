import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const PointsSection = ({ title, points }) => {
  const [showAll, setShowAll] = useState(false);

  const displayedPoints = showAll ? points : points.slice(0, 4);

  return (
    <section className="w-full py-20 border-t border-gray-800">
  <div className="container mx-auto px-6 md:px-12 max-w-6xl">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center tracking-tight"
        >
          {title}
        </motion.h2>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {displayedPoints.map((point, idx) => (
            <motion.div
  key={idx}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: idx * 0.05, duration: 0.4 }}
  whileHover={{
    scale: 1.03,
    boxShadow: "0 0 25px rgba(96,165,250,0.25)",
    borderColor: "#3b82f6",
  }}
  className="
    group
    flex items-start gap-5
    bg-[#1e293b]
    rounded-2xl
    border border-gray-700
    p-8
    shadow-md
    transition-all duration-300 ease-out
    cursor-pointer
  "
>
  {/* Icon */}
  <div className="flex-shrink-0 pt-1">
    <CheckCircle2 className="w-7 h-7 text-blue-400 group-hover:text-green-400 transition-colors duration-300" />
  </div>

  {/* Text */}
  <p className="text-lg text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
    {point}
  </p>
</motion.div>

          ))}
        </div>

        {/* View More / View Less Button */}
        {points.length > 4 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-gray-400 text-base font-medium hover:text-blue-400 
                         transition-colors duration-300 underline-offset-4 hover:underline"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PointsSection;
