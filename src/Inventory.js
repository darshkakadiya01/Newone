import React from "react";
import "./App.css";


const Inventory = () => {
return (
    <>
    <head>
  <title>CARVOCARZ - Branded Cars Inventory | Compare & Reviews</title>

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
    <div className="inventory-wrapper">
        <section className="inventory-hero">
            <h1>Car Inventory</h1>
            <p>
            Explore our wide range of premium cars. Compare specifications,
            performance, and design to find the car that fits your lifestyle.
            </p>
        </section>


        <section className="inventory-grid">
            <div className="inventory-card">
                <img src="./bmw-m4.jpeg" alt="BMW M4" />
                <div className="card-content">
                <h3>BMW M4</h3>
                <p>High-performance coupe with aggressive styling and luxury.</p>
                <span className="price">₹1.52 crore</span>
                </div>
            </div>


            <div className="inventory-card">
                <img src="./AudiRS7.jpg" alt="Audi RS7" />
                <div className="card-content">
                <h3>Audi RS7</h3>
                <p>Executive sedan combining power, comfort, and technology.</p>
                <span className="price">₹1.94 crore</span>
                </div>
            </div>


            <div className="inventory-card">
                <img src="./MercedesAMGGT.jpg" alt="Mercedes AMG GT" />
                <div className="card-content">
                <h3>Mercedes AMG GT</h3>
                <p>Iconic sports car built for speed and elegance.</p>
                <span className="price">₹3.65 Crore</span>
                </div>
            </div>


            <div className="inventory-card">
                <img src="./TeslaModelS.jpg" alt="Tesla Model S" />
                <div className="card-content">
                <h3>Tesla Model S</h3>
                <p>Electric innovation with unmatched acceleration.</p>
                <span className="price">₹1.50 Crore</span>
                </div>
            </div>


            <div className="inventory-card">
                <img src="./Porsche911.webp" alt="Porsche 911" />
                <div className="card-content">
                <h3>Porsche 911</h3>
                <p>Timeless design paired with legendary performance.</p>
                <span className="price">₹3.80 crore</span>
                </div>
            </div>


            <div className="inventory-card">
                <img src="./RangeRoverSport.jpg" alt="Range Rover Sport" />
                <div className="card-content">
                <h3>Range Rover Sport</h3>
                <p>Luxury SUV built for comfort and off-road confidence.</p>
                <span className="price">₹2.75 crore</span>
                </div>
            </div>
        </section>
    </div>
    </>
);
};


export default Inventory;