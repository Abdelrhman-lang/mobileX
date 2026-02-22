"use client";
import { useState } from "react";
import BreadCramp from "../_component/BreadCramp";
import ProductsControl from "./ProductsControl";
import ProductsDisplay from "./ProductsDisplay";
import Pagination from "./Pagination";
import SectionGap from "../_component/SectionGap";
export default function ShopPage() {
  const [activeIcon, setActiveIcon] = useState("grid3");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [page, setPage] = useState(1);
  const limit = 8;
  const gridLayouts = {
    grid3: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
    grid4: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
    gridcol: "grid grid-row gap-4",
  };
  const brands = [
    { id: 1, title: "Category", action: "all" },
    { id: 2, title: "Smart Phones", action: "smartphones" },
    { id: 3, title: "Laptops", action: "laptops" },
    { id: 4, title: "Tablets", action: "tablets" },
    { id: 5, title: "Mobile Accessories", action: "mobile-accessories" },
  ];
  return (
    <section>
      <BreadCramp />
      <div className="custom-container">
        <div className="mt-20">
          <h1 className="text-5xl heading capitalize text-center">products</h1>
          <ProductsControl
            activeIcon={activeIcon}
            setActiveIcon={setActiveIcon}
            brands={brands}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <ProductsDisplay
            gridLayout={gridLayouts[activeIcon]}
            selectedCategory={selectedCategory}
            page={page}
            limit={limit}
          />
          {selectedCategory === "all" && (
            <Pagination limit={limit} page={page} setPage={setPage} />
          )}
        </div>
        <SectionGap />
      </div>
    </section>
  );
}
