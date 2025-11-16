import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaRegHeart, FaRegComment, FaRegBookmark, FaUpload } from "react-icons/fa";

import googleLogo from "../assets/google.png";
import googleImg from "../assets/google-building.png";
import msLogo from "../assets/microsoft.png";
import msImg from "../assets/microsoft-building.png";

import satyaImg from "../assets/satya.png";

import itIcon from "../assets/it.png";
import financeIcon from "../assets/finance.png";
import engIcon from "../assets/engineering.png";
import designIcon from "../assets/design.png";

export default function JobSeekerHome() {
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
          <button>🖼 Photo</button>
          <button>📝 Write article</button>
        </div>

        <div className="mt-10 flex justify-between">
          <button className="px-6 py-2 bg-[#0E224A] text-white rounded-lg">
            Companies
          </button>

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
          <button className="px-6 py-2 bg-[#0E224A] text-white rounded-lg">
            General
          </button>
        </div>

        <div className="bg-white rounded-xl shadow p-4 mt-4 w-full">
          <img src={satyaImg} alt="" className="rounded-xl w-full" />
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold">Industry Insights</h2>
          <p className="text-gray-600 mt-1">
            Get real-time updates on growing industries, trending job roles, and the skills top employers want in 2025.
          </p>

          <div className="grid grid-cols-4 gap-5 mt-8 mb-10">

            <div className="bg-white rounded-xl p-6 shadow">
              <img src={itIcon} className="w-10 mx-auto" />
              <h3 className="text-center mt-4 font-semibold">Technology & IT</h3>
              <p className="text-sm text-center mt-2">
                India's tech sector is expanding fast — AI, Cloud, and Cybersecurity roles up by 40% this year.
              </p>
              <p className="font-semibold mt-4">Top Skills:</p>
              <p className="text-sm">Python, JavaScript, Data Analytics, Cloud Computing</p>
              <p className="font-semibold mt-4">Freshers Avg. Salary:</p>
              <p className="text-sm">₹4–10 LPA</p>
              <p className="font-semibold mt-4">Top Job Roles:</p>
              <ul className="text-sm mt-2 space-y-1">
                <li>• Full Stack Developer</li>
                <li>• Data Scientist</li>
                <li>• Cloud Solutions Architect</li>
                <li>• Cybersecurity Analyst</li>
                <li>• AI/ML Engineer</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <img src={financeIcon} className="w-10 mx-auto" />
              <h3 className="text-center mt-4 font-semibold">Business, Finance & Marketing</h3>
              <p className="text-sm text-center mt-2">
                Strong demand for Digital Marketers, Data Analysts, and Finance Associates.
              </p>
              <p className="font-semibold mt-4">Top Skills:</p>
              <p className="text-sm">Excel, Google Analytics, SEO, Financial Modeling</p>
              <p className="font-semibold mt-4">Freshers Avg. Salary:</p>
              <p className="text-sm">₹3–8 LPA</p>
              <p className="font-semibold mt-4">Top Job Roles:</p>
              <ul className="text-sm mt-2 space-y-1">
                <li>• Digital Marketing Manager</li>
                <li>• Business Analyst</li>
                <li>• Financial Analyst</li>
                <li>• SEO/SEM Specialist</li>
                <li>• Content Strategist</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <img src={engIcon} className="w-10 mx-auto" />
              <h3 className="text-center mt-4 font-semibold">Engineering & Manufacturing</h3>
              <p className="text-sm text-center mt-2">
                Opportunities rising in Automation, EVs, and Sustainable Manufacturing.
              </p>
              <p className="font-semibold mt-4">Top Skills:</p>
              <p className="text-sm">CAD, PLC Programming, Quality Control, Robotics</p>
              <p className="font-semibold mt-4">Freshers Avg. Salary:</p>
              <p className="text-sm">₹3–7 LPA</p>
              <p className="font-semibold mt-4">Top Job Roles:</p>
              <ul className="text-sm mt-2 space-y-1">
                <li>• Automation Engineer</li>
                <li>• Mechanical Design Engineer</li>
                <li>• Quality Assurance Manager</li>
                <li>• Supply Chain Analyst</li>
                <li>• IoT Engineer</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <img src={designIcon} className="w-10 mx-auto" />
              <h3 className="text-center mt-4 font-semibold">Design & Creative Fields</h3>
              <p className="text-sm text-center mt-2">
                Startups and agencies hiring UI/UX Designers, Graphic Artists, and Content Creators.
              </p>
              <p className="font-semibold mt-4">Top Skills:</p>
              <p className="text-sm">Figma, Canva, Adobe Suite, User Research</p>
              <p className="font-semibold mt-4">Freshers Avg. Salary:</p>
              <p className="text-sm">₹3–6 LPA</p>
              <p className="font-semibold mt-4">Top Job Roles:</p>
              <ul className="text-sm mt-2 space-y-1">
                <li>• Product Designer</li>
                <li>• UI/UX Designer</li>
                <li>• Social Media Manager</li>
                <li>• Video Editor / Animator</li>
                <li>• Brand Strategist</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
      <Footer/>
    </div>
  );
}