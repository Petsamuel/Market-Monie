import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSendFill } from "react-icons/bs";

export const transactionsData = [
  {
    id: 1,
    title: "FIP:John Doe ...",
    date: "12th May. 2026 04:43PM",
    amount: "- ₦10.75",
    state: 'outflow',
    type: "debit",
    status: "Successful"
  },
  {
    id: 2,
    title: "FIP:Jane Doe ...",
    date: "12th May. 2026 04:43PM",
    amount: "- ₦4,000.00",
    state: 'outflow',
    type: "debit",
    status: "Successful"
  },
  {
    id: 3,
    title: "Intrabank- Transfer",
    date: "8th May. 2026 08:41AM",
    amount: "+ ₦4,000.00",
    state: 'inflow',
    type: "credit",
    status: "Successful"
  },
  {
    id: 4,
    title: "Loan Disbursement",
    date: "1st May. 2026 10:15AM",
    amount: "+ ₦200,000.00",
    state: 'inflow',
    type: "credit",
    status: "Successful"
  },
  {
    id: 5,
    title: "Repayment Direct Debit",
    date: "25th Apr. 2026 12:00PM",
    amount: "- ₦15,000.00",
    state: 'outflow',
    type: "debit",
    status: "Successful"
  }
];

const TransactionHistory = ({ limit = 3, isFullPage = false }) => {
  const navigate = useNavigate();
  const displayedTransactions = limit ? transactionsData.slice(0, limit) : transactionsData;

  const handleSeeAll = () => {
    navigate('/dashboard/loan-requests/history');
  };

  return (
    <div className={`w-full bg-white rounded-3xl border border-gray-100 p-6 md:p-8 ${isFullPage ? '' : 'shadow-sm'}`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-base md:text-lg font-bold text-gray-800 font-poppins">
          {isFullPage ? "Transaction History" : "Transactions"}
        </h2>
        {!isFullPage && transactionsData.length > limit && (
          <button 
            onClick={handleSeeAll}
            className="text-xs md:text-sm font-bold text-gray-400 hover:text-emerald-600 transition-colors cursor-pointer"
          >
            See All
          </button>
        )}
      </div>

      {/* Transaction List */}
      <div className="flex flex-col gap-5">
        {displayedTransactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between animate-in fade-in slide-in-from-bottom-1 duration-200">
            {/* Left side: Icon & Info */}
            <div className="flex items-center gap-4">
              {/* Custom SVG Double Arrows for Transfer */}
              <div className="h-11 w-11 md:h-12 md:w-12 text-2xl rounded-full bg-teal-50/60 flex items-center justify-center shrink-0">
                {tx.state === 'inflow' ? 
                <BsSendFill className='text-green-900 rotate-175' /> : <BsSendFill className='text-red-600' />
                }
              </div>
              <div className="text-left">
                <h4 className="text-xs md:text-sm font-bold text-gray-800 font-poppins line-clamp-1 max-w-[160px] sm:max-w-xs">
                  {tx.title}
                </h4>
                <p className="text-[10px] md:text-[11px] text-gray-400 font-semibold tracking-wide mt-0.5">
                  {tx.date}
                </p>
              </div>
            </div>

            {/* Right side: Amount & Status */}
            <div className="text-right">
              <span className={`text-xs md:text-sm font-bold ${
                tx.type === 'debit' ? 'text-red-800/90' : 'text-gray-900'
              }`}>
                {tx.amount}
              </span>
              <p className="text-[10px] md:text-[11px] text-gray-400 font-semibold tracking-wide mt-0.5">
                {tx.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;