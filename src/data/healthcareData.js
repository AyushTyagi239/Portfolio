// src/data/healthcareData.js
const healthcareData = {
  title: "Healthcare",
  subtitle: "How AI improves patient care, accelerates diagnostics, and optimizes healthcare delivery.",
  sections: [
    {
      heading: "1. How is AI being used in Healthcare?",
      content: `AI is transforming healthcare through advanced diagnostics, personalized treatment plans, operational efficiency, and drug discovery. Medical institutions use machine learning to enhance patient outcomes while reducing costs.`,
      details: [
        "Computer vision analyzes medical images (X-rays, MRIs, CT scans)",
        "Natural language processing extracts insights from clinical notes",
        "Predictive models identify at-risk patients for early intervention",
        "Robotic process automation handles administrative tasks"
      ],
    },
    {
      heading: "2. AI in Healthcare — Use Cases",
      content: `Key use cases:\n1) Medical imaging analysis and diagnostics\n2) Personalized treatment recommendations\n3) Drug discovery and development\n4) Patient risk prediction and prevention\n5) Administrative automation and workflow optimization`,
      details: [
        "Medical imaging example: AI detects tumors in mammograms with 95%+ accuracy",
        "Patient risk example: predict readmission likelihood and intervene proactively"
      ],
    },
    {
      heading: "3. Benefits of Using AI in Healthcare",
      content: `- 40% faster diagnosis and treatment planning\n- 30% reduction in diagnostic errors\n- 50% acceleration in drug discovery processes\n- 25% improvement in operational efficiency`,
      details: [],
    },
    {
      heading: "4. Challenges and Implementation Notes",
      content: `- Regulatory compliance (HIPAA, FDA approvals)\n- Data quality and interoperability between systems\n- Physician adoption and trust in AI recommendations\n- Ethical considerations in life-critical applications`,
      details: ["Start with non-critical diagnostic support", "Focus on workflow augmentation not replacement"],
    },
    {
      heading: "5. Example Project — Diagnostic Support System",
      content: `1) Select high-volume imaging modality (chest X-rays, retinal scans)\n2) Collect and annotate historical image data\n3) Train CNN model for abnormality detection\n4) Integrate with existing PACS/RIS systems\n5) Deploy as second-reader system for radiologists`,
      details: ["Data collection: 8-12 weeks", "Model training: 4-6 weeks", "Clinical validation: 12-16 weeks"],
    },
  ],
};

export default healthcareData;