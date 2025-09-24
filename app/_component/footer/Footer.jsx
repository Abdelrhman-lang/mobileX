import React from "react";
import FooterHead from "./FooterHead";
import FooterContent from "./FooterContent";
import FooterFoot from "./FooterFoot";

export default function Footer() {
  return (
    <footer className="border-t py-24">
      <div className="custom-container">
        <FooterHead />
        <FooterContent />
        <FooterFoot />
      </div>
    </footer>
  );
}
