"use client";

import { UserContext } from "@/context/UserContext";

import { useContext } from "react";
import Spinner from "../_component/Spinner";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function page() {
  const { userData, loading } = useContext(UserContext);
  if (userData?.role === "user") {
    return (
      <section className="bg-primary flex items-center justify-center min-h-screen">
        <h1 className="text-white text-5xl capitalize">
          you are not authorized to access this page
        </h1>
      </section>
    );
  }
  return (
    <section className="bg-primary">
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <Spinner />
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-7xl text-white">Welcome, {userData?.name}</h1>
            <p className="text-muted text-xl capitalize">
              from here you can mange your website. just click the button below
            </p>
            <Link
              href={"/dash/home"}
              className={buttonVariants({ variant: "outline" })}
            >
              Go To Dashboard
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
