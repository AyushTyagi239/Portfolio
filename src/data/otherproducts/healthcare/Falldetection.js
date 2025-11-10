// src/data/healthcare/fallDetectionData.js
// import FallDetectionImage from "../assets/healthcare/fall-detection.png";

export const fallDetectionData = {
  title: "AI Fall Detection System",

  intro: "Our advanced AI-powered fall detection system provides real-time monitoring and immediate alert generation when a person collapses or falls in healthcare facilities. Using sophisticated computer vision algorithms, the system detects fall incidents with high accuracy, significantly reducing response time and ensuring timely medical assistance for patients, especially the elderly and those with mobility issues.",

  demoLink: "https://healthcare-demo.superaip.com/fall-detection",

  video: {
    title: "Fall Detection Demo",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=450&fit=crop&auto=format",
    videoUrl: "", // Add your video path when available
  },

  advantages: [
    "Real-time fall detection with 99.2% accuracy",
    "Instant alert notifications to nursing staff and emergency response teams",
    "Reduced response time from minutes to seconds",
    "24/7 automated monitoring without human intervention",
    "Privacy-preserving analysis with no continuous recording",
    "Integration with existing hospital alert systems"
  ],

  useCases: [
    {
      heading: "Hospitals & Medical Centers",
      items: [
        "Continuous monitoring in elderly care wards and rehabilitation centers",
        "Fall detection in post-operative recovery rooms and general patient areas",
        "Emergency alert system for high-risk patients with mobility issues",
      ],
    },
    {
      heading: "Nursing Homes & Assisted Living",
      items: [
        "Automatic fall detection in resident rooms and common areas",
        "Reduced staff workload through automated monitoring systems",
        "Immediate assistance for residents during night hours and low-staff periods",
      ],
    },
    {
      heading: "Home Healthcare & Remote Monitoring",
      items: [
        "In-home fall detection for patients requiring constant supervision",
        "Remote alerting to family members and healthcare providers",
        "Integration with telemedicine platforms for immediate consultation",
      ],
    },
  ],
  image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&auto=format"
};

export default fallDetectionData;