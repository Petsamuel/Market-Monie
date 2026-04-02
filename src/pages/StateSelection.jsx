import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../store/useAppStore";

const StateSelection = () => {
  const [selectedState, setSelectedState] = useState("");
  const setStateGlobal = useAppStore((state) => state.setState);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!selectedState) {
      alert("Please select a state");
      return;
    }

    setStateGlobal(selectedState);
    navigate("/apply/hub");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Select Your State</h1>

      <select
        className="w-full border p-2 rounded mb-4"
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
      >
        <option value="">Select your State</option>
        <option value="Lagos">Lagos</option>
        <option value="Ogun">Ogun</option>
        <option value="Abuja">Abuja</option>
      </select>

      <button
        onClick={handleContinue}
        className="w-full bg-blue-600 text-white p-2 rounded"
      >
        Continue
      </button>
    </div>
  );
};

export default StateSelection;