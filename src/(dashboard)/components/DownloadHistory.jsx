import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiChevronDown, FiShare2 } from 'react-icons/fi';
import { FaCheck, FaSpinner } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { globalUserData } from '../../store/Data';

const DownloadHistory = () => {
    const TimeFrames = [
        {
            category: "Weeks",
            options: [
                { id: 1, name: '1 week', value: 7, unit: 'days' },
                { id: 2, name: '2 weeks', value: 14, unit: 'days' },
                { id: 3, name: '3 weeks', value: 21, unit: 'days' }
            ]
        },
        {
            category: "Months",
            options: [
                { id: 4, name: '1 month', value: 1, unit: 'months' },
                { id: 5, name: '2 months', value: 2, unit: 'months' },
                { id: 6, name: '3 months', value: 3, unit: 'months' },
                { id: 7, name: '4 months', value: 4, unit: 'months' },
                { id: 8, name: '5 months', value: 5, unit: 'months' },
                { id: 9, name: '6 months', value: 6, unit: 'months' },
                { id: 10, name: '7 months', value: 7, unit: 'months' },
                { id: 11, name: '8 months', value: 8, unit: 'months' },
                { id: 12, name: '9 months', value: 9, unit: 'months' },
                { id: 13, name: '10 months', value: 10, unit: 'months' },
                { id: 14, name: '11 months', value: 11, unit: 'months' }
            ]
        },
        {
            category: "Years",
            options: [
                { id: 15, name: '1 year', value: 1, unit: 'years' },
                { id: 16, name: '2 years', value: 2, unit: 'years' },
                { id: 17, name: '3 years', value: 3, unit: 'years' },
                { id: 18, name: '4 years', value: 4, unit: 'years' },
                { id: 19, name: '5 years', value: 5, unit: 'years' }
            ]
        }
    ];

    const FileTypes = ['PDF Document (.pdf)', 'Excel Spreadsheet (.xlsx)'];

    // Form States
    const [selectedTimeFrame, setSelectedTimeFrame] = useState('1 month');
    const [openDropdown, setOpenDropdown] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(new Date());
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedFileType, setSelectedFileType] = useState('PDF Document (.pdf)');
    const [fileTypeDropdownOpen, setFileTypeDropdownOpen] = useState(false);
    
    // Popup Modal Flow States: 'idle' | 'downloading' | 'done'
    const [downloadStatus, setDownloadStatus] = useState('idle');

    const navigate = useNavigate();

    // Side effect: Automatically calculate and update dates based on dropdown selection
    useEffect(() => {
        if (!selectedTimeFrame) return;

        let selectedOption = null;
        for (const group of TimeFrames) {
            const found = group.options.find(opt => opt.name === selectedTimeFrame);
            if (found) {
                selectedOption = found;
                break;
            }
        }

        if (selectedOption) {
            const today = new Date();
            const calculatedStartDate = new Date();

            switch (selectedOption.unit) {
                case 'days':
                    calculatedStartDate.setDate(today.getDate() - selectedOption.value);
                    break;
                case 'months':
                    calculatedStartDate.setMonth(today.getMonth() - selectedOption.value);
                    break;
                case 'years':
                    calculatedStartDate.setFullYear(today.getFullYear() - selectedOption.value);
                    break;
                default:
                    break;
            }

            setStartDate(calculatedStartDate);
            setEndDate(today);
        }
    }, [selectedTimeFrame]);

    const toggleDropdown = (category) => {
        setFileTypeDropdownOpen(false);
        setOpenDropdown(openDropdown === category ? null : category);
    };

    const handleSelectTimeFrame = (name) => {
        setSelectedTimeFrame(name);
        setOpenDropdown(null);
    };

    const handleManualDateChange = (date, isStart) => {
        if (isStart) {
            setStartDate(date);
        } else {
            setEndDate(date);
        }
        setSelectedTimeFrame(null);
    };

    const handleSelectFileType = (type) => {
        setSelectedFileType(type);
        setFileTypeDropdownOpen(false);
    };

    const isCategoryActive = (group, currentSelection) => {
        return group.options.some(opt => opt.name === currentSelection);
    };

    const handleDownloadSubmit = (e) => {
        e.preventDefault();
        setDownloadStatus('downloading');

        setTimeout(() => {
            setDownloadStatus('done');
        }, 2500);
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Account Statement',
                    text: `My Account Statement summary from ${startDate?.toLocaleDateString()} to ${endDate?.toLocaleDateString()}`,
                    url: window.location.href
                });
            } catch (error) {
                console.log('Error sharing contents context details:', error);
            }
        } else {
            alert('Sharing is not supported on this device/browser context fallback. Links copied to clipboard instead.');
        }
    };

    return (
        /* Added flex, flex-col, items-center, and a light background grid wrapper to help balance large monitor spaces */
        <div className="w-full min-h-screen p-4 bg-gray-50/50 flex flex-col items-center relative">
            
            <div className="w-full max-w-3xl space-y-6">
                
                {/* Header section */}
                <div className="flex items-center gap-3">
                    <button 
                      type="button"
                      onClick={() => navigate('/dashboard/loan-requests/history')}
                      className="h-10 w-10 flex items-center justify-center rounded-xl bg-white border border-gray-100 text-gray-600 hover:text-emerald-600 hover:border-emerald-100 transition-all shadow-xs cursor-pointer"
                    >
                      <FiArrowLeft size={18} />
                    </button>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 leading-tight">Download Statement</h2>
                    </div>
                </div>

                <form onSubmit={handleDownloadSubmit} className="space-y-4">
                    {/* Timeframes and Dates card block */}
                    <div className='flex flex-col gap-6 bg-white rounded-xl p-5 border border-gray-100 shadow-xs'>
                        
                        {/* The Three Dropdowns Row */}
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full'>
                            {TimeFrames.map((group) => {
                                const hasActiveSelection = isCategoryActive(group, selectedTimeFrame);
                                const isOpen = openDropdown === group.category;

                                return (
                                    <div key={group.category} className='flex flex-col w-full relative'>
                                        <h1 className='text-sm font-semibold leading-tight text-gray-900 mb-2'>
                                            {group.category}
                                        </h1>
                                        <div className='w-full relative'>
                                            <button
                                                type="button"
                                                onClick={() => toggleDropdown(group.category)}
                                                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border text-sm outline-none transition-all text-left
                                                    ${hasActiveSelection 
                                                        ? 'border-emerald-500 bg-emerald-50/30 text-emerald-900 font-medium' 
                                                        : 'border-gray-200 bg-gray-50 text-gray-700 focus:border-emerald-500'
                                                    }
                                                `}
                                            >
                                                <span>
                                                    {hasActiveSelection ? selectedTimeFrame : `Select ${group.category.toLowerCase()}`}
                                                </span>
                                                <FiChevronDown size={18} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                                            </button>

                                            {isOpen && (
                                                <div className='absolute z-10 left-0 right-0 mt-2 max-h-60 overflow-y-auto bg-white border border-gray-100 rounded-xl shadow-lg p-1 custom-scrollbar'>
                                                    {group.options.map((TF) => (
                                                        <button
                                                            key={TF.id}
                                                            type="button"
                                                            onClick={() => handleSelectTimeFrame(TF.name)}
                                                            className={`w-full flex items-center justify-between text-left px-4 py-2.5 text-sm rounded-lg transition-colors hover:bg-gray-50 text-gray-700
                                                                ${selectedTimeFrame === TF.name ? 'bg-emerald-50 text-emerald-700 font-medium' : ''}
                                                            `}
                                                        >
                                                            {TF.name}
                                                            {selectedTimeFrame === TF.name && <FaCheck className="text-emerald-600" size={12} />}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Date Picker Input Section */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-full'>
                            <div className='flex flex-col gap-1 w-full'>
                                <h2 className='text-sm font-semibold leading-tight text-gray-900'>Start Date</h2>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => handleManualDateChange(date, true)}
                                    dateFormat="dd MMM, yyyy"
                                    maxDate={new Date()}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-emerald-500 transition-all text-gray-700 bg-gray-50"
                                />
                            </div>
                            <div className='flex flex-col gap-1 w-full'>
                                <h2 className='text-sm font-semibold leading-tight text-gray-900'>End Date</h2>
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date) => handleManualDateChange(date, false)}
                                    dateFormat="dd MMM, yyyy"
                                    maxDate={new Date()}
                                    minDate={startDate || undefined}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-emerald-500 transition-all text-gray-700 bg-gray-50"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Phone Number input block */}
                    <div className='flex flex-col gap-2 bg-white rounded-xl p-5 border border-gray-100 shadow-xs'>
                        <div>
                            <h2 className='text-sm font-semibold leading-tight text-gray-900 mb-0.5'>Email</h2>
                            <p className='text-gray-500 text-xs'>Your account statement will be sent to your email address.</p>
                        </div>
                        <input 
                            type="email" 
                            value={globalUserData.email}
                            placeholder='Enter your email' 
                            className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-emerald-500 transition-all text-gray-700' 
                        />
                    </div>

                    {/* File Type Dropdown block */}
                    <div className='flex flex-col gap-2 bg-white rounded-xl p-5 border border-gray-100 shadow-xs relative'>
                        <div>
                            <h2 className='text-sm font-semibold leading-tight text-gray-900 mb-0.5'>File Type</h2>
                            <p className='text-gray-500 text-xs'>Select the format in which you would like to receive your account statement.</p>
                        </div>
                        
                        <div className='w-full relative mt-1'>
                            <button
                                type="button"
                                onClick={() => {
                                    setOpenDropdown(null);
                                    setFileTypeDropdownOpen(!fileTypeDropdownOpen);
                                }}
                                className='w-full flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-emerald-500 text-emerald-900 font-medium transition-all text-left'
                            >
                                <span>{selectedFileType}</span>
                                <FiChevronDown size={18} className={`text-gray-500 transition-transform ${fileTypeDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {fileTypeDropdownOpen && (
                                <div className='absolute z-10 left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-lg p-1'>
                                    {FileTypes.map((type) => (
                                        <button
                                            key={type}
                                            type="button"
                                            onClick={() => handleSelectFileType(type)}
                                            className={`w-full flex items-center justify-between text-left px-4 py-2.5 text-sm rounded-lg transition-colors hover:bg-gray-50 text-gray-700
                                                ${selectedFileType === type ? 'bg-emerald-50 text-emerald-700 font-medium' : ''}
                                            `}
                                        >
                                            <span>{type}</span>
                                            {selectedFileType === type && <FaCheck className="text-emerald-600" size={12} />}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Form Action Submit Primary Button */}
                    <button 
                        type="submit"
                        className='w-full px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl text-sm outline-none shadow-sm transition-all cursor-pointer text-center'
                    >
                        Download Statement
                    </button>
                </form>
            </div>

            {/* POPUP MODAL OVERLAY INJECTION BLOCK */}
            {downloadStatus !== 'idle' && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-center justify-center p-4 transition-all animate-fade-in">
                    <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-xl flex flex-col items-center text-center transform scale-100 transition-transform">
                        
                        {/* Loading State UI Content */}
                        {downloadStatus === 'downloading' && (
                            <div className="flex flex-col items-center py-4">
                                <FaSpinner className="text-emerald-600 animate-spin mb-4" size={36} />
                                <h3 className="text-base font-bold text-gray-900 mb-1">Downloading</h3>
                                <p className="text-xs text-gray-500">Compiling your transaction records data details...</p>
                            </div>
                        )}

                        {/* Completed State UI Content */}
                        {downloadStatus === 'done' && (
                            <div className="flex flex-col items-center w-full animate-scale-up">
                                <div className="h-12 w-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
                                    <FaCheck size={20} />
                                </div>
                                <h3 className="text-base font-bold text-gray-900 mb-1">Downloaded</h3>
                                <p className="text-xs text-gray-500 mb-6">Your file context generation completed successfully.</p>
                                
                                {/* Share Actions Layout Buttons Group block */}
                                <div className="grid grid-cols-2 gap-3 w-full">
                                    <button
                                        type="button"
                                        onClick={handleShare}
                                        className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-50 border border-gray-200 hover:bg-gray-100 rounded-xl text-sm font-medium text-gray-700 transition-colors cursor-pointer"
                                    >
                                        <FiShare2 size={16} />
                                        <span>Share</span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setDownloadStatus('idle')}
                                        className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-medium transition-colors cursor-pointer"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DownloadHistory;