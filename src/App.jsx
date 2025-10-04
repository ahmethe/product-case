import React, {useEffect, useState} from "react";
import ProductList from "./components/ProductList";
import "./App.css";
import "./fonts.css"

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://localhost:7240/api/products");
        const data = await res.json();

        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Unexpected response:", data);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="app">
      <h2 className="title">Product List</h2>
      <ProductList products={products}/>
    </div>
  );
}

export default App;
