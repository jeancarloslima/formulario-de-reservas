import { Button } from "@/components/ui/button";

export default function ButtonsBar() {
    return (
        <div className="w-full max-w-[450px] flex justify-between">
            <Button className="w-[120px] bg-black text-white cursor-pointer hover:bg-gray-700">PREVIOUS</Button>
            <Button className="w-[120px] bg-blue-500 cursor-pointer hover:bg-blue-400">NEXT</Button>
        </div>
    )
}