import AboutMeSection from "../components/AboutMeSection";
import PortfolioShowcase from "../components/PortfolioShowcase";
import { aboutMeData } from "../data/home/aboutMe.data";
import React from "react";
const HomePage = () => {
  return (
    <>
      <AboutMeSection data={aboutMeData} />
      <PortfolioShowcase/> 
    </>
  );
};

export default HomePage;
