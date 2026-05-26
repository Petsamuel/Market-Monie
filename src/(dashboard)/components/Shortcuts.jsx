import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiPlusCircle, FiCreditCard, FiMessageCircle, FiChevronDown } from 'react-icons/fi';

const Shortcuts = ({ loanStage, appStatus }) => {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);

  // Validation Rules mapping
  const hasActiveLoan = loanStage === 'User' || (loanStage === 'Submitted' && appStatus === 'Disbursed');
  const canApply = !hasActiveLoan;
  const canPay = hasActiveLoan;

  const handleSelectPaymentOption = (optionType) => {
    setShowOptions(false);
    if (optionType === 'due') navigate('/dashboard/repayments/pay-now');
    if (optionType === 'missed') navigate('/dashboard/repayments/missed-details');
    if (optionType === 'full') navigate('/dashboard/repayments/pay-full');
  };

  return (
    <div className="w-full space-y-3">
      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider text-left">Quick Action Shortcuts</h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">

        {/* APPLY FOR LOAN SHORTCUT */}
        <button
          disabled={!canApply}
          onClick={() => navigate('/dashboard/loans/apply')}
          className={`p-4 rounded-xl border text-left flex items-center gap-3 transition-all duration-300 ${canApply
              ? 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-900/50 hover:shadow-xs text-gray-800 dark:text-gray-100 cursor-pointer'
              : 'bg-gray-50 dark:bg-gray-900 border-gray-100 dark:border-gray-800 text-gray-300 dark:text-gray-600 cursor-not-allowed opacity-60'
            }`}
        >
          <FiPlusCircle size={20} className={canApply ? 'text-emerald-600' : 'text-gray-300'} />
          <div className="text-left">
            <h4 className="text-xs font-bold">Apply for Loan</h4>
            <p className="text-[10px] text-gray-400">Available when clear</p>
          </div>
        </button>

        {/* MAKE REPAYMENT DIALOG DROPDOWN MULTI-FLOW CONTAINER */}
        <div className="relative w-full">
          <button
            disabled={!canPay}
            onClick={() => setShowOptions(!showOptions)}
            className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all duration-300 ${canPay
                ? 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-900/50 hover:shadow-xs text-gray-800 dark:text-gray-100 cursor-pointer'
                : 'bg-gray-50 dark:bg-gray-900 border-gray-100 dark:border-gray-800 text-gray-300 dark:text-gray-600 cursor-not-allowed opacity-60'
              }`}
          >
            <div className="flex items-center gap-3">
              <FiCreditCard size={20} className={canPay ? 'text-emerald-600' : 'text-gray-300'} />
              <div className="text-left">
                <h4 className="text-xs font-bold">Make Payment</h4>
                <p className="text-[10px] text-gray-400">Manage balances</p>
              </div>
            </div>
            {canPay && <FiChevronDown size={16} className={`text-gray-400 transition-transform ${showOptions ? 'rotate-180' : ''}`} />}
          </button>

          {/* Dynamic Payment Option Dropdown Menu Selection block */}
          {showOptions && canPay && (
            <div className="absolute z-30 left-0 right-0 mt-1.5 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl shadow-lg p-1.5 space-y-1 animate-in fade-in slide-in-from-top-1 duration-150">
              <div className="text-[9px] font-bold text-gray-400 uppercase px-2.5 py-1">Choose Repayment Flow</div>
              <button
                onClick={() => handleSelectPaymentOption('due')}
                className="w-full text-left px-3 py-2 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg transition-colors cursor-pointer"
              >
                Due Payment
              </button>
              <button
                onClick={() => handleSelectPaymentOption('missed')}
                className="w-full text-left px-3 py-2 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg transition-colors cursor-pointer"
              >
                Missed Payment (Overdue)
              </button>
              <button
                onClick={() => handleSelectPaymentOption('full')}
                className="w-full text-left px-3 py-2 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg transition-colors cursor-pointer"
              >
                Full Settlement Balance
              </button>
            </div>
          )}
        </div>

        {/* ALWAYS ENABLED CONTACT SUPPORT ACTION */}
        <button
          onClick={() => navigate('/dashboard/support')}
          className="p-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-900/50 hover:shadow-xs rounded-xl text-left flex items-center gap-3 transition-all duration-300 text-gray-800 dark:text-gray-100 cursor-pointer"
        >
          <FiMessageCircle size={20} className="text-emerald-600" />
          <div className="text-left">
            <h4 className="text-xs font-bold">Contact Support</h4>
            <p className="text-[10px] text-gray-400">Help desk active 24/7</p>
          </div>
        </button>

      </div>
    </div>
  );
};

export default Shortcuts;