import React from "react";
import { SidebarInset } from "@/components/ui/sidebar";

import DashboardNavbar from "../components/Shared/DashboardNavbar";
import AdminHome from "../components/AdminDashboard/AdminHome/AdminHome";

const page = () => {
  return (
    <div className="flex w-full">
      {/* <AppSidebar /> */}
      <SidebarInset>
        <DashboardNavbar />
        <AdminHome />
      </SidebarInset>
    </div>
  );
};

export default page;
