import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiCheckCircle } from 'react-icons/fi';

const LoanStatusTracker = () => {
  const navigate = useNavigate();

  // Mock timeline data based on acceptance criteria
  const timelineEvents = [
    { id: 1, title: 'Submitted', date: '22 May, 2026', time: '10:00 AM', status: 'completed' },
    { id: 2, title: 'Agent Assigned', date: '23 May, 2026', time: '11:30 AM', status: 'completed' },
    { id: 3, title: 'Verification in Progress', date: '24 May, 2026', time: '09:15 AM', status: 'completed' },
    { id: 4, title: 'Approved', date: '26 May, 2026', time: '02:40 PM', status: 'completed' },
    { id: 5, title: 'Disbursed', date: '26 May, 2026', time: '04:00 PM', status: 'completed' },
    { id: 6, title: 'Closed/Repaid', date: 'Pending', time: '', status: 'pending' }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500 font-poppins pb-10">
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="h-10 w-10 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-emerald-600 hover:border-emerald-100 transition-all shadow-xs cursor-pointer"
        >
          <FiArrowLeft size={18} />
        </button>
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight">Status Tracker</h2>
          <p className="text-[11px] text-gray-400 font-medium">Historical record of your loan application</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-6 md:p-8 shadow-sm max-w-2xl mx-auto transition-colors">
        <div className="relative border-l-2 border-gray-100 dark:border-gray-700 ml-4 md:ml-6 space-y-8 pb-4">
          {timelineEvents.map((event, index) => (
            <div key={event.id} className="relative pl-8 md:pl-10">
              <div className={`absolute -left-[17px] top-1 h-8 w-8 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-sm transition-colors ${event.status === 'completed' ? 'bg-emerald-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-400'
                }`}>
                {event.status === 'completed' ? <FiCheckCircle size={14} /> : <div className="h-2 w-2 rounded-full bg-gray-300" />}
              </div>

              <div className="flex flex-col">
                <h4 className={`text-sm font-bold ${event.status === 'completed' ? 'text-gray-900 dark:text-gray-100' : 'text-gray-400 dark:text-gray-600'}`}>
                  {event.title}
                </h4>
                {event.date !== 'Pending' ? (
                  <span className="text-[11px] text-gray-500 font-medium mt-1">
                    {event.date} • {event.time}
                  </span>
                ) : (
                  <span className="text-[11px] text-gray-400 font-medium mt-1 italic">
                    Awaiting completion
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoanStatusTracker;
