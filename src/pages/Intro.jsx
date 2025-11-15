import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Intro() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-white flex flex-col items-center justify-center">
      <img src={logo} className="w-32 mb-8" alt="logo" />
      <button
        onClick={() => navigate("/promotion")} 
        className="px-10 py-3 bg-[#15294B] text-white rounded-md text-lg"
      >
        Continue
      </button>
    </div>
  );
}
