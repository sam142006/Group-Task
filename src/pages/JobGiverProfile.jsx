import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import pg from "../assets/pg.png"; 
import { useNavigate } from "react-router-dom";

export default function JobGiverProfile() {

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/submit-notification");
  };

  return (
    <div className="min-h-screen w-full bg-[#f7f8fa] text-[#1c1c1c] font-sans">
      <Navbar />

      <div className="px-6 md:px-16 lg:px-24 py-10">
       <button
  onClick={() => navigate("/JobGiverDashboard")}
  className="text-sm bg-[#e9edf5] px-4 py-2 rounded-md text-[#44527e] mb-6"
>
  Dashboard
</button>


        <div className="w-full flex justify-center mb-10">
          <div className="w-64 h-64 border-2 border-dashed border-gray-300 rounded-xl flex flex-col justify-center items-center text-center p-4">
            <div className="text-green-500 text-4xl mb-2">⬆️</div>
            <p className="text-[#4a8f4a] font-medium">Browse photo or drop here</p>
            <p className="text-gray-400 text-xs mt-1">
              A photo larger than 400 pixels<br />Max photo size 5MB.
            </p>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-4">Recruiter Bio</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-medium">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input className="w-full border border-gray-300 rounded-lg p-3 mt-1" />
          </div>

          <div>
            <label className="text-sm font-medium">
              Job Title <span className="text-red-500">*</span>
            </label>
            <input className="w-full border border-gray-300 rounded-lg p-3 mt-1" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div>
            <label className="text-sm font-medium">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input className="w-full border border-gray-300 rounded-lg p-3 mt-1" />
          </div>

          <div>
            <label className="text-sm font-medium">
              Location <span className="text-red-500">*</span>
            </label>
            <input className="w-full border border-gray-300 rounded-lg p-3 mt-1" />
          </div>

          <div>
            <label className="text-sm font-medium">
              Contact Email <span className="text-red-500">*</span>
            </label>
            <input className="w-full border border-gray-300 rounded-lg p-3 mt-1" />
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-10 mb-2">Company name + Logo</h3>
        <textarea className="w-full border border-gray-300 rounded-lg p-3 h-32" />

        <h3 className="text-lg font-semibold mt-10">
          Bio Description <span className="text-red-500">*</span>
        </h3>

        <textarea className="w-full border border-gray-300 rounded-lg p-3 mt-3 h-16 text-sm" />

        <h3 className="text-lg font-semibold mt-10">Linkedin Profile URL</h3>

        <div className="border border-gray-300 rounded-lg p-4 mt-3 flex items-center gap-3 bg-[#f7f8fa]">
          <img src={pg} alt="list icon" className="w-6 h-6 opacity-70" />
          <span className="text-gray-500">Linkedin.com/in/Yourprofile</span>
        </div>

        <textarea
          className="w-full border border-gray-300 rounded-lg p-3 mt-3 h-12"
        
        />

        <h3 className="text-lg font-semibold mt-10">
          Specialisations <span className="text-red-500">*</span>
        </h3>

        <textarea
          className="w-full border border-gray-300 rounded-lg p-3 mt-3 h-32"
          placeholder="Write here..."
        />

        <h3 className="text-lg font-semibold mt-10">
          About your company <span className="text-red-500">*</span>
        </h3>

        <textarea
          rows={4}
          className="w-full border border-gray-300 rounded-md p-3"
          placeholder="Write here..."
        />

        <div className="mt-6 text-sm text-gray-600 space-y-3">
          <label className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <span>By submitting this application, I agree…</span>
          </label>

          <label className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <span>Yes, NextStep can contact me…</span>
          </label>
        </div>

        <div className="w-full flex justify-center mt-10 mb-10">
          <button
            onClick={handleSubmit}
            className="bg-[#0e1f40] text-white px-6 py-2 rounded-md hover:bg-[#13284f]"
          >
            Submit Application
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
