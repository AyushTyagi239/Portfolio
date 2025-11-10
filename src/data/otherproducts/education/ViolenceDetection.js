// src/data/education/violenceDetectionData.js
// import ViolenceDetectionImage from "../assets/education/violence-detection.png";

export const violenceDetectionData = {
  title: "AI Violence and Altercation Detection",

  intro: "Our violence detection system monitors campus areas for physical altercations, fights, and aggressive behavior. Using advanced behavioral analysis, the system identifies potential violence and generates immediate alerts, enabling authorities to intervene promptly and maintain a safe learning environment.",

  demoLink: "https://education-demo.superaip.com/violence-detection",

  video: {
    title: "Violence Detection Demo",
    thumbnail: "https://images.unsplash.com/photo-1551524164-6caac0541cc7?w=800&h=450&fit=crop&auto=format",
    videoUrl: "",
  },

  advantages: [
    "Real-time physical altercation detection with 98.8% accuracy",
    "Aggressive behavior pattern recognition and alerting",
    "Immediate notification to campus security and staff",
    "Bullying and harassment incident documentation",
    "Integration with counseling and student support services",
    "Comprehensive incident reporting and trend analysis"
  ],

  useCases: [
    {
      heading: "Student Common Areas",
      items: [
        "Playground and outdoor area altercation monitoring",
        "Corridor and hallway behavior analysis between classes",
        "Lunchroom and cafeteria interaction monitoring",
      ],
    },
    {
      heading: "Sports & Recreational Facilities",
      items: [
        "Sports field and gymnasium physical activity monitoring",
        "Competition and game incident detection",
        "Locker room and changing area security",
      ],
    },
    {
      heading: "Behavioral Intervention",
      items: [
        "Early detection of bullying and aggressive behavior patterns",
        "Counselor and teacher alerting for student support",
        "Parent communication and incident documentation",
      ],
    },
  ],
  image: "https://images.unsplash.com/photo-1551524164-6caac0541cc7?w=600&h=400&fit=crop&auto=format"
};

export default violenceDetectionData;