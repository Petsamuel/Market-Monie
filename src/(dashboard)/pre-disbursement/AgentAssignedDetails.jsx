import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiUserCheck, FiPhone, FiCopy, FiInfo } from 'react-icons/fi';

const AgentAssignedDetails = () => {
  const navigate = useNavigate();

  // Mock data matching the acceptance criteria
  const agentDetails = {
    name: 'Chinedu Okafor',
    phone: '+234 812 345 6789',
    id: 'MM-AGT-0842',
    status: 'Assigned',
    dateAssigned: '26/05/2026',
    purpose: 'Loan Application Review'
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 font-poppins pb-10">
      {/* Header Navigation */}
      <div className="flex items-center gap-3">
        <button 
          onClick={() => navigate(-1)}
          className="h-10 w-10 flex items-center justify-center rounded-xl bg-white border border-gray-100 text-gray-600 hover:text-emerald-600 hover:border-emerald-100 transition-all shadow-xs cursor-pointer"
        >
          <FiArrowLeft size={18} />
        </button>
        <div>
          <h2 className="text-xl font-bold text-gray-900 leading-tight">Assigned Agent Details</h2>
          <p className="text-[11px] text-gray-400 font-medium">Your onboarding and verification specialist</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8 shadow-sm">
        <div className="flex flex-col items-center text-center pb-8 border-b border-gray-100 mb-8">
          <div className="h-20 w-20 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border-4 border-blue-100/50">
            <FiUserCheck size={32} />
          </div>
          <h3 className="text-lg font-bold text-gray-900">{agentDetails.name}</h3>
          <span className="px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold rounded-full mt-2 uppercase tracking-wider">
            Status: {agentDetails.status}
          </span>
        </div>

        <div className="space-y-6">
          <h4 className="text-sm font-bold text-gray-800">Agent Information</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-2xl flex flex-col gap-1">
              <span className="text-[11px] text-gray-500 font-medium">Agent Name</span>
              <span className="text-sm font-bold text-gray-900">{agentDetails.name}</span>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-2xl flex flex-col gap-1">
              <span className="text-[11px] text-gray-500 font-medium">Agent ID</span>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-gray-900">{agentDetails.id}</span>
                <FiCopy className="text-gray-400 cursor-pointer hover:text-gray-600" size={14} />
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-2xl flex flex-col gap-1">
              <span className="text-[11px] text-gray-500 font-medium">Phone Number</span>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-gray-900">{agentDetails.phone}</span>
                <a href={`tel:${agentDetails.phone.replace(/\s/g, '')}`} className="text-emerald-600 hover:text-emerald-700 p-1 bg-emerald-50 rounded-md">
                  <FiPhone size={14} />
                </a>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-2xl flex flex-col gap-1">
              <span className="text-[11px] text-gray-500 font-medium">Date Assigned</span>
              <span className="text-sm font-bold text-gray-900">{agentDetails.dateAssigned}</span>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-2xl flex flex-col gap-1 md:col-span-2">
              <span className="text-[11px] text-gray-500 font-medium">Purpose</span>
              <span className="text-sm font-bold text-gray-900">{agentDetails.purpose}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-blue-50/50 rounded-2xl flex items-start gap-3">
          <FiInfo className="text-blue-600 shrink-0 mt-0.5" size={16} />
          <p className="text-xs text-blue-800/80 leading-relaxed font-medium">
            This agent will physically visit your store for verification. Always ensure you confirm their Agent ID before providing any sensitive documents.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgentAssignedDetails;
