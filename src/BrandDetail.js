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
      image: "/BMWX5.jpg",
      engine: "3.0L Inline-6 Turbo",
      fuel: "Diesel",
      speed: "230 km/h",
      price: "₹96 Lakh"
    },
    {
      name: "BMW 5 Series",
      image: "/BMW5Series.jpg",
      engine: "2.0L Turbo", 
      fuel: "Petrol / Diesel",
      speed: "250 km/h",
      price: "₹72 Lakh"
    },
    {
      name: "BMW i7",
      image: "/BMWi7.jpg",
      engine: "Electric Dual Motor",
      fuel: "Electric",
      speed: "240 km/h",
      price: "₹2.05 Crore"
    }
  ],
  audi: [
    {
      name: "Audi RS7",
      image: "/AudiRS7.jpg",
      engine: "3.0L Twin-Turbo V6",
      fuel: "Petrol",
      speed: "290 km/h",
      price: "₹1.53 Crore"
    },
    {
      name: "Audi Q5",
      image: "/AudiQ5.webp",
      engine: "2.0L Turbo",
      fuel: "Petrol / Diesel",
      speed: "230 km/h",
      price: "₹96 Lakh"
    },
    {
      name: "Audi 5 Series",
      image: "/Audi5Series.jpg",
      engine: "2.0L Turbo", 
      fuel: "Petrol / Diesel",
      speed: "250 km/h",
      price: "₹72 Lakh"
    },
    {
      name: "Audi e-tron GT",
      image: "/Audie-tronGT.jpg",
      engine: "Electric Dual Motor",
      fuel: "Electric",
      speed: "240 km/h",
      price: "₹2.05 Crore"
    }
  ],
  byd: [
    {
      name: "BYD Han EV",   
      image: "/BYDHanEV.jpg",
      engine: "Electric Dual Motor",
      fuel: "Electric",
      speed: "200 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "BYD Tang EV",
      image: "/BYDTangEV.jpg",
      engine: "Electric Dual Motor",
      fuel: "Electric",
      speed: "180 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "BYD e6",
      image: "/BYDe6.jpg",
      engine: "Electric Single Motor",
      fuel: "Electric",
      speed: "150 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "BYD Yuan EV",
      image: "/BYDYuanEV.jpg",
      engine: "Electric Single Motor",
      fuel: "Electric",
      speed: "160 km/h",
      price: "₹18 Lakh"
    }
  ],
  mercedes: [
    {
      name: "Mercedes AMG G63 G Wagon",
      image: "/download.jpg",
      engine: "4.0L Twin-Turbo V8",
      fuel: "Diesel",
      speed: "240 km/h",
      price: "₹4 Crore"
    },
    {
      name: "Mercedes-AMG GT",
      image: "/Mercedes-AMGGT.jpg",
      engine: "4.0L Twin-Turbo V8",
      fuel: "Petrol",
      speed: "310 km/h",
      price: "₹1.53 Crore"
    },  
    {
      name: "Mercedes GLE",
      image: "/MercedesGLE.jpg", 
      engine: "3.0L Inline-6 Turbo",
      fuel: "Petrol / Diesel",
      speed: "230 km/h",
      price: "₹96 Lakh"
    },
    { 
      name: "Mercedes E-Class",
      image: "/MercedesE-Class.jpg",
      engine: "2.0L Turbo",
      fuel: "Petrol / Diesel",
      speed: "250 km/h",
      price: "₹72 Lakh"
    },
    {
      name: "Mercedes EQS",
      image: "/MercedesEQS.jpg",
      engine: "Electric Dual Motor",
      fuel: "Electric",
      speed: "240 km/h",
      price: "₹2.05 Crore"
    }
  ],
  lexus: [
    {
      name: "Lexus RX", 
      image: "/LexusRX.webp",
      engine: "3.5L V6",
      fuel: "Petrol / Hybrid",
      speed: "210 km/h",
      price: "₹80 Lakh"
    },
    {
      name: "Lexus ES", 
      image: "/LexusES.jpg",
      engine: "2.5L Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "210 km/h",
      price: "₹60 Lakh"
    },
    {
      name: "Lexus LS",
      image: "/LexusLS.webp",
      engine: "3.5L V6",
      fuel: "Petrol / Hybrid",
      speed: "250 km/h",
      price: "₹1.20 Crore"
    },
    {
      name: "Lexus UX",
      image: "/LexusUX.jpg",
      engine: "2.0L Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "180 km/h",
      price: "₹40 Lakh"
    }
  ],
  porsche: [
    {
      name: "Porsche 911",
      image: "/Porsche911.webp",
      engine: "3.0L Twin-Turbo Flat-6",
      fuel: "Petrol",
      speed: "320 km/h",
      price: "₹1.53 Crore"
    },
    {
      name: "Porsche Cayenne",
      image: "/PorscheCayenne.jpg",
      engine: "3.0L Turbo V6",
      fuel: "Petrol / Diesel",
      speed: "250 km/h",
      price: "₹96 Lakh"
    },
    {
      name: "Porsche Panamera",
      image: "/PorschePanamera.jpg",
      engine: "2.9L Twin-Turbo V6",
      fuel: "Petrol / Diesel",
      speed: "290 km/h",
      price: "₹72 Lakh"
    },
    {
      name: "Porsche Taycan",
      image: "/PorscheTaycan.jpg",
      engine: "Electric Dual Motor",
      fuel: "Electric",
      speed: "260 km/h",
      price: "₹2.05 Crore"
    }
  ],
  tesla: [
    {
      name: "Tesla Model S",  
      image: "/Tesla-ModelS.jpg",
      engine: "Electric Dual Motor",
      fuel: "Electric",
      speed: "250 km/h",
      price: "₹1.53 Crore"
    },
    {
      name: "Tesla Model 3",
      image: "/Tesla-Model3.webp",
      engine: "Electric Dual Motor",
      fuel: "Electric",
      speed: "225 km/h",
      price: "₹96 Lakh"
    },
    {
      name: "Tesla Model X",
      image: "/Tesla-ModelX.jpg",
      engine: "Electric Dual Motor",
      fuel: "Electric",
      speed: "250 km/h",
      price: "₹1.20 Crore"
    },
    {
      name: "Tesla Model Y",
      image: "/Tesla-ModelY.webp",
      engine: "Electric Dual Motor",
      fuel: "Electric",
      speed: "210 km/h",
      price: "₹80 Lakh"
    }
  ],
  jaguar: [
      {
        name: "Jaguar F-Type",
        image: "/JaguarF-Type.jpg",
        engine: "3.0L Supercharged V6",
        fuel: "Petrol",
        speed: "300 km/h",
        price: "₹1.53 Crore"
      },
      {
        name: "Jaguar E-PACE",
        image: "/JaguarE-PACE.jpg",
        engine: "2.0L Turbo",
        fuel: "Petrol / Diesel",
        speed: "230 km/h",
        price: "₹96 Lakh"
      },
      {
        name: "Jaguar XE",
        image: "/JaguarXE.webp",
        engine: "2.0L Turbo",
        fuel: "Petrol / Diesel",
        speed: "250 km/h",
        price: "₹72 Lakh"
      },
      {
        name: "Jaguar I-PACE",
        image: "/JaguarI-PACE.jpg",
        engine: "Electric Dual Motor",
        fuel: "Electric",
        speed: "200 km/h",
        price: "₹2.05 Crore"
      }
  ],
  landrover: [
    {
      name: "Land Rover Defender",
      image: "/landroverdefender.jpg",
      engine: "2.0L Turbo",
      fuel: "Petrol / Diesel",
      speed: "200 km/h",
      price: "₹75 Lakh"
    },
    {
      name: "Land Rover Range Rover",
      image: "/landroverrangerover.webp",
      engine: "3.0L Turbo V6",
      fuel: "Petrol / Diesel",
      speed: "250 km/h",
      price: "₹1.20 Crore"
    },
    {
      name: "Land Rover Discovery",
      image: "/landroverdiscovery.jpg",
      engine: "2.0L Turbo",
      fuel: "Petrol / Diesel",
      speed: "210 km/h",
      price: "₹80 Lakh"
    },
    {
      name: "Land Rover Range Rover Sport",
      image: "/RangeRoverSport.jpg",
      engine: "3.0L Turbo V6",
      fuel: "Petrol / Diesel",
      speed: "240 km/h",
      price: "₹1.10 Crore"
    }
  ],
  volvo: [
    {
      name: "Volvo XC90",
      image: "/VolvoXC90.jpg",
      engine: "2.0L Turbo",
      fuel: "Petrol / Diesel / Hybrid",
      speed: "210 km/h",
      price: "₹80 Lakh"
    },
    {
      name: "Volvo S90",
      image: "/VolvoS90.webp",
      engine: "2.0L Turbo",
      fuel: "Petrol / Diesel / Hybrid",
      speed: "240 km/h",
      price: "₹70 Lakh"
    },
    {
      name: "Volvo XC60",
      image: "/VolvoXC60.jpg",
      engine: "2.0L Turbo",
      fuel: "Petrol / Diesel / Hybrid",
      speed: "220 km/h",
      price: "₹60 Lakh"
    },
    {
      name: "Volvo V90",
      image: "/VolvoV90.webp",
      engine: "2.0L Turbo",
      fuel: "Petrol / Diesel / Hybrid",
      speed: "230 km/h",
      price: "₹65 Lakh"
    }
  ],
  ferrari: [
    {
      name: "Ferrari 488",
      image: "/Ferrari-488.jpg",
      engine: "3.9L V8",
      fuel: "Petrol",
      speed: "330 km/h",
      price: "₹2.50 Crore"
    },
    {
      name: "Ferrari SF90",
      image: "/FerrariSF90.jpg",
      engine: "2.5L Turbo Hybrid V8",
      fuel: "Petrol / Hybrid",
      speed: "340 km/h",
      price: "₹5.00 Crore"
    },
    {
      name: "Ferrari Roma",
      image: "/FerrariRoma.webp",
      engine: "3.9L V8",
      fuel: "Petrol",
      speed: "320 km/h",
      price: "₹2.00 Crore"
    },
    { 
      name: "Ferrari Portofino",
      image: "/FerrariPortofino.jpg",
      engine: "3.9L V8",
      fuel: "Petrol",
      speed: "320 km/h",
      price: "₹1.80 Crore"
    }
  ],
    lamborghini: [
    {
      name: "Lamborghini Aventador",
      image: "/LamborghiniAventador.webp",
      engine: "6.5L V12",
      fuel: "Petrol",
      speed: "350 km/h",
      price: "₹3.00 Crore"
    },
    {
      name: "Lamborghini Huracan",
      image: "/LamborghiniHuracan.webp",
      engine: "5.2L V10",
      fuel: "Petrol",
      speed: "325 km/h",
      price: "₹2.50 Crore"
    },
    {
      name: "Lamborghini Urus",
      image: "/LamborghiniUrus.webp",
      engine: "4.0L Twin-Turbo V8",
      fuel: "Petrol",
      speed: "305 km/h",
      price: "₹2.00 Crore"
    },
    {
      name: "Lamborghini Sian",
      image: "/LamborghiniSian.webp",
      engine: "6.5L V12 Hybrid",
      fuel: "Petrol / Hybrid",
      speed: "350 km/h",
      price: "₹3.50 Crore"
    }
  ],
  maserati: [
    {
      name: "Maserati Ghibli",
      image: "/Maserati Ghibli.webp",
      engine: "3.0L Twin-Turbo V6",
      fuel: "Petrol",
      speed: "285 km/h",
      price: "₹1.20 Crore"
    },
    {
      name: "Maserati Levante",
      image: "/Maserati Levante.jpg",
      engine: "3.0L Twin-Turbo V6",
      fuel: "Petrol",
      speed: "260 km/h",
      price: "₹1.10 Crore"
    },
    {
      name: "Maserati Quattroporte",
      image: "/Maserati Quattroporte.jpg",
      engine: "3.0L Twin-Turbo V6",
      fuel: "Petrol",
      speed: "285 km/h",
      price: "₹1.30 Crore"
    },
    {
      name: "Maserati MC20",
      image: "/Maserati MC20.jpeg",
      engine: "3.0L Twin-Turbo V6",
      fuel: "Petrol",
      speed: "325 km/h",
      price: "₹2.50 Crore"
    }
  ],
  rollsroyce: [
    {
      name: "Rolls-Royce Phantom",
      image: "/Rolls-Royce Phantom.jpg",
      engine: "6.75L V12",
      fuel: "Petrol",
      speed: "250 km/h",
      price: "₹8.00 Crore"
    },
    {
      name: "Rolls-Royce Ghost",
      image: "/Rolls-Royce Ghost.webp",
      engine: "6.75L V12",
      fuel: "Petrol",
      speed: "250 km/h",
      price: "₹4.00 Crore"
    },
    {
      name: "Rolls-Royce Wraith",
      image: "/Rolls-Royce Wraith.jpeg",
      engine: "6.6L V12",
      fuel: "Petrol",
      speed: "250 km/h",
      price: "₹3.00 Crore"
    },
    {
      name: "Rolls-Royce Dawn",
      image: "/Rolls-Royce Dawn.jpg",
      engine: "6.6L V12",
      fuel: "Petrol",
      speed: "250 km/h",
      price: "₹3.50 Crore"
    }
  ],
  bentley: [
    {
      name: "Bentley Continental GT",
      image: "/Bentley Continental GT.webp",
      engine: "4.0L Twin-Turbo V8",
      fuel: "Petrol",
      speed: "318 km/h",
      price: "₹2.50 Crore"
    },
    {
      name: "Bentley Bentayga",
      image: "/Bentley Bentayga.jpg",
      engine: "4.0L Twin-Turbo V8",
      fuel: "Petrol",
      speed: "306 km/h",
      price: "₹2.00 Crore"
    },
    {
      name: "Bentley Flying Spur",
      image: "/Bentley Flying Spur.jpg",
      engine: "4.0L Twin-Turbo V8",
      fuel: "Petrol",
      speed: "318 km/h",
      price: "₹2.20 Crore"
    },
    {
      name: "Bentley Mulsanne",
      image: "/Bentley Mulsanne.jpg",
      engine: "6.75L V8",
      fuel: "Petrol",
      speed: "296 km/h",
      price: "₹3.00 Crore"
    }
  ],
  astonmartin: [
    {
      name: "Aston Martin DB11",
      image: "/Aston Martin DB11.webp",
      engine: "4.0L Twin-Turbo V8",
      fuel: "Petrol",
      speed: "322 km/h",
      price: "₹2.50 Crore"
    },
    {
      name: "Aston Martin Vantage",
      image: "/Aston Martin Vantage.jpg",
      engine: "4.0L Twin-Turbo V8",
      fuel: "Petrol",
      speed: "314 km/h",
      price: "₹1.50 Crore"
    },
    {
      name: "Aston Martin DBS Superleggera",
      image: "/Aston Martin DBS Superleggera.jpg",
      engine: "5.2L Twin-Turbo V12",
      fuel: "Petrol",
      speed: "340 km/h",
      price: "₹3.00 Crore"
    },
    {
      name: "Aston Martin Rapide",
      image: "/Aston Martin Rapide.jpg",
      engine: "6.0L V12",
      fuel: "Petrol",
      speed: "305 km/h",
      price: "₹2.00 Crore"
    }
  ],
  mclaren: [
    {
      name: "McLaren 720S",
      image: "/McLaren 720S.jpg",
      engine: "4.0L Twin-Turbo V8",
      fuel: "Petrol",
      speed: "341 km/h",
      price: "₹2.50 Crore"
    },
    {
      name: "McLaren Solos GT",
      image: "/McLaren Solos GT.webp",
      engine: "4.0L Twin-Turbo V8",
      fuel: "Petrol",
      speed: "340 km/h",
      price: "₹3.00 Crore"
    },
    {
      name: "McLaren Artura",
      image: "/McLaren Artura.jpg",
      engine: "3.0L Twin-Turbo V6 Hybrid",
      fuel: "Petrol / Hybrid",
      speed: "330 km/h",
      price: "₹2.00 Crore"
    },
    {
      name: "McLaren GT",
      image: "/McLaren GT.jpg",
      engine: "4.0L Twin-Turbo V8",
      fuel: "Petrol",
      speed: "326 km/h",
      price: "₹1.80 Crore"
    }
  ],
  bugatti: [
    {
      name: "Bugatti Chiron",
      image: "/Bugatti Chiron.jpg",
      engine: "8.0L Quad-Turbo W16",
      fuel: "Petrol",
      speed: "420 km/h",
      price: "₹30 Crore"
    },
    {
      name: "Bugatti Veyron",
      image: "/Bugatti Veyron.jpg",
      engine: "8.0L Quad-Turbo W16",
      fuel: "Petrol",
      speed: "410 km/h",
      price: "₹25 Crore"
    },
    {
      name: "Bugatti Divo",
      image: "/Bugatti Divo.jpg",
      engine: "8.0L Quad-Turbo W16",
      fuel: "Petrol",
      speed: "380 km/h",
      price: "₹25 Crore"
    },
    {
      name: "Bugatti Centodieci",
      image: "/Bugatti Centodieci.webp",
      engine: "8.0L Quad-Turbo W16",
      fuel: "Petrol",
      speed: "380 km/h",
      price: "₹30 Crore"
    }
  ],
  pagani: [    
    {
      name: "Pagani Zonda",
      image: "/Pagani Zonda.webp",
      engine: "7.3L V12",
      fuel: "Petrol",
      speed: "350 km/h",
      price: "₹5.00 Crore"
    },
    {
      name: "Pagani Huayra",
      image: "/Pagani Huayra.webp",
      engine: "6.0L Twin-Turbo V12",
      fuel: "Petrol",
      speed: "370 km/h",
      price: "₹6.00 Crore"
    },
    {
      name: "Pagani Imola",
      image: "/Pagani Imola.webp",
      engine: "6.0L Twin-Turbo V12",
      fuel: "Petrol",
      speed: "380 km/h",
      price: "₹7.00 Crore"
    },
    {
      name: "Pagani Utopia",
      image: "/Pagani Utopia.webp",
      engine: "6.0L Twin-Turbo V12",
      fuel: "Petrol", 
      speed: "360 km/h",
      price: "₹6.50 Crore"
    }
  ],
  koenigsegg: [
    {
      name: "Koenigsegg Agera RS",
      image: "/Koenigsegg Agera RS.webp",
      engine: "5.0L Twin-Turbo V8",
      fuel: "Petrol",
      speed: "447 km/h",
      price: "₹10 Crore"
    },
    {
      name: "Koenigsegg Jesko",
      image: "/Koenigsegg Jesko.webp",
      engine: "5.0L Twin-Turbo V8",
      fuel: "Petrol",
      speed: "480 km/h",
      price: "₹12 Crore"
    },
    {
      name: "Koenigsegg Regera",
      image: "/Koenigsegg Regera.webp",
      engine: "5.0L Twin-Turbo V8 Hybrid",
      fuel: "Petrol / Hybrid",
      speed: "410 km/h",
      price: "₹11 Crore"
    },
    {
      name: "Koenigsegg Gemera",
      image: "/Koenigsegg Gemera.webp",
      engine: "2.0L Twin-Turbo Inline-3 Hybrid",
      fuel: "Petrol / Hybrid",
      speed: "400 km/h",
      price: "₹9 Crore"
    }
  ],
  alfaromeo: [
    {
      name: "Alfa Romeo Giulia",
      image: "/Alfa Romeo Giulia.jpg",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "240 km/h",
      price: "₹60 Lakh"
    },
    {
      name: "Alfa Romeo Stelvio",
      image: "/Alfa Romeo Stelvio.jpeg",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "230 km/h",
      price: "₹70 Lakh"
    },
    {
      name: "Alfa Romeo 4C",
      image: "/Alfa Romeo 4C.webp",
      engine: "1.7L Turbo Inline-4",
      fuel: "Petrol",
      speed: "258 km/h",
      price: "₹80 Lakh"
    },
    {
      name: "Alfa Romeo Tonale",
      image: "/Alfa Romeo Tonale.webp",
      engine: "2.0L Turbo Inline-4 Hybrid",
      fuel: "Petrol / Hybrid",
      speed: "220 km/h",
      price: "₹50 Lakh"
    }
  ],
  cadillac: [
    {
      name: "Cadillac Escalade",
      image: "/Cadillac Escalade.webp",
      engine: "3.0L Turbo Inline-6",
      fuel: "Petrol",
      speed: "220 km/h",
      price: "₹85 Lakh"
    },
    {
      name: "Cadillac CT5",
      image: "/Cadillac CT5.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "230 km/h",
      price: "₹65 Lakh"
    },
    {
      name: "Cadillac CT4",
      image: "/Cadillac CT4.jpg",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "230 km/h",
      price: "₹55 Lakh"
    },
    {
      name: "Cadillac XT5",
      image: "/Cadillac XT5.webp",
      engine: "2.0L Turbo Inline-4 Hybrid", 
      fuel: "Petrol / Hybrid", 
      speed: "210 km/h", 
      price: "₹70 Lakh"
    }
  ],
  infiniti: [
    {
      name: "Infiniti Q50",
      image: "/Infiniti Q50.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "240 km/h",
      price: "₹60 Lakh"
    },
    {
      name: "Infiniti QX60",
      image: "/Infiniti QX60.jpg",
      engine: "3.5L V6",
      fuel: "Petrol",
      speed: "210 km/h",
      price: "₹70 Lakh"
    },
    {
      name: "Infiniti QX80",
      image: "/Infiniti QX80.webp",
      engine: "5.6L V8",
      fuel: "Petrol",
      speed: "230 km/h",
      price: "₹90 Lakh"
    },
    {
      name: "Infiniti QX50",
      image: "/Infiniti QX50.png",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "220 km/h",
      price: "₹65 Lakh"
    }
  ],
  acura: [
    {
      name: "Acura ILX",
      image: "/Acura ILX.jpg",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "220 km/h",
      price: "₹55 Lakh"
    },
    {
      name: "Acura MDX",
      image: "/Acura MDX.webp",
      engine: "3.5L V6",
      fuel: "Petrol",
      speed: "210 km/h",
      price: "₹75 Lakh"
    },
    {
      name: "Acura RDX",
      image: "/Acura RDX.webp",
      engine: "2.0L Turbo Inline-4 Hybrid", 
      fuel: "Petrol / Hybrid", 
      speed: "210 km/h", 
      price: "₹65 Lakh"
    },
    {
      name: "Acura NSX",
      image: "/Acura NSX.jpg",
      engine: "3.5L Twin-Turbo V6 Hybrid",
      fuel: "Petrol / Hybrid",
      speed: "307 km/h",
      price: "₹1.50 Crore"
    }
  ],
  genesis: [
    {
      name: "Genesis G70",
      image: "/Genesis G70.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "240 km/h",
      price: "₹60 Lakh"
    },
    {
      name: "Genesis G80",
      image: "/Genesis G80.jpg",
      engine: "2.5L Turbo Inline-4",
      fuel: "Petrol",
      speed: "230 km/h",
      price: "₹70 Lakh"
    },
    {
      name: "Genesis GV80",
      image: "/Genesis GV80.webp",
      engine: "3.5L V6",
      fuel: "Petrol",
      speed: "210 km/h",
      price: "₹80 Lakh"
    },
    {
      name: "Genesis G90",
      image: "/Genesis G90.webp",
      engine: "3.3L Twin-Turbo V6",
      fuel: "Petrol",
      speed: "250 km/h",
      price: "₹1.20 Crore"
    }
  ],
  lincoln: [
    {
      name: "Lincoln Navigator",
      image: "/Lincoln Navigator.webp",
      engine: "3.0L Turbo Inline-6",
      fuel: "Petrol",
      speed: "210 km/h",
      price: "₹85 Lakh"
    },
    {
      name: "Lincoln Continental",
      image: "/Lincoln Continental.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "230 km/h",
      price: "₹75 Lakh"
    },
    {
      name: "Lincoln Aviator",
      image: "/Lincoln Aviator.webp",
      engine: "3.0L Turbo V6 Hybrid",
      fuel: "Petrol / Hybrid",  
      speed: "210 km/h",
      price: "₹80 Lakh"
    },
    {
      name: "Lincoln Corsair",
      image: "/Lincoln Corsair.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "220 km/h",
      price: "₹65 Lakh"
    }
  ],
  mitsubishi: [
    {
      name: "Mitsubishi Xpander",
      image: "/Mitsubishi Xpander.webp",
      engine: "1.5L Inline-4",
      fuel: "Petrol",
      speed: "180 km/h",
      price: "₹35 Lakh"
    },
    {
      name: "Mitsubishi Outlander",
      image: "/Mitsubishi Outlander.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "200 km/h",
      price: "₹55 Lakh"
    },
    {
      name: "Mitsubishi Pajero",
      image: "/Mitsubishi Pajero.webp",
      engine: "2.4L Turbo Inline-4",
      fuel: "Diesel / Hybrid", 
      speed: "190 km/h",
      price: "₹75 Lakh"
    },
    {
      name: "Mitsubishi Eclipse Cross",
      image: "/Mitsubishi Eclipse Cross.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol",
      speed: "190 km/h",
      price: "₹45 Lakh"
    }
  ],
  subaru: [
    {
      name: "Subaru Outback",
      image: "/Subaru Outback.webp",
      engine: "2.5L Inline-4",
      fuel: "Petrol",
      speed: "190 km/h",
      price: "₹55 Lakh"
    },
    {
      name: "Subaru Forester",
      image: "/Subaru Forester.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "200 km/h",
      price: "₹65 Lakh"
    },
    {
      name: "Subaru WRX",
      image: "/Subaru WRX.webp",
      engine: "2.0L Turbo Inline-4", 
      fuel: "Petrol", 
      speed: "230 km/h", 
      price: "₹75 Lakh"
    },
    {
      name: "Subaru Ascent",
      image: "/Subaru Ascent.webp",
      engine: "2.5L Turbo Inline-4 Hybrid", 
      fuel: "Petrol / Hybrid", 
      speed: "190 km/h", 
      price: "₹85 Lakh"
    }
  ],
  mazda: [
    {
      name: "Mazda CX-5",
      image: "/Mazda CX-5.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "210 km/h",
      price: "₹50 Lakh"
    },
    {
      name: "Mazda CX-9",
      image: "/Mazda CX-9.webp",
      engine: "2.5L Turbo Inline-4",
      fuel: "Petrol",
      speed: "200 km/h",
      price: "₹70 Lakh"
    },
    {
      name: "Mazda MX-5 Miata",
      image: "/Mazda MX-5 Miata.webp",
      engine: "2.0L Inline-4",
      fuel: "Petrol", 
      speed: "180 km/h", 
      price: "₹45 Lakh"
    },
    {
      name: "Mazda 3",
      image: "/Mazda 3.webp",
      engine: "2.0L Inline-4",
      fuel: "Petrol",
      speed: "190 km/h",
      price: "₹40 Lakh"
    }
  ],
  honda: [
    {
      name: "Honda Accord",
      image: "/Honda Accord.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "210 km/h",
      price: "₹50 Lakh"
    },
    {
      name: "Honda CR-V",
      image: "/Honda CR-V.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹40 Lakh"
    },
    {
      name: "Honda Civic",
      image: "/Honda Civic.webp",
      engine: "2.0L Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "200 km/h",
      price: "₹35 Lakh"
    },
    {
      name: "Honda HR-V",
      image: "/Honda HR-V.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹30 Lakh"
    }
  ],
  toyota: [
    {
      name: "Toyota Camry",
      image: "/Toyota Camry.webp",
      engine: "2.5L Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "200 km/h",
      price: "₹45 Lakh"
    },
    {
      name: "Toyota Corolla", 
      image: "/Toyota Corolla.webp",
      engine: "1.8L Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "180 km/h",
      price: "₹35 Lakh"
    },
    {
      name: "Toyota Fortuner", 
      image: "/Toyota Fortuner.webp",
      engine: "2.8L Turbo V6",
      fuel: "Diesel / Hybrid", 
      speed: "190 km/h",
      price: "₹75 Lakh"
    },
    { 
      name: "Toyota RAV4",
      image: "/Toyota RAV4.webp",
      engine: "2.5L Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹50 Lakh"
    }
  ],
  nissan: [
    {
      name: "Nissan Altima",
      image: "/Nissan Altima.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "210 km/h",
      price: "₹45 Lakh"

    },
    {
      name: "Nissan Rogue",
      image: "/Nissan Rogue.webp",
      engine: "2.5L Inline-4",
      fuel: "Petrol",
      speed: "190 km/h",
      price: "₹50 Lakh"
    },
    {
      name: "Nissan GT-R",
      image: "/Nissan GT-R.webp",
      engine: "3.8L Twin-Turbo V6",
      fuel: "Petrol",
      speed: "315 km/h",
      price: "₹1.50 Crore"
    },
    {
      name: "Nissan Leaf",
      image: "/Nissan Leaf.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "150 km/h",
      price: "₹30 Lakh"
    }
  ],
  hyundai: [
    {
      name: "Hyundai Sonata",
      image: "/Hyundai Sonata.jpg",
      engine: "2.5L Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "200 km/h",
      price: "₹40 Lakh"
    },
    {
      name: "Hyundai Creta",
      image: "/Hyundai Creta.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹35 Lakh"
    },
    {
      name: "Hyundai Elantra",
      image: "/Hyundai Elantra.jpg",
      engine: "2.0L Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "Hyundai Tucson",
      image: "/Hyundai Tucson.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "200 km/h",
      price: "₹45 Lakh"
    }
  ],
  kia: [
    {
      name: "Kia Stinger",
      image: "/Kia Stinger.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "240 km/h",
      price: "₹50 Lakh"
    },
    {
      name: "Kia Sorento",
      image: "/Kia Sorento.webp",
      engine: "2.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "210 km/h",
      price: "₹45 Lakh"
    },
    {
      name: "Kia Seltos",
      image: "/Kia Seltos.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "Kia Carnival",
      image: "/Kia Carnival.jpg",
      engine: "2.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹40 Lakh"
    }
  ],
  jeep: [
    {
      name: "Jeep Wrangler",
      image: "/Jeep Wrangler.webp",
      engine: "3.6L V6",
      fuel: "Petrol",
      speed: "180 km/h",
      price: "₹75 Lakh"
    },
    {
      name: "Jeep Grand Cherokee",
      image: "/Jeep Grand Cherokee.webp",
      engine: "3.6L V6",
      fuel: "Petrol / Diesel",
      speed: "210 km/h",
      price: "₹80 Lakh"
    },
    {
      name: "Jeep Compass",
      image: "/Jeep Compass.webp",
      engine: "1.4L Turbo Inline-4",
      fuel: "Petrol / Diesel",
      speed: "190 km/h",
      price: "₹40 Lakh"
    },
    {
      name: "Jeep Renegade",
      image: "/Jeep Renegade.webp",
      engine: "1.3L Turbo Inline-4",
      fuel: "Petrol / Diesel",
      speed: "180 km/h",
      price: "₹35 Lakh"
    }
  ],
  chevrolet: [
    {
      name: "Chevrolet Camaro",
      image: "/Chevrolet Camaro.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "250 km/h",
      price: "₹60 Lakh"
    },
    {
      name: "Chevrolet Silverado",
      image: "/Chevrolet Silverado.webp",
      engine: "5.3L V8",
      fuel: "Petrol / Diesel",
      speed: "190 km/h",
      price: "₹75 Lakh"
    },
    {
      name: "Chevrolet Equinox",
      image: "/Chevrolet Equinox.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹35 Lakh"
    },
    {
      name: "Chevrolet Traverse",
      image: "/Chevrolet Traverse.webp",
      engine: "3.6L V6",
      fuel: "Petrol / Hybrid",
      speed: "210 km/h",
      price: "₹50 Lakh"
    }
  ],
  ford: [
    {
      name: "Ford Mustang",
      image: "/Ford Mustang.webp",
      engine: "2.3L Turbo Inline-4",
      fuel: "Petrol",
      speed: "250 km/h",
      price: "₹60 Lakh"
    },
    {
      name: "Ford F-150",
      image: "/Ford F-150.jpg",
      engine: "3.5L V6",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹75 Lakh"
    },
    {
      name: "Ford Explorer",
      image: "/Ford Explorer.webp",
      engine: "2.3L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "210 km/h",
      price: "₹50 Lakh"
    },
    {
      name: "Ford Escape",
      image: "/Ford Escape.jpg",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹40 Lakh"
    }
  ],
  volkswagen: [
    {
      name: "Volkswagen Golf",
      image: "/Volkswagen Golf.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "240 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "Volkswagen Passat",
      image: "/Volkswagen Passat.jpg",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "210 km/h",
      price: "₹40 Lakh"
    },
    {
      name: "Volkswagen Tiguan",
      image: "/Volkswagen Tiguan.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "200 km/h",
      price: "₹35 Lakh"
    },
    {
      name: "Volkswagen Atlas",
      image: "/Volkswagen Atlas.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹45 Lakh"
    }
  ],
  renault: [
    {
      name: "Renault Duster",
      image: "/Renault Duster.jpeg",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Diesel",
      speed: "180 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Renault Kiger",
      image: "/Renault Kiger.webp",
      engine: "1.2L Turbo Inline-3",
      fuel: "Petrol / Hybrid",
      speed: "170 km/h",
      price: "₹15 Lakh"
    },
    {
      name: "Renault Scala",
      image: "/Renault Scala.webp",
      engine: "1.0L Turbo Inline-3",
      fuel: "Petrol / Hybrid",
      speed: "160 km/h",
      price: "₹12 Lakh"
    },
    {
      name: "Renault Triber",
      image: "/Renault Triber.webp",
      engine: "1.2L Turbo Inline-3",
      fuel: "Petrol / Hybrid",
      speed: "170 km/h",
      price: "₹18 Lakh"
    }
  ],
    peugeot: [
    {
      name: "Peugeot 308",
      image: "/Peugeot 308.webp",
      engine: "1.2L Turbo Inline-3",
      fuel: "Petrol / Hybrid",
      speed: "180 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Peugeot 508",
      image: "/Peugeot 508.jpg",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "210 km/h",
      price: "₹45 Lakh"
    },
    {
      name: "Peugeot 2008",
      image: "/Peugeot 2008.jpg",
      engine: "1.2L Turbo Inline-3",
      fuel: "Petrol / Hybrid",
      speed: "170 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "Peugeot 3008",
      image: "/Peugeot 3008.webp",
      engine: "1.6L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹30 Lakh"
    }
  ],
  citroën: [
    {
      name: "Citroën C3",
      image: "/Citroën C3.jpg",
      engine: "1.2L Turbo Inline-3",
      fuel: "Petrol / Hybrid",
      speed: "170 km/h",
      price: "₹15 Lakh"
    },
    {
      name: "Citroën C4",
      image: "/Citroën C4.jpg",
      engine: "1.6L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Citroën C5 Aircross",
      image: "/Citroën C5 Aircross.webp",
      engine: "1.6L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "Citroën Berlingo",
      image: "/Citroën Berlingo.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "160 km/h",
      price: "₹20 Lakh"
    }
  ],
  skoda: [
    {
      name: "Skoda Octavia",
      image: "/Skoda Octavia.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "210 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "Skoda Superb",
      image: "/Skoda Superb.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "220 km/h",
      price: "₹40 Lakh"
    },
    {
      name: "Skoda Kodiaq",
      image: "/Skoda Kodiaq.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "200 km/h",
      price: "₹35 Lakh"
    },
    { 
      name: "Skoda Kamiq",
      image: "/Skoda Kamiq.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹25 Lakh"
    }
  ],
  seat: [
    {
      name: "Seat Leon",
      image: "/Seat Leon.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Seat Ateca",
      image: "/Seat Ateca.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "Seat Arona",
      image: "/Seat Arona.webp",
      engine: "1.0L Turbo Inline-3",
      fuel: "Petrol / Hybrid",
      speed: "170 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "Seat Tarraco",
      image: "/Seat Tarraco.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "200 km/h",
      price: "₹35 Lakh"
    }
  ],
  fiat: [
    {
      name: "Fiat Punto",
      image: "/Fiat Punto.jpg",
      engine: "1.2L Turbo Inline-3",
      fuel: "Petrol / Hybrid",
      speed: "160 km/h",
      price: "₹15 Lakh"
    },
    {
      name: "Fiat Linea",
      image: "/Fiat Linea.webp",
      engine: "1.3L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "170 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "Fiat 500X",
      image: "/Fiat 500X.webp",
      engine: "1.4L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "180 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Fiat Argo",
      image: "/Fiat Argo.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹22 Lakh"
    }
  ],
  lancia: [
    {
      name: "Lancia Ypsilon",     
      image: "/Lancia Ypsilon.webp",
      engine: "1.2L Turbo Inline-3",
      fuel: "Petrol / Hybrid",
      speed: "170 km/h",
      price: "₹15 Lakh"
    },
    {
      name: "Lancia Delta",
      image: "/Lancia Delta.webp",
      engine: "1.4L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Lancia Thema",
      image: "/Lancia Thema.webp",
      engine: "3.0L V6",
      fuel: "Petrol / Hybrid",
      speed: "210 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "Lancia Voyager",
      image: "/Lancia Voyager.webp",
      engine: "3.6L V6",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹35 Lakh"
    },
  ],
  dodge: [
      {
        name: "Dodge Charger",
        image: "/Dodge Charger.webp",
        engine: "3.6L V6",
        fuel: "Petrol",
        speed: "200 km/h",
        price: "₹40 Lakh"
      },
      {
        name: "Dodge Durango",
        image: "/Dodge Durango.webp",
        engine: "3.6L V6",
        fuel: "Petrol",
        speed: "190 km/h",
        price: "₹50 Lakh"
      },  
      {
        name: "Dodge Challenger",
        image: "/Dodge Challenger.webp",
        engine: "3.6L V6",
        fuel: "Petrol",
        speed: "210 km/h",
        price: "₹45 Lakh"
      },
      {
        name: "Dodge Ram 1500",
        image: "/Dodge Ram 1500.webp",
        engine: "3.6L V6",
        fuel: "Petrol",
        speed: "190 km/h",
        price: "₹55 Lakh"
      }
    ],
  ram: [
      {
        name: "Ram 1500",
        image: "/Ram 1500.webp",
        engine: "3.6L V6",
        fuel: "Petrol",
        speed: "190 km/h",
        price: "₹55 Lakh"
      },
      {
        name: "Ram 2500",
        image: "/Ram 2500.webp",
        engine: "6.4L V8",
        fuel: "Petrol",
        speed: "180 km/h",
        price: "₹75 Lakh"
      },
      {
        name: "Ram 3500",
        image: "/Ram 3500.webp",
        engine: "6.7L Turbo Diesel I6",
        fuel: "Diesel",
        speed: "170 km/h",
        price: "₹85 Lakh"
      },
      {
        name: "Ram ProMaster",
        image: "/Ram ProMaster.webp",
        engine: "3.6L V6",
        fuel: "Petrol",
        speed: "160 km/h",
        price: "₹45 Lakh"
      }
  ],
  gmc: [
      {        
        name: "GMC Sierra 1500",
        image: "/GMC Sierra 1500.webp",
        engine: "3.0L Turbo Inline-6",
        fuel: "Petrol",
        speed: "190 km/h",
        price: "₹60 Lakh"
      },
      {
        name: "GMC Yukon",
        image: "/GMC Yukon.webp",
        engine: "5.3L V8",
        fuel: "Petrol",
        speed: "210 km/h",
        price: "₹80 Lakh"
      },
      {
        name: "GMC Acadia",
        image: "/GMC Acadia.webp",
        engine: "2.0L Turbo Inline-4",
        fuel: "Petrol",
        speed: "190 km/h",
        price: "₹40 Lakh"
      },
      {
        name: "GMC Terrain",
        image: "/GMC Terrain.webp",
        engine: "1.5L Turbo Inline-4",
        fuel: "Petrol",
        speed: "180 km/h",
        price: "₹30 Lakh"
      }
  ],
  chrysler: [
      {
        name: "Chrysler 300",
        image: "/Chrysler 300.webp",
        engine: "3.6L V6",
        fuel: "Petrol",
        speed: "200 km/h",
        price: "₹45 Lakh"
      },
      {
        name: "Chrysler Pacifica",
        image: "/Chrysler Pacifica.webp",
        engine: "2.4L Turbo Inline-4",
        fuel: "Petrol",
        speed: "180 km/h",
        price: "₹55 Lakh"
      },
      {
        name: "Chrysler Town & Country",
        image: "/Chrysler Town & Country.webp",
        engine: "3.6L V6",
        fuel: "Petrol",
        speed: "190 km/h",
        price: "₹50 Lakh"
      },
      {
        name: "Chrysler Voyager",
        image: "/Chrysler Voyager.webp",
        engine: "3.6L V6",
        fuel: "Petrol",
        speed: "190 km/h",
        price: "₹45 Lakh"
      }
  ],
  buick: [
      {
        name: "Buick Enclave",
        image: "/Buick Enclave.webp",
        engine: "3.6L V6",
        fuel: "Petrol",
        speed: "190 km/h",
        price: "₹50 Lakh"
      },
      {
        name: "Buick Encore",
        image: "/Buick Encore.webp",
        engine: "1.4L Turbo Inline-4",
        fuel: "Petrol",
        speed: "180 km/h",
        price: "₹30 Lakh"
      },
      {
        name: "Buick LaCrosse",
        image: "/Buick LaCrosse.webp",
        engine: "3.6L V6",
        fuel: "Petrol",
        speed: "200 km/h",
        price: "₹45 Lakh"
      },
      {
        name: "Buick Regal",
        image: "/Buick Regal.webp",
        engine: "2.0L Turbo Inline-4",
        fuel: "Petrol",
        speed: "190 km/h",
        price: "₹35 Lakh"
      }
  ],
  xiaomi: [
      {
        name: "Xiaomi Mi SU7",
        image: "/Xiaomi Mi SU7.webp",
        engine: "Electric Motor",
        fuel: "Electric",
        speed: "150 km/h",
        price: "₹25 Lakh"
      },
      {
        name: "Xiaomi Mi YU7",
        image: "/Xiaomi Mi YU7.webp",
        engine: "Electric Motor",
        fuel: "Electric",
        speed: "160 km/h",
        price: "₹30 Lakh"
      },
      {
        name: "Xiaomi Mi Sedan",
        image: "/Xiaomi Mi Sedan.webp",
        engine: "Electric Motor",
        fuel: "Electric",
        speed: "140 km/h",
        price: "₹20 Lakh"
      },
      {
        name: "Xiaomi Mi Hatchback",
        image: "/Xiaomi Mi Hatchback.webp",
        engine: "Electric Motor",
        fuel: "Electric",
        speed: "130 km/h",
        price: "₹15 Lakh"
      }
    ],
    suzuki:[
    {
      name: "Suzuki Swift",
      image: "/Suzuki Swift.webp",
      engine: "1.2L Inline-4",
      fuel: "Petrol",
      speed: "180 km/h",
      price: "₹20 Lakh" 
    },
    {
      name: "Suzuki Vitara",
      image: "/Suzuki Vitara.webp",
      engine: "1.4L Turbo Inline-4",
      fuel: "Petrol",
      speed: "190 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "Suzuki Jimny",
      image: "/Suzuki Jimny.webp",
      engine: "1.5L Inline-4",
      fuel: "Petrol",
      speed: "170 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Suzuki Baleno",
      image: "/Suzuki Baleno.webp",
      engine: "1.2L Inline-4",
      fuel: "Petrol",
      speed: "180 km/h",
      price: "₹18 Lakh"
    }
  ],
  mahindra: [
    {
      name: "Mahindra Thar",
      image: "/Mahindra Thar.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Diesel",
      speed: "180 km/h",
      price: "₹15 Lakh"
    },
    {
      name: "Mahindra XUV700",
      image: "/Mahindra XUV700.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Diesel",
      speed: "190 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "Mahindra Scorpio",
      image: "/Mahindra Scorpio.webp",
      engine: "2.2L Turbo Diesel",
      fuel: "Diesel",
      speed: "170 km/h",
      price: "₹12 Lakh"
    },
    {
      name: "Mahindra Bolero",
      image: "/Mahindra Bolero.webp",
      engine: "1.5L Turbo Diesel",
      fuel: "Diesel",
      speed: "160 km/h",
      price: "₹10 Lakh"
    }
  ],
  tata: [
    {
      name: "Tata Harrier",
      image: "/Tata Harrier.webp",
      engine: "2.0L Turbo Diesel",
      fuel: "Diesel",
      speed: "190 km/h",
      price: "₹15 Lakh"
    },
    {
      name: "Tata Nexon",
      image: "/Tata Nexon.webp",
      engine: "1.5L Turbo Petrol",
      fuel: "Petrol",
      speed: "180 km/h",
      price: "₹10 Lakh"
    },
    {
      name: "Tata Safari",
      image: "/Tata Safari.webp",
      engine: "2.0L Turbo Diesel",
      fuel: "Diesel",
      speed: "190 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "Tata Altroz",
      image: "/Tata Altroz.webp",
      engine: "1.5L Turbo Petrol",
      fuel: "Petrol",
      speed: "170 km/h",
      price: "₹8 Lakh"
    }
  ],
  lotus: [
    {
      name: "Lotus Elise",  
      image: "/Lotus Elise.webp",
      engine: "1.8L Turbo Inline-4",
      fuel: "Petrol",
      speed: "220 km/h",
      price: "₹50 Lakh"
    },
    {
      name: "Lotus Exige",
      image: "/Lotus Exige.webp",
      engine: "3.5L V6",
      fuel: "Petrol",
      speed: "290 km/h",
      price: "₹1 Crore"
    },
    {
      name: "Lotus Evora",
      image: "/Lotus Evora.webp",
      engine: "3.5L V6",
      fuel: "Petrol",
      speed: "280 km/h",
      price: "₹80 Lakh"
    },
    {
      name: "Lotus Emira",
      image: "/Lotus Emira.webp",
      engine: "3.5L V6",
      fuel: "Petrol",
      speed: "290 km/h",
      price: "₹90 Lakh"
    }
  ],
  mini: [
    {
      name: "Mini Cooper",
      image: "/Mini Cooper.webp",
      engine: "1.5L Turbo Inline-3",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "Mini Countryman",
      image: "/Mini Countryman.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "200 km/h",
      price: "₹35 Lakh"
    },
    {
      name: "Mini Clubman",
      image: "/Mini Clubman.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "200 km/h",
      price: "₹40 Lakh"
    },
    {
      name: "Mini John Cooper Works",
      image: "/Mini John Cooper Works.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "230 km/h",
      price: "₹50 Lakh"
    }
  ],
  forcemotors: [
    {
      name: "Force Gurkha",
      image: "/Force Gurkha.webp",
      engine: "2.6L Turbo Diesel",
      fuel: "Diesel",
      speed: "170 km/h",
      price: "₹15 Lakh"
    },
    {
      name: "Force Traveller",
      image: "/Force Traveller.webp",
      engine: "2.6L Turbo Diesel",
      fuel: "Diesel",
      speed: "160 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "Force One",
      image: "/Force One.webp",
      engine: "2.2L Turbo Diesel",
      fuel: "Diesel",
      speed: "180 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Force Motors Trax Cruiser",
      image: "/Force Motors Trax Cruiser.webp",
      engine: "2.2L Turbo Diesel",
      fuel: "Diesel",
      speed: "160 km/h",
      price: "₹15 Lakh"
    }
  ],
  gelly: [
    {
      name: "Gelly Emgrand",
      image: "/Gelly Emgrand.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "180 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "Gelly Atlas",
      image: "/Gelly Atlas.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "Gelly Coolray",
      image: "/Gelly Coolray.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Gelly Icon",
      image: "/Gelly Icon.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "180 km/h",
      price: "₹22 Lakh"
    }
  ],
  chery: [
    {
      name: "Chery Tiggo 7 Pro",
      image: "/Chery Tiggo 7 Pro.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Chery Arrizo 5",
      image: "/Chery Arrizo 5.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "180 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "Chery Tiggo 8 Pro",
      image: "/Chery Tiggo 8 Pro.webp",
      engine: "1.6L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "200 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "Chery eQ1",
      image: "/Chery eQ1.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "150 km/h",
      price: "₹15 Lakh"
    }
  ],
  rimac: [
    {
      name: "Rimac C_Two",
      image: "/Rimac C_Two.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "415 km/h",
      price: "₹200 Crore"
    },
    {
      name: "Rimac Concept One",
      image: "/Rimac Concept One.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "355 km/h",
      price: "₹150 Crore"
    },
    {
      name: "Rimac Nevera",
      image: "/Rimac Nevera.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "412 km/h",
      price: "₹250 Crore"
    },
    {
      name: "Rimac Concept S",
      image: "/Rimac Concept S.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "300 km/h",
      price: "₹100 Crore"
    }
  ],
  mg: [
    {
      name: "MG Majestor",
      image: "/MG Majestor.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹45 Lakh"      
    },
    {
      name: "MG Hector",
      image: "/MG Hector.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "MG ZS EV",
      image: "/MG ZS EV.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "140 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "MG Gloster",
      image: "/MG Gloster.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹35 Lakh"
    },
    {
      name: "MG Astor",
      image: "/MG Astor.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "180 km/h",
      price: "₹18 Lakh"
    }
  ],
  smart: [
    {
      name: "Smart EQ ForTwo",
      image: "/Smart EQ ForTwo.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "130 km/h",
      price: "₹15 Lakh"
    },
    {
      name: "Smart EQ ForFour",
      image: "/Smart EQ ForFour.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "130 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "Smart EQ Fortwo Cabrio",
      image: "/Smart EQ Fortwo Cabrio.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "130 km/h",
      price: "₹18 Lakh"
    },
    {
      name: "Smart EQ ForFour Cabrio",
      image: "/Smart EQ ForFour Cabrio.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "130 km/h",
      price: "₹22 Lakh"
    }
  ],
  opel: [
    {
      name: "Opel Astra",
      image: "/Opel Astra.webp",
      engine: "1.4L Turbo Inline-4",  
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Opel Corsa",
      image: "/Opel Corsa.webp",
      engine: "1.2L Turbo Inline-3",
      fuel: "Petrol / Hybrid",
      speed: "180 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "Opel Grandland X",
      image: "/Opel Grandland X.webp",
      engine: "1.6L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "Opel Crossland X",
      image: "/Opel Crossland X.webp",
      engine: "1.2L Turbo Inline-3",
      fuel: "Petrol / Hybrid",
      speed: "180 km/h",
      price: "₹20 Lakh"
    }
  ],
  maybach: [
    {
      name: "Maybach S-Class",
      image: "/Maybach S-Class.webp",
      engine: "6.0L V12",
      fuel: "Petrol",
      speed: "250 km/h",
      price: "₹1.5 Crore"
    },
    {
      name: "Maybach GLS",
      image: "/Maybach GLS.webp",
      engine: "4.0L V8",
      fuel: "Petrol",
      speed: "240 km/h",
      price: "₹1.2 Crore"
    },

    {
      name: "Maybach G-Class",
      image: "/Maybach G-Class.webp",
      engine: "4.0L V8",
      fuel: "Petrol", 
      speed: "220 km/h",
      price: "₹1 Crore"
    },
    {
      name: "Maybach S-Class Cabriolet",
      image: "/Maybach S-Class Cabriolet.webp",
      engine: "6.0L V12",
      fuel: "Petrol",
      speed: "250 km/h",
      price: "₹1.8 Crore"
    }
  ],
  hindustanmotors: [
    {
      name: "Hindustan Motors Ambassador",
      image: "/Hindustan Motors Ambassador.webp",
      engine: "2.0L Inline-4",
      fuel: "Petrol",
      speed: "140 km/h",
      price: "₹15 Lakh"
    },
    {
      name: "Hindustan Motors Contessa",
      image: "/Hindustan Motors Contessa.webp",
      engine: "1.6L Inline-4",
      fuel: "Petrol",
      speed: "130 km/h",
      price: "₹12 Lakh"
    },
    {
      name: "Hindustan Motors Landmaster",
      image: "/Hindustan Motors Landmaster.webp",
      engine: "2.0L Inline-4",
      fuel: "Petrol",
      speed: "140 km/h",
      price: "₹18 Lakh"
    },
    {
      name: "Hindustan Motors Minerva",
      image: "/Hindustan Motors Minerva.webp",
      engine: "1.5L Inline-4",
      fuel: "Petrol",
      speed: "130 km/h",
      price: "₹10 Lakh"
    }
  ],
  ashokleyland: [
    {
      name: "Ashok Leyland Dost",
      image: "/Ashok Leyland Dost.webp",
      engine: "2.0L Turbo Diesel",
      fuel: "Diesel",
      speed: "160 km/h",
      price: "₹10 Lakh"
    },
    {
      name: "Ashok Leyland Ecomet",
      image: "/Ashok Leyland Ecomet.webp",
      engine: "3.0L Turbo Diesel",
      fuel: "Diesel",
      speed: "150 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "Ashok Leyland Partner",
      image: "/Ashok Leyland Partner.webp",
      engine: "2.0L Turbo Diesel",
      fuel: "Diesel",
      speed: "160 km/h",
      price: "₹15 Lakh"
    },
    {
      name: "Ashok Leyland Stile",
      image: "/Ashok Leyland Stile.webp",
      engine: "1.5L Turbo Diesel",
      fuel: "Diesel",
      speed: "170 km/h",
      price: "₹12 Lakh"
    }
  ],
  polestar: [
    {
      name: "Polestar 2",
      image: "/Polestar 2.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "205 km/h",
      price: "₹40 Lakh"
    },
    {
      name: "Polestar 1",
      image: "/Polestar 1.webp",
      engine: "Electric Motor + Petrol Engine",
      fuel: "Hybrid",
      speed: "250 km/h",
      price: "₹1 Crore"
    },
    {
      name: "Polestar 3",
      image: "/Polestar 3.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "200 km/h",
      price: "₹50 Lakh"
    },
    {
      name: "Polestar 4",
      image: "/Polestar 4.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "190 km/h",
      price: "₹45 Lakh"
    }
  ],
  rivian: [
    {
      name: "Rivian R1T",
      image: "/Rivian R1T.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "200 km/h",
      price: "₹50 Lakh"
    },
    {
      name: "Rivian R1S",
      image: "/Rivian R1S.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "190 km/h",
      price: "₹55 Lakh"
    },
    {
      name: "Rivian R2T",
      image: "/Rivian R2T.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "180 km/h",
      price: "₹45 Lakh"
    },
    {
      name: "Rivian R2S",
      image: "/Rivian R2S.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "170 km/h",
      price: "₹40 Lakh"
    }
  ],
  lucidmotors: [
    {
      name: "Lucid Air",
      image: "/Lucid Air.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "200 km/h",
      price: "₹50 Lakh"
    },
    {
      name: "Lucid Gravity",
      image: "/Lucid Gravity.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "190 km/h",
      price: "₹45 Lakh"
    },
    {
      name: "Lucid Air Dream Edition",
      image: "/Lucid Air Dream Edition.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "200 km/h",
      price: "₹1 Crore"
    },
    {
      name: "Lucid Air Touring",
      image: "/Lucid Air Touring.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "190 km/h",
      price: "₹60 Lakh"
    }
  ],
  fisker: [
    {
      name: "Fisker Ocean",
      image: "/Fisker Ocean.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "180 km/h",
      price: "₹40 Lakh"
    },
    {
      name: "Fisker Karma",
      image: "/Fisker Karma.webp",
      engine: "Electric Motor + Petrol Engine",
      fuel: "Hybrid",
      speed: "200 km/h",
      price: "₹55 Lakh"
    },
    {
      name: "Fisker EMotion",
      image: "/Fisker EMotion.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "190 km/h",
      price: "₹60 Lakh"
    },
    {
      name: "Fisker PEAR",
      image: "/Fisker PEAR.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "170 km/h",
      price: "₹30 Lakh"
    }
  ],
  saab: [
    {
      name: "Saab 9-3",
      image: "/Saab 9-3.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "210 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Saab 9-5",
      image: "/Saab 9-5.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "220 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "Saab 9-4X",
      image: "/Saab 9-4X.webp",   
      engine: "2.8L Turbo V6",
      fuel: "Petrol / Hybrid",
      speed: "200 km/h",
      price: "₹35 Lakh"
    },
    {
      name: "Saab 9-7X",
      image: "/Saab 9-7X.webp",
      engine: "4.2L V8",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹40 Lakh"
    }
  ],
  scion: [
    {
      name: "Scion tC",
      image: "/Scion tC.webp",
      engine: "2.5L Inline-4",
      fuel: "Petrol",
      speed: "190 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "Scion xB",
      image: "/Scion xB.webp",
      engine: "2.4L Inline-4",
      fuel: "Petrol",
      speed: "180 km/h",
      price: "₹18 Lakh"
    },
    {
      name: "Scion FR-S",
      image: "/Scion FR-S.webp",
      engine: "2.0L Flat-4",
      fuel: "Petrol",
      speed: "230 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Scion iA",
      image: "/Scion iA.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol",
      speed: "170 km/h",
      price: "₹15 Lakh"
    }
  ],
  hummer: [
    {
      name: "Hummer H2",
      image: "/Hummer H2.webp",
      engine: "6.0L V8",
      fuel: "Petrol",
      speed: "170 km/h",
      price: "₹50 Lakh"
    },
    {
      name: "Hummer H3",
      image: "/Hummer H3.webp",
      engine: "3.7L Inline-5",
      fuel: "Petrol",
      speed: "160 km/h",
      price: "₹40 Lakh"
    },
    {
      name: "Hummer H1",
      image: "/Hummer H1.webp",
      engine: "6.5L Turbo Diesel V8",
      fuel: "Diesel",
      speed: "150 km/h",
      price: "₹60 Lakh"
    },
    {
      name: "Hummer EV",
      image: "/Hummer EV.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "200 km/h",
      price: "₹1 Crore"
    }
  ],
  gac: [
    {
      name: "GAC Trumpchi GS4",
      image: "/GAC Trumpchi GS4.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "GAC Trumpchi GS8",
      image: "/GAC Trumpchi GS8.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "200 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "GAC Trumpchi GA4",
      image: "/GAC Trumpchi GA4.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "180 km/h",
      price: "₹15 Lakh"
    },
    {
      name: "GAC Trumpchi GS5",
      image: "/GAC Trumpchi GS5.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹25 Lakh"
    }
  ],
  oldsmobile: [
    {
      name: "Oldsmobile Cutlass",
      image: "/Oldsmobile Cutlass.webp",
      engine: "3.8L V6",
      fuel: "Petrol",
      speed: "190 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "Oldsmobile 88",
      image: "/Oldsmobile 88.webp",
      engine: "3.8L V6",
      fuel: "Petrol",
      speed: "200 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Oldsmobile Alero",
      image: "/Oldsmobile Alero.webp",
      engine: "2.4L Inline-4",
      fuel: "Petrol",
      speed: "180 km/h",
      price: "₹15 Lakh"
    },
    {
      name: "Oldsmobile Aurora",
      image: "/Oldsmobile Aurora.webp",
      engine: "3.5L V6",
      fuel: "Petrol",
      speed: "210 km/h",
      price: "₹30 Lakh"
    }
  ],
  pontiac: [
    {
      name: "Pontiac GTO",
      image: "/Pontiac GTO.webp",
      engine: "6.0L V8",
      fuel: "Petrol",
      speed: "250 km/h",
      price: "₹40 Lakh"
    },
    {
      name: "Pontiac Firebird",
      image: "/Pontiac Firebird.webp",
      engine: "5.7L V8",
      fuel: "Petrol",
      speed: "240 km/h",
      price: "₹35 Lakh"
    },
    {
      name: "Pontiac Grand Prix",
      image: "/Pontiac Grand Prix.webp",
      engine: "3.8L V6",
      fuel: "Petrol",
      speed: "200 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Pontiac Solstice",
      image: "/Pontiac Solstice.webp",
      engine: "2.4L Inline-4",
      fuel: "Petrol",
      speed: "190 km/h",
      price: "₹20 Lakh"
    }
  ],
  saturn: [
    {
      name: "Saturn Ion",
      image: "/Saturn Ion.webp",
      engine: "2.2L Inline-4",
      fuel: "Petrol",
      speed: "180 km/h",
      price: "₹15 Lakh"
    },
    {
      name: "Saturn Vue",
      image: "/Saturn Vue.webp",
      engine: "2.2L Inline-4",
      fuel: "Petrol",
      speed: "190 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "Saturn Skyline",
      image: "/Saturn Skyline.webp",
      engine: "2.4L Inline-4",
      fuel: "Petrol",
      speed: "195 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Saturn Aura",
      image: "/Saturn Aura.webp",
      engine: "3.5L V6",
      fuel: "Petrol",
      speed: "200 km/h",
      price: "₹30 Lakh"
    }
  ],
  mercury: [
    {
      name: "Mercury Grand Marquis",
      image: "/Mercury Grand Marquis.webp",
      engine: "4.6L V8",
      fuel: "Petrol",
      speed: "190 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Mercury Cougar",
      image: "/Mercury Cougar.webp",
      engine: "2.5L Turbo Inline-4",
      fuel: "Petrol",
      speed: "200 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "Mercury Milan",
      image: "/Mercury Milan.webp",
      engine: "2.5L Turbo Inline-4",
      fuel: "Petrol",
      speed: "190 km/h",
      price: "₹15 Lakh"
    },
    {
      name: "Mercury Mountaineer",
      image: "/Mercury Mountaineer.webp",
      engine: "4.0L V6",
      fuel: "Petrol",
      speed: "180 km/h",
      price: "₹30 Lakh"
    }
  ],
  plymouth: [
    {
      name: "Plymouth Barracuda",
      image: "/Plymouth Barracuda.webp",
      engine: "5.7L V8",
      fuel: "Petrol",
      speed: "240 km/h",
      price: "₹35 Lakh"
    },
    {
      name: "Plymouth Road Runner",
      image: "/Plymouth Road Runner.webp",
      engine: "6.0L V8",
      fuel: "Petrol",
      speed: "250 km/h",
      price: "₹40 Lakh"
    },
    {
      name: "Plymouth Duster",
      image: "/Plymouth Duster.webp",
      engine: "3.7L V6",
      fuel: "Petrol",
      speed: "200 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "Plymouth Fury",
      image: "/Plymouth Fury.webp",
      engine: "3.8L V6",
      fuel: "Petrol",
      speed: "190 km/h",
      price: "₹25 Lakh"
    }
  ],
  hino: [
    {
      name: "Hino 300 Series",
      image: "/Hino 300 Series.webp",
      engine: "4.0L Turbo Diesel",
      fuel: "Diesel",
      speed: "120 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "Hino 500 Series",
      image: "/Hino 500 Series.webp",
      engine: "6.0L Turbo Diesel",
      fuel: "Diesel",
      speed: "110 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "Hino 700 Series",
      image: "/Hino 700 Series.webp",
      engine: "9.0L Turbo Diesel",
      fuel: "Diesel",
      speed: "100 km/h",
      price: "₹50 Lakh"
    },
    {
      name: "Hino Dutro",
      image: "/Hino Dutro.webp",
      engine: "4.0L Turbo Diesel",
      fuel: "Diesel",
      speed: "120 km/h",
      price: "₹25 Lakh"
    }
  ],
  isuzu: [
    {
      name: "Isuzu D-Max",
      image: "/Isuzu D-Max.webp",
      engine: "1.9L Turbo Diesel",
      fuel: "Diesel",
      speed: "170 km/h",
      price: "₹15 Lakh"
    },
    {
      name: "Isuzu MU-X",
      image: "/Isuzu MU-X.webp",
      engine: "3.0L Turbo Diesel",
      fuel: "Diesel",
      speed: "180 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Isuzu MUX",
      image: "/Isuzu MUX.webp",
      engine: "3.0L Turbo Diesel",
      fuel: "Diesel",
      speed: "180 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Isuzu V-Cross",
      image: "/Isuzu V-Cross.webp",
      engine: "1.9L Turbo Diesel",
      fuel: "Diesel",
      speed: "170 km/h",
      price: "₹20 Lakh"
    }
  ],
  datsun: [
    {
      name: "Datsun RediGO",
      image: "/Datsun RediGO.webp",
      engine: "1.0L Turbo Petrol",
      fuel: "Petrol",
      speed: "140 km/h",
      price: "₹5 Lakh"
    },
    {
      name: "Datsun GO",
      image: "/Datsun GO.webp",
      engine: "1.2L Petrol",
      fuel: "Petrol",
      speed: "150 km/h",
      price: "₹6 Lakh"
    },
    {
      name: "Datsun Terao",
      image: "/Datsun Terao.webp",
      engine: "1.2L Petrol",
      fuel: "Petrol",
      speed: "150 km/h",
      price: "₹7 Lakh"
    },
    {
      name: "Datsun Sunny B210",
      image: "/Datsun Sunny B210.webp",
      engine: "1.2L Petrol",
      fuel: "Petrol",
      speed: "140 km/h",
      price: "₹8 Lakh"
    }
  ],
  lada: [
    {
      name: "Lada Niva",
      image: "/Lada Niva.webp",
      engine: "1.7L Inline-4",
      fuel: "Petrol",
      speed: "150 km/h",
      price: "₹10 Lakh"
    },
    {
      name: "Lada Granta",
      image: "/Lada Granta.webp",
      engine: "1.6L Inline-4",
      fuel: "Petrol",
      speed: "160 km/h",
      price: "₹8 Lakh"
    },
    {
      name: "Lada Vesta",
      image: "/Lada Vesta.webp",
      engine: "1.6L Inline-4",
      fuel: "Petrol",
      speed: "170 km/h",
      price: "₹9 Lakh"
    },
    {
      name: "Lada Largus",
      image: "/Lada Largus.webp",
      engine: "1.6L Inline-4",
      fuel: "Petrol",
      speed: "160 km/h",
      price: "₹7 Lakh"
    }
  ],
  zotye: [
    {
      name: "Zotye T600",
      image: "/Zotye T600.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "190 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "Zotye T700",
      image: "/Zotye T700.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "200 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "Zotye T300",
      image: "/Zotye T300.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol / Hybrid",
      speed: "180 km/h",
      price: "₹15 Lakh"
    },
    {
      name: "Zotye E200",
      image: "/Zotye E200.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "150 km/h",
      price: "₹10 Lakh"
    }
  ],
  morgan: [
    {
      name: "Morgan Plus 4",
      image: "/Morgan Plus 4.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "200 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "Morgan 3 Wheeler",
      image: "/Morgan 3 Wheeler.webp",
      engine: "2.0L V-Twin",
      fuel: "Petrol",
      speed: "180 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Morgan Plus 8",
      image: "/Morgan Plus 8.webp",
      engine: "4.8L V8",
      fuel: "Petrol",
      speed: "250 km/h",
      price: "₹50 Lakh"
    },
    {
      name: "Morgan Aero 8",
      image: "/Morgan Aero 8.webp",
      engine: "4.8L V8",
      fuel: "Petrol",
      speed: "240 km/h",
      price: "₹45 Lakh"
    } 
  ],
  tvr: [
    {
      name: "TVR Griffith",
      image: "/TVR Griffith.webp",
      engine: "5.0L V8",
      fuel: "Petrol",
      speed: "320 km/h",
      price: "₹1 Crore"
    },
    {
      name: "TVR Tuscan",
      image: "/TVR Tuscan.webp",
      engine: "4.0L V8",
      fuel: "Petrol",
      speed: "300 km/h",  
      price: "₹80 Lakh"
    },
    {
      name: "TVR Sagaris",
      image: "/TVR Sagaris.webp",
      engine: "4.0L V8",
      fuel: "Petrol",
      speed: "290 km/h",
      price: "₹70 Lakh"
    },
    {
      name: "TVR Cerbera",
      image: "/TVR Cerbera.webp",
      engine: "4.5L V8",
      fuel: "Petrol",
      speed: "310 km/h",
      price: "₹90 Lakh"
    }
  ],
  ginetta: [
    {
      name: "Ginetta G5",
      image: "/Ginetta G5.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "200 km/h",
      price: "₹15 Lakh"
    },
    {
      name: "Ginetta G4",
      image: "/Ginetta G4.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "190 km/h",
      price: "₹12 Lakh"
    },
    {
      name: "Ginetta G3",
      image: "/Ginetta G3.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "180 km/h",
      price: "₹10 Lakh"
    },
    {
      name: "Ginetta G40",
      image: "/Ginetta G40.webp", 
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "210 km/h",
      price: "₹20 Lakh"
    }
  ],
  ariel: [
    {
      name: "Ariel Atom",
      image: "/Ariel Atom.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "220 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Ariel Manta",
      image: "/Ariel Manta.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "210 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "Ariel Nomad",
      image: "/Ariel Nomad.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "200 km/h",
      price: "₹30 Lakh"
    },
    {
      name: "Ariel Hipercar",
      image: "/Ariel Hipercar.webp",
      engine: "Electric Motor",
      fuel: "Electric",
      speed: "300 km/h",
      price: "₹1 Crore"
    }
  ],
  caterham: [
    {
      name: "Caterham Seven",
      image: "/Caterham Seven.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "210 km/h",
      price: "₹20 Lakh"
    },
    {
      name: "Caterham 620R",
      image: "/Caterham 620R.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "220 km/h",
      price: "₹25 Lakh"
    },
    {
      name: "Caterham 420R",
      image: "/Caterham 420R.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "200 km/h",
      price: "₹15 Lakh"
    },
    {
      name: "Caterham 160",
      image: "/Caterham 160.webp",
      engine: "1.6L Inline-4",
      fuel: "Petrol",
      speed: "180 km/h",
      price: "₹10 Lakh"
    }
  ],
  bac: [
    {
      name: "BAC Mono",
      image: "/BAC Mono.webp",
      engine: "2.3L Turbo Inline-4",
      fuel: "Petrol",
      speed: "290 km/h",
      price: "₹1 Crore"
    },
    {
      name: "BAC Mono R",
      image: "/BAC Mono R.webp",
      engine: "2.3L Turbo Inline-4",
      fuel: "Petrol",
      speed: "300 km/h",
      price: "₹1.2 Crore"
    },
    {
      name: "BAC Mono 2.0",
      image: "/BAC Mono 2.0.webp",
      engine: "2.0L Turbo Inline-4",
      fuel: "Petrol",
      speed: "280 km/h",
      price: "₹90 Lakh"
    },
    {
      name: "BAC Mono 1.5",
      image: "/BAC Mono 1.5.webp",
      engine: "1.5L Turbo Inline-4",
      fuel: "Petrol",
      speed: "270 km/h",
      price: "₹80 Lakh"
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

  <meta name="keywords" content="CARVOCARZ, car comparison, car Brands in detail, car reviews, About cars, carvoc carz, cars, car prise in india, car price, About branded cars, new ev cars, Branded ev car price, cng cars, branded car price, about branded cars, compare branded cars, branded cars review, indian cars, type of cars, History of cars timeline, About cars in english, When Were cars popularized, facts about cars, all car price, Top 10 indian cars, paragraph about cars, most expansive cars in the world, pagani cars, pagani, volvo, cars build quality,  luxury cars, BMW, Audi, Mercedes, Tesla, SUV cars, electric cars India" />

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
  <div className="carpage-container">
    <section className="carpage-header">
      <h1 className="carpage-title">{brand.toUpperCase()} Cars</h1>
      <p className="carpage-subtitle">
        Explore luxury, performance, and innovation from {brand.toUpperCase()}
      </p>
    </section>

    <section className="carpage-layout">
      {cars.map((car, index) => (
        <div className="car-card" key={index}>
          
          <div className="car-image-box">
            <img 
              className="car-image" 
              src={car.image} 
              alt={car.name} 
            />
          </div>

          <div className="car-info">
            <h3 className="car-name">{car.name}</h3>

            <p><span>Engine:</span> {car.engine}</p>
            <p><span>Fuel:</span> {car.fuel}</p>
            <p><span>Top Speed:</span> {car.speed}</p>

            <div className="car-price">{car.price}</div>
          </div>

        </div>
      ))}
    </section>
  </div>
    </>
  );
};

export default BrandDetail;
