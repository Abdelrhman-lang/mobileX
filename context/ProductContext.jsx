"use client";

import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://dummyjson.com/products?limit=8&skip=95"
        );
        setProducts(res.data.products);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}
