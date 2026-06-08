import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiLock, FiShield, FiSmartphone } from 'react-icons/fi';

const Security = () => {
  const navigate = useNavigate();

  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [biometricsEnabled, setBiometricsEnabled] = useState(true);

  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      setError('New passwords do not match.');
      return;
    }
    if (passwords.newPassword.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }
    
    setError('');
    setIsUpdating(true);
    setTimeout(() => {
      setIsUpdating(false);
      setPasswords({ currentPassword: '', newPassword: '', confirmPassword: '' });
    }, 1500);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 font-poppins pb-10">
      <div className="flex items-center gap-3">
        <button 
          onClick={() => navigate(-1)}
          className="h-10 w-10 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-emerald-600 hover:border-emerald-100 transition-all shadow-xs cursor-pointer"
        >
          <FiArrowLeft size={18} />
        </button>
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight">Security</h2>
          <p className="text-[11px] text-gray-400 font-medium">Protect your account</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        
        {/* Change Password */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-6 md:p-8 shadow-sm transition-colors">
          <h3 className="text-sm font-bold text-emerald-800 uppercase tracking-wider mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Change Password
          </h3>
          
          <form onSubmit={handleUpdatePassword} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Current Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  name="currentPassword"
                  value={passwords.currentPassword}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-medium rounded-xl pl-10 pr-4 py-3.5 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                />
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300">New Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  name="newPassword"
                  value={passwords.newPassword}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-medium rounded-xl pl-10 pr-4 py-3.5 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                />
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Confirm New Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  name="confirmPassword"
                  value={passwords.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-medium rounded-xl pl-10 pr-4 py-3.5 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                />
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              </div>
            </div>

            {error && <p className="text-[10px] text-red-500 font-medium">{error}</p>}

            <div className="pt-4">
              <button 
                type="submit"
                disabled={isUpdating}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-300 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-emerald-600/20 cursor-pointer"
              >
                {isUpdating ? 'Updating...' : 'Update Password'}
              </button>
            </div>
          </form>
        </div>

        {/* Additional Security Settings */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-6 md:p-8 shadow-sm space-y-6 transition-colors">
          <h3 className="text-sm font-bold text-emerald-800 uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Extra Security
          </h3>

          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-700 transition-colors">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-xl bg-white dark:bg-gray-800 text-emerald-600 flex items-center justify-center shadow-xs transition-colors">
                <FiShield size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Two-Factor Auth (2FA)</h4>
                <p className="text-[11px] text-gray-500 font-medium mt-0.5">Extra layer of security via SMS/Email</p>
              </div>
            </div>
            <button 
              onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
              className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${twoFactorEnabled ? 'bg-emerald-600' : 'bg-gray-300'}`}
            >
              <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-700 transition-colors">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-xl bg-white dark:bg-gray-800 text-emerald-600 flex items-center justify-center shadow-xs transition-colors">
                <FiSmartphone size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Biometric Login</h4>
                <p className="text-[11px] text-gray-500 font-medium mt-0.5">Face ID / Fingerprint</p>
              </div>
            </div>
            <button 
              onClick={() => setBiometricsEnabled(!biometricsEnabled)}
              className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${biometricsEnabled ? 'bg-emerald-600' : 'bg-gray-300'}`}
            >
              <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${biometricsEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Security;
