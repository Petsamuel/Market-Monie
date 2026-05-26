import React, { useState } from 'react'
import { useOutletContext, useNavigate } from "react-router-dom";
import {
  FiPlus,
  FiEye,
  FiCreditCard,
  FiMessageCircle,
  FiArrowRight,
  FiClock
} from "react-icons/fi";
import FirstContainer from "./components/FirstContainer";
import LoanStatus from "./components/LoanStatus";
import Shortcuts from "./components/Shortcuts";
import TransactionHistory from "./components/TransactionHistory";

const Dashboard = () => {
  const { user, loanStage, setLoanStage } = useOutletContext();
  const [appStatus, setAppStatus] = useState('Submitted');
  const navigate = useNavigate();

  return (
    <div className="space-y-8 animate-in fade-in duration-700 font-poppins pb-16">
      <section className="flex flex-col gap-6">
        {/* Loan Balance & Core Action Cards */}
        <FirstContainer loanStage={loanStage} />

        {/* Pre-disbursement Status Stepper (only for Submitted Application status) */}
        <LoanStatus loanStage={loanStage} appStatus={appStatus} />

        {/* Shortcuts / Active Actions (only for Active Users) */}
        {loanStage === 'User' && <Shortcuts loanStage={loanStage} />}

        {/* Transaction History (only for Active Users or Disbursed status) */}
        {(loanStage === 'User' || (loanStage === 'Submitted' && appStatus === 'Disbursed')) && (
          <TransactionHistory limit={3} />
        )}

        {/* Contact Support CTA Card (for New Users in Guest/Submitted status) */}
        {(loanStage === 'Guest' || loanStage === 'Submitted') && (
          <div className="bg-white dark:bg-gray-800 border border-gray-100/80 dark:border-gray-700 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 hover:shadow-lg hover:shadow-emerald-950/2 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center shrink-0 transition-colors">
                <FiMessageCircle size={22} />
              </div>
              <div className="text-left">
                <h4 className="text-xs md:text-sm font-bold text-gray-800 dark:text-gray-100 font-poppins">Need assistance with your account or loan?</h4>
                <p className="text-[10px] md:text-xs text-gray-400 font-medium mt-0.5 leading-relaxed">Our support agents are available 24/7 to resolve any issues or guide you through the process.</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/dashboard/support')}
              className="w-full sm:w-auto px-5 py-3.5 bg-emerald-50 dark:bg-emerald-900/30 hover:bg-emerald-100/80 dark:hover:bg-emerald-900/50 text-emerald-800 dark:text-emerald-400 font-bold text-xs rounded-xl flex items-center justify-center gap-2 hover:gap-3 transition-all duration-300 cursor-pointer"
            >
              Contact Support <FiArrowRight size={14} />
            </button>
          </div>
        )}
      </section>

      {/* DEVELOPER PLAYGROUND CONTROLS */}
      <div className="border border-dashed border-gray-200 dark:border-gray-700 rounded-3xl p-6 mt-8 bg-gray-50/50 dark:bg-gray-800/40 transition-colors duration-300">
        <div className="flex items-center gap-2 mb-4">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Developer Preview Panel</h3>
        </div>

        <div className="flex flex-wrap gap-2.5 mb-4">
          <button
            onClick={() => setLoanStage('Guest')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${loanStage === 'Guest'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/10'
              : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
          >
            Without Application (Guest)
          </button>

          <button
            onClick={() => setLoanStage('Submitted')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${loanStage === 'Submitted'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/10'
              : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
          >
            Submitted Application
          </button>

          <button
            onClick={() => setLoanStage('User')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${loanStage === 'User'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/10'
              : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
          >
            Active Loan (User)
          </button>

          <button
            onClick={() => setLoanStage('Restricted')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${loanStage === 'Restricted'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/10'
              : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
          >
            Restricted
          </button>

          <button
            onClick={() => setLoanStage('Closed')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${loanStage === 'Closed'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/10'
              : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
          >
            Closed Loan
          </button>
        </div>

        {loanStage === 'Submitted' && (
          <div className="p-4 bg-white dark:bg-gray-800 border border-gray-150 dark:border-gray-700 rounded-2xl animate-in slide-in-from-top-2 duration-300 transition-colors">
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Cycle Pre-disbursement Statuses</h4>
            <div className="flex flex-wrap gap-2">
              {[
                { key: 'Submitted', label: '1. Submitted' },
                { key: 'AgentAssigned', label: '2. Agent Assigned' },
                { key: 'Verification', label: '3. Verification in Progress' },
                { key: 'Approved', label: '4. Approved' },
                { key: 'Declined', label: '4. Declined' },
                { key: 'Disbursed', label: '5. Disbursed' }
              ].map((stage) => (
                <button
                  key={stage.key}
                  onClick={() => setAppStatus(stage.key)}
                  className={`px-3 py-2 text-[11px] font-bold rounded-lg transition-all cursor-pointer ${appStatus === stage.key
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/10'
                    : 'bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                >
                  {stage.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
