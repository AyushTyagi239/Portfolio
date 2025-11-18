import gen_Ai_Image from "../assets/Industry/techs/AI_in_genai.png"
import Ds_Image from "../assets/Industry/techs/AI_in_ds.png"
import Vision_Image from "../assets/Industry/techs/Ai_in_vision.png"


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
        "Predictive Diagnostics",
        "Patient Risk Stratification",
        "Operational & Bed Forecasting",
        "Drug Effectiveness Analysis",
        "Fraud Detection"
      ]
    },
    {
      name: "Generative AI",
      technology: " ",
      image: gen_Ai_Image,
      icon: "",
      useCases: [
        "Medical Documentation Automation",
        "Synthetic Data Generation",
        "Clinical Decision Support",
        "Medical Image Interpretation Aid",
        "Patient Communication Bots"
      ]
    },
    {
      name: "Vision AI",
      technology: " ",
      image: Vision_Image,
      icon: "",
      useCases: [
        "Fall Detection",
        "Queue Detection",
        "Anti-Intrusion",
        "Patient Out of Bed"
      ]
    }
  ]
};

export default healthcareData;