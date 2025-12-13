import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function JobSeekerDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-[#1c1c1c]">
      <Navbar />

      <div className="flex">
        
        <div className="w-64 bg-[#0e1f40] text-white min-h-screen p-5">
          <h2 className="text-xl font-semibold mb-8">JobSeeker</h2>

          <ul className="space-y-5 text-sm">

            <li
              className="cursor-pointer hover:text-blue-300"
              
            >
              ● Dashboard
            </li>

            <li
              className="cursor-pointer hover:text-blue-300"
              onClick={() => navigate("/JobSeekerProfile")}
            >
              ● My Profile
            </li>

            <li className="cursor-pointer hover:text-blue-300">● My Application</li>
            <li className="cursor-pointer hover:text-blue-300">● Saved Jobs</li>
            <li className="cursor-pointer hover:text-blue-300">● Job Search</li>

            <li className="cursor-pointer text-red-400 hover:text-red-300 mt-10">
              ● Logout
            </li>
          </ul>
        </div>

        <div className="flex-1 p-10">
          <h1 className="text-2xl font-bold">Welcome Back, User!</h1>
          <p className="text-gray-600 mb-8">
            Here’s a summary of your job application activity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            <div className="p-6 bg-white rounded-lg shadow">
              <p className="text-gray-600">Total Applications</p>
              <h2 className="text-3xl font-bold">10</h2>
            </div>

            <div className="p-6 bg-white rounded-lg shadow">
              <p className="text-gray-600">Pending</p>
              <h2 className="text-3xl font-bold">2</h2>
            </div>

            <div className="p-6 bg-white rounded-lg shadow">
              <p className="text-gray-600">Accepted</p>
              <h2 className="text-3xl font-bold">7</h2>
            </div>

            <div className="p-6 bg-white rounded-lg shadow">
              <p className="text-gray-600">Rejected</p>
              <h2 className="text-3xl font-bold">5</h2>
            </div>
          </div>

          <div className="bg-white mt-30 shadow rounded-lg p-6">
            <h3 className="font-semibold mb-4">My Recent Applications</h3>

            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="p-2">Job</th>
                  <th className="p-2">Company</th>
                  <th className="p-2">Date Applied</th>
                  <th className="p-2">Status</th>
                </tr>
              </thead>

              <tbody>
                {[
                  { job: "Frontend Developer", company: "Tech Corp", date: "Nov 05, 2025", status: "Accepted" },
                  { job: "UI/UX Designer", company: "Tech Corp", date: "Nov 05, 2025", status: "Pending" },
                  { job: "Node Developer", company: "Tech Corp", date: "Nov 05, 2025", status: "Rejected" },
                  { job: "Frontend Dev", company: "Tech Corp", date: "Nov 05, 2025", status: "Pending" },
                  { job: "Full Stack", company: "Tech Corp", date: "Nov 05, 2025", status: "Accepted" },
                ].map((row, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{row.job}</td>
                    <td className="p-2">{row.company}</td>
                    <td className="p-2">{row.date}</td>
                    <td className="p-2">
                      <span
                        className={`px-2 py-1 rounded text-white text-xs ${
                          row.status === "Accepted"
                            ? "bg-green-500"
                            : row.status === "Pending"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
