import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiClock, FiAlertCircle, FiCheckCircle, FiChevronRight } from 'react-icons/fi';

const MakePaymentOption = () => {
  const navigate = useNavigate();
  
  // Mock logic: assumes user has a missed payment
  const hasOverdue = true;

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
          <h2 className="text-xl font-bold text-gray-900 leading-tight">Make Payment</h2>
          <p className="text-[11px] text-gray-400 font-medium">Choose a payment option</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8 shadow-sm max-w-xl mx-auto">
        <h3 className="text-sm font-bold text-gray-800 mb-6">Select Payment Option</h3>
        
        <div className="space-y-4">
          {/* Due Payment Option */}
          <button 
            onClick={() => navigate('/dashboard/repayments/pay-now')}
            className="w-full flex items-center justify-between p-4 md:p-5 rounded-2xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50/30 transition-all group cursor-pointer text-left"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <FiClock size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Due Installment</h4>
                <p className="text-xs text-gray-500 font-medium mt-0.5">Pay your next scheduled installment</p>
              </div>
            </div>
            <FiChevronRight className="text-gray-400 group-hover:text-emerald-500 transition-colors" size={20} />
          </button>

          {/* Missed Payment Option (Conditional) */}
          {hasOverdue && (
            <button 
              onClick={() => navigate('/dashboard/repayments/missed-details')}
              className="w-full flex items-center justify-between p-4 md:p-5 rounded-2xl border border-red-100 bg-red-50/30 hover:border-red-500 hover:bg-red-50 transition-all group cursor-pointer text-left"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                  <FiAlertCircle size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-red-900">Missed Installments</h4>
                  <p className="text-xs text-red-700/80 font-medium mt-0.5">Clear your overdue balance</p>
                </div>
              </div>
              <FiChevronRight className="text-red-400 group-hover:text-red-600 transition-colors" size={20} />
            </button>
          )}

          {/* Full Payment Option */}
          <button 
            onClick={() => navigate('/dashboard/repayments/pay-full')}
            className="w-full flex items-center justify-between p-4 md:p-5 rounded-2xl border border-gray-100 hover:border-blue-500 hover:bg-blue-50/30 transition-all group cursor-pointer text-left"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <FiCheckCircle size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Full Balance</h4>
                <p className="text-xs text-gray-500 font-medium mt-0.5">Clear your entire loan outstanding</p>
              </div>
            </div>
            <FiChevronRight className="text-gray-400 group-hover:text-blue-500 transition-colors" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakePaymentOption;
