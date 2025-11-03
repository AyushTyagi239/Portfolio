import React from "react";
import HeroSection from "../components/HeroSection";
import UseCasesSection from "../components/UseCasesSection";
import AboutUs from "../components/AboutUs";
import GetInTouch from "../components/GetInTouch";
import IndustryUseCases from "../components/IndustryUseCases";

const HomePage = () => {
  return (
    <div className="min-h-screen ">
     
      <AboutUs/>
      <IndustryUseCases/>
      {/* <UseCasesSection /> */}
      {/* <GetInTouch/> */}
    </div>
  );
};

export default HomePage;
