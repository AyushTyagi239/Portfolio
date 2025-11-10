// src/data/hospitality/parkingManagementData.js
// import ParkingManagementImage from "../assets/hospitality/parking-management.png";

export const parkingManagementData = {
  title: "AI Parking Management System",

  intro: "Our intelligent parking management system uses advanced computer vision to automatically detect and monitor cars and bikes in parking areas. The system provides real-time parking space allocation, optimizes vehicle flow, and enhances guest experience by reducing search time for parking spots. Perfect for hotels, resorts, and large hospitality venues with high vehicle traffic.",

  demoLink: "https://hospitality-demo.superaip.com/parking-management",

  video: {
    title: "Parking Management Demo",
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=450&fit=crop&auto=format",
    videoUrl: "",
  },

  advantages: [
    "Real-time vehicle detection and counting with 99.1% accuracy",
    "Automated parking space allocation and guidance",
    "Reduced vehicle search time by up to 70%",
    "License plate recognition for VIP and registered guests",
    "Peak hour traffic flow optimization",
    "Integration with hotel management systems"
  ],

  useCases: [
    {
      heading: "Luxury Hotels & Resorts",
      items: [
        "Automated VIP guest parking allocation with license plate recognition",
        "Valet parking optimization through real-time space monitoring",
        "Event parking management for conferences and weddings",
      ],
    },
    {
      heading: "Restaurant & Entertainment Venues",
      items: [
        "Real-time parking availability display for incoming guests",
        "Peak dining hour parking flow management",
        "Reserved parking for regular customers and loyalty members",
      ],
    },
    {
      heading: "Conference Centers & Event Spaces",
      items: [
        "Large-scale event parking with automated space counting",
        "Multiple entry/exit point coordination",
        "Temporary parking allocation for special events",
      ],
    },
  ],
  image:  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&auto=format"
};

export default parkingManagementData;