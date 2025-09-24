"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import { NavAppsContent } from "@/components/layout/admin/nav-apps-content"
import { NavMenu } from "@/components/layout/admin/nav-menu"
import { baseMenuItems } from "@/components/layout/admin/nav-menu"
import { NavMain } from "@/components/layout/admin/nav-main"
import { NavSecondary } from "@/components/layout/admin/nav-secondary"
import { NavUser } from "@/components/layout/admin/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Vann",
    email: "vann@example.com",
    avatar: "/avatars/vann.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Statistics",
      url: "#",
      icon: IconChartBar,
    },
    {
      title: "Setoran",
      url: "#",
      icon: IconFolder,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
  appsAndContent: [
    {
      name: "Transaksi ",
      url: "#",
      icon: IconDatabase,
    },
    {
      name: "Banner & Berita",
      url: "#",
      icon: IconReport,
    },
    {
      name: "Surat Al-Quran",
      url: "#",
      icon: IconFileWord,
    },
  ],
  menu: baseMenuItems,
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/">
                {/* <IconInnerShadowTop className="!size-5" /> */}
                <Image
                  src="/islamic-logo-mosque-vector.jpg"
                  alt="MAQDIS"
                  width={24}
                  height={24}
                  className="inline h-6 w-6"
                  priority
                />
                <span className="text-base font-semibold">MAQDIS.</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
    <NavMain items={data.navMain} />
    <NavAppsContent items={data.appsAndContent} />
    <NavMenu items={data.menu} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
