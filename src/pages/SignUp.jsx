import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import left from "../assets/left.png";
import right from "../assets/right.png";
import google from "../assets/google.png";

export default function SignUp() {
  const navigate = useNavigate();

  const handleSignup = () => {
    const data = {
      full_name: document.querySelectorAll("input")[0].value,
      email: document.querySelectorAll("input")[1].value,
      password: document.querySelectorAll("input")[2].value,
      password2: document.querySelectorAll("input")[3].value,
    };

    fetch("https://jobseeker-backend-django.onrender.com/auth/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if (data.token && data.refresh) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("refresh", data.refresh);
          navigate("/role-selection");
          console.log("Signed up successfully!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleLoginClick = () => {
    navigate("/login"); 
  };

  return (
    <div className="h-screen w-screen bg-white flex flex-col items-center justify-start relative overflow-hidden">
      <img src={left} className="absolute bottom-0 left-0 w-[430px] z-0" />
      <img src={right} className="absolute bottom-0 right-0 w-[430px] z-0" />

      <div className="flex flex-col items-center mt-3 z-10">
        <img src={logo} className="w-20 mb-1" />
        <h1 className="text-[#15294B] text-[15px] font-bold leading-tight text-center">
          Your work people are here
        </h1>
        <p className="text-[#454545] text-[13px] leading-tight mt-1">
          Sign up now to get started with an account
        </p>
      </div>

      <div className="w-[520px] bg-[#F6F8FB] p-5 rounded-xl shadow-lg mt-3 z-10">
        <h2 className="text-black text-2xl font-bold text-center mb-4">
          Sign Up
        </h2>

        <div className="space-y-3 px-[6px]">
          <div>
            <label className="text-[#202430] text-sm">Full Name</label>
            <input className="w-full border-b border-[#D6DDEB] bg-transparent text-black mt-[3px] pb-[3px] outline-none" />
          </div>

          <div>
            <label className="text-[#202430] text-sm">Email</label>
            <input className="w-full border-b border-[#D6DDEB] bg-transparent text-black mt-[3px] pb-[3px] outline-none" />
          </div>

          <div>
            <label className="text-[#202430] text-sm">Password</label>
            <input
              type="password"
              className="w-full border-b border-[#D6DDEB] bg-transparent text-black mt-[3px] pb-[3px] outline-none"
            />
          </div>

          <div>
            <label className="text-[#202430] text-sm">Confirm Password</label>
            <input
              type="password"
              className="w-full border-b border-[#D6DDEB] bg-transparent text-black mt-[3px] pb-[3px] outline-none"
            />
          </div>

          <div className="flex items-center gap-2 mt-[2px]">
            <input type="checkbox" className="w-4 h-4 accent-[#15294B]" />
            <p className="text-[#202430] text-xs">
              I have read and agree to the{" "}
              <span className="text-[#6B8BAD]">terms and services</span>
            </p>
          </div>

          <button
            onClick={handleSignup}
            className="w-full bg-[#15294B] text-white py-2 rounded-md text-base hover:bg-white hover:text-[#15294B]"
          >
            Get Started
          </button>

          <div className="flex items-center gap-2">
            <div className="flex-1 h-[1px] bg-[#D6DDEB]"></div>
            <span className="text-[#202430] text-xs">or</span>
            <div className="flex-1 h-[1px] bg-[#D6DDEB]"></div>
          </div>

          <button className="w-1/2 mx-auto border border-[#D6DDEB] bg-[#F6F8FB] py-2 rounded-md text-base flex items-center justify-center gap-2 hover:bg-[#e8eaef] transition">
            <img src={google} className="w-4 h-4" />
            <span className="text-[#202430] text-sm">Sign up with Google</span>
          </button>
        </div>
      </div>

      <p className="text-[#202430] text-sm mt-3 z-10">
        Already have an account?{" "}
        <span
          onClick={handleLoginClick}
          className="text-[#6B8BAD] font-medium cursor-pointer"
        >
          Login
        </span>
      </p>
    </div>
  );
}
