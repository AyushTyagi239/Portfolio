import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./layout/MainLayout"
import HomePage from "./pages/HomePage";
import { UnnatiArtificialIntelligenceData } from "./data/AI_Labs/UnnatiArtificialIntelligence";
import { UnnatiAIIoTData } from "./data/AI_Labs/UnnatiAIIoT";
import { UnnatiAppliedAIData } from "./data/AI_Labs/UnnatiAppliedAI";
import { UnnatiHPCData } from "./data/AI_Labs/UnnatiHPC";
import { UnnatiDeepLearningHabanaData } from "./data/AI_Labs/UnnatiDeepLearningHabana";
import { UnnatiSecurityData } from "./data/AI_Labs/UnnatiSecurity";
import UnnatiPage from "./pages/UnnatiPage";

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

// Hospitality Use Cases
import parkingManagementData from "./data/otherproducts/Hospitality/ParkingManagement";
import queueDetectionData from "./data/otherproducts/Hospitality/Queuedetection";
import faceRecognitionData from "./data/otherproducts/Hospitality/FR_facerec";
import smokeFireDetectionData from "./data/otherproducts/Hospitality/smoke_fire";
import luggageDetectionData from "./data/otherproducts/Hospitality/Luggagedetection";

// Manufacturing Use Cases
import anprData from "./data/otherproducts/manufacturing/ANPR";
import objectCountingData from "./data/otherproducts/manufacturing/Objectcounting";
import ppeDetectionData from "./data/otherproducts/manufacturing/PPEdetection";
import crossCameraTrackingData from "./data/otherproducts/manufacturing/Crosscamera_tracking";

// Education Use Cases
import educationFaceRecognitionData from "./data/otherproducts/education/FR";
import intrusionDetectionData from "./data/otherproducts/education/Intrusiondetection";
import weaponDetectionData from "./data/otherproducts/education/weapon_detection";
import violenceDetectionData from "./data/otherproducts/education/ViolenceDetection";
import overcrowdingDetectionData from "./data/otherproducts/education/Overcrowdingdetection";
import automatedAttendanceData from "./data/otherproducts/education/automatedAttendanceData";

// Healthcare Use Cases
import fallDetectionData from "./data/otherproducts/healthcare/Falldetection";
import healthcareQueueDetectionData from "./data/otherproducts/healthcare/Queuedetection";
import antiIntrusionData from "./data/otherproducts/healthcare/AntiIntrusion";
import patientOutOfBedData from "./data/otherproducts/healthcare/Patient_out_of_bed";

// BFSI Use Cases - CORRECTED IMPORT PATHS (lowercase)
import facialRecognitionData from "./data/otherproducts/bfsi/facialRecognitionData";
import loiteringDetectionData from "./data/otherproducts/bfsi/loiteringDetectionData";
import tamperingDetectionData from "./data/otherproducts/bfsi/tamperingDetectionData";
import violenceDetectionBFSIData from "./data/otherproducts/bfsi/violenceDetectionData";
import intrusionDetectionBFSIData from "./data/otherproducts/bfsi/intrusionDetectionData";

//AI labs
import { AI_IOT_Lab } from "./data/AI_Labs/AI_IOT";
import { GenAIData } from "./data/AI_Labs/GenAI";
import { Unnati_AI__Lab } from "./data/AI_Labs/Unnati_AI_Lab";
import { HPC_Data } from "./data/AI_Labs/HPC";
import { ConfidentialComputingData } from "./data/AI_Labs/ConfidentialComputing";
import { DL_Lab_Data } from "./data/AI_Labs/DL_Lab";

