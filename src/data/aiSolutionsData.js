export const aiSolutionsData = {
  sectionTitle: "AI & LLM Engineering",
  sectionSubtitle:
    "Hands-on experience building production-oriented LLM systems, RAG pipelines, and agentic workflows with a focus on reliability, transparency, and real-world use cases.",

  certifications: [
    "AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents",
    "AI Engineer Agentic Track: The Complete Agent & MCP Course",
  ],

  projects: [
    {
      title: "Hospital Intelligence Assistant (Explainable LLM System)",
      description:
        "An enterprise-style AI assistant built on hospital operational data, designed for transparency, safety, and explainability rather than black-box answers.",
      highlights: [
        "Explicit query routing between SQL data and LLM reasoning",
        "Schema-aware, safe access to hospital databases",
        "Full agent-level logging for auditability and debugging",
        "Context-aware conversations with input correction",
        "Explainable responses showing how results were derived",
        "Production-ready design with monitoring and control",
      ],
      techStack: [
        "LLM Engineering",
        "SQL / Structured Data",
        "Next.js",
        "Hugging Face",
        "Vercel",
      ],
    },

    {
      title: "Goal-Driven AI Sidekick (Self-Verifying Agent)",
      description:
        "A task-oriented AI agent that verifies its output against success criteria before delivering results, automatically retrying when requirements are not met.",
      highlights: [
        "Browser automation using Playwright (real Chromium)",
        "Web search via Google Serper API",
        "Knowledge lookup using Wikipedia",
        "Python execution through a REPL",
        "File read/write in a sandboxed environment",
        "Push notifications via Pushover",
        "Automatic retries on failed validations",
      ],
      techStack: [
        "Agentic AI",
        "Tool Calling",
        "Playwright",
        "Python",
        "External APIs",
      ],
    },

    {
      title: "Multi-Agent CrewAI Workflow",
      description:
        "A collaborative multi-agent system demonstrating automated research, analysis, debate, and decision-making within a single workflow.",
      highlights: [
        "Financial Researcher Agent for news and market insights",
        "Analyst Agent generating structured reports",
        "Debate Agent presenting arguments for and against a motion",
        "Judge Agent delivering an evidence-based verdict",
        "Modular, fast, and scalable CrewAI pipeline",
      ],
      techStack: [
        "CrewAI",
        "Multi-Agent Systems",
        "LLMs",
        "Automated Reasoning",
      ],
    },

    {
      title: "Personal AI Alter Ego (Tool-Driven Assistant)",
      description:
        "A personal AI assistant trained to represent my professional background, projects, and skills using my own résumé and LinkedIn data.",
      highlights: [
        "Tool-calling assistant powered by LLaMA 3 (NVIDIA NIM)",
        "Reads and reasons over résumé and LinkedIn data",
        "Logs unanswered questions for improvement",
        "Interactive Gradio-based UI",
        "Deployed live on Hugging Face Spaces",
      ],
      techStack: [
        "meta/llama3-8b-instruct",
        "NVIDIA NIM",
        "Gradio",
        "Hugging Face Spaces",
      ],
      liveLink: "https://lnkd.in/gdhzdmuu",
    },

    {
      title: "End-to-End RAG Chatbot (LLM Engineering Project)",
      description:
        "A complete Retrieval-Augmented Generation system built as a personal chatbot, covering the full RAG lifecycle from ingestion to evaluation.",
      highlights: [
        "Intelligent chunking and preprocessing",
        "Vector search using ChromaDB",
        "Context construction and query rewriting",
        "Re-ranking for higher-quality responses",
        "LLM-as-a-judge evaluation",
        "Metrics-driven evaluation (MRR, nDCG, Golden Data)",
        "3D embedding and vector database visualizations",
      ],
      techStack: [
        "LangChain",
        "ChromaDB",
        "OpenAI Embeddings",
        "Python",
        "Gradio",
        "RAG Evaluation Metrics",
      ],
    },
  ],
};
