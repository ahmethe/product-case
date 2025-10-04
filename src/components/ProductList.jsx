import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import "./ProductList.css"

import ProductCard from "./ProductCard";

const ProductList = ({products}) => {
  return (
    <Swiper
      modules={[Scrollbar, Navigation]}
      spaceBetween={30}
      slidesPerView={4}
      navigation
      scrollbar={{ draggable: true, hide: false}}
      style={{paddingBottom: "40px"}}
      breakpoints={{
        1280: { slidesPerView: 4, spaceBetween: 30 },
        992:  { slidesPerView: 3, spaceBetween: 25 },
        768:  { slidesPerView: 2, spaceBetween: 20 },
        480:  { slidesPerView: 1, spaceBetween: 10 },
      }}
    >
      {products.map((p, idx) => (
        <SwiperSlide key={idx}>
          <ProductCard product={p}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductList;
