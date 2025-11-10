// src/data/hospitality/queueDetectionData.js
// import QueueDetectionImage from "../assets/hospitality/queue-detection.png";

export const queueDetectionData = {
  title: "AI Queue Management System",

  intro: "Our queue detection system automatically monitors waiting lines at reception desks, check-in counters, and service areas in hospitality venues. Using sophisticated computer vision algorithms, the system detects queue formation in real-time and alerts management to deploy additional staff, ensuring minimal wait times and enhanced guest satisfaction.",

  demoLink: "https://hospitality-demo.superaip.com/queue-detection",

  video: {
    title: "Queue Detection Demo",
    thumbnail: "https://images.unsplash.com/photo-1552422535-c45813c61732?w=800&h=450&fit=crop&auto=format",
    videoUrl: "",
  },

  advantages: [
    "Real-time queue length monitoring and analysis",
    "Automatic staff alerting for optimal resource allocation",
    "Reduced guest wait times by up to 60%",
    "Historical data for peak hour prediction and staffing",
    "Multi-counter monitoring across different service areas",
    "Guest satisfaction metrics and performance analytics"
  ],

  useCases: [
    {
      heading: "Hotel Reception & Check-in",
      items: [
        "Automated queue detection at front desk during check-in/check-out peaks",
        "Dynamic staff allocation based on real-time guest flow analysis",
        "Group booking and tour group queue management",
      ],
    },
    {
      heading: "Restaurant & Dining Areas",
      items: [
        "Waiting line monitoring at buffet counters and food stations",
        "Peak hour seating optimization through queue analysis",
        "Bar and lounge area crowd management",
      ],
    },
    {
      heading: "Service Counters & Concierge",
      items: [
        "Concierge desk queue management for tour bookings and inquiries",
        "Business center and facility access point monitoring",
        "Spa and wellness center appointment queue optimization",
      ],
    },
  ],
  image: "https://images.unsplash.com/photo-1552422535-c45813c61732?w=600&h=400&fit=crop&auto=format"
};

export default queueDetectionData;