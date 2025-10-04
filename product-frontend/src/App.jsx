import React, {useEffect, useState} from "react";
import ProductList from "./components/ProductList";
import "./App.css";
import "./fonts.css"

function App() {
  const [products, setProducts] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minPopularity, setMinPopularity] = useState("");

  async function fetchProducts(filters = {}) {
    try {
      const params = new URLSearchParams();

      if (filters.minPrice) params.append("minPrice", filters.minPrice);
      if (filters.maxPrice) params.append("maxPrice", filters.maxPrice);
      if (filters.minPopularity) params.append("minPopularity", filters.minPopularity);

      const url = `/api/products?${params.toString()}`;

      const res = await fetch(url);
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

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleFilter = () => {
    fetchProducts({ minPrice, maxPrice, minPopularity });
  };

const handleNumericInput = (e, setter, min, max, decimalPlaces = 0) => {
  let value = e.target.value;

  if (decimalPlaces === 0) {
    if (!/^\d*$/.test(value)) return;
  } else {
    if (!/^\d*\.?\d*$/.test(value)) return;
    const parts = value.split(".");
    if (parts[1] && parts[1].length > decimalPlaces) return;
  }

  if (value === "" || (Number(value) >= min && Number(value) <= max)) {
    setter(value);
  }
};


  return (
    <div className="app">
      <h2 className="title">Product List</h2>

      <div className="filters">
        <div className="filter-item">
          <label>Min Price ($)</label>
          <input
            type="text"
            inputMode="decimal"
            value={minPrice}
            onChange={(e) => handleNumericInput(e, setMinPrice, 0, 9999, 0)}
          />
        </div>

        <div className="filter-item">
          <label>Max Price ($)</label>
          <input
            type="text"
            inputMode="decimal"
            value={maxPrice}
            onChange={(e) => handleNumericInput(e, setMaxPrice, 0, 9999, 0)}
          />
        </div>

        <div className="filter-item">
          <label>Min Popularity</label>
          <input
            type="text"
            inputMode="decimal"
            value={minPopularity}
            onChange={(e) => handleNumericInput(e, setMinPopularity, 0, 5, 1)}
          />
        </div>

        <button onClick={handleFilter} className="filter-btn">Apply Filters</button>
      </div>

      <ProductList products={products} />
    </div>
  );
}

export default App;
