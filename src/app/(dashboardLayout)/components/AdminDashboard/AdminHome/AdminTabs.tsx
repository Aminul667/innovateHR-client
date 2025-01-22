import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AbsenceFilter from "./AbsenceFilter";

const AdminTabs = () => {
  return (
    <div>
      <Tabs defaultValue="absences" className="w-[400px]">
        <TabsList className="bg-gray-300">
          <TabsTrigger value="absences">Current absences</TabsTrigger>
          <TabsTrigger value="status">Current status</TabsTrigger>
          <TabsTrigger value="shift">Currently on shift</TabsTrigger>
        </TabsList>
        <TabsContent value="absences">
          <div>
            {/* filter and calender */}
            <div>
              <AbsenceFilter />
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
