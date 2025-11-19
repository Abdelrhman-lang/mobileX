"use client";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/context/CartContext";
import { useUser } from "@clerk/nextjs";
import { Trash, X } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import Spinner from "./Spinner";
import { DeliveryDemo } from "./DeliveryDemo";
export default function Cart() {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    fetchUserCart,
    loading,
    deleteFromCart,
    clearCart,
    totalPrice,
  } = useContext(CartContext);
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const { user } = useUser();
  useEffect(() => {
    if (Array.isArray(cart) && cart.length !== 0) {
      setIsCartEmpty(false);
    } else {
      setIsCartEmpty(true);
    }
  });
  useEffect(() => {
    if (user) {
      fetchUserCart(user?.primaryEmailAddress?.emailAddress);
    }
  }, [user]);
  return (
    <section
      className={`w-full md:w-96 h-full [scrollbar-width:none] overflow-y-scroll p-5 md:p-10 fixed top-0 ${
        isCartOpen ? "right-0" : "-right-[300%]"
      } transition-all duration-300 bg-white shadow-md z-50 ${
        isCartEmpty ? "flex items-center justify-center" : ""
      }`}
    >
      <button
        className="absolute top-10 right-5 cursor-pointer"
        onClick={() => setIsCartOpen(false)}
      >
        <X className="w-5 h-5" />
      </button>
      {isCartEmpty ? (
        <div className="flex items-center justify-center">
          <h4 className="text-2xl text-muted capitalize">your cart is empty</h4>
        </div>
      ) : (
        <>
          {loading ? (
            <Spinner />
          ) : (
            <ul className="mt-10 text-primary">
              {cart?.map((cartItem) => {
                return (
                  <li
                    key={cartItem.id}
                    className="flex flex-col md:flex-row  items-center gap-5 pb-8 pt-4 border-b "
                  >
                    <div className="w-32 h-32">
                      <img src={cartItem.image} alt="cartItem-img" />
                    </div>
                    <div className="flex-1 text-center md:text-start">
                      <div className="mb-2.5">
                        <p className="mb-1">{cartItem.name}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-muted me-1">
                            {cartItem.quantity}X
                          </span>
                          <span className="font-medium">${cartItem.price}</span>
                        </div>

                        <button
                          onClick={() =>
                            deleteFromCart(
                              cartItem.id,
                              user?.primaryEmailAddress?.emailAddress
                            )
                          }
                          className="cursor-pointer"
                        >
                          <Trash className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
          <div className="pt-6 text-primary">
            <div className="flex items-center justify-between">
              <span className="uppercase font-medium">total price:</span>
              <span className="font-medium">${totalPrice().toFixed(2)}</span>
            </div>
            <div className="flex justify-end mt-2">
              <button
                className="capitalize text-muted text-sm cursor-pointer"
                onClick={() =>
                  clearCart(user?.primaryEmailAddress?.emailAddress)
                }
              >
                clear cart
              </button>
            </div>
            <div className="flex flex-col gap-2.5 my-6">
              <Button
                className={"w-full bg-accent py-8 rounded-none uppercase"}
              >
                view my cart
              </Button>
              <DeliveryDemo />
            </div>
          </div>
        </>
      )}
    </section>
  );
}
