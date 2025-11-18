import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaRegHeart, FaRegComment, FaRegBookmark, FaUpload } from "react-icons/fa";

import googleLogo from "../assets/google.png";
import googleImg from "../assets/google-building.png";
import msLogo from "../assets/microsoft.png";
import msImg from "../assets/microsoft-building.png";

export default function JobGiverHome() {
  return (
    <div className="bg-[#EBEDF0] text-[#202430] min-h-screen w-full overflow-x-hidden">
      <Navbar />

      <div className="max-w-5xl mx-auto mt-6">
        <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <input
            className="w-full bg-gray-100 p-3 rounded-xl outline-none"
            placeholder="Start a post..."
          />
        </div>

        <div className="flex items-center justify-around bg-white p-3 rounded-xl shadow mt-2 text-sm">
          <button>🎥 Video</button>
          <button>🖼️ Photo</button>
          <button>📝 Write article</button>
        </div>

        <div className="flex items-center justify-between mt-8 px-1">
          <button className="px-6 py-2 bg-[#0E224A] text-white rounded-lg">Your posts</button>
          <span className="text-[#0E224A] cursor-pointer text-sm">View all</span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-6">
        
          <div className="bg-white rounded-xl shadow p-4">
            <div className="flex items-center gap-3">
              <img src={googleLogo} alt="" className="w-12" />
              <div>
                <p className="font-semibold">Google</p>
                <p className="text-xs text-gray-500">45,556,204 followers • 14m</p>
              </div>
            </div>

            <p className="mt-3 text-[15px]">
              “Exciting career openings now live! Join our growing global team.”
            </p>

            <img src={googleImg} alt="" className="rounded-xl mt-4" />

            <div className="flex justify-between text-xl mt-3 px-2">
              <FaRegHeart />
              <FaRegComment />
              <FaUpload />
              <FaRegBookmark />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-4">
            <div className="flex items-center gap-3">
              <img src={msLogo} alt="" className="w-12" />
              <div>
                <p className="font-semibold">Microsoft</p>
                <p className="text-xs text-gray-500">66,596,754 followers • 7m</p>
              </div>
            </div>

            <p className="mt-3 text-[15px]">
              “Exciting career openings now live! Be part of Microsoft’s mission to empower every person and organization.”
            </p>

            <img src={msImg} alt="" className="rounded-xl mt-4" />

            <div className="flex justify-between text-xl mt-3 px-2">
              <FaRegHeart />
              <FaRegComment />
              <FaUpload />
              <FaRegBookmark />
            </div>
          </div>
        </div>


        <div className="mt-12 w-full">
          <h1 className="text-4xl font-bold">Welcome back, Mayank!</h1>
          <p className="text-sm text-gray-600 mt-1">
            Here's what's happening with your job postings today.
          </p>

          <div className="bg-[#DCEBFF] p-4 rounded-xl mt-5 flex justify-between items-center">
            <p className="flex items-center gap-2"><span>👥</span>You have 12 new applicants this week</p>
            <span className="text-[#3766F2] cursor-pointer">Review Applicants</span>
          </div>

          <div className="bg-[#FFE7C8] p-4 rounded-xl mt-3 flex justify-between items-center">
            <p className="flex items-center gap-2"><span>⚠️</span>Your 'Frontend Developer' job post is expiring in 2 days</p>
            <span className="text-[#F78627] cursor-pointer">Extend Post</span>
          </div>

          <div className="bg-[#D7F8DB] p-4 rounded-xl mt-3 flex justify-between items-center">
            <p className="flex items-center gap-2"><span>📈</span>Your job posts received 45% more views this week</p>
            <span className="text-[#078C4B] cursor-pointer">View Analytics</span>
          </div>

          <div className="bg-[#E7D6FF] p-4 rounded-xl mt-3 flex justify-between items-center">
            <p className="flex items-center gap-2"><span>💡</span>Based on your recent postings, here are 5 suggested candidates</p>
            <span className="text-[#6D40F8] cursor-pointer">View Suggestions</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
