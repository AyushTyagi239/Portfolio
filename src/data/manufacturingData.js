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

  // CORRECTED: Categories with proper structure
  categories: [
    {
      name: "Data Science Use Cases",
      technology: "Data Science",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=500&fit=crop&auto=format",
      icon: "📊",
      useCases: [
        "Predictive Maintenance",
        "Demand Forecasting", 
        "Quality Control & Defect Detection",
        "Resource Allocation Optimization",
        "Supply Chain Optimization"
      ]
    },
    {
      name: "Generative AI Use Cases",
      technology: "Generative AI",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=500&fit=crop&auto=format",
      icon: "🤖",
      useCases: [
        "Automated Report Generation",
        "Digital Twin Modeling",
        "AI-Based Training Simulations",
        "Visual Design Generation",
        "Root Cause Analysis Assistant"
      ]
    },
    {
      name: "Vision AI Use Cases",
      technology: "Vision AI", 
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=500&h=500&fit=crop&auto=format",
      icon: "👁️",
      useCases: [
        "ANPR System",
        "Object Counting",
        "PPE Detection",
        "Cross Camera Tracking"
      ]
    }
  ]
};

export default manufacturingData;