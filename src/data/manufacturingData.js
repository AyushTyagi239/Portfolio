// src/data/manufacturingData.js
const manufacturingData = {
  title: "Manufacturing",
  subtitle: "How AI transforms production, quality, and supply chain across modern factories.",

  overview: {
    heading: "How AI is used in Manufacturing",
    content: `AI enables smarter, faster, and more efficient factory operations. From predictive maintenance to intelligent robotics, AI helps manufacturers reduce downtime, enhance product quality, and optimize every stage of production.`,
    icon: "fas fa-industry"
  },

  problems: {
    heading: "How AI Solves Major Manufacturing Problems",
    points: [
      "Predictive analytics reduces unplanned downtime and improves equipment reliability.",
      "Computer vision enhances quality inspection and minimizes human error.",
      "AI-driven forecasting balances production with demand in real time.",
      "Intelligent automation lowers energy consumption and production costs.",
    ],
    icon: "fas fa-tools"
  },

  solutionsSection: {
    heading: "Our AI-Powered Solutions",
    description: "Explore our intelligent products designed to optimize production, maintenance, and decision-making in manufacturing environments.",
    icon: "fas fa-lightbulb",
    solutions: [
      {
        id: 1,
        title: "ANPR System",
        description: "Number plate based entry and exit monitoring of shipments for tracking and matching while shipping, to track number of objects in trucks.",
        icon: "fas fa-car",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&h=350&fit=crop&auto=format"
      },
      {
        id: 2,
        title: "Object Counting",
        description: "Counting objects over conveyor belts and during loading in trucks to track count of manufactured and shipped goods, including defective items detection.",
        icon: "fas fa-cubes",
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=500&h=350&fit=crop&auto=format"
      },
      {
        id: 3,
        title: "PPE Detection",
        description: "Detection of safety equipment while working with machines to ensure safety compliance is properly adhered to.",
        icon: "fas fa-hard-hat",
        image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=500&h=350&fit=crop&auto=format"
      },
      {
        id: 4,
        title: "Cross Camera Tracking",
        description: "Tracking of objects and people across the factory vicinity for optimizing factory floors and operations.",
        icon: "fas fa-video",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop&auto=format"
      }
    ]
  },
};

export default manufacturingData;