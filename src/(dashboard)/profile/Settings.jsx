import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiBell, FiSmartphone, FiMoon, FiLock } from 'react-icons/fi';

const Settings = () => {
  const navigate = useNavigate();

  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: true,
    marketingEmails: false
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      navigate(-1);
    }, 1500);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 font-poppins pb-10">
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="h-10 w-10 flex items-center justify-center rounded-xl bg-white border border-gray-100 text-gray-600 hover:text-emerald-600 hover:border-emerald-100 transition-all shadow-xs cursor-pointer"
        >
          <FiArrowLeft size={18} />
        </button>
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight">Settings</h2>
          <p className="text-[11px] text-gray-400 font-medium">Manage your preferences</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-6 md:p-8 shadow-sm max-w-3xl mx-auto space-y-8 transition-colors">

        <section className="space-y-4">
          <h3 className="text-sm font-bold text-emerald-800 uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Notifications
          </h3>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl transition-colors">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 flex items-center justify-center shadow-xs transition-colors">
                  <FiBell size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100">Email Notifications</h4>
                  <p className="text-[11px] text-gray-500 font-medium mt-0.5">Receive loan updates via email</p>
                </div>
              </div>
              <button
                onClick={() => handleToggle('emailNotifications')}
                className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${settings.emailNotifications ? 'bg-emerald-600' : 'bg-gray-300 dark:bg-gray-700'}`}
              >
                <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl transition-colors">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 flex items-center justify-center shadow-xs transition-colors">
                  <FiSmartphone size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100">SMS Notifications</h4>
                  <p className="text-[11px] text-gray-500 font-medium mt-0.5">Receive immediate SMS alerts</p>
                </div>
              </div>
              <button
                onClick={() => handleToggle('smsNotifications')}
                className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${settings.smsNotifications ? 'bg-emerald-600' : 'bg-gray-300 dark:bg-gray-700'}`}
              >
                <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${settings.smsNotifications ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl transition-colors">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 flex items-center justify-center shadow-xs transition-colors">
                  <FiBell size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100">Marketing & Offers</h4>
                  <p className="text-[11px] text-gray-500 font-medium mt-0.5">Receive special offers and promos</p>
                </div>
              </div>
              <button
                onClick={() => handleToggle('marketingEmails')}
                className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${settings.marketingEmails ? 'bg-emerald-600' : 'bg-gray-300 dark:bg-gray-700'}`}
              >
                <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${settings.marketingEmails ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-sm font-bold text-emerald-800 uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Security
          </h3>

          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl transition-colors">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-xl bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 flex items-center justify-center shadow-xs transition-colors">
                <FiLock size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100">Account Security</h4>
                <p className="text-[11px] text-gray-500 font-medium mt-0.5">Manage password and 2FA settings</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/dashboard/settings/security')}
              className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all cursor-pointer"
            >
              Configure
            </button>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-sm font-bold text-emerald-800 uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Display
          </h3>

          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl transition-colors">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-xl bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 flex items-center justify-center shadow-xs transition-colors">
                <FiMoon size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100">Theme</h4>
                <p className="text-[11px] text-gray-500 font-medium mt-0.5">Manage your app's theme</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/dashboard/settings/theme')}
              className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all cursor-pointer"
            >
              Configure
            </button>
          </div>
        </section>

        <div className="pt-4 flex justify-end border-t border-gray-100 dark:border-gray-700 transition-colors">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-300 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-emerald-600/20 cursor-pointer"
          >
            {isSaving ? 'Saving...' : 'Save Settings'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Settings;
