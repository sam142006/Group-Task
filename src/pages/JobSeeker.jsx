import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import seekerbg from "../assets/seekerbg.png";

export default function JobSeeker() {
  return (
    <div className="bg-[#EBEDF0] text-[#202430] font-sans flex flex-col min-h-screen overflow-x-hidden pt-[90px]">
     console.log("JobSeeker page loaded");

      <Navbar />

      <section
        className="relative w-full h-[80vh] flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${seekerbg})`,
        }}
      >
     <h1 className="text-white z-50 relative">HELLO TEST</h1>

        <div className="absolute inset-0 bg-[#15294B]/70 z-0"></div>

        <div className="relative z-10 px-6 py-16 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Find Your Dream Job
          </h1>
          <p className="mt-4 text-white opacity-90 text-lg">
            Discover thousands of opportunities that match your skills and goals.
          </p>

          <div className="mt-10 flex flex-wrap md:flex-nowrap bg-white rounded-full shadow-lg px-4 py-2 gap-2 justify-between">
            <input
              type="text"
              placeholder="Job title or keyword"
              className="flex-1 px-3 py-2 outline-none text-gray-700 rounded-full"
            />
            <input
              type="text"
              placeholder="Company"
              className="flex-1 px-3 py-2 outline-none text-gray-700 rounded-full"
            />
            <input
              type="text"
              placeholder="Location"
              className="flex-1 px-3 py-2 outline-none text-gray-700 rounded-full"
            />
            <button className="bg-[#15294B] text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#1b3668] transition">
              <AiOutlineSearch />
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F7FA] py-20 px-6 flex-1 relative z-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#15294B] mb-4">
            Top Companies
          </h2>
          <p className="text-gray-600 mb-12">
            Discover some of the world’s most innovative and leading companies offering exciting career opportunities and growth.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
                name: "Instagram",
                desc: "Join the creative force behind the world’s most loved social media platform.",
                jobs: "8 open jobs",
              },
              {
                logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
                name: "Tesla",
                desc: "Be a part of the revolution in sustainable technology and innovation.",
                jobs: "18 open jobs",
              },
              {
                logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/McDonalds_logo.svg",
                name: "McDonald’s",
                desc: "Step into a fast-paced environment where teamwork defines success.",
                jobs: "12 open jobs",
              },
              {
                logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
                name: "Apple",
                desc: "Innovate with purpose at Apple — where creativity meets cutting-edge technology.",
                jobs: "9 open jobs",
              },
            ].map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
              >
                <img src={c.logo} alt={c.name} className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold text-[#15294B] mb-2">
                  {c.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{c.desc}</p>
                <span className="bg-[#D9F3EA] text-[#2B8A6E] text-sm font-medium px-3 py-1 rounded-full">
                  {c.jobs}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
