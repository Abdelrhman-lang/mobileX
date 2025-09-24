import React from "react";
import Head from "./Head";
import ProductList from "./ProductList";

export default function SaleSection() {
  return (
    <section className="px-">
      <Head title={"on sale"} />
      <ProductList />
    </section>
  );
}
