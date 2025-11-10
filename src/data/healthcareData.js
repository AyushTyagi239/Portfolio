// src/data/healthcareData.js
const healthcareData = {
  title: "Healthcare",
  subtitle: "How AI enhances patient care, medical diagnosis, and healthcare operations.",

  overview: {
    heading: "How AI is used in Healthcare",
    content: `AI is revolutionizing healthcare by improving diagnostic accuracy, personalizing treatment plans, and optimizing hospital operations. From medical imaging analysis to drug discovery, AI helps healthcare providers deliver better patient outcomes more efficiently.`,
    icon: "fas fa-heartbeat"
  },

  problems: {
    heading: "How AI Solves Major Healthcare Problems",
    points: [
      "AI-powered diagnostic tools detect diseases earlier and with higher accuracy.",
      "Predictive analytics help prevent hospital readmissions and optimize resource allocation.",
      "Natural language processing automates medical documentation and reduces administrative burden.",
      "Machine learning accelerates drug discovery and clinical trial optimization.",
    ],
    icon: "fas fa-stethoscope"
  },

  solutionsSection: {
    heading: "Our AI-Powered Solutions",
    description: "Discover our healthcare solutions designed to improve patient care, enhance diagnostics, and streamline medical operations.",
    icon: "fas fa-lightbulb",
    solutions: [
      {
        id: 1,
        title: "Medical Imaging Analysis",
        description: "AI systems that analyze X-rays, MRIs, and CT scans with radiologist-level accuracy.",
        icon: "fas fa-x-ray",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=350&fit=crop&auto=format"
      },
      {
        id: 2,
        title: "Predictive Patient Monitoring",
        description: "Real-time monitoring systems that predict health deterioration and alert medical staff proactively.",
        icon: "fas fa-heart",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=350&fit=crop&auto=format"
      },
      {
        id: 3,
        title: "Intelligent Electronic Health Records",
        description: "AI-powered EHR systems that automate documentation and provide clinical decision support.",
        icon: "fas fa-file-medical",
        image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=500&h=350&fit=crop&auto=format"
      }
    ]
  },
};

export default healthcareData;