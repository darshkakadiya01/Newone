import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter  } from "react-router-dom";
import Navbar from "./Navbar";
import Home from './Home';
import Brands from './Brands';
import Cars from './Cars';
import Compare from './Compare';
import Reviews from './Reviews';
import Contact from './Contact';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
