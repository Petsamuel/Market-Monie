import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Loan = () => {
    const navigate = useNavigate();
    return (
        <section className='w-full h-screen flex items-center justify-center'>
            <div className='rounded-2xl bg-white border border-white min-w-1/2 flex flex-col items-center gap-5 p-4'>
                <h2 className='font-semibold text-left w-full'>Loan Details</h2>
                <div className='flex flex-col w-full gap-2'>
                    <label htmlFor="loanAmount">Loan Amount</label>
                    <input type="text" id="loanAmount" className='border border-gray-300 rounded-xl p-2.5 outline-none focus:border-green-600 transition-colors' />
                    <div className='flex flex-wrap gap-2 text-sm font-light text-slate-600'>
                        <span>#10,000</span>
                        <span>#25,000</span>
                        <span>#50,000</span>
                        <span>#100,000</span>
                        <span>#200,000</span>
                        <span>#500,000</span>
                    </div>
                </div>
                <div className='flex flex-col w-full gap-2'>
                    <label htmlFor="bankName">Bank Name</label>
                    <select name="" id="" className='border border-gray-300 rounded-xl p-2.5 outline-none focus:border-green-600 transition-colors'>
                        <option value="">Select Bank</option>
                        <option value="">Access Bank</option>
                        <option value="">First Bank</option>
                        <option value="">Guarantee Trust Bank</option>
                        <option value="">Polaris Bank</option>
                        <option value="">Zenith Bank</option>
                        <option value="">DigitvantPay</option>
                        <option value="">Moniepoint</option>
                        <option value="">OPay</option>
                        <option value="">PalmPay</option>
                    </select>
                </div>
                <div className='flex flex-col w-full gap-2'>
                    <label htmlFor="accountNumber">Account Number</label>
                    <input type="text" id="accountNumber" placeholder='10-digit NUBAN number' className='border border-gray-300 rounded-xl p-2.5 outline-none focus:border-green-600 transition-colors' />
                </div>
                <div className='flex flex-col w-full gap-2'>
                    <label htmlFor="accountName">Account Name</label>
                    <input type="text" id="accountName" placeholder='Name on your bank account' className='border border-gray-300 rounded-xl p-2.5 outline-none focus:border-green-600 transition-colors' />
                </div>
                <div className='flex flex-col w-full gap-2'>
                    <label htmlFor="existingLoans">Existing Loans <span className='text-sm text-slate-400'>(optional)</span></label>
                    <input type="text" id="existingLoans" placeholder='e.g. Lender name & outstanding amount, if any' className='border border-gray-300 rounded-xl p-2.5 outline-none focus:border-green-600 transition-colors' />
                </div>
                <div className='flex w-full justify-between gap-3 mt-2'>
                    <button
                        onClick={() => navigate("/business")}
                        className='border border-green-800 text-green-800 rounded-xl p-2.5 w-1/2 hover:bg-green-50 transition-colors font-medium'
                    >
                        Back
                    </button>
                    <button
                        onClick={() => navigate("/loan")}
                        className='text-white bg-green-800 rounded-xl p-2.5 w-1/2 hover:bg-green-900 transition-colors shadow-md font-medium'
                    >
                        Review Application
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Loan