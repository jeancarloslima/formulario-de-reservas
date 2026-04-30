import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { useReservationStore } from "../../contexts/useReservationStore";

export default function ProgressBar() {
    const currentScreen = useReservationStore((state) => state.currentScreen);
    const [progress, setProgress] = useState(25);

    useEffect(() => {
        setProgress(currentScreen * 25);
    }, [currentScreen]);

    return <Progress value={progress} className="w-[80%] max-w-[300px] h-[8px] bg-gray-300 [&>*]:bg-blue-500" />
}