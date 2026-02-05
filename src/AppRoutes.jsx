import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./layout/MainLayout";

// Pages
import HomePage from "./pages/HomePage";

// Reusable Portfolio Page
import PortfolioPage from "./components/PortfolioPage";

// Portfolio Data
import { aiSolutionsData } from "./data/aiSolutionsData";
import { resumeData } from "./data/resumeData";
import { websitesData } from "./data/websitesData";
import { gameDevData } from "./data/gameDevData";
import { articlesData } from "./data/articlesData";

// Scroll to top on route change
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
        {/* ✅ HOME (DO NOT REMOVE) */}
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />

        {/* Portfolio Routes */}
        <Route
          path="/portfolio/ai-solutions"
          element={
            <Layout>
              <PortfolioPage data={aiSolutionsData} />
            </Layout>
          }
        />

        <Route
          path="/portfolio/resume"
          element={
            <Layout>
              <PortfolioPage data={resumeData} />
            </Layout>
          }
        />

        <Route
          path="/portfolio/websites"
          element={
            <Layout>
              <PortfolioPage data={websitesData} />
            </Layout>
          }
        />

        <Route
          path="/portfolio/game-dev"
          element={
            <Layout>
              <PortfolioPage data={gameDevData} />
            </Layout>
          }
        />

        <Route
          path="/portfolio/articles"
          element={
            <Layout>
              <PortfolioPage data={articlesData} />
            </Layout>
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <Layout>
              <div className="text-center text-white py-20">
                <h1 className="text-4xl font-bold mb-4">
                  Page not found
                </h1>
                <p className="text-lg mb-6">
                  This section will be updated soon.
                </p>
                <a
                  href="/"
                  className="px-6 py-3 bg-blue-600 rounded-lg"
                >
                  Go Home
                </a>
              </div>
            </Layout>
          }
        />
      </Routes>
    </>
  );
};

export default AppRoutes;
