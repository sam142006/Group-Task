import React from "react";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import apple from "../assets/apple.png";
import google from "../assets/google.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0F2341] text-white px-20 py-16 font-poppins">

      <div className="flex justify-between w-full">
        <div className="w-1/4">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} className="w-12" />
            <h2 className="text-xl font-semibold">NextStep</h2>
          </div>

          <p className="text-sm leading-6 text-gray-300">
            Great platform for the job seeker that passionate about startup.
            Find your dream job easier.
          </p>

          <p className="mt-12 text-sm text-gray-400">
            2025 © NextStep. All rights reserved.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>Companies</li>
            <li>Pricing</li>
            <li>Terms</li>
            <li>Advice</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>Help Docs</li>
            <li>Guide</li>
            <li>Updates</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="w-1/4">
          <h3 className="text-lg font-semibold mb-4">Get job notifications</h3>
          <p className="text-gray-300 text-sm mb-4">
            The latest job news, articles, sent to your inbox weekly.
          </p>

          <div className="flex">
            <input
              type="text"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-l-md text-black focus:outline-none"
            />
            <button className="bg-black px-6 rounded-r-md">Subscribe</button>
          </div>

          <div className="flex items-center gap-6 mt-10">
            <img src={facebook} className="w-6 cursor-pointer" />
            <img src={apple} className="w-6 cursor-pointer" />
            <img src={google} className="w-6 cursor-pointer" />
          </div>
        </div>

      </div>
    </footer>
  );
}
