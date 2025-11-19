"use client";
import {
  Check,
  Globe,
  Home,
  ListOrdered,
  Package,
  Plus,
  User,
  View,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dash/home",
    icon: Home,
  },
  {
    title: "Overview",
    url: "/dash/home/overview",
    icon: View,
  },
  {
    title: "Inventory",
    url: "/dash/home/inventory",
    icon: Package,
  },
  {
    title: "Add Product",
    url: "/dash/home/add-product",
    icon: Plus,
  },
  {
    title: "Orders",
    url: "/dash/home/orders",
    icon: ListOrdered,
  },
  {
    title: "Admins",
    url: "/dash/home/admins",
    icon: Check,
  },
  {
    title: "Users",
    url: "/dash/home/users",
    icon: User,
  },
  {
    title: "Go to Website",
    url: "/",
    icon: Globe,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard Control</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  className={`${pathname === item.url ? "font-bold text-primary" : ""}`}
                  key={item.title}
                >
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
