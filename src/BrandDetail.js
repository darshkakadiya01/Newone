import React from "react";
import { useParams } from "react-router-dom";
import "./App.css";

const brandData = {
  bmw: [
    {
      name: "BMW M4 Competition",
      image: "/bmw-m4-competition.webp",
      engine: "3.0L Twin-Turbo Inline-6",
      fuel: "Petrol",
      speed: "290 km/h",
      price: "₹1.53 Crore"
    },
    {
      name: "BMW X5",
      image: "https://cdn.motor1.com/images/mgl/9mmkM/s1/bmw-x5.jpg",
      engine: "3.0L Inline-6 Turbo",
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
  ]
};

const BrandDetail = () => {
  const { brand } = useParams();
  const cars = brandData[brand?.toLowerCase()];

  if (!cars) {
    return (
      <div className="brand-wrapper">
        <h2 className="not-found">Brand not found!</h2>
      </div>
    );
  }

  return (
    <div className="brand-wrapper">
      <section className="brand-hero">
        <h1>{brand.toUpperCase()} Cars</h1>
        <p>
          Explore luxury, performance, and innovation from {brand.toUpperCase()}
        </p>
      </section>

      <section className="brand-grid">
        {cars.map((car, index) => (
          <div className="brand-card" key={index}>
            <div className="image-wrapper">
              <img src={car.image} alt={car.name} />
            </div>

            <div className="card-content">
              <h3>{car.name}</h3>

              <p><strong>Engine:</strong> {car.engine}</p>
              <p><strong>Fuel:</strong> {car.fuel}</p>
              <p><strong>Top Speed:</strong> {car.speed}</p>

              <div className="price">{car.price}</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BrandDetail;
