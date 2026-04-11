import { FiBriefcase, FiMapPin, FiTrendingUp, FiClock } from "react-icons/fi";

const BusinessDetails = ({ data, onChange, onContinue, onBack }) => {
  const businessKinds = [
    "Farming", "Food Processing", "Bakery Business", "Restaurants and Catering",
    "Supermarkets/Grocery Stores", "Petty Trading", "Leather Production",
    "Transport Services", "Real Estate", "Other"
  ];

  const yearOptions = [
    "0 – 1 year", "2 – 3 years", "4 – 5 years", "6 - 9 years", "10+ and above"
  ];

  const saleOptions = [
    "1,000 – 10,000", "20,000 – 40,000", "50,000 - 100,000",
    "200,000 - 400,000", "500,000 - 1,000,000", "1,000,000 and above"
  ];

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="text-left font-poppins">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
           Business Details
        </h2>
        <p className="mt-2 text-gray-500 text-sm">
          Tell us about your business to help us understand your needs.
        </p>
      </div>

      <div className="mt-8 space-y-6">
        <InputGroup 
          label="What is the name of your business?" 
          value={data.businessName} 
          onChange={(e) => onChange('businessName', e.target.value)}
          placeholder="Enter business name"
          icon={<FiBriefcase />} 
        />

        <InputGroup 
          label="What is your business address?" 
          value={data.businessAddress} 
          onChange={(e) => onChange('businessAddress', e.target.value)}
          placeholder="Enter detailed business address"
          icon={<FiMapPin />} 
        />

        <SelectGroup 
          label="What kind of business are you into?" 
          value={data.businessType} 
          onChange={(e) => onChange('businessType', e.target.value)}
          options={businessKinds}
          icon={<FiBriefcase />} 
        />

        <div className="grid grid-cols-1 gap-6">
          <SelectGroup 
            label="How many years have you been in business?" 
            value={data.businessYears} 
            onChange={(e) => onChange('businessYears', e.target.value)}
            options={yearOptions}
            icon={<FiClock />} 
          />
          <SelectGroup 
            label="How much do you sell a day?" 
            value={data.dailySales} 
            onChange={(e) => onChange('dailySales', e.target.value)}
            options={saleOptions}
            icon={<FiTrendingUp />} 
          />
        </div>

        <div className="flex gap-4 mt-10">
          <button
            onClick={onBack}
            className="flex-1 rounded-xl border-2 border-gray-100 py-4 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all font-poppins"
          >
            Back
          </button>
          <button
            onClick={onContinue}
            disabled={!data.businessName || !data.businessType || !data.dailySales}
            className="flex-[2] rounded-xl bg-emerald-600 py-4 text-sm font-semibold text-white shadow-xl shadow-emerald-200/50 hover:bg-emerald-500 disabled:opacity-50 transition-all font-poppins"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

const InputGroup = ({ label, value, onChange, icon, placeholder }) => (
  <div className="space-y-2">
    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
      {label}
    </label>
    <div className="relative group">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400 group-focus-within:text-emerald-600 transition-colors">
        {icon}
      </div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="block w-full rounded-xl border-gray-200 border-2 bg-gray-50/30 pl-11 pr-4 py-4 text-gray-900 shadow-sm transition-all focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 outline-none font-medium"
      />
    </div>
  </div>
);

const SelectGroup = ({ label, value, onChange, options, icon }) => (
  <div className="space-y-2">
    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
      {label}
    </label>
    <div className="relative group">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400 group-focus-within:text-emerald-600 transition-colors">
        {icon}
      </div>
      <select
        value={value}
        onChange={onChange}
        className="block w-full rounded-xl border-gray-200 border-2 bg-gray-50/30 pl-11 pr-4 py-4 text-gray-900 shadow-sm transition-all focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 outline-none font-medium appearance-none"
      >
        <option value="">Select Option</option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>{opt}</option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400">
        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
      </div>
    </div>
  </div>
);

export default BusinessDetails;
