import { FiTrendingUp, FiArrowDown, FiCreditCard, FiActivity } from "react-icons/fi";

const QuickStats = () => {
  const stats = [
    { 
      label: "Total Sales", 
      value: "₦2,450,000", 
      trend: "+12.5%", 
      isPositive: true,
      icon: <FiTrendingUp />
    },
    { 
      label: "Repayments", 
      value: "₦45,000", 
      trend: "Due in 15 days", 
      isPositive: null,
      icon: <FiCreditCard />
    },
    { 
      label: "Credit Score", 
      value: "740", 
      trend: "Excellent", 
      isPositive: true,
      icon: <FiActivity />
    },
    { 
      label: "Limit Used", 
      value: "4.5%", 
      trend: "₦450k / ₦10M", 
      isPositive: null,
      icon: <FiArrowDown className="rotate-180" />
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
          <div className="flex justify-between items-start mb-4">
            <div className="h-10 w-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
              {stat.icon}
            </div>
            {stat.isPositive !== null && (
              <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                stat.isPositive ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
              }`}>
                {stat.trend}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{stat.label}</p>
          <h3 className="text-xl font-bold text-gray-900 mt-1">{stat.value}</h3>
          {(stat.isPositive === null) && (
             <p className="text-[10px] text-gray-400 font-medium mt-1 uppercase tracking-tighter">{stat.trend}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuickStats;
