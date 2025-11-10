// src/data/bfsiData.js
const bfsiData = {
  title: "Banking & Financial Services",
  subtitle: "How AI revolutionizes banking, investment, and financial operations with intelligent automation.",

  overview: {
    heading: "How AI is used in BFSI",
    content: `AI is transforming the financial sector by enabling smarter risk assessment, fraud detection, and personalized customer experiences. From algorithmic trading to automated customer service, AI helps financial institutions operate more efficiently and securely.`,
    icon: "fas fa-chart-line"
  },

  problems: {
    heading: "How AI Solves Major BFSI Problems",
    points: [
      "AI-powered fraud detection systems prevent financial crimes in real-time.",
      "Intelligent chatbots provide 24/7 customer support and reduce operational costs.",
      "Machine learning algorithms enhance credit scoring and risk assessment accuracy.",
      "Automated compliance monitoring ensures regulatory adherence and reduces manual effort.",
    ],
    icon: "fas fa-shield-alt"
  },

  solutionsSection: {
    heading: "Our AI-Powered Solutions",
    description: "Discover our intelligent financial solutions designed to optimize operations, enhance security, and improve customer experiences.",
    icon: "fas fa-lightbulb",
    solutions: [
      {
        id: 1,
        title: "Fraud Detection System",
        description: "Real-time AI algorithms detect and prevent fraudulent transactions with 99.8% accuracy.",
        icon: "fas fa-user-shield",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=350&fit=crop&auto=format"
      },
      {
        id: 2,
        title: "Smart Wealth Management",
        description: "AI-driven investment platforms provide personalized portfolio recommendations and automated rebalancing.",
        icon: "fas fa-piggy-bank",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=350&fit=crop&auto=format"
      },
      {
        id: 3,
        title: "Intelligent Loan Processing",
        description: "Automated credit assessment and document processing reduces approval times by 70%.",
        icon: "fas fa-file-invoice-dollar",
        image: "https://images.unsplash.com/photo-1554224154-260f33b43554?w=500&h=350&fit=crop&auto=format"
      }
    ]
  },
};

export default bfsiData;