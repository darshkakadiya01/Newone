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
