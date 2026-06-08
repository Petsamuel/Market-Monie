import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FiUser, FiMail, FiPhone, FiMapPin, FiLock,
    FiFileText, FiLogOut, FiChevronRight, FiEdit2,
    FiArrowLeft, FiCheck, FiBriefcase
} from 'react-icons/fi';
import { globalUserData } from '../../store/Data';

const Profile = () => {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);

    // Initial state derived from globalUserData and placeholder defaults
    const [formData, setFormData] = useState({
        firstName: globalUserData.firstname || 'Ayomide',
        lastName: globalUserData.lastname || 'Adetoyi',
        email: globalUserData.email || 'adetoyi@example.com',
        phone: '+234 803 123 4567',
        businessName: 'Market Monie Merchant',
        address: '123 Market Street, Lagos Island, Lagos',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleLogout = () => {
        localStorage.clear();
        sessionStorage.clear();
        navigate('/', { replace: true });
    };

    return (
        <div className="w-full min-h-screen p-4 bg-gray-50/50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-3xl mx-auto space-y-6">

                {/* Header Section */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => navigate(-1)}
                            className="h-10 w-10 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-emerald-600 transition-all shadow-xs cursor-pointer"
                        >
                            <FiArrowLeft size={18} />
                        </button>
                        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">My Profile</h1>
                    </div>
                    <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl text-sm font-bold hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors cursor-pointer"
                    >
                        {isEditing ? <><FiCheck /> Save</> : <><FiEdit2 /> Edit</>}
                    </button>
                </div>

                {/* Personal Identification Card */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm space-y-6">
                    <div className="flex flex-col items-center pb-6 border-b border-gray-50 dark:border-gray-700">
                        <div className="h-20 w-20 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 flex items-center justify-center text-2xl font-bold border-4 border-white dark:border-gray-800 shadow-xl mb-4">
                            {formData.firstName[0]}{formData.lastName[0]}
                        </div>
                        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">{formData.firstName} {formData.lastName}</h2>
                        <p className="text-sm text-gray-400 font-medium">Verified Merchant</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                <FiUser size={12} /> First Name
                            </label>
                            {isEditing ? (
                                <input name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm outline-none focus:border-emerald-500 text-gray-700 dark:text-gray-200" />
                            ) : (
                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 px-1">{formData.firstName}</p>
                            )}
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                <FiUser size={12} /> Last Name
                            </label>
                            {isEditing ? (
                                <input name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm outline-none focus:border-emerald-500 text-gray-700 dark:text-gray-200" />
                            ) : (
                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 px-1">{formData.lastName}</p>
                            )}
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                <FiMail size={12} /> Email Address
                            </label>
                            <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 px-1">{formData.email}</p>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                <FiPhone size={12} /> Phone Number
                            </label>
                            {isEditing ? (
                                <input name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm outline-none focus:border-emerald-500 text-gray-700 dark:text-gray-200" />
                            ) : (
                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 px-1">{formData.phone}</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Business Information Section */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm space-y-4">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">Business Details</h3>
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                <FiBriefcase size={12} /> Registered Business Name
                            </label>
                            {isEditing ? (
                                <input name="businessName" value={formData.businessName} onChange={handleInputChange} className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm outline-none focus:border-emerald-500 text-gray-700 dark:text-gray-200" />
                            ) : (
                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 px-1">{formData.businessName}</p>
                            )}
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                <FiMapPin size={12} /> Physical Store Address
                            </label>
                            {isEditing ? (
                                <textarea name="address" value={formData.address} onChange={handleInputChange} rows="2" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm outline-none focus:border-emerald-500 text-gray-700 dark:text-gray-200 resize-none" />
                            ) : (
                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 px-1">{formData.address}</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Preferences & Legal */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-2 shadow-sm">
                    <button
                        onClick={() => navigate('/dashboard/settings')}
                        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-2xl transition-colors cursor-pointer group"
                    >
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center">
                                <FiLock size={20} />
                            </div>
                            <div className="text-left">
                                <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200">Security & Password</h4>
                                <p className="text-[11px] text-gray-400">Manage your security in settings</p>
                            </div>
                        </div>
                        <FiChevronRight className="text-gray-300 group-hover:text-emerald-500 transition-colors" />
                    </button>

                    <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-2xl transition-colors cursor-pointer group">
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 rounded-xl flex items-center justify-center">
                                <FiFileText size={20} />
                            </div>
                            <div className="text-left">
                                <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200">Terms of Service</h4>
                                <p className="text-[11px] text-gray-400">Review our merchant agreements</p>
                            </div>
                        </div>
                        <FiChevronRight className="text-gray-300 group-hover:text-emerald-500 transition-colors" />
                    </button>
                </div>

                {/* Logout Action */}
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-3 p-4 bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900/30 rounded-2xl font-bold text-sm hover:bg-red-100 dark:hover:bg-red-800/20 transition-all cursor-pointer"
                >
                    <FiLogOut />
                    Sign Out of Account
                </button>
            </div>
        </div>
    );
};

export default Profile;