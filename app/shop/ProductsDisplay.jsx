"use client";
import { useContext } from "react";
import ProductCard from "../_component/ProductCard";
import Spinner from "../_component/Spinner";
import { NewProductContext } from "@/context/NewProductContext";

export default function ProductsDisplay({
  gridLayout,
  selectedCategory,
  page,
  limit,
}) {
  const { loading, products } = useContext(NewProductContext);

  // selected Category from select list
  const selectedProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

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
