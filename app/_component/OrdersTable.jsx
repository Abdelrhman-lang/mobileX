"use client";

import axios from "axios";
import { OrderDetailsDialog } from "./OrderDetailsDialog";
import Swal from "sweetalert2";
export default function OrdersTable({ orders }) {
  const updateOrderStatus = async (orderId) => {
    try {
      const res = await axios.put(`/api/update-order`, {
        orderId,
        status: "delivered",
      });
      return true;
    } catch (err) {
      console.error("Cannot Update Order", err);
      return false;
    }
  };
  if (orders?.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-4xl heading text-primary">NO ORDERS FOUND</h1>
      </div>
    );
  }
  return (
    <div className="relative overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="w-full text-sm text-left text-gray-700 border border-gray-200">
        <thead className="text-xs  bg-gray-100 border-b border-black">
          <tr>
            <th scope="col" className="px-6 py-3">
              Order id
            </th>
            <th scope="col" className="px-6 py-3">
              User Email
            </th>
            <th scope="col" className="px-6 py-3">
              Created At
            </th>
            <th scope="col" className="px-6 py-3">
              status
            </th>
            <th scope="col" className="px-6 py-3">
              Order Details
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {orders?.map((order) => (
            <tr key={order.id} className="border-b hover:bg-gray-50 transition">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {order.id}
              </th>
              <td className="px-6 py-4">{order.userEmail}</td>
              <td className="px-6 py-4">{order.createdAt}</td>
              <td className="px-6 py-4 text-muted">{order.status}</td>
              <td className="px-6 py-4 cursor-pointer">
                <OrderDetailsDialog
                  orderId={order?.id}
                  userEmail={order.userEmail}
                />
              </td>
              <td className="text-center">
                {order.status === "pending" ? (
                  <button
                    onClick={async () => {
                      const result = await Swal.fire({
                        title: "Are you sure?",
                        text: "The Order Delivered?",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes",
                      });

                      if (result.isConfirmed) {
                        const success = await updateOrderStatus(order.id);

                        if (success) {
                          Swal.fire({
                            title: "Updated!",
                            text: "Order status has been updated.",
                            icon: "success",
                          });
                        } else {
                          Swal.fire({
                            title: "Error!",
                            text: "Failed to update the order.",
                            icon: "error",
                          });
                        }
                      }
                    }}
                    className="cursor-pointer"
                  >
                    ❌
                  </button>
                ) : (
                  <span>✅</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
