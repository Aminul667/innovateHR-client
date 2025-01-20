"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { AppSidebar } from "../../components/adminDashboardNavbar/app-sidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <SidebarProvider>
        <AppSidebar />
        {children}
      </SidebarProvider>
    </section>
  );
};

export default AdminLayout;
