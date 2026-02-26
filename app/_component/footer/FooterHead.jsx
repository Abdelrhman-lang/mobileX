import React from "react";

export default function FooterHead() {
  return (
    <main className="flex flex-col gap-2 justify-center items-center">
      <div className="w-24">
        <img src="/logo.jpeg" alt="logo-img" className="w-20 h-20 rounded-full" />
      </div>
      <div className="text text-accent">dotphone Store</div>
    </main>
  );
}
