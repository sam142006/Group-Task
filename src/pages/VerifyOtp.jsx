import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import left from "../assets/left.png";
import right from "../assets/right.png";

export default function VerifyOTP() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleVerify = () => {
    console.log("OTP entered:", otp.join(""));
    navigate("/reset-password"); 
  };

  return (
    <div className="h-screen w-screen bg-white flex relative overflow-hidden">
    
      <img src={left} className="absolute bottom-0 left-0 w-[400px]" alt="left" />
      <img src={right} className="absolute bottom-0 right-0 w-[400px]" alt="right" />

      <div className="flex flex-col items-center justify-center w-full h-full pt-4">
        <img src={logo} className="w-20 mb-3" alt="logo" />
        <h1 className="text-[#15294B] text-3xl font-bold leading-tight">
          Your work people are here
        </h1>

        <div className="w-[430px] bg-[#F6F8FB] p-8 rounded-xl shadow mt-4">
          <h2 className="text-[#15294B] text-2xl font-semibold text-center mb-4">
            Verify OTP
          </h2>

          <p className="text-center text-[#454545] text-sm mb-5">
            A 6-digit code has been sent to <span className="font-semibold">abc@gmail.com</span>
            <br />
            Enter the OTP below
          </p>

          <div className="flex justify-center gap-3 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                value={digit}
                maxLength={1}
                onChange={(e) => handleChange(e.target.value, index)}
                className="w-10 h-12 text-center border border-[#D6DDEB] rounded-md text-lg outline-none focus:border-[#15294B]"
              />
            ))}
          </div>

          <button
            onClick={handleVerify}
            className="w-full bg-[#15294B] text-white py-3 rounded-md text-lg"
          >
            Verify OTP
          </button>

          <p className="text-center text-sm mt-4 text-[#454545]">
            Didn’t receive the code?{" "}
            <button
              onClick={() => navigate("/reset-password")}
              className="text-[#15294B] font-medium hover:underline"
            >
              Resend OTP
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
