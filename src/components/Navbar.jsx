import React from "react";
import logo from "../assets/logo.png";
import searchIcon from "../assets/search.png";
import micIcon from "../assets/mic.png";
import homeIcon from "../assets/home.png";
import chatIcon from "../assets/chat.png";
import jobIcon from "../assets/job.png";
import bellIcon from "../assets/bell.png";
import flagIcon from "../assets/flag.png";
import arrowDownIcon from "../assets/arrow-down.png";
import userIcon from "../assets/user.png";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#EBEDF0] border-b border-[#D9D9D9] flex items-center justify-between px-5 py-2 shadow-sm">
      <div className="flex items-center gap-2">
        <img src={logo} alt="NextStep Logo" className="w-8 h-8 object-contain" />
        <h1 className="text-[#15294B] text-lg font-semibold font-['Libre_Baskerville']">
          NextStep
        </h1>
      </div>

      <div className="flex items-center w-[320px] bg-white border border-[#E0E0E0] rounded-full px-3 py-[6px] shadow-sm">
        <img src={searchIcon} alt="Search" className="w-4 h-4 opacity-90" />
        <input
          type="text"
          placeholder="Search"
          className="ml-2 flex-1 outline-none bg-transparent text-sm text-[#15294B] font-['Poppins']"
        />
        <img src={micIcon} alt="Mic" className="w-4 h-4 opacity-90" />
      </div>

      <div className="flex items-center gap-3">
  <button className="flex items-center gap-1 bg-white px-4 py-2 rounded-xl shadow-sm border border-[#E0E0E0] hover:shadow-md transition">
    <img src={homeIcon} alt="Home" className="w-4 h-4" />
    <span className="text-[#15294B] font-medium font-['Poppins']">Home</span>
  </button>

  <button className="flex items-center gap-1 bg-white px-4 py-2 rounded-xl shadow-sm border border-[#E0E0E0] hover:shadow-md transition relative">
    <img src={chatIcon} alt="Chats" className="w-4 h-4" />
    <span className="text-[#15294B] font-medium font-['Poppins']">Chats</span>
    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1 rounded-full">2</span>
  </button>

  <button className="flex items-center gap-1 bg-white px-4 py-2 rounded-xl shadow-sm border border-[#E0E0E0] hover:shadow-md transition">
    <img src={jobIcon} alt="Jobs" className="w-4 h-4" />
    <span className="text-[#15294B] font-medium font-['Poppins']">Jobs</span>
  </button>
</div>


      <div className="flex items-center gap-4">
        <img src={bellIcon} alt="Notification" className="w-5 h-5 cursor-pointer" />

        <div className="flex items-center bg-white border border-[#E0E0E0] rounded-md px-2 py-1 shadow-sm cursor-pointer">
          <img src={flagIcon} alt="Flag" className="w-5 h-4 rounded-sm" />
          <img src={arrowDownIcon} alt="Dropdown" className="w-3 h-3 ml-1 opacity-80" />
        </div>

        <div className="bg-[#15294B] w-8 h-8 rounded-md flex items-center justify-center shadow-sm">
          <img src={userIcon} alt="User" className="w-5 h-5 object-contain" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
