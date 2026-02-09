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

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop /> 
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />

        {/* Dynamic brand route */}
        <Route path="/brand/:brand" element={<BrandDetail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
