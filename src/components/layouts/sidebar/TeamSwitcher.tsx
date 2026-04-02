"use client";

import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string;
    logo: React.ElementType | string;
    plan: string;
  }[];
}) {
  const { isMobile } = useSidebar();
  const [activeTeam, setActiveTeam] = React.useState(teams[0]);
  const { state } = useSidebar();

  if (!activeTeam) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div
                className={`*:flex aspect-square ${state === "collapsed" ? "size-8" : "size-32"} items-center justify-center rounded-lg`}
              >
                {typeof activeTeam.logo === "string" ? (
                  <Image
                    src={
                      state === "collapsed"
                        ? "/images/logo-w.svg"
                        : "/images/logo-workin.svg"
                    }
                    alt={activeTeam.name}
                    width={400}
                    height={400}
                    className={`object-contain ${state === "collapsed" ? "size-8" : "size-32"}`}
                  />
                ) : (
                  <activeTeam.logo className="size-12" />
                )}
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
