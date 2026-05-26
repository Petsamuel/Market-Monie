export let selectedStateGlobal = localStorage.getItem("selectedStateGlobal") || "";
export let selectedLgaGlobal = localStorage.getItem("selectedLgaGlobal") || "";
export let selectedTownGlobal = localStorage.getItem("selectedTownGlobal") || "";
export let selectedAreaGlobal = localStorage.getItem("selectedAreaGlobal") || "";
export let selectedHubGlobal = (() => {
  try {
    const hub = localStorage.getItem("selectedHubGlobal");
    return hub ? JSON.parse(hub) : "";
  } catch (e) {
    console.error("Error parsing selectedHubGlobal from localStorage", e);
    return "";
  }
})();
export let isNoHubStateGlobal = localStorage.getItem("isNoHubStateGlobal") === "true";
export let isGuestGlobal = localStorage.getItem("isGuestGlobal") ? localStorage.getItem("isGuestGlobal") === "true" : false;
export let applicationModeGlobal = localStorage.getItem("applicationModeGlobal") || "";

export const setSelectedStateGlobal = (state) => {
  selectedStateGlobal = state;
  localStorage.setItem("selectedStateGlobal", state);
};

export const setSelectedLgaGlobal = (lga) => {
  selectedLgaGlobal = lga;
  localStorage.setItem("selectedLgaGlobal", lga);
};

export const setSelectedTownGlobal = (town) => {
  selectedTownGlobal = town;
  localStorage.setItem("selectedTownGlobal", town);
};

export const setSelectedAreaGlobal = (area) => {
  selectedAreaGlobal = area;
  localStorage.setItem("selectedAreaGlobal", area);
};

export const setSelectedHubGlobal = (hub) => {
  selectedHubGlobal = hub;
  localStorage.setItem("selectedHubGlobal", JSON.stringify(hub));
};

export const setNoHubStateGlobal = (status) => {
  isNoHubStateGlobal = status;
  localStorage.setItem("isNoHubStateGlobal", status);
};

export const setIsGuestGlobal = (status) => {
  isGuestGlobal = status;
  localStorage.setItem("isGuestGlobal", status);
};

export const setApplicationModeGlobal = (mode) => {
  applicationModeGlobal = mode;
  localStorage.setItem("applicationModeGlobal", mode);
};

// location dataset
export const locations = ["Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara", "FCT (Abuja)"
].sort();


// address dataset
export const branchAddresses = {
  "Akwa Ibom": ["Uyo"
  ], "Anambra": ["Onitsha"
  ], "Cross River": ["Calabar"
  ], "Delta": ["Asaba", "Warri"
  ], "Ekiti": ["Ado-Ekiti"
  ], "FCT (Abuja)": ["Kuje", "Kubwa", "Wuse", "Gwagwalada"
  ], "Kogi": ["Lokoja"
  ], "Kwara": ["Ilorin"
  ], "Lagos": ["Abule-Egba", "Ajegunle-Apapa", "Ayobo", "Elepe", "Ifako", "Igbelara", "Igbogbo", "Ikorodu", "Ikotun", "Iyana-Iba", "Ketu", "Lagos Island", "Mushin", "Egbeda", "Yaba", "Adamo", "Ikeja", "Agric"
  ], "Nasarawa": ["Nyanya"
  ], "Ogun": ["Abeokuta", "Sango", "Ijebu-Ode", "Ibafo", "Alagbole", "Sagamu", "Ifo", "Mowe"
  ], "Ondo": ["Akure", "Ondo Town", "Ore"
  ], "Osun": ["Osogbo", "Ile-Ife", "Ede", "Ilesa"
  ], "Oyo": ["Mokola", "Oyo Town", "Iwo Road", "Apata", "Ojoo", "Challenge", "Eleyele", "Gbagi", "Saki", "Bodija", "Ogbomosho"
  ], "Plateau": ["Jos"
  ], "Rivers": ["Portharcourt", "Ada-George"
  ]
};

export const banks = ["Access Bank", "Citibank Nigeria", "Ecobank Nigeria", "Fidelity Bank", "First Bank of Nigeria", "First City Monument Bank (FCMB)", "Globus Bank", "Guarantee Trust Bank (GTBank)", "Heritage Bank", "Keystone Bank", "Optimus Bank", "Parallex Bank", "Polaris Bank", "Providus Bank", "Stanbic IBTC Bank", "Standard Chartered Bank Nigeria", "Sterling Bank", "SunTrust Bank", "Titan Trust Bank", "Union Bank of Nigeria", "United Bank for Africa (UBA)", "Unity Bank", "Wema Bank", "Zenith Bank",

  // Fintech / microfinance / payment banks"Opay","Moniepoint Microfinance Bank","PalmPay","Kuda Bank","VFD Microfinance Bank",
];

export const globalUserData = {
  username: "John Doe",
  firstName: "John",
  lastName: "Doe",
  email: "Johndoe@gmail.com",
  phone: "+234 812 345 6789",
  residentialAddress: "123 Market Road, Lagos, Nigeria",
  businessAddress: "Shop 4, Alaba Market, Lagos",
  gender: "Male",
  dob: "12 May, 1990"
};

// Shared transaction data pool
export const transactionsData = [
  { id: 1, title: "FIP:John Doe ...", date: "2026-05-12T16:43:00", displayDate: "12th May. 2026 04:43PM", amount: "- ₦10.75", state: 'outflow', type: "debit", status: "Successful" },
  { id: 2, title: "FIP:Jane Doe ...", date: "2026-05-12T16:43:00", displayDate: "12th May. 2026 04:43PM", amount: "- ₦4,000.00", state: 'outflow', type: "debit", status: "Successful" },
  { id: 3, title: "Intrabank- Transfer", date: "2026-05-08T08:41:00", displayDate: "8th May. 2026 08:41AM", amount: "+ ₦4,000.00", state: 'inflow', type: "credit", status: "Successful" },
  { id: 4, title: "Loan Disbursement", date: "2026-05-01T10:15:00", displayDate: "1st May. 2026 10:15AM", amount: "+ ₦200,000.00", state: 'inflow', type: "credit", status: "Successful" },
  { id: 5, title: "Repayment Direct Debit", date: "2026-04-25T12:00:00", displayDate: "25th Apr. 2026 12:00PM", amount: "- ₦15,000.00", state: 'outflow', type: "debit", status: "Successful" },
  { id: 6, title: "Repayment Direct Debit", date: "2026-04-25T12:00:00", displayDate: "25th Apr. 2026 12:00PM", amount: "- ₦15,000.00", state: 'outflow', type: "debit", status: "declined" }
];
