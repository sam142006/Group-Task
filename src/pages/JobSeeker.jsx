import React from "react";
import Navbar from "../components/Navbar"; 
import bg from "../assets/bg.png";
import job from "../assets/job.png";
import user from "../assets/users.png";
import building from "../assets/building.png";

export default function JobSeekerLanding() {
  return (
    <div className="bg-[#EBEDF0] min-h-screen w-full font-sans">
      <Navbar />

      <div
        className="w-full h-[550px] bg-cover bg-center flex flex-col justify-center items-center text-white px-4"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <h1 className="text-5xl font-bold drop-shadow-lg text-center">
          Find Your Dream Job Today!
        </h1>

        <p className="mt-2 text-lg opacity-90 text-center">
          Connecting Talent with Opportunity. Your Gateway to Career Success
        </p>

        <div className="bg-white w-[92%] md:w-[900px] mt-8 rounded-2xl shadow-lg p-4 flex flex-col md:flex-row gap-3 items-center">

          <input
            type="text"
            placeholder="Job Title or Company"
            className="w-full md:w-[33%] bg-[#F7F7F8] px-4 py-3 rounded-xl outline-none border text-sm"
          />

          <select className="w-full md:w-[28%] bg-[#F7F7F8] px-4 py-3 rounded-xl outline-none border text-sm">
            <option>Select Location</option>
            <option>India</option>
            <option>USA</option>
            <option>Remote</option>
          </select>
          
          <select className="w-full md:w-[28%] bg-[#F7F7F8] px-4 py-3 rounded-xl outline-none border text-sm">
            <option>Select Category</option>
            <option>Tech</option>
            <option>Business</option>
            <option>Design</option>
          </select>

          <button className="bg-[#0D99FF] text-white px-6 py-3 rounded-xl md:w-[20%] w-full font-medium shadow">
            Search Job
          </button>
        </div>

        <div className="mt-10 w-full flex justify-center gap-16 md:gap-32">

          <div className="flex flex-col items-center text-center">
            <img src={job} className="w-10 mb-2" />
            <p className="text-2xl font-semibold">25,850</p>
            <span className="text-sm opacity-90">Jobs</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src={user} className="w-10 mb-2" />
            <p className="text-2xl font-semibold">10,250</p>
            <span className="text-sm opacity-90">Candidates</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src={building} className="w-10 mb-2" />
            <p className="text-2xl font-semibold">18,400</p>
            <span className="text-sm opacity-90">Companies</span>
          </div>

        </div>
      </div>

    </div>
  );
}