// ScrollToTop component
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
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        
        {/* Use Case Routes */}
        <Route path="/usecase/chatbot" element={
          <Layout>
            <ReadMorePage data={NeuraEdgeChatbotData} />
          </Layout>
        }/>

        <Route path="/usecase/tender-analysis" element={
          <Layout>
            <ReadMorePage data={TenderAnalysisData} />
          </Layout>
        }/>

        {/* Industry Main Pages */}
        <Route path="/industry/manufacturing" element={
          <Layout>
            <IndustryPage data={manufacturingData} />
          </Layout>
        }/>
        
        <Route path="/industry/healthcare" element={
          <Layout>
            <IndustryPage data={healthcareData} />
          </Layout>
        }/>
        
        <Route path="/industry/bfsi" element={
          <Layout>
            <IndustryPage data={bfsiData} />
          </Layout>
        }/>
        
        <Route path="/industry/education" element={
          <Layout>
            <IndustryPage data={educationData} />
          </Layout>
        }/>

        <Route path="/industry/hospitality" element={
          <Layout>
            <IndustryPage data={hospitalityData} />
          </Layout>
        }/>

        {/* Hospitality Use Case Routes */}
        <Route path="/solution/hospitality/parking-management" element={
          <Layout>
            <ReadMorePage data={parkingManagementData} />
          </Layout>
        }/>

        <Route path="/solution/hospitality/queue-detection" element={
          <Layout>
            <ReadMorePage data={queueDetectionData} />
          </Layout>
        }/>

        <Route path="/solution/hospitality/facial-recognition-entry" element={
          <Layout>
            <ReadMorePage data={faceRecognitionData} />
          </Layout>
        }/>

        <Route path="/solution/hospitality/smoke-fire-detection" element={
          <Layout>
            <ReadMorePage data={smokeFireDetectionData} />
          </Layout>
        }/>

        <Route path="/solution/hospitality/luggage-detection" element={
          <Layout>
            <ReadMorePage data={luggageDetectionData} />
          </Layout>
        }/>

        {/* Manufacturing Use Case Routes */}
        <Route path="/solution/manufacturing/anpr-system" element={
          <Layout>
            <ReadMorePage data={anprData} />
          </Layout>
        }/>

        <Route path="/solution/manufacturing/object-counting" element={
          <Layout>
            <ReadMorePage data={objectCountingData} />
          </Layout>
        }/>

        <Route path="/solution/manufacturing/ppe-detection" element={
          <Layout>
            <ReadMorePage data={ppeDetectionData} />
          </Layout>
        }/>

        <Route path="/solution/manufacturing/cross-camera-tracking" element={
          <Layout>
            <ReadMorePage data={crossCameraTrackingData} />
          </Layout>
        }/>

        {/* Education Use Case Routes */}
        <Route path="/solution/education/face-recognition" element={
          <Layout>
            <ReadMorePage data={educationFaceRecognitionData} />
          </Layout>
        }/>

        <Route path="/solution/education/intrusion-detection" element={
          <Layout>
            <ReadMorePage data={intrusionDetectionData} />
          </Layout>
        }/>
        
        <Route path="/solution/education/automated-attendance" element={
          <Layout>
            <ReadMorePage data={automatedAttendanceData} />
          </Layout>
        }/>

        <Route path="/solution/education/weapon-detection" element={
          <Layout>
            <ReadMorePage data={weaponDetectionData} />
          </Layout>
        }/>

        <Route path="/solution/education/violence-detection" element={
          <Layout>
            <ReadMorePage data={violenceDetectionData} />
          </Layout>
        }/>

        <Route path="/solution/education/overcrowding-detection" element={
          <Layout>
            <ReadMorePage data={overcrowdingDetectionData} />
          </Layout>
        }/>

        {/* Healthcare Use Case Routes */}
        <Route path="/solution/healthcare/fall-detection" element={
          <Layout>
            <ReadMorePage data={fallDetectionData} />
          </Layout>
        }/>

        <Route path="/solution/healthcare/queue-detection" element={
          <Layout>
            <ReadMorePage data={healthcareQueueDetectionData} />
          </Layout>
        }/>

        <Route path="/solution/healthcare/anti-intrusion" element={
          <Layout>
            <ReadMorePage data={antiIntrusionData} />
          </Layout>
        }/>

        <Route path="/solution/healthcare/patient-out-of-bed" element={
          <Layout>
            <ReadMorePage data={patientOutOfBedData} />
          </Layout>
        }/>

        {/* BFSI Use Case Routes */}
        <Route path="/solution/banking-&-financial-services/facial-recognition-at-entry" element={
          <Layout>
            <ReadMorePage data={facialRecognitionData} />
          </Layout>
        }/>

        <Route path="/solution/banking-&-financial-services/loitering-detection" element={
          <Layout>
            <ReadMorePage data={loiteringDetectionData} />
          </Layout>
        }/>

        <Route path="/solution/banking-&-financial-services/fraud-detection-system" element={
          <Layout>
            <ReadMorePage data={loiteringDetectionData} />
          </Layout>
        }/>

        <Route path="/solution/banking-&-financial-services/tampering-detection" element={
          <Layout>
            <ReadMorePage data={tamperingDetectionData} />
          </Layout>
        }/>

        <Route path="/solution/banking-&-financial-services/violence-detection" element={
          <Layout>
            <ReadMorePage data={violenceDetectionBFSIData} />
          </Layout>
        }/>

        <Route path="/solution/banking-&-financial-services/intrusion-detection" element={
          <Layout>
            <ReadMorePage data={intrusionDetectionBFSIData} />
          </Layout>
        }/>
         
