import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import ThemeToggle from "./utils/ThemeToggle";
import CategoryDropdown from "./CategoryDropdown";
import "../styles/Navbar.css";

/**
 * Navbar component with a dropdown list of navigation destinations
 * @returns (HTML) A nav element with multiple options
 */

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to={"/"}>
          <img
            className="logo-image"
            src="https://i.postimg.cc/wvWyW88S/image.png"
            alt="logo"
          />
        </Link>
      </div>

      <CategoryDropdown
        label="Shop by Category"
        align="left"
        // items={/* pass dynamic categories later */}
        // onSelect={(item) => console.log('selected', item)}
      />

      <div className="navbar-right">
        <SearchBar />

        <ThemeToggle />
        <Link to="/cart" className="shopping-cart-btn">
          Shopping Cart
        </Link>
      </div>
    </nav>
  );
}
