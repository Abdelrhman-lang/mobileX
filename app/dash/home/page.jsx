import React from "react";

export default function page() {
  return (
    <main className="mx-10 flex items-center justify-center min-h-screen">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-4xl font-bold heading">
          Welcome to your Dashboard 👋
        </h1>
        <p className="text-gray-600 text-xl text">
          Make stock tracking effortless: one intuitive tool to monitor
          products, prevent shortages, and reveal trends you can act on.
        </p>
      </div>
    </main>
  );
}
