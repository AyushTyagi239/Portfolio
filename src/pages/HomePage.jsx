import React from "react";
import HeroSection from "../components/HeroSection";
import UseCasesSection from "../components/UseCasesSection";
import AboutUs from "../components/AboutUs";
import GetInTouch from "../components/GetInTouch";
import IndustryUseCases from "../components/IndustryUseCases";
import ImageCarousel from "../components/ImageCarousel";
import BFSI_TRANS from "../assets/transition/BFSI_TRANS.png"
import MANU_TRANS from "../assets/transition/MANU_TRANS.png"
import EndToEndSolutions from "../components/EndToEndSolutions";
import WhyChooseUs from "../components/WhyChooseUs";

const HomePage = () => {
  return (
    <div className="min-h-screen ">
      {/* <HeroSection/> */}
      
      <AboutUs/>
      <EndToEndSolutions/>
      {/* <ImageCarousel images={[BFSI_TRANS,MANU_TRANS]}/> */}
      <IndustryUseCases/>
      <WhyChooseUs/>
      
     
      {/* <UseCasesSection /> */}
      {/* <GetInTouch/> */}
    </div>
  );
};

export default HomePage;
