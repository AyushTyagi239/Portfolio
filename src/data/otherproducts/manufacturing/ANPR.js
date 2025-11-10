// src/data/manufacturing/anprData.js
// import ANPRImage from "../assets/manufacturing/anpr.png";

export const anprData = {
  title: "AI ANPR System for Manufacturing",

  intro: "Our Automatic Number Plate Recognition system provides comprehensive vehicle tracking and monitoring for manufacturing facilities. The system automates shipment tracking, monitors vehicle movements, and enhances security by recognizing and logging all vehicles entering and exiting the premises, ensuring efficient logistics operations and complete supply chain visibility.",

  demoLink: "https://manufacturing-demo.superaip.com/anpr",

  video: {
    title: "ANPR System Demo",
    thumbnail: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=450&fit=crop&auto=format",
    videoUrl: "",
  },

  advantages: [
    "Automatic number plate recognition with 99.3% accuracy",
    "Real-time shipment tracking and vehicle monitoring",
    "Automated gate access control and logging",
    "Integration with inventory and logistics systems",
    "24/7 vehicle movement monitoring and reporting",
    "Enhanced security through unauthorized vehicle detection"
  ],

  useCases: [
    {
      heading: "Shipping & Receiving Docks",
      items: [
        "Automated truck recognition at loading bay entry and exit points",
        "Shipment verification through license plate matching with orders",
        "Supplier and carrier vehicle tracking and performance monitoring",
      ],
    },
    {
      heading: "Factory Gate Security",
      items: [
        "Employee and visitor vehicle access control",
        "Unauthorized vehicle detection and alerting",
        "Parking allocation and space management for staff vehicles",
      ],
    },
    {
      heading: "Logistics & Supply Chain",
      items: [
        "Raw material delivery vehicle tracking and scheduling",
        "Finished goods dispatch monitoring and verification",
        "Third-party logistics provider performance analytics",
      ],
    },
  ],
  image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop&auto=format"
};

export default anprData;