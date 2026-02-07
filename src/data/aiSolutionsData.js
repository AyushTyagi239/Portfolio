import hospitalAI from "../assets/portfolio/ai/hospital-ai.webp";
import agenticAI from "../assets/portfolio/ai/agentic-sidekick.webp";
import crewAI from "../assets/portfolio/ai/crewai-workflow.webp";
import alterEgo from "../assets/portfolio/ai/personal-alter-ego.webp";
import ragBot from "../assets/portfolio/ai/rag-chatbot.webp";

export const aiSolutionsData = {
  sectionTitle: "AI Solutions I Built",
  sectionSubtitle:
    "Production-oriented AI systems built using LLM engineering, RAG pipelines, and agentic workflows.",

  projects: [
    {
      title: "Personal AI Alter Ego",
      image: alterEgo,
      link: "https://huggingface.co/spaces/Ayush239/Ayush_Alter_Ego",
      description:
        "A personal AI assistant trained on my resume and LinkedIn data.",
      highlights: [
        "Tool calling with LLaMA 3",
        "Gradio interface",
        "Live deployment on Hugging Face",
      ],
      techStack: ["LLaMA 3", "Gradio", "Hugging Face"],
    },

    {
      title: "Hospital Intelligence Assistant",
      image: hospitalAI,
      link: "https://www.linkedin.com/posts/ayush-tyagi-0a3694267_llmengineering-agenticai-nextjs-activity-7415577330841989120-h3RB",
      description:
        "An enterprise-grade AI assistant built on hospital operational data with explainability and safe data access.",
      highlights: [
        "Explicit query routing between SQL and LLM reasoning",
        "Schema-aware database access",
        "Agent-level logging and observability",
        "Context-aware conversations",
      ],
      techStack: ["LLM Engineering", "SQL", "Next.js"],
    },

    {
      title: "Goal-Driven AI Sidekick",
      image: agenticAI,
      link: "https://www.linkedin.com/posts/ayush-tyagi-0a3694267_ai-agenticai-llm-activity-7408846553303592960-ixps",
      description:
        "A self-verifying AI agent that validates results before delivery.",
      highlights: [
        "Browser automation with Playwright",
        "Tool-based reasoning",
        "Automatic retries on failure",
      ],
      techStack: ["Agentic AI", "Playwright", "Python"],
    },

    {
      title: "Multi-Agent CrewAI Workflow",
      image: crewAI,
      link: "https://www.linkedin.com/posts/ayush-tyagi-0a3694267_crewai-agenticai-automation-activity-7404869716487495680-InLI",
      description:
        "A collaborative multi-agent system for research, analysis, and decision-making.",
      highlights: [
        "Research, analyst, debate, and judge agents",
        "Modular CrewAI workflow",
      ],
      techStack: ["CrewAI", "Multi-Agent Systems"],
    },

    {
      title: "End-to-End RAG Chatbot",
      image: ragBot,
      link: "https://www.linkedin.com/posts/ayush-tyagi-0a3694267_llmengineering-rag-vectordb-activity-7400952983485767680-lzKv",
      description:
        "A complete RAG system with evaluation-driven improvements.",
      highlights: [
        "Vector search with ChromaDB",
        "LLM-as-a-judge evaluation",
      ],
      techStack: ["LangChain", "ChromaDB"],
    },
  ],
};
