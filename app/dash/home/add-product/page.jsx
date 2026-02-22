"use client";

import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

export default function page() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    quantity: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const uploadImage = async () => {
    const fd = new FormData();
    fd.append("file", form.image);

    const res = await axios.post("/api/upload-image", fd);
    if (res.data.error) {
      throw new Error(res.data.error);
    }
    return res.data.url; // لينك الصورة
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const imageUrl = await uploadImage();
      const res = await axios.post("/api/add-product", {
        title: form.title,
        description: form.description,
        category: form.category,
        price: Number(form.price),
        quantity: Number(form.quantity),
        image: imageUrl,
      });
      if (res.status === 200) {
        Swal.fire({
          title: "Added!",
          text: "Product Added successfully!",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
        setForm({
          title: "",
          description: "",
          category: "",
          price: "",
          quantity: "",
          image: null,
        });
      }
    } catch (err) {
      console.error("cannot Adding Product", err);

      // Show user-friendly error message
      const errorMessage =
        err.response?.data?.error ||
        err.message ||
        "Failed to add product. Please try again.";

      Swal.fire({
        title: "Error!",
        text: errorMessage,
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full  p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-primary">
        Add New Product 🛒
      </h1>
      <div className="">
        <form
          className="bg-white shadow-md rounded-lg p-6 w-full space-y-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="title"
            placeholder="Product Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
            className="w-full border rounded px-4 py-2"
          />
          <input
            type="text"
            name="description"
            placeholder="Product description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
            className="w-full border rounded px-4 py-2"
          />
          <input
            type="text"
            name="category"
            placeholder="Product Category"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            required
            className="w-full border rounded px-4 py-2"
          />

          <input
            type="number"
            name="price"
            placeholder="Product Price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            required
            className="w-full border rounded px-4 py-2"
          />

          <input
            type="number"
            name="quantity"
            placeholder="Product Quantity"
            value={form.quantity}
            onChange={(e) => setForm({ ...form, quantity: e.target.value })}
            required
            className="w-full border rounded px-4 py-2"
          />
          <input
            type="file"
            name="image"
            placeholder="Add Your Image"
            onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
            accept="image/*"
            required
            className="w-full border rounded px-4 py-2"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-2 rounded  cursor-pointer"
          >
            {loading ? "Adding...." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}
