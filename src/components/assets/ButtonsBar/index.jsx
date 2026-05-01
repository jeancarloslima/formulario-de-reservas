import { Button } from "@/components/ui/button";
import { useReservationStore } from "../../contexts/useReservationStore";

export default function ButtonsBar() {
  const currentScreen = useReservationStore((state) => state.currentScreen);
  const nextScreen = useReservationStore((state) => state.nextScreen);
  const previousScreen = useReservationStore((state) => state.previousScreen);

  return (
    <div className="w-full max-w-[450px] flex justify-between">
      <Button
        className={`w-[120px] bg-black text-white cursor-pointer hover:bg-gray-700 ${currentScreen === 1 ? "pointer-events-none bg-gray-400" : ""}`}
        onClick={previousScreen}
      >
        PREVIOUS
      </Button>
      <Button
        className={`w-[120px] cursor-pointer ${currentScreen === 4 ? "bg-green-500 hover:bg-green-400" : "bg-blue-500 hover:bg-blue-400"}`}
        onClick={nextScreen}
      >
        {currentScreen === 4 ? "CONFIRM" : "NEXT"}
      </Button>
    </div>
  );
}
