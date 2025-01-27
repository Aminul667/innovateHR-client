import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AbsenceFilter from "./AbsenceFilter";
import AbsentIndicator from "./AbsentIndicator";
import AdminCarousel from "./AdminCarousel";
import AdminOnShift from "./AdminOnShift";

const AdminTabs = () => {
  return (
    <div>
      <Tabs defaultValue="absences" className="">
        <TabsList className="">
          <TabsTrigger value="absences">Current absences</TabsTrigger>
          <TabsTrigger value="status">Current status</TabsTrigger>
          <TabsTrigger value="shift">Currently on shift</TabsTrigger>
        </TabsList>
        <TabsContent value="absences">
          <div className="">
            {/* filter and calender */}
            <div>
              <AbsenceFilter />
            </div>
            <div className="flex justify-between gap-4 mt-5">
              <AbsentIndicator />
              <div className="w-[75%] flex items-center justify-center">
                <AdminCarousel />
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="status">Status will be here</TabsContent>
        <TabsContent value="shift">
          <AdminOnShift />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminTabs;
