import React from "react";
import "./App.css";

const Home = () => {
  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Discover Your Dream Car</h1>
            <p>
              Carvo brings you detailed information about all the top car brands,
              models, specifications, and reviews. Explore the world of
              performance, luxury, and style.
            </p>
            <div className="hero-buttons">
              <a href="/cars" className="btn primary-btn">
                Explore Cars
              </a>
              <a href="/contact" className="btn secondary-btn">
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <img src="./download.jpg" alt="Hero Car" className="hero-image" />
      </section>

      {/* FEATURED CARS SECTION */}
      <section className="featured-cars">
        <h2>Featured Cars</h2>
        <div className="car-grid">
          <div className="car-card">
            <img src="./download.jpg" alt="Car 1" />
            <h3>BMW M4</h3>
            <p>Performance, style, and luxury all in one machine.</p>
            <a href="/cars" className="btn car-btn">
              Learn More
            </a>
          </div>
          <div className="car-card">
            <img src="./download.jpg" alt="Car 2" />
            <h3>Audi RS7</h3>
            <p>Elegant design meets extreme speed and power.</p>
            <a href="/cars" className="btn car-btn">
              Learn More
            </a>
          </div>
          <div className="car-card">
              <img src="./download.jpg" alt="Car 3" />
              <h3>Tesla Model S</h3>
            <p>The future of electric cars with unmatched performance.</p>
            <a href="/cars" className="btn car-btn">
              Learn More
            </a>
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
