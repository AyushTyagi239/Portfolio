// src/data/healthcare/queueDetectionData.js
// import QueueDetectionImage from "../assets/healthcare/queue-detection.png";

export const queueDetectionData = {
  title: "AI Queue Management System",

  intro: "Our intelligent queue detection system optimizes patient flow and staff allocation in healthcare facilities by automatically monitoring waiting areas and service counters. Using advanced computer vision, the system detects queue formation in real-time and alerts management to deploy additional staff, reducing patient wait times and improving overall operational efficiency while enhancing patient satisfaction.",

  demoLink: "https://healthcare-demo.superaip.com/queue-detection",

  video: {
    title: "Queue Detection Demo",
    thumbnail: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=450&fit=crop&auto=format",
    videoUrl: "", // Add your video path when available
  },

  advantages: [
    "Real-time queue length monitoring and analysis",
    "Automated staff alerting for optimal resource allocation",
    "Reduced patient wait times by up to 40%",
    "Historical data analytics for peak hour prediction",
    "Multi-counter monitoring across different departments",
    "Seamless integration with hospital management systems"
  ],

  useCases: [
    {
      heading: "Hospital Reception & Registration",
      items: [
        "Automatic queue detection at main reception and admission counters",
        "Dynamic staff allocation based on real-time patient flow analysis",
        "Wait time prediction and display for patient communication",
      ],
    },
    {
      heading: "Pharmacy & Billing Counters",
      items: [
        "Queue monitoring at pharmacy counters during peak medication hours",
        "Automated alerting for additional staff during prescription rush periods",
        "Billing counter optimization to reduce payment processing delays",
      ],
    },
    {
      heading: "Specialty Clinics & OPD Services",
      items: [
        "Department-specific queue management for different medical specialties",
        "Appointment scheduling optimization based on historical queue data",
        "Patient flow analysis between consultation, testing, and pharmacy areas",
      ],
    },
  ],
  image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop&auto=format"
};

export default queueDetectionData;