import type { Metadata } from "next";
import AdminLayout from "./layout/AdminLayout";

export const metadata: Metadata = {
  title: "Dashboard - Innovate HR",
  description: "Innovate HR dashboard",
};

const AdminDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminLayout>{children}</AdminLayout>
    </div>
  );
};

export default AdminDashboardLayout;
