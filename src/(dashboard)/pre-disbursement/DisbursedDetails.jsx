import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiCreditCard } from 'react-icons/fi';

const DisbursedDetails = () => {
  const navigate = useNavigate();

  // Mock data matching the acceptance criteria
  const disbursedDetails = {
    amount: 425000,
    accountName: 'Adetoyi Ayomide',
    accountNumber: '0123456789',
    date: '30/05/2026'
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
          <h2 className="text-xl font-bold text-gray-900 leading-tight">Disbursement Details</h2>
          <p className="text-[11px] text-gray-400 font-medium">Funds successfully transferred</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8 shadow-sm max-w-2xl mx-auto relative overflow-hidden">
        {/* Background celebration pattern */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 bg-emerald-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
        
        <div className="flex flex-col items-center text-center pb-8 border-b border-gray-100 mb-8 relative z-10">
          <div className="h-20 w-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border-4 border-emerald-100/50 shadow-sm shadow-emerald-600/10">
            <FiCreditCard size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Loan Disbursed</h3>
        </div>

        <div className="space-y-6 text-center relative z-10">
          <div className="p-5 bg-emerald-50/50 rounded-2xl border border-emerald-100/50 text-sm text-emerald-900 leading-relaxed font-medium">
            Your loan of <span className="font-bold"> ₦{disbursedDetails.amount.toLocaleString()} </span> 
            has been credited into your account.
          </div>
          
          <div className="grid grid-cols-1 gap-4 text-left">
            <div className="p-4 bg-gray-50 rounded-2xl flex flex-col gap-1">
              <span className="text-[11px] text-gray-500 font-medium">Account Name</span>
              <span className="text-sm font-bold text-gray-900">{disbursedDetails.accountName}</span>
            </div>

            <div className="p-4 bg-gray-50 rounded-2xl flex flex-col gap-1">
              <span className="text-[11px] text-gray-500 font-medium">Account Number</span>
              <span className="text-sm font-bold text-gray-900 font-mono tracking-widest">{disbursedDetails.accountNumber}</span>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-2xl flex flex-col gap-1">
              <span className="text-[11px] text-gray-500 font-medium">Date</span>
              <span className="text-sm font-bold text-gray-900">{disbursedDetails.date}</span>
            </div>
          </div>
          
          <button 
            onClick={() => navigate('/dashboard')}
            className="mt-6 w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition-colors cursor-pointer"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisbursedDetails;
