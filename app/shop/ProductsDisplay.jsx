"use client";

import { ProductContext } from "@/context/ProductContext";
import { useContext } from "react";
import ProductCard from "../_component/ProductCard";
import Spinner from "../_component/Spinner";

export default function ProductsDisplay({
  gridLayout,
  selectedCategory,
  page,
  limit,
}) {
  const { loading, allProducts } = useContext(ProductContext);

  // selected Category from select list
  const selectedProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  // pagination
  const start = (page - 1) * limit;
  const end = start + limit;
  const productsToShow =
    selectedCategory === "all"
      ? selectedProducts.slice(start, end)
      : selectedProducts;
  return (
    <main className="mt-10">
      {loading ? (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className={gridLayout}>
          {productsToShow.map((product) => {
            return (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
