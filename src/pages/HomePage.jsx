import React from "react";
import HeroSection from "../components/HeroSection";
import UseCasesSection from "../components/UseCasesSection";
import AboutUs from "../components/AboutUs";

const HomePage = () => {
  return (
    <div className="min-h-screen ">
      <HeroSection />
      <AboutUs/>
      <UseCasesSection />
    </div>
  );
};

export default HomePage;
