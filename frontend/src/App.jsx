// App.jsx
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { SearchProvider } from "./context/SearchContext";
import { CartContext } from "./context/CartContext.js";
import ItemView from "./pages/ItemView.jsx";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ShoppingCart from "./components/ShoppingCart.jsx";
import Viewbox from "./components/Viewbox.jsx";
import { stateMonitor } from "./components/utils/reactUtils.js";
import {
  saveObjToStorage,
  loadObjFromStorage,
} from "./components/utils/utils.js";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  stateMonitor(shoppingCart, "App Shopping Cart");

  useEffect(() => {
    if (loadObjFromStorage("browserShoppingCart")) {
      setShoppingCart(loadObjFromStorage("browserShoppingCart"));
    }
  }, []);

  useEffect(() => {
    if (shoppingCart.length > 0) {
      saveObjToStorage("browserShoppingCart", shoppingCart);
    }
  }, [shoppingCart]);

  return (
    <CartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      <>
        <SearchProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/details/:productId" element={<ItemView />} />
            <Route path="/view" element={<Viewbox />} />
          </Routes>
          <About />
        </SearchProvider>
      </>
    </CartContext.Provider>
  );
}

export default App;
