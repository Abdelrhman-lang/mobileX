"use client";

import { ProductContext } from "@/context/ProductContext";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useContext } from "react";

export default function Pagination({ page, limit, setPage }) {
  const { allProducts } = useContext(ProductContext);

  const totalPages = Math.ceil(allProducts.length / limit);
  const start = (page - 1) * limit + 1;
  const end = Math.min(page * limit, allProducts.length);
  return (
    <div className="mt-10 flex flex-col justify-center items-center gap-5">
      <div className="text-accent text-sm text">
        {start} - {end} products of {allProducts.length}
      </div>
      <div>
        <ul className="flex justify-center gap-3 text-gray-900">
          <li>
            <button
              onClick={() => {
                if (page > 1) {
                  setPage(page - 1);
                }
              }}
              className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180"
              aria-label="Previous page"
            >
              <ArrowBigLeft className="w-3.5 h-3.5" />
            </button>
          </li>

          <li className="text-sm/8 font-medium tracking-widest">
            {page} / {totalPages}
          </li>

          <li>
            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180"
              aria-label="Next page"
            >
              <ArrowBigRight className="w-3.5 h-3.5" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
