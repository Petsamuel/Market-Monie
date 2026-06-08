import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LandingPage2 from "./LandingPage2";

// New Auth Components
import AuthLayout from "./(auth)/layout";
import Login from "./(auth)/login/login";
import Register from "./(auth)/register/register";
import VerifyEmail from "./(auth)/register/verify-email";
import VerifyOTP from "./(auth)/register/verify-otp";
import ForgotPassword from "./(auth)/forgot-password/forgot-password";
import SuccessScreen from "./components/ui/success-screen";

// New Onboarding Components
import OnboardingLayout from "./(onboarding)/layout";
import PhoneVerification from "./(onboarding)/phone-verification";
import LoanApplication from "./(onboarding)/loan-application";

// Dashboard Components
import DashboardLayout from "./(dashboard)/layout";
import Dashboard from "./(dashboard)/Dashboard";
import Analytics from "./(dashboard)/Analytics";
import ComingSoon from "./(dashboard)/ComingSoon";
import LoanHistory from "./(dashboard)/LoanHistory";
import DownloadHistory from "./(dashboard)/components/DownloadHistory";
import TransactionDetails from "./(dashboard)/components/TransactionDetails";
import LoanStatusTracker from "./(dashboard)/loan-requests/LoanStatusTracker";
import PayFullBalance from "./(dashboard)/repayments/PayFullBalance";
import MissedInstallments from "./(dashboard)/repayments/MissedInstallments";
import RepaymentDetails from "./(dashboard)/repayments/RepaymentDetails";
import MakePaymentOption from "./(dashboard)/repayments/MakePaymentOption";
import LoanDetails from "./(dashboard)/loan-requests/LoanDetails";
import AgentAssignedDetails from "./(dashboard)/pre-disbursement/AgentAssignedDetails";
import VerificationDetails from "./(dashboard)/pre-disbursement/VerificationDetails";
import ApprovedDetails from "./(dashboard)/pre-disbursement/ApprovedDetails";
import DeclinedDetails from "./(dashboard)/pre-disbursement/DeclinedDetails";
import DisbursedDetails from "./(dashboard)/pre-disbursement/DisbursedDetails";
import Settings from "./(dashboard)/profile/Settings";
import EditProfile from "./(dashboard)/profile/EditProfile";
import Profile from "./(dashboard)/profile/Profile";
import Security from "./(dashboard)/profile/Security";
import HelpSupport from "./(dashboard)/profile/HelpSupport";
import ThemeSettings from "./(dashboard)/profile/ThemeSettings";


import LandingPage from "./LandingPage";

// No queryClient here, it's provided by main.jsx

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'system';
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Entry Point */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/location-select" element={<LandingPage2 />} />


        {/* Onboarding & Application Routes */}
        <Route element={<OnboardingLayout />}>
          <Route path="/onboarding/phone" element={<PhoneVerification />} />
          <Route path="/apply/hub" element={<LoanApplication />} />
        </Route>

        {/* Standalone Success Screens */}
        <Route path="/register/success" element={
          <SuccessScreen
            title="Account Created!"
            description="Your account has been successfully verified. You are being redirected to complete your profile."
            redirectPath="/onboarding/phone"
            countdownSeconds={5}
          />
        } />

        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>

        {/* Dashboard Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/loan-requests" element={<ComingSoon title="My Loan Request" />} />
          <Route path="/dashboard/loan-requests/history" element={<LoanHistory />} />
          <Route path="/dashboard/loan-requests/tracker" element={<LoanStatusTracker />} />
          <Route path="/dashboard/loan-requests/details" element={<LoanDetails />} />

          {/* Pre-disbursement Details */}
          <Route path="/dashboard/loan-requests/agent-details" element={<AgentAssignedDetails />} />
          <Route path="/dashboard/loan-requests/verification-details" element={<VerificationDetails />} />
          <Route path="/dashboard/loan-requests/approved-details" element={<ApprovedDetails />} />
          <Route path="/dashboard/loan-requests/declined-details" element={<DeclinedDetails />} />
          <Route path="/dashboard/loan-requests/disbursed-details" element={<DisbursedDetails />} />

          <Route path="/dashboard/analytics" element={<Analytics />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/settings/security" element={<Security />} />
          <Route path="/dashboard/settings/theme" element={<ThemeSettings />} />
          <Route path="/dashboard/support" element={<HelpSupport />} />
          <Route path="/dashboard/make-payment" element={<MakePaymentOption />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/profile/edit" element={<EditProfile />} />

          {/* Repayments Flow */}
          <Route path="/dashboard/repayments/pay-now" element={<RepaymentDetails />} />
          <Route path="/dashboard/repayments/missed-details" element={<MissedInstallments />} />
          <Route path="/dashboard/repayments/pay-full" element={<PayFullBalance />} />
        </Route>
        <Route path="/dashboard/loan-requests/history/download" element={<DownloadHistory />} />
        <Route path="/dashboard/loan-requests/receipt" element={<TransactionDetails />} />
        <Route path="/dashboard/loan-requests/history/details/:txId" element={<TransactionDetails />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
