import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function JobGiverProfile() {
  return (
    <div className="bg-white min-h-screen text-[#202430] font-sans">
      <Navbar />

      <div className="w-full max-w-[1200px] mx-auto pt-24 pb-20 px-4">
        <div className="flex items-center gap-3 mb-10">
          <button className="px-6 py-1 rounded-full bg-white shadow text-[#202430] border">
            Dashboard
          </button>
        </div>

        <div className="flex justify-center mb-12">
          <div className="w-[260px] h-[260px] bg-white rounded-xl border flex flex-col justify-center items-center gap-3 shadow-sm">
            <img
              src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
              alt="upload"
              className="w-16 opacity-80"
            />
            <p className="text-[#34A853] font-semibold text-sm">Browse photo or drop here</p>
            <p className="text-xs text-gray-400 text-center w-[80%] leading-4">
              A photo larger than 400 pixels works best. Max photo size 5 MB.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Recruiter Bio</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-medium">Full Name*</label>
            <input
              type="text"
              className="w-full h-[48px] mt-2 bg-white border rounded px-4 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Job Title*</label>
            <input
              type="text"
              className="w-full h-[48px] mt-2 bg-white border rounded px-4 outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div>
            <label className="text-sm font-medium">Company Name*</label>
            <input
              type="text"
              className="w-full h-[48px] mt-2 bg-white border rounded px-4 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Location*</label>
            <input
              type="text"
              className="w-full h-[48px] mt-2 bg-white border rounded px-4 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Contact Email*</label>
            <select className="w-full h-[48px] mt-2 bg-white border rounded px-4 outline-none">
              <option>Email</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label className="text-sm font-medium">Company Name + Logo*</label>
          <div className="h-[70px] mt-2 bg-white border rounded flex items-center justify-center gap-2 text-gray-500">
            <img
              src="https://cdn-icons-png.flaticon.com/512/685/685655.png"
              alt="upload"
              className="w-5 opacity-70"
            />
            Company-Logo.Png
          </div>
        </div>

        <div className="mt-6">
          <label className="text-sm font-medium">Bio Description</label>
          <textarea
            className="w-full h-[130px] mt-2 bg-white border rounded px-4 py-3 outline-none resize-none"
          ></textarea>
        </div>

        <div className="mt-10">
          <label className="text-sm font-medium">LinkedIn Profile URL</label>
          <div className="h-[48px] mt-2 bg-white border rounded flex items-center px-4 text-sm text-gray-500 gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
              className="w-4 opacity-70"
            />
            LinkedIn.com/in/yourprofile
          </div>

          <input
            type="text"
            className="w-full h-[48px] bg-white border rounded mt-2 px-4 outline-none"
          />
        </div>

        <div className="mt-10">
          <label className="text-sm font-medium">Specializations</label>
          <textarea
            className="w-full h-[150px] mt-2 bg-white border rounded px-4 py-3 outline-none resize-none"
            placeholder="Write here..."
          ></textarea>
        </div>

        <div className="mt-10">
          <label className="text-sm font-medium">About Your Company</label>
          <textarea
            className="w-full h-[150px] mt-2 bg-white border rounded px-4 py-3 outline-none resize-none"
            placeholder="Write here..."
          ></textarea>
        </div>

        <div className="mt-6 space-y-4 text-sm">
          <label className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <span>
              By submitting this application, I agree that I have read the Privacy Policy
              <br />
              and confirm that NextStep store my personal details to be able to process my job application.
            </span>
          </label>

          <label className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <span>Make my profile visible to candidates and other recruiters.</span>
          </label>
        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-[#0A2342] text-white px-10 py-3 rounded-md w-[260px] text-sm">
            Submit Application
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
