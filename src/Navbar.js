import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        {/* LOGO */}
        <div className="navbar-logo">
          {/* Logo from public folder */}
          <img src="/CARVOCARZ_LOGO.png" alt="Car Logo" className="logo-image" />
        </div>

        {/* HAMBURGER MENU */}
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* LINKS */}
        <ul className={`navbar-links ${open ? "show" : ""}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/inventory" onClick={closeMenu}>Inventory</Link></li>
          <li><Link to="/brands" onClick={closeMenu}>Brands</Link></li>
          <li><Link to="/compare" onClick={closeMenu}>Compare</Link></li>
          <li><Link to="/reviews" onClick={closeMenu}>Reviews</Link></li>
          <li>
            <Link to="/contact" className="contact-btn" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
