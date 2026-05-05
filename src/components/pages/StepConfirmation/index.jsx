import { useReservationStore } from "../../contexts/useReservationStore";

export default function StepConfirmation() {
  const reservationData = useReservationStore((state) => state.reservationData);

  return (
    <div className="w-full flex flex-col gap-6">
      <h2 className="font-bold text-center text-green-500">Confirm the data</h2>
      <div className="flex justify-between">
        <h2 className="font-bold">Check-in:</h2>
        <p>{reservationData.checkIn}</p>
      </div>

      <div className="flex justify-between">
        <h2 className="font-bold">Check-out:</h2>
        <p>{reservationData.checkOut}</p>
      </div>

      <div className="flex justify-between">
        <h2 className="font-bold">Guests:</h2>
        <p>{reservationData.guests}</p>
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
  );
}
