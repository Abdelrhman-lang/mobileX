import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function FooterContent() {
  return (
    <div className="flex flex-col gap-y-5 md:flex-row md:justify-between md:items-center mt-5">
      <ul className="text-center text-accent text-sm capitalize md:w-1/6 w-full">
        <li className="pb-2.5">
          <Link href={"/about"}>about us</Link>
        </li>
        <li className="pb-2.5">
          <Link href={"/contact"}>contatc us</Link>
        </li>
        <li className="pb-2.5">
          <Link href={"/shop"}>shop</Link>
        </li>
        <li className="pb-2.5">
          <Link href={"/privacy-policy"}>privacy policy</Link>
        </li>
      </ul>
      <div className="flex flex-col md:flex-row  items-center gap-5 md:w-1/2 w-full">
        <div className="flex-1">
          <input
            type="text"
            className="w-full py-2.5 px-3.5 border focus:outline-0 text-accent"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="">
          <Button
            className={
              "text-xs uppercase rounded-none w-[150px] h-[42px] bg-accent"
            }
          >
            Subscribe
          </Button>
        </div>
      </div>
      <ul className="md:w-1/6 w-full text-center text-accent text-sm capitalize">
        <li className="pb-2.5">FAQ’s</li>
        <li className="pb-2.5">Terms</li>
        <li className="pb-2.5">Delivery Info</li>
        <li className="pb-2.5">Refund policy</li>
      </ul>
    </div>
  );
}
