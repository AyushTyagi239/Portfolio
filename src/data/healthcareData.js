import gen_Ai_Image from "../assets/Industry/techs/AI_in_genai.webp";
import Ds_Image from "../assets/Industry/techs/AI_in_ds.webp";
import Vision_Image from "../assets/Industry/techs/Ai_in_vision.webp";

const healthcareData = {
  title: "Healthcare",
  subtitle: "AI-powered solutions for enhanced patient care, safety, and operational efficiency.",

  overview: {
    heading: "How AI is Transforming Healthcare",
    content: `AI revolutionizes healthcare delivery by enabling early diagnosis, personalized treatment, and operational excellence. From predictive analytics to automated monitoring, AI enhances patient outcomes while optimizing healthcare resources.`,
    icon: "fas fa-heartbeat"
  },

  problems: {
    heading: "Key Healthcare Challenges Addressed by AI",
    points: [
      "Early disease detection and preventive care management",
      "Patient safety monitoring and fall prevention",
      "Hospital operational efficiency and resource optimization",
      "Medical documentation burden and administrative workload",
      "Healthcare fraud detection and prevention"
    ],
    icon: "fas fa-stethoscope"
  },

  categories: [
    {
      name: "Data Science",
      technology: " ",
      image: Ds_Image,
      icon: "",
      useCases: [
        { name: "Predictive Diagnostics", live: false },
        { name: "Patient Risk Stratification", live: false },
        { name: "Operational & Bed Forecasting", live: false },
        { name: "Drug Effectiveness Analysis", live: false },
        { name: "Fraud Detection", live: false }
      ]
    },

    {
      name: "Generative AI",
      technology: " ",
      image: gen_Ai_Image,
      icon: "",
      useCases: [
        { name: "Medical Documentation Automation", live: false },
        { name: "Synthetic Data Generation", live: false },
        { name: "Clinical Decision Support", live: false },
        { name: "Medical Image Interpretation Aid", live: false },
        { name: "Patient Communication Bots", live: false }
      ]
    },

    {
      name: "Vision AI",
      technology: " ",
      image: Vision_Image,
      icon: "",
      useCases: [
        { name: "Fall Detection", live: false },
        { name: "Queue Detection", live: false },
        { name: "Anti-Intrusion", live: false },
        { name: "Patient Out of Bed", live: false }
      ]
    }
  ]
};

export default healthcareData;
