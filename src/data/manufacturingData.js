import gen_Ai_Image from "../assets/Industry/techs/AI_in_genai.webp";
import Ds_Image from "../assets/Industry/techs/AI_in_ds.webp";
import Vision_Image from "../assets/Industry/techs/Ai_in_vision.webp";

const manufacturingData = {
  title: "Manufacturing",
  subtitle: "How AI transforms production, quality, and supply chain across modern factories.",

  overview: {
    heading: "How AI is used in Manufacturing",
    content: `AI enables smarter, faster, and more efficient factory operations. From predictive maintenance to intelligent robotics, AI helps manufacturers reduce downtime, enhance product quality, and optimize every stage of production.`,
    icon: "fas fa-industry"
  },

  problems: {
    heading: "How AI Solves Major Manufacturing Problems",
    points: [
      "Predictive analytics reduces unplanned downtime and improves equipment reliability.",
      "Computer vision enhances quality inspection and minimizes human error.",
      "AI-driven forecasting balances production with demand in real time.",
      "Intelligent automation lowers energy consumption and production costs.",
    ],
    icon: "fas fa-tools"
  },

  categories: [
    {
      name: "Data Science",
      technology: " ",       // ✔ your original value
      image: Ds_Image,
      icon: "",
      useCases: [
        { name: "Tender Analysis", live: true },
        { name: "Predictive Maintenance", live: false },
        { name: "Demand Forecasting", live: false },
        { name: "Quality Control & Defect Detection", live: false },
        { name: "Resource Allocation Optimization", live: false },
        { name: "Supply Chain Optimization", live: false }
      ]
    },

    {
      name: "Generative AI",
      technology: " ",
      image: gen_Ai_Image,
      icon: "",
      useCases: [
        { name: "Automated Report Generation", live: false },
        { name: "Digital Twin Modeling", live: false },
        { name: "AI-Based Training Simulations", live: false },
        { name: "Visual Design Generation", live: false },
        { name: "Root Cause Analysis Assistant", live: false }
      ]
    },

    {
      name: "Vision AI",
      technology: " ",
      image: Vision_Image,
      icon: "",
      useCases: [
        { name: "ANPR System", live: false },
        { name: "Object Counting", live: false },
        { name: "PPE Detection", live: false },
        { name: "Cross Camera Tracking", live: false }
      ]
    }
  ]
};

export default manufacturingData;
