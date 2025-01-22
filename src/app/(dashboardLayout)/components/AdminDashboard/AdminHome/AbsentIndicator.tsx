import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

const leaveTypes = [
  { leaveName: "Annual Leave", numberOfDays: 2, color: "bg-blue-300" },
  { leaveName: "Sickness", numberOfDays: 5, color: "bg-orange-300" },
  { leaveName: "TOIL", numberOfDays: 1, color: "bg-indigo-300" },
  { leaveName: "Lateness", numberOfDays: 3, color: "bg-red-300" },
  { leaveName: "Other", numberOfDays: 7, color: "bg-lime-300" },
];

const AbsentIndicator = () => {
  return (
    <Card className="w-[25%] p-3 flex flex-col gap-2">
      {leaveTypes.map((item, index) => (
        <div
          key={index}
          className={cn(
            "flex justify-between items-center rounded-xl px-4 py-1 bg-",
            item.color
          )}
        >
          <p className="text-sm font-semibold">{item.leaveName}</p>
          <p className="text-sm font-semibold">{item.numberOfDays}</p>
        </div>
      ))}
    </Card>
  );
};

export default AbsentIndicator;
