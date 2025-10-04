import React, { useState } from "react";
import "./ProductCard.css";
import StarRating from "./StarRating";

const colorLabels = {
  yellow: { label: "Yellow Gold", code: "#E6CA97" },
  white:  { label: "White Gold",  code: "#D9D9D9" },
  rose:   { label: "Rose Gold",   code: "#E1A4A9" }
};

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState("yellow");
  
  return (
    <div className="product">
        <img
          src={product.images[selectedColor]}
          alt={product.name}
          className="product-img"
        />

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price} USD</p>

        <div className="product-colors">
          {Object.keys(product.images).map((c) => (
            <button
              key={c}
              className={`color-dot ${selectedColor === c ? "active" : ""}`}
              style={{ backgroundColor: colorLabels[c].code }}
              onClick={() => setSelectedColor(c)}
              aria-label={`Select ${colorLabels[c].label}`}
            />
          ))}
        </div>
        <p className="product-color-label">{colorLabels[selectedColor].label}</p>

        <div className="product-rating">
          <StarRating score={parseFloat(product.popularityScore)}/>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
