import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext.js";
import { getItemById, getCategoryById, getMftrById } from "../components/utils/utils.js"
import { toTitleCase } from "../components/utils/reactUtils.js";


export default function ItemView() {
  let { productId } = useParams();
  //let itemId = params.productId;
  let [product, setProduct] = useState(null);
  let [mftr, setMftr] = useState(null);
  let [category, setCategory] = useState(null);
  const { shoppingCart, setShoppingCart } = useContext(CartContext);

  useEffect(() => {
    console.log(productId);
    let item;
    const getDetails = async () => {
      item = await getItemById(productId);
      //console.log(item);
      setProduct(item);
    };

    getDetails();
  }, [productId]);

  useEffect(() => {
    if (!product || !product[0].product_id) return;
    console.log(product);
    const setDetails = async () => {
      const mftrData = await getMftrById(product[0].mftr);
      const categoryData = await getCategoryById(product[0].category);
      setMftr(mftrData);
      setCategory(categoryData);
    };
    setDetails();
  }, [product]);

  // const [item, setItem] = useState(item)
  if (!product || !mftr || !category) return <div>Loading...</div>;

  return (
    <>

      <h2>{toTitleCase(product[0].product_name)}</h2>
      <div className="item_image">
        <img src={product[0].picture}></img>

      </div>

      <div>
        <br />
        <span>{product[0].description}</span>
        <br />
        <span>${product[0].price}</span>
      </div>
      <div>
        <ul>
          <li>Manufacturer: {toTitleCase(mftr[0].mftr_name)}</li>
          <li>Category: {toTitleCase(category[0].category_name)}</li>
          <li>NSN: {product[0].nsn}</li>
        </ul>
      </div>

      <button onClick={() => setShoppingCart({ product })}>Add to Cart</button>
    </>
  );
}
