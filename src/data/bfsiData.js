import gen_Ai_Image from "../assets/Industry/techs/AI_in_genai.webp";
import Ds_Image from "../assets/Industry/techs/AI_in_ds.webp";
import Vision_Image from "../assets/Industry/techs/Ai_in_vision.webp";

const bfsiData = {
  title: "Banking & Financial Services",
  subtitle: "AI-driven security, compliance, and customer experience solutions for financial institutions.",

  overview: {
    heading: "How AI is Revolutionizing Banking & Finance",
    content: `AI transforms financial services through enhanced security, personalized customer experiences, and automated compliance. From fraud detection to intelligent investment advice, AI enables smarter, safer, and more efficient financial operations.`,
    icon: "fas fa-chart-line"
  },

  problems: {
    heading: "Key Financial Challenges Addressed by AI",
    points: [
      "Real-time fraud detection and prevention",
      "Credit risk assessment and loan approval automation",
      "Regulatory compliance and reporting requirements",
      "Customer retention and personalized service delivery",
      "Branch security and ATM safety concerns"
    ],
    icon: "fas fa-shield-alt"
  },

  categories: [
    {
      name: "Data Science",
      technology: " ",
      image: Ds_Image,
      icon: "",
      useCases: [
        { name: "Credit Risk Scoring", live: false },
        { name: "Fraud Detection", live: false },
        { name: "Customer Lifetime Value", live: false },
        { name: "Portfolio Optimization", live: false },
        { name: "Churn Prediction", live: false }
      ]
    },

    {
      name: "NeuraBot",
      technology: " ",
      image: gen_Ai_Image,
      icon: "",
      useCases: [
        { name: "Automated Report & Compliance", live: false },
        { name: "AI Financial Advisors", live: false },
        { name: "Fraud Case Narratives", live: false },
        { name: "Personalized Communication", live: false },
        { name: "Scenario Simulation", live: false }
      ]
    },

    {
      name: "NeuraEagleI",
      technology: " ",
      image: Vision_Image,
      icon: "",
      useCases: [
        { name: "Facial Recognition", live: true },
        { name: "Loitering Detection", live: true },
        { name: "Tampering Detection", live: true },
        { name: "Violence Detection", live: true },
        { name: "Intrusion Detection", live: true }
      ]
    }
  ]
};

export default bfsiData;
