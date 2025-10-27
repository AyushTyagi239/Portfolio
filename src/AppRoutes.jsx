import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Layout from "./layout/MainLayout"
import HomePage from "./pages/HomePage";
import Chatbot from "./pages/Chatbot";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        }/>
      <Route path="/usecase/chatbot" element={
          <Layout>
            <Chatbot />
            {/* <div className="text-xl text-center bg-green-300"> is this visible </div> */}
          </Layout>
        }/>


      {/* Add more routes as needed */}

       {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
};

export default AppRoutes;



