import React, { useState } from 'react';
import { FiLock, FiEye, FiEyeOff, FiCheck } from 'react-icons/fi';

const Settings = () => {
    const [showPassword, setShowPassword] = useState({ current: false, new: false, confirm: false });
    const [passwordForm, setPasswordForm] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');

    const handlePasswordUpdate = (e) => {
        e.preventDefault();

        if (passwordForm.newPassword !== passwordForm.confirmPassword) {
            setError('New passwords do not match');
            return;
        }

        // Clear error and proceed with mock update logic
        setError('');
        console.log('Password updated successfully');
        alert('Password updated successfully');

        setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
    };

    return (
        <div className="w-full min-h-screen p-4 bg-gray-50/50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-3xl mx-auto space-y-6">
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">Settings</h1>

                {/* Password Change Section */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm space-y-6">
                    <form onSubmit={handlePasswordUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1 col-span-1 md:col-span-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Current Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword.current ? "text" : "password"}
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm outline-none focus:border-emerald-500 text-gray-700 dark:text-gray-200 transition-all"
                                    value={passwordForm.currentPassword}
                                    onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword({ ...showPassword, current: !showPassword.current })}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-500 cursor-pointer"
                                >
                                    {showPassword.current ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">New Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword.new ? "text" : "password"}
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm outline-none focus:border-emerald-500 text-gray-700 dark:text-gray-200 transition-all"
                                    value={passwordForm.newPassword}
                                    onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword({ ...showPassword, new: !showPassword.new })}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-500 cursor-pointer"
                                >
                                    {showPassword.new ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Confirm Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword.confirm ? "text" : "password"}
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm outline-none focus:border-emerald-500 text-gray-700 dark:text-gray-200 transition-all"
                                    value={passwordForm.confirmPassword}
                                    onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword({ ...showPassword, confirm: !showPassword.confirm })}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-500 cursor-pointer"
                                >
                                    {showPassword.confirm ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <p className="md:col-span-2 text-[10px] font-bold text-red-500 animate-pulse">{error}</p>
                        )}

                        <div className="md:col-span-2 pt-1">
                            <button
                                type="submit"
                                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs shadow-lg shadow-emerald-200 dark:shadow-none transition-all cursor-pointer flex items-center gap-2"
                            >
                                <FiCheck /> Update Security Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Settings;