import React from "react";

export default function JobCard({ job }) {
  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-[#E5E7EB] p-5 mb-4 hover:shadow-md transition cursor-pointer">

      <div className="flex justify-between items-center">
        <span className="text-[12px] bg-gray-200 text-gray-700 px-2 py-[2px] rounded-full">
          {job.time}
        </span>

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M5 5l7-2 7 2v14l-7-4-7 4V5z"
            />
          </svg>
        </button>
      </div>

      <div className="flex items-center gap-3 mt-3">
        <img src={job.logo} alt={job.company} className="w-7 h-7" />
        <h2 className="text-[20px] font-semibold text-[#15294B]">
          {job.company}
        </h2>
      </div>
\
      <div className="flex flex-wrap items-center gap-5 mt-3 text-[#4B5563] text-[14px]">

        <p className="flex items-center gap-2">
          <span className="material-icons text-[18px]">work</span>
          {job.position}
        </p>

        <p className="flex items-center gap-2">
          <span className="material-icons text-[18px]">schedule</span>
          {job.type}
        </p>

        <p className="flex items-center gap-2">
          <span className="material-icons text-[18px]">payments</span>
          {job.salary}
        </p>

        <p className="flex items-center gap-2">
          <span className="material-icons text-[18px]">location_on</span>
          {job.location}
        </p>
      </div>

      <div className="flex justify-end mt-3">
        <button className="bg-[#15294B] text-white px-4 py-2 rounded-md text-sm hover:bg-[#0f1e36]">
          Job Details
        </button>
      </div>

    </div>
  );
}
