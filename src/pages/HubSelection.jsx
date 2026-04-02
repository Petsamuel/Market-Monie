import { useState } from "react";
import { useAppStore } from "../store/useAppStore";
import { hubsByState } from "../data/hubs";
import { useNavigate } from "react-router-dom";
import { PiWarningCircle } from "react-icons/pi";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuBuilding2 } from "react-icons/lu";

const HubSelection = () => {
    const selectedState = useAppStore((state) => state.state);
    const setHub = useAppStore((state) => state.setHub);
    const navigate = useNavigate();
    const [selectedHubLocal, setSelectedHubLocal] = useState("");

    const hubs = hubsByState[selectedState] || [];

    const handleContinue = () => {
        if (selectedHubLocal) {
            setHub(selectedHubLocal);
            alert(`Successfully applied to: ${selectedHubLocal}`);
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <div className="text-xl text-green-800 p-2 w-10 rounded-full bg-green-100 mb-4"><LuBuilding2 /></div>
            <h1 className="text-xl font-sm font-bold mb-4">Select a Hub Near You </h1>
            <h3 className="text-sm text-gray-600 font-semibold mb-4">Hubs in <span className="text-black font-bold">{selectedState}</span></h3>

            {hubs.length > 0 ? (
                <div className="flex flex-col gap-4">
                    <div className="space-y-3">
                        {hubs.map((hub) => (
                            <label
                                key={hub.name}
                                className={`flex items-start justify-between p-4 border rounded-xl cursor-pointer transition-all duration-200 ${
                                    selectedHubLocal === hub.name
                                        ? "border-green-600 bg-green-50"
                                        : "border-gray-200 hover:border-green-200 hover:bg-gray-50"
                                }`}
                            >
                                <div className="flex flex-col gap-1 pr-4">
                                    <span className={`text-sm font-bold ${selectedHubLocal === hub.name ? "text-green-900" : "text-gray-800"}`}>
                                        {hub.name}
                                    </span>
                                    <span className={`text-xs ${selectedHubLocal === hub.name ? "text-green-700" : "text-gray-500"}`}>
                                        {hub.address}
                                    </span>
                                </div>
                                <input
                                    type="radio"
                                    name="hub"
                                    value={hub.name}
                                    checked={selectedHubLocal === hub.name}
                                    onChange={(e) => setSelectedHubLocal(e.target.value)}
                                    className="mt-1 w-4 h-4 text-green-600 focus:ring-green-500 accent-green-600 flex-shrink-0"
                                />
                            </label>
                        ))}
                    </div>
                    
                    <button
                        onClick={handleContinue}
                        disabled={!selectedHubLocal}
                        className={`w-full p-3 rounded-xl text-white font-semibold transition-all duration-200 ${
                            selectedHubLocal 
                            ? "bg-green-800 hover:bg-green-900 shadow-md" 
                            : "bg-gray-300 cursor-not-allowed"
                        }`}
                    >
                        Continue
                    </button>
                    
                    <button
                        onClick={() => navigate("/")}
                        className="text-sm text-gray-500 text-center hover:text-green-600 underline"
                    >
                        Go back and change state
                    </button>
                </div>
            ) : (
                <div>
                    <div>
                        <div className="flex gap-2 items-start justify-center border-2 border-yellow-200 bg-yellow-100 rounded-xl p-4 mb-4">
                            <div className="text-lg text-yellow-900 font-bold pt-1"><PiWarningCircle /></div>
                            <div className="flex flex-col gap-2 text-yellow-800">
                                <div className="font-bold text-md text-yellow-900">
                                    No hub in this state yet
                                </div>
                                <div className="text-sm">
                                    We Currently do not have a MarketMonie hub in your state, but we are working on it. You can still proceed with your application, and an agent will reach out to you within <span className="font-bold">72 hours to 1 week</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-6">
                        <div className="flex gap-2 items-center text-gray-600">
                            <div className="text-green-500 text-sm"><FaRegCircleCheck /></div>
                            <div className="text-sm">Your application will be processed remotely</div>
                        </div>
                        <div className="flex gap-2 items-center text-gray-600">
                            <div className="text-green-500 text-sm"><FaRegCircleCheck /></div>
                            <div className="text-sm">An agent will call your registered number</div>
                        </div>
                        <div className="flex gap-2 items-center text-gray-600">
                            <div className="text-green-500 text-sm"><FaRegCircleCheck /></div>
                            <div className="text-sm">Verification can be done via video call</div>
                        </div>
                    </div>

                    <button
                        onClick={() => navigate("/")}
                        className="text-blue-600 w-full border p-2.5 rounded-xl bg-green-800 text-white text-sm hover:bg-green-900 hover:text-white hover:border-green-900 transition-colors duration-400 "
                    >
                        Continue Anyway
                    </button>

                </div>
            )}
        </div>
    );
};

export default HubSelection;
