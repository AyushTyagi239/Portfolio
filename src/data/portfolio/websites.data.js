export const websitesData = {
  title: "Websites & Web Apps",
  description:
    "Modern web applications and interactive experiences built using React and Next.js, with a strong focus on clean UI, scalable state management, and real-world user interaction patterns.",

  sections: [
    {
      title: "Landing Pages",
      content:
        "Responsive, conversion-focused landing pages with modern layouts and animations.",
    },
    {
      title: "Dashboards",
      content:
        "Admin panels, analytics dashboards, and internal tools designed for clarity and scalability.",
    },
    {
      title: "Web Applications",
      content:
        "Interactive React and Next.js applications built with real-world flows, state management, and production-ready patterns.",
    },
  ],

  projects: [
    {
      title: "Foodies Hub — Community Recipe Platform",
      description:
        "A full-stack community platform built using the Next.js App Router, allowing users to share recipes, images, and food experiences through a clean and modern interface.",

      highlights: [
        "Dynamic routing and nested layouts using Next.js App Router",
        "Server & Client Components architecture",
        "Server Actions for form submissions",
        "Image upload with live preview",
        "UI feedback using useFormState() and useFormStatus()",
        "Cache handling with revalidatePath() for SSR correctness",
        "Error boundaries, loading states, and production-mode testing",
      ],

      techStack: [
        "React",
        "Next.js 13+",
        "Redux",
        "CSS Modules",
        "Server Actions",
      ],
    },

    {
      title: "Food Buddy — React Food Ordering App",
      description:
        "A complete food ordering web application built entirely from scratch to practice real-world React patterns, state management, and scalable component architecture.",

      highlights: [
        "Dynamic cart and checkout system",
        "State management using Context API and useReducer",
        "Custom hooks and side-effect handling",
        "HTTP request handling with simulated backend",
        "Scalable component structure for growing applications",
      ],

      techStack: [
        "React",
        "JavaScript",
        "Context API",
        "useReducer",
        "Custom Hooks",
      ],
    },

    {
      title: "Sports Quiz App — Advanced React State Management",
      description:
        "An interactive quiz application designed to strengthen React fundamentals around state, effects, component architecture, and timed interactions.",

      highlights: [
        "Dynamic answer highlighting and quiz flow",
        "Adaptive timers based on question difficulty",
        "Effect cleanup functions for stable behavior",
        "Component reset using keys",
        "Clean component splitting for maintainability",
        "Comprehensive results and performance dashboard",
      ],

      techStack: [
        "React",
        "JavaScript",
        "Hooks",
        "Component Architecture",
      ],
    },

    {
      title: "React Task Manager — Projects & Tasks Dashboard",
      description:
        "A task and project management application built to solidify React fundamentals and understand real-world UI interaction flows.",

      highlights: [
        "Create projects with title, description, and due date",
        "Dynamic project selection and task rendering",
        "Add and delete tasks within each project",
        "Real-time UI updates using useState and useRef",
        "Custom modal popup for validation and user feedback",
      ],

      techStack: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "JSX",
      ],
    },

    {
      title: "Timer Challenge Game — React Interaction Demo",
      description:
        "A lightweight web-based game built with React to practice precise state handling, refs, and real-time user interaction. Players attempt to stop a timer as close as possible to a selected target time.",

      highlights: [
        "Multiple difficulty levels (1s, 5s, 10s, 15s)",
        "Real-time timer logic with accuracy-based scoring",
        "Game-over handling when the timer exceeds the limit",
        "Clear separation between useRef (timing logic) and useState (UI state)",
        "Interactive feedback loop between user actions and game state",
      ],

      techStack: [
        "React",
        "JavaScript",
        "useState",
        "useRef",
        "Component-Based Architecture",
      ],
    },
  ],
};
