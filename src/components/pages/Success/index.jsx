import { Trophy } from "lucide-react";

export default function Success() {
    return (
        <div className="w-full max-w-[450px] bg-gray-200 p-4 rounded text-center">
            <Trophy size={60} color="#22c55e" className="mx-auto my-8" />
            <h2 className="text-xl font-bold text-green-500 mb-2">Your reservation is done!</h2>
            <p className="text-gray-500 w-[200px] mx-auto mb-4">You will recieve an email with the confirmation and aditional data. <br /><br /> <span className="text-green-500 font-bold">Enjoy your stay!</span></p>
        </div>
    )
}