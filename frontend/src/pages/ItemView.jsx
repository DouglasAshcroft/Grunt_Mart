import React, { useEffect, useState, useContext, useParams } from "react";
import { CartContext } from "../context/CartContext.js";
import { getItemById, getCategoryById, getMftrById } from "../utils/utils.js"

export default function ItemView() {
  const itemId = useParams()
  const [product, setProduct] = useState();
  const { shoppingCart, setShoppingCart } = useContext(CartContext);

  useEffect(() => {
    const item = getItemById(itemId);
    setProduct(item);
  }, [])

  // const [item, setItem] = useState(item)
  const mftr = getMftrById(product.mftr);
  const category = getCategoryById(product.category);

  return (
    <>
      <h2>{product.product_name}</h2>
      <div className="item_image">
        {product.picture}
      </div>

      <div>
        <span>{product.description}</span>
        <span>{product.price}</span>
      </div>
      <div>
        <ul>
          <li>Manufacturer: {mftr}</li>
          <li>Category: {category}</li>
          <li>NSN: {product.nsn}</li>
        </ul>
      </div>

      <button onClick={() => (setShoppingCart({ product }))}>Add to Cart</button>
    </>
  )
}