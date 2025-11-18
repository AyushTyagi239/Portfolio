import React from "react";

import UseCasesSection from "../components/UseCasesSection";
import IndustryUseCases from "../components/IndustryUseCases";

import BFSI_TRANS from "../assets/transition/BFSI_TRANS.png"
import MANU_TRANS from "../assets/transition/MANU_TRANS.png"



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
