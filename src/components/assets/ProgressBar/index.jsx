import { Progress } from "@/components/ui/progress";
import { useState } from "react";

export default function ProgressBar() {
    const [progress, setProgress] = useState(1 * 25);

    return <Progress value={progress} className="w-[300px] h-[8px] bg-gray-300 [&>*]:bg-blue-500" />
}