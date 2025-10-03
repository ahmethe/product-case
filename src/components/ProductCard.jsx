import React, { useState } from "react";
import "./ProductCard.css";

const colorLabels = {
  yellow: { label: "Yellow Gold", code: "#E6CA97" },
  white:  { label: "White Gold",  code: "#D9D9D9" },
  rose:   { label: "Rose Gold",   code: "#E1A4A9" }
};

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState("yellow");
  const score = (product.popularityScore * 5).toFixed(1);

  return (
    <div className="card">
      <div className="imgWrap">
        <img
          src={product.images[selectedColor]}
          alt={product.name}
          className="img"
        />
      </div>

      <div className="info">
        <h3 className="name">{product.name}</h3>
        <p className="price">$101.00 USD</p>

        <div className="colors">
          {Object.keys(product.images).map((c) => (
            <button
              key={c}
              className={`dot ${selectedColor === c ? "active" : ""}`}
              style={{ backgroundColor: colorLabels[c].code }}
              onClick={() => setSelectedColor(c)}
              aria-label={`Select ${colorLabels[c].label}`}
            />
          ))}
        </div>
        <p className="colorLabel">{colorLabels[selectedColor].label}</p>

        <div className="rating">
          <span className="stars">
            {"★".repeat(Math.round(score)) + "☆".repeat(5 - Math.round(score))}
          </span>
          <span className="score">{score}/5</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
