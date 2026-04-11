import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SelectState from "./Screens/SelectState";

// New Auth Components
import AuthLayout from "./(auth)/layout";
import Login from "./(auth)/login/login";
import Register from "./(auth)/register/register";
import VerifyEmail from "./(auth)/register/verify-email";
import SuccessScreen from "./components/ui/success-screen";

// New Onboarding Components
import OnboardingLayout from "./(onboarding)/layout";
import PhoneVerification from "./(onboarding)/phone-verification";
import BvnVerification from "./(onboarding)/bvn-verification";
import LoanApplication from "./(onboarding)/loan-application";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Entry Point */}
        <Route path="/" element={<SelectState />} />
        
        {/* Onboarding & Application Routes */}
        <Route element={<OnboardingLayout />}>
          <Route path="/onboarding/phone" element={<PhoneVerification />} />
          <Route path="/onboarding/bvn" element={<BvnVerification />} />
          <Route path="/apply/hub" element={<LoanApplication />} />
        </Route>
        
        {/* Standalone Success Screens */}
        <Route path="/register/success" element={
          <SuccessScreen 
            title="Account Created!" 
            description="Your account has been successfully verified. You are being redirected to complete your profile."
            redirectPath="/onboarding/bvn"
            countdownSeconds={5}
          />
        } />

        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
