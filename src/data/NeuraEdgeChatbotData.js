import NeuraEdgeDemo from "../assets/NeuraEdgeDemo.mp4";
import NeuraEdgeChatbotThumbnail from "../assets/NeuraEdgeChatbotThumbnail.png";
import ChatbotStockImage from "../assets/chatbot_stock_image.jpg";

export const NeuraEdgeChatbotData = {
  title: "NeuraEdge SLM based AI Document Intelligence",
  intro:
   "NeuraEdge is an advanced Small Language Model (SLM) designed to deliver intelligent, context-aware document understanding and knowledge-based reasoning while ensuring data privacy and deployment flexibility.Built on an open-source foundation, NeuraEdge empowers organizations to extract insights from internal documents, proprietary databases, and structured or unstructured content—without compromising data security.It operates seamlessly across cloud, private, and hybrid environments, enabling enterprises to harness AI capabilities tailored to their specific teams, workflows, and compliance requirements.",

  video: {
    title: "Chatbot Demo",
    thumbnail: NeuraEdgeChatbotThumbnail,
    videoUrl: NeuraEdgeDemo,
  },

  advantages: [
   "Privacy-first Architecture",
   "Flexible Deployment",
    "Multi-modal capability",
    "Contextual Intelligence",
    "Customizable and Scalable",
    "Multilingual Support"
  ],

    useCases: [
    {
        heading: "BFSI Sector",
        items: [
        "Secure on-premise AI assistants for policy explanations, claims summarization, and regulatory documentation.",
        "Sentiment and intent analysis for customer support and CRM systems.",
        "Automated policy summarization.",
        ],
    },
    {
        heading: "Healthcare Sector",
        items: [
        "Secure summarization of clinical notes, discharge summaries, and diagnostic records.",
        "AI-driven knowledge assistant for querying internal medical guidelines and treatment protocols.",
        "On-premise document intelligence for hospital administration—automating consent form validation, report collation, and medical record indexing.",
        ],
    },    
    {
       heading: "Retail and E-commerce",
       items: [
        "Automated analysis and summarization of vendor agreements, product specifications, and compliance documentation.",
        "Knowledge assistant for internal teams to access training manuals, return policies, and SOPs through natural queries.",
        "Summarization of customer feedback reports and sales summaries for faster decision-making."
      ],
    },
    {
       heading: "Manufacturing",
       items: [
        "Intelligent parsing and summarization of technical manuals, process documentation, and quality audit reports.",
        "Private on-prem assistant for quick retrieval of safety guidelines, machine operation SOPs, and regulatory standards.",
        "Knowledge extraction from maintenance logs and inspection records to support compliance audits.",
      ],
    },
    ],
    image: ChatbotStockImage
}
