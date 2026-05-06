import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useReservationStore } from "../../contexts/useReservationStore";

export default function StepRooms() {
  const { reservationData, nextScreen, previousScreen, updateData } = useReservationStore();
  const [roomId, setRoomId] = useState(reservationData.roomId || 1);

  const handleRoomChoose = () => {
    updateData({ roomId });
    nextScreen();
  }

  return (
    <div className="h-full flex flex-col justify-between items-center">
      <div className="w-full max-w-[400px]">
        <h2 className="font-bold mb-8">Rooms Options</h2>
        <ul>
          <li
            onClick={() => setRoomId(1)}
            className={`flex justify-between px-4 py-4 border-b-2 cursor-pointer ${roomId === 1 ? "bg-blue-400 text-white" : "hover:bg-blue-100"}`}
          >
            <h3>Room 1</h3>
            <p>$300/day</p>
          </li>
          <li
            onClick={() => setRoomId(2)}
            className={`flex justify-between px-4 py-4 border-b-2 cursor-pointer ${roomId === 2 ? "bg-blue-400 text-white" : "hover:bg-blue-100"}`}
          >
            <h3>Room 2</h3>
            <p>$500/day</p>
          </li>
          <li
            onClick={() => setRoomId(3)}
            className={`flex justify-between px-4 py-4 border-b-2 cursor-pointer ${roomId === 3 ? "bg-blue-400 text-white" : "hover:bg-blue-100"}`}
          >
            <h3>Room 3</h3>
            <p>$100/day</p>
          </li>
        </ul>
      </div>
      <div className="w-full max-w-[450px] flex justify-between">
        <Button
          className={`w-[120px] bg-black text-white cursor-pointer hover:bg-gray-700`}
          onClick={previousScreen}
        >
          PREVIOUS
        </Button>
        <Button
          className={`w-[120px] cursor-pointer bg-blue-500 hover:bg-blue-400`}
          onClick={handleRoomChoose}
        >
          CONFIRM
        </Button>
      </div>
    </div>
  );
}
