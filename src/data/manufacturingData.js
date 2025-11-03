// src/data/manufacturingData.js
const manufacturingData = {
  title: "Manufacturing",
  subtitle: "How AI transforms production, quality, and supply chain in factories.",
  sections: [
    {
      heading: "1. How is AI being used in Manufacturing?",
      content: `AI is applied across production lines to enable predictive maintenance, automated quality inspection, process optimization, and robotics-driven assembly. Data from PLCs, sensors, and cameras is streamed into ML models to detect anomalies and optimize throughput.`,
      details: [
        "Sensors + time series models monitor equipment health",
        "Computer vision inspects defects on the production line",
        "Reinforcement learning optimizes robot paths and throughput"
      ],
    },
    {
      heading: "2. AI in Manufacturing — Use Cases",
      content: `Key use cases:\n1) Predictive maintenance: reduces unplanned downtime.\n2) Quality inspection: automated defect detection using CV.\n3) Production scheduling: demand-aware dynamic scheduling.\n4) Energy optimization: reduce energy use via smart controls.\n5) Digital twin: simulation + "what-if" optimization.`,
      details: [
        "Predictive maintenance example: vibration sensors -> failure prediction",
        "Digital twin example: simulate line changes before applying on real floor"
      ],
    },
    {
      heading: "3. Benefits of Using AI in Manufacturing",
      content: `- Reduced downtime, lower maintenance costs\n- Higher yield and fewer defects\n- Faster time-to-market via optimized workflows\n- Greater worker safety and lower manual inspection burden`,
      details: [],
    },
    {
      heading: "4. Challenges and Implementation Notes",
      content: `- Data quality & integration from legacy PLCs\n- Need labeled data for CV and supervised models\n- Edge vs cloud tradeoffs for latency-sensitive workflows\n- Skilled personnel and change management`,
      details: ["Data ingestion patterns", "Edge inference vs cloud retraining"],
    },
    {
      heading: "5. Example Project — Quick Implementation Plan",
      content: `1) Start with one use-case: predictive maintenance on motor/gearbox.\n2) Collect sensor data for 4–8 weeks.\n3) Build anomaly detection model (autoencoder/time-series model).\n4) Deploy model at edge for real-time alerts.\n5) Measure MTTR and iterate.`,
      details: ["MVP timeline: 8–12 weeks", "KPIs: downtime %, false alarm rate"],
    },
  ],
};

export default manufacturingData;
