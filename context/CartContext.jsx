"use client";

import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { createContext, useState } from "react";

export const CartContext = createContext();
import React from "react";

export default function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  const addToCart = async (product, quantity) => {
    try {
      const res = await axios.post("/api/post-cart", {
        userId: user?.id,
        externalId: product.id,
        name: product.title,
        price: product.price,
        image: product.images[0],
        quantity: quantity || 1,
      });
      fetchUserCart(user?.id);
    } catch (err) {
      console.log("Error adding to cart", err);
    } finally {
      setLoading(false);
    }
  };
  const fetchUserCart = async (id) => {
    try {
      const res = await axios.get(`/api/get-cart?userId=${id}`);
      if (res.status === 200) {
        setCart(res.data.items);
      }
    } catch (err) {
      console.log("Error fetching cart data", err);
    } finally {
      setLoading(false);
    }
  };
  const deleteFromCart = async (id, userId) => {
    try {
      const res = await axios.delete(`/api/delete-from-cart?productId=${id}`);
      if (res.status === 200) {
        setCart((prev) => prev.filter((product) => product.id != id));
        fetchUserCart(userId);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const clearCart = async (userId) => {
    try {
      const res = await axios.delete(`/api/clear-cart?userId=${userId}`);
      if (res.status === 200) {
        setCart([]);
        fetchUserCart(userId);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const totalPrice = () => {
    return cart.reduce(
      (acc, item) => acc + parseFloat(item.price) * item.quantity,
      0
    );
  };
  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cart,
        fetchUserCart,
        loading,
        deleteFromCart,
        clearCart,
        totalPrice,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
