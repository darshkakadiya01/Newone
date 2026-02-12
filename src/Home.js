import React from "react";
import "./App.css";

const Home = () => {
  return (
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
              <a href="/cars" className="btn btn-primary">Explore Cars</a>
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
  );
};

export default Home;
