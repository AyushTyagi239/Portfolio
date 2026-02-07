import foodiesHub from "../../assets/portfolio/web/foodies-hub.webp";
import foodBuddy from "../../assets/portfolio/web/food-buddy.webp";
import sportsQuiz from "../../assets/portfolio/web/sports-quiz.webp";
import taskManager from "../../assets/portfolio/web/task-manager.webp";
import timerGame from "../../assets/portfolio/web/timer-challenge.webp";

export const websitesData = {
  title: "Websites & Web Apps",
  description:
    "Modern web applications built using React and Next.js.",

  projects: [
    {
      title: "Foodies Hub — Community Recipe Platform",
      image: foodiesHub,
      link: "https://www.linkedin.com/posts/ayush-tyagi-0a3694267_reactjs-nextjs-redux-activity-7351178835222040576-apfL",
      description:
        "A full-stack Next.js community platform for sharing recipes.",
      highlights: [
        "Next.js App Router",
        "Server Actions",
        "Image upload with preview",
      ],
      techStack: ["React", "Next.js", "Redux"],
    },

    {
      title: "Food Buddy — React Food Ordering App",
      image: foodBuddy,
      link: "https://www.linkedin.com/posts/ayush-tyagi-0a3694267_foodbuddy-reactjs-nextjs-activity-7347144619115036672-ujce",
      description:
        "A complete food ordering app built with React.",
      highlights: [
        "Context API & useReducer",
        "Dynamic cart system",
      ],
      techStack: ["React", "JavaScript"],
    },

    {
      title: "Sports Quiz App",
      image: sportsQuiz,
      link: "https://www.linkedin.com/posts/ayush-tyagi-0a3694267_reactjs-frontenddevelopment-codingportfolio-activity-7344675297537007616-Dt6g",
      description:
        "An interactive quiz app focused on advanced React state handling.",
      highlights: [
        "Effect cleanup",
        "Adaptive timers",
      ],
      techStack: ["React", "Hooks"],
    },

    {
      title: "React Task Manager",
      image: taskManager,
      link: "https://www.linkedin.com/posts/ayush-tyagi-0a3694267_reactjs-webdevelopment-frontenddevelopment-activity-7339286193592811520-BXoA",
      description:
        "A task and project management dashboard.",
      highlights: [
        "useState & useRef",
        "Custom modal validation",
      ],
      techStack: ["React", "Tailwind CSS"],
    },

    {
      title: "Timer Challenge Game",
      image: timerGame,
      link: "https://www.linkedin.com/posts/ayush-tyagi-0a3694267_reactjs-udemy-webdevelopment-activity-7337838472067461122-YA8x",
      description:
        "A timing-based React game focusing on refs and state.",
      highlights: [
        "Accuracy-based scoring",
        "Multiple difficulty levels",
      ],
      techStack: ["React", "useRef", "useState"],
    },
  ],
};
