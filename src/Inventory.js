import React from "react";
import "./App.css";


const Inventory = () => {
return (
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
);
};


export default Inventory;