import * as React from "react";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import { SidebarTrigger } from "../ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { ModeToggle } from "../theme/ModeSwitch";
import { BellRing } from "lucide-react";

type Crumb = {
  label: string;
  href?: string;
};

const Header = ({ crumbs }: { crumbs?: Crumb[] }) => {
  const crumbsToRender = crumbs ?? [
    { label: "Building Your Application", href: "/dashboard" },
    { label: "Data Fetching" },
  ];
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 justify-between border-b border-border bg-background/95 backdrop-blur-sm  ">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {crumbsToRender.map((c, i) => (
              <React.Fragment key={`${c.label}-${i}`}>
                <BreadcrumbItem className={i === 0 ? "hidden md:block" : undefined}>
                  {c.href && i !== crumbsToRender.length - 1 ? (
                    <BreadcrumbLink asChild>
                      <Link href={c.href}>{c.label}</Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{c.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {i < crumbsToRender.length - 1 && (
                  <BreadcrumbSeparator className="hidden md:block" />
                )}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex justify-center items-center gap-4 px-4 ">
        <BellRing size={18} />
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
