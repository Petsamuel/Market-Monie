import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiCopy, FiCheck, FiChevronRight } from 'react-icons/fi';
import { FaShareAlt, FaUndo } from 'react-icons/fa';

const TransactionDetails = () => {
    const navigate = useNavigate();
    const [copiedField, setCopiedField] = useState(null);

    // Dummy Data pulled directly from your receipt image
    const receiptData = {
        senderName: "John Doe Dike",
        senderBank: "PalmPay",
        senderPhone: "813****760",
        amount: "4,150.00",
        status: "Successful",
        creditedTo: "Available Balance",
        remark: "JANE DOE DIANA:813****760",
        transactionType: "Bank Deposit",
        transactionNo: "260517060100368168465607",
        transactionDate: "May 17th, 2026 10:45:01",
        sessionId: "100033260517094500637801612686",
        category: "Deposit"
    };

    // Copy to clipboard helper function
    const handleCopy = (text, fieldName) => {
        navigator.clipboard.writeText(text);
        setCopiedField(fieldName);
        setTimeout(() => setCopiedField(null), 2000);
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Transaction Receipt',
                    text: `Transfer of ₦${receiptData.amount} from ${receiptData.senderName} was ${receiptData.status}.`,
                    url: window.location.href,
                });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            alert('Sharing is not supported on this device browser.');
        }
    };

    return (
        <div className="w-full min-h-screen p-4 bg-gray-50/50 dark:bg-gray-900 flex flex-col items-center relative transition-colors duration-300">
            <div className="w-full max-w-3xl space-y-4">

                {/* Header Navbar Section */}
                <div className="flex items-center justify-between h-14">
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="h-10 w-10 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-emerald-600 hover:border-emerald-100 transition-all shadow-xs cursor-pointer"
                        >
                            <FiArrowLeft size={18} />
                        </button>
                        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Transaction Details</h2>
                    </div>
                    {/* User Profile Decorative Quick Link Asset */}
                    <div className="h-9 w-9 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 cursor-pointer transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                </div>

                {/* Hero Summary Card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-xs flex flex-col items-center text-center relative mt-4 transition-colors">
                    {/* Floating Purple Logo Node matching your brand snapshot */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2  rounded-full flex items-center justify-center">
                        <img
                            src="/market-monie.png"
                            alt="Market Monie"
                            className="h-7 md:h-9 w-auto transition-transform hover:scale-102"
                        />
                    </div>

                    <div className="mt-4 space-y-2">
                        <p className="text-sm font-medium text-gray-600">
                            Transfer from {receiptData.senderName}
                        </p>
                        <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight">
                            ₦{receiptData.amount}
                        </h1>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-semibold transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            {receiptData.status}
                        </div>
                    </div>
                </div>

                {/* Deep Detail Specs Sheet Items Card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-xs space-y-4 transition-colors">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 tracking-wide">Transaction Details</h3>

                    <div className="space-y-3.5 text-sm">
                        {/* Credited To Row */}
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">Credited to</span>
                            <button type="button" className="flex items-center text-gray-800 dark:text-gray-200 font-medium hover:text-emerald-600 transition-colors cursor-pointer text-right">
                                {receiptData.creditedTo}
                                <FiChevronRight className="text-gray-400 mt-0.5" size={16} />
                            </button>
                        </div>

                        {/* Sender Details Row */}
                        <div className="flex items-start justify-between gap-4">
                            <span className="text-gray-400 whitespace-nowrap">Sender Details</span>
                            <div className="text-right">
                                <p className="font-medium text-gray-800 dark:text-gray-200">{receiptData.senderName}</p>
                                <p className="text-xs text-gray-400 dark:text-gray-500">{receiptData.senderBank} | {receiptData.senderPhone}</p>
                            </div>
                        </div>

                        {/* Remark Row */}
                        <div className="flex items-start justify-between gap-4">
                            <span className="text-gray-400 whitespace-nowrap">Remark</span>
                            <span className="font-medium text-gray-800 dark:text-gray-200 text-right break-all max-w-[70%]">{receiptData.remark}</span>
                        </div>

                        {/* Transaction Type Row */}
                        <div className="flex items-center justify-between">
                            <span className="text-gray-400">Transaction Type</span>
                            <span className="font-medium text-gray-800 dark:text-gray-200">{receiptData.transactionType}</span>
                        </div>

                        {/* Transaction No Row with Clipboard Copy */}
                        <div className="flex items-center justify-between">
                            <span className="text-gray-400">Transaction No.</span>
                            <div className="flex items-center gap-1.5 text-gray-800 dark:text-gray-300 font-mono text-xs">
                                <span className="break-all text-right">{receiptData.transactionNo}</span>
                                <button
                                    type="button"
                                    onClick={() => handleCopy(receiptData.transactionNo, 'txNo')}
                                    className="text-gray-400 hover:text-emerald-600 transition-colors p-1 cursor-pointer"
                                >
                                    {copiedField === 'txNo' ? <FiCheck className="text-emerald-600" size={14} /> : <FiCopy size={14} />}
                                </button>
                            </div>
                        </div>

                        {/* Transaction Date Row */}
                        <div className="flex items-center justify-between">
                            <span className="text-gray-400">Transaction Date</span>
                            <span className="font-medium text-gray-800 dark:text-gray-200">{receiptData.transactionDate}</span>
                        </div>

                        {/* Session ID Row with Clipboard Copy */}
                        <div className="flex items-center justify-between">
                            <span className="text-gray-400">Session ID</span>
                            <div className="flex items-center gap-1.5 text-gray-800 dark:text-gray-300 font-mono text-xs max-w-[70%]">
                                <span className="truncate block w-44 sm:w-auto text-right">{receiptData.sessionId}</span>
                                <button
                                    type="button"
                                    onClick={() => handleCopy(receiptData.sessionId, 'sId')}
                                    className="text-gray-400 hover:text-emerald-600 transition-colors p-1 cursor-pointer"
                                >
                                    {copiedField === 'sId' ? <FiCheck className="text-emerald-600" size={14} /> : <FiCopy size={14} />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* More Actions Card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-xs space-y-4 transition-colors">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 tracking-wide">More Actions</h3>

                    {/* Category Selection Action Link Item */}
                    <div className="flex items-center justify-between text-sm pb-1">
                        <span className="text-gray-400">Category</span>
                        <button type="button" className="flex items-center text-gray-800 dark:text-gray-200 font-medium hover:text-emerald-600 transition-colors cursor-pointer">
                            {receiptData.category}
                            <FiChevronRight className="text-gray-400 mt-0.5" size={16} />
                        </button>
                    </div>

                    <div className="border-t border-dashed border-gray-100 dark:border-gray-700 my-2 transition-colors"></div>

                    {/* Reverse/Transfer Back Optional Context Action trigger */}
                    <button
                        type="button"
                        className="flex items-center gap-2.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer py-1"
                    >
                        <FaUndo size={12} />
                        <span>Transfer Back</span>
                    </button>
                </div>

                {/* Primary Sticky Action CTA Button */}
                <div className="pt-2">
                    <button
                        type="button"
                        onClick={handleShare}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm outline-none shadow-xs transition-all cursor-pointer text-center"
                    >
                        <FaShareAlt size={14} />
                        <span>Share Receipt</span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default TransactionDetails;