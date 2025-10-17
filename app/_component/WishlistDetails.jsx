"use client";
import { WhislistContext } from "@/context/WhislistContext";
import React, { useContext, useEffect } from "react";
import Spinner from "./Spinner";
import { useUser } from "@clerk/nextjs";
import { Trash } from "lucide-react";

export default function WishlistDetails() {
  const { fetchUserWhislist, loading, userWhislist, deleteFromWishlist } =
    useContext(WhislistContext);
  const { user } = useUser();
  useEffect(() => {
    if (user) {
      fetchUserWhislist(user?.id);
    }
  }, [user]);
  return (
    <section>
      {userWhislist.length === 0 ? (
        <main className="flex items-center justify-center">
          <h1 className="text-2xl md:text-5xl capitalize heading text-accent text-center">
            Your wishlist is empty, add some products
          </h1>
        </main>
      ) : (
        <main>
          {loading ? (
            <div className="flex items-center justify-center">
              <Spinner />
            </div>
          ) : (
            <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
              {userWhislist.map((wishlist) => {
                return (
                  <li
                    className="bg-white shadow-md p-5 rounded-lg cursor-pointer relative"
                    key={wishlist.id}
                  >
                    <button
                      onClick={() => deleteFromWishlist(wishlist.id)}
                      className="absolute top-2.5 right-2.5 text-accent cursor-pointer"
                    >
                      <Trash className="w-4.5 h-4.5" />
                    </button>
                    <div className="border-b pb-2.5">
                      <img src={wishlist.image} alt="order-img" />
                    </div>
                    <div className="flex items-center justify-between flex-wrap pt-5">
                      <p className="heading font-medium text-lg">
                        {wishlist.name}
                      </p>
                      <p className="text-secondary font-medium text-lg">
                        {wishlist.price}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </main>
      )}
    </section>
  );
}
