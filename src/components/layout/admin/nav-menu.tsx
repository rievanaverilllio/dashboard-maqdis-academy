"use client"

import * as React from "react"
import {
  IconDots,
  IconCalendarEvent,
  IconSparkles,
  IconStar,
  IconFolder,
  IconShare3,
  IconTrash,
  type Icon,
} from "@tabler/icons-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

interface MenuItem {
  name: string
  url: string
  icon: Icon
}

const moreMenuItems: MenuItem[] = [
  { name: "Integrations", url: "#", icon: IconSparkles },
  { name: "Highlights", url: "#", icon: IconStar },
  { name: "Collections", url: "#", icon: IconFolder },
  { name: "Share Center", url: "#", icon: IconShare3 },
  { name: "Recycle Bin", url: "#", icon: IconTrash },
]

export function NavMenu({ items }: { items: MenuItem[] }) {
  const { isMobile } = useSidebar()
  const [showMore, setShowMore] = React.useState(false)

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Menu</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction
                  showOnHover
                  className="data-[state=open]:bg-accent rounded-sm"
                >
                  <IconDots />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-24 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem>
                  <IconFolder />
                  <span>Open</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconShare3 />
                  <span>Share</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <IconTrash />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem>
          <SidebarMenuButton
            className="text-sidebar-foreground/70"
            onClick={() => setShowMore((v) => !v)}
            aria-expanded={showMore}
            aria-controls="menu-more-list"
          >
            <IconDots className="text-sidebar-foreground/70" />
            <span>{showMore ? "Less" : "More"}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        {showMore && (
          <div id="menu-more-list" className="mt-1 space-y-0.5">
            {moreMenuItems.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild className="pl-5 gap-2 text-sm">
                  <a href={item.url}>
                    <item.icon className="size-4" />
                    <span>{item.name}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </div>
        )}
      </SidebarMenu>
    </SidebarGroup>
  )
}

// Default exported items to be used in sidebar data
export const baseMenuItems: MenuItem[] = [
  { name: "Event", url: "#", icon: IconCalendarEvent },
  { name: "Insight", url: "#", icon: IconSparkles },
  { name: "Starred", url: "#", icon: IconStar },
]
