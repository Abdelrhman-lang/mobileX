"use client";

import { useState } from "react";

export default function Head({ title, setSelectedCategory }) {
  const [isActive, setIsActive] = useState("smartphones");
  return (
    <div className="flex flex-col gap-8 md:flex-row md:gap-0 items-center justify-between">
      <h3 className="heading text-4xl capitalize font-medium">{title}</h3>
      <ul className="flex items-center gap-10 uppercase text-sm text-accent font-medium cursor-pointer">
        <li
          className={`${
            isActive === "smartphones"
              ? "text-primary after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-[1px] after:bg-primary"
              : ""
          } relative `}
          onClick={() => {
            setIsActive("smartphones");
            setSelectedCategory("smartphones");
          }}
        >
          Mobiles
        </li>
        <li
          className={`${
            isActive === "laptops"
              ? "text-primary after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-[1px] after:bg-primary"
              : ""
          } relative`}
          onClick={() => {
            setIsActive("laptops");
            setSelectedCategory("laptops");
          }}
        >
          Laptobs{" "}
        </li>
        <li
          className={`${
            isActive === "tablets"
              ? "text-primary after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-[1px] after:bg-primary"
              : ""
          } relative`}
          onClick={() => {
            setIsActive("tablets");
            setSelectedCategory("tablets");
          }}
        >
          Tablets
        </li>
      </ul>
    </div>
  );
}
