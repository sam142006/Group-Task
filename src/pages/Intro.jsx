import React from "react";
import logo from "../assets/logo.png";

export default function Intro() {
  return (
    <div className="h-screen w-screen bg-white flex flex-col items-center justify-center">
      <img src={logo} className="w-32 mb-8" />
      <a
        href="/signup"
        className="px-10 py-3 bg-[#15294B] text-white rounded-md text-lg"
      >
        Continue
      </a>
    </div>
  );
}

