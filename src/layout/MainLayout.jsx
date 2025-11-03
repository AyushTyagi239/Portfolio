import Header from "../components/Header";
import Footer from "../components/Footer";
import DarkVeil from "../components/DarkVeil";
import React from "react";
import ServicesSection from "../components/ServiceSection";
import AboutUs from "../components/AboutUs";

const MainLayout = ({ children }) => {
  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      
      {/* DarkVeil background */}
      <div className="absolute inset-0 -z-100">
        <DarkVeil />
      </div>

      {/* Foreground content */}
      <Header />
      
      <div>
        {children}
      </div>
      
      <Footer />
      
    </div>
  );
};

export default MainLayout;
