import { Button } from "@/components/ui/button";

export default function ButtonsBar() {
    return (
        <div className="w-full max-w-[450px] flex justify-between">
            <Button className="w-[120px] bg-black text-white cursor-pointer">PREVIOUS</Button>
            <Button className="w-[120px] bg-blue-500 cursor-pointer">NEXT</Button>
        </div>
    )
}