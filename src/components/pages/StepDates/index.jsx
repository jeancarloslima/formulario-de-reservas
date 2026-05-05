import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

export default function StepDates() {
  const [date, setDate] = useState();

  return (
    <div className="flex justify-between">
      <div className="flex flex-col items-center gap-4">
        <h2>Pick the Check-in date:</h2>
        <Popover>
          <PopoverTrigger asChild>
            <Button className="w-[120px] cursor-pointer">
              {date ? date : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              defaultMonth={date}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex flex-col items-center gap-4">
        <h2>Pick the Check-out date:</h2>
        <Popover>
          <PopoverTrigger asChild>
            <Button className="w-[120px] cursor-pointer">
              {date ? date : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              defaultMonth={date}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
