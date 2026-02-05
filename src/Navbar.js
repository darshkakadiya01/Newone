import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // close menu after clicking a link
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="carvo-navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <div className="logo">
          <span>CAR</span>VO
        </div>

        {/* MENU ICON */}
        <div
          className={`menu-icon ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* NAV LINKS */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/brands" onClick={closeMenu}>Brands</Link>
          </li>
          <li>
            <Link to="/cars" onClick={closeMenu}>Cars</Link>
          </li>
          <li>
            <Link to="/compare" onClick={closeMenu}>Compare</Link>
          </li>
          <li>
            <Link to="/reviews" onClick={closeMenu}>Reviews</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-btn" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
