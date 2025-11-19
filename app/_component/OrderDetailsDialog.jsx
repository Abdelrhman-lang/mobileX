"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import axios from "axios";
import { ArrowBigRight } from "lucide-react";
import { useEffect, useState } from "react";

export function OrderDetailsDialog({ orderId, userEmail }) {
  const [orderDetails, setOrderDetails] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const fetchUserDetails = async () => {
    try {
      const res = await axios.get(`/api/get-user?email=${userEmail}`);
      if (res.status === 200) {
        setUserDetails(res.data);
        console.log(res.data);
      }
    } catch (err) {
      console.log("cannot fetch user details");
    }
  };
  const fetchOrderDetails = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`/api/get-order-details?orderId=${orderId}`);
      setOrderDetails(res.data);
      console.log(res.data);
    } catch (err) {
      console.error("Cannot Fetch Order Details", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (open) {
      fetchOrderDetails();
    }
  }, [open]);
  useEffect(() => {
    if (open) {
      fetchUserDetails();
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="icon" variant="ghost" className={"cursor-pointer"}>
          <ArrowBigRight size={18} />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Order #{orderId}</DialogTitle>
          <DialogDescription>
            Here are the details of order #{orderId}.
          </DialogDescription>
        </DialogHeader>

        {loading ? (
          <p className="text-center py-4 text-sm text-gray-500">
            Loading details...
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-b pb-5">
              {orderDetails?.map((order) => {
                return (
                  <div key={order.id} className="flex flex-col gap-4">
                    <div className="text-center">
                      <img src={order?.image} alt="image" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <h2>Product Title: {order?.name}</h2>
                      <p className="text-red-500">
                        Product Price:{" "}
                        <span className="text-gray-500">
                          {order?.quantity}X
                        </span>
                        ${order.price}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <h3 className="text-lg font-bold">Delivery Details</h3>
            <p>
              <span className="font-bold capitalize">customer name:</span>{" "}
              {userDetails?.name}
            </p>
            <p>
              <span className="font-bold capitalize">customer email:</span>{" "}
              {userDetails?.email}
            </p>
            <p>
              <span className="font-bold capitalize">phone number:</span>{" "}
              {userDetails?.phone}
            </p>
            <p>
              <span className="font-bold capitalize">address:</span>{" "}
              {userDetails?.address}
            </p>
          </>
        )}

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
