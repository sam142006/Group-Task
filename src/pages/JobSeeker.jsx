import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import bg from "../assets/bg.png";
import users from "../assets/users.png";
import jobs from "../assets/job.png";
import building from "../assets/building.png";

export default function JobSeeker() {
  return (
    <div className="bg-white text-[#202430] font-sans min-h-screen overflow-x-hidden">
      <Navbar />

      <div
        className="relative w-full min-h-[100vh] bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative z-10 text-center px-4 mt-16">
          <h1 className="text-6xl font-bold drop-shadow-lg">
            Find Your Dream Job Today!
          </h1>

          <p className="text-lg mt-4 drop-shadow-md">
            Connecting Talent with Opportunity: Your Gateway to Career Success
          </p>

          <div className="mt-10 bg-white rounded-2xl shadow-lg flex items-center justify-between w-[900px] max-w-full mx-auto py-4 px-6 gap-4">
            <input
              type="text"
              placeholder="Job Title or Company"
              className="w-1/3 border p-3 rounded-lg outline-none"
            />

            <select className="w-1/4 border p-3 rounded-lg outline-none">
              <option>Select Location</option>
            </select>

            <select className="w-1/4 border p-3 rounded-lg outline-none">
              <option>Select Category</option>
            </select>

            <button className="bg-[#182A56] text-white px-6 py-3 rounded-xl font-semibold">
              Search Job
            </button>
          </div>
        </div>

        <div className="relative z-10 flex justify-center gap-24 mt-20">
          <div className="flex flex-col items-center text-white">
            <img src={jobs} className="w-16 invert drop-shadow-lg" />
            <h2 className="text-3xl font-bold mt-2">25,850</h2>
            <p>Jobs</p>
          </div>

          <div className="flex flex-col items-center text-white">
            <img src={users} className="w-16 invert drop-shadow-lg" />
            <h2 className="text-3xl font-bold mt-2">10,250</h2>
            <p>Candidates</p>
          </div>

          <div className="flex flex-col items-center text-white">
            <img src={building} className="w-16 invert drop-shadow-lg" />
            <h2 className="text-3xl font-bold mt-2">18,400</h2>
            <p>Companies</p>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
