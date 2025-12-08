import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import leftBg from "../assets/left.png";
import rightBg from "../assets/right.png";
import plane from "../assets/plane.png";

export default function SubmitNotification() {
  return (
    <div className="min-h-screen w-full bg-white text-[#1c1c1c] font-sans relative overflow-hidden">

      <Navbar />

      <img
        src={leftBg}
        alt="left"
        className="hidden md:block w-50 absolute left-0 top-24 w-[260px]  select-none pointer-events-none"
      />

      <img
        src={rightBg}
        alt="right"
        className="hidden md:block absolute right-0 top-130 w-[260px]  select-none pointer-events-none"
      />

      <div className="flex flex-col items-center text-center mt-20 px-4">

        <img src={plane} alt="plane" className="w-56 mb-8" />

        <h2 className="text-2xl font-semibold">Your Application Has Been</h2>
        <h2 className="text-2xl font-semibold text-green-600 mt-1">
          Submitted!
        </h2>

        <div className="mt-6 space-y-3 text-sm text-gray-700">
          <p className="flex items-center justify-center gap-2">
            <span className="text-green-600 text-xl">✓</span>
            You will get an email confirmation at xyz@gmail.com
          </p>

          <p className="flex items-center justify-center gap-2">
            <span className="text-green-600 text-xl">✓</span>
            This employer typically responds to applications within 1 day.
          </p>
        </div>

        <div className="w-2/3 md:w-1/3 border-t border-gray-300 my-8"></div>

        <h3 className="text-lg font-semibold">Keep track of your applications</h3>
        <p className="text-sm text-gray-600 mt-3 leading-6 max-w-xl">
          You will receive a status update in an email from NextStep within a few
          weeks of submitting your application. In the meantime, you can view and
          track all your applications in the NextStep Jobs section at any time.
        </p>

        <button className="mt-5 text-sm text-blue-600 underline">
          Check your applications on Recent Activities
        </button>

        <button className="bg-[#0c1e3c] text-white px-10 py-3 rounded-md mt-10">
          Return to a job search
        </button>
      </div>

      <Footer />
    </div>
  );
}
