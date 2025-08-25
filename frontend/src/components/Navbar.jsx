import React, { useState } from "react";
import ThemeToggle from "./utils/ThemeToggle";
import "../styles/Navbar.css";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Grunt Mart</div>
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          Shop by Category ▼
        </button>
        {dropdownOpen && (
          <ul className="dropdown-menu">
            <li>
              <a href="/category/clothing">Clothing</a>
            </li>
            <li>
              <a href="/category/gear">Gear</a>
            </li>
            <li>
              <a href="/category/accessories">Accessories</a>
            </li>
            <li>
              <a href="/category/clearance">Clearance</a>
            </li>
          </ul>
        )}
      </div>
      <div className="navbar-right">
        <input
          type="text"
          placeholder="Search gear..."
          className="search-input"
        />
        <ThemeToggle />
      </div>
    </nav>
  );
}
