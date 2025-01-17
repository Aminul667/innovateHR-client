import type { Metadata } from "next";
import AdminLayout from "./layout/AdminLayout";

export const metadata: Metadata = {
  title: "Dashboard - Apollo Gears",
  description: "Next Level Riding Sharing Service",
};

const AdminDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminLayout>{children}</AdminLayout>
    </div>
  );
};

export default AdminDashboardLayout;
