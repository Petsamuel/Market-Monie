import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiMoon, FiSun, FiMonitor, FiCheck } from 'react-icons/fi';

const ThemeSettings = () => {
    const navigate = useNavigate();
    const [themePreference, setThemePreference] = useState(localStorage.getItem('theme') || 'system');

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else if (theme === 'light') {
            document.documentElement.classList.remove('dark');
        } else { // 'system'
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
        localStorage.setItem('theme', theme);
    };

    const handleThemeChange = (theme) => {
        setThemePreference(theme);
        applyTheme(theme);
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const listener = () => {
            if (localStorage.getItem('theme') === 'system') {
                applyTheme('system');
            }
        };
        mediaQuery.addEventListener('change', listener);
        return () => mediaQuery.removeEventListener('change', listener);
    }, []);

    const themes = [
        { id: 'light', name: 'Light Mode', icon: <FiSun />, desc: 'Classic bright appearance' },
        { id: 'dark', name: 'Dark Mode', icon: <FiMoon />, desc: 'Easier on the eyes in low light' },
        { id: 'system', name: 'System Settings', icon: <FiMonitor />, desc: 'Adapts to your device preferences' }
    ];

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
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight">Theme Appearance</h2>
                    <p className="text-[11px] text-gray-400 font-medium">Choose how the app looks for you</p>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-6 md:p-8 shadow-sm max-w-xl mx-auto transition-colors">
                <div className="space-y-4">
                    {themes.map((t) => (
                        <button
                            key={t.id}
                            onClick={() => handleThemeChange(t.id)}
                            className={`w-full flex items-center justify-between p-5 rounded-2xl transition-all cursor-pointer border-2 ${themePreference === t.id
                                    ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-500/50 text-emerald-900 dark:text-emerald-100'
                                    : 'bg-gray-50/50 dark:bg-gray-900/30 border-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900'
                                }`}
                        >
                            <div className="flex items-center gap-5">
                                <div className={`h-12 w-12 rounded-xl flex items-center justify-center shadow-xs transition-colors ${themePreference === t.id ? 'bg-white dark:bg-gray-800 text-emerald-600' : 'bg-white dark:bg-gray-800 text-gray-400'
                                    }`}>
                                    {React.cloneElement(t.icon, { size: 22 })}
                                </div>
                                <div className="text-left">
                                    <p className="text-sm font-bold leading-none">{t.name}</p>
                                    <p className="text-[11px] text-gray-500 font-medium mt-1.5">{t.desc}</p>
                                </div>
                            </div>
                            {themePreference === t.id && (
                                <div className="h-6 w-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/20">
                                    <FiCheck size={14} />
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ThemeSettings;