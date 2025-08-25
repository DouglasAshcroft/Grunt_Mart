import React from "react";
import Navbar from "../components/Navbar";
import Viewbox from "../components/Viewbox";
import Carousel from "../components/Carousel";
import About from "../components/About";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Carousel />
      <Viewbox />
      <About />
    </main>
  );
}
