import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import AdminTabs from "./AdminTabs";

const AdminHome = () => {
  return (
    <section className="mt-5 px-5">
      <div className="grid grid-rows-1 grid-cols-3 gap-5">
        {/* employee dashboard */}
        <div className="w-full  rounded-xl col-span-2 px-5 py-6 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
          <div className="flex justify-between">
            <h2 className="text-3xl font-semibold">Employee dashboard</h2>
            <Badge className="text-base">2 pending absences</Badge>
          </div>
          <Separator className="my-5" />
          <AdminTabs />
        </div>
        {/* my summary */}
        <div className="w-full h-24 bg-blue-600 rounded-xl"></div>
      </div>
    </section>
  );
};

export default AdminHome;

// Note: Look into this-> https://themeforest.net/search/hr%20dashboard
