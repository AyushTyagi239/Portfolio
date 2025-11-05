import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBrain, FaInfinity, FaCogs, FaCloud } from "react-icons/fa";
import "./EndToEndSolutions.css";

const EndToEndSolutions = () => {
  const [hovered, setHovered] = useState(null);

  const services = [
    {
      id: 1,
      title: "Digital Transformation Consulting",
      icon: <FaBrain />,
      description:
        "Strategic roadmap development, technology assessment, and change management to ensure successful transformation.",
      points: [
        "Technology Roadmapping",
        "Process Automation",
        "Change Management",
        "Innovation Strategy",
      ],
    },
    {
      id: 2,
      title: "AI & Machine Learning",
      icon: <FaInfinity />,
      description:
        "Custom AI models, predictive analytics, and intelligent automation to drive business innovation.",
      points: [
        "Custom AI Models",
        "Predictive Analytics",
        "NLP Solutions",
        "Computer Vision",
      ],
    },
    {
      id: 3,
      title: "DevOps & CI/CD",
      icon: <FaCogs />,
      description:
        "End-to-end DevOps implementation with automated pipelines, containerization, and continuous deployment.",
      points: [
        "CI/CD Pipelines",
        "Containerization",
        "Automation",
        "Monitoring",
      ],
    },
    {
      id: 4,
      title: "Cloud Infrastructure",
      icon: <FaCloud />,
      description:
        "Cloud migration, optimization, and management across AWS, Azure, and Google Cloud platforms.",
      points: [
        "Cloud Migration",
        "Optimization",
        "Security Management",
        "Multi-Cloud Integration",
      ],
    },
  ];

  return (
    <section className="endtoend-wrapper">
      <h2 className="endtoend-title">
        END-TO-END <span>Solutions</span>
      </h2>

      <div className="endtoend-grid">
        {/* Row 1 */}
        <div className="grid-row">
          {services.slice(0, 2).map((service, index) => (
            <motion.div
              key={service.id}
              className={`endtoend-card ${
                hovered === service.id ? "active" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {hovered === service.id && (
                <ul className="points">
                  {service.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid-row">
          {services.slice(2, 4).map((service, index) => (
            <motion.div
              key={service.id}
              className={`endtoend-card ${
                hovered === service.id ? "active" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {hovered === service.id && (
                <ul className="points">
                  {service.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EndToEndSolutions;
