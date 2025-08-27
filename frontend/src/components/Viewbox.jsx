import ItemCard from "./ItemCard";

export default function Viewbox({ products = [] }) {
  return (
    <section className="itemcard-row">
      {products.map((product) =>
        product && product.product_id ? (
          <ItemCard key={product.product_id} product={product} />
        ) : null
      )}
    </section>
  );
}
