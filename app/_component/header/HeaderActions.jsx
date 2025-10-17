"use client";
import { CartContext } from "@/context/CartContext";
import { MenuContext } from "@/context/MenuContext";
import { UserButton, useUser } from "@clerk/nextjs";
import { Heart, Menu, Search, ShoppingBagIcon, User } from "lucide-react";
import Link from "next/link";
import React, { useContext } from "react";

export default function HeaderActions() {
  const { isSignedIn } = useUser();
  const { setIsMenuOpen } = useContext(MenuContext);
  const { setIsCartOpen, cart } = useContext(CartContext);
  return (
    <div className="">
      <ul className="flex items-center gap-3 lg:gap-10 text-sm">
        <li className="uppercase font-medium transition-colors duration-200 hover:text-muted hidden lg:block">
          {isSignedIn ? (
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Link
                  label="View My Account"
                  href="/user-account"
                  labelIcon={<User className="w-4 h-4" />}
                />
              </UserButton.MenuItems>
            </UserButton>
          ) : (
            <Link href={"/sign-in"}>login</Link>
          )}
        </li>
        <li className=" transition-colors duration-200 hover:text-muted cursor-pointer hidden md:block">
          <Search />
        </li>
        <li className=" transition-colors duration-200 hover:text-muted cursor-pointer hidden md:block">
          <Heart />
        </li>
        <li
          className=" transition-colors duration-200 hover:text-muted cursor-pointer relative"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingBagIcon />
          <span className="absolute -top-2.5 -right-2.5 bg-black w-5 h-5 flex justify-center items-center rounded-full text-white">
            {" "}
            {cart.length}
          </span>
        </li>
        <li
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden transition-colors duration-200 hover:text-muted cursor-pointer"
        >
          <Menu />
        </li>
      </ul>
    </div>
  );
}
