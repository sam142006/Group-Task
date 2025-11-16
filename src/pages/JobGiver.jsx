import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import bg from "../assets/bg.png";
import users from "../assets/users-green.png";
import verified from "../assets/verified.png";
import graph from "../assets/graph.png";

import ai from "../assets/ai.png";
import seeker from "../assets/seeker.png";
import analytics from "../assets/analytics.png";
import bulk from "../assets/bulk.png";
import collaborate from "../assets/collaboration.png";
import employer from "../assets/employer.png";

import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import user4 from "../assets/user4.png";

import dashboardImg from "../assets/dashboard.png";

import flipkart from "../assets/flipkart.png";
import zomato from "../assets/zomato.png";
import tcs from "../assets/tcs.png";
import microsoft from "../assets/microsoft.png";

export default function JobGiver() {
  return (
    <div className="bg-white text-[#202430] font-sans min-h-screen overflow-x-hidden">

      <Navbar />

      <div
        className="w-full h-[85vh] bg-cover bg-center flex items-center justify-center text-white relative"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold drop-shadow-xl">
            Hire the Right Talent Faster!
          </h1>

          <p className="mt-4 text-lg drop-shadow-md">
            Post jobs, manage candidates, and build your employer brand — all in one place.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <button className="bg-[#182A56] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-white hover:text-[#182A56] transition">
              Post A Job Now
            </button>
            <button className="bg-white text-[#182A56] px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-[#182A56] hover:text-white transition">
              Create Recruiter Profile
            </button>
          </div>

          <div className="flex justify-center gap-24 mt-16">
            <div className="flex flex-col items-center text-center">
              <img src={users} className="w-14 mb-3" />
              <h2 className="text-3xl font-bold">1M+</h2>
              <p>Active Candidates</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img src={verified} className="w-14 mb-3" />
              <h2 className="text-3xl font-bold">50K+</h2>
              <p>Verified Recruiters</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img src={graph} className="w-14 mb-3" />
              <h2 className="text-3xl font-bold">Fastest</h2>
              <p>Growing Platform</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#F5F8FB] py-16">
        <h2 className="text-center text-4xl font-bold">Why Recruit on NextStep?</h2>
        <p className="text-center mt-3 text-gray-600">
          Streamline your hiring process with powerful tools designed to connect you
          with top talent efficiently
        </p>

        <div className="grid grid-cols-3 gap-10 max-w-6xl mx-auto mt-12">
          <FeatureCard icon={ai} title="AI-Powered Matching" text="Get instant matches for your job openings with our intelligent recommendation system" />
          <FeatureCard icon={seeker} title="Verified Job Seekers" text="Access a pool of verified and skilled professionals ready to join your team" />
          <FeatureCard icon={analytics} title="Analytics Dashboard" text="Track views, applications, and hiring performance with insights" />
          <FeatureCard icon={bulk} title="Bulk Job Posting" text="Post multiple jobs easily and manage them from one centralized hub" />
          <FeatureCard icon={collaborate} title="Collaboration Tools" text="Add team members to manage recruitment together seamlessly" />
          <FeatureCard icon={employer} title="Employer Branding" text="Showcase your company culture to attract top talent" />
        </div>
      </div>

      <div className="py-16">
        <h2 className="text-center text-4xl font-bold">How It Works</h2>
        <p className="text-center text-gray-600 mt-3">
          Simple 4-step process to find your perfect hire
        </p>

        <div className="flex justify-center gap-20 mt-12">
          <Step n="1" title="Create Recruiter Account" text="Set up company profile in minutes" />
          <Step n="2" title="Post Your Job" text="Create detailed job listings easily" />
          <Step n="3" title="Review Applications" text="Browse and shortlist top candidates" />
          <Step n="4" title="Hire the Right Candidate" text="Connect and make your hire" />
        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-[#182A56] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-white hover:text-[#182A56] transition">
            Post A Job Now
          </button>
        </div>
      </div>

      <div className="py-16 bg-white">
        <h2 className="text-center text-4xl font-bold">Featured Talent Pool</h2>
        <p className="text-center text-gray-600 mt-2">
          Top verified candidates ready to join your team
        </p>

        <div className="flex justify-center gap-10 mt-12">
          <TalentCard img={user1} name="Sarah Johnson" role="UI/UX Designer" exp="Bangalore • 5+ years" />
          <TalentCard img={user2} name="Rahul Sharma" role="Full Stack Developer" exp="Mumbai • 3+ years" />
          <TalentCard img={user3} name="Priya Patel" role="Product Manager" exp="Pune • 7+ years" />
          <TalentCard img={user4} name="Amit Kumar" role="Data Scientist" exp="Hyderabad • 4+ years" />
        </div>
      </div>

      <div className="w-full bg-[#ECF2FE] py-16 px-4 md:px-16">
        <h2 className="text-center text-3xl font-semibold text-[#0B1220]">
          Recruiter Dashboard
        </h2>

        <p className="text-center text-[#5A5A5A] mt-2">
          Manage your entire recruitment process from one intuitive <br /> dashboard
        </p>

        <div className="mt-12 flex justify-center">
          <div className="bg-white rounded-2xl shadow-md p-4 md:p-6 max-w-5xl w-full">
            <img
              src={dashboardImg}
              alt="Dashboard"
              className="rounded-xl w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full py-20 bg-white">
        <h2 className="text-center text-3xl font-semibold">What Recruiters Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[90%] md:w-[80%] mx-auto mt-10">
          <div className="bg-[#F5F7FB] p-6 rounded-xl shadow-sm">
            <p className="text-sm">"NextStep helped us hire faster than ever before. The analytics and filters are game-changers!"</p>
            <h3 className="mt-4 font-semibold text-[15px]">Aisha Reddy</h3>
            <p className="text-xs">Tech Innovations Ltd</p>
          </div>

          <div className="bg-[#F5F7FB] p-6 rounded-xl shadow-sm">
            <p className="text-sm">"The quality of candidates we found through NextStep is exceptional. Highly recommended for serious hiring."</p>
            <h3 className="mt-4 font-semibold text-[15px]">Vikram Singh</h3>
            <p className="text-xs">Digital Solutions Inc</p>
          </div>

          <div className="bg-[#F5F7FB] p-6 rounded-xl shadow-sm">
            <p className="text-sm">"Managing multiple job postings has never been easier. The bulk posting feature saves us hours every week."</p>
            <h3 className="mt-4 font-semibold text-[15px]">Meera Kapoor</h3>
            <p className="text-xs">StartUp Hub</p>
          </div>
        </div>
      </div>

      <div className="w-full py-16 bg-white">
        <h2 className="text-center text-2xl font-semibold">
          Top Companies Hiring on NextStep
        </h2>

        <div className="flex flex-wrap justify-center gap-12 mt-10">
          <img src={flipkart} className="w-16" />
          <img src={zomato} className="w-16" />
          <img src={tcs} className="w-16" />
          <img src={microsoft} className="w-16" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
      <img src={icon} className="w-12 mx-auto mb-4" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm">{text}</p>
    </div>
  );
}

function Step({ n, title, text }) {
  return (
    <div className="text-center max-w-[200px]">
      <div className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center text-xl font-bold mx-auto">
        {n}
      </div>
      <h4 className="text-lg font-semibold mt-3">{title}</h4>
      <p className="text-gray-600 text-sm mt-2">{text}</p>
    </div>
  );
}

function TalentCard({ img, name, role, exp }) {
  return (
    <div className="p-6 rounded-2xl shadow-md border text-center w-60">
      <img src={img} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
      <h3 className="font-semibold">{name}</h3>
      <p className="text-gray-600 text-sm">{role}</p>
      <p className="text-gray-500 text-xs mt-1">{exp}</p>

      <button className="mt-4 bg-[#182A56] text-white w-full py-2 rounded-lg font-medium hover:bg-white hover:text-[#182A56] border hover:border-[#182A56] transition">
        View Profile
      </button>
    </div>
  );
}
