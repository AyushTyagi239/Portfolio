import React from "react";
import { motion } from "framer-motion";
import { Calendar, MessageSquare, FileText, Rocket } from "lucide-react";

const steps = [
  {
    icon: <MessageSquare className="w-10 h-10 text-blue-400" />,
    title: "1. Contact Us",
    description:
      "Fill out the contact form protected by NDA, book a calendar and schedule a Zoom meeting with our team.",
  },
  {
    icon: <Calendar className="w-10 h-10 text-blue-400" />,
    title: "2. Get a Consultation",
    description:
      "Get on a call with our team to understand the feasibility of your project idea and discuss your goals.",
  },
  {
    icon: <FileText className="w-10 h-10 text-blue-400" />,
    title: "3. Get a Cost Estimate",
    description:
      "Based on your project requirements, we’ll share a detailed project proposal with budget and timeline.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-blue-400" />,
    title: "4. Project Kickoff",
    description:
      "Once the project is signed, we assemble a skilled team from various disciplines to kickstart your project.",
  },
];

// Animation variants for smooth staggered load
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const GetStartedSection = () => {
  return (
    <section className="w-full py-20 px-6 md:px-10 bg-transparent border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-14"
        >
          Get Started Today
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                borderColor: "#3b82f6",
                boxShadow: "0 0 25px rgba(96,165,250,0.25)",
              }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="bg-[#1e293b] border border-gray-700 rounded-2xl p-8 flex flex-col items-center text-center 
                         transition-all duration-200 ease-out hover:text-white will-change-transform"
            >
              <div className="mb-5">{step.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GetStartedSection;
