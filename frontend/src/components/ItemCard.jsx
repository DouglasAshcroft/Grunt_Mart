import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/itemcard.css";
import { addItemToCart } from "./utils/utils";
import { CartContext } from "../context/CartContext";
import { toTitleCase, formatCurrency } from "./utils/reactUtils";


export default function ItemCard({ product }) {
  const { shoppingCart, setShoppingCart } = useContext(CartContext);
  const currencyHandler = formatCurrency(`USD`)

  if (!product) return null;
  return (
    <div className="item-card">
      <Link to={`details/${product.product_id}`} />
      <h2>{toTitleCase(product.product_name)}</h2>
      <div>
        {product.picture ? (
          <img
            className="picture-resize"
            src={product.picture}
            alt={product.product_name}
          />
        ) : (
          "image"
        )}
      </div>

      <span>
        <p>{currencyHandler.format(product.price)}</p>
        <button onClick={()=>addItemToCart(product,[shoppingCart,setShoppingCart])}>Add to cart</button>
      </span>
    </div>
  );
}
