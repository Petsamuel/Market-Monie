import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiXCircle } from 'react-icons/fi';

const DeclinedDetails = () => {
  const navigate = useNavigate();

  // Mock data matching the acceptance criteria
  const declinedDetails = {
    firstName: 'Ayomide',
    reason: 'credit assessment constraints and incomplete physical shop verification',
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 font-poppins pb-10">
      <div className="flex items-center gap-3">
        <button 
          onClick={() => navigate(-1)}
          className="h-10 w-10 flex items-center justify-center rounded-xl bg-white border border-gray-100 text-gray-600 hover:text-rose-600 hover:border-rose-100 transition-all shadow-xs cursor-pointer"
        >
          <FiArrowLeft size={18} />
        </button>
        <div>
          <h2 className="text-xl font-bold text-gray-900 leading-tight">Loan Declined</h2>
          <p className="text-[11px] text-gray-400 font-medium">Application unsuccessful</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8 shadow-sm max-w-2xl mx-auto">
        <div className="flex flex-col items-center text-center pb-8 border-b border-gray-100 mb-8">
          <div className="h-20 w-20 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mb-4 border-4 border-rose-100/50 shadow-sm shadow-rose-600/10">
            <FiXCircle size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Loan Declined</h3>
        </div>

        <div className="space-y-6 text-left">
          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-sm text-gray-700 leading-loose">
            <p>Dear {declinedDetails.firstName},</p>
            <p className="mt-4">
              We’re sorry, your loan application was not approved at this time due to <span className="font-bold text-rose-600">{declinedDetails.reason}</span>. 
              Please contact your assigned agent for guidance on the next steps and reapplication support.
            </p>
            <p className="mt-8 text-gray-500">Kind regards,</p>
            <p className="font-bold text-gray-900">Market Monie</p>
          </div>
          
          <div className="flex justify-center mt-6">
            <button 
              onClick={() => navigate('/dashboard/support')}
              className="px-6 py-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-bold text-sm rounded-xl transition-colors cursor-pointer"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeclinedDetails;
