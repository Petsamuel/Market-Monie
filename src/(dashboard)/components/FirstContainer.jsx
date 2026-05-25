import React, { useState, useEffect } from 'react'
import Background from '../assets/first-container-bg.png'
import { FaEye, FaEyeSlash, FaChartLine } from "react-icons/fa";
import { HiTrendingDown } from "react-icons/hi";
import { MdOutlineAutorenew } from "react-icons/md";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const FirstContainer = ({ loanStage, loading }) => {
  const [hideAmount, setHideAmount] = useState(false);

  useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 1500);

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
          <h2 className='text-[12px] text-gray-200 font-bold tracking-[1.5px] uppercase'>
            Loan Balance
          </h2>

          <div className='flex gap-4 items-center mt-1 justify-between'>
            <h2 className='text-2xl font-bold font-poppins tracking-tight'>
              {hideAmount ? '₦••••••' : '₦200,000,000.00'}
            </h2>

            <button
              onClick={() => setHideAmount(!hideAmount)}
              className='p-2 mt-2 hover:bg-white/10 rounded-lg transition-colors text-white'
            >
              {hideAmount ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
            </button>
          </div>
        </>
      );

    case 'Guest':
      return (
        <>
          <h2 className='text-[12px] text-gray-200 font-bold tracking-[1.5px] uppercase'>
            No Active Loan
          </h2>

          <h2 className='text-2xl font-bold font-poppins tracking-tight'>
            ₦0
          </h2>
        </>
      );

    case 'Restricted':
      return (
        <h2 className='text-lg font-bold font-poppins tracking-tight'>
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
      icon: <FaChartLine/> 
    },
    {
      id: 2,
      title: 'Lower Interest Rate',
      icon: <HiTrendingDown/>
    },
    {
      id: 3,
      title: 'Flexible Repayment Plans',
      icon: <MdOutlineAutorenew/>
    }
  ]

  return (
    <div className='flex flex-col gap-6'>
    <div className='relative rounded-3xl shadow-md border border-gray-100 bg-center bg-no-repeat bg-cover h-30 md:h-52 w-full overflow-hidden'
      style={{ backgroundImage: `url('${Background}')` }}
    >
      <div className='absolute inset-0 bg-linear-to-r from-green-900/80 to-green-900/20 rounded-3xl'>

        <div className='flex flex-col lg:flex-row gap-8 justify-center lg:justify-between items-center h-full px-8 py-3 text-white'>

          <div className='flex flex-col w-full'>
            {renderContent()}
          </div>

        </div>
      </div>
    </div>
    {loanStage === 'Guest' && (
      <div className='flex flex-col gap-6 rounded-3xl shadow-lg w-full'>
      <div className='rounded-3xl shadow-lg border border-green-900 w-full h-30 px-8 flex items-center justify-between bg-linear-to-l from-green-900/80 to-green-900/20 overflow-hidden'>
        <div>
        <h2 className='text-[12px] font-bold tracking-[1.5px]'>Get Funding for your business</h2>
        <h3 className='text-xs'>Get up to ₦10 million in flexible business loans</h3>
        </div>
        <button className='px-3 py-3 rounded-full bg-black text-white text-xs flex items-center justify-center transition'>Get Loan</button>
      </div>

      {/* Promotional Advert card */}
      {loading ? (
  <div className="flex justify-around p-4">
    {[1,2,3].map((i) => (
      <div key={i} className="flex flex-col items-center gap-3">
        <Skeleton circle width={50} height={50} />
        <Skeleton width={80} height={12} />
      </div>
    ))}
  </div>
) : (
  <div className='flex items-center justify-around p-4'>
    {advertCard.map(advert => (
      <div key={advert.id} className='flex flex-col justify-center items-cente text-center gap-3'>
        <div className='bg-[#ef6537]/20 rounded-full text-[#ef6537] text-3xl p-3 flex items-center justify-center'>
          {advert.icon}
        </div>
        <h2 className='text-xs lg:text-lg font-semibold w-full'>
          {advert.title}
        </h2>
      </div>
    ))}
  </div>
)}
      </div>
      )}
    </div>
  )
}

export default FirstContainer