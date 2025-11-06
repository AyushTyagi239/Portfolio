import React from "react";
import { FaUsers, FaShieldAlt, FaChartLine, FaClock } from "react-icons/fa";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const stats = [
    { icon: <FaUsers />, value: "500+", label: "Enterprise Clients" },
    { icon: <FaShieldAlt />, value: "99.9%", label: "Uptime SLA" },
    { icon: <FaChartLine />, value: "85%", label: "Cost Reduction" },
    { icon: <FaClock />, value: "24/7", label: "Expert Support" },
  ];

  return (
    <section className="why-choose-section">
      <div className="why-content">
        <h2 className="why-title">Why Choose Us?</h2>
        <p className="why-subtitle">
          We combine deep technical expertise with proven methodologies to
          deliver transformative results.
        </p>

        <div className="why-row">
          {stats.map((item, index) => (
            <div key={index} className="why-card">
              <div className="why-icon">{item.icon}</div>
              <h3 className="why-value">{item.value}</h3>
              <p className="why-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
