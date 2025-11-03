// src/pages/Manufacturing.jsx
import React from "react";
import IndustryLayout from "../layouts/IndustryLayout";
import manufacturingData from "../data/manufacturingData";

const ManufacturingPage = () => {
  return <IndustryLayout industryData={manufacturingData} />;
};

export default ManufacturingPage;
