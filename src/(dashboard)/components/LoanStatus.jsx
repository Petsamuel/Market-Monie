import React from 'react';
import { 
  FiFileText, 
  FiUserCheck, 
  FiClock, 
  FiCheckCircle, 
  FiXCircle, 
  FiCreditCard, 
  FiPhone, 
  FiShield,
  FiHelpCircle
} from 'react-icons/fi';

const LoanStatus = ({ loanStage, appStatus = 'Submitted' }) => {
  if (loanStage !== 'Submitted') return null;

  const steps = [
    { key: 'Submitted', label: 'Submitted', index: 1, icon: <FiFileText size={18} /> },
    { key: 'AgentAssigned', label: 'Agent Assigned', index: 2, icon: <FiUserCheck size={18} /> },
    { key: 'Verification', label: 'Verification', index: 3, icon: <FiClock size={18} /> },
    { 
      key: 'ApprovedDeclined', 
      label: appStatus === 'Declined' ? 'Declined' : 'Approved', 
      index: 4, 
      icon: appStatus === 'Declined' ? <FiXCircle size={18} /> : <FiCheckCircle size={18} /> 
    },
    { key: 'Disbursed', label: 'Disbursed', index: 5, icon: <FiCreditCard size={18} /> }
  ];

  const getStepStatus = (index) => {
    let activeIndex = 1;
    if (appStatus === 'Submitted') activeIndex = 1;
    else if (appStatus === 'AgentAssigned') activeIndex = 2;
    else if (appStatus === 'Verification') activeIndex = 3;
    else if (appStatus === 'Approved' || appStatus === 'Declined') activeIndex = 4;
    else if (appStatus === 'Disbursed') activeIndex = 5;

    if (index < activeIndex) return 'done';
    if (index === activeIndex) return 'active';
    return 'pending';
  };

  const renderStatusDetails = () => {
    switch (appStatus) {
      case 'Submitted':
        return (
          <div className="bg-emerald-50/40 border border-emerald-100/50 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="h-10 w-10 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center shrink-0 shadow-inner">
              <FiFileText size={20} />
            </div>
            <div>
              <h4 className="text-xs md:text-sm font-bold text-gray-800 font-poppins">Application Submitted</h4>
              <p className="text-[11px] md:text-xs text-gray-500 font-medium mt-1 leading-relaxed">
                Your loan application has been received successfully! Our system is currently conducting a preliminary document review. A field verification agent will be assigned to visit your merchant location shortly.
              </p>
            </div>
          </div>
        );
      case 'AgentAssigned':
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="bg-blue-50/40 border border-blue-100/50 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="h-10 w-10 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center shrink-0 shadow-inner">
                <FiUserCheck size={20} />
              </div>
              <div>
                <h4 className="text-xs md:text-sm font-bold text-gray-800 font-poppins">Field Agent Assigned</h4>
                <p className="text-[11px] md:text-xs text-gray-500 font-medium mt-1 leading-relaxed">
                  An onboarding and verification specialist has been assigned to complete your physical verification process. Please be prepared to present your physical shop and registration credentials.
                </p>
              </div>
            </div>
            
            {/* Agent Profile Mock Card */}
            <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-gray-100 text-gray-600 flex items-center justify-center font-bold text-lg font-poppins shadow-sm">
                  CO
                </div>
                <div>
                  <h5 className="text-xs font-bold text-gray-800 font-poppins">Chinedu Okafor</h5>
                  <p className="text-[10px] text-gray-400 font-medium mt-0.5">Verification Specialist • ID: MM-AGT-0842</p>
                </div>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a href="tel:+2348123456789" className="flex-1 sm:flex-initial h-10 px-4 rounded-xl bg-gray-50 text-gray-700 font-semibold text-xs flex items-center justify-center gap-2 hover:bg-gray-100 transition-all border border-gray-100">
                  <FiPhone size={14} /> Call Agent
                </a>
                <div className="flex-1 sm:flex-initial h-10 px-4 rounded-xl bg-emerald-50 text-emerald-800 font-bold text-xs flex items-center justify-center gap-1.5 border border-emerald-100 shadow-inner">
                  <FiShield size={14} className="text-emerald-600 animate-pulse" /> Pin: 8429
                </div>
              </div>
            </div>
          </div>
        );
      case 'Verification':
        return (
          <div className="bg-amber-50/40 border border-amber-100/50 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="h-10 w-10 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center shrink-0 shadow-inner">
              <FiClock size={20} className="animate-spin" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <h4 className="text-xs md:text-sm font-bold text-gray-800 font-poppins">Verification In Progress</h4>
                <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-[9px] font-extrabold rounded-md uppercase tracking-wider">ETA: 24h - 48h</span>
              </div>
              <p className="text-[11px] md:text-xs text-gray-500 font-medium mt-1 leading-relaxed">
                Our verification desk is currently auditing the physical store assessment data, BVN cross-references, and shop registry details. We will notify you via SMS/Email as soon as this review phase is complete.
              </p>
            </div>
          </div>
        );
      case 'Approved':
        return (
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="h-10 w-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-emerald-600/10">
              <FiCheckCircle size={20} />
            </div>
            <div>
              <h4 className="text-xs md:text-sm font-bold text-emerald-950 font-poppins">Loan Application Approved! 🎉</h4>
              <p className="text-[11px] md:text-xs text-emerald-800/80 font-medium mt-1 leading-relaxed">
                Congratulations! Your business loan application has been fully approved by our credit assessment committee. The disbursement desk is currently scheduling the fund transfer to your bank account.
              </p>
            </div>
          </div>
        );
      case 'Declined':
        return (
          <div className="bg-rose-50 border border-rose-100 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="h-10 w-10 bg-rose-600 text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-rose-600/10">
              <FiXCircle size={20} />
            </div>
            <div className="flex-1">
              <h4 className="text-xs md:text-sm font-bold text-rose-950 font-poppins">Application Declined</h4>
              <p className="text-[11px] md:text-xs text-rose-800/80 font-medium mt-1 leading-relaxed">
                We regret to inform you that your loan application was not successful during our verification and review process. Common reasons include mismatch in business registration, incomplete shop details, or credit assessment constraints.
              </p>
            </div>
          </div>
        );
      case 'Disbursed':
        return (
          <div className="bg-emerald-950 border border-emerald-900 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center gap-4 text-white animate-in fade-in slide-in-from-bottom-2 duration-300 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] bg-repeat pointer-events-none" style={{ backgroundImage: 'url("/Pattern.svg")', backgroundSize: '120px' }} />
            <div className="h-10 w-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg relative z-10 shadow-emerald-500/10">
              <FiCreditCard size={20} />
            </div>
            <div className="relative z-10 flex-1">
              <h4 className="text-xs md:text-sm font-bold font-poppins text-emerald-400">Funds Disbursed</h4>
              <p className="text-[11px] md:text-xs text-emerald-100/80 font-medium mt-1 leading-relaxed">
                Your loan has been successfully disbursed to your registered settlement bank account. The funds should reflect in your account within 1-2 hours depending on banking clearings.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative overflow-hidden bg-white rounded-3xl border border-gray-100 p-6 md:p-8 shadow-sm space-y-8">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] grayscale invert pointer-events-none"
        style={{ backgroundImage:'url(/Pattern.svg)', backgroundSize:'180px' }}
      />

      <div className="relative z-10 flex flex-col gap-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-sm md:text-base font-bold text-gray-900 font-poppins">Loan Application Progress</h2>
            <p className="text-[10px] md:text-xs text-gray-400 font-medium mt-1">Ref: MM-94202 • Submitted today</p>
          </div>
          <div className={`px-3 py-1.5 rounded-xl text-[9px] md:text-[10px] font-bold border uppercase tracking-wider ${
            appStatus === 'Approved' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' :
            appStatus === 'Declined' ? 'bg-rose-50 text-rose-700 border-rose-100' :
            appStatus === 'Disbursed' ? 'bg-emerald-950 text-white border-emerald-900' :
            'bg-blue-50 text-blue-700 border-blue-100'
          }`}>
            {appStatus === 'Verification' ? 'In Verification' : appStatus}
          </div>
        </div>

        {/* Stepper progress indicator */}
        <div className="relative flex justify-between items-center w-full px-2 py-4">
          {/* Connector Track */}
          <div className="absolute top-[34px] left-[5%] right-[5%] h-1 bg-gray-100 -z-1 rounded-full" />
          
          {/* Active Connector Track */}
          <div 
            className={`absolute top-[34px] left-[5%] h-1 rounded-full -z-1 transition-all duration-700 ${
              appStatus === 'Declined' ? 'bg-rose-500' : 'bg-emerald-600'
            }`} 
            style={{ 
              width: appStatus === 'Submitted' ? '0%' :
                     appStatus === 'AgentAssigned' ? '22.5%' :
                     appStatus === 'Verification' ? '45%' :
                     appStatus === 'Approved' || appStatus === 'Declined' ? '67.5%' :
                     '90%'
            }} 
          />

          {/* Steps */}
          {steps.map((step) => {
            const status = getStepStatus(step.index);
            const isTerminalStep = step.key === 'ApprovedDeclined';
            const isDeclined = appStatus === 'Declined' && isTerminalStep;
            
            let colorClasses = 'bg-gray-50 border-gray-100 text-gray-300';
            if (status === 'done') {
              colorClasses = 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/10';
            } else if (status === 'active') {
              if (isDeclined) {
                colorClasses = 'bg-white border-2 border-rose-500 text-rose-500 shadow-md shadow-rose-500/10';
              } else if (appStatus === 'Disbursed') {
                colorClasses = 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/10';
              } else {
                colorClasses = 'bg-white border-2 border-emerald-600 text-emerald-600 shadow-md shadow-emerald-600/10';
              }
            }

            return (
              <div key={step.key} className="flex flex-col items-center gap-2.5 z-10 w-[18%]">
                <div className={`h-9 w-9 md:h-11 md:w-11 rounded-full border flex items-center justify-center transition-all duration-500 ${colorClasses}`}>
                  {status === 'done' ? <FiCheckCircle size={18} /> : step.icon}
                </div>
                <span className={`text-[8px] md:text-[10px] font-bold text-center tracking-wide ${
                  status === 'pending' ? 'text-gray-300' : 
                  isDeclined ? 'text-rose-500' :
                  status === 'active' ? 'text-emerald-700' : 'text-gray-800'
                }`}>
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Detailed Info area */}
        <div className="pt-2">
          {renderStatusDetails()}
        </div>
      </div>
    </div>
  );
};

export default LoanStatus;