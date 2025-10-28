// import React from "react";
// import { motion } from "framer-motion";

// const SectionIntro = ({ title, content }) => {
//   return (
//     <section className="w-full px-6 pt-20 pb-12 bg-transparent border-b border-gray-700">
//       <div className="max-w-5xl mx-auto text-center">
//         {/* Animated Title */}
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="text-3xl md:text-4xl font-bold text-white mb-4 leading-snug tracking-tight"
//         >
//           {title}
//         </motion.h1>

//         {/* Accent Line */}
//         <motion.div
//           initial={{ scaleX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 rounded-full origin-left"
//         ></motion.div>

//         {/* Content */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto"
//         >
//           {content}
//         </motion.p>
//       </div>
//     </section>
//   );
// };

// export default SectionIntro;

import React from "react";
import { motion } from "framer-motion";
import chatbotImage from "../assets/chatbot_stock_image.jpg"; // ✅ Update path if needed

const SectionIntro = ({ title, content }) => {
  return (
    <section className="w-full px-6 md:px-12 pt-20 pb-12 bg-transparent border-b border-gray-700">
      <div className="max-w-6xl mx-auto">
        {/* 1. TOP SECTION — Centered Title and Accent Line */}
        <div className="mb-12 text-center">
          {/* Centered Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 leading-snug tracking-tight"
          >
            {title}
          </motion.h1>

          {/* Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            // Ensures the line is centered
            className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full origin-left"
          ></motion.div>
        </div>

        {/* 2. MAIN CONTENT — Two-Column Structure (Text & Image) */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE — Text content */}
          {/* Removed justify-center which conflicted with the desired text-left on desktop */}
          <div className="flex flex-col text-center md:text-left">
            {/* Content */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              // Ensures text content is centered on mobile and left-aligned on desktop
              className="text-base md:text-lg text-gray-300 leading-relaxed max-w-lg mx-auto md:mx-0"
            >
              {content}
            </motion.p>
          </div>

          {/* RIGHT SIDE — Centered Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            // Ensures the image is horizontally centered within its column
            className="flex justify-center items-center"
          >
            <img
              src={chatbotImage}
              alt="Chatbot illustration"
              className="w-full max-w-md rounded-2xl shadow-lg border border-gray-700 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionIntro;