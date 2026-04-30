import "./App.css";
import { Button } from "@/components/ui/button";
import ProgressBar from "./components/assets/ProgressBar";
import ButtonsBar from "./components/assets/ButtonsBar";

function App() {
  return (
    <div className="min-h-screen w-screen p-4 flex justify-center items-center bg-gray-300">
      <div className="bg-white rounded shadow-md w-full max-w-[600px] h-[600px] px-4 py-8 mx-auto flex flex-col items-center justify-between gap-8">
        <ProgressBar />

        <ButtonsBar />
      </div>
    </div>
  );
}

export default App;
