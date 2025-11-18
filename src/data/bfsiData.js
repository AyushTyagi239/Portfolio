import gen_Ai_Image from "../assets/Industry/techs/AI_in_genai.png"
import Ds_Image from "../assets/Industry/techs/AI_in_ds.png"
import Vision_Image from "../assets/Industry/techs/Ai_in_vision.png"


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
      image: Ds_Image ,
      icon: "",
      useCases: [
        "Credit Risk Scoring",
        "Fraud Detection",
        "Customer Lifetime Value",
        "Portfolio Optimization",
        "Churn Prediction"
      ]
    },
    {
      name: "Generative AI",
      technology: " ",
      image: gen_Ai_Image,
      icon: "",
      useCases: [
        "Automated Report & Compliance",
        "AI Financial Advisors",
        "Fraud Case Narratives",
        "Personalized Communication",
        "Scenario Simulation"
      ]
    },
    {
      name: "Vision AI",
       technology: " ",
      image: Vision_Image,
      icon: "",
      useCases: [
        "Facial Recognition",
        "Loitering Detection",
        "Tampering Detection",
        "Violence Detection",
        "Intrusion Detection"
      ]
    }
  ]
};

export default bfsiData;