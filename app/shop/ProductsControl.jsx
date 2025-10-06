"use client";

import { ProductContext } from "@/context/ProductContext";
import { Columns3, Columns4, LayoutList } from "lucide-react";
import { useContext } from "react";

export default function ProductsControl({
  activeIcon,
  setActiveIcon,
  brands,
  selectedCategory,
  setSelectedCategory,
}) {
  const { allProducts } = useContext(ProductContext);

  return (
    <div className="md:px-5 lg:px-0 mt-16 flex flex-col gap-5 md:gap-0 md:flex-row justify-between items-center">
      <div className="text flex items-center gap-5">
        <span className="text-sm">Sort by:</span>
        <select
          name="brand"
          className="text text-sm text-accent"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {brands.map((brand) => {
            return (
              <option key={brand.id} value={brand.action}>
                {brand.title}
              </option>
            );
          })}
        </select>
      </div>
      <div className="text-sm text-accent">{allProducts?.length} products</div>
      <div className="hidden lg:block">
        <ul className="flex items-center gap-5 text-muted">
          <li
            className={`${activeIcon === "grid3" ? "text-primary" : null} cursor-pointer`}
            onClick={() => setActiveIcon("grid3")}
          >
            <Columns3 />
          </li>
          <li
            className={`${activeIcon === "grid4" ? "text-primary" : null} cursor-pointer`}
            onClick={() => setActiveIcon("grid4")}
          >
            <Columns4 />
          </li>
          <li
            className={`${activeIcon === "gridcol" ? "text-primary" : null} cursor-pointer`}
            onClick={() => setActiveIcon("gridcol")}
          >
            <LayoutList />
          </li>
        </ul>
      </div>
    </div>
  );
}
