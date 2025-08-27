import ItemCard from "./ItemCard";
import { useLocation } from "react-router-dom";

export default function Viewbox({ products: propProducts = [] }) {
  const location = useLocation();
  const stateProducts = location.state?.products || [];

  const products = stateProducts.length > 0 ? stateProducts : propProducts;
  return (
    <section className="gm-grid">
      {products.map((product) =>
        product && product.product_id ? (
          <ItemCard key={product.product_id} product={product} />
        ) : null
      )}
    </section>
  );
}
