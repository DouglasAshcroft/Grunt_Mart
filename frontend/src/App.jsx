// App.jsx
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { SearchProvider } from "./context/SearchContext";
import { CartContext } from "./context/CartContext.js";
import ItemView from "./pages/ItemView.jsx";
import Home from "./pages/Home.jsx";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <CartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      <>
        <SearchProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:productId" element={<ItemView />} />
            {/* <Route path="/view" element={<Viewbox />} /> */}
          </Routes>
        </SearchProvider>
      </>
    </CartContext.Provider>
  );
}

export default App;
