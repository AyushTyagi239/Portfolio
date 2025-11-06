import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Layout from "./layout/MainLayout"
import HomePage from "./pages/HomePage";
import Chatbot from "./pages/Chatbot";
import ReadMorePage from "./pages/ReadMorePage";
import DarkVeil from "./components/DarkVeil";
import { NeuraEdgeChatbotData } from "./data/NeuraEdgeChatbotData";
import { TenderAnalysisData } from "./data/TenderAnalysisData";
import manufacturingData from "./data/manufacturingData";
import IndustryPage from "./components/IndustryPage";
import healthcareData from "./data/healthcareData";
import bfsiData from "./data/bfsiData";
import educationData from "./data/educationData";
import hospitalityData from "./data/hospitalityData";
import StaggeredMenu from "./components/StaggeredMenu";

const AppRoutes = () => {
  return (
    <>
      <Routes>
      <Route
  path="/"
  element={
    <Layout>
      <HomePage />
    </Layout>
  }
/>
        <Route path="/usecase/chatbot" element={
            <Layout>
              {/* <Chatbot /> */}
              {/* <div className="text-xl text-center bg-green-300"> is this visible </div> */}
              <ReadMorePage data={NeuraEdgeChatbotData} />
            </Layout>
          }/>

          <Route path="/usecase/tender-analysis" element={
            <Layout>
              {/* <Chatbot /> */}
              {/* <div className="text-xl text-center bg-green-300"> is this visible </div> */}
              <ReadMorePage data={TenderAnalysisData} />
            </Layout>
          }/>


          <Route path="/industry/manufacturing" element={
            <Layout>
             
              {console.log(manufacturingData)}
              <IndustryPage data={manufacturingData} />
            </Layout>
          }/>
          <Route path="/industry/healthcare" element={
            <Layout>
              {/* <Chatbot /> */}
              {/* <div className="text-xl text-center bg-green-300"> is this visible </div> */}
              {/* <ReadMorePage data={TenderAnalysisData} /> */}
             
              <IndustryPage data={healthcareData} />
            </Layout>
          }/>
          <Route path="/industry/bfsi" element={
            <Layout>
              {/* <Chatbot /> */}
              {/* <div className="text-xl text-center bg-green-300"> is this visible </div> */}
              {/* <ReadMorePage data={TenderAnalysisData} /> */}
             
              <IndustryPage data={bfsiData} />
            </Layout>
          }/>
           <Route path="/industry/education" element={
            <Layout>
              {/* <Chatbot /> */}
              {/* <div className="text-xl text-center bg-green-300"> is this visible </div> */}
              {/* <ReadMorePage data={TenderAnalysisData} /> */}
             
              <IndustryPage data={educationData} />
            </Layout>
          }/>

            <Route path="/industry/hospitality" element={
            <Layout>
             
             
              <IndustryPage data={hospitalityData} />
            </Layout>
          }/>


      </Routes>
      
      

      
    </>
  );
};

export default AppRoutes;



