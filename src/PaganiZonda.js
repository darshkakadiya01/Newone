import React from "react";
import "./App.css";

const PaganiZonda = () => {
  return (
    <div className="car-details">
      <div className="car-hero">
        <img src="./PAGANIZondaa.png" alt="Pagani Zonda" />
      </div>

      <div className="car-info">
        <h1>PAGANI Zonda</h1>
        <p className="price">Price:  ₹153+ crore</p>

        <ul>
          <li><strong>Engine:</strong> 7.3L AMG V12</li>
          <li><strong>Power:</strong> 760 HP</li>
          <li><strong>Top Speed:</strong> 355 km/h</li>
          <li><strong>Transmission:</strong> 6-Speed Manual</li>
          <li><strong>Fuel Type:</strong> Petrol</li>
        </ul>

        <p>
          The Pagani Zonda is a hypercar known for its extreme performance,
          carbon fiber body, and aggressive styling. It delivers thrilling
          speed and unmatched engineering.
        </p>
      </div>
    </div>
  );
};

export default PaganiZonda;
