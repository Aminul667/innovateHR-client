"use client";

import React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { browser: "annual", visitors: 5, fill: "#F7AC25" },
  { browser: "sick", visitors: 3, fill: "#4B93E7" },
  { browser: "half", visitors: 2, fill: "#FA8072" },
  { browser: "available", visitors: 15, fill: "#40E0D0" },
];

const chartConfig = {
  visitors: {
    label: "Total",
  },
  annual: {
    label: "Annual Leave",
    color: "#F7AC25",
  },
  sick: {
    label: "Sick Leave",
    color: "hsl(var(--chart-2))",
  },
  half: {
    label: "Half Day Leave",
    color: "hsl(var(--chart-3))",
  },
  available: {
    label: "Available",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

const getFormattedDate = (): string => {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return now.toLocaleDateString("en-US", options);
};

const IHPieChart = () => {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);
  return (
    <Card className="flex flex-col w-full bg-colorBG">
      <CardHeader className="items-center pb-0">
        <CardTitle>Employee</CardTitle>
        <CardDescription>{getFormattedDate()}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total Employee
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  );
};

export default IHPieChart;
