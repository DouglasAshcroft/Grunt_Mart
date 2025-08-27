// App.jsx
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { SearchProvider } from "./context/SearchContext";
import { CartContext } from "./context/CartContext.js";
import Home from "./pages/Home.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <CartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      <>
        <SearchProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/view" element={<Viewbox />} /> */}
          </Routes>
        </SearchProvider>
      </>
    </CartContext.Provider>
  );
}

export default App;
