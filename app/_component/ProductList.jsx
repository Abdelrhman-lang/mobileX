"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useContext } from "react";

import ProductCard from "./ProductCard";
import { ProductContext } from "@/context/ProductContext";
export default function ProductList() {
  const { products } = useContext(ProductContext);
  return (
    <section className="mt-8">
      <>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="swiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            960: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1250: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {products?.map((product) => {
            return (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    </section>
  );
}
