import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./layout/MainLayout";

// Pages
import HomePage from "./pages/HomePage";

// Reusable Portfolio Page
import PortfolioPage from "./components/PortfolioPage";

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
   Portfolio Routes Config
---------------------------------------- */
const portfolioRoutes = [
  {
    path: "/portfolio/ai-solutions",
    data: aiSolutionsData,
  },
  {
    path: "/portfolio/resume",
    data: resumeData,
  },
  {
    path: "/portfolio/websites",
    data: websitesData,
  },
  {
    path: "/portfolio/game-dev",
    data: gameDevData,
  },
  {
    path: "/portfolio/articles",
    data: articlesData,
  },
];

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

        {/* PORTFOLIO ROUTES */}
        {portfolioRoutes.map(({ path, data }) => (
          <Route
            key={path}
            path={path}
            element={
              <Layout>
                <PortfolioPage data={data} />
              </Layout>
            }
          />
        ))}

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
