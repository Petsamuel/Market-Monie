import { NavLink } from "react-router-dom";
import { 
  FiHome, 
  FiFileText, 
  FiSettings, 
  FiHelpCircle, 
  FiLogOut,
  FiChevronDown,
  FiPieChart
} from "react-icons/fi";
import { useState } from "react";

const Sidebar = () => {
  const [isLoanMenuOpen, setIsLoanMenuOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <FiHome />, path: "/dashboard" },
    { 
      name:"Loan Requests", 
      icon: <FiFileText />, 
      path: "/dashboard/loan-requests",
      hasSubmenu: true,
      submodules: [
        { name: "Loan History", path: "/dashboard/loan-requests/history" },
        { name: "Status Tracker", path: "/dashboard/loan-requests/tracker" },
        { name: "Loan Details", path: "/dashboard/loan-requests/details" },
      ]
    },
    { name: "Analytics", icon: <FiPieChart />, path: "/dashboard/analytics" },
  ];

  const bottomItems = [
    { name: "Support", icon: <FiHelpCircle />, path: "/dashboard/support" },
    { name: "Settings", icon: <FiSettings />, path: "/dashboard/settings" },
  ];

  return (
    <div className="w-64 bg-emerald-950 text-white flex flex-col h-screen fixed left-0 top-0 border-r border-emerald-900/50 z-50 overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] grayscale invert pointer-events-none"
        style={{ backgroundImage: 'url(/Pattern.svg)', backgroundSize: '180px' }}
      />
      
      {/* Brand */}
      <div className="p-8 border-b border-white/5 shrink-0 relative z-10">
        <img src="/market-monie.png" alt="Market Monie" className="h-8 w-auto brightness-0 invert" />
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-4 py-8 space-y-1.5 overflow-y-auto custom-scrollbar relative z-10">
        {menuItems.map((item) => (
          <div key={item.name}>
            {item.hasSubmenu ? (
              <div className="mb-2">
                <button 
                  onClick={() => setIsLoanMenuOpen(!isLoanMenuOpen)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all duration-300 hover:bg-white/5 group ${
                    isLoanMenuOpen ? "text-emerald-400 bg-white/5" : "text-emerald-100/70"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl opacity-80 group-hover:opacity-100 transition-all">{item.icon}</span>
                    <span className="font-semibold text-sm tracking-wide">{item.name}</span>
                  </div>
                  <FiChevronDown className={`transition-transform duration-300 ${isLoanMenuOpen ? "rotate-180" : ""}`} />
                </button>
                
                {isLoanMenuOpen && (
                  <div className="mt-1 ml-4 border-l border-white/5 pl-6 space-y-1 animate-in slide-in-from-top-2 duration-300">
                    {item.submodules.map((sub) => (
                      <NavLink
                        key={sub.name}
                        to={sub.path}
                        className={({ isActive }) => 
                          `block px-3 py-2 text-[13px] rounded-lg transition-all ${
                            isActive ? "text-emerald-400 font-bold bg-emerald-400/5" : "text-emerald-100/40 hover:text-emerald-100"
                          }`
                        }
                      >
                        {sub.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                to={item.path}
                end={item.path === "/dashboard"}
                className={({ isActive }) => 
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                    isActive 
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-950/20" 
                      : "text-emerald-100/70 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                <span className="text-xl opacity-80 group-hover:opacity-100 transition-all">{item.icon}</span>
                <span className="font-semibold text-sm tracking-wide">{item.name}</span>
              </NavLink>
            )}
          </div>
        ))}
      </nav>

      {/* Bottom Navigation */}
      <div className="p-4 border-t border-white/5 space-y-1 mt-auto relative z-10">
        {bottomItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => 
              `flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                isActive ? "text-emerald-400 bg-white/5" : "text-emerald-100/50 hover:text-white hover:bg-white/5"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-xs font-semibold tracking-wide">{item.name}</span>
          </NavLink>
        ))}
        
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl w-full text-red-400/60 hover:text-red-400 hover:bg-red-400/5 transition-all duration-300 mt-2">
          <FiLogOut className="text-lg" />
          <span className="text-xs font-semibold tracking-wide">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
