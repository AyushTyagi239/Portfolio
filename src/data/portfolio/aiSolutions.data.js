import aiHero from "../assets/portfolio/ai/ai-hero.webp";
import ragBot from "../assets/projects/rag-bot.webp";
import vision from "../assets/projects/vision-ai.webp";

export const aiSolutionsData = {
  title: "AI Solutions",
  description:
    "End-to-end AI systems including LLMs, RAG-based chatbots, agentic workflows, and vision intelligence.",

  heroImage: aiHero,

  sections: [
    {
      title: "LLM & RAG Systems",
      content:
        "Design and deployment of production-grade LLM pipelines with vector databases and retrieval strategies."
    },
    {
      title: "Agentic Workflows",
      content:
        "Autonomous agents capable of planning, tool usage, and multi-step reasoning."
    },
    {
      title: "AI Vision",
      content:
        "Real-time camera analytics, detection, tracking, and event intelligence."
    }
  ],

  projects: [
    {
      name: "Inventory RAG Chatbot",
      image: ragBot,
      linkedin: "https://linkedin.com/your-post",
      live: "https://my-rag-bot-iota.vercel.app"
    },
    {
      name: "AI Vision Monitoring",
      image: vision,
      linkedin: "https://linkedin.com/your-post",
      live: null
    }
  ]
};
