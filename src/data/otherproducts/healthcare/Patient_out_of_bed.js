// src/data/healthcare/patientOutOfBedData.js
// import PatientOutOfBedImage from "../assets/healthcare/patient-out-of-bed.png";

export const patientOutOfBedData = {
  title: "AI Patient Movement Monitoring System",

  intro: "Our advanced patient movement monitoring system provides real-time alerts when crucial patients leave their beds without assistance, particularly in ICUs, post-operative wards, and high-dependency units. Using non-intrusive computer vision technology, the system ensures patient safety by immediately notifying medical staff of unauthorized movements, preventing falls, and ensuring proper care for vulnerable patients.",

  demoLink: "https://healthcare-demo.superaip.com/patient-monitoring",

  video: {
    title: "Patient Movement Monitoring Demo",
    thumbnail: "https://images.unsplash.com/photo-1516549655669-df66514e35b7?w=800&h=450&fit=crop&auto=format",
    videoUrl: "", // Add your video path when available
  },

  advantages: [
    "Real-time patient movement detection with 98.7% accuracy",
    "Immediate alerts for unauthorized bed exits in critical care areas",
    "Reduced fall incidents and associated complications",
    "24/7 automated monitoring without disturbing patient rest",
    "Privacy-compliant monitoring with minimal data retention",
    "Integration with nurse call systems and mobile alerts"
  ],

  useCases: [
    {
      heading: "Intensive Care Units (ICUs)",
      items: [
        "Continuous monitoring of critically ill patients requiring constant supervision",
        "Immediate alerts for post-surgery patients attempting to leave beds prematurely",
        "Ventilator and life-support patient movement detection",
      ],
    },
    {
      heading: "Elderly Care & Geriatric Wards",
      items: [
        "Fall prevention through early detection of unsupervised bed exits",
        "Monitoring of dementia and disoriented patients during night hours",
        "Reduced restraint usage through intelligent movement monitoring",
      ],
    },
    {
      heading: "Post-operative & Recovery Wards",
      items: [
        "Monitoring of patients recovering from anesthesia and major surgeries",
        "Detection of early mobilization attempts without proper assistance",
        "High-risk patient supervision with mobility restrictions",
      ],
    },
  ],
  image: "https://images.unsplash.com/photo-1516549655669-df66514e35b7?w=600&h=400&fit=crop&auto=format"
};

export default patientOutOfBedData;