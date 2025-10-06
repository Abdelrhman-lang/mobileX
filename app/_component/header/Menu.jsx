"use client";
import { MenuContext } from "@/context/MenuContext";
import { UserButton, useUser } from "@clerk/nextjs";
import { Heart, ShoppingBag, User, X } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";
export default function Menu() {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
  const { isSignedIn } = useUser();
  const links = [
    { id: 1, title: "home", href: "/" },
    { id: 2, title: "shop", href: "/shop" },
    { id: 3, title: "about", href: "/about" },
    { id: 4, title: "blog", href: "/blog" },
    { id: 5, title: "contact", href: "/contact" },
  ];

  return (
    <section
      className={`fixed top-0 ${
        isMenuOpen ? "right-0" : "-right-[200%]"
      } w-full h-full bg-white z-50 transition-all duration-500 py-24 px-8 lg:hidden`}
    >
      <div>
        <X
          className="absolute top-3.5 right-3.5"
          onClick={() => setIsMenuOpen(false)}
        />
      </div>

      <ul className="flex flex-col gap-y-5 pb-6 border-b ">
        {links.map((link) => {
          return (
            <li
              key={link.id}
              className="text-2xl font-medium heading capitalize"
            >
              <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="py-8 text-xl text font-medium capitalize flex flex-col gap-5 border-b">
        <li className="flex gap-4">
          {isSignedIn ? (
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Link
                  label="View Your Account"
                  href="/user-account"
                  labelIcon={<User className="w-4 h-4" />}
                />
              </UserButton.MenuItems>
            </UserButton>
          ) : (
            <span>
              <User className="w-6 h-6" />
              login
            </span>
          )}
        </li>
        <li className="flex gap-4">
          <span>
            <Heart className="w-6 h-6" />
          </span>
          <span>wishlist</span>
        </li>
        <li className="flex gap-4">
          <span>
            <ShoppingBag className="w-6 h-6" />
          </span>
          <span>my cart</span>
        </li>
      </ul>
    </section>
  );
}
