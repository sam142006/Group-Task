import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import left from "../assets/left.png";
import right from "../assets/right.png";
import mail from "../assets/mail.png";
import lock from "../assets/lock.png";
import facebook from "../assets/facebook.png";
import apple from "../assets/apple.png";
import google from "../assets/google.png";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setErrorMsg("");

    if (!email || !password) {
      setErrorMsg("All fields are required.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://jobseeker-backend-django.onrender.com/auth/login/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();
      console.log("Login Response:", data);

      if (!response.ok) {
        setErrorMsg(data.error || data.detail || "Login failed. Please try again.");
        setLoading(false);
        return;
      }

      const accessToken = data.token || data.access || data.access_token;

      if (accessToken && data.refresh) {
        localStorage.setItem("token", accessToken);
        localStorage.setItem("refresh", data.refresh);

        navigate("/role-selection");
      } else {
        setErrorMsg("Login succeeded but no tokens were returned.");
      }
    } catch (err) {
      setErrorMsg("Network error. Please try again.");
    }

    setLoading(false);
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <div className="h-screen w-screen bg-white flex relative overflow-hidden">
      <img src={left} className="absolute bottom-0 left-0 w-[400px]" alt="" />
      <img src={right} className="absolute bottom-0 right-0 w-[400px]" alt="" />

      <div className="flex flex-col items-center justify-center w-full h-full pt-4">
        <img src={logo} className="w-20 mb-3" alt="" />

        <h1 className="text-[#15294B] text-[30px] font-bold leading-tight">
          Your work people are here
        </h1>

        <p className="text-[#454545] text-sm mt-1 leading-tight">
          Welcome back, Please enter your details
        </p>

        <div className="w-[520px] bg-[#F6F8FB] p-8 rounded-xl shadow mt-4">
          <h2 className="text-[#15294B] text-2xl font-semibold text-center mb-5">
            Login
          </h2>

          {errorMsg && (
            <p className="text-red-500 text-center mb-3 text-sm">{errorMsg}</p>
          )}

          <div className="space-y-5">

            <div className="flex flex-col gap-1">
              <label className="text-[#202430] text-sm">Email</label>
              <div className="relative">
                <img src={mail} className="w-5 absolute left-0 top-3 opacity-70" alt="" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-b border-[#D6DDEB] bg-transparent outline-none py-2 pl-8 text-[14px] text-black placeholder:text-[#A8ADB7]"
                />
              </div>
            </div>

           
            <div className="flex flex-col gap-1">
              <label className="text-[#202430] text-sm">Password</label>
              <div className="relative">
                <img src={lock} className="w-5 absolute left-0 top-3 opacity-70" alt="" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-b border-[#D6DDEB] bg-transparent outline-none py-2 pl-8 text-[14px] text-black placeholder:text-[#A8ADB7]"
                />
              </div>
            </div>

            <div className="flex items-center justify-between mt-1">
              <label className="flex items-center gap-2 text-sm text-[#202430]">
                <input type="checkbox" className="accent-[#15294B] w-4 h-4" />
                Remember me
              </label>

              <p
                onClick={handleForgotPassword}
                className="text-[#6B8BAD] text-sm hover:underline cursor-pointer"
              >
                Forgot Password?
              </p>
            </div>
          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-[#15294B] text-white py-3 rounded-md text-lg transition-all duration-300 hover:bg-white hover:text-[#15294B] mt-7"
          >
            {loading ? "Logging in..." : "Log in"}
          </button>

          <div className="flex items-center gap-4 my-5 justify-center text-[#454545] text-sm">
            <div className="h-[1px] w-20 bg-gray-300"></div>
            or continue with
            <div className="h-[1px] w-20 bg-gray-300"></div>
          </div>

       
          <div className="flex items-center justify-center gap-10 mt-1">
            <img src={facebook} className="w-7 cursor-pointer" alt="" />
            <img src={apple} className="w-7 cursor-pointer" alt="" />
            <img src={google} className="w-7 cursor-pointer" alt="" />
          </div>
        </div>

        <p className="text-center mt-4 text-[#202430] text-sm">
          Don’t have an account?
          <a href="/signup" className="text-[#6B8BAD] ml-1">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
