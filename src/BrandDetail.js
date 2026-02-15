import React from "react";
import { useParams } from "react-router-dom";
import "./App.css";

const brandData = {
  bmw: [
    {
      name: "BMW M4 Competition",
      image: "/bmw-m4-competition.webp",
      engine: "3.0L Twin-Turbo Inline-6",
      fuel: "Petrol",
      speed: "290 km/h",
      price: "₹1.53 Crore"
    },
    {
      name: "BMW X5",
      image: "https://cdn.motor1.com/images/mgl/9mmkM/s1/bmw-x5.jpg",
      engine: "3.0L Inline-6 Turbo",
      fuel: "Diesel",
      speed: "230 km/h",
      price: "₹96 Lakh"
    },
    {
      name: "BMW 5 Series",
      image: "https://cdn.motor1.com/images/mgl/0eOZ6/s1/bmw-5-series.jpg",
      engine: "2.0L Turbo", 
      fuel: "Petrol / Diesel",
      speed: "250 km/h",
      price: "₹72 Lakh"
    },
    {
      name: "BMW i7",
      image: "https://cdn.motor1.com/images/mgl/qkkXr/s1/bmw-i7.jpg",
      engine: "Electric Dual Motor",
      fuel: "Electric",
      speed: "240 km/h",
      price: "₹2.05 Crore"
    }
  ],
  audi: [
    {
      name: "Audi RS7",
      image: "/audi-rs7.webp",
      engine: "3.0L Twin-Turbo V6",
      fuel: "Petrol",
      speed: "290 km/h",
      price: "₹1.53 Crore"
    },
    {
      name: "Audi Q5",
      image: "https://cdn.motor1.com/images/mgl/9mmkM/s1/audi-q5.jpg",
      engine: "2.0L Turbo",
      fuel: "Petrol / Diesel",
      speed: "230 km/h",
      price: "₹96 Lakh"
    },
    {
      name: "Audi 5 Series",
      image: "https://cdn.motor1.com/images/mgl/0eOZ6/s1/audi-5-series.jpg",
      engine: "2.0L Turbo", 
      fuel: "Petrol / Diesel",
      speed: "250 km/h",
      price: "₹72 Lakh"
    },
    {
      name: "Audi e-tron GT",
      image: "https://cdn.motor1.com/images/mgl/qkkXr/s1/audi-e-tron-gt.jpg",
      engine: "Electric Dual Motor",
      fuel: "Electric",
      speed: "240 km/h",
      price: "₹2.05 Crore"
    }
  ],
  byd: [
    {
      name: "BYD Han EV",   
      image: "/byd-han-ev.webp",
      engine: "Electric Dual Motor",
      fuel: "Electric",
      speed: "200 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "BYD Tang EV",
      image: "https://cdn.motor1.com/images/mgl/9mmkM/s1/byd-tang-ev.jpg",
      engine: "Electric Dual Motor",
      fuel: "Electric",
      speed: "180 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "BYD e6",
      image: "https://cdn.motor1.com/images/mgl/0eOZ6/s1/byd-e6.jpg",
      engine: "Electric Single Motor",
      fuel: "Electric",
      speed: "150 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "BYD Yuan EV",
      image: "https://cdn.motor1.com/images/mgl/qkkXr/s1/byd-yuan-ev.jpg",
      engine: "Electric Single Motor",
      fuel: "Electric",
      speed: "160 km/h",
      price: "₹18 Lakh"
    }
  ],
  mercedes: [
    {
      name: "Mercedes-AMG GT",
      image: "/mercedes-amg-gt.webp",
      engine: "4.0L Twin-Turbo V8",
      fuel: "Petrol",
      speed: "310 km/h",
      price: "₹1.53 Crore"
    },  
    {
      name: "Mercedes GLE",
      image: "https://cdn.motor1.com/images/mgl/9mmkM/s1/mercedes-gle.jpg", 
      engine: "3.0L Inline-6 Turbo",
      fuel: "Petrol / Diesel",
      speed: "230 km/h",
      price: "₹96 Lakh"
    },
    { 
      name: "Mercedes E-Class",
      image: "https://cdn.motor1.com/images/mgl/0eOZ6/s1/mercedes-e-class.jpg",
      engine: "2.0L Turbo",
      fuel: "Petrol / Diesel",
      speed: "250 km/h",
      price: "₹72 Lakh"
    },
    {
      name: "Mercedes EQS",
      image: "https://cdn.motor1.com/images/mgl/qkkXr/s1/mercedes-eqs.jpg",
      engine: "Electric Dual Motor",
      fuel: "Electric",
      speed: "240 km/h",
      price: "₹2.05 Crore"
    }
  ],
  lexus: [
    {
      name: "Lexus RX", 
      image: "/lexus-rx.webp",
      engine: "3.5L V6",
      fuel: "Petrol / Hybrid",
      speed: "210 km/h",
      price: "₹80 Lakh"
    },
    {
      name: "Lexus ES", 
      image: "https://cdn.motor1.com/images/mgl/9mmkM/s1/lexus-es.jpg",
      engine: "2.5L Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "210 km/h",
      price: "₹60 Lakh"
    },
    {
      name: "Lexus LS",
      image: "https://cdn.motor1.com/images/mgl/0eOZ6/s1/lexus-ls.jpg",
      engine: "3.5L V6",
      fuel: "Petrol / Hybrid",
      speed: "250 km/h",
      price: "₹1.20 Crore"
    },
    {
      name: "Lexus UX",
      image: "https://cdn.motor1.com/images/mgl/qkkXr/s1/lexus-ux.jpg",
      engine: "2.0L Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "180 km/h",
      price: "₹40 Lakh"
    }
  ],
  porsche: [
    {
      name: "Porsche 911",
      image: "/porsche-911.webp",
      engine: "3.0L Twin-Turbo Flat-6",
      fuel: "Petrol",
      speed: "320 km/h",
      price: "₹1.53 Crore"
    },
    {
      name: "Porsche Cayenne",
      image: "https://cdn.motor1.com/images/mgl/9mmkM/s1/porsche-cayenne.jpg",
      engine: "3.0L Turbo V6",
      fuel: "Petrol / Diesel",
      speed: "250 km/h",
      price: "₹96 Lakh"
    },
    {
      name: "Porsche Panamera",
      image: "https://cdn.motor1.com/images/mgl/0eOZ6/s1/porsche-panamera.jpg",
      engine: "2.9L Twin-Turbo V6",
      fuel: "Petrol / Diesel",
      speed: "290 km/h",
      price: "₹72 Lakh"
    },
    {
      name: "Porsche Taycan",
      image: "https://cdn.motor1.com/images/mgl/qkkXr/s1/porsche-taycan.jpg",
      engine: "Electric Dual Motor",
      fuel: "Electric",
      speed: "260 km/h",
      price: "₹2.05 Crore"
    }
  ],
  tesla: [
    {
      name: "Tesla Model S",  
      image: "/tesla-model-s.webp",
      engine: "Electric Dual Motor",
      fuel: "Electric",
      speed: "250 km/h",
      price: "₹1.53 Crore"
    },
    {
      name: "Tesla Model 3",
      image: "https://cdn.motor1.com/images/mgl/9mmkM/s1/tesla-model-3.jpg",
      engine: "Electric Dual Motor",
      fuel: "Electric",
      speed: "225 km/h",
      price: "₹96 Lakh"
    },
    {
      name: "Tesla Model X",
      image: "https://cdn.motor1.com/images/mgl/0eOZ6/s1/tesla-model-x.jpg",
      engine: "Electric Dual Motor",
      fuel: "Electric",
      speed: "250 km/h",
      price: "₹1.20 Crore"
    },
    {
      name: "Tesla Model Y",
      image: "https://cdn.motor1.com/images/mgl/qkkXr/s1/tesla-model-y.jpg",
      engine: "Electric Dual Motor",
      fuel: "Electric",
      speed: "210 km/h",
      price: "₹80 Lakh"
    }
  ],
  jaguar: [
      {
        name: "Jaguar F-Type",
        image: "/jaguar-f-type.webp",
        engine: "3.0L Supercharged V6",
        fuel: "Petrol",
        speed: "300 km/h",
        price: "₹1.53 Crore"
      },
      {
        name: "Jaguar E-PACE",
        image: "https://cdn.motor1.com/images/mgl/9mmkM/s1/jaguar-e-pace.jpg",
        engine: "2.0L Turbo",
        fuel: "Petrol / Diesel",
        speed: "230 km/h",
        price: "₹96 Lakh"
      },
      {
        name: "Jaguar XE",
        image: "https://cdn.motor1.com/images/mgl/0eOZ6/s1/jaguar-xe.jpg",
        engine: "2.0L Turbo",
        fuel: "Petrol / Diesel",
        speed: "250 km/h",
        price: "₹72 Lakh"
      },
      {
        name: "Jaguar I-PACE",
        image: "https://cdn.motor1.com/images/mgl/qkkXr/s1/jaguar-i-pace.jpg",
        engine: "Electric Dual Motor",
        fuel: "Electric",
        speed: "200 km/h",
        price: "₹2.05 Crore"
      }
  ],
  landrover: [
    {
      name: "Land Rover Defender",
      image: "/land-rover-defender.webp",
      engine: "2.0L Turbo",
      fuel: "Petrol / Diesel",
      speed: "200 km/h",
      price: "₹75 Lakh"
    },
    {
      name: "Land Rover Range Rover",
      image: "/land-rover-range-rover.webp",
      engine: "3.0L Turbo V6",
      fuel: "Petrol / Diesel",
      speed: "250 km/h",
      price: "₹1.20 Crore"
    },
    {
      name: "Land Rover Discovery",
      image: "/land-rover-discovery.webp",
      engine: "2.0L Turbo",
      fuel: "Petrol / Diesel",
      speed: "210 km/h",
      price: "₹80 Lakh"
    },
    {
      name: "Land Rover Range Rover Sport",
      image: "/land-rover-range-rover-sport.webp",
      engine: "3.0L Turbo V6",
      fuel: "Petrol / Diesel",
      speed: "240 km/h",
      price: "₹1.10 Crore"
    }
  ],
  volvo: [
    {
      name: "Volvo XC90",
      image: "/volvo-xc90.webp",
      engine: "2.0L Turbo",
      fuel: "Petrol / Diesel / Hybrid",
      speed: "210 km/h",
      price: "₹80 Lakh"
    },
    {
      name: "Volvo S90",
      image: "https://cdn.motor1.com/images/mgl/9mmkM/s1/volvo-s90.jpg",
      engine: "2.0L Turbo",
      fuel: "Petrol / Diesel / Hybrid",
      speed: "240 km/h",
      price: "₹70 Lakh"
    },
    {
      name: "Volvo XC60",
      image: "https://cdn.motor1.com/images/mgl/0eOZ6/s1/volvo-xc60.jpg",
      engine: "2.0L Turbo",
      fuel: "Petrol / Diesel / Hybrid",
      speed: "220 km/h",
      price: "₹60 Lakh"
    },
    {
      name: "Volvo V90",
      image: "https://cdn.motor1.com/images/mgl/qkkXr/s1/volvo-v90.jpg",
      engine: "2.0L Turbo",
      fuel: "Petrol / Diesel / Hybrid",
      speed: "230 km/h",
      price: "₹65 Lakh"
    }
  ],
  ferrari: [
    {
      name: "Ferrari 488",
      image: "/ferrari-488.webp",
      engine: "3.9L V8",
      fuel: "Petrol",
      speed: "330 km/h",
      price: "₹2.50 Crore"
    },
    {
      name: "Ferrari SF90",
      image: "/ferrari-sf90.webp",
      engine: "2.5L Turbo Hybrid V8",
      fuel: "Petrol / Hybrid",
      speed: "340 km/h",
      price: "₹5.00 Crore"
    },
    {
      name: "Ferrari Roma",
      image: "/ferrari-roma.webp",
      engine: "3.9L V8",
      fuel: "Petrol",
      speed: "320 km/h",
      price: "₹2.00 Crore"
    },
    { 
      name: "Ferrari Portofino",
      image: "/ferrari-portofino.webp",
      engine: "3.9L V8",
      fuel: "Petrol",
      speed: "320 km/h",
      price: "₹1.80 Crore"
    }
  ],
    lamborghini: [
    {
      name: "Lamborghini Aventador",
      image: "/lamborghini-aventador.webp",
      engine: "6.5L V12",
      fuel: "Petrol",
      speed: "350 km/h",
      price: "₹3.00 Crore"
    },
    {
      name: "Lamborghini Huracan",
      image: "/lamborghini-huracan.webp",
      engine: "5.2L V10",
      fuel: "Petrol",
      speed: "325 km/h",
      price: "₹2.50 Crore"
    },
    {
      name: "Lamborghini Urus",
      image: "/lamborghini-urus.webp",
      engine: "4.0L Twin-Turbo V8",
      fuel: "Petrol",
      speed: "305 km/h",
      price: "₹2.00 Crore"
    },
    {
      name: "Lamborghini Sian",
      image: "/lamborghini-sian.webp",
      engine: "6.5L V12 Hybrid",
      fuel: "Petrol / Hybrid",
      speed: "350 km/h",
      price: "₹3.50 Crore"
    }
  ],
  maserati: [
    {
      name: "Maserati Ghibli",
      image: "/maserati-ghibli.webp",
      engine: "3.0L Twin-Turbo V6",
      fuel: "Petrol",
      speed: "285 km/h",
      price: "₹1.20 Crore"
    },
    {
      name: "Maserati Levante",
      image: "/maserati-levante.webp",
      engine: "3.0L Twin-Turbo V6",
      fuel: "Petrol",
      speed: "260 km/h",
      price: "₹1.10 Crore"
    },
    {
      name: "Maserati Quattroporte",
      image: "/maserati-quattroporte.webp",
      engine: "3.0L Twin-Turbo V6",
      fuel: "Petrol",
      speed: "285 km/h",
      price: "₹1.30 Crore"
    },
    {
      name: "Maserati MC20",
      image: "/maserati-mc20.webp",
      engine: "3.0L Twin-Turbo V6",
      fuel: "Petrol",
      speed: "325 km/h",
      price: "₹2.50 Crore"
    }
  ],
  rollsroyce: [
    {
      name: "Rolls-Royce Phantom",
      image: "/rolls-royce-phantom.webp",
      engine: "6.75L V12",
      fuel: "Petrol",
      speed: "250 km/h",
      price: "₹8.00 Crore"
    },
    {
      name: "Rolls-Royce Ghost",
      image: "/rolls-royce-ghost.webp",
      engine: "6.75L V12",
      fuel: "Petrol",
      speed: "250 km/h",
      price: "₹4.00 Crore"
    },
    {
      name: "Rolls-Royce Wraith",
      image: "/rolls-royce-wraith.webp",
      engine: "6.6L V12",
      fuel: "Petrol",
      speed: "250 km/h",
      price: "₹3.00 Crore"
    },
    {
      name: "Rolls-Royce Dawn",
      image: "/rolls-royce-dawn.webp",
      engine: "6.6L V12",
      fuel: "Petrol",
      speed: "250 km/h",
      price: "₹3.50 Crore"
    }
  ],
  bentley: [
    {
      name: "Bentley Continental GT",
      image: "/bentley-continental-gt.webp",
      engine: "4.0L Twin-Turbo V8",
      fuel: "Petrol",
      speed: "318 km/h",
      price: "₹2.50 Crore"
    },
    {
      name: "Bentley Bentayga",
      image: "/bentley-bentayga.webp",
      engine: "4.0L Twin-Turbo V8",
      fuel: "Petrol",
      speed: "306 km/h",
      price: "₹2.00 Crore"
    },
    {
      name: "Bentley Flying Spur",
      image: "/bentley-flying-spur.webp",
      engine: "4.0L Twin-Turbo V8",
      fuel: "Petrol",
      speed: "318 km/h",
      price: "₹2.20 Crore"
    },
    {
      name: "Bentley Mulsanne",
      image: "/bentley-mulsanne.webp",
      engine: "6.75L V8",
      fuel: "Petrol",
      speed: "296 km/h",
      price: "₹3.00 Crore"
    }
  ],
  astonmartin: [
    {
      name: "Aston Martin DB11",
      image: "/aston-martin-db11.webp",
      engine: "4.0L Twin-Turbo V8",
      fuel: "Petrol",
      speed: "322 km/h",
      price: "₹2.50 Crore"
    },
    {
      name: "Aston Martin Vantage",
      image: "/aston-martin-vantage.webp",
      engine: "4.0L Twin-Turbo V8",
      fuel: "Petrol",
      speed: "314 km/h",
      price: "₹1.50 Crore"
    },
    {
      name: "Aston Martin DBS Superleggera",
      image: "/aston-martin-dbs-superleggera.webp",
      engine: "5.2L Twin-Turbo V12",
      fuel: "Petrol",
      speed: "340 km/h",
      price: "₹3.00 Crore"
    },
    {
      name: "Aston Martin Rapide",
      image: "/aston-martin-rapide.webp",
      engine: "6.0L V12",
      fuel: "Petrol",
      speed: "305 km/h",
      price: "₹2.00 Crore"
    }
  ],
  mclaren: [
    {
      name: "McLaren 720S",
      image: "/mclaren-720s.webp",
      engine: "4.0L Twin-Turbo V8",
      fuel: "Petrol",
      speed: "341 km/h",
      price: "₹2.50 Crore"
    },
    {
      name: "McLaren Solos GT",
      image: "/mclaren-solos-gt.webp",
      engine: "4.0L Twin-Turbo V8",
      fuel: "Petrol",
      speed: "340 km/h",
      price: "₹3.00 Crore"
    },
    {
      name: "McLaren Artura",
      image: "/mclaren-artura.webp",
      engine: "3.0L Twin-Turbo V6 Hybrid",
      fuel: "Petrol / Hybrid",
      speed: "330 km/h",
      price: "₹2.00 Crore"
    },
    {
      name: "McLaren GT",
      image: "/mclaren-gt.webp",
      engine: "4.0L Twin-Turbo V8",
      fuel: "Petrol",
      speed: "326 km/h",
      price: "₹1.80 Crore"
    }
  ],
  bugatti: [
    {
      name: "Bugatti Chiron",
      image: "/bugatti-chiron.webp",
      engine: "8.0L Quad-Turbo W16",
      fuel: "Petrol",
      speed: "420 km/h",
      price: "₹30 Crore"
    },
    {
      name: "Bugatti Veyron",
      image: "/bugatti-veyron.webp",
      engine: "8.0L Quad-Turbo W16",
      fuel: "Petrol",
      speed: "410 km/h",
      price: "₹25 Crore"
    },
    {
      name: "Bugatti Divo",
      image: "/bugatti-divo.webp",
      engine: "8.0L Quad-Turbo W16",
      fuel: "Petrol",
      speed: "380 km/h",
      price: "₹25 Crore"
    },
    {
      name: "Bugatti Centodieci",
      image: "/bugatti-centodieci.webp",
      engine: "8.0L Quad-Turbo W16",
      fuel: "Petrol",
      speed: "380 km/h",
      price: "₹30 Crore"
    }
  ],
  pagani: [    
    {
      name: "Pagani Zonda",
      image: "/pagani-zonda.webp",
      engine: "7.3L V12",
      fuel: "Petrol",
      speed: "350 km/h",
      price: "₹5.00 Crore"
    },
    {
      name: "Pagani Huayra",
      image: "/pagani-huayra.webp",
      engine: "6.0L Twin-Turbo V12",
      fuel: "Petrol",
      speed: "370 km/h",
      price: "₹6.00 Crore"
    },
    {
      name: "Pagani Imola",
      image: "/pagani-imola.webp",
      engine: "6.0L Twin-Turbo V12",
      fuel: "Petrol",
      speed: "380 km/h",
      price: "₹7.00 Crore"
    },
    {
      name: "Pagani Utopia",
      image: "/pagani-utopia.webp",
      engine: "6.0L Twin-Turbo V12",
      fuel: "Petrol", 
      speed: "360 km/h",
      price: "₹6.50 Crore"
    }
  ],
  koenigsegg: [
    {
      name: "Koenigsegg Agera RS",
      image: "/koenigsegg-agera-rs.webp",
      engine: "5.0L Twin-Turbo V8",
      fuel: "Petrol",
      speed: "447 km/h",
      price: "₹10 Crore"
    },
    {
      name: "Koenigsegg Jesko",
      image: "/koenigsegg-jesko.webp",
      engine: "5.0L Twin-Turbo V8",
      fuel: "Petrol",
      speed: "480 km/h",
      price: "₹12 Crore"
    },
    {
      name: "Koenigsegg Regera",
      image: "/koenigsegg-regera.webp",
      engine: "5.0L Twin-Turbo V8 Hybrid",
      fuel: "Petrol / Hybrid",
      speed: "410 km/h",
      price: "₹11 Crore"
    },
    {
      name: "Koenigsegg Gemera",
      image: "/koenigsegg-gemera.webp",
      engine: "2.0L Twin-Turbo Inline-3 Hybrid",
      fuel: "Petrol / Hybrid",
      speed: "400 km/h",
      price: "₹9 Crore"
    }
  ],
  alfaromeo: [
    {
      name: "Alfa Romeo Giulia",
      image: "/alfa-romeo-giulia.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "240 km/h",
      price: "₹60 Lakh"
    },
    {
      name: "Alfa Romeo Stelvio",
      image: "/alfa-romeo-stelvio.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "230 km/h",
      price: "₹70 Lakh"
    },
    {
      name: "Alfa Romeo 4C",
      image: "/alfa-romeo-4c.webp",
      engine: "1.7L Turbo Inline-4",
      fuel: "Petrol",
      speed: "258 km/h",
      price: "₹80 Lakh"
    },
    {
      name: "Alfa Romeo Tonale",
      image: "/alfa-romeo-tonale.webp",
      engine: "2.0L Turbo Inline-4 Hybrid",
      fuel: "Petrol / Hybrid",
      speed: "220 km/h",
      price: "₹50 Lakh"
    }
  ],
  cadillac: [
    {
      name: "Cadillac Escalade",
      image: "/cadillac-escalade.webp",
      engine: "3.0L Turbo Inline-6",
      fuel: "Petrol",
      speed: "220 km/h",
      price: "₹85 Lakh"
    },
    {
      name: "Cadillac CT5",
      image: "/cadillac-ct5.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "230 km/h",
      price: "₹65 Lakh"
    },
    {
      name: "Cadillac CT4",
      image: "/cadillac-ct4.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "230 km/h",
      price: "₹55 Lakh"
    },
    {
      name: "Cadillac XT5",
      image: "/cadillac-xt5.webp",
      engine: "2.0L Turbo Inline-4 Hybrid", 
      fuel: "Petrol / Hybrid", 
      speed: "210 km/h", 
      price: "₹70 Lakh"
    }
  ],
  infiniti: [
    {
      name: "Infiniti Q50",
      image: "/infiniti-q50.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "240 km/h",
      price: "₹60 Lakh"
    },
    {
      name: "Infiniti QX60",
      image: "/infiniti-qx60.webp",
      engine: "3.5L V6",
      fuel: "Petrol",
      speed: "210 km/h",
      price: "₹70 Lakh"
    },
    {
      name: "Infiniti QX80",
      image: "/infiniti-qx80.webp",
      engine: "5.6L V8",
      fuel: "Petrol",
      speed: "230 km/h",
      price: "₹90 Lakh"
    },
    {
      name: "Infiniti QX50",
      image: "/infiniti-qx50.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "220 km/h",
      price: "₹65 Lakh"
    }
  ],
  acura: [
    {
      name: "Acura ILX",
      image: "/acura-ilx.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "220 km/h",
      price: "₹55 Lakh"
    },
    {
      name: "Acura MDX",
      image: "/acura-mdx.webp",
      engine: "3.5L V6",
      fuel: "Petrol",
      speed: "210 km/h",
      price: "₹75 Lakh"
    },
    {
      name: "Acura RDX",
      image: "/acura-rdx.webp",
      engine: "2.0L Turbo Inline-4 Hybrid", 
      fuel: "Petrol / Hybrid", 
      speed: "210 km/h", 
      price: "₹65 Lakh"
    },
    {
      name: "Acura NSX",
      image: "/acura-nsx.webp",
      engine: "3.5L Twin-Turbo V6 Hybrid",
      fuel: "Petrol / Hybrid",
      speed: "307 km/h",
      price: "₹1.50 Crore"
    }
  ],
  genesis: [
    {
      name: "Genesis G70",
      image: "/genesis-g70.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "240 km/h",
      price: "₹60 Lakh"
    },
    {
      name: "Genesis G80",
      image: "/genesis-g80.webp",
      engine: "2.5L Turbo Inline-4",
      fuel: "Petrol",
      speed: "230 km/h",
      price: "₹70 Lakh"
    },
    {
      name: "Genesis GV80",
      image: "/genesis-gv80.webp",
      engine: "3.5L V6",
      fuel: "Petrol",
      speed: "210 km/h",
      price: "₹80 Lakh"
    },
    {
      name: "Genesis G90",
      image: "/genesis-g90.webp",
      engine: "3.3L Twin-Turbo V6",
      fuel: "Petrol",
      speed: "250 km/h",
      price: "₹1.20 Crore"
    }
  ],
  lincoln: [
    {
      name: "Lincoln Navigator",
      image: "/lincoln-navigator.webp",
      engine: "3.0L Turbo Inline-6",
      fuel: "Petrol",
      speed: "210 km/h",
      price: "₹85 Lakh"
    },
    {
      name: "Lincoln Continental",
      image: "/lincoln-continental.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "230 km/h",
      price: "₹75 Lakh"
    },
    {
      name: "Lincoln Aviator",
      image: "/lincoln-aviator.webp",
      engine: "3.0L Turbo V6 Hybrid",
      fuel: "Petrol / Hybrid",  
      speed: "210 km/h",
      price: "₹80 Lakh"
    },
    {
      name: "Lincoln Corsair",
      image: "/lincoln-corsair.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "220 km/h",
      price: "₹65 Lakh"
    }
  ],
  mitsubishi: [
    {
      name: "Mitsubishi Xpander",
      image: "/mitsubishi-xpander.webp",
      engine: "1.5L Inline-4",
      fuel: "Petrol",
      speed: "180 km/h",
      price: "₹35 Lakh"
    },
    {
      name: "Mitsubishi Outlander",
      image: "/mitsubishi-outlander.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "200 km/h",
      price: "₹55 Lakh"
    },
    {
      name: "Mitsubishi Pajero",
      image: "/mitsubishi-pajero.webp",
      engine: "2.4L Turbo Inline-4",
      fuel: "Diesel / Hybrid", 
      speed: "190 km/h",
      price: "₹75 Lakh"
    },
    {
      name: "Mitsubishi Eclipse Cross",
      image: "/mitsubishi-eclipse-cross.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol",
      speed: "190 km/h",
      price: "₹45 Lakh"
    }
  ],
  subaru: [
    {
      name: "Subaru Outback",
      image: "/subaru-outback.webp",
      engine: "2.5L Inline-4",
      fuel: "Petrol",
      speed: "190 km/h",
      price: "₹55 Lakh"
    },
    {
      name: "Subaru Forester",
      image: "/subaru-forester.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "200 km/h",
      price: "₹65 Lakh"
    },
    {
      name: "Subaru WRX",
      image: "/subaru-wrx.webp",
      engine: "2.0L Turbo Inline-4", 
      fuel: "Petrol", 
      speed: "230 km/h", 
      price: "₹75 Lakh"
    },
    {
      name: "Subaru Ascent",
      image: "/subaru-ascent.webp",
      engine: "2.5L Turbo Inline-4 Hybrid", 
      fuel: "Petrol / Hybrid", 
      speed: "190 km/h", 
      price: "₹85 Lakh"
    }
  ],
  mazda: [
    {
      name: "Mazda CX-5",
      image: "/mazda-cx5.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "210 km/h",
      price: "₹50 Lakh"
    },
    {
      name: "Mazda CX-9",
      image: "/mazda-cx9.webp",
      engine: "2.5L Turbo Inline-4",
      fuel: "Petrol",
      speed: "200 km/h",
      price: "₹70 Lakh"
    },
    {
      name: "Mazda MX-5 Miata",
      image: "/mazda-mx5.webp",
      engine: "2.0L Inline-4",
      fuel: "Petrol", 
      speed: "180 km/h", 
      price: "₹45 Lakh"
    },
    {
      name: "Mazda 3",
      image: "/mazda-3.webp",
      engine: "2.0L Inline-4",
      fuel: "Petrol",
      speed: "190 km/h",
      price: "₹40 Lakh"
    }
  ],
  honda: [
    {
      name: "Honda Accord",
      image: "/honda-accord.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "210 km/h",
      price: "₹50 Lakh"
    },
    {
      name: "Honda CR-V",
      image: "/honda-crv.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹40 Lakh"
    },
    {
      name: "Honda Civic",
      image: "/honda-civic.webp",
      engine: "2.0L Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "200 km/h",
      price: "₹35 Lakh"
    },
    {
      name: "Honda HR-V",
      image: "/honda-hrv.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹30 Lakh"
    }
  ],
  toyota: [
    {
      name: "Toyota Camry",
      image: "/toyota-camry.webp",
      engine: "2.5L Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "200 km/h",
      price: "₹45 Lakh"
    },
    {
      name: "Toyota Corolla", 
      image: "/toyota-corolla.webp",
      engine: "1.8L Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "180 km/h",
      price: "₹35 Lakh"
    },
    {
      name: "Toyota Fortuner", 
      image: "/toyota-fortuner.webp",
      engine: "2.8L Turbo V6",
      fuel: "Diesel / Hybrid", 
      speed: "190 km/h",
      price: "₹75 Lakh"
    },
    { 
      name: "Toyota RAV4",
      image: "/toyota-rav4.webp",
      engine: "2.5L Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹50 Lakh"
    }
  ],
  nissan: [
    {
      name: "Nissan Altima",
      image: "/nissan-altima.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "210 km/h",
      price: "₹45 Lakh"

    },
    {
      name: "Nissan Rogue",
      image: "/nissan-rogue.webp",
      engine: "2.5L Inline-4",
      fuel: "Petrol",
      speed: "190 km/h",
      price: "₹50 Lakh"
    },
    {
      name: "Nissan GT-R",
      image: "/nissan-gtr.webp",
      engine: "3.8L Twin-Turbo V6",
      fuel: "Petrol",
      speed: "315 km/h",
      price: "₹1.50 Crore"
    },
    {
      name: "Nissan Leaf",
      image: "/nissan-leaf.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "150 km/h",
      price: "₹30 Lakh"
    }
  ],
  hyundai: [
    {
      name: "Hyundai Sonata",
      image: "/hyundai-sonata.webp",
      engine: "2.5L Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "200 km/h",
      price: "₹40 Lakh"
    },
    {
      name: "Hyundai Creta",
      image: "/hyundai-creta.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹35 Lakh"
    },
    {
      name: "Hyundai Elantra",
      image: "/hyundai-elantra.webp",
      engine: "2.0L Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "Hyundai Tucson",
      image: "/hyundai-tucson.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "200 km/h",
      price: "₹45 Lakh"
    }
  ],
  kia: [
    {
      name: "Kia Stinger",
      image: "/kia-stinger.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "240 km/h",
      price: "₹50 Lakh"
    },
    {
      name: "Kia Sorento",
      image: "/kia-sorento.webp",
      engine: "2.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "210 km/h",
      price: "₹45 Lakh"
    },
    {
      name: "Kia Seltos",
      image: "/kia-seltos.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "Kia Carnival",
      image: "/kia-carnival.webp",
      engine: "2.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹40 Lakh"
    }
  ],
  jeep: [
    {
      name: "Jeep Wrangler",
      image: "/jeep-wrangler.webp",
      engine: "3.6L V6",
      fuel: "Petrol",
      speed: "180 km/h",
      price: "₹75 Lakh"
    },
    {
      name: "Jeep Grand Cherokee",
      image: "/jeep-grand-cherokee.webp",
      engine: "3.6L V6",
      fuel: "Petrol / Diesel",
      speed: "210 km/h",
      price: "₹80 Lakh"
    },
    {
      name: "Jeep Compass",
      image: "/jeep-compass.webp",
      engine: "1.4L Turbo Inline-4",
      fuel: "Petrol / Diesel",
      speed: "190 km/h",
      price: "₹40 Lakh"
    },
    {
      name: "Jeep Renegade",
      image: "/jeep-renegade.webp",
      engine: "1.3L Turbo Inline-4",
      fuel: "Petrol / Diesel",
      speed: "180 km/h",
      price: "₹35 Lakh"
    }
  ],
  chevrolet: [
    {
      name: "Chevrolet Camaro",
      image: "/chevrolet-camaro.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "250 km/h",
      price: "₹60 Lakh"
    },
    {
      name: "Chevrolet Silverado",
      image: "/chevrolet-silverado.webp",
      engine: "5.3L V8",
      fuel: "Petrol / Diesel",
      speed: "190 km/h",
      price: "₹75 Lakh"
    },
    {
      name: "Chevrolet Equinox",
      image: "/chevrolet-equinox.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹35 Lakh"
    },
    {
      name: "Chevrolet Traverse",
      image: "/chevrolet-traverse.webp",
      engine: "3.6L V6",
      fuel: "Petrol / Hybrid",
      speed: "210 km/h",
      price: "₹50 Lakh"
    }
  ],
  ford: [
    {
      name: "Ford Mustang",
      image: "/ford-mustang.webp",
      engine: "2.3L Turbo Inline-4",
      fuel: "Petrol",
      speed: "250 km/h",
      price: "₹60 Lakh"
    },
    {
      name: "Ford F-150",
      image: "/ford-f150.webp",
      engine: "3.5L V6",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹75 Lakh"
    },
    {
      name: "Ford Explorer",
      image: "/ford-explorer.webp",
      engine: "2.3L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "210 km/h",
      price: "₹50 Lakh"
    },
    {
      name: "Ford Escape",
      image: "/ford-escape.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹40 Lakh"
    }
  ],
  volkswagen: [
    {
      name: "Volkswagen Golf",
      image: "/volkswagen-golf.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "240 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "Volkswagen Passat",
      image: "/volkswagen-passat.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "210 km/h",
      price: "₹40 Lakh"
    },
    {
      name: "Volkswagen Tiguan",
      image: "/volkswagen-tiguan.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "200 km/h",
      price: "₹35 Lakh"
    },
    {
      name: "Volkswagen Atlas",
      image: "/volkswagen-atlas.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹45 Lakh"
    }
  ],
  renault: [
    {
      name: "Renault Duster",
      image: "/renault-duster.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Diesel",
      speed: "180 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Renault Kiger",
      image: "/renault-kiger.webp",
      engine: "1.2L Turbo Inline-3",
      fuel: "Petrol / Hybrid",
      speed: "170 km/h",
      price: "₹15 Lakh"
    },
    {
      name: "Renault Scala",
      image: "/renault-scala.webp",
      engine: "1.0L Turbo Inline-3",
      fuel: "Petrol / Hybrid",
      speed: "160 km/h",
      price: "₹12 Lakh"
    },
    {
      name: "Renault Triber",
      image: "/renault-triber.webp",
      engine: "1.2L Turbo Inline-3",
      fuel: "Petrol / Hybrid",
      speed: "170 km/h",
      price: "₹18 Lakh"
    }
  ],
  skoda: [
    {
      name: "Skoda Octavia",
      image: "/skoda-octavia.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "210 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "Skoda Superb",
      image: "/skoda-superb.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "220 km/h",
      price: "₹40 Lakh"
    },
    {
      name: "Skoda Kodiaq",
      image: "/skoda-kodiaq.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "200 km/h",
      price: "₹35 Lakh"
    },
    { 
      name: "Skoda Kamiq",
      image: "/skoda-kamiq.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹25 Lakh"
    }
  ],
  peugeot: [
    {
      name: "Peugeot 308",
      image: "/peugeot-308.webp",
      engine: "1.2L Turbo Inline-3",
      fuel: "Petrol / Hybrid",
      speed: "180 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Peugeot 508",
      image: "/peugeot-508.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "210 km/h",
      price: "₹45 Lakh"
    },
    {
      name: "Peugeot 2008",
      image: "/peugeot-2008.webp",
      engine: "1.2L Turbo Inline-3",
      fuel: "Petrol / Hybrid",
      speed: "170 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "Peugeot 3008",
      image: "/peugeot-3008.webp",
      engine: "1.6L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹30 Lakh"
    }
  ],
  citroën: [
    {
      name: "Citroën C3",
      image: "/citroen-c3.webp",
      engine: "1.2L Turbo Inline-3",
      fuel: "Petrol / Hybrid",
      speed: "170 km/h",
      price: "₹15 Lakh"
    },
    {
      name: "Citroën C4",
      image: "/citroen-c4.webp",
      engine: "1.6L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Citroën C5 Aircross",
      image: "/citroen-c5-aircross.webp",
      engine: "1.6L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "Citroën Berlingo",
      image: "/citroen-berlingo.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "160 km/h",
      price: "₹20 Lakh"
    }
  ],
  seat: [
    {
      name: "Seat Leon",
      image: "/seat-leon.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Seat Ateca",
      image: "/seat-ateca.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "Seat Arona",
      image: "/seat-arona.webp",
      engine: "1.0L Turbo Inline-3",
      fuel: "Petrol / Hybrid",
      speed: "170 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "Seat Tarraco",
      image: "/seat-tarraco.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "200 km/h",
      price: "₹35 Lakh"
    }
  ],
  fiat: [
    {
      name: "Fiat Punto",
      image: "/fiat-punto.webp",
      engine: "1.2L Turbo Inline-3",
      fuel: "Petrol / Hybrid",
      speed: "160 km/h",
      price: "₹15 Lakh"
    },
    {
      name: "Fiat Linea",
      image: "/fiat-linea.webp",
      engine: "1.3L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "170 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "Fiat 500X",
      image: "/fiat-500x.webp",
      engine: "1.4L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "180 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Fiat Argo",
      image: "/fiat-argo.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹22 Lakh"
    }
  ],
  lancia: [
    {
      name: "Lancia Ypsilon",     
      image: "/lancia-ypsilon.webp",
      engine: "1.2L Turbo Inline-3",
      fuel: "Petrol / Hybrid",
      speed: "170 km/h",
      price: "₹15 Lakh"
    },
    {
      name: "Lancia Delta",
      image: "/lancia-delta.webp",
      engine: "1.4L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Lancia Thema",
      image: "/lancia-thema.webp",
      engine: "3.0L V6",
      fuel: "Petrol / Hybrid",
      speed: "210 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "Lancia Voyager",
      image: "/lancia-voyager.webp",
      engine: "3.6L V6",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹35 Lakh"
    },
  ],
  dodge: [
      {
        name: "Dodge Charger",
        image: "/dodge-charger.webp",
        engine: "3.6L V6",
        fuel: "Petrol",
        speed: "200 km/h",
        price: "₹40 Lakh"
      },
      {
        name: "Dodge Durango",
        image: "/dodge-durango.webp",
        engine: "3.6L V6",
        fuel: "Petrol",
        speed: "190 km/h",
        price: "₹50 Lakh"
      },  
      {
        name: "Dodge Challenger",
        image: "/dodge-challenger.webp",
        engine: "3.6L V6",
        fuel: "Petrol",
        speed: "210 km/h",
        price: "₹45 Lakh"
      },
      {
        name: "Dodge Ram 1500",
        image: "/dodge-ram.webp",
        engine: "3.6L V6",
        fuel: "Petrol",
        speed: "190 km/h",
        price: "₹55 Lakh"
      }
    ],
  ram: [
      {
        name: "Ram 1500",
        image: "/ram-1500.webp",
        engine: "3.6L V6",
        fuel: "Petrol",
        speed: "190 km/h",
        price: "₹55 Lakh"
      },
      {
        name: "Ram 2500",
        image: "/ram-2500.webp",
        engine: "6.4L V8",
        fuel: "Petrol",
        speed: "180 km/h",
        price: "₹75 Lakh"
      },
      {
        name: "Ram 3500",
        image: "/ram-3500.webp",
        engine: "6.7L Turbo Diesel I6",
        fuel: "Diesel",
        speed: "170 km/h",
        price: "₹85 Lakh"
      },
      {
        name: "Ram ProMaster",
        image: "/ram-promaster.webp",
        engine: "3.6L V6",
        fuel: "Petrol",
        speed: "160 km/h",
        price: "₹45 Lakh"
      }
  ],
  gmc: [
      {        
        name: "GMC Sierra 1500",
        image: "/gmc-sierra.webp",
        engine: "3.0L Turbo Inline-6",
        fuel: "Petrol",
        speed: "190 km/h",
        price: "₹60 Lakh"
      },
      {
        name: "GMC Yukon",
        image: "/gmc-yukon.webp",
        engine: "5.3L V8",
        fuel: "Petrol",
        speed: "210 km/h",
        price: "₹80 Lakh"
      },
      {
        name: "GMC Acadia",
        image: "/gmc-acadia.webp",
        engine: "2.0L Turbo Inline-4",
        fuel: "Petrol",
        speed: "190 km/h",
        price: "₹40 Lakh"
      },
      {
        name: "GMC Terrain",
        image: "/gmc-terrain.webp",
        engine: "1.5L Turbo Inline-4",
        fuel: "Petrol",
        speed: "180 km/h",
        price: "₹30 Lakh"
      }
  ],
  chrysler: [
      {
        name: "Chrysler 300",
        image: "/chrysler-300.webp",
        engine: "3.6L V6",
        fuel: "Petrol",
        speed: "200 km/h",
        price: "₹45 Lakh"
      },
      {
        name: "Chrysler Pacifica",
        image: "/chrysler-pacifica.webp",
        engine: "2.4L Turbo Inline-4",
        fuel: "Petrol",
        speed: "180 km/h",
        price: "₹55 Lakh"
      },
      {
        name: "Chrysler Town & Country",
        image: "/chrysler-town-country.webp",
        engine: "3.6L V6",
        fuel: "Petrol",
        speed: "190 km/h",
        price: "₹50 Lakh"
      },
      {
        name: "Chrysler Voyager",
        image: "/chrysler-voyager.webp",
        engine: "3.6L V6",
        fuel: "Petrol",
        speed: "190 km/h",
        price: "₹45 Lakh"
      }
  ],
  buick: [
      {
        name: "Buick Enclave",
        image: "/buick-enclave.webp",
        engine: "3.6L V6",
        fuel: "Petrol",
        speed: "190 km/h",
        price: "₹50 Lakh"
      },
      {
        name: "Buick Encore",
        image: "/buick-encore.webp",
        engine: "1.4L Turbo Inline-4",
        fuel: "Petrol",
        speed: "180 km/h",
        price: "₹30 Lakh"
      },
      {
        name: "Buick LaCrosse",
        image: "/buick-lacrosse.webp",
        engine: "3.6L V6",
        fuel: "Petrol",
        speed: "200 km/h",
        price: "₹45 Lakh"
      },
      {
        name: "Buick Regal",
        image: "/buick-regal.webp",
        engine: "2.0L Turbo Inline-4",
        fuel: "Petrol",
        speed: "190 km/h",
        price: "₹35 Lakh"
      }
  ],
  xiaomi: [
      {
        name: "Xiaomi Mi Car",
        image: "/xiaomi-mi-car.webp",
        engine: "Electric Motor",
        fuel: "Electric",
        speed: "150 km/h",
        price: "₹25 Lakh"
      },
      {
        name: "Xiaomi Mi SUV",
        image: "/xiaomi-mi-suv.webp",
        engine: "Electric Motor",
        fuel: "Electric",
        speed: "160 km/h",
        price: "₹30 Lakh"
      },
      {
        name: "Xiaomi Mi Sedan",
        image: "/xiaomi-mi-sedan.webp",
        engine: "Electric Motor",
        fuel: "Electric",
        speed: "140 km/h",
        price: "₹20 Lakh"
      },
      {
        name: "Xiaomi Mi Hatchback",
        image: "/xiaomi-mi-hatchback.webp",
        engine: "Electric Motor",
        fuel: "Electric",
        speed: "130 km/h",
        price: "₹15 Lakh"
      }
    ],
    suzuki:[
    {
      name: "Suzuki Swift",
      image: "/suzuki-swift.webp",
      engine: "1.2L Inline-4",
      fuel: "Petrol",
      speed: "180 km/h",
      price: "₹20 Lakh" 
    },
    {
      name: "Suzuki Vitara",
      image: "/suzuki-vitara.webp",
      engine: "1.4L Turbo Inline-4",
      fuel: "Petrol",
      speed: "190 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "Suzuki Jimny",
      image: "/suzuki-jimny.webp",
      engine: "1.5L Inline-4",
      fuel: "Petrol",
      speed: "170 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Suzuki Baleno",
      image: "/suzuki-baleno.webp",
      engine: "1.2L Inline-4",
      fuel: "Petrol",
      speed: "180 km/h",
      price: "₹18 Lakh"
    }
  ],
  mahindra: [
    {
      name: "Mahindra Thar",
      image: "/mahindra-thar.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Diesel",
      speed: "180 km/h",
      price: "₹15 Lakh"
    },
    {
      name: "Mahindra XUV700",
      image: "/mahindra-xuv700.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Diesel",
      speed: "190 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "Mahindra Scorpio",
      image: "/mahindra-scorpio.webp",
      engine: "2.2L Turbo Diesel",
      fuel: "Diesel",
      speed: "170 km/h",
      price: "₹12 Lakh"
    },
    {
      name: "Mahindra Bolero",
      image: "/mahindra-bolero.webp",
      engine: "1.5L Turbo Diesel",
      fuel: "Diesel",
      speed: "160 km/h",
      price: "₹10 Lakh"
    }
  ],
  tata: [
    {
      name: "Tata Harrier",
      image: "/tata-harrier.webp",
      engine: "2.0L Turbo Diesel",
      fuel: "Diesel",
      speed: "190 km/h",
      price: "₹15 Lakh"
    },
    {
      name: "Tata Nexon",
      image: "/tata-nexon.webp",
      engine: "1.5L Turbo Petrol",
      fuel: "Petrol",
      speed: "180 km/h",
      price: "₹10 Lakh"
    },
    {
      name: "Tata Safari",
      image: "/tata-safari.webp",
      engine: "2.0L Turbo Diesel",
      fuel: "Diesel",
      speed: "190 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "Tata Altroz",
      image: "/tata-altroz.webp",
      engine: "1.5L Turbo Petrol",
      fuel: "Petrol",
      speed: "170 km/h",
      price: "₹8 Lakh"
    }
  ],
  lotus: [
    {
      name: "Lotus Elise",  
      image: "/lotus-elise.webp",
      engine: "1.8L Turbo Inline-4",
      fuel: "Petrol",
      speed: "220 km/h",
      price: "₹50 Lakh"
    },
    {
      name: "Lotus Exige",
      image: "/lotus-exige.webp",
      engine: "3.5L V6",
      fuel: "Petrol",
      speed: "290 km/h",
      price: "₹1 Crore"
    },
    {
      name: "Lotus Evora",
      image: "/lotus-evora.webp",
      engine: "3.5L V6",
      fuel: "Petrol",
      speed: "280 km/h",
      price: "₹80 Lakh"
    },
    {
      name: "Lotus Emira",
      image: "/lotus-emira.webp",
      engine: "3.5L V6",
      fuel: "Petrol",
      speed: "290 km/h",
      price: "₹90 Lakh"
    }
  ],
  mini: [
    {
      name: "Mini Cooper",
      image: "/mini-cooper.webp",
      engine: "1.5L Turbo Inline-3",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "Mini Countryman",
      image: "/mini-countryman.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "200 km/h",
      price: "₹35 Lakh"
    },
    {
      name: "Mini Clubman",
      image: "/mini-clubman.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "200 km/h",
      price: "₹40 Lakh"
    },
    {
      name: "Mini John Cooper Works",
      image: "/mini-jcw.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "230 km/h",
      price: "₹50 Lakh"
    }
  ],
  forcemotors: [
    {
      name: "Force Gurkha",
      image: "/force-gurkha.webp",
      engine: "2.6L Turbo Diesel",
      fuel: "Diesel",
      speed: "170 km/h",
      price: "₹15 Lakh"
    },
    {
      name: "Force Traveller",
      image: "/force-traveller.webp",
      engine: "2.6L Turbo Diesel",
      fuel: "Diesel",
      speed: "160 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "Force One",
      image: "/force-one.webp",
      engine: "2.2L Turbo Diesel",
      fuel: "Diesel",
      speed: "180 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Force Motors Supro",
      image: "/force-supro.webp",
      engine: "2.2L Turbo Diesel",
      fuel: "Diesel",
      speed: "160 km/h",
      price: "₹18 Lakh"
    }
  ],
  gelly: [
    {
      name: "Gelly Emgrand",
      image: "/gelly-emgrand.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "180 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "Gelly Atlas",
      image: "/gelly-atlas.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "Gelly Coolray",
      image: "/gelly-coolray.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Gelly Icon",
      image: "/gelly-icon.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "180 km/h",
      price: "₹22 Lakh"
    }
  ],
  chery: [
    {
      name: "Chery Tiggo 7 Pro",
      image: "/chery-tiggo.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Chery Arrizo 5",
      image: "/chery-arrizo.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "180 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "Chery Tiggo 8 Pro",
      image: "/chery-tiggo8.webp",
      engine: "1.6L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "200 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "Chery eQ1",
      image: "/chery-eq1.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "150 km/h",
      price: "₹15 Lakh"
    }
  ],
  rimac: [
    {
      name: "Rimac C_Two",
      image: "/rimac-c_two.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "415 km/h",
      price: "₹200 Crore"
    },
    {
      name: "Rimac Concept One",
      image: "/rimac-concept-one.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "355 km/h",
      price: "₹150 Crore"
    },
    {
      name: "Rimac Nevera",
      image: "/rimac-nevera.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "412 km/h",
      price: "₹250 Crore"
    },
    {
      name: "Rimac E-M3",
      image: "/rimac-em3.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "300 km/h",
      price: "₹100 Crore"
    }
  ],
  mg: [
    {
      name: "MG Hector",
      image: "/mg-hector.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "MG ZS EV",
      image: "/mg-zs-ev.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "140 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "MG Gloster",
      image: "/mg-gloster.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹35 Lakh"
    },
    {
      name: "MG Astor",
      image: "/mg-astor.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "180 km/h",
      price: "₹18 Lakh"
    }
  ],
  smart: [
    {
      name: "Smart EQ ForTwo",
      image: "/smart-eq.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "130 km/h",
      price: "₹15 Lakh"
    },
    {
      name: "Smart EQ ForFour",
      image: "/smart-eq4.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "130 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "Smart EQ Fortwo Cabrio",
      image: "/smart-fortwo-cabrio.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "130 km/h",
      price: "₹18 Lakh"
    },
    {
      name: "Smart EQ ForFour Cabrio",
      image: "/smart-forfour-cabrio.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "130 km/h",
      price: "₹22 Lakh"
    }
  ],
  opel: [
    {
      name: "Opel Astra",
      image: "/opel-astra.webp",
      engine: "1.4L Turbo Inline-4",  
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Opel Corsa",
      image: "/opel-corsa.webp",
      engine: "1.2L Turbo Inline-3",
      fuel: "Petrol / Hybrid",
      speed: "180 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "Opel Grandland X",
      image: "/opel-grandland.webp",
      engine: "1.6L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "Opel Crossland X",
      image: "/opel-crossland.webp",
      engine: "1.2L Turbo Inline-3",
      fuel: "Petrol / Hybrid",
      speed: "180 km/h",
      price: "₹20 Lakh"
    }
  ],
  maybach: [
    {
      name: "Maybach S-Class",
      image: "/maybach-s-class.webp",
      engine: "6.0L V12",
      fuel: "Petrol",
      speed: "250 km/h",
      price: "₹1.5 Crore"
    },
    {
      name: "Maybach GLS",
      image: "/maybach-gls.webp",
      engine: "4.0L V8",
      fuel: "Petrol",
      speed: "240 km/h",
      price: "₹1.2 Crore"
    },

    {
      name: "Maybach G-Class",
      image: "/maybach-g-class.webp",
      engine: "4.0L V8",
      fuel: "Petrol", 
      speed: "220 km/h",
      price: "₹1 Crore"
    },
    {
      name: "Maybach S-Class Cabriolet",
      image: "/maybach-s-cabriolet.webp",
      engine: "6.0L V12",
      fuel: "Petrol",
      speed: "250 km/h",
      price: "₹1.8 Crore"
    }
  ]
};

