import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import left from '../assets/left.png';
import right from '../assets/right.png';

function About() {
  return (
    <div>
      <Navbar />

      <div className="relative min-h-screen overflow-hidden px-5 py-10">
        <div className='flex flex-col md:grid md:grid-cols-3 gap-10 justify-center items-center'>

          <div className='hidden md:flex flex-col h-full justify-start'>
            <img src={left} alt="left" />
          </div>

          <div className='flex flex-col justify-center items-center'>
            
            <h1 className='font-serif text-2xl font-medium mb-3 text-[#3C4358]'>About NextStep</h1>
            <p className='text-center mb-10 text-lg'>
              Welcome to NextStep, a vibrant community dedicated to helping junior professionals
              in the creative field find their dream jobs. Connect with employers, showcase your
              talents, and take the next step in your career journey with us.
            </p>

            <h1 className='font-serif text-2xl font-medium mb-5 text-[#3C4358]'>Vision</h1>
            <p className='text-center mb-10 text-lg'>
              Our vision is to create unparalleled economic opportunities for every junior creative
              professional worldwide.
            </p>

            <h1 className='font-serif text-2xl font-medium mb-5 text-[#3C4358]'>Mission</h1>
            <p className='text-center mb-10 text-lg'>
              Our mission is simple: to connect junior creative professionals with opportunities
              that inspire and enable them to grow.
            </p>

            <h1 className='font-serif text-2xl font-medium mb-5 text-[#3C4358]'>Who are we?</h1>
            <p className='text-center mb-10 text-lg'>
              NextStep started as an idea in 2025 and has grown into a platform that connects
              talented individuals with innovative companies.
            </p>

          </div>

          <div className='hidden md:flex flex-col h-full justify-end'>
            <img src={right} alt="right" />
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
