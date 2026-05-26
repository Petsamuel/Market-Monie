import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Background from '../assets/first-container-bg.png';
import { FaEye, FaEyeSlash, FaChartLine } from "react-icons/fa";
import { HiTrendingDown } from "react-icons/hi";
import { MdOutlineAutorenew } from "react-icons/md";
import { FiArrowRight, FiAlertCircle } from "react-icons/fi";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const FirstContainer = ({ loanStage, appStatus }) => {
  const [loading, setLoading] = useState(true);
  const [hideAmount, setHideAmount] = useState(false);
  const navigate = useNavigate();

  const currentLoanDetails = {
    outstandingBalance: 425000.00,
    nextPayableAmount: 35000.00,
    dueDate: "June 02, 2026",
    plan: "Monthly",
    missedOverdueSum: 70000.00
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const renderOverviewBalance = () => {
    if (loading) {
      return (
        <div className="space-y-3">
          <Skeleton height={12} width={120} />
          <Skeleton height={28} width={200} />
        </div>
      );
    }

    if (loanStage === 'User' || (loanStage === 'Submitted' && appStatus === 'Disbursed')) {
      return (
        <>
          <h2 className='text-[10px] md:text-[12px] text-emerald-100 font-bold tracking-[1.5px] uppercase'>
            Outstanding Loan Balance
          </h2>
          <div className='flex gap-4 items-center mt-1 justify-between w-full'>
            <h2 className='text-xl md:text-3xl font-bold font-poppins tracking-tight text-white'>
              {hideAmount ? '₦••••••' : `₦${currentLoanDetails.outstandingBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}`}
            </h2>
            <button
              onClick={() => setHideAmount(!hideAmount)}
              className='p-2 hover:bg-white/10 rounded-lg transition-colors text-white cursor-pointer'
            >
              {hideAmount ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          </div>
        </>
      );
    }

    if (loanStage === 'Closed') {
      return (
        <>
          <h2 className='text-[10px] md:text-[12px] text-emerald-200/80 font-bold tracking-[1.5px] uppercase'>
            Closed
          </h2>
          <h2 className='text-2xl md:text-3xl font-bold font-poppins tracking-tight mt-1 text-white'>
            ₦0
          </h2>
        </>
      );
    }

    return (
      <>
        <h2 className='text-[10px] md:text-[12px] text-emerald-200/80 font-bold tracking-[1.5px] uppercase'>
          No Active Loan
        </h2>
        <h2 className='text-2xl md:text-3xl font-bold font-poppins tracking-tight mt-1 text-white'>
          ₦0
        </h2>
      </>
    );
  };

  const advertCard = [
    { id: 1, title: 'Higher Loan Limits', description: 'Get access to larger funding caps as your business credit and transactions grow.', icon: <FaChartLine /> },
    { id: 2, title: 'Lower Interest Rate', description: 'Benefit from industry-leading low rates starting at 1.5% monthly.', icon: <HiTrendingDown /> },
    { id: 3, title: 'Flexible Repayment Plans', description: 'Choose repayment schedules that match your cashflow patterns seamlessly.', icon: <MdOutlineAutorenew /> }
  ];

  return (
    <div className='flex flex-col gap-4 w-full'>

      <div
        className='relative rounded-3xl shadow-xs border border-gray-100 bg-center bg-no-repeat bg-cover h-32 md:h-40 w-full overflow-hidden'
        style={{ backgroundImage: `url('${Background}')` }}
      >
        <div className='absolute inset-0 bg-gradient-to-r from-emerald-950/90 to-emerald-850/40 rounded-3xl'>
          <div className='flex items-center h-full px-6 md:px-8 text-white'>
            <div className='w-full'>{renderOverviewBalance()}</div>
          </div>
        </div>
      </div>

      {loanStage === 'User' && currentLoanDetails.missedOverdueSum > 0 && (
        <div className="bg-red-50 border border-red-100 rounded-2xl p-4 flex items-center justify-between gap-4 animate-in slide-in-from-top-2 duration-300">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-red-100 text-red-600 rounded-xl flex items-center justify-center shrink-0">
              <FiAlertCircle size={20} />
            </div>
            <div className="text-left">
              <h4 className="text-xs font-bold text-red-900">Overdue Payments Detected</h4>
              <p className="text-[11px] text-red-600 font-medium mt-0.5">
                You have missed schedules totaling ₦{currentLoanDetails.missedOverdueSum.toLocaleString()}. Clear debt immediately.
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate('/dashboard/repayments/missed-details')}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl whitespace-nowrap transition-colors cursor-pointer"
          >
            View Details
          </button>
        </div>
      )}

      {(loanStage === 'User' || (loanStage === 'Submitted' && appStatus === 'Disbursed')) && (
        <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs transition-colors duration-300">
          <div className="text-left space-y-0.5">
            <span className="text-[10px] font-bold text-emerald-600 tracking-wider uppercase bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-md">Upcoming Installment</span>
            <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-1">₦{currentLoanDetails.nextPayableAmount.toLocaleString()} Due on {currentLoanDetails.dueDate}</h3>
            <p className="text-xs text-gray-400 font-medium">Payment Schedule Cycle: <strong className="text-gray-600 dark:text-gray-300">{currentLoanDetails.plan}</strong></p>
          </div>
          <button
            onClick={() => navigate('/dashboard/repayments/pay-now')}
            className="w-full sm:w-auto px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer text-center"
          >
            Pay Now
          </button>
        </div>
      )}

      {loanStage === 'Guest' && (
        <div className='flex flex-col gap-4 w-full'>
          <div className='relative rounded-3xl shadow-md border border-emerald-800/10 w-full p-6 md:p-8 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between bg-gradient-to-r from-emerald-900 to-emerald-800 text-white overflow-hidden group'>
            <div className="absolute inset-0 opacity-[0.05] bg-repeat pointer-events-none" style={{ backgroundImage: 'url("/Pattern.svg")', backgroundSize: '150px' }} />
            <div className="relative z-10 space-y-1.5 max-w-xl">
              <h2 className='text-sm md:text-lg font-bold font-poppins tracking-wide'>Get Funding for Your Business</h2>
              <p className='text-xs text-emerald-100/90 leading-relaxed'>Get up to ₦10 million in flexible business loans to scale operations and purchase inventory.</p>
            </div>
            <button
              onClick={() => navigate('/dashboard/loans/apply')}
              className='relative z-10 px-6 py-3.5 rounded-2xl bg-white text-emerald-950 font-bold text-xs md:text-sm flex items-center gap-2 hover:bg-emerald-50 active:scale-98 shadow-lg hover:shadow-xl hover:gap-3 transition-all duration-300 cursor-pointer'
            >
              Get loan <FiArrowRight size={16} />
            </button>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full'>
            {advertCard.map(advert => (
              <div
                key={advert.id}
                className='bg-white dark:bg-gray-800 border border-gray-100/80 dark:border-gray-700 rounded-2xl p-4 flex items-center gap-4 hover:border-emerald-100 dark:hover:border-emerald-900/50 hover:shadow-md transition-all duration-300 group'
              >
                <div className='bg-[#ef6537]/10 text-[#ef6537] text-xl p-3 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300'>
                  {advert.icon}
                </div>
                <div className="text-left flex-1">
                  <h3 className='text-xs font-bold text-gray-800 dark:text-gray-100 font-poppins'>{advert.title}</h3>
                  <p className="text-[10px] text-gray-400 font-medium leading-relaxed mt-0.5">{advert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FirstContainer;