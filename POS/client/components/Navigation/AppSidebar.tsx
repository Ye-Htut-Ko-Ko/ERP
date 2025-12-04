"use client";

import * as React from "react";
import { ShoppingCart, Users, LayoutDashboard, Package, ShieldUser } from "lucide-react";

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

  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "POS",
      url: "/dashboard/pos",
      icon: ShoppingCart,
    },
    {
      title: "Orders",
      url: "/dashboard/orders",
      icon: Package,
    },
  ],
  NavUser: [
    {
      title: "Customers",
      url: "/dashboard/user-control/customers",
      icon: Users,
    },
    {
      title: "Admins",
      url: "/dashboard/user-control/admins",
      icon: ShieldUser,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="border border-b">
        <TeamSwitcher company={data.company} />
      </SidebarHeader>
      <SidebarContent className="py-2">
        <NavMain items={data.navMain} />
        <NavMain label="User Management" items={data.NavUser} />
      </SidebarContent>
      <SidebarFooter className="border border-t">
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
