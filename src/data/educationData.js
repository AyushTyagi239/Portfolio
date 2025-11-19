import gen_Ai_Image from "../assets/Industry/techs/AI_in_genai.webp"
import Ds_Image from "../assets/Industry/techs/AI_in_ds.webp"
import Vision_Image from "../assets/Industry/techs/AI_in_ds.webp"

const educationData = {
  title: "Education",
  subtitle: "AI-enhanced learning environments, safety systems, and administrative efficiency for educational institutions.",

  overview: {
    heading: "How AI is Transforming Education",
    content: `AI empowers educational institutions with personalized learning, enhanced safety, and operational efficiency. From adaptive learning systems to campus security, AI creates smarter, safer, and more engaging educational experiences for students and educators alike.`,
    icon: "fas fa-graduation-cap"
  },

  problems: {
    heading: "Key Educational Challenges Addressed by AI",
    points: [
      "Personalized learning and student performance tracking",
      "Campus safety and security monitoring",
      "Resource allocation and administrative efficiency",
      "Curriculum effectiveness and teaching quality",
      "Student engagement and retention"
    ],
    icon: "fas fa-book"
  },

  categories: [
    {
      name: "Data Science",
      technology: " ",
      image: Ds_Image,
      icon: "",
      useCases: [
        "Student Performance Prediction",
        "Adaptive Learning Systems",
        "Resource Allocation",
        "Enrollment Forecasting",
        "Curriculum Effectiveness"
      ]
    },
    {
      name: "Generative AI",
      technology: " ",
      image: gen_Ai_Image,
      icon: "",
      useCases: [
        "Automated Content Creation",
        "Tutoring Assistants",
        "Academic Writing Support",
        "Virtual Campus Guides",
        "Lesson & Course Design"
      ]
    },
    {
      name: "Vision AI",
      technology: " ",
      image: Vision_Image,
      icon: "",
      useCases: [
        "Facial Recognition",
        "Intrusion Detection",
        "Weapon Detection",
        "Violence Detection",
        "Overcrowding Detection"
      ]
    }
  ]
};

export default educationData;