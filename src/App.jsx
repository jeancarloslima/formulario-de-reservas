import "./App.css";
import { useReservationStore } from "./components/contexts/useReservationStore";
import ProgressBar from "./components/assets/ProgressBar";
import StepDates from "./components/pages/StepDates";
import StepRooms from "./components/pages/StepRooms";
import StepPersonalData from "./components/pages/StepPersonalData";
import StepConfirmation from "./components/pages/StepConfirmation";
import Success from "./components/pages/Success";

function App() {
  const currentScreen = useReservationStore((state) => state.currentScreen);

  const renderStep = () => {
    switch (currentScreen) {
      case 1:
        return <StepDates />;
      case 2:
        return <StepRooms />;
      case 3:
        return <StepPersonalData />;
      case 4:
        return <StepConfirmation />;
      default:
        return <StepDates />;
    }
  };

  return (
    <div className="min-h-screen w-screen p-4 flex justify-center items-center bg-gray-300">
      {currentScreen <= 4 && (
        <div className="bg-white rounded shadow-md w-full max-w-[600px] h-[600px] px-8 py-12 mx-auto flex flex-col items-center gap-20">
          <ProgressBar />

          <div className="w-full max-w-[450px] h-full">{renderStep()}</div>
        </div>
      )}

      {currentScreen === 5 && <Success />}
    </div>
  );
}

export default App;
