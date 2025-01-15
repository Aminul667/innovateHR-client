import { Metadata } from "next";
import { ReactNode } from "react";
import Navbar from "../_components/Shared/Navbar/Navbar";
import IHSidebar from "../_components/UI/Sidebar/IHSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to InnovativeHR home",
};

const CommonLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <SidebarProvider>
      <IHSidebar />
      <div className="w-full">
        <Navbar />
        {/* <SidebarTrigger /> */}
        {children}
        <div>
          <h2>Footer</h2>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default CommonLayout;
