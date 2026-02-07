import Header from "../components/Header";
import Footer from "../components/Footer";
import DarkVeil from "../components/DarkVeil";
import React from "react";


import StaggeredMenu from "../components/StaggeredMenu";

import IndustryNavbar from "../components/IndustryNavbar";
import Preloader from "../components/Preloader";



const MainLayout = React.memo(({ children }) => {
  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">

      {/* PRELOADER MUST BE FIRST */}
      <Preloader />

      {/* Background should not re-render on every route */}
      <div className="fixed inset-0 -z-50 pointer-events-none">
        <DarkVeil />
      </div>

      {/* Sticky Header */}
      <Header />

      {/* Top space */}
      <div className="pt-24" />

      {/* Page content */}
      <main className="flex-1">{children}</main>

      {/* <Footer /> */}
    </div>
  );
});

export default MainLayout;
