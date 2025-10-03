import React from "react";
import ProductList from "./components/ProductList";
import products from "./data/products.json";
import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="app">
      <h2 className="title">Product List</h2>
      <ProductList products={products} />
    </div>
  );
}

export default App;
