import gen_Ai_Image from "../assets/Industry/techs/AI_in_genai.png"
import Ds_Image from "../assets/Industry/techs/AI_in_ds.png"
import Vision_Image from "../assets/Industry/techs/Ai_in_vision.png"


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
      image:Ds_Image,
      icon: "",
      useCases: [
        "Dynamic Pricing & Revenue Optimization",
        "Customer Segmentation & Personalization",
        "Demand Forecasting",
        "Churn & Retention Analysis",
        "Operational Efficiency Analytics"
      ]
    },
    {
      name: "Generative AI",
      technology: " ",
      image: gen_Ai_Image,
      icon: "",
      useCases: [
        "Automated Guest Communication",
        "Personalized Marketing Campaigns",
        "Virtual Concierge Services",
        "Menu or Experience Design",
        "Automated Review Summarization"
      ]
    },
    {
      name: "Vision AI",
      technology: " ",
      image: Vision_Image,
      icon: "",
      useCases: [
        "Parking Management",
        "Queue Detection",
        "Face Recognition (FR)",
        "Smoke/Fire Detection",
        "Luggage Detection"
      ]
    }
  ]
};

export default hospitalityData;