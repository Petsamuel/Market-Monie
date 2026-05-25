import React from 'react';
import { useNavigate } from 'react-router-dom';

const Shortcuts = ({ loanStage }) => {
  const navigate = useNavigate();
  // No active loan if Guest or Restricted
  const noActiveLoan = loanStage === 'Guest' || loanStage === 'Restricted';
  // Active disbursed loan if User
  const activeLoan = loanStage === 'User';

  return (
    <div className='w-full py-4 flex gap-6 items-center justify-between'>
        <button 
          onClick={() => navigate('/apply/hub')}
          disabled={!noActiveLoan}
          className={`rounded-3xl shadow-md bg-white w-1/2 h-24 flex items-center justify-center text-xl font-semibold transition-all duration-300
            ${noActiveLoan 
              ? 'text-black hover:border hover:border-emerald-900 hover:scale-[1.02] hover:text-emerald-900 hover:bg-emerald-50 cursor-pointer' 
              : 'text-gray-400 opacity-50 cursor-not-allowed border-gray-100'}`}
        >
          Apply for Loan
        </button>
        <button 
          onClick={() => navigate('/dashboard/make-payment')}
          disabled={!activeLoan}
          className={`rounded-3xl shadow-md bg-white w-1/2 h-24 flex items-center justify-center text-xl font-semibold transition-all duration-300
            ${activeLoan 
              ? 'text-black hover:border hover:border-orange-900 hover:scale-[1.02] hover:text-orange-900 hover:bg-orange-50 cursor-pointer' 
              : 'text-gray-400 opacity-50 cursor-not-allowed border-gray-100'}`}
        >
          Make Payment
        </button>
    </div>
  );
};

export default Shortcuts;