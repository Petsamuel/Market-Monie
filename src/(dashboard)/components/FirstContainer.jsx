import React, { useState, useEffect } from 'react'
import Background from '../assets/first-container-bg.png'
import { FaEye, FaEyeSlash, FaChartLine } from "react-icons/fa";
import { HiTrendingDown } from "react-icons/hi";
import { MdOutlineAutorenew } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const FirstContainer = ({ loanStage }) => {
  const [loading, setLoading] = useState(true);
  const [hideAmount, setHideAmount] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="space-y-3">
          <Skeleton height={12} width={120} />
          <Skeleton height={28} width={200} />
        </div>
      );
    }

    switch (loanStage) {
      case 'User':
        return (
          <>
            <h2 className='text-[10px] md:text-[12px] text-emerald-100 font-bold tracking-[1.5px] uppercase'>
              Loan Balance
            </h2>

            <div className='flex gap-4 items-center mt-1 justify-between w-full'>
              <h2 className='text-xl md:text-3xl font-bold font-poppins tracking-tight'>
                {hideAmount ? '₦••••••' : '₦200,000,000.00'}
              </h2>

              <button
                onClick={() => setHideAmount(!hideAmount)}
                className='p-2 hover:bg-white/10 rounded-lg transition-colors text-white'
              >
                {hideAmount ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </>
        );

      case 'Guest':
      case 'Submitted':
        return (
          <>
            <h2 className='text-[10px] md:text-[12px] text-emerald-200/80 font-bold tracking-[1.5px] uppercase'>
              No Active Loan
            </h2>

            <h2 className='text-2xl md:text-3xl font-bold font-poppins tracking-tight mt-1 text-white'>
              ₦0
            </h2>
          </>
        );

      case 'Restricted':
        return (
          <h2 className='text-base md:text-lg font-bold font-poppins tracking-tight text-red-200'>
            Your account has been restricted
          </h2>
        );

      default:
        return null;
    }
  };

  const advertCard = [
    {
      id: 1,
      title: 'Higher Loan Limits',
      description: 'Get access to larger funding caps as your business credit and transactions grow.',
      icon: <FaChartLine/> 
    },
    {
      id: 2,
      title: 'Lower Interest Rate',
      description: 'Benefit from industry-leading low rates starting at 1.5% monthly.',
      icon: <HiTrendingDown/>
    },
    {
      id: 3,
      title: 'Flexible Repayment Plans',
      description: 'Choose repayment schedules that match your cashflow patterns seamlessly.',
      icon: <MdOutlineAutorenew/>
    }
  ];

  return (
    <div className='flex flex-col gap-6 w-full'>
      {/* Loan Overview Card */}
      <div 
        className='relative rounded-3xl shadow-xl border border-gray-100 bg-center bg-no-repeat bg-cover h-32 md:h-44 w-full overflow-hidden'
        style={{ backgroundImage: `url('${Background}')` }}
      >
        <div className='absolute inset-0 bg-gradient-to-r from-emerald-950/90 to-emerald-850/40 rounded-3xl'>
          <div className='flex items-center h-full px-6 md:px-8 text-white'>
            <div className='w-full'>
              {renderContent()}
            </div>
          </div>
        </div>
      </div>

      {/* Without Application Cards */}
      {loanStage === 'Guest' && (
        <div className='flex flex-col gap-6 w-full'>
          {/* Get a Loan Card + CTA */}
          <div className='relative rounded-3xl shadow-md border border-emerald-800/10 w-full p-6 md:p-8 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between bg-gradient-to-r from-emerald-900 to-emerald-800 text-white overflow-hidden group'>
            {/* Background pattern details */}
            <div className="absolute inset-0 opacity-[0.05] bg-repeat pointer-events-none" style={{ backgroundImage: 'url("/Pattern.svg")', backgroundSize: '150px' }} />
            
            <div className="relative z-10 space-y-1.5 max-w-xl">
              <h2 className='text-sm md:text-lg font-bold font-poppins tracking-wide'>Get Funding for your business</h2>
              <p className='text-xs text-emerald-100/90 leading-relaxed'>Get up to ₦10 million in flexible business loans to scale operations and purchase inventory.</p>
            </div>
            
            <button className='relative z-10 px-6 py-3.5 rounded-2xl bg-white text-emerald-950 font-bold text-xs md:text-sm flex items-center gap-2 hover:bg-emerald-50 active:scale-98 shadow-lg hover:shadow-xl hover:gap-3 transition-all duration-300'>
              Get loan <FiArrowRight size={16} />
            </button>
          </div>

          {/* Promotional Advert cards */}
          {loading ? (
            <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto pb-3 md:pb-0 scrollbar-hide snap-x">
              {[1, 2, 3].map((i) => (
                <div key={i} className="min-w-[80vw] md:min-w-0 bg-white border border-gray-100 rounded-2xl p-4 flex items-center md:flex-col gap-3 snap-center">
                  <Skeleton circle width={40} height={40} />
                  <div className="flex-1 w-full space-y-1.5">
                    <Skeleton width={100} height={12} />
                    <Skeleton count={1} height={10} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='flex md:grid md:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible pb-3 md:pb-0 scrollbar-hide snap-x snap-mandatory scroll-smooth'>
              {advertCard.map(advert => (
                <div 
                  key={advert.id} 
                  className='min-w-[80vw] md:min-w-0 bg-white border border-gray-100/80 rounded-2xl p-4 flex items-center md:flex-col md:text-center gap-4 hover:border-emerald-100 hover:shadow-lg hover:shadow-emerald-950/2 transition-all duration-300 group snap-center'
                >
                  <div className='bg-[#ef6537]/10 text-[#ef6537] text-xl p-3 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#ef6537]/15 transition-all duration-300'>
                    {advert.icon}
                  </div>
                  <div className="text-left md:text-center flex-1">
                    <h3 className='text-xs md:text-sm font-bold text-gray-800 font-poppins'>
                      {advert.title}
                    </h3>
                    <p className="text-[10px] md:text-[11px] text-gray-400 font-medium leading-relaxed mt-0.5">
                      {advert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FirstContainer;