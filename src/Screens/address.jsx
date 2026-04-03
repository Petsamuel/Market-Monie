import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { locations } from '../store/Data';
import { stateLgaMapping } from '../store/LgaData';


const Address = () => {
    const navigate = useNavigate();
    const [selectedState, setSelectedState] = useState("");
    const [lgas, setLgas] = useState([]);

    const handleStateChange = (e) => {
        const state = e.target.value;
        setSelectedState(state);
        setLgas(stateLgaMapping[state] || []);
    };

    return (
        <section className='w-full h-screen flex items-center justify-center'>
            <div className='rounded-2xl bg-white border border-white min-w-1/2 flex flex-col items-center gap-5 p-4'>
                <h2 className='font-semibold text-left w-full'>Residential Address</h2>

                <div className='flex flex-col w-full'>
                    <label htmlFor="state">State <span className='text-red-500'>*</span></label>
                    <select
                        name="state"
                        id="state"
                        value={selectedState}
                        onChange={handleStateChange}
                        className='border border-gray-500 rounded-xl px-2 h-[40px] bg-white outline-none w-full scrollbar-hide'
                    >
                        <option value="">Select State</option>
                        {locations.map((state) => (
                            <option key={state} value={state}>{state}</option>
                        ))}
                    </select>
                </div>

                <div className='flex flex-col w-full'>
                    <label htmlFor="local-government">Local Government Area (LGA) <span className='text-red-500'>*</span></label>
                    <select
                        name="local-government"
                        id="local-government"
                        disabled={!selectedState}
                        className='border border-gray-500 rounded-xl px-2 h-[40px] bg-white outline-none w-full scrollbar-hide disabled:bg-gray-100 disabled:cursor-not-allowed'
                    >
                        <option value="">{selectedState ? "Select LGA" : "Select State First"}</option>
                        {lgas.map((lga) => (
                            <option key={lga} value={lga}>{lga}</option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="area">Area/Street <span className='text-slate-400'>(optional)</span></label>
                    <input type="text" name="area" id="area" placeholder='e.g Victoria, Lekki Phase 1' className='border border-gray-500 rounded-xl p-2' />
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="">House Address</label>
                    <input type="text" name="house-address" id="house-address" placeholder='house number and street name' className='border border-gray-500 rounded-xl p-2' />
                </div>
                <div className='flex w-full justify-between gap-2'>
                    <button className='border border-green-800 text-green-800 rounded-xl p-2 w-1/2 hover:bg-green-100'
                        onClick={() => navigate("/personal-details")}>
                        Back
                    </button>
                    <button className='text-white bg-green-800 rounded-xl p-2 w-1/2 hover:bg-green-900 hover:text-white hover:border-green-900 transition-colors duration-400'
                        onClick={() => navigate("/business")}>
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Address