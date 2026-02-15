import React from "react";
import "./App.css";

const Home = () => {
  return (
    <>
    <head>
  <title>CARVOCARZ - About Branded Car Marketplace | Compare & Reviews</title>

  <meta name="description" content="CARVOCARZ is a premium car website where you can explore top brands, compare cars, check specifications and read expert reviews. Discover luxury, electric and performance cars in one place." />

  <meta name="keywords" content="CARVOCARZ, car comparison, car reviews, About cars, carvoc carz, cars, car prise in india, car price, branded car price, about branded cars, compare branded cars, branded cars review, indian cars, type of cars, History of cars timeline, About cars in english, When Were cars popularized, facts about cars, all car price, Top 10 indian cars, paragraph about cars, most expansive cars in the world, pagani cars, pagani, volvo, cars build quality,  luxury cars, BMW, Audi, Mercedes, Tesla, SUV cars, electric cars India" />

  <meta name="author" content="CARVOCARZ" />
  <meta name="google-site-verification" content="cc6m8lYZbZqvaqNc19af3idK47cz4WRJbg38JIaQYBU" />

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
    <div className="home-wrapper">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">
          <span className="hero-badge">Premium Car Marketplace</span>
            <h1>
              Find Your <span>Perfect Car</span>
            </h1>
            <p>
              Carvocarz helps you explore top car brands, compare models,
              check specifications, and read expert reviews — all in one
              professional platform built for car lovers.
            </p>
            <div className="hero-actions">
              <a href="/inventory" className="btn btn-primary">Explore Cars</a>
              <a href="/contact" className="btn btn-outline">Contact Us</a>
            </div>
        </div>


        <div className="hero-right">
          <img
            src="./download.jpg"
            alt="Luxury Car"
            className="hero-car"
          />
        </div>
      </section>

      {/* FEATURED CARS SECTION */}
      <section className="featured-cars">
      <h2>Featured Cars</h2>
        <div className="car-grid">
          <div className="car-card">
            <img src="./ROLLS-ROYCEBoatTail.jpg" alt="Car 1" />
            <h3>ROLLS-ROYCE Boat Tail</h3>
            <p>Performance, style, and luxury all in one machine.</p>
            <a href="/boat-tail" className="btn car-btn">Learn More</a>
          </div>
          <div className="car-card">
            <img src="./PAGANI-zonda.jpg" alt="Car 2" />
            <h3>PAGANI Zonda</h3>
            <p>Elegant design meets extreme speed and power.</p>
            <a href="/pagani-zonda" className="btn car-btn">Learn More</a>
          </div>
          <div className="car-card">
            <img src="./ROLLS-ROYCElarose.jpg" alt="Car 3" />
            <h3>ROLLS-ROYCE La Rose Noire Droptail</h3>
            <p>The future of luxury cars with unmatched performance.</p>
            <a href="/la-rose-noire" className="btn car-btn">Learn More</a>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="cta-section">
        <h2>Start Your Car Journey Today</h2>
        <p>
          Browse our extensive collection of cars, compare models, and find the
          perfect match for your lifestyle.
        </p>
        <a href="/brands" className="btn primary-btn">
          Browse Brands
        </a>
      </section>
    </div>
    </>
  );
};

export default Home;
