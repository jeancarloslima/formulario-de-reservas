import { Button } from "@/components/ui/button";
import { useReservationStore } from "../../contexts/useReservationStore";

export default function ButtonsBar() {
    const nextScreen = useReservationStore((state) => state.nextScreen)
    const previousScreen = useReservationStore((state) => state.previousScreen)

    return (
        <div className="w-full max-w-[450px] flex justify-between">
            <Button className="w-[120px] bg-black text-white cursor-pointer hover:bg-gray-700" onClick={previousScreen}>PREVIOUS</Button>
            <Button className="w-[120px] bg-blue-500 cursor-pointer hover:bg-blue-400" onClick={nextScreen}>NEXT</Button>
        </div>
    )
}