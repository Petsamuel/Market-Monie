        // <motion.div
        //                     key="options-section"
        //                     initial={{ opacity: 0, y: 20 }}
        //                     animate={{ opacity: 1, y: 0 }}
        //                     exit={{ opacity: 0, y: 20 }}
        //                     className="w-full space-y-6 pt-4 hidden md:block"
        //                     >
        //                     <div className="text-center space-y-2">
        //                         <div className="flex items-center justify-center gap-2 mb-2">
        //                         <div className="h-[1px] w-8 bg-gray-100" />
        //                         <p className="text-gray-400 text-[9px] font-bold tracking-[0.2em] uppercase">
        //                             Final Step
        //                         </p>
        //                         <div className="h-[1px] w-8 bg-gray-100" />
        //                         </div>
        //                         <h2 className="text-lg md:text-xl font-bold text-gray-900">How would you like to proceed?</h2>
        //                     </div>

        //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto w-full px-2">
        //                         <motion.button
        //                         whileHover={{ y: -4, scale: 1.02 }}
        //                         whileTap={{ scale: 0.98 }}
        //                         onClick={() => {
        //                             setIsGuestGlobal(false);
        //                             navigate("/register");
        //                         }}
        //                         className="group relative overflow-hidden p-6 rounded-[2rem] bg-emerald-600 text-white text-left shadow-2xl shadow-emerald-900/20 h-45 md:h-60"
        //                         >
        //                         <div className="relative z-10 space-y-4">
        //                             <div>
        //                             <h3 className="text-lg font-bold leading-tight">Create Account</h3>
        //                             </div>
        //                         </div>
        //                     </motion.button>

        //                         <motion.button
        //                         whileHover={{ y: -4, scale: 1.02 }}
        //                         whileTap={{ scale: 0.98 }}
        //                         onClick={() => {
        //                             setIsGuestGlobal(true);
        //                             navigate("/apply/hub");
        //                         }}
        //                         className="group relative overflow-hidden p-6 rounded-[2rem] bg-white border border-gray-100 text-gray-900 text-left hover:bg-gray-50/50 h-45 md:h-60 transition-all shadow-xl shadow-gray-200/50">

        //                         <div className="relative z-10 space-y-4">
        //                             <div>
        //                             <h3 className="text-lg font-bold leading-tight">Continue as Guest</h3>
        //                             </div>
        //                         </div>
        //                         </motion.button>
        //                     </div>

        //                     <div className="text-center pt-4">
        //                         <button
        //                         onClick={handleBack}
        //                         className="text-gray-400 text-[10px] font-bold tracking-widest hover:text-emerald-600 transition-colors uppercase"
        //                         >
        //                         Change Location
        //                         </button>
        //                     </div>
        //                     </motion.div>


    <motion.div
                        key="options-section"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="w-full space-y-6 pt-4 hidden md:block"
                        >
                        <div className="text-center space-y-2">
                            <div className="flex items-center justify-center gap-2 mb-2">
                            <div className="h-[1px] w-8 bg-gray-100" />
                            <p className="text-gray-400 text-[9px] font-bold tracking-[0.2em] uppercase">
                                Final Step
                            </p>
                            <div className="h-[1px] w-8 bg-gray-100" />
                            </div>
                            <h2 className="text-lg md:text-xl font-bold text-gray-900">How would you like to proceed?</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto w-full px-2">
                            <motion.button
                            whileHover={{ y: -4, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                                setIsGuestGlobal(false);
                                navigate("/register");
                            }}
                            className="group hidden md:block relative overflow-hidden p-6 rounded-[2rem] bg-emerald-600 text-white text-left shadow-2xl shadow-emerald-900/20 h-45 md:h-60"
                            >
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <FiUserPlus size={48} />
                            </div>
                            <div className="relative z-10 space-y-4">
                                <div className="p-3 w-fit rounded-2xl bg-white/20 backdrop-blur-md">
                                <FiUserPlus size={24} />
                                </div>
                                <div>
                                <h3 className="text-lg font-bold leading-tight">Create Account</h3>
                                <p className="text-white/70 text-xs mt-1 leading-relaxed">Track your application and repayment history easily.</p>
                                </div>
                                <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest -mt-1 md:pt-2 group-hover:gap-3 transition-all duration-400">
                                GET STARTED <FiArrowRight />
                                </div>
                            </div>
                        </motion.button>
                         <motion.button
                                whileHover={{ y: -4, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                    setIsGuestGlobal(false);
                                    navigate("/register");
                                }}
                                className="group relative md:hidden overflow-hidden p-6 rounded-[2rem] bg-emerald-600 text-white text-left shadow-2xl shadow-emerald-900/20 h-45 md:h-60"
                                >
                                <div className="relative z-10 space-y-4">
                                    <div>
                                    <h3 className="text-lg font-bold leading-tight">Create Account</h3>
                                    </div>
                                </div>
                            </motion.button>

                            <motion.button
                            whileHover={{ y: -4, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                                setIsGuestGlobal(true);
                                navigate("/apply/hub");
                            }}
                            className="group relative hidden md:block overflow-hidden p-6 rounded-[2rem] bg-white border border-gray-100 text-gray-900 text-left hover:bg-gray-50/50 h-45 md:h-60 transition-all shadow-xl shadow-gray-200/50"
                            >
                            <div className="absolute top-0 right-0 p-6 opacity-[0.03]">
                                <FiUser size={48} />
                            </div>
                            <div className="relative z-10 space-y-4">
                                <div className="p-3 w-fit rounded-2xl bg-emerald-50 text-emerald-600">
                                <FiUser size={24} />
                                </div>
                                <div>
                                <h3 className="text-lg font-bold leading-tight">Continue as Guest</h3>
                                <p className="text-gray-500 text-xs mt-1 leading-relaxed">Apply quickly without creating a permanent account.</p>
                                </div>
                                <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest -mt-1 md:pt-2 text-emerald-600 group-hover:gap-3 transition-all duration-400">
                                EXPLORE NOW <FiArrowRight />
                                </div>
                            </div>
                            </motion.button>
                            <motion.button
                                whileHover={{ y: -4, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                    setIsGuestGlobal(true);
                                    navigate("/apply/hub");
                                }}
                                className="group relative md:hidden overflow-hidden p-6 rounded-[2rem] bg-white border border-gray-100 text-gray-900 text-left hover:bg-gray-50/50 h-45 md:h-60 transition-all shadow-xl shadow-gray-200/50">

                                <div className="relative z-10 space-y-4">
                                    <div>
                                    <h3 className="text-lg font-bold leading-tight">Continue as Guest</h3>
                                    </div>
                                </div>
                                </motion.button>
                        </div>

                        <div className="text-center pt-4">
                            <button
                            onClick={handleBack}
                            className="text-gray-400 text-[10px] font-bold tracking-widest hover:text-emerald-600 transition-colors uppercase"
                            >
                            Change Location
                            </button>
                        </div>
                        </motion.div>