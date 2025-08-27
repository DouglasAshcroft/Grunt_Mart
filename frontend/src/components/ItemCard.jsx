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

  const id = product.product_id;
  const name = product.product_name ?? product.name ?? "Unnamed";
  const img = product.picture ?? "";
  const price = product.price;

  return (
    <div className="item-card">
      <Link to={`details/${id}`} className="item-link">
        <div className="card-media">
          {img ? (
            <img src={img} alt={name} loading="lazy" />
          ) : (
            <div className="card-media__placeholder">No image</div>
          )}
        </div>
        <h2 className="card-title">{name}</h2>
      </Link>

      {/* Price + button (not part of the link) */}
      <div className="card-meta">
        {price && (
          <span className="card-price">${Number(price).toFixed(2)}</span>
        )}
      </div>

      <div className="card-actions">
        <button className="btn" type="button">
          Add to cart
        </button>
      </div>

    </div>
  );
}
