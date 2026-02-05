// Import all images
import manufacturingImg from '../assets/Industry/Manufacturing.webp';
import healthcareImg from '../assets/Industry/Hospital.webp';
import bfsiImg from '../assets/Industry/Finance.webp';
import educationImg from '../assets/Industry/Education.webp';
import hospitalityImg from '../assets/Industry/HOSPITALITY.webp';

export const useCaseData = [
  {
    id: 1,
    title: "AI & LLM Systems",
    description:
      "End-to-end AI systems including LLMs, RAG-based chatbots, agentic workflows, prompt engineering, and production-ready AI deployments.",
    image: manufacturingImg,
    demoLink: "/demo/ai-solutions",
    readMoreLink: "/portfolio/ai-solutions",
  },
  {
    id: 2,
    title: "Professional Resume",
    description:
      "Role-focused resumes tailored for Software Developer, Full Stack Developer, and Game Developer positions, optimized for ATS and recruiter screening.",
    image: healthcareImg,
    demoLink: "/resume",
    readMoreLink: "/portfolio/resume",
  },
  {
    id: 3,
    title: "Web Applications",
    description:
      "High-performance web applications built using React, Next.js, modern UI systems, animations, and scalable frontend architectures.",
    image: bfsiImg,
    demoLink: "/demo/websites",
    readMoreLink: "/portfolio/websites",
  },
  {
    id: 4,
    title: "Game Development & Design",
    description:
      "2D and 3D games developed in Unity with a strong focus on gameplay mechanics, level design, performance optimization, and player experience.",
    image: educationImg,
    demoLink: "/demo/game-dev",
    readMoreLink: "/portfolio/game-dev",
  },
  {
    id: 5,
    title: "Articles & Insights",
    description:
      "Technical articles and LinkedIn-style posts where I share learnings, project breakdowns, AI concepts, and real-world engineering insights.",
    image: hospitalityImg,
    demoLink: "/blogs",
    readMoreLink: "/portfolio/articles",
  },
];
