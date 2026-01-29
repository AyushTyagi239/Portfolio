import gen_Ai_Image from "../assets/Industry/techs/AI_in_genai.webp";
import Ds_Image from "../assets/Industry/techs/AI_in_ds.webp";
import Vision_Image from "../assets/Industry/techs/Ai_in_vision.webp";

const hospitalityData = {
  title: "Hospitality",
  subtitle: "AI-powered guest experiences, operational efficiency, and safety solutions for hotels and resorts.",

  overview: {
    heading: "How AI is Revolutionizing Hospitality",
    content: `AI transforms the hospitality industry by delivering personalized guest experiences, optimizing operations, and ensuring safety. From dynamic pricing to automated guest services, AI enables hotels and resorts to provide exceptional service while maximizing efficiency and revenue.`,
    icon: "fas fa-hotel"
  },

  problems: {
    heading: "Key Hospitality Challenges Addressed by AI",
    points: [
      "Revenue optimization and dynamic pricing strategies",
      "Guest personalization and experience enhancement",
      "Operational efficiency and cost management",
      "Safety and security monitoring",
      "Staff optimization and queue management"
    ],
    icon: "fas fa-concierge-bell"
  },

  categories: [
    {
      name: "Data Science",
      technology: " ",
      image: Ds_Image,
      icon: "",
      useCases: [
        { name: "Dynamic Pricing & Revenue Optimization", live: false },
        { name: "Customer Segmentation & Personalization", live: false },
        { name: "Demand Forecasting", live: false },
        { name: "Churn & Retention Analysis", live: false },
        { name: "Operational Efficiency Analytics", live: false }
      ]
    },

    {
      name: "Neura Bot",
      technology: " ",
      image: gen_Ai_Image,
      icon: "",
      useCases: [
        { name: "Automated Guest Communication", live: false },
        { name: "Personalized Marketing Campaigns", live: false },
        { name: "Virtual Concierge Services", live: false },
        { name: "Menu or Experience Design", live: false },
        { name: "Automated Review Summarization", live: false }
      ]
    },

    {
      name: "Neura Eagle-AI",
      technology: " ",
      image: Vision_Image,
      icon: "",
      useCases: [
        { name: "Parking Management", live: true },
        { name: "Queue Detection", live: true },
        { name: "Face Recognition (FR)", live: true },
        { name: "Smoke/Fire Detection", live: true },
        { name: "Luggage Detection", live: true }
      ]
    }
  ]
};

export default hospitalityData;
