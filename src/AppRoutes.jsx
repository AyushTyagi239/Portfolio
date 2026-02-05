import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./layout/MainLayout";

import HomePage from "./pages/HomePage";
import ReadMorePage from "./pages/ReadMorePage";
import IndustryPage from "./components/IndustryPage";

// Project Data
import { NeuraEdgeChatbotData } from "./data/NeuraEdgeChatbotData";
import { TenderAnalysisData } from "./data/TenderAnalysisData";

// Domain / Case Study Data
import manufacturingData from "./data/manufacturingData";
import healthcareData from "./data/healthcareData";
import bfsiData from "./data/bfsiData";
import educationData from "./data/educationData";
import hospitalityData from "./data/hospitalityData";

// Hospitality Projects
import parkingManagementData from "./data/otherproducts/Hospitality/ParkingManagement";
import queueDetectionData from "./data/otherproducts/Hospitality/Queuedetection";
import faceRecognitionData from "./data/otherproducts/Hospitality/FR_facerec";
import smokeFireDetectionData from "./data/otherproducts/Hospitality/smoke_fire";
import luggageDetectionData from "./data/otherproducts/Hospitality/Luggagedetection";

// Manufacturing Projects
import anprData from "./data/otherproducts/manufacturing/ANPR";
import objectCountingData from "./data/otherproducts/manufacturing/Objectcounting";
import ppeDetectionData from "./data/otherproducts/manufacturing/PPEdetection";
import crossCameraTrackingData from "./data/otherproducts/manufacturing/Crosscamera_tracking";

// Healthcare Projects
import fallDetectionData from "./data/otherproducts/healthcare/Falldetection";
import healthcareQueueDetectionData from "./data/otherproducts/healthcare/Queuedetection";
import antiIntrusionData from "./data/otherproducts/healthcare/AntiIntrusion";
import patientOutOfBedData from "./data/otherproducts/healthcare/Patient_out_of_bed";

// BFSI Projects
import facialRecognitionData from "./data/otherproducts/bfsi/facialRecognitionData";
import loiteringDetectionData from "./data/otherproducts/bfsi/loiteringDetectionData";
import tamperingDetectionData from "./data/otherproducts/bfsi/tamperingDetectionData";
import violenceDetectionBFSIData from "./data/otherproducts/bfsi/violenceDetectionData";
import intrusionDetectionBFSIData from "./data/otherproducts/bfsi/intrusionDetectionData";

// Scroll to top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>

        {/* Home */}
        <Route path="/" element={<Layout><HomePage /></Layout>} />

        {/* Featured Projects */}
        <Route path="/projects/chatbot" element={
          <Layout>
            <ReadMorePage data={NeuraEdgeChatbotData} />
          </Layout>
        }/>

        <Route path="/projects/tender-analysis" element={
          <Layout>
            <ReadMorePage data={TenderAnalysisData} />
          </Layout>
        }/>

        {/* Domains / Case Studies */}
        <Route path="/domains/manufacturing" element={
          <Layout>
            <IndustryPage data={manufacturingData} />
          </Layout>
        }/>

        <Route path="/domains/healthcare" element={
          <Layout>
            <IndustryPage data={healthcareData} />
          </Layout>
        }/>

        <Route path="/domains/bfsi" element={
          <Layout>
            <IndustryPage data={bfsiData} />
          </Layout>
        }/>

        <Route path="/domains/education" element={
          <Layout>
            <IndustryPage data={educationData} />
          </Layout>
        }/>

        <Route path="/domains/hospitality" element={
          <Layout>
            <IndustryPage data={hospitalityData} />
          </Layout>
        }/>

        {/* Individual Project Pages */}
        <Route path="/projects/hospitality/parking-management" element={<Layout><ReadMorePage data={parkingManagementData} /></Layout>} />
        <Route path="/projects/hospitality/queue-detection" element={<Layout><ReadMorePage data={queueDetectionData} /></Layout>} />
        <Route path="/projects/hospitality/facial-recognition" element={<Layout><ReadMorePage data={faceRecognitionData} /></Layout>} />
        <Route path="/projects/hospitality/smoke-fire-detection" element={<Layout><ReadMorePage data={smokeFireDetectionData} /></Layout>} />
        <Route path="/projects/hospitality/luggage-detection" element={<Layout><ReadMorePage data={luggageDetectionData} /></Layout>} />

        <Route path="/projects/manufacturing/anpr" element={<Layout><ReadMorePage data={anprData} /></Layout>} />
        <Route path="/projects/manufacturing/object-counting" element={<Layout><ReadMorePage data={objectCountingData} /></Layout>} />
        <Route path="/projects/manufacturing/ppe-detection" element={<Layout><ReadMorePage data={ppeDetectionData} /></Layout>} />
        <Route path="/projects/manufacturing/cross-camera-tracking" element={<Layout><ReadMorePage data={crossCameraTrackingData} /></Layout>} />

        <Route path="/projects/healthcare/fall-detection" element={<Layout><ReadMorePage data={fallDetectionData} /></Layout>} />
        <Route path="/projects/healthcare/queue-detection" element={<Layout><ReadMorePage data={healthcareQueueDetectionData} /></Layout>} />
        <Route path="/projects/healthcare/anti-intrusion" element={<Layout><ReadMorePage data={antiIntrusionData} /></Layout>} />
        <Route path="/projects/healthcare/patient-out-of-bed" element={<Layout><ReadMorePage data={patientOutOfBedData} /></Layout>} />

        <Route path="/projects/bfsi/facial-recognition" element={<Layout><ReadMorePage data={facialRecognitionData} /></Layout>} />
        <Route path="/projects/bfsi/loitering-detection" element={<Layout><ReadMorePage data={loiteringDetectionData} /></Layout>} />
        <Route path="/projects/bfsi/tampering-detection" element={<Layout><ReadMorePage data={tamperingDetectionData} /></Layout>} />
        <Route path="/projects/bfsi/violence-detection" element={<Layout><ReadMorePage data={violenceDetectionBFSIData} /></Layout>} />
        <Route path="/projects/bfsi/intrusion-detection" element={<Layout><ReadMorePage data={intrusionDetectionBFSIData} /></Layout>} />

        {/* 404 */}
        <Route path="*" element={
          <Layout>
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">Page under construction</h1>
              <p className="text-xl mb-6">This section will be updated soon.</p>
              <a href="/" className="px-6 py-3 bg-blue-600 rounded-lg">
                Go Home
              </a>
            </div>
          </Layout>
        }/>

      </Routes>
    </>
  );
};

export default AppRoutes;
