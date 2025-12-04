"use client";

import * as React from "react";

import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

export function TeamSwitcher({
  company,
}: {
  company: { name: string; logo: React.ElementType; plan: string };
}) {
  const [activeTeam] = React.useState(company);
  const btnRef = React.useRef<HTMLButtonElement | null>(null);

  const handleMouseEnter = () => {
    const el = btnRef.current;
    if (!el) return;
    const isActive = el.getAttribute("data-active") === "true";
    const isOpen = el.getAttribute("data-state") === "open";
    if (!isActive && !isOpen) {
      el.style.backgroundColor = "transparent";
      el.style.color = "var(--sidebar-foreground)";
    }
  };

  const handleMouseLeave = () => {
    const el = btnRef.current;
    if (!el) return;
    el.style.backgroundColor = "";
    el.style.color = "";
  };

  if (!activeTeam) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground no-hover-sidebar-menu-button"
          ref={btnRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <activeTeam.logo className="relative z-50 aspect-square rounded-lg w-8! h-8!" />
          <div className="grid flex-1 text-left text-sm leading-0.5">
            <span className="truncate font-bold text-lg leading-5">{activeTeam.name}</span>
            <span className="truncate text-xs">{activeTeam.plan}</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
