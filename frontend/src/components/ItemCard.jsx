import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/itemcard.css";

export default function ItemCard({ product }) {
  if (!product) return null;
  return (
    <div className="item-card">
      <Link to={`details/${product.product_id}`} />
      <h2>{product.product_name}</h2>
      <div>
        {product.picture ? (
          <img
            className="picture-resize"
            src={product.picture}
            alt={product.name}
          />
        ) : (
          "image"
        )}
      </div>
      <h2>{product.name}</h2>

      <span>
        <p>{product.price}</p>
        <button>Add to cart</button>
      </span>
    </div>
  );
}
