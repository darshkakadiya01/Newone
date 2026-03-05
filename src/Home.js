import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);

    const [formData, setFormData] = useState({
    from_name: "",
    favorite_car: "",
    message: ""
  });

  const faqData = [
    {
      question: "What can I write about a car?",
      answer:
        "You can write about engine performance, horsepower, torque, top speed, fuel efficiency, design, interior features, safety systems, infotainment technology, car price in India, and brand history. Car comparisons and driving experience are also important topics."
    },
    {
      question: "Did you know facts about cars?",
      answer:
        "The first petrol-powered car was invented in 1886. Some hypercars can exceed 400 km/h. Electric cars are growing rapidly in India due to eco-friendly technology and lower running costs. Modern cars include advanced AI-based safety systems."
    },
    {
      question: "What do I know about cars?",
      answer:
        "Cars are motor vehicles used for transportation. They include sedans, hatchbacks, SUVs, luxury cars, sports cars, hybrid cars, and electric vehicles. Cars run on petrol, diesel, hybrid, or fully electric engines."
    },
    {
      question: "What is detail in a car?",
      answer:
        "Car details include engine type, horsepower, torque, transmission, fuel type, mileage, seating capacity, safety rating, suspension, braking system, infotainment system, and build quality."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
return (
    <>
      <head>
        <title>
          CARZOO - Premium Branded Cars in India | Compare Car Price & Reviews
        </title>

        <meta
          name="description"
          content="CARZOO is India's premium branded car marketplace where you can explore luxury cars, electric cars, SUV cars, compare car prices, check specifications and read expert car reviews."
        />

        <meta
          name="keywords"
          content="CARZOO, car price in india, about cars, expert car, branded cars, car lovers, luxury cars, electric cars India, SUV cars, compare cars, car reviews, BMW, Audi, Mercedes, Tesla, Pagani, Rolls Royce, indian cars, top 10 indian cars, most expensive cars in the world"
        />

        <meta name="author" content="CARZOO" />
        <meta name="google-site-verification" content="cc6m8lYZbZqvaqNc19af3idK47cz4WRJbg38JIaQYBU" />

        <meta name="robots" content="index, follow" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="CARZOO - Premium Car Marketplace" />
        <meta property="og:description" content="Explore luxury cars, compare models and read reviews at CARZOO." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://carzoo.vercel.app/" />
        <meta property="og:image" content="https://carzoo.vercel.app/download.jpg" />

        <link rel="canonical" href="https://carzoo.vercel.app/" />

        <link rel="icon" type="image/png" href="/CARZOO-favicon.png" />

        <meta name="theme-color" content="#E35E56" />
      </head>

      <div className="home-wrapper">
        <section className="hero">
          <div className="hero-left">
            <span className="hero-badge">India's Trusted Branded Car Platform</span>

            <h1>
              Explore Premium <span>Branded Cars</span> in India
            </h1>

            <p>
              Welcome to <strong>CARZOO</strong>, your complete destination
              for exploring branded cars, checking the latest car price in India,
              comparing luxury cars, electric cars, SUV cars, and reading expert
              car reviews. Whether you are searching for BMW, Audi, Mercedes,
              Tesla, or even the most expensive cars in the world like Rolls Royce
              and Pagani, we bring everything together in one professional car
              marketplace.
            </p>

            <div className="hero-actions">
              <a href="/inventory" className="btn btn-primary">
                Explore Cars
              </a>
              <a href="/contact" className="btn btn-outline">
                Contact Us
              </a>
            </div>
          </div>

          <div className="hero-right">
            <img
              src="./download.jpg"
              alt="Luxury branded car in India"
              className="hero-car"
            />
          </div>
        </section>
        <section className="about-section">
          <h2>About CARZOO – Compare Branded Cars Easily</h2>
          <p>
            CARZOO is designed for car lovers who want detailed information
            about Indian cars and international luxury brands. From new EV cars
            and CNG cars to high-performance sports cars, our platform allows
            users to compare branded cars, explore specifications, check build
            quality, and understand pricing before making a decision.
          </p>

          <p>
            If you are looking for the top 10 Indian cars, searching for the
            latest electric cars in India, or curious about the history of cars
            timeline and how cars became popular, CARZOO provides reliable
            and updated content written in simple English for every user.
          </p>
        </section>
        <section className="featured-cars">
          <h2>Most Expensive & Luxury Cars in the World</h2>

          <div className="car-grid">
            <div className="car-card">
              <img
                src="./ROLLS-ROYCEBoatTail.jpg"
                alt="Rolls Royce Boat Tail most expensive car"
              />
              <h3>ROLLS-ROYCE Boat Tail</h3>
              <p>
                One of the most expensive cars in the world, offering unmatched
                luxury, handcrafted design, and elite exclusivity.
              </p>
              <a href="/boat-tail" className="btn car-btn">
                Learn More
              </a>
            </div>

            <div className="car-card">
              <img
                src="./PAGANI-zonda.jpg"
                alt="Pagani Zonda luxury sports car"
              />
              <h3>PAGANI Zonda</h3>
              <p>
                A legendary hypercar known for extreme performance, powerful
                engineering, and iconic design.
              </p>
              <a href="/pagani-zonda" className="btn car-btn">
                Learn More
              </a>
            </div>

            <div className="car-card">
              <img
                src="./ROLLS-ROYCElarose.jpg"
                alt="Rolls Royce La Rose Noire Droptail luxury car"
              />
              <h3>ROLLS-ROYCE La Rose Noire Droptail</h3>
              <p>
                A masterpiece in the luxury car segment combining innovation,
                premium interiors, and extraordinary craftsmanship.
              </p>
              <a href="/la-rose-noire" className="btn car-btn">
                Learn More
              </a>
            </div>
          </div>
        </section>
        <section className="why-section">
          <h2>Why Choose CARZOO for Car Comparison?</h2>
          <ul>
            <li>Compare car prices in India easily</li>
            <li>Explore luxury cars, SUV cars, and electric vehicles</li>
            <li>Read detailed branded car reviews</li>
            <li>Check specifications like engine, fuel type, top speed & mileage</li>
            <li>Discover new EV cars and upcoming car launches</li>
          </ul>
        </section>
        <section className="cta-section">
          <h2>Start Your Car Buying Journey Today</h2>
          <p>
            Browse our complete collection of branded cars, compare models,
            explore car prices, and find the perfect car for your lifestyle.
            CARZOO makes car research simple, professional, and reliable.
          </p>

          <a href="/brands" className="btn primary-btn">
            Browse All Car Brands
          </a>
        </section>
        <section className="faq-section">
          <h2>Car FAQs – Everything You Need to Know</h2>

          <div className="faq-container">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
              >
                <div
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3>{item.question}</h3>
                  <span>{activeIndex === index ? "-" : "+"}</span>
                </div>

                {activeIndex === index && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

