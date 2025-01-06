"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Tururum",
    email: "hollywoodtgonzalez@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Premier Chilean League",
      logo: GalleryVerticalEnd,
      plan: "PRO",
    },
    {
      name: "Calcio Serie A",
      logo: AudioWaveform,
      plan: "No tan Pro",
    },
    {
      name: "Torneo CEI",
      logo: Command,
      plan: "Menos Pro",
    },
  ],
  navMain: [
    {
      title: "Mis estadisticas",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Mi ultimo partido",
          url: "#",
        },
        {
          title: "Partidos anteriores",
          url: "#",
        },

      ],
    },
    {
      title: "Mis equipos",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Ultimo partido",
          url: "#",
        },
        {
          title: "Partidos anteriores",
          url: "#",
        },

      ],
    },
    {
      title: "Algo por aca",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Algo 1",
          url: "#",
        },
        {
          title: "Algo 2",
          url: "#",
        },
        {
          title: "Algo 3",
          url: "#",
        },
        {
          title: "Algo 4",
          url: "#",
        },
      ],
    },

    // {
    //   title: "Settings",
    //   url: "#",
    //   icon: Settings2,
    //   items: [
    //     {
    //       title: "General",
    //       url: "#",
    //     },
    //     {
    //       title: "Team",
    //       url: "#",
    //     },
    //     {
    //       title: "Billing",
    //       url: "#",
    //     },
    //     {
    //       title: "Limits",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
  nuevos: [
    {
      name: "Nuevo equipo",
      url: "#",
      icon: Frame,
    },
    {
      name: "Nuevo partido",
      url: "#",
      icon: PieChart,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.nuevos} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
