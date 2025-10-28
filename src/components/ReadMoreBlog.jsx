//NOT BEING USED RIGHT NOW

import React from "react";
import { motion } from "framer-motion";

const ReadMoreBlog = ({ data }) => {
  const { title, videoUrl, intro, advantages, useCases } = data;

  return (
    <main className="w-full min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden overflow-y-auto">
      {/* Title */}
      <section className="w-full px-6 md:px-10 pt-32 pb-12 bg-gradient-to-b from-white to-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight"
          >
            {title}
          </motion.h1>
        </div>
      </section>

      {/* Video */}
      <section className="w-full px-4 py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="aspect-video w-full bg-black">
              <iframe
                className="w-full h-full"
                src={videoUrl}
                title="Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="w-full px-8 py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
          >
            {intro}
          </motion.p>
        </div>
      </section>

      {/* Advantages */}
      <section className="w-full px-8 py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-semibold text-gray-800 mb-8"
          >
            Advantages
          </motion.h2>

          <ul className="list-disc pl-6 text-gray-700 space-y-4 text-lg">
            {advantages.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="marker:text-blue-500"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Use Cases */}
      <section className="w-full px-8 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-semibold text-gray-800 mb-12"
          >
            Use Cases
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10 text-left">
            {useCases.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-blue-100 pb-2">
                  {section.heading}
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg">
                  {section.items.map((item, i) => (
                    <li key={i} className="marker:text-blue-500">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ReadMoreBlog;
