import React from "react";
import "./App.css";

const Inventory = () => {
  return (
    <>
      <head>
        <title>
          Car Inventory in India | Luxury, SUV & Electric Cars Price
        </title>

        <meta
          name="description"
          content="Explore premium car inventory including luxury cars, SUV cars and electric cars in India. Compare car price, specifications and performance before buying."
        />

        <meta
          name="keywords"
          content="car inventory india, luxury cars price, SUV cars india, electric cars india, premium cars, car price in india, branded cars, BMW price, Audi price, Mercedes price"
        />

        <meta name="author" content="CARZOO" />
        <meta name="google-site-verification" content="cc6m8lYZbZqvaqNc19af3idK47cz4WRJbg38JIaQYBU" />

        <meta name="robots" content="index, follow" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="CARZOO - Premium Car Marketplace" />
        <meta property="og:description" content="Explore luxury cars, compare models and read reviews at CARZOO." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://carzoo.vercel.app/inventory" />
        <meta property="og:image" content="https://carzoo.vercel.app/MercedesAMGGT.jpg" />

        <link rel="canonical" href="https://carzoo.vercel.app/" />

        <link rel="icon" type="image/png" href="/CARZOO-favicon.png" />

        <meta name="theme-color" content="#E35E56" />
      </head>

      <div className="inventory-wrapper">
        <section className="inventory-hero">
          <h1>Premium Car Inventory – Explore Latest Car Price in India</h1>
          <p>
            Discover our wide range of branded cars including luxury cars,
            sports cars, SUV cars and electric vehicles. Compare car price in
            India, check specifications and explore performance details before
            choosing your perfect vehicle.
          </p>
        </section>

        <section className="inventory-grid">
          <div className="inventory-card">
            <img src="./bmw-m4.jpeg" alt="BMW M4 luxury car" />
            <div className="card-content">
              <h3>BMW M4</h3>
              <p>
                High-performance luxury coupe with twin-turbo engine, premium
                interior and aggressive styling.
              </p>
              <span className="price">₹1.52 Crore</span>
            </div>
          </div>

          <div className="inventory-card">
            <img src="./AudiRS7.jpg" alt="Audi RS7 luxury sedan" />
            <div className="card-content">
              <h3>Audi RS7</h3>
              <p>
                Executive luxury sedan offering powerful performance,
                advanced technology and refined comfort.
              </p>
              <span className="price">₹1.94 Crore</span>
            </div>
          </div>

          <div className="inventory-card">
            <img src="./MercedesAMGGT.jpg" alt="Mercedes AMG GT sports car" />
            <div className="card-content">
              <h3>Mercedes AMG GT</h3>
              <p>
                Premium sports car designed for speed, dynamic handling and
                iconic luxury styling.
              </p>
              <span className="price">₹3.65 Crore</span>
            </div>
          </div>

          <div className="inventory-card">
            <img src="./TeslaModelS.jpg" alt="Tesla Model S electric car" />
            <div className="card-content">
              <h3>Tesla Model S</h3>
              <p>
                Advanced electric car with impressive range, instant
                acceleration and cutting-edge EV technology.
              </p>
              <span className="price">₹1.50 Crore</span>
            </div>
          </div>

          <div className="inventory-card">
            <img src="./Porsche911.webp" alt="Porsche 911 sports car" />
            <div className="card-content">
              <h3>Porsche 911</h3>
              <p>
                Legendary sports car known for performance engineering,
                luxury interiors and timeless design.
              </p>
              <span className="price">₹3.80 Crore</span>
            </div>
          </div>

          <div className="inventory-card">
            <img src="./RangeRoverSport.jpg" alt="Range Rover Sport SUV" />
            <div className="card-content">
              <h3>Range Rover Sport</h3>
              <p>
                Premium SUV combining off-road capability, luxury comfort and
                powerful engine options.
              </p>
              <span className="price">₹2.75 Crore</span>
            </div>
          </div>
        </section>
        <section className="inventory-seo-section">
          <h2>Luxury, SUV & Electric Cars Available in Our Inventory</h2>

          <p>
            Our car inventory includes a curated selection of premium and
            branded cars from top global manufacturers. Whether you are looking
            for luxury cars like BMW, Audi and Mercedes, high-performance sports
            cars like Porsche, or advanced electric cars such as Tesla, we bring
            you the latest car price in India along with detailed specifications.
          </p>

          <p>
            SUV cars are among the most popular choices in India due to their
            spacious design, road presence and comfort. Vehicles like Range
            Rover Sport combine luxury with rugged capability, making them ideal
            for both city driving and long-distance travel.
          </p>

          <h3>Compare Car Price & Features Before Buying</h3>

          <p>
            Before purchasing a car, it is important to compare branded car
            prices, engine specifications, fuel type, mileage and maintenance
            cost. Our inventory page helps you explore multiple premium cars in
            one place, making it easier to select the right vehicle according to
            your budget and lifestyle.
          </p>

          <h3>Find the Best Car in India</h3>

          <p>
            From luxury sedans and sports cars to electric vehicles and powerful
            SUV cars, our inventory is regularly updated to provide accurate car
            price in India and reliable information. Explore now and discover
            the perfect premium car for your needs.
          </p>
        </section>
      </div>
    </>
  );
};

export default Inventory;