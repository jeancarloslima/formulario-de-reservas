import { Progress } from "@/components/ui/progress";
import { useReservationStore } from "../../contexts/useReservationStore";

export default function ProgressBar() {
    const currentScreen = useReservationStore((state) => state.currentScreen);
    const progress = currentScreen * 25;

    return <Progress value={progress} className={`w-[80%] max-w-[300px] h-[8px] bg-gray-300 ${currentScreen === 4 ? "[&>*]:bg-green-500" : "[&>*]:bg-blue-500"}`} />
}