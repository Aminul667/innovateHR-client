import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tabs } from "@radix-ui/react-tabs";

const AdminSummary = () => {
  const today = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    weekday: "long", // Full name of the day
    day: "numeric", // Numeric day
    month: "short", // Short name of the month
    year: "numeric", // Full year
  }).format(today);

  return (
    <div>
      <h2 className="text-3xl font-semibold">Alex&apos;s Summary</h2>
      <Separator className="my-5" />
      <Tabs defaultValue="Leave" className="">
        <TabsList className="">
          <TabsTrigger value="Leave">Current Leave</TabsTrigger>
          <TabsTrigger value="Overtime">Current Overtime</TabsTrigger>
          <TabsTrigger value="E-learning">E-learning</TabsTrigger>
        </TabsList>
        <TabsContent value="Leave">
          <div>
            <h3 className="text-xl font-semibold mb-3">Annual leave</h3>
            <p>
              <span className="font-semibold">12 days</span> remaining
            </p>
            <p>
              <span className="font-semibold">20 days</span> allowance
            </p>
          </div>
          <div className="my-5">
            <p className="text-center mb-1">{(12 / 20) * 100}%</p>
            <Progress value={(12 / 20) * 100} />
          </div>
          <div>
            <p>
              <span className="font-semibold">Next up </span>
              Annual leave
            </p>
            <p className="font-semibold mt-5">{formattedDate}</p>
          </div>
        </TabsContent>
        <TabsContent value="Overtime">Overtime will be here</TabsContent>
        <TabsContent value="E-learning">E-learning will be here</TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSummary;
