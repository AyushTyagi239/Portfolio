// src/data/healthcareData.js
const healthcareData = {
  title: "Healthcare",
  subtitle: "How AI enhances patient safety, staff efficiency, and emergency response in healthcare facilities.",

  overview: {
    heading: "How AI is used in Healthcare",
    content: `AI transforms healthcare delivery by providing real-time patient monitoring, optimizing staff allocation, and enhancing emergency response. From fall detection to patient movement tracking, AI ensures better care and operational efficiency.`,
    icon: "fas fa-hospital"
  },

  problems: {
    heading: "How AI Solves Major Healthcare Problems",
    points: [
      "Real-time fall detection reduces response time for critical patient incidents.",
      "Queue management optimizes staff allocation at service counters.",
      "Staff presence monitoring ensures adequate coverage in critical areas.",
      "Patient movement tracking enhances safety for high-risk individuals.",
    ],
    icon: "fas fa-stethoscope"
  },

  solutionsSection: {
    heading: "Our AI-Powered Solutions",
    description: "Explore our intelligent products designed to enhance patient safety, optimize staff efficiency, and improve emergency response in healthcare settings.",
    icon: "fas fa-lightbulb",
    solutions: [
      {
        id: 1,
        title: "Fall Detection",
        description: "Generate alerts when a person collapses to reduce response time and provide better care.",
        icon: "fas fa-user-fall",
        image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&h=350&fit=crop&auto=format"
      },
      {
        id: 2,
        title: "Queue Detection",
        description: "Generate alerts when queues form at counters to optimize staff allocation efficiently.",
        icon: "fas fa-user-clock",
        image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&h=350&fit=crop&auto=format"
      },
      {
        id: 3,
        title: "Staff Presence Monitoring",
        description: "Generate alerts when nurses/doctors/receptionists are not at designated places to ensure availability for patients.",
        icon: "fas fa-user-md",
        image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&h=350&fit=crop&auto=format"
      },
      {
        id: 4,
        title: "Patient Out of Bed Detection",
        description: "Generate alerts for crucial patients when they leave the bed to ensure proper care in ICUs and critical rooms.",
        icon: "fas fa-procedures",
        image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&h=350&fit=crop&auto=format"
      }
    ]
  },
};

export default healthcareData;