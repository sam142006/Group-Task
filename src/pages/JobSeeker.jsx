import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import bg from "../assets/bg.png";
import users from "../assets/users.png";
import search from "../assets/search.png";
import job from "../assets/job.png";

export default function JobSeeker() {
  return (
    <div className="bg-[#EBEDF0] text-[#202430] font-sans flex flex-col min-h-screen overflow-x-hidden">
      
      <Navbar />

      <div
        className="w-full h-[70vh] bg-cover bg-center flex items-center justify-center text-white relative"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="text-center px-4">
          <h1 className="text-5xl font-bold drop-shadow-lg">
            Find Your Dream Job Today!
          </h1>
          <p className="mt-3 text-lg drop-shadow-sm">
            Connecting Talent with Opportunity: Your Gateway to Career Success
          </p>

          <div className="mt-8 bg-white text-black rounded-2xl shadow-xl flex items-center px-4 py-3 max-w-4xl mx-auto">
            
            <input
              type="text"
              placeholder="Job Title or Company"
              className="w-full outline-none px-3"
            />

            <div className="border-r h-6 mx-3"></div>

            <input
              type="text"
              placeholder="Select Location"
              className="w-full outline-none px-3"
            />

            <div className="border-r h-6 mx-3"></div>

            <input
              type="text"
              placeholder="Select Category"
              className="w-full outline-none px-3"
            />

            <button className="ml-4 bg-[#182A56] text-white px-6 py-3 rounded-xl flex items-center gap-2">
              <img src={search} alt="search" className="w-5" />
              Search Job
            </button>

          </div>
        </div>
      </div>

      <div className="bg-white py-10 px-6 -mt-10 rounded-t-3xl shadow-lg max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">

          <div className="flex flex-col items-center">
            <img src={job} alt="jobs" className="w-10 mb-2" />
            <h2 className="text-xl font-bold">25,850</h2>
            <p className="text-gray-500">Jobs</p>
          </div>

          <div className="flex flex-col items-center">
            <img src={users} alt="users" className="w-10 mb-2" />
            <h2 className="text-xl font-bold">10,250</h2>
            <p className="text-gray-500">Candidates</p>
          </div>

          <div className="flex flex-col items-center">
            <img src={job} alt="companies" className="w-10 mb-2" />
            <h2 className="text-xl font-bold">18,400</h2>
            <p className="text-gray-500">Companies</p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
