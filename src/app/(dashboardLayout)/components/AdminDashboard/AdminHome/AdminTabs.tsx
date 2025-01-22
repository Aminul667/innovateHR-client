import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AbsenceFilter from "./AbsenceFilter";
import AbsentIndicator from "./AbsentIndicator";

const AdminTabs = () => {
  return (
    <div>
      <Tabs defaultValue="absences" className="">
        <TabsList className="bg-gray-300">
          <TabsTrigger value="absences">Current absences</TabsTrigger>
          <TabsTrigger value="status">Current status</TabsTrigger>
          <TabsTrigger value="shift">Currently on shift</TabsTrigger>
        </TabsList>
        <TabsContent value="absences" className="bg-white">
          <div className="">
            {/* filter and calender */}
            <div>
              <AbsenceFilter />
            </div>
            <div className="flex justify-between gap-4 mt-5">
              <AbsentIndicator />
              <div className="h-6 w-[75%] bg-red-500"></div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="status">Change your password here.</TabsContent>
        <TabsContent value="shift">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminTabs;
