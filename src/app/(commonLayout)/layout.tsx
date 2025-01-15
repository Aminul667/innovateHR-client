import { Metadata } from "next";
import { ReactNode } from "react";
import Navbar from "../_components/Shared/Navbar/Navbar";
// import IHSidebar from "../_components/UI/Sidebar/IHSidebar";
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to InnovativeHR home",
};

const CommonLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      {/* <SidebarProvider>
        <IHSidebar />
        <SidebarTrigger />
      </SidebarProvider> */}
      <div>
        <Navbar />

        {children}
        <div>
          <h2>Footer</h2>
        </div>
      </div>
    </>
  );
};

export default CommonLayout;
