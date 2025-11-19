"use client";

import GeneralInfo from "@/app/_component/GeneralInfo";
import StockLevel from "@/app/_component/StockLevel";
import StockPercentage from "@/app/_component/StockPercentage";
import { NewProductContext } from "@/context/NewProductContext";
import { useContext, useEffect, useMemo } from "react";

export default function page() {
  const {
    products,
    loading,
    totalPrice,
    totalLowStockProducts,
    totalHighStockProducts,
    totalOutOfStockProducts,
    fetchProducts,
    fetchRecentProducts,
    recentProducts,
  } = useContext(NewProductContext);
  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {
    fetchRecentProducts();
  }, []);
  const hightStockProductsPercentage = useMemo(() => {
    if (!products) return 0;
    return Math.round((totalHighStockProducts / products?.length) * 100);
  }, [totalHighStockProducts, products]);
  const lowStockProductsPercentage = useMemo(() => {
    if (!products) return 0;
    return Math.round((totalLowStockProducts / products?.length) * 100);
  }, [totalLowStockProducts, products]);
  const outOfStockProductsPercentage = useMemo(() => {
    if (!products) return 0;
    return Math.round((totalOutOfStockProducts / products?.length) * 100);
  }, [totalOutOfStockProducts, products]);
  return (
    <section className="ml-10 p-6">
      <div className="grid grid-cols-1 mb-8">
        <GeneralInfo
          totalLowStockProducts={totalLowStockProducts}
          totalHighStockProducts={totalHighStockProducts}
          totalOutOfStock={totalOutOfStockProducts}
          totalPrice={totalPrice}
          totalProducts={products?.length}
          loading={loading}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <StockLevel recentProducts={recentProducts} loading={loading} />
        <StockPercentage
          hightStockProductsPercentage={hightStockProductsPercentage}
          lowStockProductsPercentage={lowStockProductsPercentage}
          outOfStockProductsPercentage={outOfStockProductsPercentage}
          totalHighStockProducts={totalHighStockProducts}
          totalLowStockProducts={totalLowStockProducts}
          totalOutOfStockProducts={totalOutOfStockProducts}
          loading={loading}
        />
      </div>
    </section>
  );
}
