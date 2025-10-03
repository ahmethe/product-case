import React from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 900,  settings: { slidesToShow: 2 } },
      { breakpoint: 600,  settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div style={{ padding: "0 16px" }}>
      <Slider {...settings}>
        {products.map((p, i) => (
          <div key={i}>
            {}
            <ProductCard product={p} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductList;
