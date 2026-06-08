import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiEdit2, FiUser, FiMail, FiPhone, FiMapPin, FiSmartphone } from 'react-icons/fi';
import { globalUserData } from '../../store/Data';

const Profile = () => {
    const navigate = useNavigate();

    return (
        <div className="space-y-6 animate-in fade-in duration-500 font-poppins pb-10">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => navigate(-1)}
                        className="h-10 w-10 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-emerald-600 hover:border-emerald-100 transition-all shadow-xs cursor-pointer"
                    >
                        <FiArrowLeft size={18} />
                    </button>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight">My Profile</h2>
                        <p className="text-[11px] text-gray-400 font-medium">View your account information</p>
                    </div>
                </div>

                <button
                    onClick={() => navigate('/dashboard/profile/edit')}
                    className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white text-sm font-bold rounded-xl hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/20 cursor-pointer"
                >
                    <FiEdit2 size={14} />
                    Edit Profile
                </button>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-6 md:p-8 shadow-sm max-w-3xl mx-auto transition-colors">
                {/* Profile Header */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-8 pb-8 border-b border-gray-100 dark:border-gray-700">
                    <div className="h-24 w-24 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border-4 border-emerald-100/50 dark:border-emerald-800/30 text-3xl font-bold">
                        {globalUserData.firstName[0]}{globalUserData.lastName[0]}
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                            {globalUserData.firstName} {globalUserData.lastName}
                        </h3>
                        <p className="text-sm text-gray-500 font-medium mt-1">Merchant Account</p>
                        <div className="mt-2 flex items-center gap-2 justify-center md:justify-start">
                            <span className="px-2.5 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold rounded-lg uppercase tracking-wider">
                                Active
                            </span>
                        </div>
                    </div>
                </div>

                {/* Profile Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                    <div className="space-y-1">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Address</p>
                        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                            <FiMail className="text-emerald-500" size={16} />
                            <span className="text-sm font-semibold">{globalUserData.email}</span>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Phone Number</p>
                        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                            <FiPhone className="text-emerald-500" size={16} />
                            <span className="text-sm font-semibold">{globalUserData.phone}</span>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Gender</p>
                        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                            <FiUser className="text-emerald-500" size={16} />
                            <span className="text-sm font-semibold capitalize">{globalUserData.gender}</span>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Date of Birth</p>
                        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                            <FiSmartphone className="text-emerald-500" size={16} />
                            <span className="text-sm font-semibold">{globalUserData.dob}</span>
                        </div>
                    </div>

                    <div className="space-y-1 md:col-span-2">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Residential Address</p>
                        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                            <FiMapPin className="text-emerald-500 shrink-0" size={16} />
                            <span className="text-sm font-semibold">{globalUserData.residentialAddress}</span>
                        </div>
                    </div>

                    <div className="space-y-1 md:col-span-2">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Business Address</p>
                        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                            <FiMapPin className="text-emerald-500 shrink-0" size={16} />
                            <span className="text-sm font-semibold">{globalUserData.businessAddress}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;