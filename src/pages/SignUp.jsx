import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import left from "../assets/left.png";
import right from "../assets/right.png";
import google from "../assets/google.png";

export default function SignUp(){
  const navigate = useNavigate();

  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  
  const [agree, setAgree] = useState(false);

 const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
  setErrorMsg("");

  if (!full_name || !email || !password || !password2) {
    setErrorMsg("All fields are required.");
    return;
  }

  if (password !== password2) {
    setErrorMsg("Passwords do not match.");
    return;
  }

  if (!agree) {
    setErrorMsg("Please accept the terms and services.");
    return;
  }

  setLoading(true);

  try {
    const response = await fetch(
      "https://jobseeker-backend-django.onrender.com/auth/signup/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name,
          email,
          password,
          password2,
        }),
      }
    );

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      setErrorMsg(data.error || data.detail || "Signup failed. Please try again.");
      return;
    }

    const accessToken = data.access || data.access_token || data.token;
    const refreshToken = data.refresh || data.refresh_token;

    if (accessToken && refreshToken) {
      localStorage.setItem("access", accessToken);
      localStorage.setItem("refresh", refreshToken);

      console.log("SAVED ACCESS =", accessToken);
      console.log("SAVED REFRESH =", refreshToken);

      navigate("/role-selection");
    } else {
      setErrorMsg("Signup succeeded but server did NOT return tokens.");
    }

  } catch (error) {
    console.error(error);
    setErrorMsg("Something went wrong.");
  } finally {
    setLoading(false);
  }
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

        {errorMsg && (
          <p className="text-red-500 text-center mb-2 text-sm">{errorMsg}</p>
        )}

        <div className="space-y-3 px-[6px]">
          <div>
            <label className="text-[#202430] text-sm">Full Name</label>
            <input
              value={full_name}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border-b border-[#D6DDEB] bg-transparent text-black mt-[3px] pb-[3px] outline-none"
            />
          </div>

          <div>
            <label className="text-[#202430] text-sm">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-[#D6DDEB] bg-transparent text-black mt-[3px] pb-[3px] outline-none"
            />
          </div>

          <div>
            <label className="text-[#202430] text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b border-[#D6DDEB] bg-transparent text-black mt-[3px] pb-[3px] outline-none"
            />
          </div>

          <div>
            <label className="text-[#202430] text-sm">Confirm Password</label>
            <input
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              className="w-full border-b border-[#D6DDEB] bg-transparent text-black mt-[3px] pb-[3px] outline-none"
            />
          </div>
          

          <div className="flex items-center gap-2 mt-[2px]">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="w-4 h-4 accent-[#15294B]"
            />
            <p className="text-[#202430] text-xs">
              I have read and agree to the{" "}
              <span className="text-[#6B8BAD]">terms and services</span>
            </p>
          </div>

          <button
            onClick={handleSignup}
            disabled={loading}
            className={`w-full py-2 rounded-md text-base ${
              loading
                ? "bg-gray-400 text-white"
                : "bg-[#15294B] text-white hover:bg-white hover:text-[#15294B]"
            }`}
          >
            {loading ? "Processing..." : "Get Started"}
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
