import { useState } from "react";

export default function StepRooms() {
  const [room, setRoom] = useState(1);

  return (
    <div>
      <h2 className="font-bold mb-8">Rooms Options</h2>
      <ul>
        <li
          onClick={() => setRoom(1)}
          className={`flex justify-between px-4 py-4 border-b-2 cursor-pointer ${room === 1 ? "bg-blue-400 text-white" : "hover:bg-blue-100"}`}
        >
          <h3>Room 1</h3>
          <p>$300/day</p>
        </li>
        <li
          onClick={() => setRoom(2)}
          className={`flex justify-between px-4 py-4 border-b-2 cursor-pointer ${room === 2 ? "bg-blue-400 text-white" : "hover:bg-blue-100"}`}
        >
          <h3>Room 2</h3>
          <p>$500/day</p>
        </li>
        <li
          onClick={() => setRoom(3)}
          className={`flex justify-between px-4 py-4 border-b-2 cursor-pointer ${room === 3 ? "bg-blue-400 text-white" : "hover:bg-blue-100"}`}
        >
          <h3>Room 3</h3>
          <p>$100/day</p>
        </li>
      </ul>
    </div>
  );
}
