import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./Navbar";
import Home from './Home';
import Brands from './Brands';
import Inventory from './Inventory';
import Compare from './Compare';
import Reviews from './Reviews';
import Contact from './Contact';
import Footer from './Footer';
import BrandDetail from "./BrandDetail";
import BoatTail from "./BoatTail";
import PaganiZonda from "./PaganiZonda";
import LaRoseNoire from "./LaRoseNoire";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar logoSrc="/CARVOCARZ_LOGO.png" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/brand/:brand" element={<BrandDetail />} />
        <Route path="/boat-tail" element={<BoatTail />} />
        <Route path="/pagani-zonda" element={<PaganiZonda />} />
        <Route path="/la-rose-noire" element={<LaRoseNoire />} />
      </Routes>

      <Footer logoSrc="/CARVOCARZ_LOGO.png" />
    </BrowserRouter>
  );
}

export default App;
