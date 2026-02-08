import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./layout/MainLayout";

// Pages
import HomePage from "./pages/HomePage";

// Reusable Portfolio Page
import PortfolioPage from "./components/PortfolioPage";

// Resume Page (DEDICATED)
import ResumePage from "./data/portfolio/ResumePage";

// Portfolio Data
import { aiSolutionsData } from "./data/aiSolutionsData";
import { resumeData } from "./data/portfolio/resume.data";
import { websitesData } from "./data/portfolio/websites.data";
import { gameDevData } from "./data/portfolio/gameDev.data";
import { articlesData } from "./data/portfolio/articles.data";

/* ---------------------------------------
   Scroll to top on every route change
---------------------------------------- */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

/* ---------------------------------------
   App Routes
---------------------------------------- */
const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />

        {/* AI SOLUTIONS */}
        <Route
          path="/portfolio/ai-solutions"
          element={
            <Layout>
              <PortfolioPage data={aiSolutionsData} />
            </Layout>
          }
        />

        {/* RESUME (SPECIAL PAGE) */}
        <Route
          path="/portfolio/resume"
          element={
            <Layout>
              <ResumePage data={resumeData} />
            </Layout>
          }
        />

        {/* WEBSITES */}
        <Route
          path="/portfolio/websites"
          element={
            <Layout>
              <PortfolioPage data={websitesData} />
            </Layout>
          }
        />

        {/* GAME DEV */}
        <Route
          path="/portfolio/game-dev"
          element={
            <Layout>
              <PortfolioPage data={gameDevData} />
            </Layout>
          }
        />

        {/* ARTICLES */}
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
