import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import TransactionHistory from './components/TransactionHistory';

const LoanHistory = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    navigate('/dashboard/loan-requests/history/download');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 font-poppins pb-10">
      {/* Back navigation header for mobile focus */}
      <div className="flex items-center gap-3 justify-between">
        <div className="flex items-center gap-3">
        <button 
          onClick={() => navigate('/dashboard')}
          className="h-10 w-10 flex items-center justify-center rounded-xl bg-white border border-gray-100 text-gray-600 hover:text-emerald-600 hover:border-emerald-100 transition-all shadow-xs cursor-pointer"
        >
          <FiArrowLeft size={18} />
        </button>
        <div>
          <h2 className="text-xl font-bold text-gray-900 leading-tight">My Loan History</h2>
          <p className="text-[11px] text-gray-400 font-medium">View your full transaction history and cycle states</p>
        </div>
      </div>

      <div>
        <button onClick={handleDownload} className="text-xs md:text-sm font-bold text-gray-400 hover:text-emerald-600 transition-colors cursor-pointer" >Download</button>
      </div>
      </div>

      {/* Full Transaction list */}
      <div className="w-full">
        <div className='flex gap-5 justify-between'>
          <button>All transactions</button>
          <button>All inflow</button>
          <button>All outflow</button>
        </div>
        <TransactionHistory limit={null} isFullPage={true} />
      </div>
    </div>
  );
};

export default LoanHistory;
