"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <SidebarProvider>{children}</SidebarProvider>
    </section>
  );
};

export default AdminLayout;
