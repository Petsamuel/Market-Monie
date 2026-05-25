import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import TransactionHistory from './components/TransactionHistory';

const LoanHistory = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');

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
        <div className='flex gap-5 border-b border-gray-100 mb-6'>
          <button 
            onClick={() => setFilter('all')} 
            className={`pb-3 text-sm font-bold transition-all ${filter === 'all' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-400 hover:text-emerald-600 cursor-pointer'}`}
          >
            All transactions
          </button>
          <button 
            onClick={() => setFilter('inflow')} 
            className={`pb-3 text-sm font-bold transition-all ${filter === 'inflow' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-400 hover:text-emerald-600 cursor-pointer'}`}
          >
            All inflow
          </button>
          <button 
            onClick={() => setFilter('outflow')} 
            className={`pb-3 text-sm font-bold transition-all ${filter === 'outflow' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-400 hover:text-emerald-600 cursor-pointer'}`}
          >
            All outflow
          </button>
        </div>
        <TransactionHistory limit={null} isFullPage={true} filter={filter} />
      </div>
    </div>
  );
};

export default LoanHistory;
