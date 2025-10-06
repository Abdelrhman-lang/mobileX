"use client";

import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [phones, setPhones] = useState([]);
  const [tablets, setTablets] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [mobileAcc, setMobilAcc] = useState([]);
  const [loading, setLoading] = useState(true);
  // some products for test
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "https://dummyjson.com/products?limit=8&skip=95"
        );
        setProducts(res.data.products);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  //phones
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const [phoneRes, tabletsRes, laptopsRes, mobileAccRes] =
          await Promise.all([
            axios.get("https://dummyjson.com/products/category/smartphones"),
            axios.get("https://dummyjson.com/products/category/tablets"),
            axios.get("https://dummyjson.com/products/category/laptops"),
            axios.get(
              "https://dummyjson.com/products/category/mobile-accessories"
            ),
          ]);
        setPhones(phoneRes.data.products);
        setTablets(tabletsRes.data.products);
        setLaptops(laptopsRes.data.products);
        setMobilAcc(mobileAccRes.data.products);
        setAllProducts([
          ...phoneRes.data.products,
          ...tabletsRes.data.products,
          ...laptopsRes.data.products,
          ...mobileAccRes.data.products,
        ]);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAllProducts();
  }, []);
  return (
    <ProductContext.Provider
      value={{
        products,
        allProducts,
        loading,
        phones,
        laptops,
        tablets,
        mobileAcc,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
