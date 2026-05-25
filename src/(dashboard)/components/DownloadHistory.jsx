import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiChevronDown } from 'react-icons/fi';
import { FaCheck } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

    // Tracks the globally active value across all categories
    const [selectedTimeFrame, setSelectedTimeFrame] = useState('1 month');
    const [openDropdown, setOpenDropdown] = useState(null);
    
    // Set initial dates to null or calculated state
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(new Date());
    
    const navigate = useNavigate();

    // Side effect: Automatically calculate and update dates based on dropdown selection
    useEffect(() => {
        if (!selectedTimeFrame) return;

        // Find the selected option meta configuration details
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
            setEndDate(today); // End date defaults to today
        }
    }, [selectedTimeFrame]);

    const toggleDropdown = (category) => {
        setOpenDropdown(openDropdown === category ? null : category);
    };

    const handleSelectTimeFrame = (name) => {
        setSelectedTimeFrame(name);
        setOpenDropdown(null);
    };

    // If the user modifies manual date picker, clear the predefined active buttons selection
    const handleManualDateChange = (date, isStart) => {
        if (isStart) {
            setStartDate(date);
        } else {
            setEndDate(date);
        }
        setSelectedTimeFrame(null); // Deselect dropdown items since it's a custom range now
    };

    const isCategoryActive = (group, currentSelection) => {
        return group.options.some(opt => opt.name === currentSelection);
    };

    return (
        <div className="p-4">
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

            <form onSubmit={(e) => e.preventDefault()}>
                <div className='flex flex-col gap-6 bg-white rounded-xl px-3 my-3'>
                    
                    {/* The Three Dropdowns Row */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 w-full'>
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
                    <div className='flex flex-col sm:flex-row gap-4 pb-3 w-full'>
                        <div className='flex flex-col gap-1 w-full'>
                            <h2 className='text-sm font-semibold leading-tight text-gray-900'>Start Date</h2>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => handleManualDateChange(date, true)}
                                dateFormat="dd MMM, yyyy"
                                maxDate={new Date()}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-emerald-500 transition-all text-gray-700"
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
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-emerald-500 transition-all text-gray-700"
                            />
                        </div>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default DownloadHistory;