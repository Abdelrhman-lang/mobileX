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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NewProductContext } from "@/context/NewProductContext";
import axios from "axios";
import { Edit } from "lucide-react";
import { useContext, useState } from "react";
import Swal from "sweetalert2";

export function UpdateDialog({ product }) {
  const { fetchProducts } = useContext(NewProductContext);
  const [form, setForm] = useState({
    title: product.title,
    description: product.description,
    category: product.category,
    price: product.price,
    quantity: product.quantity,
  });
  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `/api/update-product?productId=${product.id}`,
        {
          title: form.title,
          description: form.description,
          category: form.category,
          price: Number(form.price),
          quantity: Number(form.quantity),
        }
      );
      if (res.status === 200) {
        Swal.fire({
          title: "Updated!",
          text: "Product Updated successfully!",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
        fetchProducts();
      }
    } catch (err) {
      console.error("Cannot update product", err);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="cursor-pointer">
          <Edit size={18} />
        </button>
      </DialogTrigger>
      <form>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Update Product</DialogTitle>
            <DialogDescription>
              Make changes to your Products. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="title">Product Title</Label>
              <Input
                id="title"
                name="title"
                defaultValue={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="des">Product Description</Label>
              <Input
                id="des"
                name="des"
                defaultValue={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="category">Product Category</Label>
              <Input
                id="category"
                name="category"
                defaultValue={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="price">Product Price</Label>
              <Input
                id="price"
                name="price"
                type={"number"}
                defaultValue={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="quantity">Product Quantity</Label>
              <Input
                id="quantity"
                name="quantity"
                type={"number"}
                defaultValue={form.quantity}
                onChange={(e) => setForm({ ...form, quantity: e.target.value })}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={updateProduct}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
