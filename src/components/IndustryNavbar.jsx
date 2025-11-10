import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./IndustryNavbar.css";

const IndustryNavbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  const industries = [
    {
      name: "Manufacturing",
      products: [
        { name: "Tender Analysis", path: "/usecase/tender-analysis" },
        { name: "Product 2", path: "/usecase/product2" },
      ],
    },
    {
      name: "Education",
      products: [
        { name: "Product 3", path: "/usecase/product3" },
        { name: "Product 4", path: "/usecase/product4" },
      ],
    },
    {
      name: "BFSI",
      products: [
        { name: "Product 5", path: "/usecase/product5" },
        { name: "Product 6", path: "/usecase/product6" },
      ],
    },
    {
      name: "Hospitality",
      products: [
        { name: "Product 7", path: "/usecase/product7" },
        { name: "Product 8", path: "/usecase/product8" },
      ],
    },
  ];

  const handleProductClick = (path) => {
    navigate(path);
    setActiveDropdown(null); // close dropdown after navigation
  };

  return (
    <nav className="industry-navbar">
      <div className="navbar-content">
        <h2 className="navbar-heading">Industry Products</h2>

        <div className="dropdowns-container">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className={`dropdown ${
                activeDropdown === industry.name ? "active" : ""
              }`}
              onMouseEnter={() => setActiveDropdown(industry.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="dropdown-btn">{industry.name}</button>

              {activeDropdown === industry.name && (
                <div className="dropdown-menu">
                  {industry.products.map((product, index) => (
                    <button
                      key={index}
                      className="dropdown-item"
                      onClick={() => handleProductClick(product.path)}
                    >
                      {product.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default IndustryNavbar;
