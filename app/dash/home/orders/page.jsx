"use client";

import OrdersTable from "@/app/_component/OrdersTable";
import Spinner from "@/app/_component/Spinner";
import axios from "axios";
import { useEffect, useState } from "react";

export default function page() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("/api/get-all-orders");
      if (res.status === 200) {
        setOrders(res.data);
      }
    } catch (err) {
      console.error("Cannot Fetching Orders", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="xl:ml-10 p-6">
        <h1 className="font-bold text-2xl mb-2">Manage your Orders 👋</h1>
        <p className="text-gray-600 mb-8">Here you can View your Orders</p>

        {loading ? (
          <div className="flex items-center justify-center min-h-screen">
            <Spinner />
          </div>
        ) : (
          <OrdersTable orders={orders} />
        )}
      </div>
    </section>
  );
}
