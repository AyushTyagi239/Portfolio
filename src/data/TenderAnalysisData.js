import TenderAnalysisDemo from "../assets/TenderAnalysisDemo.mp4";
// import TenderAnalyzerThumbnail from "../assets/images/TenderAnalyzerThumbnail.png";
import TenderImage from "../assets/chatbot.png"

export const TenderAnalysisData = {
  title: "Tender Analyzer (AI Procurement Intelligence)",

  intro:
    "Tender Analyzer is an advanced AI-driven procurement intelligence platform that leverages OCR, NLP, and machine learning to automatically analyze, classify, and summarize complex government and corporate tender documents. It helps organizations identify the most relevant opportunities faster by transforming unstructured tender data into actionable insights. Built with a focus on efficiency and compliance, Tender Analyzer empowers procurement teams, consulting agencies, and enterprises to streamline bid evaluation, improve success rates, and make informed strategic decisions.",

  video: {
    title: "Tender Analysis Demo",
    thumbnail: "https://via.placeholder.com/800x450.png?text=Tender+Analyzer+Demo",
    videoUrl: TenderAnalysisDemo,
  },

  advantages: [
    "Automated OCR and NLP-driven document understanding",
    "Fast tender classification and summarization",
    "Smart comparison across multiple tenders and submissions",
    "Comprehensive insight extraction (scope, eligibility, deadlines, EMD, etc.)",
    "Dashboard-based visualization for actionable decision-making",
    "Customizable filters and keyword-based tender tracking"
  ],

  useCases: [
    {
      heading: "Government Procurement & PSUs",
      items: [
        "Rapid analysis of large-scale public tender documents from multiple departments and portals.",
        "Automated extraction of eligibility criteria, EMD, and scope to assist in compliance checks.",
        "Streamlined tender tracking and comparison to identify recurring or overlapping opportunities.",
      ],
    },
    {
      heading: "SMEs and Enterprises (Engineering, IT, and Infrastructure)",
      items: [
        "Accelerated opportunity identification for tenders aligned with company capabilities.",
        "AI-powered scoring of tenders based on historical performance and success likelihood.",
        "Summarized insights for management decision-making and faster bid/no-bid assessments.",
      ],
    },
    {
      heading: "Consulting Firms & Bid Management Agencies",
      items: [
        "Automated pre-bid analysis to prioritize high-value opportunities for clients.",
        "Cross-tender comparison and benchmarking to improve proposal quality.",
        "Document summarization and structured extraction for report generation and bid documentation.",
      ],
    },
  ],
  image: TenderImage 
};
