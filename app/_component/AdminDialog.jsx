"use client";
import { Button, buttonVariants } from "@/components/ui/button";
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
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

export function AdminDialog() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "admin",
  });
  const addAdmin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/add-admin", {
        name: form.name,
        email: form.email,
        role: form.role,
      });
      if (res.status === 200) {
        Swal.fire({
          title: "Added!",
          text: "Admin Added successfully!",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
        setForm({
          name: "",
          email: "",
        });
      }
    } catch (err) {
      console.error("Cannot Add Admin", err);
    }
  };
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <button
            className={`${buttonVariants({
              variant: "outline",
            })} capitalize`}
          >
            add admin
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Admin</DialogTitle>
            <DialogDescription>
              Add Admin to your Website. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input
                id="name-1"
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email-1">Email</Label>
              <Input
                id="email-1"
                name="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email-1">Role</Label>
              <Input id="role-1" name="role" value={form.role} readOnly />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={addAdmin}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
