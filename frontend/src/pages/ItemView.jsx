import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext.js";

export default function ItemView({ item }) {
  const { shoppingCart, setShoppingCart } = useContext(CartContext);
  // const [item, setItem] = useState(item)
  return (
    <>
      <h2>{item.product_name}</h2>
      <div className="item_image">
        {item.picture}
      </div>

      <div>
        <span>{item.description}</span>
        <span>{item.price}</span>
      </div>
      <div>
        <ul>
          <li>Manufacturer: {item.mftr}</li>
          <li>Category: {item.category}</li>
          <li>NSN: {item.nsn}</li>
        </ul>
      </div>

    </>
  )
}