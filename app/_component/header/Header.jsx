"use client";
import Logo from "./Logo";
import Navbar from "./Navbar";
import HeaderActions from "./HeaderActions";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header
      className={`flex items-center justify-between min-h-24 px-4 lg:px-20 ${
        pathname.includes("sign-in") ? "hidden" : "flex"
      } ${pathname.includes("dash") ? "hidden" : "flex"}`}
    >
      <Logo />
      <Navbar />
      <HeaderActions />
    </header>
  );
}
