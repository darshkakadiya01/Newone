import React from "react";
import { useParams } from "react-router-dom";
import "./App.css";

const brandData = {
  bmw: [
    {
      name: "BMW M4 Competition",
      image: "/BMW-M4-Coupe.afd009f75ddb268dc6505fffc31356c2.fc9fbf2e013d5612025dee6ed4bba9f2.webp",
      engine: "3.0L Twin‑Turbo Inline‑6",
      fuel: "Petrol",
      speed: "290 km/h",
      price: "₹1.53 Crore"
    },
    {
      name: "BMW X5",
      image: "https://cdn.motor1.com/images/mgl/9mmkM/s1/bmw-x5.jpg",
      engine: "3.0L Inline‑6 Turbo",
      fuel: "Diesel",
      speed: "230 km/h",
      price: "₹96 Lakh"
    },
    {
      name: "BMW 5 Series",
      image: "https://cdn.motor1.com/images/mgl/0eOZ6/s1/bmw-5-series.jpg",
      engine: "2.0L Turbo",
      fuel: "Petrol / Diesel",
      speed: "250 km/h",
      price: "₹72 Lakh"
    },
    {
      name: "BMW i7",
      image: "https://cdn.motor1.com/images/mgl/qkkXr/s1/bmw-i7.jpg",
      engine: "Electric Dual Motor",
      fuel: "Electric",
      speed: "240 km/h",
      price: "₹2.05 Crore"
    }
  ],

  audi: [
    {
      name: "Audi A6",
      image: "https://cdn.motor1.com/images/mgl/0A6aX/s1/audi-a6.jpg",
      engine: "3.0L V6",
      fuel: "Petrol / Diesel",
      speed: "250 km/h",
      price: "₹70 Lakh"
    },
    {
      name: "Audi Q7",
      image: "https://cdn.motor1.com/images/mgl/3xXlE/s1/audi-q7.jpg",
      engine: "3.0L V6 Turbo",
      fuel: "Diesel",
      speed: "245 km/h",
      price: "₹90 Lakh"
    }
   ],
};

const BrandDetail = () => {
  const { brand } = useParams(); 
  const cars = brandData[brand.toLowerCase()];

  if (!cars) return <h2 style={{ textAlign: "center", padding: "50px" }}>Brand not found!</h2>;

  return (
    <div className="brand-wrapper">
      <section className="brand-hero">
        <h1>{brand.toUpperCase()} Cars</h1>
        <p>Explore luxury, performance, and innovation from {brand.toUpperCase()}</p>
      </section>

      <section className="brand-grid">
        {cars.map((car, index) => (
          <div className="brand-card" key={index}>
            <img src={car.image} alt={car.name} className="brand-image" />
            <div className="brand-content">
              <h3>{car.name}</h3>
              <ul>
                <li><strong>Engine:</strong> {car.engine}</li>
                <li><strong>Fuel:</strong> {car.fuel}</li>
                <li><strong>Top Speed:</strong> {car.speed}</li>
                <li><strong>Price:</strong> {car.price}</li>
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BrandDetail;
