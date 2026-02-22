"use client";
import { Button } from "@/components/ui/button";
import { OrderContext } from "@/context/OrderContext";
import { useContext, useEffect } from "react";
import Spinner from "./Spinner";

export default function OrderDetails({ setViewOrderDetails, orderId }) {
  const { orderDetails, fetchUserOrderDetails, loading } =
    useContext(OrderContext);
  useEffect(() => {
    fetchUserOrderDetails(orderId);
  }, [orderId]);
  const totlaPrice = orderDetails.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0
  );
  return (
    <main className="pb-20">
      <h4 className="flex items-center justify-between">
        <p className="heading font-medium text-4xl mb-3 capitalize">
          my orders
        </p>
        <Button
          variant={"outline"}
          size={"lg"}
          className={"capitalize cursor-pointer"}
          onClick={() => setViewOrderDetails(false)}
        >
          back
        </Button>
      </h4>
      {loading ? (
        <div className="flex items-center justify-center mt-20">
          <Spinner />
        </div>
      ) : (
        <ul className="mt-10 grid grid-cols-1 md:grid-cols-2  gap-10 ">
          {orderDetails.map((order) => {
            return (
              <li key={order.id} className="bg-white shadow-md p-5 rounded-lg">
                <div className="border-b pb-2.5">
                  <img src={order.image} alt="order-img" />
                </div>
                <div className="flex items-center justify-between flex-wrap pt-5">
                  <p className="heading font-medium text-lg">{order.name}</p>
                  <p className="text-secondary font-medium text-lg">
                    <span className="text-muted me-1">{order.quantity}x</span>$
                    {order.price}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      {loading ? (
        ""
      ) : (
        <ul className="mt-10 border-t pt-10 heading text-2xl">
          <li className="">Subtotal: ${totlaPrice}</li>
        </ul>
      )}
    </main>
  );
}
