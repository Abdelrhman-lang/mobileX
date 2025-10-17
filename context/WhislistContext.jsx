"use client";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const WhislistContext = createContext();

export default function WhislistProvider({ children }) {
  const { user } = useUser();
  const [userWhislist, setUserWhislist] = useState([]);
  const [loading, setLoading] = useState(true);
  const addToWhislist = async (product) => {
    try {
      const res = await axios.post("/api/post-whislist", {
        userId: user?.id,
        externalId: product.id,
        name: product.title,
        image: product.images[0],
        price: product.price,
      });
      if (res.status === 200) {
        Swal.fire({
          title: "awooosome!",
          text: "Your Product is added successfully!",
          icon: "success",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const fetchUserWhislist = async (id) => {
    try {
      const res = await axios.get(`/api/get-whislist?userId=${id}`);
      if (res.status === 200) {
        console.log(res.data.items);
        setUserWhislist(res.data.items);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const deleteFromWishlist = async (productId) => {
    try {
      const res = await axios.delete(
        `/api/delete-from-wishlist?productId=${productId}`
      );
      if (res.status === 200) {
        setUserWhislist((prev) =>
          prev.filter((product) => product.id != productId)
        );
        fetchUserWhislist(user?.id);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <WhislistContext.Provider
      value={{
        addToWhislist,
        fetchUserWhislist,
        loading,
        userWhislist,
        deleteFromWishlist,
      }}
    >
      {children}
    </WhislistContext.Provider>
  );
}
