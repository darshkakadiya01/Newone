import './App.css';
import { Routes, Route, BrowserRouter  } from "react-router-dom";
import Navbar from "./Navbar";
import Home from './Home';
import Brands from './Brands';
import Inventory from './Inventory';
import Compare from './Compare';
import Reviews from './Reviews';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
