"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useContext, useEffect } from "react";

import ProductCard from "./ProductCard";
import { NewProductContext } from "@/context/NewProductContext";
import Spinner from "./Spinner";
export default function ProductList({ selectedCategory }) {
  const { products, fetchProducts, loading } = useContext(NewProductContext);
  useEffect(() => {
    fetchProducts();
  }, []);
  const productsToShow =
    selectedCategory === "smartphones"
      ? products.filter((p) => p.category === "smartphones")
      : selectedCategory === "laptops"
        ? products.filter((p) => p.category === "laptops")
        : products.filter((p) => p.category === "tablets");
  return (
    <section className="mt-8">
      {loading ? (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
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
            {productsToShow?.map((product) => {
              return (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      )}
    </section>
  );
}
