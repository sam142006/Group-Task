import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import chairs from "../assets/chairs.png";
import Footer from "../components/Footer";
import sideimg from "../assets/sideimg.png"; 

export default function PromotionPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen w-full text-[#202430] font-sans overflow-x-hidden">

      <header className="w-full py-4 bg-white shadow flex items-center justify-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-8 h-8" />
          <h1 className="text-2xl font-bold tracking-wide">NEXTSTEP</h1>
        </div>
      </header>

      <section className="relative w-full h-[420px]">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="office"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white text-4xl font-semibold leading-snug mb-3 max-w-3xl">
            “Find Your Next Opportunity. <br /> Hire Your Perfect Candidate”
          </h2>

          <p className="text-gray-200 text-lg mb-6 max-w-xl">
            The all-in-one platform that connects top talent with leading companies.
          </p>

          <div className="flex space-x-4">
            <button
              onClick={() => navigate("/login")}
              className="bg-[#1E325C] text-white px-10 py-3 rounded-lg text-lg font-medium hover:bg-[#12213C] transition"
            >
              Log in
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="bg-[#1E325C] text-white px-10 py-3 rounded-lg text-lg font-medium hover:bg-[#12213C] transition"
            >
              Sign up
            </button>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center mt-12 px-4">
        <div className="bg-[#EBEDF0] w-full max-w-[1400px] p-10 rounded-2xl shadow-xl">
          <h2 className="text-center text-3xl font-semibold mb-10">
            Find the job you love
          </h2>

          <div className="space-y-8">
            <div className="flex items-start space-x-5">
              <div className="text-4xl">🎯</div>
              <div>
                <h3 className="text-xl font-semibold">AI-Powered Matching</h3>
                <p className="text-gray-600">Get matched with jobs that fit your skills.</p>
              </div>
            </div>

            <div className="flex items-start space-x-5">
              <div className="text-4xl">💬</div>
              <div>
                <h3 className="text-xl font-semibold">Direct Messaging</h3>
                <p className="text-gray-600">Connect directly with hiring managers.</p>
              </div>
            </div>

            <div className="flex items-start space-x-5">
              <div className="text-4xl">📁</div>
              <div>
                <h3 className="text-xl font-semibold">Profile Builder</h3>
                <p className="text-gray-600">Showcase your experience with a beautiful profile.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center mt-10 px-4">
        <div className="bg-[#EBEDF0] w-full max-w-[1400px] p-10 rounded-2xl shadow-xl border border-[#0A66C2]">
          <h2 className="text-2xl font-semibold text-center tracking-wide mb-10 flex items-center justify-center gap-2">
            Hire the talent you need <span className="text-3xl">👥</span>
          </h2>

          <div className="space-y-10">
            <div className="flex items-start gap-5">
              <div className="text-4xl">👥</div>
              <div>
                <h3 className="font-semibold text-lg">Vetted Candidate Pool</h3>
                <p className="text-sm text-gray-600">
                  Access thousands of qualified professionals.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="text-4xl">📄</div>
              <div>
                <h3 className="font-semibold text-lg">Easy Job Posting</h3>
                <p className="text-sm text-gray-600">
                  Post openings quickly and easily.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="text-4xl">🎯</div>
              <div>
                <h3 className="font-semibold text-lg">Applicant Management</h3>
                <p className="text-sm text-gray-600">
                  Track and manage candidates in one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <img src={chairs} className="w-full h-full object-cover mt-10" />

      <div className="w-full bg-white flex justify-center py-10">
  <div className="w-full max-w-[1600px] bg-white  shadow-lg overflow-hidden flex flex-col md:flex-row">

    <div className="w-full md:w-1/2 bg-[#1E325C] px-10 py-12 text-white flex flex-col justify-center">
      <h2 className="text-3xl font-semibold mb-3">Get The App</h2>
      <p className="text-gray-200 text-lg mb-8 max-w-md">
        Experience the power of NextStep anywhere with our quick apply feature.
      </p>

      <div className="flex flex-wrap gap-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Download_on_the_App_Store_Badge.svg"
          className="w-[150px] h-[50px] object-contain"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Get_it_on_Google_play.svg"
          className="w-[150px] h-[50px] object-contain"
        />
      </div>
    </div>

    <div className="w-full md:w-1/2">
      <img
        src={sideimg}
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>

      <Footer />
    </div>
  );
}
