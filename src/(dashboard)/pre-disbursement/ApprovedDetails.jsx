import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiCheckCircle } from 'react-icons/fi';

const ApprovedDetails = () => {
  const navigate = useNavigate();

  // Mock data matching the acceptance criteria
  const approvedDetails = {
    firstName: 'Ayomide',
    loanAmount: 425000,
    status: 'Approved',
    date: '28/05/2026',
    accountName: 'Adetoyi Ayomide',
    accountNumber: '0123456789'
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
          <h2 className="text-xl font-bold text-gray-900 leading-tight">Approval Details</h2>
          <p className="text-[11px] text-gray-400 font-medium">Your loan has been approved</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8 shadow-sm max-w-2xl mx-auto relative overflow-hidden">
        {/* Background celebration pattern */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 bg-emerald-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
        
        <div className="flex flex-col items-center text-center pb-8 border-b border-gray-100 mb-8 relative z-10">
          <div className="h-20 w-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border-4 border-emerald-100/50 shadow-sm shadow-emerald-600/10">
            <FiCheckCircle size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Loan Approved</h3>
          <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-full mt-3 uppercase tracking-wider">
            Status: {approvedDetails.status}
          </span>
        </div>

        <div className="space-y-6 text-center relative z-10">
          <div className="p-5 bg-emerald-50/50 rounded-2xl border border-emerald-100/50 text-sm text-emerald-900 leading-relaxed font-medium">
            Congratulation <span className="font-bold">{approvedDetails.firstName}</span>! Your loan of 
            <span className="font-bold"> ₦{approvedDetails.loanAmount.toLocaleString()} </span> 
            has been approved. The funds will be sent to your bank account within 24 hours.
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="p-4 bg-gray-50 rounded-2xl flex flex-col gap-1">
              <span className="text-[11px] text-gray-500 font-medium">Approval Date</span>
              <span className="text-sm font-bold text-gray-900">{approvedDetails.date}</span>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-2xl flex flex-col gap-1">
              <span className="text-[11px] text-gray-500 font-medium">Receiving Account Name</span>
              <span className="text-sm font-bold text-gray-900">{approvedDetails.accountName}</span>
            </div>

            <div className="p-4 bg-gray-50 rounded-2xl flex flex-col gap-1 md:col-span-2">
              <span className="text-[11px] text-gray-500 font-medium">Receiving Account Number</span>
              <span className="text-sm font-bold text-gray-900 font-mono tracking-widest">{approvedDetails.accountNumber}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovedDetails;
