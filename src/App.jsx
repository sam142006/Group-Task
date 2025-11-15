import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Intro from "./pages/Intro";
import PromotionPage from "./pages/PromotionPage";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import RoleSelection from "./pages/RoleSelection";
import JobSeekerPage from "./pages/JobSeeker";
import JobGiverPage from "./pages/JobGiver";
import Jobs from "./pages/Jobs";
import AboutUs from "./pages/AboutUs";
import Chats from "./pages/chats";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyOTP from "./pages/VerifyOtp";
import ResetPassword from "./pages/ResetPassword";

import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<Intro />} />
         <Route path="/promotion" element={<PromotionPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/select-role" element={<RoleSelection />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/role-selection" element={<RoleSelection />} />


        <Route path="/*" element={<MainApp />} />
      </Routes>
    </Router>
  );
}

function MainApp() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/job-seeker" element={<JobSeekerPage />} />
        <Route path="/job-giver" element={<JobGiverPage />} />
       
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/chats" element={<Chats />} />
    
      </Routes>
    </>
  );
}

export default App;
