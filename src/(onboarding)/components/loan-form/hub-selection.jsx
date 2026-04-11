import { FiMapPin, FiCheckCircle, FiChevronRight } from "react-icons/fi";
import { hubsByState } from "../../../data/hubs";

const HubSelection = ({ selectedState, selectedHub, onSelectHub, onContinue }) => {
  const hubs = hubsByState[selectedState] || [];
  const hasHubs = hubs.length > 0;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-left font-poppins">
        <div className="inline-flex items-center justify-center p-3 bg-emerald-50 rounded-xl mb-6 text-emerald-600">
          <FiMapPin size={24} />
        </div>
        
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Select Your Hub
        </h2>
        <p className="mt-3 text-gray-600 text-[15px] leading-relaxed">
          {hasHubs 
            ? "Choose the nearest Market Monie hub to your location in " + selectedState + "."
            : "We currently do not have a Market Monie hub in " + selectedState + "."}
        </p>
      </div>

      <div className="mt-10 space-y-4">
        {hasHubs ? (
          <div className="grid grid-cols-1 gap-4">
            {hubs.map((hub, index) => (
              <button
                key={index}
                onClick={() => onSelectHub(hub)}
                className={`flex flex-col text-left p-5 rounded-2xl border-2 transition-all group ${
                  selectedHub?.name === hub.name 
                    ? "border-emerald-600 bg-emerald-50/50 shadow-lg shadow-emerald-100" 
                    : "border-gray-100 bg-white hover:border-emerald-200 hover:bg-emerald-50/30"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-bold text-lg ${selectedHub?.name === hub.name ? "text-emerald-700" : "text-gray-900"}`}>
                    {hub.name}
                  </span>
                  {selectedHub?.name === hub.name && <FiCheckCircle className="text-emerald-600" size={20} />}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed font-sans">
                  {hub.address}
                </p>
              </button>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center bg-amber-50 rounded-2xl border-2 border-amber-100 border-dashed">
             <div className="inline-flex items-center justify-center h-16 w-16 bg-amber-100 rounded-full text-amber-600 mb-4 mx-auto">
                <FiMapPin size={32} />
             </div>
             <p className="text-amber-900 font-semibold mb-2">No Hub Available in {selectedState}</p>
             <p className="text-sm text-amber-700 leading-relaxed italic">
                You can still proceed with your application, and an agent will reach out to you within 72 hours to 1 week.
             </p>
          </div>
        )}

        <button
          onClick={onContinue}
          disabled={hasHubs && !selectedHub}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-3 py-4 text-sm font-semibold leading-6 text-white shadow-xl shadow-emerald-200/50 hover:bg-emerald-500 disabled:opacity-50 transition-all font-poppins mt-8 group"
        >
          {hasHubs ? "Select Hub & Continue" : "Continue anyway"}
          <FiChevronRight className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default HubSelection;
