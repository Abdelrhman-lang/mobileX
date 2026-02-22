"use client";
import { ArrowBigUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function FixedArrow() {
  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
    const handelScroll = () => {
      if (scrollY > 200) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };
    window.addEventListener("scroll", handelScroll);
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={`fixed right-10 bottom-20 bg-black shadow-md rounded-full text-white  w-[50px] h-[50px] flex items-center justify-center cursor-pointer transition-all duration-300 ${
        showArrow ? "opacity-100" : "opacity-0"
      }`}
    >
      <ArrowBigUp className="w-5 h-5" />
    </button>
  );
}
