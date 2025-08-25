import "./App.css";
import Header from "./components/Header.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import AppContext from "./AppContext";
import { CartContext } from "./context/CartContext.js";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <CartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      <Header />

      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/view" element={<Viewbox />} />
        </Routes>
      </Router>
    </CartContext.Provider>
  );
}
export default App;
