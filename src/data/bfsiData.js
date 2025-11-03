// src/data/bfsiData.js
const bfsiData = {
  title: "BFSI",
  subtitle: "How AI transforms banking, financial services, and insurance through automation, risk management, and personalization.",
  sections: [
    {
      heading: "1. How is AI being used in BFSI?",
      content: `AI is revolutionizing BFSI through fraud detection, algorithmic trading, personalized banking, and automated underwriting. Financial institutions leverage machine learning to enhance security, efficiency, and customer experience.`,
      details: [
        "Anomaly detection identifies fraudulent transactions in real-time",
        "Natural language processing analyzes documents and customer communications",
        "Predictive models assess credit risk and insurance claims",
        "Robo-advisors provide personalized investment recommendations"
      ],
    },
    {
      heading: "2. AI in BFSI — Use Cases",
      content: `Key use cases:\n1) Fraud detection and prevention\n2) Algorithmic trading and portfolio management\n3) Credit scoring and risk assessment\n4) Chatbots and virtual financial advisors\n5) Claims processing and underwriting automation`,
      details: [
        "Fraud detection example: real-time transaction monitoring with <1 second response",
        "Credit scoring example: alternative data analysis for thin-file customers"
      ],
    },
    {
      heading: "3. Benefits of Using AI in BFSI",
      content: `- 90% accuracy in fraud detection with real-time prevention\n- 70% faster loan and insurance claim processing\n- 40% reduction in operational costs through automation\n- 25% increase in customer satisfaction and engagement`,
      details: [],
    },
    {
      heading: "4. Challenges and Implementation Notes",
      content: `- Regulatory compliance and explainability requirements\n- Data security and privacy concerns\n- Integration with legacy core banking systems\n- Model risk management and validation`,
      details: ["Start with low-risk, high-volume processes", "Focus on decision support before full automation"],
    },
    {
      heading: "5. Example Project — AI-Powered Fraud Detection",
      content: `1) Analyze historical transaction data for patterns\n2) Build real-time anomaly detection models\n3) Integrate with transaction processing systems\n4) Implement feedback loop for model improvement\n5) Scale from credit cards to other payment methods`,
      details: ["Data analysis: 4-6 weeks", "Model development: 6-8 weeks", "Implementation: 8-12 weeks"],
    },
  ],
};

export default bfsiData;