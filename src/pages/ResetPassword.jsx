import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import lock from "../assets/lock.png";
import left from "../assets/left.png";
import right from "../assets/right.png";
import eye from "../assets/eye.png";
import eyeslash from "../assets/eye-slash.png";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen w-screen bg-white overflow-hidden font-sans">

      <img src={left} alt="left" className="absolute bottom-0 left-0 w-[420px]" />
      <img src={right} alt="right" className="absolute bottom-0 right-0 w-[420px]" />

      <div className="relative z-10 flex flex-col items-center w-[460px] text-center">
        <img src={logo} alt="logo" className="w-[90px] mb-2 select-none" />
        <h2 className="text-[#142850] text-[30px] font-semibold mb-8">
          Your work people are here
        </h2>

        <div className="bg-[#F8FAFC] shadow-md rounded-2xl w-full px-10 py-10">
          <h2 className="text-[20px] text-black font-semibold mb-8">Create a new password</h2>

          <form onSubmit={handleSubmit}>
           
            <label className="block text-left text-[14px] font-medium text-[#142850] mb-2">
              New Password
            </label>
            <div className="relative mb-6">
              <img src={lock} alt="lock" className="absolute left-3 top-3 w-[18px] opacity-70" />
              <input
                type={show ? "text" : "password"}
                placeholder="Enter your new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-10 py-2 border-b border-gray-300 text-[14px] text-black  focus:outline-none focus:border-[#142850]"
              />
              <img
                src={show ? eyeslash : eye}
                alt="toggle"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-2.5 w-[20px] cursor-pointer opacity-70 hover:opacity-100 transition"
              />
            </div>

            <label className="block text-left text-[14px] font-medium text-[#142850] mb-2">
              Confirm Password
            </label>
            <div className="relative mb-6">
              <img src={lock} alt="lock" className="absolute left-3 top-3 w-[18px] opacity-70" />
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm your new password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
                className="w-full pl-10 pr-10 py-2 border-b border-gray-300 text-[14px] text-black bg-transparent focus:outline-none focus:border-[#142850]"
              />
              <img
                src={showConfirm ? eyeslash : eye}
                alt="toggle"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-2.5 w-[20px] cursor-pointer opacity-70 hover:opacity-100 transition"
              />
            </div>

            <ul className="text-left text-[12px] text-gray-600 mb-6 space-y-1">
              <li>✔️ At least 8 characters</li>
              <li>✔️ One uppercase letter</li>
              <li>✔️ One lowercase letter</li>
              <li>✔️ One number</li>
              <li>✔️ One special character (@#$%^&*)</li>
            </ul>

            <button
              type="submit"
              className="w-full bg-[#142850] text-white font-medium text-[15px] py-3 rounded-md border border-[#142850] transition-all duration-300 hover:bg-white hover:text-[#142850]"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
