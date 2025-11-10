// src/data/hospitalityData.js
const hospitalityData = {
  title: "Hospitality",
  subtitle: "How AI enhances guest experiences, safety, and operational efficiency in hospitality.",

  overview: {
    heading: "How AI is used in Hospitality",
    content: `AI transforms hospitality by automating operations, enhancing guest safety, and providing seamless experiences. From smart parking to facial recognition entry, AI ensures efficient service delivery and proactive safety measures.`,
    icon: "fas fa-hotel"
  },

  problems: {
    heading: "How AI Solves Major Hospitality Problems",
    points: [
      "Automated parking management reduces guest wait times and improves space utilization.",
      "Queue detection optimizes staff allocation at reception and service counters.",
      "Facial recognition enables smooth, secure entry for pre-checked-in guests.",
      "Real-time safety monitoring prevents incidents and enhances guest security.",
    ],
    icon: "fas fa-concierge-bell"
  },

  solutionsSection: {
    heading: "Our AI-Powered Solutions",
    description: "Explore our intelligent products designed to optimize guest experiences, safety, and operational efficiency in hospitality.",
    icon: "fas fa-lightbulb",
    solutions: [
      {
        id: 1,
        title: "Parking Management",
        description: "Detection of cars/bikes in parking for easier and automated parking slot allocation.",
        icon: "fas fa-parking",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=350&fit=crop&auto=format"
      },
      {
        id: 2,
        title: "Queue Detection",
        description: "Detection of queues at reception to make work efficient by allotting more people at that counter.",
        icon: "fas fa-users",
        image: "https://images.unsplash.com/photo-1552422535-c45813c61732?w=500&h=350&fit=crop&auto=format"
      },
      {
        id: 3,
        title: "Facial Recognition Entry",
        description: "FR based entry of guests for smooth entry experience for guests who already checked in.",
        icon: "fas fa-user-check",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=350&fit=crop&auto=format"
      },
      {
        id: 4,
        title: "Smoke/Fire Detection",
        description: "Real-time alerts for such activities for prevention and safety enhancement.",
        icon: "fas fa-fire-extinguisher",
        image: "https://images.unsplash.com/photo-1567602901358-5ba17615aaeb?w=500&h=350&fit=crop&auto=format"
      },
      {
        id: 5,
        title: "Luggage Detection",
        description: "Object tracking and object left behind detection for authorities to act on.",
        icon: "fas fa-suitcase",
        image: "https://images.unsplash.com/photo-1583676361843-bf51c45c287d?w=500&h=350&fit=crop&auto=format"
      }
    ]
  },
};

export default hospitalityData;