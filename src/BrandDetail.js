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
    <>
    <head>
  <title>CARVOCARZ - Branded Car Details | Compare & Reviews</title>

  <meta name="description" content="CARVOCARZ is a premium car website where you can explore top brands, compare cars, check specifications and read expert reviews. Discover luxury, electric and performance cars in one place." />

  <meta name="keywords" content="CARVOCARZ, car comparison, car Brands in detail, car reviews, About cars, carvoc carz, cars, car prise in india, car price, branded car price, about branded cars, compare branded cars, branded cars review, indian cars, type of cars, History of cars timeline, About cars in english, When Were cars popularized, facts about cars, all car price, Top 10 indian cars, paragraph about cars, most expansive cars in the world, pagani cars, pagani, volvo, cars build quality,  luxury cars, BMW, Audi, Mercedes, Tesla, SUV cars, electric cars India" />

  <meta name="author" content="CARVOCARZ" />

  <meta name="robots" content="index, follow" />

  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <meta property="og:title" content="CARVOCARZ - Premium Car Marketplace" />
  <meta property="og:description" content="Explore luxury cars, compare models and read reviews at CARVOCARZ." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://carvocarz.vercel.app/" />
  <meta property="og:image" content="https://carvocarz.vercel.app/CARVOCARZ-favicon.png" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="CARVOCARZ - Compare & Explore Cars" />
  <meta name="twitter:description" content="Find your perfect car. Compare models and read reviews at CARVOCARZ." />
  <meta name="twitter:image" content="https://carvocarz.vercel.app/CARVOCARZ-favicon.png" />

  <link rel="canonical" href="https://carvocarz.vercel.app/" />

  <link rel="icon" type="image/png" href="/CARVOCARZ-favicon.png" />

  <meta name="theme-color" content="#FBC664" />
</head>
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
    </>
  );
};

export default BrandDetail;
