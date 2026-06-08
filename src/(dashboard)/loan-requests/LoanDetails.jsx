import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiChevronLeft, FiChevronRight, FiDownload, FiShare2 } from 'react-icons/fi';
import { globalUserData } from '../../store/Data';

const LoanDetails = () => {
  const navigate = useNavigate();

  // Carousel state
  const [currentLoanIndex, setCurrentLoanIndex] = useState(0);

  // Mock list of loans
  const loans = [
    {
      id: 'LN-2026-9842',
      date: '26 May, 2026 04:00 PM',
      accountName: `${globalUserData.firstName} ${globalUserData.lastName}`,
      accountNumber: '0123456789',
      disbursedAmount: 425000,
      interestAmount: 21250,
      interestRate: '5%',
      repaymentTotal: 446250,
      paymentFrequency: 'Monthly',
      amountPerPayment: 74375,
      totalPayments: 6,
      paymentsMade: 1,
      paymentsRemaining: 5,
      startDate: 'June 02, 2026',
      endDate: 'Dec 02, 2026',
      status: 'Active'
    },
    {
      id: 'LN-2025-1102',
      date: '10 Jan, 2025 11:15 AM',
      accountName: `${globalUserData.firstName} ${globalUserData.lastName}`,
      accountNumber: '0123456789',
      disbursedAmount: 200000,
      interestAmount: 10000,
      interestRate: '5%',
      repaymentTotal: 210000,
      paymentFrequency: 'Weekly',
      amountPerPayment: 52500,
      totalPayments: 4,
      paymentsMade: 4,
      paymentsRemaining: 0,
      startDate: 'Jan 17, 2025',
      endDate: 'Feb 14, 2025',
      status: 'Closed'
    }
  ];

  const loan = loans[currentLoanIndex];
  const hasPrevious = currentLoanIndex < loans.length - 1;
  const hasNext = currentLoanIndex > 0;

  return (
    <div className="space-y-6 animate-in fade-in duration-500 font-poppins pb-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="h-10 w-10 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-emerald-600 hover:border-emerald-100 transition-all shadow-xs cursor-pointer"
          >
            <FiArrowLeft size={18} />
          </button>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight">Loan Details</h2>
            <p className="text-[11px] text-gray-400 font-medium">Summary of your loan information</p>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="h-10 w-10 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all shadow-xs cursor-pointer">
            <FiShare2 size={16} />
          </button>
          <button className="h-10 w-10 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all shadow-xs cursor-pointer">
            <FiDownload size={16} />
          </button>
        </div>
      </div>

      {/* Carousel Navigation */}
      {(hasPrevious || hasNext) && (
        <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-sm border border-gray-100 dark:border-gray-700 max-w-4xl mx-auto transition-colors">
          <button
            disabled={!hasNext}
            onClick={() => setCurrentLoanIndex(prev => prev - 1)}
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-gray-600 dark:text-gray-400 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
          >
            <FiChevronLeft size={16} /> Next Loan
          </button>
          <span className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider bg-gray-50 dark:bg-gray-900 px-3 py-1 rounded-full">
            {loan.status === 'Active' ? 'Present Loan' : `Loan History (${currentLoanIndex})`}
          </span>
          <button
            disabled={!hasPrevious}
            onClick={() => setCurrentLoanIndex(prev => prev + 1)}
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-gray-600 dark:text-gray-400 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
          >
            View Previous Loan <FiChevronRight size={16} />
          </button>
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-6 md:p-8 shadow-sm max-w-4xl mx-auto space-y-8 transition-colors">

        {/* Account & Transaction Information */}
        <section>
          <h3 className="text-sm font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Account & Transaction Info
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl flex flex-col gap-1 transition-colors">
              <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Account Name</span>
              <span className="text-xs font-bold text-gray-900 dark:text-gray-100 line-clamp-1">{loan.accountName}</span>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl flex flex-col gap-1 transition-colors">
              <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Account Number</span>
              <span className="text-xs font-bold text-gray-900 dark:text-gray-100">{loan.accountNumber}</span>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl flex flex-col gap-1 transition-colors">
              <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Loan ID</span>
              <span className="text-xs font-bold text-gray-900 dark:text-gray-100">{loan.id}</span>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl flex flex-col gap-1 transition-colors">
              <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Date & Time</span>
              <span className="text-xs font-bold text-gray-900 dark:text-gray-100">{loan.date}</span>
            </div>
          </div>
        </section>

        {/* Loan Information */}
        <section>
          <h3 className="text-sm font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Loan Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 border border-emerald-100 dark:border-emerald-800/30 bg-emerald-50/30 dark:bg-emerald-900/10 rounded-2xl flex items-center justify-between transition-colors">
              <span className="text-xs text-gray-600 dark:text-gray-300 font-bold">Disbursed Amount</span>
              <span className="text-base font-bold text-emerald-700 dark:text-emerald-400">₦{loan.disbursedAmount.toLocaleString()}</span>
            </div>
            <div className="p-5 border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900/50 rounded-2xl flex items-center justify-between shadow-xs transition-colors">
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Interest Amount</span>
              <span className="text-sm font-bold text-gray-800 dark:text-gray-200">₦{loan.interestAmount.toLocaleString()}</span>
            </div>
            <div className="p-5 border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900/50 rounded-2xl flex items-center justify-between shadow-xs transition-colors">
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Interest Rate</span>
              <span className="text-sm font-bold text-gray-800 dark:text-gray-200">{loan.interestRate}</span>
            </div>
          </div>
        </section>

        {/* Repayment Plan */}
        <section>
          <h3 className="text-sm font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Repayment Plan
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl flex flex-col gap-1 transition-colors">
              <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Total to Repay</span>
              <span className="text-sm font-bold text-gray-900 dark:text-gray-100">₦{loan.repaymentTotal.toLocaleString()}</span>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl flex flex-col gap-1 transition-colors">
              <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Payment Frequency</span>
              <span className="text-sm font-bold text-gray-900 dark:text-gray-100">{loan.paymentFrequency}</span>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl flex flex-col gap-1 transition-colors">
              <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Amount Per Payment</span>
              <span className="text-sm font-bold text-gray-900 dark:text-gray-100">₦{loan.amountPerPayment.toLocaleString()}</span>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl flex flex-col gap-1 transition-colors">
              <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Total Payments</span>
              <span className="text-sm font-bold text-gray-900 dark:text-gray-100">{loan.totalPayments} Installments</span>
            </div>
            <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex flex-col gap-1 border border-emerald-100 dark:border-emerald-800/30 transition-colors">
              <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-bold">Payments Made</span>
              <span className="text-sm font-bold text-emerald-900 dark:text-emerald-100">{loan.paymentsMade}</span>
            </div>
            <div className="p-4 bg-rose-50 dark:bg-rose-900/20 rounded-2xl flex flex-col gap-1 border border-rose-100 dark:border-rose-800/30 transition-colors">
              <span className="text-[10px] text-rose-700 dark:text-rose-400 font-bold">Payments Remaining</span>
              <span className="text-sm font-bold text-rose-900 dark:text-gray-100">{loan.paymentsRemaining}</span>
            </div>
          </div>
        </section>

        {/* Loan Timeline */}
        <section>
          <h3 className="text-sm font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Loan Timeline
          </h3>
          <div className="flex items-center gap-4 p-5 bg-gray-50 dark:bg-gray-900/50 rounded-2xl transition-colors">
            <div className="flex-1 flex flex-col gap-1 border-r border-gray-200 dark:border-gray-700">
              <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Start Date</span>
              <span className="text-sm font-bold text-gray-900 dark:text-gray-100">{loan.startDate}</span>
            </div>
            <div className="flex-1 flex flex-col gap-1 pl-4">
              <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">End Date</span>
              <span className="text-sm font-bold text-gray-900 dark:text-gray-100">{loan.endDate}</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default LoanDetails;
