"use client";

import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const NewProductContext = createContext();

export default function NewProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [recentProducts, setRecentProducts] = useState([]);
  const [highStockProducts, setHighStockProducts] = useState([]);
  const [lowStockProducts, setLowStockProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  const fetchProducts = async () => {
    try {
      const res = await axios.get("/api/get-products");
      if (res.status === 200) {
        setProducts(res.data);
        setHighStockProducts(res.data.filter((p) => p.quantity > p.lowStock));
        setLowStockProducts(res.data.filter((p) => p.quantity <= p.lowStock));
      }
    } catch (err) {
      console.error("Cannot Fetch Products", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchRecentProducts = async () => {
    try {
      const res = await axios.get("/api/get-recent-products");
      if (res.status === 200) {
        setRecentProducts(res.data);
      }
    } catch (err) {
      console.error("Cannot Fetching Recent Products", err);
    }
  };

  const fetchSingleProduct = async (productId) => {
    try {
      const res = await axios.get(
        `/api/get-single-product?productId=${productId}`
      );
      if (res.status === 200) {
        setProductDetails(res.data);
      }
    } catch (err) {
      console.error("Cannot Fetch Product Details", err);
    } finally {
      setLoading(false);
    }
  };
  const totalPrice = products?.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.quantity),
    0
  );

  const totalLowStockProducts = products?.filter(
    (p) => p.quantity <= p.lowStock
  ).length;
  const totalHighStockProducts = products?.filter(
    (p) => p.quantity > p.lowStock
  ).length;
  const totalOutOfStockProducts = products?.filter(
    (p) => p.quantity === 0
  ).length;

  return (
    <NewProductContext.Provider
      value={{
        products,
        loading,
        fetchProducts,
        totalPrice,
        totalLowStockProducts,
        totalHighStockProducts,
        totalOutOfStockProducts,
        fetchRecentProducts,
        recentProducts,
        highStockProducts,
        lowStockProducts,
        productDetails,
        fetchSingleProduct,
      }}
    >
      {children}
    </NewProductContext.Provider>
  );
}
