import { FiBell, FiUser, FiSearch, FiMenu } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const TopBar = ({ user, loanStage, toggleMobile }) => {
  const location = useLocation();

  const getTitle = () => {
    if (location.pathname.includes('/loan-requests')) return "Loan Requests";
    if (location.pathname.includes('/analytics')) return "Analytics Overview";
    if (location.pathname.includes('/settings')) return "Settings";
    if (location.pathname.includes('/support')) return "Support Center";
    if (location.pathname.includes('/make-payment')) return "Make Payment";
    return "Dashboard Overview";
  };

  return (
    <header className="h-20 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 px-4 md:px-8 flex items-center justify-between sticky top-0 z-30 shrink-0 transition-colors duration-300">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleMobile}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-xl text-gray-600 transition-colors"
        >
          <FiMenu size={20} />
        </button>
        <div className="flex items-center gap-2">
          <img
            src="/market-monie.png"
            alt="Market Monie"
            className="h-7 md:h-9 w-auto transition-transform hover:scale-102"
          />
        </div>
      </div>

      <div className="hidden md:flex flex-col items-center text-center">
        <h1 className="text-sm md:text-base font-bold text-gray-800 dark:text-gray-100 font-poppins">
          Welcome to Marketmonie, Hello <span className="text-emerald-600 font-semibold">{user.firstname}</span>
        </h1>
        <p className="text-[9px] text-emerald-600 font-bold tracking-[0.2em] uppercase mt-0.5">
          {getTitle()}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="md:hidden flex flex-col items-end">
          <span className="text-[10px] font-medium text-gray-400">Welcome, {user.firstname}</span>
        </div>

        <div className="flex items-center gap-3 border-l border-gray-100 dark:border-gray-800 pl-4 md:pl-6">
          <button className="h-10 w-10 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-600 transition-all relative group">
            <FiBell size={20} />
            <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-900 group-hover:animate-ping" />
          </button>

          <button className="flex items-center gap-3 pl-2 pr-1 py-1 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-sm font-bold text-gray-900 dark:text-gray-100 leading-none">{user.firstname} {user.lastname}</span>
              <span className="text-[10px] text-gray-400 font-medium">Verified Merchant</span>
            </div>
            <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold border-2 border-emerald-50 shadow-sm shadow-emerald-100">
              {user.firstname[0]}{user.lastname[0]}
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
