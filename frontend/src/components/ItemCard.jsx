import { useContext } from "react";
import { Link } from "react-router-dom";
import { addItemToCart } from "./utils/utils";
import { CartContext } from "../context/CartContext";
import { toTitleCase, formatCurrency } from "./utils/reactUtils";
import "../styles/itemcard.css";

export default function ItemCard({ product }) {
  const { shoppingCart, setShoppingCart } = useContext(CartContext);
  const currencyHandler = formatCurrency(`USD`);

  if (!product) return null;

  const id = product.product_id;
  const name = product.product_name ?? product.name ?? "Unnamed";
  const img = product.picture ?? "";
  const price = product.price;

  return (
    <div className="item-card item-card--holo">
      <Link to={`details/${id}`} className="item-link">
        <div className="card-media">
          {img ? (
            <img src={img} alt={name} loading="lazy" />
          ) : (
            <div className="card-media__placeholder">No image</div>
          )}
        </div>
        <h2 className="card-title">{toTitleCase(name)}</h2>
      </Link>

      <div className="card-meta">
        <span className="card-price">
          <p>{currencyHandler.format(price)}</p>
        </span>
      </div>

      <div className="card-actions">
        <button
          className="btn"
          type="button"
          onClick={() =>
            addItemToCart(product, [shoppingCart, setShoppingCart])
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
