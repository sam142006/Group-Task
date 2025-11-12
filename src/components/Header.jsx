import React from 'react';

import logo from '../../assets/logo.png';
import profile from '../../assets/profile.png';
import indianFlag from '../../assets/indianFlag.png'; 

const Header = () => {
  return (
    <header className="w-full">
      
      <div className="bg-[#4b4b4b] text-white px-8 py-2 text-sm font-medium">
        Job Seeker(landing page)
      </div>
      
      <div className="flex items-center justify-between px-8 py-3 bg-white border-b border-gray-200 shadow-sm">
        
        <div className="mr-8 flex items-center">
         
          <img src={logo} alt="logo" className="h-9 w-auto" />
        </div>

        <div className="flex-grow max-w-xl flex items-center bg-gray-100 rounded-lg p-3 border border-gray-300 mr-auto">
          
          <i className="fas fa-search text-gray-500 text-lg mr-3"></i>
          
          <input 
            type="text" 
            placeholder="Search" 
            className="flex-grow border-none outline-none bg-transparent text-gray-700 placeholder-gray-500 text-base"
          />
          
          <i className="fas fa-microphone text-gray-500 text-lg ml-3 cursor-pointer"></i>
        </div>

        <div className="flex items-center space-x-4 ml-8">
          
          <button className="flex items-center space-x-2 px-5 py-3 bg-white text-gray-700 font-semibold text-base border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition">
            <i className="fas fa-home text-lg"></i> 
            <span>Home</span>
          </button>
          
          <button className="flex items-center space-x-2 px-5 py-3 bg-white text-gray-700 font-semibold text-base border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition">
          
            <span className="relative bg-[#1e3a5f] p-1.5 rounded-full flex items-center justify-center">
              <i className="fas fa-comments text-white text-base"></i>
            
              <span className="absolute top-0 right-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-red-500"></span>
            </span>
            <span>Chats</span>
          </button>
          
          <button className="flex items-center space-x-2 px-5 py-3 bg-white text-gray-700 font-semibold text-base border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition">
            <i className="fas fa-briefcase text-lg"></i> 
            <span>Jobs</span>
          </button>
        </div>

        <div className="flex items-center space-x-4 ml-6">
          
          <div className="relative cursor-pointer p-2">
            <i className="fas fa-bell text-gray-600 text-xl"></i>
           
            <span className="absolute top-1 right-1 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"></span>
          </div>

          <div className="flex items-center space-x-1.5 px-3 py-2 border border-gray-300 rounded-lg cursor-pointer">
            <img src={indianFlag} alt="India Flag" className="w-5 h-5 rounded-sm" />
            <i className="fas fa-caret-down text-gray-600 text-sm"></i>
          </div>
          
          <div className="bg-[#1e3a5f] w-12 h-12 flex items-center justify-center rounded-lg cursor-pointer">
           
            <img src={profile} alt="Profile" className="h-8 w-8 object-contain" />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;