import React from "react";

import UseCasesSection from "../components/UseCasesSection";
import IndustryUseCases from "../components/IndustryUseCases";

import BFSI_TRANS from "../assets/Industry/Finance.webp"
import MANU_TRANS from "../assets/Industry/Finance.webp"



import IndustryNavbar from "../components/IndustryNavbar";

const HomePage = () => {
  return (
    <div className="min-h-screen ">
      {/* <HeroSection/> */}
      
    
      {/* <EndToEndSolutions/> */}
     
      <IndustryNavbar/>
      <IndustryUseCases/>
      {/* <GetStartedSection /> */}
      {/* aa */}
     
      {/* <UseCasesSection /> */}
   
    </div>
  );
};

export default HomePage;
