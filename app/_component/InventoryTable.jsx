"use cilent";
import { NewProductContext } from "@/context/NewProductContext";
import axios from "axios";
import { ChevronLeft, ChevronRight, Trash } from "lucide-react";
import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { UpdateDialog } from "./UpdateDialog";
export default function InventoryTable({ products }) {
  const { fetchProducts } = useContext(NewProductContext);
  const [page, setPage] = useState(1);
  const limit = 8;

  const start = (page - 1) * limit;
  const end = Math.min(page * limit, products.length);
  const totalPages = Math.ceil(products.length / limit);
  const paginatedProducts = products.slice(start, end);

  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-gray-300 text-3xl">No Products Found</h1>
      </div>
    );
  }

  const deleteProduct = async (productId) => {
    try {
      const res = await axios.delete(
        `/api/delete-product?productId=${productId}`
      );
      if (res.status === 200) {
        Swal.fire({
          title: "Deleted!",
          text: "Product Deleted successfully!",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
        fetchProducts();
      }
    } catch (err) {
      console.error("Cannt deleting product", err);
    }
  };
  return (
    <div className="relative overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="w-full text-sm text-left text-gray-700 border border-gray-200">
        <thead className="text-xs uppercase bg-gray-100 border-b border-black">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Stock
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {paginatedProducts.map((product) => (
            <tr
              key={product.id}
              className="border-b hover:bg-gray-50 transition"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {product.title}
              </th>
              <td className="px-6 py-4">{Number(product.price)}$</td>
              <td className="px-6 py-4">{product.quantity}</td>
              <td className="px-6 py-4">
                {product.quantity === 0 ? (
                  <span className="text-red-600 font-semibold">
                    Out of stock
                  </span>
                ) : product.quantity <= 5 ? (
                  <span className="text-yellow-600 font-semibold">Low</span>
                ) : (
                  <span className="text-green-600 font-semibold">In stock</span>
                )}
              </td>
              <td className="px-6 py-4 flex items-center gap-3">
                <button
                  className="cursor-pointer"
                  onClick={() => deleteProduct(product.id)}
                >
                  <Trash size={18} />
                </button>
                <UpdateDialog product={product} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center gap-3 mt-4 pb-3">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
        >
          <ChevronLeft className="text-primary" size={18} />
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
        >
          <ChevronRight className="text-primary" size={18} />
        </button>
      </div>
    </div>
  );
}
