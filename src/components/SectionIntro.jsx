import React from "react";
import { motion } from "framer-motion";
import chatbotImage from "../assets/Tender.png";

const SectionIntro = ({ title, content, image, demoLink }) => {
  return (
    <section className="w-full py-20 border-b border-gray-800">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">

        {/* Title + Button */}
        <div className="mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            {title}
          </motion.h1>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block mb-8"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-700 via-blue-500 to-purple-800 blur-xl opacity-60"></div>

            <motion.a
              href={demoLink}
              className="relative px-6 py-3 text-white font-semibold rounded-xl bg-gradient-to-r 
              from-purple-700 via-blue-400 to-purple-800 shadow-lg border border-blue-400/30"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Live Demo
            </motion.a>
          </motion.div>

          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Content + Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-lg text-gray-300 leading-relaxed max-w-lg mx-auto md:mx-0"
          >
            {content}
          </motion.p>

          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            src={image || chatbotImage}
            alt="image"
            className="w-full max-w-md rounded-2xl shadow-lg border border-gray-700"
          />
        </div>

      </div>
    </section>
  );
};

export default SectionIntro;
