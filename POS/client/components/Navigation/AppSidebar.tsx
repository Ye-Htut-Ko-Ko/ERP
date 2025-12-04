"use client";

import * as React from "react";
import {
  ShoppingCart,
  Users,
  LayoutDashboard,
  Package,
  ShieldUser,
  ChartNoAxesCombined,
  ClipboardList,
  Store,
  ReceiptText,
  ChartColumn,
  TrendingUp,
} from "lucide-react";

import { NavMain } from "@/components/Navigation/NavMain";
import { NavUser } from "@/components/Navigation/NavUser";
import { TeamSwitcher } from "@/components/Navigation/CompanyHeader";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Logo from "../icons/Logo";

// This is sample data.
const data = {
  user: {
    name: "Ye Htut Ko Ko",
    email: "yehtutkoko18@gmail.com",
    avatar: "/avatars/yehtutkoko18.jpg",
  },
  company: {
    name: "Ion",
    logo: Logo,
    plan: "Development Group",
  },

  Overview: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
  ],
  Shop: [
    {
      title: "POS",
      url: "/dashboard/shop/pos",
      icon: ShoppingCart,
    },
    {
      title: "Orders",
      url: "/dashboard/shop/orders",
      icon: ClipboardList,
    },
    {
      title: "Storefront",
      url: "/dashboard/shop/store",
      icon: Store,
    },
  ],
  Inventory: [
    {
      title: "Stocks",
      url: "/dashboard/inventory/stocks",
      icon: Package,
    },
    {
      title: "Invoices",
      url: "/dashboard/inventory/invoices",
      icon: ReceiptText,
    },
  ],
  Users: [
    {
      title: "Customers",
      url: "/dashboard/user/customers",
      icon: Users,
    },
    {
      title: "Admins",
      url: "/dashboard/user/admins",
      icon: ShieldUser,
    },
  ],
  Analytics: [
    {
      title: "Finance",
      url: "/dashboard/analytics/finance",
      icon: ChartNoAxesCombined,
    },
    {
      title: "Sales",
      url: "/dashboard/analytics/sales",
      icon: ChartColumn,
    },
    {
      title: "Inventory",
      url: "/dashboard/analytics/inventory",
      icon: TrendingUp,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="border-b border-sidebar-border inset-0 bg-sidebar text-sidebar-foreground">
        <TeamSwitcher company={data.company} />
      </SidebarHeader>
      <SidebarContent className="py-2 bg-sidebar text-sidebar-foreground gap-0 scrollbar-hide">
        <NavMain label="Overview" items={data.Overview} />
        <NavMain label="Shop" items={data.Shop} />
        <NavMain label="Inventory" items={data.Inventory} />
        <NavMain label="Users" items={data.Users} />
        <NavMain label="Analytics" items={data.Analytics} />
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border bg-sidebar text-sidebar-foreground">
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
