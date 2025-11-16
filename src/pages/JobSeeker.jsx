import React from "react";
import Navbar from "../components/Navbar";

import bg from "../assets/bg.png";
import job from "../assets/job.png";
import user from "../assets/users.png";
import building from "../assets/building.png";

import insta from "../assets/instagram.png";
import tesla from "../assets/tesla.png";
import mcd from "../assets/mcd.png";
import apple from "../assets/apple.png";

import createIcon from "../assets/create.png";
import uploadIcon from "../assets/upload.png";
import findIcon from "../assets/find.png";
import applyIcon from "../assets/apply.png";

import flipkart from "../assets/flipkart.png";
import zomato from "../assets/zomato.png";
import tcs from "../assets/tcs.png";
import microsoft from "../assets/microsoft.png";
import bookmark from "../assets/bookmark.png";

export default function JobSeeker() {
  return (
    <div className="bg-[#EBEDF0] min-h-screen w-full font-sans">
      <Navbar />

      <div
        className="w-full h-[550px] bg-cover bg-center flex flex-col justify-center items-center text-white px-4"
        style={{ backgroundImage: `url(${bg})` }}
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
            className="w-full md:w-[33%] bg-[#F7F7F8] px-4 py-3 rounded-xl outline-none border text-sm placeholder:text-gray-400"
          />

          <select className="w-full md:w-[28%] bg-[#F7F7F8] px-4 py-3 rounded-xl outline-none border text-sm text-gray-600">
            <option className="text-gray-400">Select Location</option>
            <option>India</option>
            <option>USA</option>
            <option>Remote</option>
          </select>

          <select className="w-full md:w-[28%] bg-[#F7F7F8] px-4 py-3 rounded-xl outline-none border text-sm text-gray-600">
            <option className="text-gray-400">Select Category</option>
            <option>Tech</option>
            <option>Business</option>
            <option>Design</option>
          </select>

          <button className="bg-[#0D99FF] text-white px-6 py-3 rounded-xl md:w-[20%] w-full font-medium shadow 
            hover:bg-white hover:text-[#0D99FF] hover:border hover:border-[#0D99FF] transition">
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

      <div className="w-full bg-[#F4F7FB] py-14 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-[#15294B] mb-3">Top Companies</h2>

        <p className="text-center text-[#4A5568] w-[60%] mb-10">
          Discover some of the world’s most innovative and leading companies
          offering exciting career opportunities and growth.
        </p>

        <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-md rounded-2xl px-6 py-8 flex flex-col items-center text-center">
            <img src={insta} className="w-12 mb-4" />
            <h3 className="text-lg font-semibold text-[#15294B]">Instagram</h3>
            <p className="text-sm text-[#4A5568] mt-2 mb-6">
              Join the creative force behind the world’s most loved social media
              platform. Work with passionate teams shaping the future...
            </p>
            <span className="bg-[#E6F7F1] text-[#2F855A] text-xs px-4 py-1 rounded-full">
              8 open jobs
            </span>
          </div>

          <div className="bg-white shadow-md rounded-2xl px-6 py-8 flex flex-col items-center text-center">
            <img src={tesla} className="w-12 mb-4" />
            <h3 className="text-lg font-semibold text-[#15294B]">Tesla</h3>
            <p className="text-sm text-[#4A5568] mt-2 mb-6">
              Be a part of the revolution in sustainable technology. Tesla offers
              challenging roles for those driven to make a global impact...
            </p>
            <span className="bg-[#E6F7F1] text-[#2F855A] text-xs px-4 py-1 rounded-full">
              18 open jobs
            </span>
          </div>

          <div className="bg-white shadow-md rounded-2xl px-6 py-8 flex flex-col items-center text-center">
            <img src={mcd} className="w-12 mb-4" />
            <h3 className="text-lg font-semibold text-[#15294B]">McDonald’s</h3>
            <p className="text-sm text-[#4A5568] mt-2 mb-6">
              Step into a fast-paced environment where teamwork and customer
              satisfaction define success...
            </p>
            <span className="bg-[#E6F7F1] text-[#2F855A] text-xs px-4 py-1 rounded-full">
              12 open jobs
            </span>
          </div>

          <div className="bg-white shadow-md rounded-2xl px-6 py-8 flex flex-col items-center text-center">
            <img src={apple} className="w-12 mb-4" />
            <h3 className="text-lg font-semibold text-[#15294B]">Apple</h3>
            <p className="text-sm text-[#4A5568] mt-2 mb-6">
              Innovate with purpose at Apple — where creativity meets technology...
            </p>
            <span className="bg-[#E6F7F1] text-[#2F855A] text-xs px-4 py-1 rounded-full">
              9 open jobs
            </span>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#F4F7FB] py-16 mt-10">
        <h2 className="text-3xl font-bold text-center mb-12">
          Only 4 Steps to get your dream job
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-14 px-10">
          <div className="flex flex-col items-center text-center">
            <img src={createIcon} className="w-16 mb-3" />
            <p className="font-medium">Create account</p>
          </div>

          <div className="bg-white px-12 py-6 rounded-xl shadow flex flex-col items-center text-center">
            <img src={uploadIcon} className="w-16 mb-3" />
            <p className="font-medium">Upload CV/Resume</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src={findIcon} className="w-16 mb-3" />
            <p className="font-medium">Find suitable job</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src={applyIcon} className="w-16 mb-3" />
            <p className="font-medium">Apply job</p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <h2 className="text-4xl font-bold text-center text-[#15294B] mb-3">
          Featured Jobs
        </h2>

        <p className="text-center text-[#4A5568] mb-12">
          Freshly released job applications
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10">

          <div className="bg-white rounded-2xl shadow-md p-6 relative">
            <img src={flipkart} className="w-12" />
            <p className="font-semibold mt-2">Flipkart</p>
            <p className="text-sm text-gray-500">Bengaluru, Karnataka</p>
            <p className="text-xs text-gray-400 mb-4">Posted: 5 Days Ago</p>

            <p className="font-semibold">Senior Product Designer</p>

            <div className="flex gap-2 mt-2">
              <span className="text-xs bg-gray-100 px-3 py-1 rounded">Full Time</span>
              <span className="text-xs bg-gray-100 px-3 py-1 rounded">Design</span>
              <span className="text-xs bg-gray-100 px-3 py-1 rounded">Hybrid</span>
            </div>

            <p className="text-sm text-gray-600 mt-3">
              Join the core e-commerce team to design and iterate on new shopping features that impact millions of users.
            </p>

            <div className="flex mt-4 gap-3">
              <button className="bg-[#0D99FF] text-white px-6 py-2 rounded-md text-sm
                hover:bg-white hover:text-[#0D99FF] hover:border hover:border-[#0D99FF] transition">
                Apply
              </button>

              <button className="border px-6 py-2 rounded-md text-sm">
                Read More
              </button>
            </div>

            <img src={bookmark} className="w-6 absolute top-6 right-6" />
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 relative">
            <img src={zomato} className="w-12" />
            <p className="font-semibold mt-2">Zomato</p>
            <p className="text-sm text-gray-500">Gurgaon, Haryana</p>
            <p className="text-xs text-gray-400 mb-4">Posted: 2 Days Ago</p>

            <p className="font-semibold">Software Engineer (Backend)</p>

            <div className="flex gap-2 mt-2">
              <span className="text-xs bg-gray-100 px-3 py-1 rounded">Full Time</span>
              <span className="text-xs bg-gray-100 px-3 py-1 rounded">Engineering</span>
              <span className="text-xs bg-gray-100 px-3 py-1 rounded">On-Site</span>
            </div>

            <p className="text-sm text-gray-600 mt-3">
              We are looking for a backend engineer to build and scale the APIs that power our food delivery logistics.
            </p>

            <div className="flex mt-4 gap-3">
              <button className="bg-[#0D99FF] text-white px-6 py-2 rounded-md text-sm
                hover:bg-white hover:text-[#0D99FF] hover:border hover:border-[#0D99FF] transition">
                Apply
              </button>

              <button className="border px-6 py-2 rounded-md text-sm">
                Read More
              </button>
            </div>

            <img src={bookmark} className="w-6 absolute top-6 right-6" />
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 relative">
            <img src={tcs} className="w-12" />
            <p className="font-semibold mt-2">Tata Consultancy Services (TCS)</p>
            <p className="text-sm text-gray-500">Mumbai, Maharashtra</p>
            <p className="text-xs text-gray-400 mb-4">Posted: 2 Days Ago</p>

            <p className="font-semibold">Business Analyst</p>

            <div className="flex gap-2 mt-2">
              <span className="text-xs bg-gray-100 px-3 py-1 rounded">Full Time</span>
              <span className="text-xs bg-gray-100 px-3 py-1 rounded">Consulting</span>
              <span className="text-xs bg-gray-100 px-3 py-1 rounded">On-Site</span>
            </div>

            <p className="text-sm text-gray-600 mt-3">
              Work with our international banking clients to gather requirements and translate them into technical specifications.
            </p>

            <div className="flex mt-4 gap-3">
              <button className="bg-[#0D99FF] text-white px-6 py-2 rounded-md text-sm
                hover:bg-white hover:text-[#0D99FF] hover:border hover:border-[#0D99FF] transition">
                Apply
              </button>
              <button className="border px-6 py-2 rounded-md text-sm">
                Read More
              </button>
            </div>

            <img src={bookmark} className="w-6 absolute top-6 right-6" />
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 relative">
            <img src={microsoft} className="w-12" />
            <p className="font-semibold mt-2">Microsoft</p>
            <p className="text-sm text-gray-500">Hyderabad, Telangana</p>
            <p className="text-xs text-gray-400 mb-4">Posted: Today</p>

            <p className="font-semibold">Data Scientist</p>

            <div className="flex gap-2 mt-2">
              <span className="text-xs bg-gray-100 px-3 py-1 rounded">Full Time</span>
              <span className="text-xs bg-gray-100 px-3 py-1 rounded">Data Science</span>
              <span className="text-xs bg-gray-100 px-3 py-1 rounded">On-Site</span>
            </div>

            <p className="text-sm text-gray-600 mt-3">
              The Azure team is seeking a data scientist to develop ML models for resource optimization and forecasting.
            </p>

            <div className="flex mt-4 gap-3">
              <button className="bg-[#0D99FF] text-white px-6 py-2 rounded-md text-sm
                hover:bg-white hover:text-[#0D99FF] hover:border hover:border-[#0D99FF] transition">
                Apply
              </button>

              <button className="border px-6 py-2 rounded-md text-sm">
                Read More
              </button>
            </div>

            <img src={bookmark} className="w-6 absolute top-6 right-6" />
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-[#0D1A2D] text-white px-10 py-3 rounded-lg text-lg font-medium">
            Find More Jobs
          </button>
        </div>
      </div>
    </div>
  );
}
