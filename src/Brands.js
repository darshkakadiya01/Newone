import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const brands = [
  { name: "BMW", logo: "./BMW.jpg" },
  { name: "Audi", logo: "./AUDI.jpg" },
  { name: "BYD", logo: "./BYD.jpg" },
  { name: "Mercedes-Benz", logo: "./mercedes-benz.jpg" },
  { name: "Lexus", logo: "./LEXUS.jpg" },
  { name: "Porsche", logo: "./Porsche-Logo.png" },
];

const Brands = () => {
  const navigate = useNavigate();

  const handleClick = (brandName) => {
    navigate(`/brand/${brandName.toLowerCase()}`);
  };

  return (
    <div className="brands-wrapper">
      <header className="brands-header">
        <h1>Our Luxury Car Brands</h1>
        <p>Click on a brand to see its cars</p>
      </header>

      <div className="brands-grid">
        {brands.map((brand, index) => (
          <div
            className="brand-card"
            key={index}
            onClick={() => handleClick(brand.name)}
            style={{ cursor: "pointer" }}
          >
          <div className="logo-box">
            <img src={brand.logo} alt={brand.name} />
          </div>
          <h3>{brand.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
