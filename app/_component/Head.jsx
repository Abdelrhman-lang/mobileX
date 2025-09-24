"use client";

import { useState } from "react";

export default function Head({ title }) {
  const [isActive, setIsActive] = useState("computing");
  return (
    <div className="flex flex-col gap-8 md:flex-row md:gap-0 items-center justify-between">
      <h3 className="heading text-4xl capitalize font-medium">{title}</h3>
      <ul className="flex items-center gap-10 uppercase text-sm text-accent font-medium cursor-pointer">
        <li
          className={`${
            isActive === "computing"
              ? "text-primary after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-[1px] after:bg-primary"
              : ""
          } relative `}
          onClick={() => setIsActive("computing")}
        >
          Computing
        </li>
        <li
          className={`${
            isActive === "mobile"
              ? "text-primary after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-[1px] after:bg-primary"
              : ""
          } relative`}
          onClick={() => setIsActive("mobile")}
        >
          Mobile{" "}
        </li>
        <li
          className={`${
            isActive === "acc"
              ? "text-primary after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-[1px] after:bg-primary"
              : ""
          } relative`}
          onClick={() => setIsActive("acc")}
        >
          Accessories
        </li>
      </ul>
    </div>
  );
}
