import gen_Ai_Image from "../assets/Industry/techs/AI_in_genai.webp";
import Ds_Image from "../assets/Industry/techs/AI_in_ds.webp";
import Vision_Image from "../assets/Industry/techs/Ai_in_vision.webp";
import { tr } from "framer-motion/client";

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
      name: "AI Unnati Lab",
      technology: " ",
      image: Ds_Image,
      icon: "",
      useCases: [
        { name: "Student Performance Prediction", live: true},
        { name: "Adaptive Learning Systems", live: true },
        { name: "Resource Allocation", live: true },
        { name: "Enrollment Forecasting", live: true},
        { name: "Curriculum Effectiveness", live: true }
      ]
    },

    {
      name: "Neura Bot",
      technology: " ",
      image: gen_Ai_Image,
      icon: "",
      useCases: [
        { name: "Digital Library", live: false },
        { name: "Tutoring Assistants", live: false },
        { name: "Student co-pilot", live: true },
        { name: "Virtual Campus Guides", live: false },
        { name: "Lesson & Course Design", live: false }
      ]
    },

    {
      name: "Neura Eagle-AI",
      technology: " ",
      image: Vision_Image,
      icon: "",
      useCases: [
        { name: "Facial Recognition", live: true },
        { name: "Intrusion Detection", live: true },
        { name: "Check-in- out ", live: true },
        { name: "Weapon Detection", live: true },
        { name: "Violence Detection", live: true },
        { name: "Overcrowding Detection", live: true }
      ]
    }
  ]
};

export default educationData;
