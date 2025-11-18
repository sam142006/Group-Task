import React, { useEffect, useState } from "react";
import bg from "../assets/bg.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { 
  FaSearch, FaMicrophone, FaClock, FaStar, FaMapMarkerAlt, 
  FaBriefcase, FaDollarSign 
} from "react-icons/fa";

import { FiChevronDown, FiBookmark } from "react-icons/fi";

const SeekerJob = () => {

  const [jobList, setJobList] = useState([]);
const [jobs, setJobs] = useState([]);

 const fetchJobs = async () => {
  try {
    let token = localStorage.getItem("access");

    let res = await fetch("https://jobseeker-backend-django.onrender.com/jobs/post/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 401) {
      console.log("ACCESS TOKEN EXPIRED → TRYING REFRESH...");
      const refresh = localStorage.getItem("refresh");

      const refreshRes = await fetch(
        "https://jobseeker-backend-django.onrender.com/accounts/token/refresh/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refresh }),
        }
      );

      const refreshData = await refreshRes.json();
      console.log("REFRESH RESPONSE →", refreshData);

      if (refreshData.access) {
        localStorage.setItem("access", refreshData.access);
        token = refreshData.access;

        res = await fetch("https://jobseeker-backend-django.onrender.com/jobs/post/", {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        console.error("Refresh token failed");
        return;
      }
    }

    const data = await res.json();
    console.log("API RAW RESPONSE -->", data);

    if (!Array.isArray(data.results)) {
      console.error("ERROR: results is not array", data);
      return;
    }

    setJobs(data.results);
  } catch (error) {
    console.error("Error fetching jobs:", error);
  }
};


  useEffect(() => {
    fetchJobs();
  }, []);

  const handleViewAll = () => {
    fetchJobs(); 
  };

  return (
    <div className="w-full min-h-screen bg-[#F5F7FA] font-['Poppins']">
      <Navbar/>
      <div
        className="w-full h-[220px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative z-10 flex flex-col justify-center h-full pl-10">
          <h1 className="text-white text-4xl font-semibold">
            Find Your Dream Job
          </h1>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 mt-6">
        <h2 className="text-[28px] font-bold text-[#15294B] font-['Libre_Baskerville']">
          Recent Jobs Available
        </h2>

        <button
          onClick={handleViewAll}
          className="text-[#1AA3A3] font-semibold hover:underline"
        >
          View all
        </button>
      </div>

      <div className="w-full flex gap-6 px-6 mt-4">

        <div className="w-[270px] bg-white p-5 rounded-xl shadow-md border border-[#E5E5E5]">

          <label className="text-[14px] font-semibold">Search by Job Title</label>
          <div className="flex items-center mt-2 bg-[#F5F7FA] px-3 py-2 rounded-md border">
            <FaSearch className="text-gray-500 text-sm" />
            <input
              type="text"
              placeholder="Job title or company"
              className="bg-transparent ml-2 text-sm focus:outline-none"
            />
          </div>

          <label className="text-[14px] font-semibold mt-4 block">Location</label>
          <div className="flex items-center mt-2 bg-[#F5F7FA] px-3 py-2 rounded-md border justify-between">
            <FaMapMarkerAlt className="text-gray-500 text-sm" />
            <span className="ml-2 text-sm text-gray-600">Choose city</span>
            <FiChevronDown className="text-gray-500" />
          </div>

          <h3 className="mt-4 font-semibold text-sm">Category</h3>
          <div className="mt-2 space-y-2 text-sm text-gray-700">
            {["Commerce", "Telecommunications", "Hotels & Tourism", "Education", "Financial Services"]
              .map((c) => (
                <div className="flex items-center justify-between" key={c}>
                  <input type="checkbox" />
                  <span>{c}</span>
                  <span className="text-gray-500 text-xs">10</span>
                </div>
              ))}
          </div>

          <button className="w-full bg-[#15294B] text-white py-2 mt-3 rounded-md text-sm">
            Show More
          </button>

          <h3 className="mt-4 font-semibold text-sm">Job Type</h3>
          {["Full Time", "Part Time", "Freelance", "Seasonal", "Fixed-Price"].map((j) => (
            <div className="flex items-center justify-between mt-2 text-sm text-gray-700" key={j}>
              <input type="checkbox" />
              <span>{j}</span>
              <span className="text-gray-500 text-xs">10</span>
            </div>
          ))}

          <h3 className="mt-4 font-semibold text-sm">Experience Level</h3>
          {["No-experience", "Fresher", "Intermediate", "Expert"].map((e) => (
            <div className="flex items-center justify-between mt-2 text-sm text-gray-700" key={e}>
              <input type="checkbox" />
              <span>{e}</span>
              <span className="text-gray-500 text-xs">10</span>
            </div>
          ))}

          <h3 className="mt-4 font-semibold text-sm">Date Posted</h3>
          {["All", "Last Hour", "Last 24 Hours", "Last 7 Days", "Last 30 Days"].map((d) => (
            <div className="flex items-center justify-between mt-2 text-sm text-gray-700" key={d}>
              <input type="checkbox" />
              <span>{d}</span>
              <span className="text-gray-500 text-xs">10</span>
            </div>
          ))}

          <h3 className="mt-4 font-semibold text-sm">Salary</h3>
          <input type="range" className="w-full mt-2" />
          <div className="flex items-center justify-between mt-1 text-sm">
            <span>Salary: $0 - $9999</span>
            <button className="bg-[#15294B] text-white text-xs px-3 py-1 rounded-md">
              Apply
            </button>
          </div>

          <h3 className="mt-4 font-semibold text-sm">Tags</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {["engineering", "design", "ui/ux", "marketing", "management", "soft", "construction"].map((tag) => (
              <span
                key={tag}
                className="bg-[#E8F5F5] text-[#1AA3A3] text-xs px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-1 space-y-5">

          {jobList.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-md p-5 border border-[#E5E5E5]"
            >
              <div className="flex justify-between items-start">
                <span className="text-xs bg-[#F0F4FF] px-3 py-1 rounded-full text-[#4A5AFF]">
                  {job.time}
                </span>
                <FiBookmark className="text-xl text-gray-600 cursor-pointer" />
              </div>

              <div className="flex items-center gap-3 mt-3">
                <img src={job.logo} alt="" className="w-10 h-10" />
                <h2 className="text-[18px] font-semibold">{job.company}</h2>
              </div>

              <div className="flex items-center gap-5 mt-3 text-sm text-gray-700">
                <FaBriefcase /> {job.role}
                <FaClock /> {job.type}
                <FaDollarSign /> {job.salary}
                <FaMapMarkerAlt /> {job.location}
              </div>

              <div className="mt-4 flex justify-end">
                <button className="bg-[#15294B] text-white px-4 py-2 rounded-md">
                  Job Details
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>

      <div className="w-full px-6 mt-10 mb-10">
        <div className="border-2 border-[#1AA3A3] rounded-xl py-10">

          <h2 className="text-[32px] font-bold text-[#3C4358] text-center font-['Libre_Baskerville']">
            Get hired in top companies
          </h2>

          <div className="grid grid-cols-4 gap-10 mt-10 px-10">

            {[
              "google.com",
              "ebay.com",
              "meta.com",
              "amazon.com",
              "infosys.com",
              "wipro.com",
              "netflix.com",
              "apple.com",
            ].map((domain, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md border border-gray-200 
                       h-[160px] flex items-center justify-center 
                       hover:shadow-lg transition-all"
              >
                <img
                  src={`https://logo.clearbit.com/${domain}`}
                  className="h-16 object-contain"
                />
              </div>
            ))}

          </div>

        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default SeekerJob;
