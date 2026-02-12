import React from "react";
import "./App.css";

const reviews = [
  {
    name: "Rahul Sharma",
    car: "BMW M4 Competition",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    review:
      "The BMW M4 is an absolute beast. The acceleration is insane and the handling is razor sharp. Premium interiors and performance combined!"
  },
  {
    name: "Priya Patel",
    car: "Audi Q7",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    review:
      "Audi Q7 offers unmatched comfort and smooth driving experience. Perfect SUV for family and long trips."
  },
  {
    name: "Amit Verma",
    car: "Mercedes AMG C63",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    review:
      "Luxury meets performance. The AMG engine sound alone makes it worth every rupee. Highly recommended!"
  },
  {
    name: "Sneha Kapoor",
    car: "Hyundai Creta",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
    review:
      "Creta is stylish, affordable and feature-packed. One of the best SUVs in its segment."
  },
  {
    name: "Rohit Mehta",
    car: "Tesla Model 3",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    rating: 5,
    review:
      "Electric performance is unbelievable. Instant torque and futuristic interiors make Tesla a dream car."
  },
  {
    name: "Anjali Desai",
    car: "Toyota Fortuner",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
    rating: 4,
    review:
      "Powerful SUV with strong road presence. Reliable and perfect for Indian roads."
  },
  {
    name: "Karan Malhotra",
    car: "BMW X5",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
    rating: 5,
    review:
      "BMW X5 delivers ultimate comfort and powerful driving dynamics. A perfect luxury SUV."
  },
  {
    name: "Neha Joshi",
    car: "Kia Seltos",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
    rating: 4,
    review:
      "Stylish design with amazing features. Value for money SUV in its category."
  },
  {
    name: "Vikram Singh",
    car: "Ford Endeavour",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    rating: 5,
    review:
      "Strong, bold and capable. Perfect SUV for off-road adventures."
  },
  {
    name: "Pooja Shah",
    car: "BYD Seal",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    rating: 4,
    review:
      "Smooth electric driving experience with modern design and tech features."
  },
  {
    name: "Arjun Nair",
    car: "Mercedes GLE",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
    rating: 5,
    review:
      "Mercedes GLE feels premium inside and out. Smooth ride and classy interior."
  },
  {
    name: "Meera Iyer",
    car: "Honda City",
    image: "https://randomuser.me/api/portraits/women/61.jpg",
    rating: 4,
    review:
      "Reliable sedan with great mileage and comfortable seating."
  },
  {
    name: "Siddharth Rao",
    car: "Skoda Octavia",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 5,
    review:
      "Great performance and driving comfort. German engineering at its best."
  },
  {
    name: "Ritika Arora",
    car: "Mahindra XUV700",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
    rating: 5,
    review:
      "Loaded with features and powerful engine. Best SUV in Indian market."
  },
  {
    name: "Manish Tiwari",
    car: "Tata Harrier",
    image: "https://randomuser.me/api/portraits/men/82.jpg",
    rating: 4,
    review:
      "Strong build quality and stylish design. Excellent road presence."
  },  {
    name: "Harsh Patel",
    car: "Audi A6",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
    rating: 5,
    review:
      "Audi A6 is pure luxury. Smooth engine, classy interiors and top-notch comfort."
  },
  {
    name: "Nikita Sharma",
    car: "MG Hector",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
    rating: 4,
    review:
      "MG Hector offers amazing tech features and spacious cabin. Great family SUV."
  },
  {
    name: "Yash Thakur",
    car: "BMW 3 Series",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    rating: 5,
    review:
      "Driving pleasure is next level. BMW 3 Series is sporty yet very comfortable."
  },
  {
    name: "Simran Kaur",
    car: "Toyota Innova Hycross",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    rating: 4,
    review:
      "Extremely comfortable for long drives. Hybrid engine gives excellent mileage."
  },
  {
    name: "Deepak Chauhan",
    car: "Lexus RX",
    image: "https://randomuser.me/api/portraits/men/38.jpg",
    rating: 5,
    review:
      "Super silent cabin and ultra smooth ride. Lexus truly defines luxury."
  },
  {
    name: "Ayesha Khan",
    car: "Tata Nexon",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    rating: 4,
    review:
      "Best compact SUV with 5-star safety rating. Strong and stylish."
  },
  {
    name: "Gaurav Bansal",
    car: "Porsche Cayenne",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5,
    review:
      "Incredible performance SUV. Porsche handling and speed are unbeatable."
  },
  {
    name: "Ishita Mehra",
    car: "Hyundai Verna",
    image: "https://randomuser.me/api/portraits/women/41.jpg",
    rating: 4,
    review:
      "Stylish sedan with premium interior and good mileage."
  },
  {
    name: "Rajat Khanna",
    car: "Range Rover Sport",
    image: "https://randomuser.me/api/portraits/men/59.jpg",
    rating: 5,
    review:
      "Ultimate luxury SUV with powerful performance and bold presence."
  },
  {
    name: "Divya Nanda",
    car: "Skoda Kushaq",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    rating: 4,
    review:
      "German quality at affordable price. Smooth ride and solid build."
  },
  {
    name: "Kunal Deshmukh",
    car: "Jeep Compass",
    image: "https://randomuser.me/api/portraits/men/27.jpg",
    rating: 5,
    review:
      "Perfect SUV for off-road lovers. Strong engine and premium finish."
  },
  {
    name: "Pallavi Trivedi",
    car: "Honda Elevate",
    image: "https://randomuser.me/api/portraits/women/85.jpg",
    rating: 4,
    review:
      "Comfortable and reliable SUV with smooth performance."
  },
  {
    name: "Saurabh Jain",
    car: "Volvo XC90",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    rating: 5,
    review:
      "Safest luxury SUV with elegant design and powerful engine."
  },
  {
    name: "Tanvi Rao",
    car: "Mini Cooper",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    rating: 4,
    review:
      "Fun to drive and stylish design. Perfect city car."
  },
  {
    name: "Aditya Kulkarni",
    car: "Nissan Magnite",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    rating: 4,
    review:
      "Affordable SUV with modern features and good fuel efficiency."
  }
];


const Reviews = () => {
  return (
    <div className="reviews-wrapper">
      <section className="reviews-hero">
        <h1>Customer Reviews</h1>
        <p>See what our customers say about their dream cars.</p>
      </section>

      <section className="reviews-grid">
        {reviews.map((item, index) => (
          <div className="review-card" key={index}>
            <div className="review-header">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <span className="car-name">{item.car}</span>
              </div>
            </div>

            <div className="stars">
              {"★".repeat(item.rating)}
              {"☆".repeat(5 - item.rating)}
            </div>

            <p className="review-text">"{item.review}"</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Reviews;
