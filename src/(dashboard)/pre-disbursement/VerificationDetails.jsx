import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiClock } from 'react-icons/fi';

const VerificationDetails = () => {
  const navigate = useNavigate();

  // Mock data matching the acceptance criteria
  const verificationDetails = {
    firstName: 'Ayomide',
    loanAmount: 425000,
    status: 'Under Review',
    date: '26/05/2026'
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 font-poppins pb-10">
      <div className="flex items-center gap-3">
        <button 
          onClick={() => navigate(-1)}
          className="h-10 w-10 flex items-center justify-center rounded-xl bg-white border border-gray-100 text-gray-600 hover:text-emerald-600 hover:border-emerald-100 transition-all shadow-xs cursor-pointer"
        >
          <FiArrowLeft size={18} />
        </button>
        <div>
          <h2 className="text-xl font-bold text-gray-900 leading-tight">Verification Details</h2>
          <p className="text-[11px] text-gray-400 font-medium">Application under review</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8 shadow-sm max-w-2xl mx-auto">
        <div className="flex flex-col items-center text-center pb-8 border-b border-gray-100 mb-8">
          <div className="h-20 w-20 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-4 border-4 border-amber-100/50">
            <FiClock size={32} className="animate-spin-slow" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">We're Verifying Your Application</h3>
          <span className="px-3 py-1 bg-amber-50 text-amber-700 text-[10px] font-bold rounded-full mt-3 uppercase tracking-wider">
            Status: {verificationDetails.status}
          </span>
        </div>

        <div className="space-y-6 text-center">
          <p className="text-sm text-gray-600 leading-relaxed font-medium">
            Hi <span className="font-bold text-gray-900">{verificationDetails.firstName}</span>, your 
            <span className="font-bold text-gray-900"> ₦{verificationDetails.loanAmount.toLocaleString()} </span> 
            loan request is currently under review.
          </p>
          
          <div className="inline-flex flex-col items-center justify-center p-4 bg-gray-50 rounded-2xl min-w-[200px]">
            <span className="text-[11px] text-gray-500 font-medium">Date Submitted</span>
            <span className="text-sm font-bold text-gray-900 mt-1">{verificationDetails.date}</span>
          </div>
          
          <p className="text-xs text-gray-400 mt-6 max-w-md mx-auto">
            Our team is reviewing your documents and physical store verification data. We will notify you via email and SMS as soon as a decision is made.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerificationDetails;
