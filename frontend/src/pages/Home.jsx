import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Viewbox from "../components/Viewbox";
import Carousel from "../components/Carousel";
import About from "../components/About";
import { slides } from "../data/carouselData";
import ItemCard from "../components/ItemCard";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/items/")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  return (
    <main>
      <Navbar />
      <Carousel data={slides} />
      <Viewbox products={products} />
      <About />
    </main>
  );
}
