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
  const [error, setError] = useState("");

  const handleDatesChoose = () => {
    if (!dateCheckIn || !dateCheckOut) {
      setError("Choose the dates");
      return;
    }

    if (dateCheckIn >= dateCheckOut) {
      setError(
        "The check-out date can't be the same or inferior to the check-in date",
      );
      return;
    }

    setError("");
    updateData({ checkIn: dateCheckIn, checkOut: dateCheckOut });
    nextScreen();
  };

  return (
    <div className="h-full flex flex-col justify-between items-center">
      {error && (
        <p className="block p-4 bg-red-500 text-white font-medium text-center text-sm rounded absolute top-6">
          {error}
        </p>
      )}
      <div className="w-full max-w-[400px] flex justify-between gap-6 flex-wrap">
        <div className="flex flex-col items-center gap-4 w-[180px] mx-auto">
          <h2>Pick the Check-in date:</h2>
          <Popover>
            <PopoverTrigger asChild>
              <Button className="w-[120px] bg-blue-500 hover:bg-blue-400 cursor-pointer rounded-sm">
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

        <div className="flex flex-col items-center gap-4 w-[180px] mx-auto">
          <h2>Pick the Check-out date:</h2>
          <Popover>
            <PopoverTrigger asChild>
              <Button className="w-[120px] bg-blue-500 hover:bg-blue-400 cursor-pointer rounded-sm">
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
