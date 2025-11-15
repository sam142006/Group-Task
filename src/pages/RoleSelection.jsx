import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

import boy from "../assets/boy.png";
import men from "../assets/men.png";
import infosys from "../assets/infosys.png";
import amazon from "../assets/amazon.png";
import googlename from "../assets/googlename.png";
import microsoft from "../assets/microsoft.png";
import accenture from "../assets/accenture.png";

import logo from "../assets/logo.png";

export default function RoleSelection() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-screen flex flex-col bg-white text-[#15294B] overflow-x-hidden">
      <div className="w-full bg-[#F6F8FB] py-5 shadow-sm flex justify-center items-center">
        <div className="flex items-center">
          <img src={logo} className="w-12" alt="NextStep Logo" />
          <h1 className="text-3xl ml-3 font-bold">NextStep</h1>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center py-16 w-full">
      
        <div className="flex justify-between items-center w-[90%] max-w-[1800px] mb-24">
          <div className="relative w-[600px] h-[500px] flex justify-center items-center">
            <img src={infosys} className="absolute top-0 left-[15%] w-24" alt="infosys" />
            <img src={amazon} className="absolute top-[10%] right-[20%] w-24" alt="amazon" />
            <img src={microsoft} className="absolute top-[40%] left-[0%] w-24" alt="microsoft" />
            <img src={googlename} className="absolute top-[45%] right-[0%] w-24" alt="google" />
            <img src={accenture} className="absolute bottom-[5%] left-[35%] w-24" alt="accenture" />

            <img src={boy} className="w-[250px] z-10" alt="boy illustration" />
          </div>

          <div className="w-[480px] bg-[#F6F8FB] rounded-2xl margin:10 p-10 shadow-lg hover:shadow-2xl transition-all">
            <h2 className="text-3xl font-semibold mb-4">Become a Candidate</h2>
            <p className="text-[#454545] text-base leading-relaxed">
              Connect with recruiters and take the next step in your career.
            </p>

            <button
              onClick={() => navigate("/jobseeker")}
              className="mt-8 w-full bg-[#15294B] hover:bg-[#0f1e34] text-white text-lg font-medium rounded-md py-3 transition"
            >
              Apply Now
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center w-[90%] max-w-[1800px]">
       
          <div className="w-[480px] bg-[#F6F8FB] rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all">
            <h2 className="text-3xl font-semibold mb-4">Become an Employer</h2>
            <p className="text-[#454545] text-base leading-relaxed">
              Hire the best talent for your team. Post jobs, manage applications,
              and grow your company effortlessly.
            </p>

            <button className="mt-8 w-full bg-[#15294B] hover:bg-[#0f1e34] text-white text-lg font-medium rounded-md py-3 transition">
              Start Hiring
            </button>
          </div>

          <div className="w-[650px] flex justify-center">
            <img src={men} className="w-full" alt="men illustration" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
