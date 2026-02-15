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
      price: "₹36.27 lakh"
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
      price: " ₹53.15 lakh"
    }
  }
];

const Compare = () => {
  return (
    <>
    <head>
  <title>CARVOCARZ - Branded Cars comparisons | Compare & Reviews</title>

  <meta name="description" content="CARVOCARZ is a premium car website where you can explore top brands, compare cars, check specifications and read expert reviews. Discover luxury, electric and performance cars in one place." />

  <meta name="keywords" content="CARVOCARZ, car comparison, car reviews, About cars, carvoc carz, cars, car prise in india, car price, branded car price, about branded cars, compare branded cars, branded cars review, indian cars, type of cars, History of cars timeline, About cars in english, When Were cars popularized, facts about cars, all car price, Top 10 indian cars, paragraph about cars, most expansive cars in the world, pagani cars, pagani, volvo, cars build quality,  luxury cars, BMW, Audi, Mercedes, Tesla, SUV cars, electric cars India" />

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
    <div className="compare-wrapper">
      <section className="compare-hero">
        <h1>Car Comparison Hub</h1>
        <p>Compare the most popular cars side-by-side and choose the best one for you.</p>
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
    </div>
    </>
  );
};

export default Compare;
