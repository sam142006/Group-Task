import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import pg from "../assets/pg.png";
import { useNavigate } from "react-router-dom";

export default function JobSeekerProfile() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: "",
    last_name: "",
    email: "",
    phone: "",
    language: "English",
    bio: "",
    skills: "",
    experience: "",
    education: "",
  });

  const token = localStorage.getItem("access_token");

  useEffect(() => {
    fetch("https://jobseeker-backend-django.onrender.com/auth/profile/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProfile({
          name: data.name || "",
          last_name: data.last_name || "",
          email: data.email || "",
          phone: data.phone || "",
          language: data.language || "English",
          bio: data.bio || "",
          skills: data.skills || "",
          experience: data.experience || "",
          education: data.education || "",
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    fetch("https://jobseeker-backend-django.onrender.com/auth/profile/", {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/submit-notification");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen w-full bg-[#f7f8fa] text-[#1c1c1c] font-sans">
      <Navbar />

      <div className="px-6 md:px-16 lg:px-24 py-10">
       <button
  onClick={() => navigate("/JobSeekerDashboard")}
  className="text-sm bg-[#e9edf5] px-4 py-2 rounded-md text-[#44527e] mb-6"
>
  Dashboard
</button>

        <div className="w-full flex justify-center mb-10">
          <div className="w-64 h-64 border-2 border-dashed border-gray-300 rounded-xl flex flex-col justify-center items-center text-center p-4">
            <div className="text-green-500 text-4xl mb-2">⬆️</div>
            <p className="text-[#4a8f4a] font-medium">Browse photo or drop here</p>
            <p className="text-gray-400 text-xs mt-1">
              A photo larger than 400 pixels<br />Max photo size 5MB.
            </p>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-medium">Name *</label>
            <input
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Last Name *</label>
            <input
              name="last_name"
              value={profile.last_name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 mt-1"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div>
            <label className="text-sm font-medium">Email *</label>
            <input
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Phone *</label>
            <input
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Language *</label>
            <select
              name="language"
              value={profile.language}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 mt-1"
            >
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-10 mb-2">Bio</h3>
        <textarea
          name="bio"
          value={profile.bio}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3 h-32"
        />

        <h3 className="text-lg font-semibold mt-10">Education *</h3>
        <textarea
          name="education"
          value={profile.education}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3 mt-3 h-12"
        />

        <h3 className="text-lg font-semibold mt-10">Skills *</h3>
        <textarea
          name="skills"
          value={profile.skills}
          onChange={handleChange}
          rows={4}
          className="w-full border border-gray-300 rounded-md p-3"
        />

        <h3 className="text-lg font-semibold mt-10">Experience *</h3>
        <textarea
          name="experience"
          value={profile.experience}
          onChange={handleChange}
          rows={4}
          className="w-full border border-gray-300 rounded-md p-3"
        />

        <div className="w-full flex justify-center mt-10 mb-10">
          <button
            onClick={handleSubmit}
            className="bg-[#0e1f40] text-white px-6 py-2 rounded-md hover:bg-[#13284f]"
          >
            Submit Application
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
