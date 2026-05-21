import react, {useState} from 'react'
import { useOutletContext, useNavigate } from"react-router-dom";
import { 
  FiPlus, 
  FiEye, 
  FiCreditCard, 
  FiMessageCircle, 
  FiArrowRight, 
  FiClock 
} from"react-icons/fi";
import { WelcomeCard, ApplicationStatusCard, LoanSummaryCard } from"./components/LoanCards";
import FirstContainer from"./components/FirstContainer";
import LoanStatus from"./components/LoanStatus";
import Shortcuts from"./components/Shortcuts";

const Dashboard = () => {
  const { user } = useOutletContext();

  const [loanStage, setLoanStage] = useState('Guest');
  const navigate = useNavigate();


  return (
    <div className="space-y-8 animate-in fade-in duration-700 font-poppins">
      <section className="flex flex-col gap-6">
        <FirstContainer loanStage={loanStage}/>
        <LoanStatus loanStage={loanStage}/>
        <Shortcuts loanStage={loanStage}/>
      </section>

     {/* DEV CONTROLS */}
      <div className="flex gap-3 mt-6">
        <button
          onClick={() => setLoanStage('User')}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          Active
        </button>

        <button
          onClick={() => setLoanStage('Guest')}
          className="px-3 py-1 bg-gray-500 text-white rounded"
        >
          Inactive
        </button>

        <button
          onClick={() => setLoanStage('Restricted')}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          Restricted
        </button>
      </div>
    </div>
  );
};

const ShortcutButton = ({ icon, title, description, onClick, disabled = false, isSecondary = false }) => (
  <button 
    onClick={onClick}
    disabled={disabled}
    className={`p-6 rounded-2xl border transition-all text-left flex flex-col gap-4 group ${
      disabled 
        ?"bg-gray-50 border-gray-100 opacity-50 cursor-not-allowed" 
        :"bg-white border-gray-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/5"
    }`}
  >
    <div className={`h-12 w-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
      disabled 
        ?"bg-gray-100 text-gray-400" 
        :"bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white shadow-sm"
    }`}>
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors uppercase tracking-widest text-[10px]">{title}</h4>
      <p className="text-xs text-gray-400 font-medium mt-1">{description}</p>
    </div>
  </button>
);

export default Dashboard;
