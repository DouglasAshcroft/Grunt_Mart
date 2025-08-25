// App.jsx
import "./App.css";
import Header from "./components/Header.jsx";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import AppContext from "./AppContext";
import { CartContext } from "./context/CartContext.js";
import Home from "./pages/Home.jsx";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <CartContext.Provider value={{ shoppingCart, setShoppingCart }}>
    <>

      
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/view" element={<Viewbox />} />
        </Routes>
</>
    </CartContext.Provider>
  );
}

export default App;
