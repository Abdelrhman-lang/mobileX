"use client";

import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const OrderContext = createContext();
import React from "react";
import Swal from "sweetalert2";
import { CartContext } from "./CartContext";

export default function OrderProvider({ children }) {
  const { user } = useUser();
  const { fetchUserCart } = useContext(CartContext);
  const [orders, setorders] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const placeOrder = async () => {
    try {
      const res = await axios.post("/api/place-order", {
        userId: user?.id,
        userEmail: user?.primaryEmailAddress?.emailAddress,
      });
      if (res.status === 200) {
        Swal.fire({
          title: "Thanks to choose us!",
          text: "Your Order is Created successfully!",
          icon: "success",
        });
        fetchUserCart(user?.id);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUserOrders = async (userId) => {
    try {
      const res = await axios.get(`/api/get-order?userId=${userId}`);
      if (res.status === 200) {
        setorders(res.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserOrderDetails = async (orderId) => {
    try {
      const res = await axios.get(`/api/get-order-details?orderId=${orderId}`);
      if (res.status === 200) {
        setOrderDetails(res.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const sendEmail = async () => {
    try {
      const res = await axios.post("/api/send-email", {
        userId: user?.id,
        userEmail: user?.primaryEmailAddress?.emailAddress,
      });
      if (res.data.error) {
        console.error("❌ Email not sent:", res.data.error);
      } else {
        console.log("✅ Email sent successfully:", res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <OrderContext.Provider
      value={{
        placeOrder,
        fetchUserOrders,
        orders,
        fetchUserOrderDetails,
        orderDetails,
        loading,
        sendEmail,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
