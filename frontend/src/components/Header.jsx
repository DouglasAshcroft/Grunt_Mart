import { NavLink } from "react-router-dom";
import "../components/utils/Dropdown_BTN.js";
import "../styles/Header.css";
import "../styles/Dropdown_BTN.css";

export default function Header() {
  return (
    <div className="Header">
      <header>
        <h1>Grunt Mart</h1>
        <div className="dropdown">
          <button onclick="dropDown()" className="dropbtn">
            Shop by category
          </button>
          <div id="myDropdown" className="dropdown-content">
            {/* <a href="#">Gunner Class</a>
            <a href="#">Infantry</a>
            <a href="#">Medic pack</a> */}
          </div>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
        <div>shopping cart</div>
      </header>
    </div>
  );
}
