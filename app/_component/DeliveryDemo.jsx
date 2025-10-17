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
import { OrderContext } from "@/context/OrderContext";
import { UserContext } from "@/context/UserContext";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

export function DeliveryDemo() {
  const { userData, fetchUserData } = useContext(UserContext);
  const { user } = useUser();
  useEffect(() => {
    if (user) {
      fetchUserData(user?.primaryEmailAddress?.emailAddress);
    }
  }, [user]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  useEffect(() => {
    if (userData) {
      setFormData({
        name: userData.name || "",
        email: userData.email || "",
        phone: userData.phone || "",
        address: userData.address || "",
      });
    }
  }, [userData]);
  const { placeOrder } = useContext(OrderContext);
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put("/api/update-user", {
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
      });
      if (res.status === 200) {
        placeOrder();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            className={
              "w-full text-black cursor-pointer py-8 rounded-none uppercase !bg-[#f2f2f2]"
            }
          >
            Place Order
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader className={"flex justify-center items-center"}>
            <DialogTitle>Delivery Details</DialogTitle>
            <DialogDescription>
              Fill all Fields. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-5">
            <div className="flex flex-col gap-2 mb-3">
              <label htmlFor="name" className="text-sm text-accent">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                className="border focus:outline-none p-1"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                disabled
              />
            </div>
            <div className="flex flex-col gap-2 mb-3">
              <label htmlFor="email" className="text-sm text-accent">
                Email
              </label>
              <input
                type="text"
                name="email"
                className="border focus:outline-none p-1"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                disabled
              />
            </div>
            <div className="flex flex-col gap-2 mb-3">
              <label htmlFor="phone" className="text-sm text-accent">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                className="border focus:outline-none p-1"
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, phone: e.target.value }))
                }
                required
              />
            </div>
            <div className="flex flex-col gap-2 mb-3">
              <label htmlFor="address" className="text-sm text-accent">
                Address
              </label>
              <input
                type="text"
                name="address"
                className="border focus:outline-none p-1"
                value={formData.address}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, address: e.target.value }))
                }
                required
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" onClick={handelSubmit}>
              Place Order
            </Button>
            <Button onClick={() => console.log(userData)}>click</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
