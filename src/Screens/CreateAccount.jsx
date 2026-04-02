import React from 'react'

const CreateAccount = () => {
  return (
    <section className='w-full h-screen flex items-center justify-center'>
        <div className='rounded-2xl bg-white border border-white min-w-1/3 flex flex-col items-center gap-5 p-4'>
            <img src="/public/marketmonie.png" className='w-40' alt="" />
            <h3 className='w-full  rounded-t-2xl text-center py-3 font-semibold'>How would you like to continue?</h3>
            <p className='text-slate-400 text-center'>Create an account to track your application, or continue as a guest.</p>
        </div>

    </section>
  )
}

export default CreateAccount


import { useState } from "react";
import { useAppStore } from "../store/useAppStore";
import { branchAddresses } from "../store/Data";
import { useNavigate } from "react-router-dom";
import { PiWarningCircle } from "react-icons/pi";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuBuilding2 } from "react-icons/lu";

const HubSelection = () => {
    const selectedState = useAppStore((state) => state.state);
    const setHub = useAppStore((state) => state.setHub);
    const navigate = useNavigate();
    const [selectedHubLocal, setSelectedHubLocal] = useState("");

    // ✅ transform dataset
    const hubs =
        branchAddresses[selectedState]?.map((address, index) => ({
            name: `${selectedState} Hub ${index + 1}`,
            address,
        })) || [];

    const handleContinue = () => {
        if (selectedHubLocal) {
            setHub(selectedHubLocal);
            alert(`Successfully applied to: ${selectedHubLocal}`);
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <div className="text-xl text-green-800 p-2 w-10 rounded-full bg-green-100 mb-4">
                <LuBuilding2 />
            </div>

            <h1 className="text-xl font-bold mb-4">Select a Hub Near You</h1>

            <h3 className="text-sm text-gray-600 font-semibold mb-4">
                Hubs in <span className="text-black font-bold">{selectedState}</span>
            </h3>

            {hubs.length > 0 ? (
                <div className="flex flex-col gap-4">
                    <div className="space-y-3">
                        {hubs.map((hub) => (
                            <label
                                key={hub.address}
                                className={`flex items-start justify-between p-4 border rounded-xl cursor-pointer ${
                                    selectedHubLocal === hub.name
                                        ? "border-green-600 bg-green-50"
                                        : "border-gray-200 hover:border-green-200 hover:bg-gray-50"
                                }`}
                            >
                                <div className="flex flex-col gap-1 pr-4">
                                    <span className="text-sm font-bold">
                                        {hub.name}
                                    </span>
                                    <span className="text-xs text-gray-500">
                                        {hub.address}
                                    </span>
                                </div>

                                <input
                                    type="radio"
                                    name="hub"
                                    value={hub.name}
                                    checked={selectedHubLocal === hub.name}
                                    onChange={(e) => setSelectedHubLocal(e.target.value)}
                                    className="mt-1 w-4 h-4 accent-green-600"
                                />
                            </label>
                        ))}
                    </div>

                    <button
                        onClick={handleContinue}
                        disabled={!selectedHubLocal}
                        className={`w-full p-3 rounded-xl text-white font-semibold ${
                            selectedHubLocal
                                ? "bg-green-800 hover:bg-green-900"
                                : "bg-gray-300 cursor-not-allowed"
                        }`}
                    >
                        Continue
                    </button>

                    <button
                        onClick={() => navigate("/")}
                        className="text-sm text-gray-500 underline"
                    >
                        Go back and change state
                    </button>
                </div>
            ) : (
                <div className="border p-4 rounded-xl bg-yellow-100 text-yellow-800">
                    No hubs available for this state.
                </div>
            )}
        </div>
    );
};

export default HubSelection;