<Route
  path="/solution/education/unnati/artificial-intelligence"
  element={
    <Layout>
      <UnnatiPage data={UnnatiArtificialIntelligenceData} />
    </Layout>
  }
/>

<Route
  path="/solution/education/unnati/aiiot"
  element={
    <Layout>
      <UnnatiPage data={UnnatiAIIoTData} />
    </Layout>
  }
/>

<Route
  path="/solution/education/unnati/applied-ai"
  element={
    <Layout>
      <UnnatiPage data={UnnatiAppliedAIData} />
    </Layout>
  }
/>

<Route
  path="/solution/education/unnati/high-performance-computing"
  element={
    <Layout>
      <UnnatiPage data={UnnatiHPCData} />
    </Layout>
  }
/>

<Route
  path="/solution/education/unnati/deep-learning-habana-gaudi"
  element={
    <Layout>
      <UnnatiPage data={UnnatiDeepLearningHabanaData} />
    </Layout>
  }
/>

<Route
  path="/solution/education/unnati/security"
  element={
    <Layout>
      <UnnatiPage data={UnnatiSecurityData} />
    </Layout>
  }
/>


        <Route path="/solution/education/-/gen-ai-lab" element={
          <Layout>
            <ReadMorePage data={GenAIData} liveLink={"false"} />
          </Layout>
        } />

        <Route path="/solution/education/-/intel-unnati-ai-lab" element={
          <Layout>
            <ReadMorePage data={Unnati_AI__Lab} liveLink={"false"} />
          </Layout>
        } />

        <Route path="/solution/education/-/high-performance-computing-lab" element={
          <Layout>
            <ReadMorePage data={HPC_Data} liveLink={"false"} />
          </Layout>
        } />

        <Route path="/solution/education/-/confidential-computing-lab" element={
          <Layout>
            <ReadMorePage data={ConfidentialComputingData} liveLink={"false"} />
          </Layout>
        } />

        <Route path="/solution/education/-/deep-learning-lab" element={
          <Layout>
            <ReadMorePage data={DL_Lab_Data} liveLink={"false"} />
          </Layout>
        } />


        {/* Catch-all route for undefined paths */}
        <Route path="*" element={
          <Layout>
            <div className="min-h-screen flex items-center justify-center bg-gray-900">
              <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-4">Under work please check out our other products</h1>
                <p className="text-xl mb-8">The page you're looking for doesn't exist.</p>
                <a 
                  href="/" 
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Go Back Home
                </a>
              </div>
            </div>
          </Layout>
        }/>

      </Routes>
    </>
  );
};

export default AppRoutes;