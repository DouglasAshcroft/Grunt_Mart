// App.jsx
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "./context/CartContext.js";
import Home from "./pages/Home.jsx";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <CartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/view" element={<Viewbox />} /> */}
        </Routes>
      </>
    </CartContext.Provider>
  );
}

export default App;
