import React from "react";
import "./App.css";

const BoatTail = () => {
  return (
    <div className="car-details">
      <div className="car-hero">
        <img src="./ROLLS-ROYCEBoatTaill.jpg" alt="Boat Tail" />
      </div>

      <div className="car-info">
        <h1>ROLLS-ROYCE Boat Tail</h1>
        <p className="price">Price: ₹233+ crore</p>

        <ul>
          <li><strong>Engine:</strong> 6.75L Twin-Turbo V12</li>
          <li><strong>Power:</strong> 563 HP</li>
          <li><strong>Top Speed:</strong> 250 km/h</li>
          <li><strong>Transmission:</strong> 8-Speed Automatic</li>
          <li><strong>Fuel Type:</strong> Petrol</li>
        </ul>

        <p>
          The Rolls-Royce Boat Tail is one of the most expensive cars in the world.
          It is fully handcrafted and designed with extreme attention to luxury,
          elegance, and exclusivity.
        </p>
      </div>
    </div>
  );
};

export default BoatTail;
