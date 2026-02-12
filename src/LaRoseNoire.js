import React from "react";
import "./App.css";

const LaRoseNoire = () => {
  return (
    <div className="car-details">
      <div className="car-hero">
        <img src="./ROLLS-ROYCELaRoseNoireDroptail.png" alt="La Rose Noire" />
      </div>

      <div className="car-info">
        <h1>ROLLS-ROYCE La Rose Noire Droptail</h1>
        <p className="price">Price: ₹270+ crore</p>

        <ul>
          <li><strong>Engine:</strong> 6.75L Twin-Turbo V12</li>
          <li><strong>Power:</strong> 600 HP</li>
          <li><strong>Top Speed:</strong> 250 km/h</li>
          <li><strong>Transmission:</strong> 8-Speed Automatic</li>
          <li><strong>Fuel Type:</strong> Petrol</li>
        </ul>

        <p>
          The La Rose Noire Droptail is a masterpiece of bespoke craftsmanship.
          Inspired by the Black Baccara rose, this ultra-luxury car defines
          exclusivity and artistic perfection.
        </p>
      </div>
    </div>
  );
};

export default LaRoseNoire;
