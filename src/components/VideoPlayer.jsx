import React from "react";
import { motion } from "framer-motion";
import NeuraEdgeChatbotThumbnail from "../assets/NeuraEdgeChatbotThumbnail.png"

const VideoPlayer = ({ title, videoUrl, thumbnail }) => {
  return (
    <section className="w-full py-20 border-t border-gray-800">
  <div className="container mx-auto px-6 md:px-12 max-w-6xl text-center">

        {/* Title */}
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight"
          >
            {title}
          </motion.h2>
        )}

        {/* Video Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 25px rgba(96,165,250,0.25)",
          }}
          className="relative rounded-2xl overflow-hidden shadow-lg bg-[#1e293b] transition-all duration-300 border border-gray-700 hover:border-blue-500"
        >
          <div className="aspect-video w-full">
            {/* <iframe
              className="w-full h-full"
              src={videoUrl}
              title={title || "Demo Video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}
            <video
                className="w-full h-full"
                src={videoUrl}
                poster={thumbnail}
                controls
                // autoPlay
                muted
                loop
            />

          </div>

          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoPlayer;
