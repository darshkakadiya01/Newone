import React from "react";
import "./App.css";

const comparisons = [
  {
    car1: {
      name: "BMW M4 Competition",
      image: "/bmw-m4-competition.webp",
      engine: "3.0L Twin Turbo",
      power: "503 HP",
      price: "₹1.52 crore"
    },
    car2: {
      name: "Mercedes AMG C63",
      image: "/MercedesAMGC63.jpg",
      engine: "2.0L Turbo Hybrid",
      power: "469 HP",
      price: "₹1.91 Crore"
    }
  },
  {
    car1: {
      name: "BMW X5",
      image: "/BMWX5.jpg",
      engine: "3.0L Diesel",
      power: "335 HP",
      price: "₹1.05 Crore"
    },
    car2: {
      name: "Audi Q7",
      image: "/AudiQ7.webp",
      engine: "3.0L V6",
      power: "340 HP",
      price: "₹95.03 Lakh"
    }
  },
  {
    car1: {
      name: "Toyota Fortuner",
      image: "/ToyotaFortuner.jpg",
      engine: "2.8L Diesel",
      power: "201 HP",
      price: "₹49.59 Lakh"
    },
    car2: {
      name: "Ford Endeavour",
      image: "/FordEndeavour.webp",
      engine: "2.0L Turbo",
      power: "210 HP",
      price: "₹36.27 Lakh"
    }
  },
  {
    car1: {
      name: "Hyundai Creta",
      image: "/HyundaiCreta.jpg",
      engine: "1.5L Petrol",
      power: "115 HP",
      price: "₹20.20 Lakh"
    },
    car2: {
      name: "Kia Seltos",
      image: "/KiaSeltos.jpg",
      engine: "1.5L Turbo",
      power: "158 HP",
      price: "₹19.99 Lakh"
    }
  },
  {
    car1: {
      name: "Tesla Model 3",
      image: "/TeslaModel3.webp",
      engine: "Electric",
      power: "283 HP",
      price: "₹90 Lakh"
    },
    car2: {
      name: "BYD Seal",
      image: "/BYDSeal.jpg",
      engine: "Electric",
      power: "308 HP",
      price: "₹53.15 Lakh"
    }
  }
];

const Compare = () => {
  return (
    <>
      <head>
        <title>
          Compare Cars in India | SUV, Luxury & Electric Car Comparison
        </title>

        <meta
          name="description"
          content="Compare cars side by side including SUV cars, luxury cars and electric cars in India. Check car price, engine, power and specifications before buying."
        />

        <meta
          name="keywords"
          content="car comparison india, compare cars in india, compare car price, SUV comparison, luxury car comparison, electric cars india, BMW vs Mercedes, Toyota Fortuner vs Endeavour, Tesla vs BYD"
        />

        <meta name="author" content="CARZOO" />
        <meta name="google-site-verification" content="cc6m8lYZbZqvaqNc19af3idK47cz4WRJbg38JIaQYBU" />

        <meta name="robots" content="index, follow" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="CARZOO - Premium Car Marketplace" />
        <meta property="og:description" content="Explore luxury cars, compare models and read reviews at CARZOO." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://carzoo.vercel.app/compare" />
        <meta property="og:image" content="https://carzoo.vercel.app/KiaSeltos.jpg" />

        <link rel="canonical" href="https://carzoo.vercel.app/" />

        <link rel="icon" type="image/png" href="/CARZOO-favicon.png" />

        <meta name="theme-color" content="#FBC664" />
      </head>

      <div className="compare-wrapper">
        <section className="compare-hero">
          <h1>Car Comparison Tool – Compare Car Price & Specifications</h1>
          <p>
            Compare the most popular SUV cars, luxury cars and electric cars in
            India side by side. Check engine specifications, power output and
            latest car price in India before making your final decision.
          </p>
        </section>

        <section className="compare-grid">
          {comparisons.map((item, index) => (
            <div className="compare-card" key={index}>
              <div className="compare-car">
                <img src={item.car1.image} alt={item.car1.name} />
                <h3>{item.car1.name}</h3>
                <p><strong>Engine:</strong> {item.car1.engine}</p>
                <p><strong>Power:</strong> {item.car1.power}</p>
                <p className="price">{item.car1.price}</p>
              </div>

              <div className="vs">VS</div>

              <div className="compare-car">
                <img src={item.car2.image} alt={item.car2.name} />
                <h3>{item.car2.name}</h3>
                <p><strong>Engine:</strong> {item.car2.engine}</p>
                <p><strong>Power:</strong> {item.car2.power}</p>
                <p className="price">{item.car2.price}</p>
              </div>
            </div>
          ))}
        </section>
        <section className="compare-seo-section">
          <h2>Why Car Comparison is Important Before Buying</h2>

          <p>
            Comparing cars helps buyers understand differences in car price,
            engine performance, fuel type, mileage and overall value. Whether
            you are choosing between luxury cars like BMW and Mercedes or SUV
            cars such as Toyota Fortuner and Ford Endeavour, side-by-side car
            comparison makes the decision easier.
          </p>

          <p>
            With rising demand for electric cars in India, comparing EV models
            like Tesla and BYD is also essential. Buyers can evaluate battery
            range, charging time, performance and overall cost before investing
            in a premium electric vehicle.
          </p>

          <h3>Compare SUV, Luxury & Electric Cars in India</h3>

          <p>
            The Indian car market offers a wide range of options including
            budget hatchbacks, premium sedans, powerful SUV cars and high-end
            sports cars. By using a car comparison tool, you can analyze
            specifications, compare branded car prices and find the best car
            according to your budget and lifestyle needs.
          </p>

          <h3>Check Latest Car Price in India</h3>

          <p>
            Car prices vary depending on variant, features and fuel type.
            Comparing the latest car price in India ensures that you get the
            best value for your money. Always consider maintenance cost,
            resale value and brand reliability before making a purchase.
          </p>
        </section>
      </div>
    </>
  );
};

export default Compare;