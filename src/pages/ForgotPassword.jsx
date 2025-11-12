import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import left from "../assets/left.png";
import right from "../assets/right.png";
import mail from "../assets/mail.png";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const handleSendOTP = () => {
    console.log("OTP sent!");
    navigate("/verify-otp");
  };

  return (
    <div className="h-screen w-screen bg-white flex relative overflow-hidden">
    
      <img src={left} className="absolute bottom-0 left-0 w-[400px]" alt="left" />
      <img src={right} className="absolute bottom-0 right-0 w-[400px]" alt="right" />

      <div className="flex flex-col items-center justify-center w-full h-full pt-4">
        <img src={logo} className="w-20 mb-3" alt="logo" />

        <h1 className="text-[#15294B] text-[30px] font-bold leading-tight">
          Your work people are here
        </h1>

        <div className="w-[430px] bg-[#F6F8FB] p-8 rounded-xl shadow mt-4">
          <h2 className="text-[#15294B] text-2xl font-semibold text-center mb-5">
            Forgot Password
          </h2>

          <div className="flex flex-col gap-1 mb-5">
            <label className="text-black text-sm">Email</label>
            <div className="relative">
              <img src={mail} className="w-5 absolute left-0 top-3 opacity-70" alt="mail" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full border-b border-[#D6DDEB] bg-transparent  outline-none py-2 pl-8 text-[14px] text-black placeholder:text-[#A8ADB7]"
              />
            </div>
          </div>

          <button
            onClick={handleSendOTP}
            className="w-full bg-[#15294B] text-white py-3 rounded-md transition-all duration-300 hover:bg-white hover:text-[#142850] mt-3"
          >
            Send OTP
          </button>

          <div className="text-center mt-4">
            <button
              onClick={() => navigate("/login")}
              className="text-[#15294B] text-sm font-medium hover:underline"
            >
              ← Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
