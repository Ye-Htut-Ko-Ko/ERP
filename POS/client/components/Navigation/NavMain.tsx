"use client";

import * as React from "react";
import { ChevronRight, type LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
  label,
  labelNode,
}: {
  items: {
    title: string;
    url?: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
  label?: string;
  labelNode?: React.ReactNode;
}) {
  const pathname = usePathname();
  const { isMobile, setOpenMobile } = useSidebar();

  const handleMenuClick = () => {
    if (isMobile) {
      setTimeout(() => {
        setOpenMobile(false);
      }, 200);
    }
  };

  return (
    <SidebarGroup className="py-0">
      {labelNode
        ? labelNode
        : label && <SidebarGroupLabel className="text-xs p-0">{label}</SidebarGroupLabel>}
      <SidebarMenu>
        {items.map((item) => {
          const autoActive = (() => {
            if (typeof item.isActive === "boolean") return item.isActive;
            if (item.url) {
              if (item.url === "/dashboard") return pathname === "/dashboard";
              return pathname?.startsWith(item.url);
            }
            if (Array.isArray(item.items) && item.items.length > 0) {
              return item.items?.some((s) => pathname?.startsWith(s.url));
            }
            return false;
          })();
          const hasChildren = Array.isArray(item.items) && item.items.length > 0;

          if (!hasChildren) {
            // simple link
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild isActive={!!autoActive} tooltip={item.title}>
                  <Link href={item.url ?? "#"} onClick={handleMenuClick}>
                    {item.icon && <item.icon />}
                    <span className="flex-1 min-w-0 truncate whitespace-nowrap">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          }

          // collapsible item with sub items
          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={!!autoActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton isActive={!!autoActive} tooltip={item.title}>
                    {item.icon && <item.icon />}
                    <span className="flex-1 min-w-0 truncate whitespace-nowrap">{item.title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => {
                      const subActive = pathname?.startsWith(subItem.url);
                      return (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild isActive={!!subActive}>
                            <Link href={subItem.url} onClick={handleMenuClick}>
                              <span className="flex-1 min-w-0 truncate whitespace-nowrap">
                                {subItem.title}
                              </span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      );
                    })}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
