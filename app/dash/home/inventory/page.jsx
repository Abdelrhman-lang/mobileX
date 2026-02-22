"use client";

import InventoryTable from "@/app/_component/InventoryTable";
import Spinner from "@/app/_component/Spinner";
import { NewProductContext } from "@/context/NewProductContext";

import { useContext, useEffect } from "react";

export default function page() {
  const { products, loading, fetchProducts } = useContext(NewProductContext);
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="xl:ml-10 p-6">
        <h1 className="font-bold text-2xl mb-2">Manage your inventory 👋</h1>
        <p className="text-gray-600 mb-8">
          Here you can update and delete your products
        </p>

        {loading ? (
          <div className="flex items-center justify-center min-h-screen">
            <Spinner />
          </div>
        ) : (
          <InventoryTable products={products} />
        )}
      </div>
    </section>
  );
}
