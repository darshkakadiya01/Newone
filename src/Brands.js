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
  { name: "Tesla", logo: "./Tesla.png" },
  { name: "Jaguar", logo: "./JAGUAR.jpg" },
  { name: "Land Rover", logo: "./LANDROVER.jpg" },
  { name: "Volvo", logo: "./VOLVO.png" },
  { name: "Ferrari", logo: "./FERRARI.png" },
  { name: "Lamborghini", logo: "./LAMBORGHINI.jpg" },
  { name: "Maserati", logo: "./MASERATI.png" },
  { name: "Rolls-Royce", logo: "./ROLLS-ROYCE.png" },
  { name: "Bentley", logo: "./BENTLEY.jpg" },
  { name: "Aston Martin", logo: "./ASTON-MARTIN.jpg" },
  { name: "McLaren", logo: "./MCLAREN.jpg" },
  { name: "Bugatti", logo: "./BUGATTI.jpg" },
  { name: "Pagani", logo: "./PAGANI.webp" },
  { name: "Koenigsegg", logo: "./KOENIGSEGG.png" },
  { name: "Alfa Romeo", logo: "./ALFA-ROMEO.png" },
  { name: "Cadillac", logo: "./CADILLAC.jpg" },
  { name: "Infiniti", logo: "./INFINITI.webp" },
  { name: "Acura", logo: "./ACURA.png " },
  { name: "Genesis", logo: "./GENESIS.jpg" },
  { name: "Lincoln", logo: "./LINCOLN.jpg" },
  { name: "Mitsubishi", logo: "./MITSUBISHI.png" },
  { name: "Subaru", logo: "./SUBARU.png" },
  { name: "Mazda", logo: "./MAZDA.png" },
  { name: "Honda", logo: "./HONDA.png" },
  { name: "Toyota", logo: "./TOYOTA.png" },
  { name: "Nissan", logo: "./NISSAN.png" },
  { name: "Hyundai", logo: "./HYUNDAI.png" },
  { name: "Kia", logo: "./KIA.jpg" },
  { name: "Jeep", logo: "./JEEP.jpg" },
  { name: "Chevrolet", logo: "./CHEVROLET.png" },
  { name: "Ford", logo: "./FORD.png" },
  { name: "Volkswagen", logo: "./VOLKSWAGEN.png" },
  { name: "Renault", logo: "./RENAULT.png" },
  { name: "Peugeot", logo: "./PEUGEOT.png" },
  { name: "Citroën", logo: "./CITROEN.png" },
  { name: "Skoda", logo: "./SKODA.png" },
  { name: "Seat", logo: "./SEAT.jpg" },
  { name: "Fiat", logo: "./FIAT.png" },
  { name: "Lancia", logo: "./LANCIA.jpg" },
  { name: "Dodge", logo: "./DODGE.jpg" },
  { name: "Ram", logo: "./RAM.png" },
  { name: "GMC", logo: "./GMC.png"},
  { name: "Chrysler", logo: "./CHRYSLER.png"},
  { name: "Buick", logo: "./BUICK.jpg"},
  { name: "xiaomi", logo: "./XIAOMI.png"},
  { name: "suzuki", logo: "./SUZUKI.png"},
  { name: "mahindra", logo: "./MAHINDRA.jpeg"},
  { name: "tata", logo: "./TATA.webp"},
  { name: "lotus", logo: "./LOTUS.png"},
  { name: "mini", logo: "./MINI.jpg"},
  { name: "Force Motors", logo: "./FORCE-MOTORS.png"},
  { name: "gelly", logo: "./GELLY.jpg"},
  { name: "Chery", logo: "./CHERY.png"},
  { name: "Rimac", logo: "./RIMAC.webp"},
  { name: "MG", logo: "./MG.webp"},
  { name: "Smart", logo: "./SMART.jpg"},
  { name: "Opel", logo: "./OPEL.png"},
  { name: "Maybach", logo: "./MAYBACH.png"},
  { name: "Hindustan Motors", logo: "./HINDUSTAN-MOTORS.png"},
  { name: "Ashok Leyland", logo: "./ASHOK-LEYLAND.jpg"},
  { name: "Polestar", logo: "./POLESTAR.webp"},
  { name: "Rivian", logo: "./RIVIAN.png"},
  { name: "Lucid Motors", logo: "./LUCID-MOTORS.webp"},
  { name: "Fisker", logo: "./FISKER.png"},
  { name: "Saab", logo: "./SAAB.png"},
  { name: "Scion", logo: "./SCION.png"},
  { name: "Hummer", logo: "./HUMMER.png"},
  { name: "GAC", logo: "./GAC.png"},
  { name: "Oldsmobile", logo: "./OLDSMOBILE.jpg"},
  { name: "Pontiac", logo: "./PONTIAC.png"},
  { name: "Saturn", logo: "./SATURN.webp"},
  { name: "Mercury", logo: "./MERCURY.png"},
  { name: "Plymouth", logo: "./PLYMOUTH.png"},
  { name: "Hino", logo: "./HINO.png"},
  { name: "Isuzu", logo: "./ISUZU.jpg"},
  { name: "Datsun", logo: "./DATSUN.jpg"},
  { name: "Lada", logo: "./LADA.png"},
  { name: "Zotye", logo: "./ZOTYE.png"},
  { name: "Morgan", logo: "./MORGAN.png"},
  { name: "TVR", logo: "./TVR.jpg"},
  { name: "Ginetta", logo: "./GINETTA.png"},
  { name: "Ariel", logo: "./ARIEL.webp"},
  { name: "Caterham", logo: "./CATERHAM.png"},
  { name: "BAC", logo: "./BAC.png"},
];

const Brands = () => {
  const navigate = useNavigate();

  const handleClick = (brandName) => {
    navigate(`/brand/${brandName.toLowerCase()}`);
  };

  return (
    <>
    <head>
  <title>CARVOCARZ - Premium Car Marketplace | Compare & Reviews</title>

  <meta name="description" content="CARVOCARZ is a premium car website where you can explore top brands, compare cars, check specifications and read expert reviews. Discover luxury, electric and performance cars in one place." />

  <meta name="keywords" content="CARVOCARZ, car comparison, all car Brands cars, car reviews, About cars, carvoc carz, cars, car prise in india, car price, branded car price, about branded cars, compare branded cars, branded cars review, indian cars, type of cars, History of cars timeline, About cars in english, When Were cars popularized, facts about cars, all car price, Top 10 indian cars, paragraph about cars, most expansive cars in the world, pagani cars, pagani, volvo, cars build quality,  luxury cars, BMW, Audi, Mercedes, Tesla, SUV cars, electric cars India" />

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
    </>
  );
};

export default Brands;
