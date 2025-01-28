"use client";

import * as React from "react";
import {
  FolderOpen,
  BookOpen,
  Users,
  Bot,
  Award,
  ReceiptText,
  Target,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { NavProjects } from "./nav-projects";
import { NavMain } from "./nav-main";

// This is sample data.
const data = {
  projects: [
    {
      name: "Directory",
      url: "#",
      icon: FolderOpen,
    },
    {
      name: "Policies",
      url: "#",
      icon: BookOpen,
    },
    {
      name: "Recruitment",
      url: "#",
      icon: Users,
    },
    {
      name: "Onboarding",
      url: "#",
      icon: Bot,
    },
    {
      name: "Rewards",
      url: "#",
      icon: Award,
    },
    {
      name: "Emergency contact",
      url: "#",
      icon: ReceiptText,
    },
    {
      name: "Performance reviews",
      url: "#",
      icon: Target,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* <SidebarHeader>Logo</SidebarHeader> */}
      <SidebarTrigger className="ml-2" />
      <SidebarContent>
        {/* <NavMain items={data.projects} /> */}
        <NavProjects projects={data.projects} />
      </SidebarContent>
    </Sidebar>
  );
}
