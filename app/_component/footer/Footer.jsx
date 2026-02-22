"use client";
import React from "react";
import FooterHead from "./FooterHead";
import FooterContent from "./FooterContent";
import FooterFoot from "./FooterFoot";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer
      className={`border-t py-24 ${pathname.includes("dash") ? "hidden" : "flex"}`}
    >
      <div className="custom-container">
        <FooterHead />
        <FooterContent />
        <FooterFoot />
      </div>
    </footer>
  );
}
