// src/components/layout/AppHeader.jsx
import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./AppHeader.css";

export default function AppHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle search submit
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/menu?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
      setIsOpen(false);
    }
  };

  return (
    <header className={`app-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        {/* Logo */}
        <Link to="/" className="logo text-decoration-none fw-bold fs-4 text-dark">
          🍴 Fresh Fork
        </Link>

        {/* Hamburger (mobile) */}
        <button
          className="hamburger-btn"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
        </button>

        {/* Nav Links + Search + Auth */}
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          {/* Navigation */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-decoration-none ${isActive ? "text-primary" : "text-dark"}`
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `text-decoration-none ${isActive ? "text-primary" : "text-dark"}`
            }
            onClick={() => setIsOpen(false)}
          >
            Menu
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `text-decoration-none ${isActive ? "text-primary" : "text-dark"}`
            }
            onClick={() => setIsOpen(false)}
          >
            Cart
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-decoration-none ${isActive ? "text-primary" : "text-dark"}`
            }
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-decoration-none ${isActive ? "text-primary" : "text-dark"}`
            }
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>

          {/* Search */}
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>

          {/* Auth Buttons */}
          <div className="profile-button-wrapper">
            <Link to="/signin" className="btn btn-outline-primary btn-sm">
              Sign In
            </Link>
            <Link to="/signup" className="btn btn-primary btn-sm">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
