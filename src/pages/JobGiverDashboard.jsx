import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function JobGiverDashboard() {
  const navigate = useNavigate();

  const posts = [
    { title: "Senior Frontend Developer", applicants: 15, date: "Nov 06, 2025" },
    { title: "UI/UX Designer", applicants: 45, date: "Nov 06, 2025" },
    { title: "Mern developer", applicants: 20, date: "Nov 06, 2025" },
    { title: "Senior Frontend Developer", applicants: 67, date: "Nov 06, 2025" },
    { title: "Full stack", applicants: 23, date: "Nov 06, 2025" },
  ];

  return (
    <div className="bg-[#f3f4f6] min-h-screen">
      <Navbar />

      <div className="flex w-full mt-4 px-4 md:px-10">
      
        <div className="w-64 bg-[#0e1f40] text-white py-8 rounded-lg min-h-[85vh]">
          <h2 className="text-xl font-semibold px-6 mb-6">Recruiter</h2>

          <ul className="space-y-4 px-6">
            <li
              className="cursor-pointer bg-white text-[#0e1f40] px-4 py-2 rounded-md font-medium"
            >
              Dashboard
            </li>
            <li
              onClick={() => navigate("/JobGiverProfile")}
              className="cursor-pointer hover:text-gray-300"
            >
              My Profile
            </li>
            <li className="cursor-pointer hover:text-gray-300">
              My Applicants
            </li>
            <li className="cursor-pointer hover:text-gray-300">
              My Job Posts
            </li>
            <li className="cursor-pointer text-red-400 hover:text-red-300">
              Logout
            </li>
          </ul>
        </div>

        
        <div className="flex-1 ml-6">
          <h1 className="text-3xl font-bold text-[#0e1f40]">Recruiter Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Here's a summary of your job recruitment activity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white py-6 px-6 rounded-lg shadow">
              <p className="text-gray-500 text-sm">Total Job Posted</p>
              <p className="text-3xl font-bold mt-2">12</p>
            </div>

            <div className="bg-white py-6 px-6 rounded-lg shadow">
              <p className="text-gray-500 text-sm">Total Applicants</p>
              <p className="text-3xl font-bold mt-2">7</p>
            </div>

            <div className="bg-white py-6 px-6 rounded-lg shadow">
              <p className="text-gray-500 text-sm">Pending Reviews</p>
              <p className="text-3xl font-bold mt-2">9</p>
            </div>
          </div>

          <div className="bg-white mt-10 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-[#0e1f40] mb-4">
              My Job Posts
            </h2>

            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-600 border-b">
                  <th className="py-3">Job Title</th>
                  <th className="py-3">Applicants</th>
                  <th className="py-3">Date Posted</th>
                  <th className="py-3">Actions</th>
                </tr>
              </thead>

              <tbody>
                {posts.map((p, i) => (
                  <tr key={i} className="border-b">
                    <td className="py-3">{p.title}</td>
                    <td className="py-3">{p.applicants}</td>
                    <td className="py-3">{p.date}</td>
                    <td className="py-3 space-x-4 text-sm">
                      <button className="text-blue-600 hover:underline">View</button>
                      <button className="text-green-600 hover:underline">Edit</button>
                      <button className="text-red-600 hover:underline">Delete</button>
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
