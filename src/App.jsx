import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Intro from "./pages/Intro";
import PromotionPage from "./pages/PromotionPage";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import RoleSelection from "./pages/RoleSelection";
import JobSeeker from "./pages/JobSeeker";
import JobGiver from "./pages/JobGiver";
import Jobs from "./pages/Jobs";

import Chats from "./pages/chats";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyOTP from "./pages/VerifyOtp";
import ResetPassword from "./pages/ResetPassword";
import JobGiverProfile from "./pages/JobGiverProfile";
import JobGiverHome from "./pages/JobGiverHome.jsx";
import JobSeekerHome from "./pages/JobSeekerHome.jsx";
import SeekerJob from "./pages/SeekerJob";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Intro />} />
        <Route path="/promotion" element={<PromotionPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/role-selection" element={<RoleSelection />} />

        <Route path="/jobseeker" element={<JobSeeker />} />
        <Route path="/recruiter" element={<JobGiver />} />
        <Route path="/jobs" element={<Jobs />} />
      
        <Route path="/chats" element={<Chats />} />
        <Route path="/jobgiver-profile" element={<JobGiverProfile />} />
        <Route path="/jobseekerhome" element={<JobSeekerHome />} />
        <Route path="/jobgiverhome" element={<JobGiverHome />} />
        <Route path="/seekerjob" element={<SeekerJob />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
