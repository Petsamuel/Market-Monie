import { FiTrendingUp, FiArrowUpRight, FiBarChart2, FiDollarSign, FiCalendar } from "react-icons/fi";

const Analytics = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 font-poppins">Business Analytics</h2>
          <p className="text-gray-500 text-sm mt-1">Detailed insights into your business performance and loan cycles.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-50 transition-all">
            <FiCalendar /> Last 30 Days
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 rounded-xl text-xs font-bold text-white shadow-lg shadow-emerald-200 hover:bg-emerald-500 transition-all">
            Export Report
          </button>
        </div>
      </div>

      {/* Hero Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AnalyticsHeroCard 
          title="Revenue Growth" 
          value="₦8,245,000" 
          trend="+22.4%" 
          description="Total revenue generated this month"
          icon={<FiTrendingUp />}
          color="emerald"
        />
        <AnalyticsHeroCard 
          title="Loan Utilization" 
          value="45%" 
          trend="In Control" 
          description="Percentage of your loan limit currently in use"
          icon={<FiBarChart2 />}
          color="blue"
        />
        <AnalyticsHeroCard 
          title="Repayment Health" 
          value="98.2%" 
          trend="Great" 
          description="Your score based on prompt repayments"
          icon={<FiDollarSign />}
          color="purple"
        />
      </div>

      {/* Chart Placeholders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ChartBox title="Revenue Trends" />
        <ChartBox title="Repayment Schedule" />
      </div>

      {/* Detailed Stats Table */}
      <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">Historical Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-50">
                <th className="pb-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Month</th>
                <th className="pb-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Revenue</th>
                <th className="pb-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Repayment</th>
                <th className="pb-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { month: "March 2026", revenue: "₦2.1M", repayment: "₦45k", status: "Paid" },
                { month: "February 2026", revenue: "₦1.8M", repayment: "₦45k", status: "Paid" },
                { month: "January 2026", revenue: "₦2.4M", repayment: "₦45k", status: "Paid" },
              ].map((row, i) => (
                <tr key={i} className="group hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 text-sm font-bold text-gray-900">{row.month}</td>
                  <td className="py-4 text-sm font-medium text-gray-600">{row.revenue}</td>
                  <td className="py-4 text-sm font-medium text-gray-600">{row.repayment}</td>
                  <td className="py-4">
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const AnalyticsHeroCard = ({ title, value, trend, description, icon, color }) => {
  const themes = {
    emerald: "bg-emerald-50/50 border-emerald-100 text-emerald-600",
    blue: "bg-blue-50/50 border-blue-100 text-blue-600",
    purple: "bg-purple-50/50 border-purple-100 text-purple-600"
  };

  const iconBg = {
    emerald: "bg-emerald-600 text-white shadow-emerald-200",
    blue: "bg-blue-600 text-white shadow-blue-200",
    purple: "bg-purple-600 text-white shadow-purple-200"
  };

  return (
    <div className={`relative overflow-hidden p-8 rounded-3xl border-2 transition-all hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-1 bg-white group ${themes[color]}`}>
      {/* Background Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] grayscale invert pointer-events-none"
        style={{ 
          backgroundImage: 'url(/Pattern.svg)',
          backgroundSize: '200px',
        }}
      />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className={`h-12 w-12 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 ${iconBg[color]}`}>
            {icon}
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-white rounded-lg shadow-sm text-gray-900">
            {trend}
          </span>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-2 font-poppins">{title}</p>
          <h3 className="text-3xl font-bold text-gray-900 truncate font-poppins">{value}</h3>
          <p className="text-[11px] text-gray-500 font-medium mt-4 leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>
      </div>
      
      {/* Decorative Gradient Blob */}
      <div className={`absolute -bottom-12 -right-12 h-32 w-32 rounded-full blur-3xl opacity-20 pointer-events-none ${iconBg[color].split(' ')[0]}`} />
    </div>
  );
};

const ChartBox = ({ title }) => (
  <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm h-80 flex flex-col">
    <div className="flex justify-between items-center mb-8">
      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">{title}</h3>
      <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
        <FiArrowUpRight className="text-gray-400" />
      </button>
    </div>
    <div className="flex-1 bg-gray-50/50 rounded-2xl border-2 border-dashed border-gray-100 flex items-center justify-center flex-col gap-2">
       <div className="h-10 w-10 text-gray-300">
         <FiBarChart2 size={40} />
       </div>
       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Visual Data Coming Soon</p>
    </div>
  </div>
);

export default Analytics;
