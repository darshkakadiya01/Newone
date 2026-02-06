import React from "react";
import "./App.css";


const brands = [
{ name: "BMW", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
{ name: "Audi", logo: "./A231415_small.jpg" },
{ name: "Mercedes-Benz", logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg" },
{ name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" },
{ name: "Toyota", logo: "./emblem_ogp_001.png"},
{ name: "Honda", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda-logo.svg" },
{ name: "Hyundai", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Hyundai_logo.svg" },
{ name: "Kia", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/KIA_logo3.svg" },
{ name: "Ford", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg" },
{ name: "Chevrolet", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Chevrolet-logo.svg" },


{ name: "Volkswagen", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg" },
{ name: "Porsche", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Porsche-Logo.svg" },
{ name: "Ferrari", logo: "https://upload.wikimedia.org/wikipedia/en/d/d1/Ferrari-Logo.svg" },
{ name: "Lamborghini", logo: "https://upload.wikimedia.org/wikipedia/en/d/df/Lamborghini_Logo.svg" },
{ name: "Jaguar", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Jaguar_logo.svg" },
{ name: "Land Rover", logo: "https://upload.wikimedia.org/wikipedia/en/5/5b/Land_Rover_logo_black.svg" },
{ name: "Volvo", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Volvo-Logo.svg" },
{ name: "Mazda", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Mazda_logo.svg" },
{ name: "Nissan", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Nissan_logo.svg" },
{ name: "Subaru", logo: "https://upload.wikimedia.org/wikipedia/commons/6/68/Subaru_logo.svg" },


{ name: "Mitsubishi", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Mitsubishi_logo.svg" },
{ name: "Suzuki", logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Suzuki_logo.svg" },
{ name: "Skoda", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Skoda_logo.svg" },
{ name: "Renault", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Renault_2021_logo.svg" },
{ name: "Peugeot", logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/Peugeot_2021_logo.svg" },
{ name: "Citroën", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Citroen_2022.svg" },
{ name: "Fiat", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Fiat_logo.svg" },
{ name: "Jeep", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Jeep_logo.svg" },
{ name: "Dodge", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dodge_black_logo.svg" },
{ name: "Chrysler", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Chrysler_logo.svg" },


{ name: "Bugatti", logo: "https://upload.wikimedia.org/wikipedia/en/3/3e/Bugatti_logo.svg" },
{ name: "Bentley", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Bentley_logo.svg" },
{ name: "Rolls-Royce", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Rolls-Royce_Motor_Cars_logo.svg" },
{ name: "Aston Martin", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Aston_Martin_logo.svg" },
{ name: "McLaren", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/McLaren_logo.svg" },
{ name: "Lexus", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Lexus_Logo.svg" },
{ name: "Infiniti", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Infiniti_logo.svg" },
{ name: "Acura", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Acura_logo.svg" },
{ name: "Genesis", logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/Genesis_Motor_logo.svg" },


{ name: "BYD", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/BYD_logo.svg" },
{ name: "Tata Motors", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tata_Motors_Logo.svg" },
{ name: "Mahindra", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Mahindra_Logo.svg" },
{ name: "MG", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/MG_logo_2021.svg" },
{ name: "Mini", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e7/MINI_logo.svg" }
];


const Brands = () => {
return (
<div className="brands-wrapper">
<section className="brands-hero">
<h1>Top Car Brands</h1>
<p>Explore the world’s leading automobile manufacturers</p>
</section>


<section className="brands-grid">
{brands.map((brand, index) => (
<div className="brand-card" key={index}>
<img src={brand.logo} alt={brand.name} />
<span>{brand.name}</span>
</div>
))}
</section>
</div>
);
};
export default Brands;