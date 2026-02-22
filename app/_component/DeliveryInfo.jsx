"use client";

import { UserContext } from "@/context/UserContext";
import { useUser } from "@clerk/nextjs";
import { useContext } from "react";

export default function DeliveryInfo() {
  const { userData } = useContext(UserContext);
  const fields = [
    { id: 1, label: "Name", value: userData?.name },
    { id: 2, label: "Phone Number", value: userData?.phone },
    { id: 3, label: "Address", value: userData?.address },
  ];
  return (
    <main>
      {fields.map((field) => {
        return (
          <div key={field.id} className="mb-10 text">
            <label className="text-sm text-primary mb-2 block">
              {field.label}
            </label>
            <input
              className="w-full border py-3 px-4 focus:outline-black"
              defaultValue={field.value}
              disabled
            />
          </div>
        );
      })}
    </main>
  );
}
