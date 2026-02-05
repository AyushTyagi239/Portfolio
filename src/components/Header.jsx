import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

import rightLogo from "../assets/IntensityLogoMonowhite.webp";
import StaggeredMenu from "./StaggeredMenu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // ✅ PORTFOLIO MENU
  const menuItems = [
    {
      label: "About Me",
      link: "/about",
    },
    {
      label: "Work",
      children: [
        { label: "AI & LLM Systems", link: "/portfolio/ai-solutions" },
        { label: "Web Applications", link: "/portfolio/websites" },
        { label: "Game Development", link: "/portfolio/game-dev" },
      ],
    },
    {
      label: "Live Projects",
      children: [
        { label: "AI Chatbot", link: "/projects/chatbot" },
        { label: "Expense App", link: "/projects/hisab" },
        { label: "Games", link: "/projects/games" },
      ],
    },
    {
      label: "Articles",
      link: "/blogs",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      
      {/* LEFT - NAV + LOGO */}
      <div className="header-left">
        <button
          className="nav-button"
          onClick={() => navigate(-1)}
          aria-label="Go Back"
        >
          ←
        </button>

        <button
          className="nav-button home-button"
          onClick={() => navigate("/")}
          aria-label="Go Home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="home-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 9.75L12 3l9 6.75M4.5 10.5v9.75A1.5 1.5 0 006 21.75h12a1.5 1.5 0 001.5-1.5V10.5"
            />
          </svg>
        </button>

        <button
          className="nav-button"
          onClick={() => navigate(1)}
          aria-label="Go Forward"
        >
          →
        </button>

        <img
          src={rightLogo}
          alt="Portfolio Logo"
          className="header-logo left-logo"
        />
      </div>

      {/* CENTER - TITLE */}
      <div className="header-center">
        <h1 className="header-title">My Portfolio</h1>
      </div>

      {/* RIGHT - MENU */}
      <div className="header-right">
        <StaggeredMenu
          items={menuItems}
          onItemClick={(item) => {
            if (item?.link) {
              navigate(item.link);
            }
          }}
        />
      </div>
    </header>
  );
};

export default Header;
