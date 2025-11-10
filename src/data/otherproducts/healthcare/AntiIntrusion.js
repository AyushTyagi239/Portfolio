// src/data/healthcare/antiIntrusionData.js
// import AntiIntrusionImage from "../assets/healthcare/anti-intrusion.png";

export const antiIntrusionData = {
  title: "AI Staff Presence Monitoring System",

  intro: "Our AI-powered anti-intrusion and staff presence monitoring system ensures optimal healthcare delivery by tracking medical staff availability in critical areas. The system generates real-time alerts when nurses, doctors, or receptionists are not present at their designated stations, ensuring continuous patient care coverage and maintaining the highest standards of medical service delivery across healthcare facilities.",

  demoLink: "https://healthcare-demo.superaip.com/anti-intrusion",

  video: {
    title: "Staff Presence Monitoring Demo",
    thumbnail: "https://images.unsplash.com/photo-1584467735871-8db9ac8e5e3a?w=800&h=450&fit=crop&auto=format",
    videoUrl: "", // Add your video path when available
  },

  advantages: [
    "Real-time staff presence monitoring in critical care areas",
    "Instant alerts for unattended stations and patient care zones",
    "Automated compliance tracking for staff deployment protocols",
    "Reduced response time for patient calls and emergencies",
    "Comprehensive reporting for staff allocation optimization",
    "Integration with nurse call systems and emergency protocols"
  ],

  useCases: [
    {
      heading: "Intensive Care Units (ICUs)",
      items: [
        "Continuous monitoring of nursing station occupancy in critical care units",
        "Automatic alerts when ICU stations are unattended beyond threshold time",
        "Emergency response coordination through staff presence tracking",
      ],
    },
    {
      heading: "Emergency Rooms & Trauma Centers",
      items: [
        "Real-time monitoring of emergency department staff deployment",
        "Automatic escalation when key medical staff are not at designated positions",
        "Coordination between triage, treatment, and observation areas",
      ],
    },
    {
      heading: "Specialized Treatment Areas",
      items: [
        "Staff presence monitoring in operation theater preparation areas",
        "Dialysis unit and chemotherapy center staff availability tracking",
        "Mental health ward and isolation room staff supervision",
      ],
    },
  ],
  image: "https://images.unsplash.com/photo-1584467735871-8db9ac8e5e3a?w=600&h=400&fit=crop&auto=format"
};

export default antiIntrusionData;