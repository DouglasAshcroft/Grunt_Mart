import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext.js";
import { getCategoryById, getMftrById } from "../utils/utils.js"

export default function ItemView({ item }) {
  const { shoppingCart, setShoppingCart } = useContext(CartContext);
  // const [item, setItem] = useState(item)
  const mftr = getMftrById(item.mftr);
  const category = getCategoryById(item.category);

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
          <li>Manufacturer: {mftr}</li>
          <li>Category: {category}</li>
          <li>NSN: {item.nsn}</li>
        </ul>
      </div>

      <button onClick={() => (setShoppingCart({ item }))}>Add to Cart</button>
    </>
  )
}