"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { TOptions } from "@/types";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useEffect, useState } from "react";

const options: TOptions[] = [
  { value: "management", select: "Management" },
  { value: "developer", select: "Developer" },
  { value: "data-scientist", select: "Data Scientist" },
];

const AbsenceFilter = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date || new Date());
    setIsCalendarOpen(false);
  };

  //   const formData = {
  //     selectedOption,
  //     selectedDate: format(selectedDate, "yyyy-MM-dd"),
  //   };

  useEffect(() => {
    const formData = {
      selectedOption,
      selectedDate: format(selectedDate, "yyyy-MM-dd"),
    };
    console.log(formData);
  }, [selectedOption, selectedDate]);

  return (
    <div className="flex gap-5 mt-5">
      <div className="w-[200px]">
        <Select onValueChange={setSelectedOption} value={selectedOption}>
          <SelectTrigger id="option-select">
            <SelectValue placeholder="Select team" />
          </SelectTrigger>
          <SelectContent>
            {options.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.select}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal",
                !selectedDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {selectedDate ? (
                format(selectedDate, "PPP")
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default AbsenceFilter;
