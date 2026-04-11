import { FiUser, FiMail, FiPhone, FiCalendar } from "react-icons/fi";

const PersonalDetails = ({ data, onChange, onContinue, onBack }) => {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="text-left font-poppins">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Personal Details
        </h2>
        <p className="mt-2 text-gray-500 text-sm">
          Please confirm your personal information retrieved from your identity record.
        </p>
      </div>

      <div className="mt-8 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <InputGroup 
            label="First Name" 
            value={data.firstname} 
            icon={<FiUser />} 
            readOnly
          />
          <InputGroup 
            label="Last Name" 
            value={data.lastname} 
            icon={<FiUser />} 
            readOnly
          />
        </div>

        <InputGroup 
          label="Phone Number" 
          value={data.phone} 
          icon={<FiPhone />} 
          readOnly
        />

        <InputGroup 
          label="Email Address (Optional)" 
          value={data.email} 
          onChange={(e) => onChange('email', e.target.value)}
          icon={<FiMail />} 
          placeholder="Enter your email"
        />

        <div className="space-y-2">
           <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
            Date of Birth
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
              <FiCalendar />
            </div>
            <input
              type="date"
              value={data.dob}
              onChange={(e) => onChange('dob', e.target.value)}
              className="block w-full rounded-xl border-gray-200 border-2 bg-gray-50/30 pl-11 pr-4 py-4 text-gray-900 shadow-sm transition-all focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 outline-none font-medium"
              required
            />
          </div>
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
            disabled={!data.dob}
            className="flex-[2] rounded-xl bg-emerald-600 py-4 text-sm font-semibold text-white shadow-xl shadow-emerald-200/50 hover:bg-emerald-500 disabled:opacity-50 transition-all font-poppins"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

const InputGroup = ({ label, value, onChange, icon, placeholder, readOnly = false }) => (
  <div className="space-y-2">
    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
      {label}
    </label>
    <div className="relative group">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
        {icon}
      </div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        placeholder={placeholder}
        className={`block w-full rounded-xl border-gray-200 border-2 px-4 py-4 pl-11 text-gray-900 shadow-sm transition-all outline-none font-medium ${
          readOnly 
            ? "bg-gray-100/80 text-gray-500 cursor-not-allowed border-gray-100" 
            : "bg-gray-50/30 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10"
        }`}
      />
    </div>
  </div>
);

export default PersonalDetails;
