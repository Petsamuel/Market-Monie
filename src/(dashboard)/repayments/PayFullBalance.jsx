import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiChevronDown, FiCreditCard, FiLock, FiCheckCircle } from 'react-icons/fi';
import { BsBank } from 'react-icons/bs';

const PayFullBalance = () => {
  const navigate = useNavigate();
  
  // Mock data
  const outstandingBalance = 425000;
  const totalRepaidAmount = 75000;
  
  const [paymentType, setPaymentType] = useState('full');
  const [amount, setAmount] = useState(outstandingBalance.toString());
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleAmountChange = (e) => {
    // Usually full balance amount is fixed, but allowing input per criteria with prefilled full balance
    setAmount(e.target.value);
  };

  const handlePaymentTypeChange = (e) => {
    const type = e.target.value;
    setPaymentType(type);
    if (type === 'due') navigate('/dashboard/repayments/pay-now');
    else if (type === 'missed') navigate('/dashboard/repayments/missed-details');
    else if (type === 'full') navigate('/dashboard/repayments/pay-full');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 font-poppins pb-10">
      <div className="flex items-center gap-3">
        <button 
          onClick={() => navigate(-1)}
          className="h-10 w-10 flex items-center justify-center rounded-xl bg-white border border-gray-100 text-gray-600 hover:text-blue-600 hover:border-blue-100 transition-all shadow-xs cursor-pointer"
        >
          <FiArrowLeft size={18} />
        </button>
        <div>
          <h2 className="text-xl font-bold text-gray-900 leading-tight">Pay Full Balance</h2>
          <p className="text-[11px] text-gray-400 font-medium">Clear your entire outstanding loan</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Left Column: Balances */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-blue-600 text-white rounded-3xl p-6 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.05] bg-repeat pointer-events-none" style={{ backgroundImage: 'url("/Pattern.svg")', backgroundSize: '120px' }} />
            <div className="relative z-10">
              <span className="text-[11px] text-blue-100 font-bold uppercase tracking-wider flex items-center gap-1.5"><FiCheckCircle size={14}/> Outstanding Balance</span>
              <h3 className="text-2xl font-bold mt-1">₦{outstandingBalance.toLocaleString()}</h3>
            </div>
          </div>
          
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Total Repaid Amount</span>
            <h3 className="text-xl font-bold text-gray-800 mt-1">₦{totalRepaidAmount.toLocaleString()}</h3>
          </div>
        </div>

        {/* Right Column: Payment Form */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 p-6 md:p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700">Payment Type</label>
              <div className="relative">
                <select 
                  value={paymentType}
                  onChange={handlePaymentTypeChange}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all appearance-none cursor-pointer font-medium"
                >
                  <option value="due">Due Installment</option>
                  <option value="missed">Missed Installment</option>
                  <option value="full">Full Balance</option>
                </select>
                <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700">Amount to Pay (₦) - Full Balance</label>
              <input 
                type="number" 
                value={amount}
                onChange={handleAmountChange}
                className="w-full bg-blue-50/50 border border-blue-200 text-blue-900 text-sm font-bold rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                placeholder="Enter amount"
              />
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-700">Payment Method (Via Digitvantpay)</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                    paymentMethod === 'card' ? 'border-blue-600 bg-blue-50/30' : 'border-gray-100 hover:border-blue-200'
                  }`}
                >
                  <FiCreditCard size={24} className={paymentMethod === 'card' ? 'text-blue-600' : 'text-gray-400'} />
                  <span className={`text-xs font-bold mt-2 ${paymentMethod === 'card' ? 'text-blue-800' : 'text-gray-600'}`}>Debit Card</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('bank')}
                  className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                    paymentMethod === 'bank' ? 'border-blue-600 bg-blue-50/30' : 'border-gray-100 hover:border-blue-200'
                  }`}
                >
                  <BsBank size={24} className={paymentMethod === 'bank' ? 'text-blue-600' : 'text-gray-400'} />
                  <span className={`text-xs font-bold mt-2 ${paymentMethod === 'bank' ? 'text-blue-800' : 'text-gray-600'}`}>Bank Transfer</span>
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-[10px] text-gray-400 font-medium">
                <FiLock size={12} /> Secure encrypted payment
              </div>
              <button
                type="submit"
                disabled={isProcessing}
                className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-blue-600/20 cursor-pointer flex items-center gap-2"
              >
                {isProcessing ? 'Processing...' : 'Confirm & Pay Full'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PayFullBalance;
