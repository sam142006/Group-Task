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

        <div className="mt-10 flex justify-between">
          <button className="px-6 py-2 bg-[#0E224A] text-white rounded-lg">Companies</button>
          <span className="text-sm">Short by : Top ⬆</span>
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

        <div className="mt-10">
          <button className="px-6 py-2 bg-[#0E224A] text-white rounded-lg">General</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