const BrandDetail = () => {
  const { brand } = useParams();
  const cars = brandData[brand?.toLowerCase()];

  if (!cars) {
    return (
      <div className="brand-wrapper">
        <h2 className="not-found">Brand not found!</h2>
      </div>  
    );
  }

  return (
    <>
    <head>
  <title>CARVOCARZ - Branded Car Details | Compare & Reviews</title>

  <meta name="description" content="CARVOCARZ is a premium car website where you can explore top brands, compare cars, check specifications and read expert reviews. Discover luxury, electric and performance cars in one place." />

  <meta name="keywords" content="CARVOCARZ, car comparison, car Brands in detail, car reviews, About cars, carvoc carz, cars, car prise in india, car price, branded car price, about branded cars, compare branded cars, branded cars review, indian cars, type of cars, History of cars timeline, About cars in english, When Were cars popularized, facts about cars, all car price, Top 10 indian cars, paragraph about cars, most expansive cars in the world, pagani cars, pagani, volvo, cars build quality,  luxury cars, BMW, Audi, Mercedes, Tesla, SUV cars, electric cars India" />

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
    <div className="brand-wrapper">
      <section className="brand-hero">
        <h1>{brand.toUpperCase()} Cars</h1>
        <p>
          Explore luxury, performance, and innovation from {brand.toUpperCase()}
        </p>
      </section>

      <section className="brand-grid">
        {cars.map((car, index) => (
          <div className="brand-card" key={index}>
            <div className="image-wrapper">
              <img src={car.image} alt={car.name} />
            </div>

            <div className="card-content">
              <h3>{car.name}</h3>

              <p><strong>Engine:</strong> {car.engine}</p>
              <p><strong>Fuel:</strong> {car.fuel}</p>
              <p><strong>Top Speed:</strong> {car.speed}</p>

              <div className="price">{car.price}</div>
            </div>
          </div>
        ))}
      </section>
    </div>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7121971324804117"
     crossorigin="anonymous">
  </script>
    </>
  );
};

export default BrandDetail;
