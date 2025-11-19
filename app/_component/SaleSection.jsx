"use client";
import React, { useState } from "react";
import Head from "./Head";
import ProductList from "./ProductList";

export default function SaleSection() {
  const [selectedCategory, setSelectedCategory] = useState("smartphones");
  return (
    <section className="">
      <Head title={"on sale"} setSelectedCategory={setSelectedCategory} />
      <ProductList selectedCategory={selectedCategory} />
    </section>
  );
}
