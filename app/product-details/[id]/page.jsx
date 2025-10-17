"use client";

import BreadCramp from "@/app/_component/BreadCramp";
import { ProductContext } from "@/context/ProductContext";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import ProductDetailsImg from "./ProductDetailsImg";
import ProductDetailsInfo from "./ProductDetailsInfo";
import SectionGap from "@/app/_component/SectionGap";
import ProductList from "@/app/_component/ProductList";

export default function ProductDetails() {
  const { id } = useParams();
  const { fetchSingleProduct, productDetails } = useContext(ProductContext);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    fetchSingleProduct(id);
  }, []);
  return (
    <section>
      <BreadCramp />
      <div className="custom-container">
        <main className="mt-20 pb-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            <ProductDetailsImg product={productDetails} />
            <ProductDetailsInfo
              productDetails={productDetails}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          </div>
        </main>
        <SectionGap />
        <h1 className="heading text-3xl text-center font-bold px-5 md:px-0">
          Product recommendations
        </h1>
        <ProductList />
        <SectionGap />
      </div>
    </section>
  );
}
