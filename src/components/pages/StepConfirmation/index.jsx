import { Button } from "@/components/ui/button";
import { useReservationStore } from "../../contexts/useReservationStore";

export default function StepConfirmation() {
  const { reservationData, nextScreen, previousScreen } = useReservationStore();

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="flex flex-col gap-6">
        <h2 className="font-bold text-center text-green-500">
          Confirm the data
        </h2>
        <div className="flex justify-between">
          <h2 className="font-bold">Check-in:</h2>
          <p>{reservationData.checkIn}</p>
        </div>

        <div className="flex justify-between">
          <h2 className="font-bold">Check-out:</h2>
          <p>{reservationData.checkOut}</p>
        </div>

        <div className="flex justify-between">
          <h2 className="font-bold">Room ID:</h2>
          <p>{reservationData.roomId}</p>
        </div>

        <div className="flex justify-between">
          <h2 className="font-bold">Name:</h2>
          <p>{reservationData.name}</p>
        </div>

        <div className="flex justify-between">
          <h2 className="font-bold">Email:</h2>
          <p>{reservationData.email}</p>
        </div>
      </div>
      <div className="w-full max-w-[450px] flex justify-between">
        <Button
          className={`w-[120px] bg-black text-white cursor-pointer hover:bg-gray-700`}
          onClick={previousScreen}
        >
          PREVIOUS
        </Button>
        <Button
          className={`w-[120px] cursor-pointer bg-green-500 hover:bg-green-400`}
          onClick={nextScreen}
        >
          CONFIRM
        </Button>
      </div>
    </div>
  );
}
