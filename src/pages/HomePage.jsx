import React from "react";

import UseCasesSection from "../components/UseCasesSection";
import IndustryUseCases from "../components/IndustryUseCases";
import TrueFocus from '../components/TrueFocus';
import BFSI_TRANS from "../assets/Industry/Finance.webp"
import MANU_TRANS from "../assets/Industry/Finance.webp"



import IndustryNavbar from "../components/IndustryNavbar";

const HomePage = () => {
  return (
    <div className="min-h-screen ">
      {/* <HeroSection/> */}
      
    
      {/* <EndToEndSolutions/> */}
      

<TrueFocus 
sentence="Neurabot  NeuraEagleI  IntelAI-Unnati"
manualMode={false}
blurAmount={2}
borderColor="#3614bd"
animationDuration={0.5}
pauseBetweenAnimations={0.5}
/>
      {/* <IndustryNavbar/> */}
      <IndustryUseCases/>
      {/* <GetStartedSection /> */}
      {/* aa */}
     
      {/* <UseCasesSection /> */}
   
    </div>
  );
};

export default HomePage;
