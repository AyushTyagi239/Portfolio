// import React from "react";
// import { motion } from "framer-motion";
// import chatbotImage from "../assets/chatbot_stock_image.jpg"; // ✅ Update path if needed

// const SectionIntro = ({ title, content, image }) => {
//   return (
//     <section className="w-full px-6 md:px-12 pt-25 pb-12 bg-transparent border-b border-gray-700">
//       <div className="max-w-6xl mx-auto">
//         {/* 1. TOP SECTION — Centered Title and Accent Line */}
//         <div className="mb-12 text-center">
//           {/* Centered Title */}
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="text-3xl md:text-5xl font-bold text-white mb-4 leading-snug tracking-tight"
//           >
//             {title}
//           </motion.h1>

//           {/* Accent Line */}
//           <motion.div
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             // Ensures the line is centered
//             className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full origin-left"
//           ></motion.div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="flex flex-col text-center md:text-left">
//             {/* Content */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               // Ensures text content is centered on mobile and left-aligned on desktop
//               className="text-base md:text-lg text-gray-300 leading-relaxed max-w-lg mx-auto md:mx-0"
//             >
//               {content}
//             </motion.p>
//           </div>

//           {/* RIGHT SIDE — Centered Image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             // Ensures the image is horizontally centered within its column
//             className="flex justify-center items-center"
//           >
//             <img
//               src={image}
//               alt="Chatbot illustration"
//               className="w-full max-w-md rounded-2xl shadow-lg border border-gray-700 object-cover"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SectionIntro;
import React from "react";
import { motion } from "framer-motion";
import chatbotImage from "../assets/chatbot_stock_image.jpg"; // ✅ Update path if needed

const SectionIntro = ({ title, content, image, demoLink }) => {
  return (
    <section className="w-full px-6 md:px-12 pt-25 pb-12 bg-transparent border-b border-gray-700 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* 1. TOP SECTION — Centered Title, Button, and Accent Line */}
        <div className="mb-12 text-center relative">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 leading-snug tracking-tight"
          >
            {title}
          </motion.h1>

          {/* ✅ Live Demo Button with Permanent Glow */}
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative inline-block mb-6"
        >
          {/* ✨ Permanent Glow */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-700 via-blue-500 to-purple-800 blur-xl opacity-70 animate-gradientGlow"></div>

          {/* 🚀 Animated Button */}
          <motion.a
            href={demoLink}
            className="relative px-6 py-3 text-white font-semibold rounded-xl 
                      bg-gradient-to-r from-purple-700 via-blue-400 to-purple-800
                      shadow-lg shadow-purple-900/40 backdrop-blur-md border border-blue-400/30 
                      transition-all duration-300 ease-out hover:scale-105"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 2.5, // ⚡ Faster color cycle (2.5 seconds)
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            Live Demo
          </motion.a>
        </motion.div>


          {/* Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full origin-left"
          ></motion.div>
        </div>

        {/* 2. BOTTOM SECTION — Text & Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="flex flex-col text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-base md:text-lg text-gray-300 leading-relaxed max-w-lg mx-auto md:mx-0"
            >
              {content}
            </motion.p>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center items-center"
          >
            <img
              src={image || chatbotImage}
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
