import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { useReservationStore } from "../../contexts/useReservationStore";
import { format } from "date-fns";

export default function StepDates() {
  const { reservationData, nextScreen, updateData } = useReservationStore();
  const [dateCheckIn, setDateCheckIn] = useState(
    reservationData.checkIn ? new Date(reservationData.checkIn) : undefined,
  );
  const [dateCheckOut, setDateCheckOut] = useState(
    reservationData.checkOut ? new Date(reservationData.checkOut) : undefined,
  );

  const handleDatesChoose = () => {
    if (!dateCheckIn || !dateCheckOut) {
      alert("Choose the dates");
    } else if (dateCheckIn >= dateCheckOut) {
      alert(
        "The check-out date can't be the same or inferior to the check-in date",
      );
    } else {
      updateData({ checkIn: dateCheckIn, checkOut: dateCheckOut });
      nextScreen();
    }
  };

  return (
    <div className="h-full flex flex-col justify-between items-center">
      <div className="w-full max-w-[400px] flex justify-between">
        <div className="flex flex-col items-center gap-4">
          <h2>Pick the Check-in date:</h2>
          <Popover>
            <PopoverTrigger asChild>
              <Button className="w-[140px] bg-blue-500 hover:bg-blue-400 cursor-pointer rounded-sm">
                {dateCheckIn ? (
                  format(dateCheckIn, "PPP")
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={dateCheckIn}
                onSelect={setDateCheckIn}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex flex-col items-center gap-4">
          <h2>Pick the Check-out date:</h2>
          <Popover>
            <PopoverTrigger asChild>
              <Button className="w-[140px] bg-blue-500 hover:bg-blue-400 cursor-pointer rounded-sm">
                {dateCheckOut ? (
                  format(dateCheckOut, "PPP")
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={dateCheckOut}
                onSelect={setDateCheckOut}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="w-full max-w-[450px] flex justify-between">
        <Button
          className={`w-[120px] bg-gray-500 text-white pointer-events-none`}
        >
          PREVIOUS
        </Button>
        <Button
          className={`w-[120px] cursor-pointer bg-blue-500 hover:bg-blue-400`}
          onClick={handleDatesChoose}
        >
          NEXT
        </Button>
      </div>
    </div>
  );
}
