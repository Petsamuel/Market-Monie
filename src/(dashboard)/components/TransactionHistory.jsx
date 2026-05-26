import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSendFill } from "react-icons/bs";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { transactionsData } from '../../store/Data';

const TransactionHistory = ({ limit = 3, isFullPage = false, filter = 'all' }) => {
  const navigate = useNavigate();

  const sortedData = [...transactionsData].sort((a, b) => new Date(b.date) - new Date(a.date));

  const filteredData = filter === 'all'
    ? sortedData
    : sortedData.filter(tx => tx.state === filter);

  const displayedTransactions = limit ? filteredData.slice(0, limit) : filteredData;

  const handleSeeAll = () => {
    navigate('/dashboard/loan-requests/history');
  };

  const handleRowClick = (txId) => {
    navigate(`/dashboard/loan-requests/history/details/${txId}`);
  };

  const groupedTransactions = displayedTransactions.reduce((acc, tx) => {
    const date = new Date(tx.date);
    const monthYear = date.toLocaleString('default', { month: 'long', year: 'numeric' });
    if (!acc[monthYear]) acc[monthYear] = [];
    acc[monthYear].push(tx);
    return acc;
  }, {});

  if (displayedTransactions.length === 0) {
    return (
      <div className="w-full bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-8 text-center flex flex-col items-center justify-center min-h-[260px] transition-colors">
        <div className="h-16 w-16 bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center text-gray-300 dark:text-gray-600 mb-4 text-2xl">
          <IoMdCloseCircleOutline size={32} className="text-gray-300 dark:text-gray-500" />
        </div>
        <h3 className="text-sm font-bold text-gray-700 dark:text-gray-100">No transactions yet</h3>
        <p className="text-xs text-gray-400 mt-1 max-w-[240px]">You don't have any transactions matching this filter.</p>
        <button
          onClick={() => navigate('/dashboard')}
          className="mt-4 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-xl hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors cursor-pointer"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className={`w-full bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-6 md:p-8 transition-colors ${isFullPage ? '' : 'shadow-sm'}`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-base md:text-lg font-bold text-gray-800 dark:text-gray-100 font-poppins">
          {isFullPage ? "Transaction History" : "Transactions"}
        </h2>
        {!isFullPage && filteredData.length > limit && (
          <button
            onClick={handleSeeAll}
            className="text-xs md:text-sm font-bold text-gray-400 hover:text-emerald-600 transition-colors cursor-pointer"
          >
            See All
          </button>
        )}
      </div>

      <div className="flex flex-col gap-6">
        {Object.keys(groupedTransactions).map((month) => (
          <div key={month} className="space-y-4">
            {isFullPage && (
              <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest text-left">
                {month}
              </h3>
            )}
            <div className="flex flex-col gap-3">
              {groupedTransactions[month].map((tx) => (
                <div
                  key={tx.id}
                  onClick={() => handleRowClick(tx.id)}
                  className="flex items-center justify-between p-2 -mx-2 rounded-2xl hover:bg-gray-50/70 dark:hover:bg-gray-900/50 transition-all cursor-pointer group animate-in fade-in slide-in-from-bottom-1 duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-11 w-11 md:h-12 md:w-12 text-lg rounded-full bg-teal-50/50 dark:bg-teal-900/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-all">
                      {tx.state === 'inflow' ? (
                        <BsSendFill className="text-emerald-700 dark:text-emerald-400 transform rotate-180" size={14} />
                      ) : tx.status === 'declined' ? (
                        <IoMdCloseCircleOutline className="text-red-600" size={18} />
                      ) : (
                        <BsSendFill className="text-gray-600 dark:text-gray-400" size={14} />
                      )}
                    </div>
                    <div className="text-left">
                      <h4 className={`text-xs md:text-sm font-bold text-gray-800 dark:text-gray-100 font-poppins line-clamp-1 max-w-[140px] sm:max-w-xs ${tx.status === 'declined' && 'text-red-600'}`}>
                        {tx.title}
                      </h4>
                      <p className="text-[10px] md:text-[11px] text-gray-400 font-semibold tracking-wide mt-0.5">
                        {tx.displayDate}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className={`text-xs md:text-sm font-bold ${tx.type === 'debit' ? 'text-red-600' : 'text-emerald-600'}`}>
                      {tx.amount}
                    </span>
                    <p className={`text-[10px] md:text-[11px] font-bold uppercase tracking-wider mt-0.5 ${tx.status === 'declined' ? 'text-red-500' : 'text-gray-400'}`}>
                      {tx.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;