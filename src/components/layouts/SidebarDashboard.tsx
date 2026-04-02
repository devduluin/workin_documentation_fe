"use client";
import {
  AreaChartIcon,
  CircleChevronDown,
  KeyRound,
  LayoutDashboard,
  Settings,
  UserRoundPen,
  Video,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const pathname = usePathname();

  const menuList = [
    {
      link: "/dashboard",
      icon: <LayoutDashboard />,
      text: "Beranda",
      role: ["all"],
    },
    {
      link: "/a",
      icon: <AreaChartIcon />,
      text: "Article",
      role: ["all"],
    },
    {
      link: "/ap",
      icon: <Video />,
      text: "Video",
      role: ["all"],
    },
    {
      group: "User Management",
      items: [
        {
          link: "/app/data-roles",
          icon: <Settings />,
          text: "Data Role",
          role: ["Pihak Internal", "admin"],
        },
        {
          link: "/app/role-permissions",
          icon: <KeyRound />,
          text: "Role Permission",
          role: ["Pihak Internal", "admin"],
        },
        {
          link: "/app/users",
          icon: <UserRoundPen />,
          text: "User",
          role: ["Pihak Internal", "admin"],
        },
        {
          link: "/app/data-dashboards",
          icon: <Settings />,
          text: "Data Dashboard",
          role: ["Pihak Internal", "admin"],
        },
        {
          link: "/app/data-kategori",
          icon: <Settings />,
          text: "Data Kategori Dashboard",
          role: ["Pihak Internal", "admin"],
        },
      ],
    },
  ];

  return (
    <Sidebar className="pb-9 z-50" collapsible="icon">
      <SidebarContent className="no-scrollbar">
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupContent>
            <div className="px-4 py-4">
              <Link
                href="/"
                className="flex items-center justify-between gap-2 pl-l p-2"
              >
                <img
                  alt="workin logo"
                  src={`/images/logo-workin.svg`}
                  width={150}
                  height={400}
                  className="bg-center"
                />
              </Link>
            </div>
            <SidebarMenu>
              {menuList.map((menu, index) => (
                <Collapsible key={`${index}-${menu.group}`} defaultOpen>
                  {/* single link */}
                  {!menu.group ? (
                    <SidebarGroupLabel
                      menu={menu.link}
                      className="flex items-center gap-1 text-sm font-semibold"
                    >
                      <div
                        className={`flex items-center px-2 py-2 ${menu.icon ? "w-full" : ""}`}
                      >
                        {menu.icon}
                        <Link
                          href={menu.link || "/"}
                          className={`w-full flex cursor-pointer items-center px-4 py-2 text-[14px] font-semibold transition-all duration-200`}
                        >
                          {menu.text}
                        </Link>
                      </div>
                    </SidebarGroupLabel>
                  ) : (
                    <CollapsibleTrigger className="group w-full">
                      <SidebarGroupLabel>
                        <p className="font-semibold text-xs uppercase tracking-wider text-blue-200">
                          {menu.group}
                        </p>
                        <CircleChevronDown className="ml-auto transition-transform group-data-[state=open]:rotate-180" />
                      </SidebarGroupLabel>
                    </CollapsibleTrigger>
                  )}
                  <CollapsibleContent>
                    {menu.items &&
                      menu.items.map((item, idx) => (
                        <SidebarMenuItem
                          key={`${idx}-${item.text}`}
                          className={`my-1 px-2 py-2 rounded-lg transition-all duration-200 ${
                            pathname === item.link
                              ? "bg-white text-blue-700 font-semibold shadow-sm"
                              : "text-blue-100 hover:bg-blue-600 hover:text-white"
                          }`}
                        >
                          <Link
                            href={item.link}
                            className="flex items-center gap-2"
                          >
                            <span className="w-5 h-5">{item.icon}</span>
                            {item.text}
                          </Link>
                        </SidebarMenuItem>
                      ))}
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
