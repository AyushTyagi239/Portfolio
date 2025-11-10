// src/data/educationData.js
const educationData = {
  title: "Education",
  subtitle: "How AI enhances campus safety, attendance tracking, and student monitoring in educational institutions.",

  overview: {
    heading: "How AI is used in Education",
    content: `AI revolutionizes educational institutions by automating administrative tasks, enhancing campus security, and ensuring student safety. From automated attendance to real-time threat detection, AI creates safer and more efficient learning environments.`,
    icon: "fas fa-graduation-cap"
  },

  problems: {
    heading: "How AI Solves Major Education Problems",
    points: [
      "Automated attendance tracking saves crucial instructional time.",
      "Real-time intrusion detection secures sensitive campus areas.",
      "Weapon and violence detection prevents potential threats proactively.",
      "Overcrowding monitoring ensures campus safety and proper supervision.",
    ],
    icon: "fas fa-book"
  },

  solutionsSection: {
    heading: "Our AI-Powered Solutions",
    description: "Explore our intelligent products designed to enhance campus safety, automate processes, and ensure secure learning environments.",
    icon: "fas fa-lightbulb",
    solutions: [
      {
        id: 1,
        title: "Automated Attendance",
        description: "Facial recognition to automate attendance and entry of students, saving crucial time while marking attendance.",
        icon: "fas fa-user-check",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=350&fit=crop&auto=format"
      },
      {
        id: 2,
        title: "Intrusion Detection",
        description: "Generate alerts when sensitive areas are accessed - authorities can take action in real time.",
        icon: "fas fa-shield-alt",
        image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=500&h=350&fit=crop&auto=format"
      },
      {
        id: 3,
        title: "Weapon Detection",
        description: "Detect pulling out weapons in crucial areas - authorities can take immediate action.",
        icon: "fas fa-ban",
        image: "https://images.unsplash.com/photo-1587334892137-1aafc787984e?w=500&h=350&fit=crop&auto=format"
      },
      {
        id: 4,
        title: "Violence Detection",
        description: "Detect creating nuisance in crucial areas - authorities can intervene in real time.",
        icon: "fas fa-exclamation-triangle",
        image: "https://images.unsplash.com/photo-1551524164-6caac0541cc7?w=500&h=350&fit=crop&auto=format"
      },
      {
        id: 5,
        title: "Overcrowding Detection",
        description: "Generate alerts when students form crowds so authorities can act immediately.",
        icon: "fas fa-users",
        image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500&h=350&fit=crop&auto=format"
      }
    ]
  },
};

export default educationData;