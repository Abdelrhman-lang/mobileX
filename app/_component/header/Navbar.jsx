import Link from "next/link";

export default function Navbar() {
  const links = [
    { id: 1, title: "home", href: "/" },
    { id: 2, title: "shop", href: "/shop" },
    { id: 3, title: "about", href: "/about" },
    { id: 4, title: "blog", href: "/blog" },
    { id: 5, title: "contact", href: "/contact" },
  ];
  return (
    <nav className="text hidden lg:block">
      <ul className="flex items-center gap-10 mt-2">
        {links.map((link) => {
          return (
            <li
              key={link.id}
              className="uppercase font-medium text-[13px]  relative after:transition-all after:duration-300 hover:after:w-full after:absolute after:w-0 after:h-0.5 after:bg-primary after:-bottom-1 after:left-0"
            >
              <Link href={link.href}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
