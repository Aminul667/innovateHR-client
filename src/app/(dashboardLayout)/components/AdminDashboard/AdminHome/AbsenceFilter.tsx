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
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { useEffect, useState } from "react";

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
    <>
      <div>
        <label
          htmlFor="option-select"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Select an option
        </label>
        <Select onValueChange={setSelectedOption} value={selectedOption}>
          <SelectTrigger id="option-select">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label
          htmlFor="date-picker"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Select a date
        </label>
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
    </>
  );
};

export default AbsenceFilter;
