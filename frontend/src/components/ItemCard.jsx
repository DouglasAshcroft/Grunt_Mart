import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ItemCard() {
  return (
    <div className="item-card">
      <Link to="details" />
      <div>image</div>
      <h2>item name</h2>
      <p>Description</p>
      <span>
        <p>cost</p>
        <button>Add to cart</button>
      </span>
    </div>
  );
}
